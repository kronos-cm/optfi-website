import { ClipboardCheck, Lock, ShieldCheck, Users } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { PageContainer, PageHero, SectionHeading, DocContentCard, BulletList } from '../components/page-primitives'

const phases = [
  {
    title: 'Identity foundation',
    text: 'Select the identity approach that best fits a private operator-only surface and review the operational tradeoffs.',
  },
  {
    title: 'Authorization model',
    text: 'Define allowlists, role boundaries, and who can approve access changes.',
  },
  {
    title: 'Operator workflow',
    text: 'Document onboarding, offboarding, and emergency access removal with auditability in mind.',
  },
  {
    title: 'Promotion readiness',
    text: 'Verify access controls in lower environments before exposing a production operator surface.',
  },
] as const

export function DocsOperatorAccessPage() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="Docs / Product"
        title="Private operator access for app.optfi.eu should be simple to use and hard to misuse"
        description="This page describes the public-facing principles for operator access design. It covers identity and authorization philosophy without disclosing provider-specific implementation details."
        actions={
          <>
            <Badge variant="success">Public product page</Badge>
            <Badge variant="default">Auth principles only</Badge>
          </>
        }
      />

      <section className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <DocContentCard
          title="Design Goals"
          description="The private operator app should be secure, reviewable, and operationally boring."
        >
          <BulletList
            items={[
              'Restrict access to approved operators only',
              'Keep authorization decisions server-side and auditable',
              'Make emergency access revocation fast and reliable',
              'Separate operator access concerns from the public website entirely',
              'Design for future scale without overbuilding early access flows',
            ]}
          />
        </DocContentCard>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Public Access-Control Principles</CardTitle>
            <CardDescription>High-level constraints that are safe to communicate publicly.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            <AccessLine icon={Lock} title="Private by default" text="The operator app is not a public product surface and should not inherit public-site assumptions." />
            <AccessLine icon={Users} title="Allowlisted users" text="Access should be explicitly approved and periodically reviewed." />
            <AccessLine icon={ClipboardCheck} title="Documented process" text="Onboarding and offboarding should be part of the operating system, not tribal knowledge." />
            <AccessLine icon={ShieldCheck} title="Defense in depth" text="Identity, authorization, and auditability should reinforce each other." />
          </CardContent>
        </Card>
      </section>

      <section className="mt-12 space-y-4">
        <SectionHeading
          kicker="Rollout Sequence"
          title="Access controls should mature before the operator app becomes a daily dependency"
          description="The order of work matters: identity choices, authorization policy, and operator process design should be settled before expanding usage."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {phases.map((phase, index) => (
            <Card key={phase.title} className="glass h-full">
              <CardHeader>
                <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-xs font-mono tracking-[0.12em] text-[color:var(--muted-foreground)]">
                  0{index + 1}
                </div>
                <CardTitle className="text-base">{phase.title}</CardTitle>
                <CardDescription>{phase.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-2">
        <DocContentCard
          title="What We Publish Publicly"
          description="Enough to explain the product boundary and trust model."
        >
          <BulletList
            items={[
              'That app.optfi.eu is private and access-restricted',
              'That access follows allowlist and review principles',
              'That operator actions are expected to be auditable',
              'That identity and authorization are treated as separate design concerns',
            ]}
          />
        </DocContentCard>

        <DocContentCard
          title="What Stays Out of Public Docs"
          description="Details that would weaken security or expose internals."
        >
          <BulletList
            items={[
              'Specific identity provider implementation choices and configuration values',
              'Session internals, callback paths, or administrative control endpoints',
              'Exact role definitions tied to private workflows',
              'Provider-specific failover or emergency procedures',
            ]}
          />
        </DocContentCard>
      </section>
    </PageContainer>
  )
}

function AccessLine({ icon: Icon, title, text }: { icon: typeof Lock; title: string; text: string }) {
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
