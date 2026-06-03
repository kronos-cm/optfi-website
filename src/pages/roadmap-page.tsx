import { Activity, FlaskConical, Globe, Lock, Server, ShieldCheck } from 'lucide-react'
import { PageContainer, PageHero, SectionHeading } from '../components/page-primitives'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const roadmapTracks = [
  {
    title: 'Platform Quality Foundation',
    status: 'done',
    icon: Server,
    summary: 'Establish binding quality gates before feature work continues. Coverage, decomposition, and type safety enforced in CI.',
    goals: [
      'Backend and frontend test coverage above 80% — enforced by CI on every change',
      'Operator cockpit decomposed into focused modules, main route under 200 lines',
      'Zero JavaScript files in the codebase — TypeScript everywhere including tooling scripts',
    ],
  },
  {
    title: 'Paper Proof & Canary Gate',
    status: 'active',
    icon: Activity,
    summary: 'Fresh paper evidence is blocked today. Canary execution stays gated until the strategy clears current proof checks.',
    goals: [
      'Signing policy enforcement gate in the execution path — hardware wallet required above notional threshold',
      'Walk-forward out-of-sample validation required before any strategy candidate can advance',
      'Canary remains guarded until paper proof and tactical lane checks clear',
    ],
  },
  {
    title: 'DeFi Research Lane',
    status: 'active',
    icon: FlaskConical,
    summary: 'Score and surface DeFi opportunities alongside explicit risk fields. No execution path until DeFi beats CEX on after-tax compounding.',
    goals: [
      'Impermanent loss, smart contract risk, and governance risk surfaced as first-class fields',
      'Net-of-fees, net-of-risk return estimates alongside headline APY figures',
      'Execution gate: DeFi must demonstrably beat the best CEX path on after-tax returns',
    ],
  },
  {
    title: 'Live Compounding & Operator App',
    status: 'planned',
    icon: Lock,
    summary: 'Full capital deployment and private operator access surface — both gated behind canary proof and identity controls.',
    goals: [
      'Live execution unlocks only after canary proof window clears its gate',
      'Private operator app (app.optfi.eu) with hardware wallet-grade access controls',
      'Hosted runtime deferred until local-first proof justifies the infrastructure cost',
    ],
  },
] as const

export function RoadmapPage() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="Roadmap"
        title="What happens next, in what order, and why"
        description="The roadmap is sequenced to reduce risk and avoid false progress. Public product quality, monetization thinking, and strategy work move in parallel but with different priorities."
        actions={
          <>
            <Badge variant="success">Evidence current</Badge>
            <Badge variant="warning">Paper proof blocked</Badge>
            <Badge variant="brand">Local-first</Badge>
          </>
        }
      />

      <section className="mt-10 space-y-4">
        <SectionHeading
          kicker="Execution Order"
          title="Each track earns its way to the next"
          description="Quality foundation complete. Paper proof is current but blocked. DeFi research is underway. Live deployment and the private operator app follow only after measured proof."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {roadmapTracks.map((track) => (
            <RoadmapCard key={track.title} {...track} />
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Promotion Gates — What Each Stage Requires</CardTitle>
            <CardDescription>
              Every stage transition is enforced by the system, not a policy document. These are the actual gates.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            <GateRow icon={ShieldCheck} title="Research → Paper" text="Strategy candidate must clear walk-forward out-of-sample validation. In-sample performance alone is insufficient." />
            <GateRow icon={Activity} title="Paper → Canary" text="Current strategy proof must clear the paper scorecard and tactical lane checks before any canary expansion." />
            <GateRow icon={Server} title="Canary → Full deployment" text="Sustained live canary proof across multiple review windows. Economics must justify the promotion." />
            <GateRow icon={Globe} title="CEX → DeFi execution" text="DeFi must demonstrably beat the best CEX path on after-tax, after-fee compounding. Not satisfied today." />
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>What Happens Next</CardTitle>
            <CardDescription>The immediate focus while the proof gate is blocked.</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
              <li className="rounded-xl border border-white/70 bg-white/70 p-3">Keep the paper proof current. The operator cockpit surfaces the current blocker and the next action.</li>
              <li className="rounded-xl border border-white/70 bg-white/70 p-3">Expand the DeFi opportunity research catalogue as more protocol data becomes available.</li>
              <li className="rounded-xl border border-white/70 bg-white/70 p-3">Publish transparency updates only when the evidence state changes.</li>
              <li className="rounded-xl border border-white/70 bg-white/70 p-3">Design private operator app access controls when canary proof is established.</li>
            </ol>
          </CardContent>
        </Card>
      </section>
    </PageContainer>
  )
}

function RoadmapCard({
  title,
  status,
  icon: Icon,
  summary,
  goals,
}: {
  title: string
  status: 'done' | 'active' | 'planned'
  icon: typeof Globe
  summary: string
  goals: readonly string[]
}) {
  const badgeVariant = status === 'done' ? 'success' : status === 'active' ? 'brand' : 'default'
  return (
    <Card className="glass h-full">
      <CardHeader>
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
            <Icon className="h-4 w-4" />
          </div>
          <Badge variant={badgeVariant}>{status}</Badge>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
          {goals.map((goal) => (
            <li key={goal} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" />
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function GateRow({ icon: Icon, title, text }: { icon: typeof ShieldCheck; title: string; text: string }) {
  return (
    <div className="rounded-xl border border-white/70 bg-white/70 p-3">
      <div className="mb-1 flex items-center gap-2">
        <Icon className="h-4 w-4 text-sky-700" />
        <p className="text-sm font-semibold text-[color:var(--foreground)]">{title}</p>
      </div>
      <p>{text}</p>
    </div>
  )
}
