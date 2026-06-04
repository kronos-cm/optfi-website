import {
  ArrowRightLeft,
  BadgeEuro,
  BookOpenCheck,
  Calculator,
  CircleDollarSign,
  ExternalLink,
  FileWarning,
  ReceiptText,
  Scale,
} from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { PageContainer, PageHero, SectionHeading } from '../components/page-primitives'

const sourceDate = 'June 4, 2026'

const exchangeFees = [
  {
    name: 'Bitvavo',
    venue: 'Category A spot',
    maker: 0.15,
    taker: 0.25,
    source: 'https://bitvavo.com/en/fees',
    note: 'Public EUR fee page, first 30-day volume tier.',
  },
  {
    name: 'Kraken Pro',
    venue: 'Spot crypto',
    maker: 0.25,
    taker: 0.4,
    source: 'https://www.kraken.com/features/fee-schedule',
    note: 'Public spot crypto schedule, first 30-day volume tier.',
  },
  {
    name: 'Coinbase Exchange',
    venue: 'Spot exchange',
    maker: 0.4,
    taker: 0.6,
    source: 'https://help.coinbase.com/en/exchange/trading-and-funding/exchange-fees',
    note: 'Public exchange schedule, first 30-day volume tier.',
  },
  {
    name: 'Gemini ActiveTrader',
    venue: 'Spot',
    maker: 0.6,
    taker: 1.2,
    source: 'https://www.gemini.com/fees/activetrader-fee-schedule',
    note: 'Public ActiveTrader schedule, first spot tier.',
  },
] as const

const receiptRows = [
  { label: 'Buy-side execution', value: 'Taker or missed maker fill', tone: 'warning' },
  { label: 'Sell-side execution', value: 'Another fee on exit', tone: 'warning' },
  { label: 'Spread and slippage', value: 'Usually invisible in the fee table', tone: 'danger' },
  { label: 'Tax/accounting drag', value: 'Short-horizon churn can create taxable events', tone: 'danger' },
] as const

const lessons = [
  {
    icon: Calculator,
    title: 'Round trips matter',
    text: 'A buy and a sell is two executions. A market-order round trip pays the taker fee twice before spread, slippage, and tax/accounting work enter the picture.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Maker is not guaranteed',
    text: 'A limit order only earns maker treatment if it rests and fills. If the edge is time-sensitive, the trade often becomes taker or disappears.',
  },
  {
    icon: Scale,
    title: 'Tax changes the clock',
    text: 'Germany-first means turnover is not neutral. A strategy has to care about holding period, taxable-event frequency, and the evidence trail.',
  },
] as const

function pct(value: number): string {
  return `${value.toFixed(2)}%`
}

function roundTripTaker(fee: (typeof exchangeFees)[number]): number {
  return fee.taker * 2
}

function roundTripMixed(fee: (typeof exchangeFees)[number]): number {
  return fee.maker + fee.taker
}

