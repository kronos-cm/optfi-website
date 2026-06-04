import './home-page.css'
import './journal-strategy-proof-page.css'

const evidenceStates = [
  {
    state: 'current',
    treatment: 'Can be used by the gate',
    operatorMeaning: 'The artifact is recent enough to inform the decision.',
  },
  {
    state: 'stale',
    treatment: 'Blocks promotion',
    operatorMeaning: 'The old result may be true, but it is no longer proof.',
  },
  {
    state: 'missing',
    treatment: 'Blocks promotion',
    operatorMeaning: 'No artifact means no evidence, even if the story sounds plausible.',
  },
  {
    state: 'invalid',
    treatment: 'Blocks promotion',
    operatorMeaning: 'A malformed artifact cannot become proof by being convenient.',
  },
] as const

export function JournalFreshEvidencePage() {
  return (
    <div className="journal-post-root">
      <article className="post-article">
        <div className="container post-container">
          <header className="post-header">
            <div className="post-header-meta">
              <span className="post-cat">Proof discipline</span>
              <span className="post-sep">·</span>
              <span>6 min read</span>
              <span className="post-sep">·</span>
              <span>June 2026</span>
            </div>
            <h1 className="post-headline">
              Old proof can look clean.<br />
              Fresh proof can still say no.<br />
              <span className="lime">That is the point.</span>
            </h1>
            <p className="post-deck">
              OptFi now treats evidence freshness as a testable contract. A stale or invalid proof artifact is a blocker,
              even when the old result was pretty enough to make impatience feel rational.
            </p>
            <div className="post-byline">
              <span className="byline-mark">OF</span>
              <div>
                <div className="byline-name">OptFi Research</div>
                <div className="byline-sub">Evidence gate · Berlin</div>
              </div>
            </div>
          </header>

          <div className="pull-bar">
            <blockquote className="pull-quote">
              "A stale pass is a failed pass<br />
              with better <span className="lime">manners.</span>"
            </blockquote>
          </div>

          <div className="post-body">
            <p>
              Backtests age badly. A result that looked disciplined last month can become a souvenir after the market changes,
              fees move, data coverage shifts, or a paper run quietly stops matching the system it is supposed to justify.
            </p>

            <p>
              This is why evidence freshness became the first P1 slice. It is not glamorous. It does not make the current
              strategies profitable. It makes the product harder to fool.
            </p>

            <p>
              That distinction is important. The system is still not claiming revenue. It is claiming a better refusal:
              stale evidence cannot dress up as current proof.
            </p>

            <h2>The old artifact problem</h2>

            <p>
              A stale scorecard is worse than an obviously missing one because it has just enough polish to be persuasive.
              It has names, numbers, dates, maybe even a green cell. What it does not have is permission to speak for the
              current market.
            </p>

            <div className="data-card">
              <div className="data-card-header">
                <span className="data-label">Evidence freshness contract · tested states before promotion logic</span>
              </div>
              <div className="data-table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>State</th>
                      <th>Treatment</th>
                      <th>Operator meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    {evidenceStates.map((row) => (
                      <tr key={row.state} className={row.state === 'current' ? 'row-highlight' : undefined}>
                        <td><span className="mono">{row.state}</span></td>
                        <td><span className="badge-watch">{row.treatment}</span></td>
                        <td>{row.operatorMeaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="data-card-footer">
                <span>Freshness is tested, not remembered.</span>
                <span>Fresh evidence can still fail PnL, drawdown, uptime, or coverage.</span>
              </div>
            </div>

            <h2>What changed first</h2>

            <p>
              The first P1 delivery was deliberately small: make the stale-state checker deterministic before building more
              dashboard surface. The proof gate now has tests for current, stale, missing, and invalid evidence, and the commit
              path runs those checks before the frontend work gets treated as complete.
            </p>

            <div className="next-steps">
              <div className="next-steps-header">
                <span>P1 evidence slice</span>
              </div>
              <ul className="next-steps-list">
                <li>
                  <span className="next-num">01</span>
                  <div>
                    <strong>Current evidence stays usable</strong>
                    <p>The gate can accept artifacts that are inside the freshness window.</p>
                  </div>
                </li>
                <li>
                  <span className="next-num">02</span>
                  <div>
                    <strong>Stale evidence becomes loud</strong>
                    <p>Old scorecards block promotion instead of becoming quiet footnotes.</p>
                  </div>
                </li>
                <li>
                  <span className="next-num">03</span>
                  <div>
                    <strong>Missing and invalid evidence fail closed</strong>
                    <p>The system cannot promote a strategy because an artifact was absent, malformed, or inconvenient to parse.</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2>Trust improves before revenue does</h2>

            <p>
              This is not a revenue story yet. It is a trust story. A credible money product has to prove that it can say no,
              especially when the operator wants a yes. The current CEX proof still says no to capital, and the new evidence
              slice makes that no easier to audit.
            </p>

            <div className="callout">
              <div className="callout-icon">✓</div>
              <div>
                <div className="callout-title">Current OptFi decision</div>
                <p className="callout-body">
                  Keep the proof gate blocked when evidence is stale, missing, invalid, or economically weak. The next P1 work
                  should move that status into the operator-facing API and cockpit so stale proof is visible before capital logic.
                </p>
              </div>
            </div>

            <h2>The useful disappointment</h2>

            <p>
              Fresh losing evidence is still losing evidence. That can feel irritating when the project is burning attention and
              time. But it is also the point of the gate. The product gets more trustworthy every time it refuses to confuse
              recency, polish, or optimism with monetizable proof.
            </p>

            <div className="stat-strip">
              <div className="stat-item">
                <span className="stat-num lime">4</span>
                <span className="stat-label">freshness states under test</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">0</span>
                <span className="stat-label">stale artifacts allowed to promote</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">1</span>
                <span className="stat-label">next surface: API and cockpit blocker</span>
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
