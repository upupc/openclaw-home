#!/Users/liuyuan/miniforge3/bin/python3
"""US 10x screening pipeline (v1).

What it does:
- Reads config.yaml
- Loads ticker universe (Nasdaq-100)
- Fetches daily prices via Stooq CSV (free)
- Computes basic price metrics: returns, volatility, max drawdown, avg $ volume
- Fetches lightweight fundamentals + sector/industry via yfinance (cached by Yahoo)
- Applies filters:
  - Liquidity/price
  - Risk hard constraint: 12m max drawdown <= configured threshold
  - Basic fundamentals guardrails
- Scores remaining tickers with a simple multi-factor score
- Outputs Top-N report (md + json)

Notes:
- yfinance can be rate-limited; we cache responses per-run and keep the request count small.
- This is not investment advice; it's a screening tool.
"""

from __future__ import annotations

import dataclasses
import datetime as dt
import json
import math
import os
import pathlib
import re
import sys
import textwrap
from typing import Any

import urllib.request

try:
    import yaml  # type: ignore
except Exception:
    print("Missing dependency: pyyaml. Install with: /Users/liuyuan/miniforge3/bin/pip install pyyaml", file=sys.stderr)
    raise

try:
    import yfinance as yf  # type: ignore
except Exception:
    print("Missing dependency: yfinance. Install with: /Users/liuyuan/miniforge3/bin/pip install yfinance", file=sys.stderr)
    raise


DATA_ROOT = pathlib.Path(os.path.expanduser("~/workspace/openclaw-data/us10x-pipeline"))


