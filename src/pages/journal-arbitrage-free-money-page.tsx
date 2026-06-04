import './home-page.css'
import './journal-strategy-proof-page.css'

const feeRows = [
  {
    venue: 'Bitvavo',
    tier: 'Category A spot, first public tier',
    maker: '0.15%',
    taker: '0.25%',
    mixed: '0.40%',
    takerRound: '0.50%',
    href: 'https://bitvavo.com/en/fees',
  },
  {
    venue: 'Kraken Pro',
    tier: 'Spot crypto, first public tier',
    maker: '0.25%',
    taker: '0.40%',
    mixed: '0.65%',
    takerRound: '0.80%',
    href: 'https://www.kraken.com/features/fee-schedule',
  },
  {
    venue: 'Coinbase Exchange',
    tier: 'Exchange spot, first public tier',
    maker: '0.40%',
    taker: '0.60%',
    mixed: '1.00%',
    takerRound: '1.20%',
    href: 'https://help.coinbase.com/en/exchange/trading-and-funding/exchange-fees',
  },
  {
    venue: 'Gemini ActiveTrader',
    tier: 'Spot, first public tier',
    maker: '0.60%',
    taker: '1.20%',
    mixed: '1.80%',
    takerRound: '2.40%',
    href: 'https://www.gemini.com/fees/activetrader-fee-schedule',
  },
] as const