export function JournalArbitrageFreeMoneyPage() {
  const maxTakerRoundTrip = Math.max(...exchangeFees.map(roundTripTaker))

  return (
    <PageContainer>
      <article>
        <PageHero
          eyebrow="Journal / Strategy economics"
          title="When Arbitrage Stops Being Free Money"
          description="A tiny price gap can look like alpha until the receipt arrives. CEX strategies have to beat fees, spread, slippage, fill risk, and tax/accounting drag before they deserve capital."
          actions={
            <>
              <Badge variant="warning">Proof still blocked</Badge>
              <Badge variant="brand">Fee data checked {sourceDate}</Badge>
              <Badge variant="default">No investment advice</Badge>
            </>
          }
        />

        <section className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-amber-300/60 bg-[oklch(0.95_0.06_82_/_0.86)] p-6 text-stone-950 shadow-[0_24px_70px_-36px_rgba(120,67,20,0.45)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-stone-600">The receipt</p>
                <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">A correct trade can still be a bad trade.</h2>
              </div>
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-stone-950 text-amber-100">
                <ReceiptText className="h-7 w-7" />
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-stone-900/15 bg-stone-50/85">
              {receiptRows.map((row, index) => (
                <div
                  key={row.label}
                  className="grid gap-2 border-b border-stone-900/10 p-4 last:border-b-0 sm:grid-cols-[1fr_auto]"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone-500">Line {index + 1}</p>
                    <p className="mt-1 text-sm font-semibold text-stone-950">{row.label}</p>
                  </div>
                  <p className={`text-sm font-medium ${row.tone === 'danger' ? 'text-rose-700' : 'text-amber-700'}`}>{row.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-700">
              This is why OptFi is not hunting for the most exciting trade. It is hunting for the trade whose edge survives the receipt.
              If the edge is smaller than the cost stack, automation only makes the leak faster.
            </p>
          </div>

          <div className="grid gap-4">
            {lessons.map((lesson) => (
              <Card key={lesson.title} className="glass">
                <CardHeader className="flex flex-row gap-4">
                  <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                    <lesson.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{lesson.title}</CardTitle>
                    <CardDescription>{lesson.text}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12 space-y-5">
          <SectionHeading
            kicker="Exchange data"
            title="The first hurdle is visible before the strategy even runs"
            description="Public fee schedules already show why tiny CEX edges need room. The rows below use first public spot tiers where a small operator is most likely to start. Your actual account tier, pair, promotion, and region can differ."
          />

          <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.25)]">
            <div className="grid grid-cols-[1.1fr_0.7fr_0.7fr_0.8fr] gap-3 border-b border-slate-200/80 bg-slate-950 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-100 md:grid-cols-[1.1fr_0.7fr_0.7fr_0.8fr_1fr]">
              <span>Venue</span>
              <span>Maker</span>
              <span>Taker</span>
              <span>Mixed round trip</span>
              <span className="hidden md:block">Source note</span>
            </div>
            {exchangeFees.map((fee) => (
              <a
                key={fee.name}
                href={fee.source}
                target="_blank"
                rel="noreferrer"
                className="grid grid-cols-[1.1fr_0.7fr_0.7fr_0.8fr] gap-3 border-b border-slate-200/80 px-4 py-4 text-sm last:border-b-0 transition-colors hover:bg-sky-50/80 md:grid-cols-[1.1fr_0.7fr_0.7fr_0.8fr_1fr]"
              >
                <span>
                  <span className="block font-semibold text-slate-950">{fee.name}</span>
                  <span className="block text-xs text-slate-500">{fee.venue}</span>
                </span>
                <span className="font-mono text-slate-900">{pct(fee.maker)}</span>
                <span className="font-mono text-slate-900">{pct(fee.taker)}</span>
                <span className="font-mono font-semibold text-rose-700">{pct(roundTripMixed(fee))}</span>
                <span className="hidden items-start gap-2 text-xs leading-5 text-slate-600 md:flex">
                  {fee.note}
                  <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="glass">
            <CardHeader>
              <div className="mb-2 grid h-10 w-10 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                <CircleDollarSign className="h-5 w-5" />
              </div>
              <CardTitle>The toy arbitrage dies quickly</CardTitle>
              <CardDescription>
                A 0.50% price gap looks obvious until a retail taker round trip costs the same amount or more.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-[color:var(--muted-foreground)]">
              <p>
                If a strategy buys on one venue and sells on another, the fee budget is not one fee. It can be buy-side fee plus sell-side fee,
                plus the spread, plus slippage, plus any missed-fill penalty. The table already shows mixed round trips from 0.40% to 1.80%.
              </p>
              <p>
                That does not mean arbitrage never exists. It means a small operator should assume most visible gaps are already priced for
                someone with lower fees, better routing, better inventory, or faster settlement.
              </p>
            </CardContent>
          </Card>

          <div className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.25)]">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">Taker round trip</p>
                <h3 className="mt-1 text-xl font-semibold text-slate-950">Two market executions, before spread</h3>
              </div>
              <Badge variant="warning">Cost floor</Badge>
            </div>
            <div className="space-y-4">
              {exchangeFees.map((fee) => {
                const value = roundTripTaker(fee)
                const width = `${Math.max(10, (value / maxTakerRoundTrip) * 100)}%`
                return (
                  <div key={fee.name}>
                    <div className="mb-1 flex items-center justify-between gap-3 text-sm">
                      <span className="font-medium text-slate-900">{fee.name}</span>
                      <span className="font-mono font-semibold text-rose-700">{pct(value)}</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-[oklch(0.67_0.18_28)]" style={{ width }} />
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="mt-5 text-xs leading-5 text-slate-500">
              Reading: a 0.50% visible spread is not enough if the round-trip execution cost is already 0.50% or higher. The chart excludes
              spread, slippage, withdrawal cost, funding delay, and tax/accounting impact.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-5">
          <SectionHeading
            kicker="Germany-first constraint"
            title="Tax is not a footnote when the strategy churns"
            description="The public lesson is simple: the more often a strategy realizes gains, swaps assets, or exits inside short windows, the more the accounting and tax treatment can dominate the small edge."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="glass">
              <CardHeader>
                <BadgeEuro className="mb-2 h-5 w-5 text-amber-700" />
                <CardTitle className="text-base">Germany treats the trail seriously</CardTitle>
                <CardDescription>
                  The BMF updated its crypto-asset income-tax guidance in March 2025, including documentation and reporting topics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Steuerarten/Einkommensteuer/2025-03-06-einzelfragen-kryptowerte.html"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--brand-700)]"
                >
                  BMF guidance <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <BookOpenCheck className="mb-2 h-5 w-5 text-amber-700" />
                <CardTitle className="text-base">Short-horizon gains can be taxable</CardTitle>
                <CardDescription>
                  The Federal Fiscal Court held that crypto transactions inside the one-year speculation period can fall under private sales transactions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.loc.gov/item/global-legal-monitor/2023-03-20/germany-federal-fiscal-court-holds-cryptocurrency-transactions-subject-to-income-tax/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--brand-700)]"
                >
                  Case summary <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="glass border-amber-200/80 bg-amber-50/70">
              <CardHeader>
                <FileWarning className="mb-2 h-5 w-5 text-amber-800" />
                <CardTitle className="text-base">This is not tax advice</CardTitle>
                <CardDescription>
                  OptFi uses tax-aware gates because strategy turnover changes what the operator has to prove, record, and review.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-[color:var(--muted-foreground)]">
                The article only explains why tax/accounting drag belongs in the proof loop. Actual tax treatment depends on facts and advice.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-900 bg-slate-950 p-6 text-slate-100 shadow-[0_24px_80px_-42px_rgba(15,23,42,0.75)]">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-lime-200">OptFi decision</p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight">The profitable thing today is saying no.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                The current CEX proof is fresh, but not profitable enough to promote. That is not a product failure. That is the gate refusing
                to turn a tiny apparent edge into a real capital leak.
              </p>
            </div>
            <div className="grid gap-3">
              {[
                'Prefer lower-turnover strategies over high-churn micro-arbitrage.',
                'Measure after-cost and after-tax-aware outcomes before any canary.',
                'Treat a single green backtest as a suspect, not a signal.',
                'Keep CEX execution blocked until the proof clears the receipt.',
              ].map((item, index) => (
                <div key={item} className="grid grid-cols-[auto_1fr] gap-3 rounded-2xl border border-slate-700 bg-slate-900 p-4">
                  <span className="font-mono text-xs text-lime-200">0{index + 1}</span>
                  <span className="text-sm leading-6 text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </PageContainer>
  )
}
