import { Activity, BadgeDollarSign, Globe, Lock, Server, ShieldCheck } from 'lucide-react'
import { PageContainer, PageHero, SectionHeading } from '../components/page-primitives'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const roadmapTracks = [
  {
    title: 'Website & Docs Experience',
    status: 'active',
    icon: Globe,
    summary: 'Make optfi.eu feel like a real product and docs property, not a wrapper around repository links.',
    goals: [
      'Build designed docs pages and a docs hub as the primary reading experience',
      'Add roadmap and status pages with a consistent visual language',
      'Introduce transparency and progress pages without exposing operator controls',
    ],
  },
  {
    title: 'Monetization Planning (Future)',
    status: 'next',
    icon: BadgeDollarSign,
    summary: 'Model credible revenue streams before productizing anything beyond self-trading validation.',
    goals: [
      'Define low-regulatory-risk product revenue paths (analytics, tooling, monitoring)',
      'Separate platform product value from strategy alpha assumptions',
      'Document constraints for EU/Germany-friendly operation and messaging',
    ],
  },
  {
    title: 'Method Iteration (Evidence-led)',
    status: 'background',
    icon: Activity,
    summary: 'Continue validation in the background and improve private methods only after reviewing reliable evidence.',
    goals: [
      'Improve observability and review loops for private operations',
      'Tune one variable at a time using measured outcomes',
      'Promote scope only after reliability and economics are proven',
    ],
  },
  {
    title: 'Private Operator App (app.optfi.eu)',
    status: 'planned',
    icon: Lock,
    summary: 'Plan private operator access with a strong identity provider and strict allowlisting.',
    goals: [
      'Evaluate managed and custom identity approaches for operator-only access',
      'Design allowlist and admin workflow for access control',
      'Keep public and private surfaces isolated operationally and visually',
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
            <Badge variant="success">Validation-first</Badge>
            <Badge variant="brand">Website sprint active</Badge>
          </>
        }
      />

      <section className="mt-10 space-y-4">
        <SectionHeading
          kicker="Execution Order"
          title="We are not optimizing strategy and productization at the same time"
          description="The current emphasis is to make the public website excellent while validation work continues in the background. Monetization planning comes before any future product packaging."
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
            <CardTitle>Release Gates Before Bigger Claims</CardTitle>
            <CardDescription>
              Product and strategy narratives must stay aligned with evidence. No performance marketing before operating evidence exists.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            <GateRow icon={ShieldCheck} title="Economic evidence" text="Evaluate real operating economics from measured outcomes, not only model estimates." />
            <GateRow icon={Server} title="Operational reliability" text="Stable behavior, repeatable processes, and clear incident paths." />
            <GateRow icon={Globe} title="Public messaging" text="Site content should describe the system honestly and avoid premature performance framing." />
            <GateRow icon={Lock} title="Operator access controls" text="Private app auth and whitelist flow must be planned before exposing operator tooling on app.optfi.eu." />
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Near-Term Deliverables</CardTitle>
            <CardDescription>Practical outputs that move the platform and product forward now.</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
              <li className="rounded-xl border border-white/70 bg-white/70 p-3">Expand docs pages (runbook, safety, monetization, operator access) in the public site design system.</li>
              <li className="rounded-xl border border-white/70 bg-white/70 p-3">Add a sanitized public status feed and transparency page driven by curated summaries.</li>
              <li className="rounded-xl border border-white/70 bg-white/70 p-3">Write a monetization options document with explicit tradeoffs and compliance assumptions.</li>
              <li className="rounded-xl border border-white/70 bg-white/70 p-3">Review operational evidence and decide the first private method adjustment based on measured outcomes.</li>
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
  status: 'active' | 'next' | 'background' | 'planned'
  icon: typeof Globe
  summary: string
  goals: readonly string[]
}) {
  const badgeVariant = status === 'active' ? 'success' : status === 'next' ? 'brand' : 'default'
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
