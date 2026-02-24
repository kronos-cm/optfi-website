import { KeyRound, Lock, ShieldAlert, ShieldCheck, SplitSquareVertical, UserCheck, Wallet } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { PageContainer, PageHero, SectionHeading, DocContentCard, BulletList } from '../components/page-primitives'

const principles = [
  {
    icon: SplitSquareVertical,
    title: 'Least privilege',
    text: 'Capabilities should be separated so no single credential or interface carries unnecessary power.',
  },
  {
    icon: ShieldCheck,
    title: 'Fail-safe defaults',
    text: 'Risky actions should be harder to perform than safe ones, and reversible controls should be explicit.',
  },
  {
    icon: UserCheck,
    title: 'Operator accountability',
    text: 'Access decisions and privileged actions should be attributable and reviewable.',
  },
  {
    icon: ShieldAlert,
    title: 'Blast-radius control',
    text: 'Design should assume mistakes happen and limit the consequences when they do.',
  },
] as const

export function DocsSafetyPage() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="Docs / Safety"
        title="Public safety principles for handling access, secrets, and operational risk"
        description="OptFi treats safety as a product requirement, not a checklist. This page communicates the public-facing security posture without exposing sensitive implementation details."
        actions={
          <>
            <Badge variant="success">Public safety page</Badge>
            <Badge variant="default">High-level posture only</Badge>
          </>
        }
      />

      <section className="mt-10 space-y-4">
        <SectionHeading
          kicker="Safety Posture"
          title="Security decisions are made to reduce blast radius and operator error"
          description="The public site describes the intent and rules of the safety model. Detailed procedures and internal topology remain private."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((item) => (
            <Card key={item.title} className="glass h-full">
              <CardHeader>
                <div className="mb-2 grid h-9 w-9 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                  <item.icon className="h-4 w-4" />
                </div>
                <CardTitle className="text-base">{item.title}</CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-2">
        <DocContentCard
          title="Publicly Shareable Safety Rules"
          description="Rules that improve trust without leaking operational secrets."
        >
          <BulletList
            items={[
              'Separate monitoring access from action-taking access whenever possible',
              'Keep high-risk permissions disabled unless explicitly required and reviewed',
              'Prefer revocable credentials and auditable access paths',
              'Document emergency pause and recovery principles before broader rollout',
              'Treat public transparency and private operational detail as different documentation layers',
            ]}
          />
        </DocContentCard>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Safety Boundaries (Public View)</CardTitle>
            <CardDescription>What categories exist without revealing how they are implemented.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            <SafetyLine icon={KeyRound} title="Secrets" text="Credentials and keys are managed through private workflows and are never documented on the public site." />
            <SafetyLine icon={Lock} title="Access control" text="Private surfaces require restricted access and explicit authorization governance." />
            <SafetyLine icon={Wallet} title="Wallet operations" text="Public docs may describe operational discipline, but not exact procedures or internal controls." />
          </CardContent>
        </Card>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <DocContentCard
          title="What We Avoid Publishing"
          description="Publishing these details would create unnecessary risk."
        >
          <BulletList
            items={[
              'Credential names, storage paths, account identifiers, or privileged endpoint references',
              'Detailed emergency procedures that expose internal control flows',
              'Provider-specific hardening settings and deployment topology internals',
              'Anything that makes social engineering or infrastructure targeting easier',
            ]}
          />
        </DocContentCard>

        <DocContentCard
          title="How This Connects to Product Quality"
          description="Safety is part of the product experience, not only backend hygiene."
        >
          <BulletList
            items={[
              'Clear safety communication builds trust without making promises we cannot support',
              'Good boundaries reduce avoidable incidents and operational churn',
              'A public safety page helps align future collaborators on the same posture',
            ]}
          />
        </DocContentCard>
      </section>
    </PageContainer>
  )
}

function SafetyLine({ icon: Icon, title, text }: { icon: typeof Lock; title: string; text: string }) {
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
