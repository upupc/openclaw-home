import math
import backtrader as bt
import yfinance as yf
import pandas as pd


class MonthlyRSIRotation(bt.Strategy):
    """
    每月调仓：从股票池中选 RSI(14) 最强的前 N 只，等权持有。
    - 每月首个交易日执行一次再平衡
    - 卖出不在 Top N 的持仓
    - 买入/调整到目标权重
    """

    params = dict(
        rsi_period=14,
        top_n=5,
        reserve_cash=0.02,   # 保留现金比例，避免下单因现金不足失败
        min_history=60,      # 至少有多少根K线才参与排名
        printlog=True,
    )

    def __init__(self):
        self.rsis = {d: bt.ind.RSI(d.close, period=self.p.rsi_period) for d in self.datas}
        self.current_month = None

    def log(self, txt):
        if self.p.printlog:
            dt = self.datas[0].datetime.date(0)
            print(f"{dt} | {txt}")

    def next(self):
        dt = self.datas[0].datetime.date(0)
        # 仅在每月第一次进入新月份时调仓
        if self.current_month == (dt.year, dt.month):
            return
        self.current_month = (dt.year, dt.month)

        candidates = []
        for d in self.datas:
            if len(d) < self.p.min_history:
                continue
            rsi_val = self.rsis[d][0]
            if math.isnan(rsi_val):
                continue
            candidates.append((d, rsi_val))

        if not candidates:
            self.log("没有可用候选（历史数据不足或RSI无效），本月不调仓")
            return

        # 按 RSI 从高到低排序，选 top N
        candidates.sort(key=lambda x: x[1], reverse=True)
        selected = [d for d, _ in candidates[: self.p.top_n]]
        selected_names = [d._name for d in selected]
        self.log(f"本月选中: {selected_names}")

        # 1) 先把不在选中列表里的仓位清掉
        for d in self.datas:
            pos = self.getposition(d)
            if pos.size != 0 and d not in selected:
                self.order_target_percent(d, target=0.0)

        # 2) 对选中的股票做等权重配置
        if selected:
            target_weight = (1.0 - self.p.reserve_cash) / len(selected)
            for d in selected:
                self.order_target_percent(d, target=target_weight)

    def stop(self):
        self.log(f"最终组合净值: {self.broker.getvalue():.2f}")



def fetch_data(symbol: str, start: str, end: str) -> pd.DataFrame:
    df = yf.download(symbol, start=start, end=end, auto_adjust=True, progress=False)
    if df is None or df.empty:
        return pd.DataFrame()

    # Backtrader 的 PandasData 默认识别 open/high/low/close/volume
    df = df.rename(columns=str.lower)
    # 清理空值
    df = df.dropna(subset=["open", "high", "low", "close", "volume"])
    return df



def run_backtest():
    symbols = [
        "AAPL", "MSFT", "NVDA", "AMZN", "GOOGL", "META", "TSLA",
        "AMD", "AVGO", "NFLX", "ADBE", "CRM", "INTC", "QCOM"
    ]

    start = "2020-01-01"
    end = "2026-01-01"

    cerebro = bt.Cerebro()
    cerebro.broker.setcash(100000.0)
    cerebro.broker.setcommission(commission=0.001)  # 0.1%

    # 加入数据
    loaded = 0
    for s in symbols:
        df = fetch_data(s, start, end)
        if df.empty:
            print(f"跳过 {s}: 无数据")
            continue
        data = bt.feeds.PandasData(dataname=df, name=s)
        cerebro.adddata(data)
        loaded += 1

    if loaded == 0:
        raise RuntimeError("没有加载到任何股票数据，请检查网络或代码")

    # 策略
    cerebro.addstrategy(
        MonthlyRSIRotation,
        rsi_period=14,
        top_n=5,
        reserve_cash=0.02,
        min_history=60,
        printlog=True,
    )

    # 分析器
    cerebro.addanalyzer(bt.analyzers.SharpeRatio, _name="sharpe", timeframe=bt.TimeFrame.Days)
    cerebro.addanalyzer(bt.analyzers.DrawDown, _name="drawdown")
    cerebro.addanalyzer(bt.analyzers.Returns, _name="returns")
    cerebro.addanalyzer(bt.analyzers.TradeAnalyzer, _name="trades")

    print(f"初始资金: {cerebro.broker.getvalue():.2f}")
    results = cerebro.run()
    strat = results[0]
    final_value = cerebro.broker.getvalue()
    print(f"结束资金: {final_value:.2f}")

    print("\n=== 回测指标 ===")
    print("Sharpe:", strat.analyzers.sharpe.get_analysis())
    print("Drawdown:", strat.analyzers.drawdown.get_analysis())
    print("Returns:", strat.analyzers.returns.get_analysis())
    print("Trades:", strat.analyzers.trades.get_analysis())

    # 画图（本地环境支持图形界面时可打开）
    # cerebro.plot(style="candlestick")


if __name__ == "__main__":
    run_backtest()
