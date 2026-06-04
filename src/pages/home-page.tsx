import './home-page.css'

export function HomePage() {
  return (
    <>
      {/* Ticker */}
      <div className="ticker">
        <div className="ticker-track">
          <span className="lime">● PRE-LAUNCH</span><span className="dim">/</span>
          <span>WAITLIST OPEN</span><span className="dim">/</span>
          <span>JOURNAL UPDATED WEEKLY</span><span className="dim">/</span>
          <span>BUILT IN BERLIN, DE</span><span className="dim">/</span>
          <span>TAX-AWARE BY DESIGN</span><span className="dim">/</span>
          <span className="lime">● PRE-LAUNCH</span><span className="dim">/</span>
          <span>WAITLIST OPEN</span><span className="dim">/</span>
          <span>JOURNAL UPDATED WEEKLY</span><span className="dim">/</span>
          <span>BUILT IN BERLIN, DE</span><span className="dim">/</span>
          <span>TAX-AWARE BY DESIGN</span><span className="dim">/</span>
          <span className="lime">● PRE-LAUNCH</span><span className="dim">/</span>
          <span>WAITLIST OPEN</span><span className="dim">/</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="nav">
        <div className="container nav-row">
          <a href="#" className="brand"><span className="brand-mark"></span>OPTFI</a>
          <div className="nav-links">
            <a href="#thesis">Thesis</a>
            <a href="#journal">Journal</a>
            <a href="#principles">Principles</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="nav-cta">
            <span className="pill-live"><span className="dot"></span>Local proof</span>
            <a className="btn btn-primary" href="#waitlist">Join waitlist <span className="arrow">→</span></a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-eyebrow">Tax-aware crypto wealth engine &nbsp;·&nbsp; Built in Germany</div>
            <h1 className="headline">Keep more<br/>of what crypto<br/>actually <span className="lime">compounds.</span></h1>
            <p className="hero-sub">OptFi is being built for one stubborn idea: the only return that matters in crypto is the one that survives fees, slippage, and the German tax bill. We're writing the playbook in public — and opening the platform when the maths backs the marketing.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#waitlist">Join the waitlist <span className="arrow">→</span></a>
              <a className="btn btn-ghost" href="#journal">Read the journal</a>
            </div>
            <div className="hero-mini">
              <span>Pre-launch · No public access yet</span>
              <span>Journal updated weekly</span>
              <span>Built &amp; written from Berlin</span>
            </div>
          </div>

          <a href="/journal/when-arbitrage-stops-being-free-money" className="featured">
            <span className="featured-flag">Latest from the journal</span>
            <div className="featured-thumb"></div>
            <div className="featured-meta"><span className="cat">Strategy economics</span><span>8 min read</span><span>June 2026</span></div>
            <h3 className="featured-title">When arbitrage stops being free money.</h3>
            <p className="featured-excerpt">A tiny price gap can look like alpha until the chart separates the visible spread from what you actually keep.</p>
            <span className="featured-read">Read entry <span className="arrow">→</span></span>
          </a>
        </div>
      </header>

      {/* Thesis */}
      <section className="block" id="thesis">
        <div className="container">
          <div className="section-head">
            <div><div className="kicker"><span className="num">/ 01</span> The thesis</div></div>
            <div><h2>Crypto's marketing problem is a <span className="lime">maths problem.</span></h2></div>
          </div>

          <div className="thesis-grid">
            <p className="pull">A "headline yield" without fees, slippage and tax is not a return. It is a <span className="lime">screenshot.</span></p>
            <div className="thesis-body">
              <p><strong>Almost every yield pitch quietly assumes you don't pay fees, you don't pay tax, and you don't have to sleep.</strong> OptFi rejects all three.</p>
              <p>Germany has one of the most demanding crypto tax frameworks in the world. Building for it first means the economics have to be real — not laundered through ignorance, optimism, or selective backtests.</p>
              <p>So the number we care about is the only one that ever lands in your account: <strong>what you keep, after the tax man has taken his.</strong> Everything else — strategy, platform, timing — is downstream of that.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="journal-block" id="journal">
        <div className="container">
          <div className="journal-head">
            <div>
              <div className="kicker"><span className="num">/ 02</span> The journal</div>
              <h2>Notes from a tax-aware crypto build, <span className="lime">written in public.</span></h2>
            </div>
          </div>

          <div className="journal-cats">
            <span className="cat-chip active">All <span className="count">5</span></span>
            <span className="cat-chip">Proof discipline <span className="count">2</span></span>
            <span className="cat-chip">Strategy economics <span className="count">1</span></span>
            <span className="cat-chip">DeFi research <span className="count">1</span></span>
            <span className="cat-chip">Strategy thinking <span className="count">1</span></span>
          </div>

          <div className="journal-grid">
            <article className="post post-feature" onClick={() => window.location.href='/journal/when-arbitrage-stops-being-free-money'} style={{cursor:'pointer'}}>
              <div className="post-thumb art-arbitrage"><span className="badge">Fees</span></div>
              <div className="post-meta"><span className="cat">Strategy economics</span><span>8 min read</span><span>June 2026</span></div>
              <h3 className="post-title">When arbitrage stops being free money.</h3>
              <p className="post-excerpt">A tiny CEX price gap can disappear once fees, spread, slippage, and tax-aware accounting hit the chart.</p>
              <a href="/journal/when-arbitrage-stops-being-free-money" className="post-read">Read entry <span className="arrow">→</span></a>
            </article>

            <article className="post post-side-a" onClick={() => window.location.href='/journal/fresh-evidence'} style={{cursor:'pointer'}}>
              <div className="post-thumb art-fresh-evidence"><span className="badge">Proof</span></div>
              <div className="post-meta"><span className="cat">Proof discipline</span><span>7 min</span><span>June 2026</span></div>
              <h3 className="post-title">The scorecard looked alive. The timestamp said otherwise.</h3>
              <p className="post-excerpt">A stale scorecard can stay visible for review, but it cannot unlock promotion.</p>
              <a href="/journal/fresh-evidence" className="post-read">Read entry <span className="arrow">→</span></a>
            </article>

            <article className="post post-third" onClick={() => window.location.href='/journal/defi-source-timestamp'} style={{cursor:'pointer'}}>
              <div className="post-thumb art-defi-source"><span className="badge">Source age</span></div>
              <div className="post-meta"><span className="cat">DeFi research</span><span>5 min</span></div>
              <h3 className="post-title">A DeFi yield number walked in without a clock.</h3>
              <p className="post-excerpt">A yield number cannot be ranked as current evidence until the source age is visible and fresh.</p>
              <a href="/journal/defi-source-timestamp" className="post-read">Read entry <span className="arrow">→</span></a>
            </article>

            <article className="post post-third" onClick={() => window.location.href='/journal/proof-before-capital'} style={{cursor:'pointer'}}>
              <div className="post-thumb art-proof-capital"><span className="badge">Capital</span></div>
              <div className="post-meta"><span className="cat">Proof discipline</span><span>7 min</span><span>June 2026</span></div>
              <h3 className="post-title">Capital waits at the locked door. Proof holds the key.</h3>
              <p className="post-excerpt">Capital stays blocked until fresh, after-cost evidence clears the gate.</p>
              <a href="/journal/proof-before-capital" className="post-read">Read entry <span className="arrow">→</span></a>
            </article>

            <article className="post post-third" onClick={() => window.location.href='/journal/strategy-proof'} style={{cursor:'pointer'}}>
              <div className="post-thumb art-strategy-proof"><span className="badge">Gate</span></div>
              <div className="post-meta"><span className="cat">Strategy thinking</span><span>14 min</span></div>
              <h3 className="post-title">28 strategies walked into the lab. Zero promoted. Here is what that means.</h3>
              <p className="post-excerpt">A zero-promote result can still prove that the gate is doing its job.</p>
              <a href="/journal/strategy-proof" className="post-read">Read entry <span className="arrow">→</span></a>
            </article>
          </div>

          {/* Newsletter signup */}
          <aside className="journal-letter">
            <div>
              <div className="jl-kicker">The operator letter · monthly</div>
              <h3>The journal in your inbox, once a month. No noise.</h3>
              <p>One careful piece of writing per month, plus the operator letter when there's something worth saying. You can stop it in a click.</p>
            </div>
            <div>
              <form className="letter-form" action="https://formspree.io/f/xaqvavyb" method="POST">
                <input type="email" name="email" placeholder="you@domain.eu" required />
                <input type="hidden" name="subject" value="Newsletter subscription" />
                <button type="submit">Subscribe <span className="arrow">→</span></button>
              </form>
              <div className="letter-fine">~1 letter / month · Unsubscribe in one click · No tracking pixels</div>
            </div>
          </aside>
        </div>
      </section>

      {/* Principles */}
      <section className="block" id="principles">
        <div className="container">
          <div className="section-head">
            <div><div className="kicker"><span className="num">/ 03</span> How we build</div></div>
            <div>
              <h2>Deliberate by default. <span className="lime">Patient by design.</span></h2>
              <p className="lede mt-24">The platform is not yet open, and won't be until the maths backs the marketing. These are the principles holding the line until then.</p>
            </div>
          </div>

          <div className="principles">
            <div className="principle">
              <div className="num">/ 01</div>
              <h3>Take-home, not headline.</h3>
              <p>The only return that decides anything around here is the one that survives fees, slippage and the German tax bill. Everything upstream is downstream of that number.</p>
            </div>
            <div className="principle">
              <div className="num">/ 02</div>
              <h3>Evidence opens the door.</h3>
              <p>Live access is gated on measured outcomes, not on dates or optimism. If the proof isn't there, the door stays shut — including to us.</p>
            </div>
            <div className="principle">
              <div className="num">/ 03</div>
              <h3>Boring on purpose.</h3>
              <p>Patience compounds. Volatility does not. We're building for the version of you who is still here in five years — and still ahead.</p>
            </div>
            <div className="principle">
              <div className="num">/ 04</div>
              <h3>Public process.</h3>
              <p>What we believe, what we measured, what we changed — all written down in the journal. The work is the marketing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="block" id="faq">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-left">
              <div className="kicker"><span className="num">/ 04</span> Plain answers</div>
              <h2>The questions that <span className="lime">actually matter.</span></h2>
              <p>If we haven't answered yours, write to <a href="mailto:hello@optfi.eu">hello@optfi.eu</a> — a human reads each one.</p>
            </div>
            <div className="faq-list">
              <details open>
                <summary>Can I use OptFi today?</summary>
                <p>Not yet. The platform is in pre-launch — no public access, no early-bird logins, no "secret" deposit address. The waitlist is the only door, and it opens when the maths backs the marketing.</p>
              </details>
              <details>
                <summary>What does the waitlist actually get me?</summary>
                <p>Three things: priority access when the platform opens, the monthly operator letter delivered to your inbox, and an honest answer if you reply asking what we're working on.</p>
              </details>
              <details>
                <summary>Why Germany-first?</summary>
                <p>Germany has one of the most demanding crypto tax regimes in the world. Building for the hardest accounting environment first means the economics generalise outward — they don't generalise inward. A platform built for somewhere easier will quietly fall over when it meets a German tax return.</p>
              </details>
              <details>
                <summary>Is this a fund, a robo-advisor, or a tool?</summary>
                <p>None of the above as those exist today. OptFi is a tax-aware crypto wealth engine — built for individuals who want their crypto to compound in a way that survives the tax bill, not just the screenshot. Specifics will land alongside access, not before.</p>
              </details>
              <details>
                <summary>When does the waitlist open up?</summary>
                <p>When measured outcomes back the opening — not on a calendar. We'd rather be late and honest than on time and embarrassed. The monthly letter is where you'll see the door swinging open.</p>
              </details>
              <details>
                <summary>What about DeFi?</summary>
                <p>DeFi is in the research lane, not the execution lane. It enters execution the day it can demonstrably beat the alternative on what you actually keep — and not a day before. The journal has the full thinking.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist closing */}
      <section className="closing" id="waitlist">
        <div className="container">
          <div className="closing-kicker">Join the line</div>
          <h2>Compound <span className="lime">deliberately.</span></h2>
          <p className="closing-sub">The waitlist is the first door when the platform opens. You'll also get the monthly operator letter — the real writing, sent to people who read it.</p>
          <form className="waitlist" action="https://formspree.io/f/xaqvavyb" method="POST">
            <input type="email" name="email" placeholder="you@domain.eu" required />
            <input type="hidden" name="subject" value="Waitlist signup" />
            <button type="submit">Join waitlist <span className="arrow">→</span></button>
          </form>
          <div className="closing-bullets">
            <span>Priority access at launch</span>
            <span>Monthly operator letter</span>
            <span>Unsubscribe in one click</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="foot-row">
            <div className="foot-col">
              <div className="foot-brand"><span className="brand-mark"></span>OPTFI</div>
              <p>A tax-aware crypto wealth engine, being built in public from Germany. Patience over performance.</p>
            </div>
            <div className="foot-col">
              <h5>The platform</h5>
              <ul>
                <li><a href="#thesis">Thesis</a></li>
                <li><a href="#principles">How we build</a></li>
                <li><a href="#waitlist">Waitlist</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>The journal</h5>
              <ul>
                <li><a href="#journal">All entries</a></li>
                <li><a href="#journal">Operator letters</a></li>
                <li><a href="#journal">Tax in Germany</a></li>
                <li><a href="#journal">DeFi field notes</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Imprint</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 OptFi · Berlin, DE</span>
            <span>Not investment advice · Past results are not future returns</span>
          </div>
        </div>
      </footer>
    </>
  )
}
