import { BarChart3, CheckCircle2, Clock3, ShieldCheck, Wallet } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { PageContainer, PageHero, SectionHeading } from '../components/page-primitives'

const proofRules = [
  {
    icon: Clock3,
    title: 'Fresh evidence',
    text: 'The scorecard, paper run, and research gate must be current. A stale pass is treated as no pass.',
  },
  {
    icon: BarChart3,
    title: 'Repeatable economics',
    text: 'The result must survive fees, slippage, drawdown checks, and more than one market condition.',
  },
  {
    icon: ShieldCheck,
    title: 'Execution safety',
    text: 'Signing policy, lane limits, canary gates, and rollback rules must already be enforced.',
  },
  {
    icon: Wallet,
    title: 'Capital fit',
    text: 'The strategy must earn the right to touch capital at the smallest useful size before any scale decision.',
  },
] as const

const blockedToday = [
  'No robust tactical promote across the current research matrix.',
  'The latest paper scorecard is fresh, but it fails drawdown, net PnL, uptime, and coverage gates.',
  'DeFi opportunities are still research-only because source ingestion, accounting, preflight, and signing gates are incomplete.',
] as const

export function JournalProofBeforeCapitalPage() {
  return (
    <PageContainer>
      <article>
        <PageHero
          eyebrow="Journal / Proof discipline"
          title="What counts as proof before a crypto strategy gets capital"
          description="A strategy that has not earned money in its own proof loop should not be sold as a money engine. OptFi treats capital access as something the evidence has to earn, not something the roadmap can assume."
          actions={
            <>
              <Badge variant="warning">Current proof: blocked</Badge>
              <Badge variant="default">Research-only</Badge>
              <Badge variant="default">No investment advice</Badge>
            </>
          }
        />

        <section className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="glass">
            <CardHeader>
              <div className="mb-2 grid h-10 w-10 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <CardTitle>Proof is permission, not decoration</CardTitle>
              <CardDescription>
                The point of a proof gate is to stop a plausible story before it becomes a capital mistake.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-[color:var(--muted-foreground)]">
              <p>
                In crypto, it is easy to show a chart, a backtest, or a yield number and call it evidence. OptFi uses a narrower definition.
                Proof has to be fresh, repeatable, after-cost, after-tax aware, and connected to the actual execution path.
              </p>
              <p>
                That standard is intentionally uncomfortable. If the current system cannot prove that it improves capital decisions, it should
                stay in research mode. The honest product status is not "nearly ready"; it is "blocked until the evidence changes."
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            {proofRules.map((rule) => (
              <Card key={rule.title} className="glass">
                <CardHeader className="flex flex-row gap-4">
                  <div className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                    <rule.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{rule.title}</CardTitle>
                    <CardDescription>{rule.text}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <SectionHeading
            kicker="Current State"
            title="What the gate says today"
            description="The cost side is under control because the system is local-first. The proof side is still blocked."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {blockedToday.map((text, index) => (
              <Card key={text} className="glass border-amber-200/80 bg-amber-50/70">
                <CardHeader>
                  <Badge variant="warning" className="mb-2 w-fit">
                    Blocker {index + 1}
                  </Badge>
                  <CardDescription>{text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-4 lg:grid-cols-2">
          <Card className="glass">
            <CardHeader>
              <CardTitle>What would change the decision</CardTitle>
              <CardDescription>
                Capital only enters after the evidence improves, not after the narrative gets better.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
              <p>
                A useful next proof package would show current strategy scorecards across baseline, retail spot, and stress assumptions,
                plus a paper scorecard that clears net PnL, drawdown, uptime, and coverage gates.
              </p>
              <p>
                Once that exists, the next step is still tiny: a guarded canary with explicit limits, signing enforcement, and measured review windows.
              </p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader>
              <CardTitle>What does not count</CardTitle>
              <CardDescription>
                These are useful research inputs, but none of them grants capital access alone.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" /><span>A single green backtest.</span></li>
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" /><span>A headline APY without source age and risk accounting.</span></li>
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" /><span>A manual override because the operator feels impatient.</span></li>
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" /><span>A hosted runtime bill that creates pressure to trade.</span></li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </article>
    </PageContainer>
  )
}