export function JournalArbitrageFreeMoneyPage() {
  return (
    <div className="journal-post-root">
      <article className="post-article">
        <div className="container post-container">
          <header className="post-header">
            <div className="post-header-meta">
              <span className="post-cat">Strategy economics</span>
              <span className="post-sep">·</span>
              <span>8 min read</span>
              <span className="post-sep">·</span>
              <span>June 2026</span>
            </div>
            <h1 className="post-headline">
              When arbitrage stops<br />
              being free money.<br />
              <span className="lime">The receipt arrives first.</span>
            </h1>
            <p className="post-deck">
              A tiny price gap between exchanges is a beautiful thing on a screen. Then the trade pays entry fees, exit fees,
              spread, slippage, failed timing, and tax-aware accounting. The gap can be real and still not be worth touching.
            </p>
            <div className="post-byline">
              <span className="byline-mark">OF</span>
              <div>
                <div className="byline-name">OptFi Research</div>
                <div className="byline-sub">CEX proof loop · Berlin</div>
              </div>
            </div>
          </header>

          <div className="pull-bar">
            <blockquote className="pull-quote">
              "The market can offer you a gap.<br />
              The exchange sends you a <span className="lime">receipt.</span>"
            </blockquote>
          </div>

          <div className="post-body">
            <p>
              The first time you look at crypto arbitrage, it feels almost rude that money can be sitting in public.
              BTC is a few basis points cheaper over here, a few basis points richer over there. Buy here. Sell there.
              Collect the difference. Repeat until the spreadsheet smiles.
            </p>

            <p>
              That is the toy version. The real version is a cashier with excellent memory.
            </p>

            <p>
              The buy has a fee. The sell has a fee. If the order has to execute now, the trade often pays taker fees.
              If the order waits for maker treatment, the opportunity may vanish while the order is politely resting in the book.
              The visible spread is not the executable spread. The executable spread is what remains after the exchange, the book,
              the clock, and the tax ledger have all had their turn.
            </p>

            <h2>The fee table is not fine print</h2>

            <p>
              On June 4, 2026, we checked public first-tier spot fee schedules across several exchanges. These are not
              personalised account terms and they can change. They are enough to show the shape of the problem.
            </p>

            <div className="data-card">
              <div className="data-card-header">
                <span className="data-label">Public spot fee examples · first listed tiers · checked June 4, 2026</span>
              </div>
              <div className="data-table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Venue</th>
                      <th className="num">Maker</th>
                      <th className="num">Taker</th>
                      <th className="num">Maker + taker</th>
                      <th className="num">Two takers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeRows.map((row) => (
                      <tr key={row.venue}>
                        <td>
                          <a href={row.href} target="_blank" rel="noreferrer">
                            <strong>{row.venue}</strong>
                          </a>
                          <br />
                          <span className="fixture-regime">{row.tier}</span>
                        </td>
                        <td className="num">{row.maker}</td>
                        <td className="num warn">{row.taker}</td>
                        <td className="num warn">{row.mixed}</td>
                        <td className="num neg">{row.takerRound}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="data-card-footer">
                <span>Links go to the public fee pages.</span>
                <span>Excludes spread, slippage, funding delay, withdrawal fees, and tax effects.</span>
              </div>
            </div>

            <p>
              The important column is not the cheapest maker number. It is the round trip. A 0.50% visible gap is already
              in trouble if the trade has to cross the spread twice. A mixed maker-plus-taker round trip can consume
              0.40% to 1.80% before the strategy has proved anything clever.
            </p>

            <p>
              This is the lesson that ruins most casual arbitrage stories. The spread is not revenue. The spread is the
              gross ingredient. You only learn whether it is edible after execution.
            </p>

            <h2>The receipt has four lines</h2>

            <div className="next-steps">
              <div className="next-steps-header">
                <span>Receipt stack</span>
              </div>
              <ul className="next-steps-list">
                <li>
                  <span className="next-num">01</span>
                  <div>
                    <strong>Entry cost</strong>
                    <p>The first order pays maker or taker. If timing matters, the market usually charges for urgency.</p>
                  </div>
                </li>
                <li>
                  <span className="next-num">02</span>
                  <div>
                    <strong>Exit cost</strong>
                    <p>The second order pays again. Arbitrage is rarely one execution. It is a pair of executions that both have to behave.</p>
                  </div>
                </li>
                <li>
                  <span className="next-num">03</span>
                  <div>
                    <strong>Spread and slippage</strong>
                    <p>The displayed top of book is not a promise. Size, latency, and queue position change the real fill.</p>
                  </div>
                </li>
                <li>
                  <span className="next-num">04</span>
                  <div>
                    <strong>Tax and accounting drag</strong>
                    <p>Germany-first means churn is not neutral. Every short-horizon exit needs a record, a basis, and a reason.</p>
                  </div>
                </li>
              </ul>
            </div>

            <p>
              None of this means arbitrage is imaginary. It means the obvious version is usually not yours. The firms that can
              make tiny gaps matter tend to have lower fees, better inventory positioning, faster settlement, tighter routing,
              and fewer operational surprises. A solo operator paying ordinary public tiers has to start with humility.
            </p>

            <h2>The trade can be right and still wrong</h2>

            <p>
              This is where OptFi's current CEX proof loop becomes useful, even while it is still blocked. The system is not asking,
              "can we find a green line?" It is asking, "does the line survive the receipt?"
            </p>

            <div className="callout">
              <div className="callout-icon">!</div>
              <div>
                <div className="callout-title">Current OptFi decision</div>
                <p className="callout-body">
                  The latest CEX proof remains blocked. That is the correct decision. Fresh evidence that fails after-cost,
                  after-tax-aware gates is not a tragedy. It is a strategy saying no before capital gets involved.
                </p>
              </div>
            </div>

            <p>
              This also changes what we should research next. High-churn micro-arbitrage is a brutal place to start if the fee
              stack is already larger than the edge. The more promising direction is boring: lower turnover, wider expected edge,
              fewer taxable events, fewer fills, and a proof window that survives retail execution assumptions.
            </p>

            <h2>The new rule</h2>

            <p>
              The post-mortem is simple: if a strategy needs tiny gaps, it must have institutional-grade costs. If it has ordinary
              costs, it needs a wider edge. If it has neither, it is not a strategy. It is an invoice with a chart attached.
            </p>

            <div className="stat-strip">
              <div className="stat-item">
                <span className="stat-num lime">0</span>
                <span className="stat-label">CEX strategies promoted today</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">4</span>
                <span className="stat-label">cost lines before tax review is done</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">1</span>
                <span className="stat-label">rule: prove what survives</span>
              </div>
            </div>

            <div className="post-footer-nav">
              <a href="/journal" className="post-back">← Back to the journal</a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
