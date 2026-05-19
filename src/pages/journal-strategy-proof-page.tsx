import './home-page.css'
import './journal-strategy-proof-page.css'

export function JournalStrategyProofPage() {
  return (
    <div className="journal-post-root">
      {/* Article */}
      <article className="post-article">
        <div className="container post-container">

          {/* Header */}
          <header className="post-header">
            <div className="post-header-meta">
              <span className="post-cat">Strategy thinking</span>
              <span className="post-sep">·</span>
              <span>14 min read</span>
              <span className="post-sep">·</span>
              <span>May 2026</span>
            </div>
            <h1 className="post-headline">
              28 strategies walked into the lab.<br />
              Zero promoted.<br />
              <span className="lime">Here is what that means.</span>
            </h1>
            <p className="post-deck">
              We ran two years of real Kraken price data through every strategy candidate
              we have. Not a single one cleared the promotion gate. This is not a failure
              report. It is proof the gate works.
            </p>
            <div className="post-byline">
              <span className="byline-mark">OF</span>
              <div>
                <div className="byline-name">OptFi Research</div>
                <div className="byline-sub">Strategy Lab · Berlin</div>
              </div>
            </div>
          </header>

          {/* Pull quote */}
          <div className="pull-bar">
            <blockquote className="pull-quote">
              "A backtest that always finds a winner is not a research tool.<br />
              It is a <span className="lime">story generator.</span>"
            </blockquote>
          </div>

          {/* Body */}
          <div className="post-body">

            <p>
              On May 11, 2026, we pulled 721 daily candles from Kraken — covering BTC, ETH, and SOL
              from May 2024 through the present. We ran every strategy variant we have been developing
              against that dataset using a walk-forward split: 90% in-sample, 10% held out as
              out-of-sample. Then we checked the results against all three of OptFi's canonical
              simulation fixtures. Then we applied real Kraken fees and realistic slippage.
            </p>

            <p>
              Every single strategy landed on <strong>Watch</strong>.
              None promoted.
            </p>

            <p>
              We are writing about this because the reaction you might expect — "that's bad news" —
              is exactly backwards. The system is doing what it was designed to do. The harder
              question is <em>why</em> each strategy failed, and what that tells us about what
              a genuinely robust strategy actually looks like.
            </p>

            <h2>Who was in the room</h2>

            <p>
              Before we get to the results, a brief introduction to the cast. The 28 variants
              belong to seven distinct strategy families — each with a different theory about
              how to make money in crypto markets.
            </p>

            {/* Strategy families grid */}
            <div className="strategy-families">
              <div className="strategy-family">
                <div className="sf-icon">↗</div>
                <div>
                  <div className="sf-name">Trend Following</div>
                  <p className="sf-desc">Waits for the market to pick a direction, then rides it. Uses moving average crossovers as the signal and a volatility filter to avoid trading when the market is too quiet to have meaningful direction. Goes to cash when the trend reverses. Misses tops and bottoms by design.</p>
                </div>
              </div>
              <div className="strategy-family">
                <div className="sf-icon">⚡</div>
                <div>
                  <div className="sf-name">Breakout</div>
                  <p className="sf-desc">Watches for an asset to surge meaningfully above its recent average — a signal that something structural may have changed. Enters on the surge, exits when the momentum fades back. Sits in cash during calm periods. Requires a sharp move to trigger; does nothing in sideways markets.</p>
                </div>
              </div>
              <div className="strategy-family">
                <div className="sf-icon">⇌</div>
                <div>
                  <div className="sf-name">Rebalance</div>
                  <p className="sf-desc">Maintains a target allocation across assets and rebalances when drift gets too large. No market prediction required — it systematically sells what has run up and buys what has lagged. Earns its keep in choppy, mean-reverting markets. Underperforms in strong single-direction trends.</p>
                </div>
              </div>
              <div className="strategy-family">
                <div className="sf-icon">↩</div>
                <div>
                  <div className="sf-name">Mean Reversion</div>
                  <p className="sf-desc">Bets that prices which have moved unusually far from their recent average will snap back. Buys the dip, exits the recovery. Works best when volatility is high and trends are short-lived. Loses badly if the dip keeps going — which is why the gate on max drawdown matters.</p>
                </div>
              </div>
              <div className="strategy-family">
                <div className="sf-icon">⟲</div>
                <div>
                  <div className="sf-name">Rotation</div>
                  <p className="sf-desc">Shifts capital between assets based on relative momentum — selling the underperformer and buying the one showing relative strength. Does not take a view on the overall market direction; only on which asset is currently winning the race.</p>
                </div>
              </div>
              <div className="strategy-family">
                <div className="sf-icon">▽</div>
                <div>
                  <div className="sf-name">Dip Buy</div>
                  <p className="sf-desc">Waits for a meaningful drawdown from recent highs before entering. Holds a parked position most of the time and deploys capital only when the price has fallen a defined percentage. Patient by construction — can go months without a trade in a strong uptrend.</p>
                </div>
              </div>
              <div className="strategy-family">
                <div className="sf-icon">◈</div>
                <div>
                  <div className="sf-name">Parked Regime</div>
                  <p className="sf-desc">Uses BTC as a market bellwether. When BTC is in a confirmed regime (trending up, trending down), shifts between a risk-on allocation and a mostly-cash parked position. Tries to be aggressive when conditions are good and defensive when they are not.</p>
                </div>
              </div>
            </div>

            <p>
              None of these families is obviously superior. Each has a regime where it excels
              and one where it fails. That is exactly why testing across three different synthetic
              market regimes matters — a strategy that only works in one environment is not a
              strategy, it is a description of that environment.
            </p>

            <h2>What the scorecard actually measured</h2>

            <p>
              The sweep ran 28 strategy variants across three evaluation axes simultaneously:
              performance in the training window, performance on the holdout, and the gap between
              the two. Here is the top of the table — the strategies that came closest to clearing:
            </p>

            {/* Data table */}
            <div className="data-card">
              <div className="data-card-header">
                <span className="data-label">Live Kraken Daily · 721 candles · phase1_rolling_v1 policy · 10% OOS split</span>
              </div>
              <div className="data-table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Strategy</th>
                      <th className="num">In-sample</th>
                      <th className="num">Out-of-sample</th>
                      <th className="num">Gap</th>
                      <th className="num">OOS max dd</th>
                      <th>Decision</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="row-highlight">
                      <td><span className="mono">trend_16_42</span></td>
                      <td className="num pos">+9.80%</td>
                      <td className="num pos">+6.50%</td>
                      <td className="num">3.29</td>
                      <td className="num warn">11.87%</td>
                      <td><span className="badge-watch">Watch</span></td>
                    </tr>
                    <tr className="row-highlight">
                      <td><span className="mono">trend_slow_20_50</span></td>
                      <td className="num pos">+32.18%</td>
                      <td className="num pos">+6.50%</td>
                      <td className="num warn">25.68</td>
                      <td className="num warn">11.87%</td>
                      <td><span className="badge-watch">Watch</span></td>
                    </tr>
                    <tr>
                      <td><span className="mono">rebalance_fee_aware_8</span></td>
                      <td className="num neg">−11.98%</td>
                      <td className="num pos">+15.77%</td>
                      <td className="num warn">27.76</td>
                      <td className="num">11.15%</td>
                      <td><span className="badge-watch">Watch</span></td>
                    </tr>
                    <tr>
                      <td><span className="mono">rebalance_conservative</span></td>
                      <td className="num neg">−15.51%</td>
                      <td className="num pos">+15.48%</td>
                      <td className="num warn">30.99</td>
                      <td className="num">10.85%</td>
                      <td><span className="badge-watch">Watch</span></td>
                    </tr>
                    <tr>
                      <td><span className="mono">mean_reversion_btc</span></td>
                      <td className="num neg">−1.89%</td>
                      <td className="num pos">+2.77%</td>
                      <td className="num">4.67</td>
                      <td className="num">0.68%</td>
                      <td><span className="badge-watch">Watch</span></td>
                    </tr>
                    <tr>
                      <td><span className="mono">breakout_sol_18_54</span></td>
                      <td className="num pos">+0.14%</td>
                      <td className="num pos">+1.17%</td>
                      <td className="num">1.03</td>
                      <td className="num">0.47%</td>
                      <td><span className="badge-watch">Watch</span></td>
                    </tr>
                    <tr className="row-dim">
                      <td><span className="mono">breakout_btc_30_90</span></td>
                      <td className="num pos">+27.28%</td>
                      <td className="num muted">0.00%</td>
                      <td className="num warn">27.28</td>
                      <td className="num muted">0.00%</td>
                      <td><span className="badge-watch">Watch</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="data-card-footer">
                <span>Selected rows. Full table: 28 variants.</span>
                <span>fee=0.26% · slippage=0.10% · cash=€10,000</span>
              </div>
            </div>

            <h2>The three stories in this data</h2>

            <h3>Story 1: The trend family is our best candidate — and still not good enough</h3>

            <p>
              <span className="mono lime">trend_16_42</span> is the cleanest result in the table. Positive
              in-sample. Positive out-of-sample. A gap of 3.29 — modest compared to most of its peers.
              In a typical backtest framework, this would be a "publish the results" moment.
            </p>

            <p>
              We took it further. We ran it against all three of OptFi's canonical simulation fixtures —
              three synthetic market regimes designed to stress-test different failure modes:
              <strong> Trend Chop Shock</strong> (a market that trends, then chops, then shocks),
              <strong> Multi-Swing Rotation</strong> (assets rotating leadership), and
              <strong> Recovery Accumulation</strong> (a post-crash bounce market).
            </p>

            {/* Fixture results grid */}
            <div className="fixture-grid">
              <div className="fixture-card">
                <div className="fixture-header">
                  <span className="fixture-name">Trend Chop Shock</span>
                  <span className="fixture-regime">Trending → Choppy → Shock</span>
                </div>
                <div className="fixture-result reject">
                  <span className="fixture-verdict">0 promotes</span>
                  <span className="fixture-detail">Top: <span className="mono">parked_btc_trend_regime_60</span></span>
                  <span className="fixture-detail">trend_16_42: not ranked</span>
                </div>
                <div className="fixture-blocker">
                  Blockers: OOS below threshold · insufficient OOS activity · gap too large
                </div>
              </div>

              <div className="fixture-card">
                <div className="fixture-header">
                  <span className="fixture-name">Multi-Swing Rotation</span>
                  <span className="fixture-regime">Asset leadership rotates</span>
                </div>
                <div className="fixture-result watch">
                  <span className="fixture-verdict">0 promotes · 7 watch</span>
                  <span className="fixture-detail">Under stress: top = <span className="mono">trend_16_42</span></span>
                  <span className="fixture-detail">Under real fees: not promoted</span>
                </div>
                <div className="fixture-blocker">
                  Blockers: gap too large · in-sample negative · OOS below threshold
                </div>
              </div>

              <div className="fixture-card promote">
                <div className="fixture-header">
                  <span className="fixture-name">Recovery Accumulation</span>
                  <span className="fixture-regime">Post-crash bounce</span>
                </div>
                <div className="fixture-result promote-inner">
                  <span className="fixture-verdict lime">2 promotes (baseline)</span>
                  <span className="fixture-detail">Top: <span className="mono">trend_16_42</span> ✓</span>
                  <span className="fixture-detail neg">With real fees: collapses to 0</span>
                </div>
                <div className="fixture-blocker">
                  Fee sensitivity: the edge that exists at zero cost evaporates at 0.26% taker
                </div>
              </div>
            </div>

            <p>
              <span className="mono lime">trend_16_42</span> promotes on one fixture out of three — and
              only under zero-cost assumptions. The moment we apply real Kraken taker fees (0.26%) and
              10 basis points of slippage, the promotion disappears.
            </p>

            <p>
              This is exactly the scenario the three-fixture robustness gate was built to catch.
              A strategy that only works in recovery markets, and only before fees, is not a strategy.
              It is a description of how crypto behaved during one regime — a description that will
              expire the moment the market changes character.
            </p>

            {/* Callout box */}
            <div className="callout">
              <div className="callout-icon">◈</div>
              <div>
                <div className="callout-title">The robustness rule</div>
                <p className="callout-body">
                  A strategy must promote across <strong>all three canonical datasets</strong> to
                  clear the robustness gate. One dataset is a narrative. Three datasets, with opposing
                  market regimes, is evidence. The gate is designed so that regime-dependent wins
                  cannot accidentally reach real capital.
                </p>
              </div>
            </div>

            <h3>Story 2: The rebalance anomaly — strong OOS, blocked by in-sample</h3>

            <p>
              The rebalance family is the most counter-intuitive result in the table.
            </p>

            <p>
              <span className="mono lime">rebalance_conservative</span> lost 15.51% in-sample.
              It then made 15.48% out-of-sample. That is not a typo. The strategy that consistently
              underperformed during training turned around and nearly matched its entire in-sample loss
              in the 72-day holdout window.
            </p>

            <p>
              The explanation is not that the strategy is magic. It is that the training window
              happened to coincide with one of the strongest single-direction BTC bull runs in recent
              memory — May 2024 through early 2026. During a bull run, rebalancing by definition
              means selling the winners too early. Buy-and-hold wins. Rebalancing loses.
            </p>

            <p>
              The last 72 days — the holdout — have been choppier. Asset correlations have been
              lower. In that environment, rebalancing earns its keep.
            </p>

            {/* Mini chart stand-in — regime illustration */}
            <div className="regime-strip">
              <div className="regime-label">Market character · May 2024 → May 2026</div>
              <div className="regime-bars">
                <div className="regime-bar bull" style={{flex: 5}}>
                  <span>Bull trend</span>
                  <span className="regime-sub">Rebalancing underperforms</span>
                </div>
                <div className="regime-bar chop" style={{flex: 1}}>
                  <span>Chop</span>
                  <span className="regime-sub">Rebalancing earns</span>
                </div>
              </div>
              <div className="regime-legend">
                <span><span className="dot bull-dot"></span> In-sample (649 days)</span>
                <span><span className="dot chop-dot"></span> Out-of-sample (72 days)</span>
              </div>
            </div>

            <p>
              The system blocked promotion anyway. Why? Because a strategy that only works in
              one regime — even if that regime is the current one — is not robust. The in-sample
              gate (<em>the strategy must not have deeply lost the period it was trained on</em>)
              exists precisely to reject strategies that simply got lucky with regime timing.
              −15.51% in-sample is a hard no, regardless of what OOS looks like.
            </p>

            <p>
              The rebalance family is worth watching. But it needs a different evaluation window —
              one where it faces a mixed regime in the training period, not a structural disadvantage.
            </p>

            <h3>Story 3: The zeros that look like failures are not</h3>

            <p>
              Three strategies returned exactly 0.00% out-of-sample:
              <span className="mono"> breakout_btc_30_90</span>,
              <span className="mono"> vol_dip_buy_sol_18_84</span>, and
              <span className="mono"> vol_ratio_trend_eth_sol_30_84</span>.
            </p>

            <p>
              Zero is not a loss. Zero means the strategy had no trades during the holdout period —
              its entry conditions never triggered. <span className="mono">breakout_btc_30_90</span>,
              for example, requires BTC to surge more than 4% above its 90-day moving average in
              a short window. The last 72 days did not produce that condition.
            </p>

            <p>
              These strategies are not broken. They are waiting for their environment. The question
              is whether the environment they are waiting for arrives often enough to justify
              deploying them at all — and that is a different research question.
            </p>

            <h2>What we are doing about it</h2>

            <p>
              The immediate focus is <span className="mono lime">trend_16_42</span>. It is the
              nearest candidate: positive on both sides of the split, reasonable gap, and it promotes
              on at least one fixture dataset. The two remaining blockers are
              <strong> fee sensitivity</strong> and <strong> cross-dataset robustness</strong>.
            </p>

            <p>
              Fee sensitivity means the edge is too thin to survive realistic execution costs.
              That points toward two directions: reducing turnover (fewer, larger trades) or
              tightening the entry filter so the strategy only trades when the signal is strongest.
              Both are active experiments.
            </p>

            <p>
              Cross-dataset robustness means the strategy's edge is regime-dependent. The recovery
              fixture suits its character. The chop-shock fixture does not. We are testing whether
              a regime awareness layer — a filter that sits above the strategy and quiets it when
              the market character does not match — can solve this without overfitting.
            </p>

            {/* Next steps box */}
            <div className="next-steps">
              <div className="next-steps-header">
                <span className="lime">◆</span> Current research focus
              </div>
              <ul className="next-steps-list">
                <li>
                  <span className="next-num">01</span>
                  <div>
                    <strong>trend_16_42 fee reduction sweep</strong>
                    <p>Test lower-turnover variants. Can the edge survive 0.26% taker if we trade less often?</p>
                  </div>
                </li>
                <li>
                  <span className="next-num">02</span>
                  <div>
                    <strong>Regime awareness layer</strong>
                    <p>Overlay a market-character classifier. Silence trend strategies in chop regimes.</p>
                  </div>
                </li>
                <li>
                  <span className="next-num">03</span>
                  <div>
                    <strong>Rebalance re-evaluation window</strong>
                    <p>Run the rebalance family against a fixture with mixed in-sample regimes. The signal is real; the window was the problem.</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2>Why we publish this</h2>

            <p>
              Most platforms that talk about strategy research publish the wins. The 10x backtest.
              The "validated" signal. The chart that ends at the top-right corner.
            </p>

            <p>
              We are publishing the non-results because we think they are more honest, and more
              useful. Zero promotions after a rigorous sweep is not a marketing problem. It is a
              description of where we actually are. The system is working. The gate is holding.
              The right answer to "why hasn't anything promoted?" is not to lower the bar —
              it is to understand what the bar is measuring, and build strategies that clear it
              on its own terms.
            </p>

            <p>
              When something promotes — and it will — the promotion will mean something.
              That is the whole point.
            </p>

            {/* Closing stat strip */}
            <div className="stat-strip">
              <div className="stat-item">
                <span className="stat-num">721</span>
                <span className="stat-label">daily candles · live Kraken data</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">28</span>
                <span className="stat-label">strategy variants evaluated</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num lime">0</span>
                <span className="stat-label">promoted — gate held</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">3</span>
                <span className="stat-label">canonical fixture datasets</span>
              </div>
            </div>

          </div>

          {/* Footer nav */}
          <div className="post-footer-nav">
            <a href="/#journal" className="post-back">← Back to the journal</a>
            <a href="/#waitlist" className="btn btn-primary">Join the waitlist <span className="arrow">→</span></a>
          </div>

        </div>
      </article>
    </div>
  )
}
