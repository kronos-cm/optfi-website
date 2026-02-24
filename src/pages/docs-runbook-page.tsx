import { Activity, AlertTriangle, Bell, Compass, Eye, Gauge, ShieldCheck, Wrench } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { PageContainer, PageHero, SectionHeading, DocContentCard, BulletList } from '../components/page-primitives'

const operatingLoop = [
  {
    icon: Eye,
    title: 'Observe',
    text: 'Collect signals about platform behavior, reliability, and decision quality in an ordered, reviewable format.',
  },
  {
    icon: Gauge,
    title: 'Interpret',
    text: 'Compare current behavior against predefined constraints and expected operating envelopes.',
  },
  {
    icon: Wrench,
    title: 'Respond',
    text: 'Use explicit actions for recovery or escalation rather than ad-hoc interventions.',
  },
  {
    icon: Compass,
    title: 'Review',
    text: 'Feed lessons into process and product improvements without leaking private operating details.',
  },
] as const

export function DocsRunbookPage() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="Docs / Operations"
        title="Operator runbook principles for a system that should be reliable before it is ambitious"
        description="This public runbook page explains the operating discipline behind OptFi: monitoring, interpretation, escalation, and recovery patterns. It intentionally avoids private runtime specifics."
        actions={
          <>
            <Badge variant="success">Public runbook</Badge>
            <Badge variant="default">Procedural overview only</Badge>
          </>
        }
      />

      <section className="mt-10 space-y-4">
        <SectionHeading
          kicker="Operating Model"
          title="A repeatable loop matters more than heroics"
          description="The public runbook focuses on habits and responsibilities. The goal is to make operations understandable and auditable without publishing privileged internals."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {operatingLoop.map((step) => (
            <Card key={step.title} className="glass h-full">
              <CardHeader>
                <div className="mb-2 grid h-9 w-9 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                  <step.icon className="h-4 w-4" />
                </div>
                <CardTitle className="text-base">{step.title}</CardTitle>
                <CardDescription>{step.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <DocContentCard
          title="What Operators Must Be Able To Do"
          description="Capabilities described at a principle level, not as an implementation manual."
        >
          <BulletList
            items={[
              'Tell whether the system is healthy, degraded, or paused using consistent monitoring signals',
              'Understand why an action happened or why it was skipped, using structured logs and summaries',
              'Know which issues require immediate intervention versus observation and review',
              'Recover from common failures using documented steps with minimal guesswork',
              'Escalate changes through staged environments instead of changing production behavior impulsively',
            ]}
          />
        </DocContentCard>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Public Monitoring Philosophy</CardTitle>
            <CardDescription>What can be shared publicly without increasing operational risk.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            <RunbookLine icon={Activity} title="Health state" text="Public status should communicate whether the platform is operating normally at a high level." />
            <RunbookLine icon={Bell} title="Incident communication" text="Summaries should explain impact and resolution status without exposing internals." />
            <RunbookLine icon={ShieldCheck} title="Control posture" text="The public site can describe safeguards and review discipline, not privileged control surfaces." />
            <RunbookLine icon={AlertTriangle} title="Failure boundaries" text="Readers should understand what classes of failure are planned for and how response discipline works." />
          </CardContent>
        </Card>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-2">
        <DocContentCard
          title="What This Public Runbook Will Never Include"
          description="These belong in private operating documentation only."
        >
          <BulletList
            items={[
              'Privileged endpoints, admin paths, or credential handling procedures with exploitable detail',
              'Detailed internal topology, deployment steps, or service-provider-specific internals',
              'Operator-only control flows that would meaningfully increase attack surface',
              'Private diagnostics that reveal decision internals or active operating posture',
            ]}
          />
        </DocContentCard>

        <DocContentCard
          title="How To Read Public Status Pages"
          description="The public status surface is intentionally a summary, not an operator console."
        >
          <BulletList
            items={[
              'Use it to understand maturity stage, public incidents, and documentation progress',
              'Do not expect private observability, detailed execution traces, or internal timelines',
              'Treat public status as communication for stakeholders, not a control panel',
              'Use roadmap pages to understand sequencing decisions behind status changes',
            ]}
          />
        </DocContentCard>
      </section>
    </PageContainer>
  )
}

function RunbookLine({ icon: Icon, title, text }: { icon: typeof Activity; title: string; text: string }) {
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
