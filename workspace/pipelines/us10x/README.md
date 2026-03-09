# US 10x Stock Pipeline (OpenClaw)

Goal: generate a repeatable, automated US-stock screening + scoring report for “10x potential” candidates, with max acceptable drawdown set to **-30%**.

## Output
- Reports: `~/workspace/openclaw-data/us10x-pipeline/reports/`
- Cache: `~/workspace/openclaw-data/us10x-pipeline/cache/`

## How it works (high level)
1. Universe: a ticker list (you choose scope)
2. Data fetch: price history + basic fundamentals + recent news (provider pluggable)
3. Filters: liquidity/price/mcap sanity checks
4. Scoring: multi-factor score (growth, momentum, quality, valuation, catalysts proxy)
5. Risk: drawdown-based guardrails (-30%) and “red flag” checks
6. Report: markdown + JSON (for later automation)

## Next step
Decide the **universe scope** (pick one):
- S&P 500
- Nasdaq 100
- Russell 3000
- All US-listed (bigger, slower)

Then we connect a data provider.
