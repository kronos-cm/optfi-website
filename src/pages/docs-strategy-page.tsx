import { Activity, ArrowRight, CheckCircle2, FlaskConical, Lock, Scale, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { PageContainer, PageHero, SectionHeading, DocContentCard, BulletList } from '../components/page-primitives'

const stages = [
  {
    icon: FlaskConical,
    step: '01',
    title: 'Paper Trading',
    status: 'Foundation',
    text: 'Strategy candidates run against real market data without capital at risk. Paper trading establishes behavioral baselines, surfaces candidates that survive realistic conditions, and drives the research comparison that selects what moves forward.',
    gate: 'Walk-forward out-of-sample validation must clear before a candidate can advance. In-sample performance alone is rejected.',
  },
  {
    icon: Activity,
    step: '02',
    title: 'Canary Execution',
    status: 'Active',
    text: 'A constrained live execution slice with hard allocation caps and a strict proof window. The canary must demonstrate positive economics across both a short and medium time horizon before scope can expand. Every decision is logged — allow, deny, and the reasons behind each.',
    gate: 'Proof window must clear on both horizons. Hardware wallet signing required above notional threshold. Signing policy cannot be bypassed.',
  },
  {
    icon: TrendingUp,
    step: '03',
    title: 'Live Compounding',
    status: 'Gated',
    text: 'Full capital deployment, unlocked only after sustained canary proof across multiple review windows. The economics must demonstrably justify the transition — not just look good in a short window.',
    gate: 'Canary proof sustained across multiple windows. No manual override path exists.',
  },
] as const

const faq = [
  {
    q: 'Why require walk-forward out-of-sample validation?',
    a: 'In-sample backtesting is unreliable as a promotion criterion because it measures how well a strategy fits the data it was built on — not how it performs on new data. Walk-forward validation splits the dataset across multiple time windows and measures performance on each holdout period independently. A candidate that is "robust" must survive this across all windows, not just the ones that happened to suit it.',
  },
  {
    q: 'What is a proof window and why does it matter?',
    a: 'A proof window is a time-bounded measurement of live execution outcomes. The canary must show positive economics — measured outcomes, not model projections — over both a short and a medium horizon before it is considered for promotion. The two horizons matter separately: a strategy can look good over 30 days while the last 7 are quietly deteriorating. Both must hold.',
  },
  {
    q: 'Why Germany-first tax accounting?',
    a: 'Germany treats crypto gains differently depending on holding period, lot selection method, and asset type. A strategy that looks profitable before tax can be unprofitable after it. Building tax awareness into every trade decision from the start means the economics are real, not inflated by tax blindness. It also means the platform is prepared for the hardest accounting environment rather than the easiest.',
  },
  {
    q: 'Why is DeFi execution deferred?',
    a: 'DeFi execution requires clearing a specific bar: it must demonstrably beat the best centralized path on after-tax, after-fee compounding while preserving full accountability. Gross APY figures are not sufficient — impermanent loss, smart contract risk, governance risk, and tax treatment all reduce take-home returns significantly. The DeFi research lane tracks this data, but the execution gate has not been cleared.',
  },
  {
    q: 'Does OptFi use leverage?',
    a: 'No. The platform operates on a compounding-first, leverage-free model. Risk is controlled through position sizing, capital lane isolation, and hard allocation caps — not through derivatives or borrowed capital.',
  },
] as const

export function DocsStrategyPage() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="Docs / Proof Sequence"
        title="Every stage must earn the next one"
        description="OptFi advances through a three-stage proof sequence: paper trading, canary execution, and live compounding. No stage can promote itself without clearing a measured gate. This page explains the sequence, the gates, and why each one exists."
        actions={
          <>
            <Badge variant="success">Public-safe overview</Badge>
            <Badge variant="default">No method disclosure</Badge>
          </>
        }
      />

      {/* Proof stages */}
      <section className="mt-10 space-y-4">
        <SectionHeading
          kicker="The Proof Sequence"
          title="Three stages. Measured gates between each."
          description="The promotion criteria are enforced by the system. An operator cannot manually advance a stage that has not cleared its gate."
        />
        <div className="grid gap-6">
          {stages.map((stage) => (
            <Card key={stage.step} className={`glass ${stage.status === 'Gated' ? 'opacity-80' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                      <stage.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono tracking-widest text-[color:var(--muted-foreground)]">STAGE {stage.step}</p>
                      <CardTitle className="text-lg">{stage.title}</CardTitle>
                    </div>
                  </div>
                  <Badge variant={stage.status === 'Active' ? 'success' : stage.status === 'Foundation' ? 'brand' : 'default'}>
                    {stage.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 lg:grid-cols-[1fr_auto_1fr]">
                <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">{stage.text}</p>
                <div className="hidden items-center lg:flex">
                  <ArrowRight className="h-4 w-4 text-sky-400" />
                </div>
                <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-sky-700">Promotion Gate</p>
                  <p className="text-sm leading-6 text-sky-900">{stage.gate}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Design principles */}
      <section className="mt-12 grid gap-4 lg:grid-cols-2">
        <DocContentCard
          title="Why the Sequence Is Non-Negotiable"
          description="The ordering exists for specific reasons, not as bureaucratic process."
        >
          <BulletList
            items={[
              'Paper trading surfaces candidates that survive realistic conditions without capital risk. Skipping it means the first real test is with live money.',
              'The canary exists to measure live economics under constraints before trusting a strategy at scale. Model performance and live performance diverge — the canary measures that gap.',
              'Walk-forward validation catches overfitting before it reaches live execution. A strategy that looks good in-sample but fails out-of-sample is rejected before it costs anything.',
              'The signing policy enforcement gate means every live execution decision is attributable, audited, and constrained by policy — not by operator confidence in the moment.',
            ]}
          />
        </DocContentCard>

        <Card className="glass">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[color:var(--brand-700)]" />
              <CardTitle>After-Tax Economics First</CardTitle>
            </div>
            <CardDescription>
              Every stage measures after-tax, after-fee returns — not gross figures.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <EconRow icon={Scale} title="Tax drag is real" text="German crypto tax rules can turn a profitable trade into a net loss after accounting for the holding period and lot selection method." />
            <EconRow icon={ShieldCheck} title="Fee drag is tracked" text="Every execution records the fee paid as a proportion of the notional. Strategies where fee drag compounds against the edge are flagged and blocked from promotion." />
            <EconRow icon={CheckCircle2} title="Net return is the metric" text="Gross APY, gross PnL, and gross win rates are intermediate inputs. The promotion decision uses after-tax, after-fee net return." />
            <EconRow icon={Lock} title="DeFi bar is higher" text="DeFi adds impermanent loss, smart contract risk, and governance risk on top of the normal fee and tax stack. The bar for DeFi execution reflects all of these." />
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Approach FAQ</CardTitle>
            <CardDescription>
              Questions about the proof sequence, validation methodology, and economic design.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible defaultValue="item-0">
              {faq.map((item, index) => (
                <AccordionItem key={item.q} value={`item-${index}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </PageContainer>
  )
}

function EconRow({ icon: Icon, title, text }: { icon: typeof Scale; title: string; text: string }) {
  return (
    <div className="rounded-xl border border-white/70 bg-white/70 p-3">
      <div className="mb-1 flex items-center gap-2">
        <Icon className="h-4 w-4 text-sky-700" />
        <p className="text-sm font-semibold text-[color:var(--foreground)]">{title}</p>
      </div>
      <p className="text-sm leading-5 text-[color:var(--muted-foreground)]">{text}</p>
    </div>
  )
}
