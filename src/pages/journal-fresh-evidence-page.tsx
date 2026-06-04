import './home-page.css'
import './journal-strategy-proof-page.css'

const receiptRows = [
  {
    line: 'Line 1',
    label: 'Clean-looking scorecard',
    value: 'trend_16_42 still shows a positive holdout result',
    status: 'Tempting',
  },
  {
    line: 'Line 2',
    label: 'Artifact timestamp',
    value: 'Generated 31 hours before the review',
    status: 'Too old',
  },
  {
    line: 'Line 3',
    label: 'Freshness window',
    value: 'Promotion proof must be current within 24 hours',
    status: 'Missed',
  },
  {
    line: 'Line 4',
    label: 'Gate decision',
    value: 'Keep visible for inspection, block from promotion',
    status: 'Blocked',
  },
] as const

const evidenceStates = [
  {
    state: 'Fresh artifact, 0-24h old',
    treatment: 'Can enter the proof gate',
    operatorMeaning: 'The scorecard can inform the decision, but it still has to pass economics.',
  },
  {
    state: 'Stale artifact, older than 24h',
    treatment: 'Blocks promotion',
    operatorMeaning: 'The result can stay visible, but it cannot speak for the current market.',
  },
  {
    state: 'Missing artifact',
    treatment: 'Blocks promotion',
    operatorMeaning: 'No artifact means no evidence, no matter how plausible the strategy sounds.',
  },
  {
    state: 'Invalid artifact',
    treatment: 'Blocks promotion',
    operatorMeaning: 'Malformed proof fails closed instead of becoming an operator judgement call.',
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
              <span>7 min read</span>
              <span className="post-sep">·</span>
              <span>June 2026</span>
            </div>
            <h1 className="post-headline">
              The scorecard looked alive.<br />
              The timestamp<br />
              <span className="lime">said otherwise.</span>
            </h1>
            <p className="post-deck">
              A green result is not proof if it is speaking from yesterday. OptFi now treats stale, missing, and invalid
              evidence as promotion blockers before a strategy can borrow credibility from an old run.
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
              "The most dangerous proof is not fake.<br />
              It is <span className="lime">expired.</span>"
            </blockquote>
          </div>

          <div className="post-body">
            <p>
              The awkward thing about a proof gate is that it can fail on something that feels boring. Not because the
              strategy lost money. Not because the chart fell apart. Because the artifact was too old to deserve a vote.
            </p>

            <p>
              That sounds bureaucratic until you picture the operator screen. A scorecard still has the right strategy name.
              It still has the same tidy columns. It still has a positive holdout result from the last run. Nothing about the
              table screams danger. It simply stopped being current.
            </p>

            <p>
              That is where a research tool either becomes trustworthy or becomes a story generator.
            </p>

            <h2>The old scorecard trap</h2>

            <p>
              The tempting move is to let a clean artifact keep talking. The strategy looked interesting on the last pass.
              The numbers are already there. The operator wants to move. Why rerun the evidence when the spreadsheet is still
              sitting in front of us?
            </p>

            <p>
              Because markets do not preserve context for our convenience. Fees change. Fills drift. Data windows roll forward.
              A paper run can stop matching the system it is supposed to justify. A stale proof artifact is not neutral. It is
              a memory wearing a pass badge.
            </p>

            <div className="evidence-receipt">
              <div className="evidence-receipt-head">
                <div>
                  <div className="evidence-receipt-kicker">Worked blocker</div>
                  <div className="evidence-receipt-title">A promising row gets stopped before it can become a capital story</div>
                </div>
                <span className="badge-watch">Stale proof</span>
              </div>

              <div className="evidence-receipt-lines">
                {receiptRows.map((row) => (
                  <div className="evidence-receipt-line" key={row.line}>
                    <span className="evidence-receipt-line-num">{row.line}</span>
                    <div>
                      <strong>{row.label}</strong>
                      <span>{row.value}</span>
                    </div>
                    <em>{row.status}</em>
                  </div>
                ))}
              </div>

              <div className="evidence-receipt-foot">
                The APY or PnL number does not decay on the page. Its right to influence the promotion decision does.
              </div>
            </div>

            <h2>The gate has to be annoying on purpose</h2>

            <p>
              A missing artifact is easy to reject. Everyone can see the hole. A stale artifact is harder because it looks
              productive. It gives the operator something to point at, and that is exactly why it needs a hard rule instead
              of a vibes-based exception.
            </p>

            <p>
              The rule is now simple: evidence can be visible without being usable. A stale result can stay on the screen for
              inspection, debugging, and narrative context. It cannot promote a strategy. It cannot unlock canary capital. It
              cannot help a weak case pretend to be current.
            </p>

            <div className="data-card">
              <div className="data-card-header">
                <span className="data-label">Evidence freshness contract · tested states before promotion logic</span>
              </div>
              <div className="data-table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Evidence state</th>
                      <th>Treatment</th>
                      <th>Operator meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    {evidenceStates.map((row) => (
                      <tr key={row.state} className={row.state.startsWith('Fresh') ? 'row-highlight' : undefined}>
                        <td><strong>{row.state}</strong></td>
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

            <h2>What changed in the product</h2>

            <p>
              This was the first serious evidence lesson after the strategy proof article. The promotion gate needed to know
              the difference between a current proof package and an old one that happened to look clean. So the first evidence
              work made freshness a deterministic state, not an operator interpretation.
            </p>

            <div className="next-steps">
              <div className="next-steps-header">
                <span>Evidence freshness slice</span>
              </div>
              <ul className="next-steps-list">
                <li>
                  <span className="next-num">01</span>
                  <div>
                    <strong>Fresh evidence stays eligible</strong>
                    <p>The gate can inspect artifacts that are inside the freshness window.</p>
                  </div>
                </li>
                <li>
                  <span className="next-num">02</span>
                  <div>
                    <strong>Stale evidence fails loudly</strong>
                    <p>Old scorecards remain visible for review, but they block promotion instead of becoming quiet footnotes.</p>
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

            <h2>Why this matters before revenue</h2>

            <p>
              This is not the article where OptFi claims the current CEX strategy set is ready to make money. It is the article
              where the product proves it can reject the wrong kind of evidence. That is less exciting than revenue, but it is
              more valuable than pretending old proof is a live result.
            </p>

            <div className="callout">
              <div className="callout-icon">✓</div>
              <div>
                <div className="callout-title">Current OptFi decision</div>
                <p className="callout-body">
                  Keep the proof gate blocked when evidence is stale, missing, invalid, or economically weak. The next product
                  surface should make that blocker impossible to miss in the API and cockpit before capital logic can see it.
                </p>
              </div>
            </div>

            <h2>The useful disappointment</h2>

            <p>
              Fresh losing evidence is still losing evidence. Stale winning evidence is still stale. Neither deserves capital.
              That can feel irritating when the project is burning attention and time, but it is the whole job of the gate:
              refuse to confuse recency, polish, or optimism with monetizable proof.
            </p>

            <div className="stat-strip">
              <div className="stat-item">
                <span className="stat-num lime">4</span>
                <span className="stat-label">evidence states under test</span>
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
