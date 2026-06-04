import './home-page.css'
import './journal-strategy-proof-page.css'

const defiFreshnessExample = {
  protocol: 'Example lending pool',
  displayedApy: 9.8,
  observedAt: 'Monday 09:12 UTC',
  reviewedAt: 'Tuesday 16:12 UTC',
  sourceAgeHours: 31,
}

const defiFreshnessChart = {
  width: 640,
  height: 286,
  left: 54,
  right: 28,
  top: 30,
  bottom: 58,
  maxAge: 36,
}

const defiFreshnessRankableAges = [0, 12, 24] as const

function defiFreshnessX(age: number) {
  const span = defiFreshnessChart.width - defiFreshnessChart.left - defiFreshnessChart.right
  return defiFreshnessChart.left + (age / defiFreshnessChart.maxAge) * span
}

function defiFreshnessStatusY(status: 'rankable' | 'blocked') {
  const span = defiFreshnessChart.height - defiFreshnessChart.top - defiFreshnessChart.bottom
  return status === 'rankable' ? defiFreshnessChart.top + 66 : defiFreshnessChart.top + span - 28
}

export function JournalDefiSourceTimestampPage() {
  return (
    <div className="journal-post-root">
      <article className="post-article">
        <div className="container post-container">
          <header className="post-header">
            <div className="post-header-meta">
              <span className="post-cat">DeFi research</span>
              <span className="post-sep">·</span>
              <span>6 min read</span>
              <span className="post-sep">·</span>
              <span>June 2026</span>
            </div>
            <h1 className="post-headline">
              A DeFi yield number<br />
              walked in without a clock.<br />
              <span className="lime">We sent it back.</span>
            </h1>
            <p className="post-deck">
              The first DeFi lesson was not about yield. It was about time. An APY without a source timestamp is not evidence.
              It is a rumour wearing a percentage sign.
            </p>
            <div className="post-byline">
              <span className="byline-mark">OF</span>
              <div>
                <div className="byline-name">OptFi Research</div>
                <div className="byline-sub">DeFi lane · Berlin</div>
              </div>
            </div>
          </header>

          <div className="pull-bar">
            <blockquote className="pull-quote">
              "APY is a moving object.<br />
              If you do not know when it was seen, you do not know <span className="lime">what</span> you saw."
            </blockquote>
          </div>

          <div className="post-body">
            <p>
              DeFi makes numbers look clean. A lending pool shows 6.2%. A liquid staking route shows 4.8%.
              A stable-stable pool flashes something higher, with enough decimals to feel precise. The interface invites the
              lazy conclusion: rank the rows, pick the top one, call it research.
            </p>

            <p>
              OptFi now refuses that move.
            </p>

            <p>
              The reason is simple. A DeFi yield number is not a fact by itself. It is a report from a source at a moment in time.
              Utilisation can move. Rewards can dilute. TVL can shift. A temporary incentive can expire. Liquidity can look deep
              until the exit trade asks the pool a harder question.
            </p>

            <h2>The missing timestamp changed the product</h2>

            <p>
              The early DeFi table did what many yield tables do: it made APY the loudest column. That was wrong. A high APY with
              a stale source is less useful than a boring APY with a current source. So the table now asks a question before it ranks:
              do we know when this source was updated?
            </p>

            <p>
              In the current research lane, that means something specific: the protocol source or API response must expose an
              observation time, and OptFi only treats it as current if that timestamp is no more than 24 hours old at review time.
            </p>

            <div className="defi-freshness-card">
              <div className="defi-freshness-head">
                <div>
                  <div className="defi-freshness-kicker">Worked example</div>
                  <div className="defi-freshness-title">{defiFreshnessExample.protocol}: a 9.8% APY lands outside the freshness window</div>
                </div>
                <span className="badge-watch">Blocked from ranking</span>
              </div>

              <svg className="defi-freshness-svg" viewBox={`0 0 ${defiFreshnessChart.width} ${defiFreshnessChart.height}`} role="img" aria-labelledby="defi-freshness-title defi-freshness-desc">
                <title id="defi-freshness-title">DeFi APY source age example</title>
                <desc id="defi-freshness-desc">
                  A sample DeFi APY is still displayed at 9.8 percent after 31 hours, but the ranking eligibility drops from
                  rankable to blocked once the source age passes 24 hours.
                </desc>
                <rect
                  className="defi-zone-fresh"
                  x={defiFreshnessChart.left}
                  y={defiFreshnessChart.top}
                  width={defiFreshnessX(24) - defiFreshnessChart.left}
                  height={defiFreshnessChart.height - defiFreshnessChart.top - defiFreshnessChart.bottom}
                />
                <rect
                  className="defi-zone-stale"
                  x={defiFreshnessX(24)}
                  y={defiFreshnessChart.top}
                  width={defiFreshnessChart.width - defiFreshnessChart.right - defiFreshnessX(24)}
                  height={defiFreshnessChart.height - defiFreshnessChart.top - defiFreshnessChart.bottom}
                />
                {(['rankable', 'blocked'] as const).map((status) => (
                  <g key={status}>
                    <line
                      className="defi-grid-line"
                      x1={defiFreshnessChart.left}
                      x2={defiFreshnessChart.width - defiFreshnessChart.right}
                      y1={defiFreshnessStatusY(status)}
                      y2={defiFreshnessStatusY(status)}
                    />
                    <text
                      className="defi-axis-label defi-status-label"
                      x={defiFreshnessChart.left + 8}
                      y={defiFreshnessStatusY(status) + (status === 'rankable' ? -12 : 18)}
                      textAnchor="start"
                    >
                      {status === 'rankable' ? 'Can rank' : 'Blocked'}
                    </text>
                  </g>
                ))}
                <g className="defi-reported-apy">
                  <rect x={defiFreshnessX(1)} y={defiFreshnessChart.top + 122} width="204" height="24" rx="12" />
                  <text x={defiFreshnessX(1) + 14} y={defiFreshnessChart.top + 138}>
                    Displayed APY remains {defiFreshnessExample.displayedApy.toFixed(1)}%
                  </text>
                </g>
                <line
                  className="defi-freshness-boundary"
                  x1={defiFreshnessX(24)}
                  x2={defiFreshnessX(24)}
                  y1={defiFreshnessChart.top}
                  y2={defiFreshnessChart.height - defiFreshnessChart.bottom}
                />
                <text className="defi-zone-label fresh" x={defiFreshnessX(12)} y={defiFreshnessChart.top + 18} textAnchor="middle">
                  0-24h: can rank
                </text>
                <text className="defi-zone-label stale" x={defiFreshnessX(30)} y={defiFreshnessChart.top + 18} textAnchor="middle">
                  24h+: visible, not rankable
                </text>
                <path
                  className="defi-eligibility-line"
                  d={`M ${defiFreshnessX(0)} ${defiFreshnessStatusY('rankable')} H ${defiFreshnessX(24)}`}
                />
                <path
                  className="defi-drop-line"
                  d={`M ${defiFreshnessX(24)} ${defiFreshnessStatusY('rankable')} V ${defiFreshnessStatusY('blocked')}`}
                />
                <path
                  className="defi-blocked-line"
                  d={`M ${defiFreshnessX(24)} ${defiFreshnessStatusY('blocked')} H ${defiFreshnessX(36)}`}
                />
                {defiFreshnessRankableAges.map((age) => (
                  <circle key={age} className="defi-rank-dot" cx={defiFreshnessX(age)} cy={defiFreshnessStatusY('rankable')} r="4" />
                ))}
                <circle
                  className="defi-landing-dot"
                  cx={defiFreshnessX(defiFreshnessExample.sourceAgeHours)}
                  cy={defiFreshnessStatusY('blocked')}
                  r="8"
                />
                <text
                  className="defi-landing-label"
                  x={defiFreshnessX(defiFreshnessExample.sourceAgeHours)}
                  y={defiFreshnessStatusY('blocked') - 18}
                  textAnchor="middle"
                >
                  31h old: ranking blocked
                </text>
                {[0, 12, 24, 31, 36].map((tick) => (
                  <text key={tick} className="defi-axis-label" x={defiFreshnessX(tick)} y={defiFreshnessChart.height - 28} textAnchor="middle">
                    {tick}h
                  </text>
                ))}
                <text className="defi-axis-caption" x={(defiFreshnessChart.width + defiFreshnessChart.left - defiFreshnessChart.right) / 2} y={defiFreshnessChart.height - 10} textAnchor="middle">
                  Source age when OptFi reviews the row, not APY performance
                </text>
              </svg>

              <div className="defi-example-strip">
                <div>
                  <span className="defi-example-value">{defiFreshnessExample.displayedApy.toFixed(1)}%</span>
                  <span className="defi-example-label">displayed APY</span>
                </div>
                <div>
                  <span className="defi-example-value">{defiFreshnessExample.observedAt}</span>
                  <span className="defi-example-label">source observed</span>
                </div>
                <div>
                  <span className="defi-example-value">{defiFreshnessExample.reviewedAt}</span>
                  <span className="defi-example-label">row reviewed</span>
                </div>
                <div>
                  <span className="defi-example-value warn">{defiFreshnessExample.sourceAgeHours}h old</span>
                  <span className="defi-example-label">not current evidence</span>
                </div>
              </div>
            </div>

            <div className="data-card">
              <div className="data-card-header">
                <span className="data-label">DeFi opportunity row · source freshness rule before yield ranking</span>
              </div>
              <div className="data-table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Source freshness</th>
                      <th>APY ranking</th>
                      <th>Verdict</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Timestamp visible, 0-24h old</strong></td>
                      <td className="pos">Can be ordered by APY for research review</td>
                      <td><span className="badge-watch">Review</span></td>
                    </tr>
                    <tr className="row-highlight">
                      <td><strong>Timestamp visible, older than 24h</strong></td>
                      <td className="warn">Kept visible, blocked from APY-led ranking</td>
                      <td><span className="badge-watch">Research only</span></td>
                    </tr>
                    <tr className="row-dim">
                      <td><strong>No source timestamp exposed</strong></td>
                      <td className="neg">No ranking, no evidence status</td>
                      <td><span className="badge-watch">No proof</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="data-card-footer">
                <span>Fresh means observed within the last 24 hours.</span>
                <span>APY still needs risk, gas, tax, and accounting checks.</span>
              </div>
            </div>

            <h2>The table had to become less seductive</h2>

            <p>
              A yield table that always sorts by the biggest number is not neutral. It trains the eye to chase the row with the
              loudest promise. That is exactly the wrong instinct for DeFi. High APY can mean real opportunity, but it can also mean
              reward inflation, low liquidity, smart-contract risk, impermanent loss, governance risk, or simply stale data.
            </p>

            <p>
              So the current DeFi research lane does something intentionally boring. If the source timestamp is stale or missing,
              APY-led ranking is blocked. The row can remain visible for inspection, but it cannot compete as current evidence.
              A row only becomes "fresh" after it shows a named source and a timestamp inside the 24-hour freshness window.
            </p>

            <div className="callout">
              <div className="callout-icon">i</div>
              <div>
                <div className="callout-title">Current OptFi decision</div>
                <p className="callout-body">
                  DeFi remains research-only. A fresh timestamp makes a row eligible for research ordering. It does not create
                  a wallet action, a trade instruction, or a capital allocation.
                </p>
              </div>
            </div>

            <h2>The timestamp is the first honesty test</h2>

            <p>
              This is the public lesson: before asking whether a yield is attractive, ask whether the number is alive.
              A timestamp is not the whole proof. It is the first line on the evidence ticket. Without it, everything downstream
              is theatre.
            </p>

            <div className="next-steps">
              <div className="next-steps-header">
                <span>What still has to be true</span>
              </div>
              <ul className="next-steps-list">
                <li>
                  <span className="next-num">01</span>
                  <div>
                    <strong>Source attribution</strong>
                    <p>The protocol, source, update time, and stale threshold need to be visible before ranking.</p>
                  </div>
                </li>
                <li>
                  <span className="next-num">02</span>
                  <div>
                    <strong>Risk accounting</strong>
                    <p>Smart-contract risk, governance risk, impermanent loss, gas, and lockup must sit beside APY.</p>
                  </div>
                </li>
                <li>
                  <span className="next-num">03</span>
                  <div>
                    <strong>No execution shortcut</strong>
                    <p>Research rows do not become wallet actions until accounting and signing gates are implemented.</p>
                  </div>
                </li>
              </ul>
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