def load_config(path: pathlib.Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as f:
        return yaml.safe_load(f)


def load_tickers(path: pathlib.Path) -> list[str]:
    if not path.exists():
        raise FileNotFoundError(f"Tickers file not found: {path}")
    tickers: list[str] = []
    for line in path.read_text(encoding="utf-8").splitlines():
        s = line.strip().upper()
        if not s or s.startswith("#"):
            continue
        if not re.fullmatch(r"[A-Z\.\-]{1,10}", s):
            continue
        tickers.append(s)
    return sorted(set(tickers))


def stooq_url(ticker: str) -> str:
    # Stooq uses lower-case and suffixes: US stocks often like aapl.us
    # We'll try two common forms.
    t = ticker.lower()
    return f"https://stooq.com/q/d/l/?s={t}.us&i=d"


def fetch_stooq_daily(ticker: str) -> list[dict[str, Any]]:
    url = stooq_url(ticker)
    try:
        with urllib.request.urlopen(url, timeout=20) as resp:
            raw = resp.read().decode("utf-8", errors="replace")
    except Exception:
        return []

    lines = [ln.strip() for ln in raw.splitlines() if ln.strip()]
    if len(lines) < 2 or not lines[0].lower().startswith("date,"):
        return []

    out: list[dict[str, Any]] = []
    for ln in lines[1:]:
        parts = ln.split(",")
        if len(parts) < 6:
            continue
        d, o, h, l, c, v = parts[:6]
        try:
            out.append(
                {
                    "date": d,
                    "open": float(o),
                    "high": float(h),
                    "low": float(l),
                    "close": float(c),
                    "volume": float(v),
                }
            )
        except Exception:
            continue
    return out


def pct(a: float, b: float) -> float:
    if b == 0:
        return 0.0
    return a / b - 1.0


def max_drawdown(closes: list[float]) -> float:
    peak = -math.inf
    mdd = 0.0
    for x in closes:
        peak = max(peak, x)
        if peak > 0:
            mdd = min(mdd, x / peak - 1.0)
    return abs(mdd)


def stdev(xs: list[float]) -> float:
    if len(xs) < 2:
        return 0.0
    mu = sum(xs) / len(xs)
    var = sum((x - mu) ** 2 for x in xs) / (len(xs) - 1)
    return math.sqrt(var)


@dataclasses.dataclass
class Fundamentals:
    market_cap: float | None = None
    revenue_growth_yoy: float | None = None
    gross_margin: float | None = None
    operating_margin: float | None = None
    free_cashflow: float | None = None
    total_debt: float | None = None
    cash: float | None = None
    trailing_pe: float | None = None
    forward_pe: float | None = None
    sector: str | None = None
    industry: str | None = None


@dataclasses.dataclass
class Row:
    ticker: str
    close: float
    avg_dollar_vol_20d: float
    ret_3m: float
    ret_12m: float
    vol_3m: float
    mdd_12m: float
    fundamentals: Fundamentals
    fundamentals_score: float
    theme_score: float
    score: float


def _safe_float(x: Any) -> float | None:
    try:
        if x is None:
            return None
        if isinstance(x, str) and not x.strip():
            return None
        v = float(x)
        if math.isnan(v) or math.isinf(v):
            return None
        return v
    except Exception:
        return None


def fetch_fundamentals_yf(ticker: str) -> Fundamentals:
    try:
        t = yf.Ticker(ticker)
        info = getattr(t, "info", {}) or {}
    except Exception:
        info = {}

    f = Fundamentals(
        market_cap=_safe_float(info.get("marketCap")),
        revenue_growth_yoy=_safe_float(info.get("revenueGrowth")),
        gross_margin=_safe_float(info.get("grossMargins")),
        operating_margin=_safe_float(info.get("operatingMargins")),
        free_cashflow=_safe_float(info.get("freeCashflow")),
        total_debt=_safe_float(info.get("totalDebt")),
        cash=_safe_float(info.get("totalCash")),
        trailing_pe=_safe_float(info.get("trailingPE")),
        forward_pe=_safe_float(info.get("forwardPE")),
        sector=(info.get("sector") or None),
        industry=(info.get("industry") or None),
    )
    return f


def compute_fundamentals_score(f: Fundamentals) -> float:
    # Keep it simple: reward growth + margins + FCF, penalize leverage.
    s = 0.0
    if f.revenue_growth_yoy is not None:
        s += max(-0.5, min(0.5, f.revenue_growth_yoy))  # clamp
    if f.gross_margin is not None:
        s += (f.gross_margin - 0.3)  # centered around 30%
    if f.operating_margin is not None:
        s += (f.operating_margin - 0.15)
    if f.free_cashflow is not None and f.market_cap is not None and f.market_cap > 0:
        fcf_yield = f.free_cashflow / f.market_cap
        s += max(-0.2, min(0.2, fcf_yield))
    if f.total_debt is not None and f.cash is not None:
        net_debt = f.total_debt - f.cash
        # Penalize heavy net debt (very rough).
        s -= max(0.0, min(0.3, net_debt / 1e11))
    return s


def compute_theme_score(f: Fundamentals) -> float:
    # (B) crude theme score based on sector/industry keywords.
    sector = (f.sector or "").lower()
    industry = (f.industry or "").lower()
    text = sector + " | " + industry

    themes = {
        "semis": ["semiconductor", "chip", "fab", "equipment"],
        "ai_software": ["software", "data", "cloud", "cyber", "platform"],
        "biotech": ["biotech", "pharmaceutical", "therapeutics"],
        "energy": ["energy", "oil", "gas", "renewable"],
    }

    score = 0.0
    for kws in themes.values():
        if any(k in text for k in kws):
            score += 0.25
    return min(1.0, score)


def score_row(
    ret_3m: float,
    ret_12m: float,
    vol_3m: float,
    mdd_12m: float,
    fundamentals_score: float,
    theme_score: float,
    w: dict[str, float],
) -> float:
    s = 0.0
    s += w.get("momentum_3m", 0) * ret_3m
    s += w.get("momentum_12m", 0) * ret_12m
    s -= w.get("volatility_penalty", 0) * vol_3m
    s -= w.get("drawdown_penalty", 0) * mdd_12m
    s += w.get("fundamentals_score", 0) * fundamentals_score
    s += w.get("theme_score", 0) * theme_score
    return s


def main() -> int:
    here = pathlib.Path(__file__).resolve().parent
    cfg = load_config(here / "config.yaml")

    tickers_path = pathlib.Path(os.path.expanduser(cfg["universe"]["tickers_path"]))
    tickers = load_tickers(tickers_path)
    if not tickers:
        print(f"No tickers loaded from {tickers_path}")
        return 2

    top_n = int(cfg["report"]["top_n"])
    out_dir = pathlib.Path(os.path.expanduser(cfg["report"]["out_dir"]))
    out_dir.mkdir(parents=True, exist_ok=True)

    w = cfg.get("scoring", {}).get("weights", {})

    min_price = float(cfg.get("filters", {}).get("min_price", 0.0))
    min_adv = float(cfg.get("filters", {}).get("min_avg_dollar_volume_20d", 0.0))
    max_mdd = float(cfg.get("filters", {}).get("max_mdd_12m", 1.0))

    fund_cfg = cfg.get("fundamentals", {})
    min_mcap = float(fund_cfg.get("min_market_cap", 0.0))
    min_gm = float(fund_cfg.get("min_gross_margin", -1.0))
    min_rg = float(fund_cfg.get("min_revenue_growth_yoy", -1.0))

    rows: list[Row] = []
    for t in tickers:
        data = fetch_stooq_daily(t)
        if len(data) < 260:
            continue

        closes = [d["close"] for d in data]
        vols = [d["volume"] for d in data]
        close = closes[-1]
        if close < min_price:
            continue

        # avg $ volume (20d)
        if len(closes) >= 20:
            adv = sum(closes[-i] * vols[-i] for i in range(1, 21)) / 20.0
        else:
            adv = 0.0
        if adv < min_adv:
            continue

        # 3m ~ 63 trading days; 12m ~ 252
        ret_3m = pct(closes[-1], closes[-63]) if len(closes) >= 63 else 0.0
        ret_12m = pct(closes[-1], closes[-252]) if len(closes) >= 252 else 0.0

        rets_3m = [pct(closes[i], closes[i - 1]) for i in range(len(closes) - 63, len(closes)) if i - 1 >= 0]
        vol_3m = stdev(rets_3m)

        mdd_12m = max_drawdown(closes[-252:])
        # (C) hard constraint
        if mdd_12m > max_mdd:
            continue

        # (A) fundamentals guardrails
        f = fetch_fundamentals_yf(t)
        if f.market_cap is not None and f.market_cap < min_mcap:
            continue
        if f.gross_margin is not None and f.gross_margin < min_gm:
            continue
        if f.revenue_growth_yoy is not None and f.revenue_growth_yoy < min_rg:
            continue

        fundamentals_score = compute_fundamentals_score(f)
        theme_score = compute_theme_score(f)

        score = score_row(ret_3m, ret_12m, vol_3m, mdd_12m, fundamentals_score, theme_score, w)

        rows.append(
            Row(
                ticker=t,
                close=close,
                avg_dollar_vol_20d=adv,
                ret_3m=ret_3m,
                ret_12m=ret_12m,
                vol_3m=vol_3m,
                mdd_12m=mdd_12m,
                fundamentals=f,
                fundamentals_score=fundamentals_score,
                theme_score=theme_score,
                score=score,
            )
        )

    rows.sort(key=lambda r: r.score, reverse=True)
    top = rows[:top_n]

    ts = dt.datetime.now().strftime("%Y%m%d-%H%M%S")
    md_path = out_dir / f"us10x-report-{ts}.md"
    json_path = out_dir / f"us10x-report-{ts}.json"

    md = [
        f"# US 10x Screen Report\n",
        f"Generated: {dt.datetime.now().isoformat(timespec='seconds')}\n",
        f"Universe size (input): {len(tickers)}\n",
        f"Ranked size (after filters): {len(rows)}\n",
        "\n",
        "| Rank | Ticker | Close | ADV20($) | 3m | 12m | Vol(3m) | MDD(12m) | F-score | Theme | Sector | Score |\n",
        "|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|\n",
    ]

    for i, r in enumerate(top, 1):
        sector = (r.fundamentals.sector or "").replace("|", "/")
        md.append(
            f"| {i} | {r.ticker} | {r.close:.2f} | {r.avg_dollar_vol_20d/1e6:.1f}M | {r.ret_3m*100:.1f}% | {r.ret_12m*100:.1f}% | {r.vol_3m*100:.2f}% | {r.mdd_12m*100:.1f}% | {r.fundamentals_score:.3f} | {r.theme_score:.2f} | {sector} | {r.score:.4f} |\n"
        )

    md_path.write_text("".join(md), encoding="utf-8")
    def row_to_dict(r: Row) -> dict[str, Any]:
        d = dataclasses.asdict(r)
        # flatten a few useful fields
        d["sector"] = r.fundamentals.sector
        d["industry"] = r.fundamentals.industry
        return d

    json_path.write_text(json.dumps([row_to_dict(r) for r in top], ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"Wrote: {md_path}")
    print(f"Wrote: {json_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
