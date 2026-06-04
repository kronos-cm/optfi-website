import './home-page.css'
import './journal-strategy-proof-page.css'

const proofRows = [
  {
    gate: 'Fresh evidence',
    current: 'Required',
    blockedBy: 'Stale, missing, or invalid scorecards',
  },
  {
    gate: 'After-cost economics',
    current: 'Required',
    blockedBy: 'Fees, slippage, churn, or weak net PnL',
  },
  {
    gate: 'Robustness',
    current: 'Required',
    blockedBy: 'One-regime wins and fragile holdout results',
  },
  {
    gate: 'Execution safety',
    current: 'Required',
    blockedBy: 'Missing limits, signing policy, or rollback path',
  },
] as const

export function JournalProofBeforeCapitalPage() {
  return (
    <div className="journal-post-root">
      <article className="post-article">
        <div className="container post-container">
          <header className="post-header">
            <div className="post-header-meta">
              <span className="post-cat">Proof discipline</span>
              <span className="post-sep">·</span>
              <span>7 min read</span>
              <span className="post-sep">·</span>
              <span>June 2026</span>
            </div>
            <h1 className="post-headline">
              Capital waits<br />
              at the locked door.<br />
              <span className="lime">Proof holds the key.</span>
            </h1>
            <p className="post-deck">
              A strategy that has not earned money inside its own proof loop should not be sold as a money engine.
              OptFi treats capital access as something evidence has to earn, not something impatience can unlock.
            </p>
            <div className="post-byline">
              <span className="byline-mark">OF</span>
              <div>
                <div className="byline-name">OptFi Research</div>
                <div className="byline-sub">Capital gate · Berlin</div>
              </div>
            </div>
          </header>

          <div className="pull-bar">
            <blockquote className="pull-quote">
              "Proof is not the pitch.<br />
              Proof is the <span className="lime">permission slip.</span>"
            </blockquote>
          </div>

          <div className="post-body">
            <p>
              The most dangerous sentence in an early trading product is not "we lost money." It is "we are probably ready."
              Probably is how a research system quietly becomes a capital system before the evidence has caught up.
            </p>

            <p>
              OptFi uses a harsher rule. If the current proof package cannot explain why a strategy deserves even the
              smallest useful allocation, the answer is no. Not "no forever." No today.
            </p>

            <p>
              That distinction matters. A blocked gate is not a product failure. It is the product refusing to turn a
              plausible story into a financial mistake. The current CEX strategy set still has interesting candidates,
              but interesting is not the same as investable.
            </p>

            <h2>What proof has to survive</h2>

            <p>
              A clean chart is not enough. A backtest is not enough. A paper run is not enough if it is stale, unrepeatable,
              or disconnected from the execution path. The gate cares about the dull parts because the dull parts are where
              money leaks out.
            </p>

            <div className="data-card">
              <div className="data-card-header">
                <span className="data-label">Capital gate checklist · every item must pass before canary capital</span>
              </div>
              <div className="data-table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Gate</th>
                      <th>Decision rule</th>
                      <th>What blocks it</th>
                    </tr>
                  </thead>
                  <tbody>
                    {proofRows.map((row) => (
                      <tr key={row.gate}>
                        <td><strong>{row.gate}</strong></td>
                        <td><span className="badge-watch">{row.current}</span></td>
                        <td>{row.blockedBy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="data-card-footer">
                <span>No single green artifact opens the gate.</span>
                <span>Evidence has to be current, net, robust, and executable.</span>
              </div>
            </div>

            <h2>What the gate says today</h2>

            <p>
              The honest status is still blocked. The latest research work improved the evidence path, the stale-state tests,
              and the DeFi research hygiene. It did not magically make the CEX strategies profitable under retail execution
              assumptions.
            </p>

            <div className="next-steps">
              <div className="next-steps-header">
                <span>Current blockers</span>
              </div>
              <ul className="next-steps-list">
                <li>
                  <span className="next-num">01</span>
                  <div>
                    <strong>No robust tactical promote</strong>
                    <p>The current matrix has candidates worth watching, not candidates that have earned capital.</p>
                  </div>
                </li>
                <li>
                  <span className="next-num">02</span>
                  <div>
                    <strong>Paper evidence still has to clear the economics</strong>
                    <p>Net PnL, drawdown, uptime, coverage, fees, and slippage have to survive together.</p>
                  </div>
                </li>
                <li>
                  <span className="next-num">03</span>
                  <div>
                    <strong>DeFi is research-only</strong>
                    <p>Source timestamps, accounting, risk scoring, preflight, and signing gates come before any wallet action.</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2>What does not count</h2>

            <p>
              This is where the product has to stay rude. A single green backtest does not count. A beautiful APY card does not
              count. A manual override because the operator is tired of waiting does not count. A hosting bill does not count.
              None of those things proves that capital is safer or smarter inside the system.
            </p>

            <div className="callout">
              <div className="callout-icon">!</div>
              <div>
                <div className="callout-title">Current OptFi decision</div>
                <p className="callout-body">
                  Keep CEX strategy capital blocked until fresh, after-cost evidence clears the gate. Keep DeFi research
                  visible but non-executable until source hygiene, accounting, risk, and signing controls are complete.
                </p>
              </div>
            </div>

            <h2>What would change the answer</h2>

            <p>
              A useful proof package would show a current scorecard, a paper run that survives net economics, and a robustness
              result that does not depend on one lucky regime. Then the next step is still deliberately small: a guarded canary,
              explicit limits, measured review windows, and a rollback plan already rehearsed.
            </p>

            <p>
              That is slower than the fantasy version. It is also the only version that can earn trust. If OptFi cannot say no
              while the evidence is weak, it has no business saying yes when the stakes are real.
            </p>

            <div className="stat-strip">
              <div className="stat-item">
                <span className="stat-num lime">0</span>
                <span className="stat-label">capital gates opened today</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">4</span>
                <span className="stat-label">proof dimensions before canary</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">1</span>
                <span className="stat-label">standard: evidence before capital</span>
              </div>
            </div>

            <div className="post-footer-nav">
              <a href="/#journal" className="post-back">← Back to the journal</a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
