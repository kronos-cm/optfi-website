import './home-page.css'
import './journal-strategy-proof-page.css'

export function JournalLocalFirstHostingPage() {
  return (
    <div className="journal-post-root">
      <article className="post-article">
        <div className="container post-container">
          <header className="post-header">
            <div className="post-header-meta">
              <span className="post-cat">Operating discipline</span>
              <span className="post-sep">·</span>
              <span>5 min read</span>
              <span className="post-sep">·</span>
              <span>June 2026</span>
            </div>
            <h1 className="post-headline">
              We turned the server bill<br />
              into a gate.<br />
              <span className="lime">Not a habit.</span>
            </h1>
            <p className="post-deck">
              A trading system that has not proved it can earn money should not create a recurring bill that pressures
              the operator to make it trade. So OptFi stays local-first until proof or continuity earns the spend.
            </p>
            <div className="post-byline">
              <span className="byline-mark">OF</span>
              <div>
                <div className="byline-name">OptFi Operations</div>
                <div className="byline-sub">Cost register · Berlin</div>
              </div>
            </div>
          </header>

          <div className="pull-bar">
            <blockquote className="pull-quote">
              "Hosting is not traction.<br />
              Uptime is not <span className="lime">proof.</span>"
            </blockquote>
          </div>

          <div className="post-body">
            <p>
              The easiest way to make an unfinished trading system feel serious is to put it in the cloud.
              Give it a private runtime. Add monitoring. Add a status page. Add a monthly bill. Suddenly the project has
              the posture of a production system, even if the strategy underneath is still saying no.
            </p>

            <p>
              We decided not to confuse the two.
            </p>

            <p>
              Right now the useful work is local: generate scorecards, keep paper evidence fresh, expose blockers,
              write down decisions, and make sure no unproved path can touch capital. None of that requires a private hosted
              trading runtime. Paying for one would not improve the evidence. It would only add pressure.
            </p>

            <h2>The cost register is a product surface</h2>

            <p>
              The most important number in this phase is not a cloud metric. It is the recurring infrastructure burn:
              <strong> EUR 0</strong>. That does not mean OptFi is finished. It means the system is refusing to spend money
              on theatre while the proof loop is still blocked.
            </p>

            <div className="stat-strip">
              <div className="stat-item">
                <span className="stat-num lime">€0</span>
                <span className="stat-label">standing private runtime cost</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">1</span>
                <span className="stat-label">approved active spend class: implementation</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-num">0</span>
                <span className="stat-label">live trading reasons to host today</span>
              </div>
            </div>

            <h2>What would make hosting honest</h2>

            <p>
              Hosted continuity is not banned. It just has to earn its place. A private runtime becomes reasonable when
              a proof window needs continuous paper observation, or when a guarded canary has already justified the cost of
              uptime. Even then, the bill needs a stop condition.
            </p>

            <div className="next-steps">
              <div className="next-steps-header">
                <span>Hosting gate</span>
              </div>
              <ul className="next-steps-list">
                <li>
                  <span className="next-num">01</span>
                  <div>
                    <strong>Proof reason</strong>
                    <p>The runtime must support a specific evidence window, not a vague feeling that production looks serious.</p>
                  </div>
                </li>
                <li>
                  <span className="next-num">02</span>
                  <div>
                    <strong>Safety reason</strong>
                    <p>Secrets, signing policy, monitoring, and rollback must be ready before private automation is exposed.</p>
                  </div>
                </li>
                <li>
                  <span className="next-num">03</span>
                  <div>
                    <strong>Shutdown reason</strong>
                    <p>The same workpackage that turns hosting on must say when it gets turned off again.</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2>The uncomfortable part</h2>

            <p>
              Local-first is not romantic. It is inconvenient. It means the operator has to start the stack, keep the proof window
              honest, and avoid pretending that a hosted process is a milestone by itself. But that inconvenience is useful.
              It keeps the system close to the person responsible for the decision.
            </p>

            <p>
              The current CEX proof is still blocked. That is the real blocker, not hosting. Until the strategy earns the right
              to run continuously, the cleanest infrastructure decision is the one that does not create a bill.
            </p>

            <div className="callout">
              <div className="callout-icon">€</div>
              <div>
                <div className="callout-title">Current OptFi decision</div>
                <p className="callout-body">
                  Keep the private runtime local. Spend engineering time on proof quality, blocker visibility, and strategy economics.
                  Revisit hosting only when evidence or continuity creates a reason stronger than convenience.
                </p>
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
