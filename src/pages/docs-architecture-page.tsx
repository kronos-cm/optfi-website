import { Globe, Lock, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import { PageContainer, PageHero, SectionHeading, DocContentCard, BulletList } from '../components/page-primitives'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export function DocsArchitecturePage() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="Docs / Platform Principles"
        title="How OptFi separates public information from private operations"
        description="The public site explains product direction, principles, and progress. Private operating workflows and implementation details live in separate, non-public systems and documentation."
        actions={
          <>
            <Badge variant="success">Public-safe overview</Badge>
            <Badge variant="default">Implementation details withheld</Badge>
          </>
        }
      />

      <section className="mt-10 space-y-4">
        <SectionHeading
          kicker="Design Principle"
          title="Clear boundaries reduce operational and communication risk"
          description="OptFi treats the public experience, private operator workflows, and internal systems as distinct surfaces with different audiences and disclosure levels."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <DomainCard icon={Globe} title="Public Experience" text="Product story, roadmap, status, and curated documentation." />
          <DomainCard icon={Lock} title="Private Operations" text="Internal tools and workflows used by authorized operators only." />
          <DomainCard icon={ShieldCheck} title="Safety Controls" text="Policies, reviews, and constraints that govern how changes are introduced." />
          <DomainCard icon={Workflow} title="Operational Process" text="A staged approach to validation, monitoring, and continuous improvement." />
        </div>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <DocContentCard
          title="What the Public Site Covers"
          description="The public site is intentionally informative without exposing sensitive operational details."
        >
          <BulletList
            items={[
              'What OptFi is building and why the product exists',
              'Public-facing principles for safety, quality, and disciplined rollout',
              'Roadmap priorities and what is currently being worked on',
              'Status communication and transparency boundaries',
              'High-level explanations of the platform approach',
            ]}
          />
        </DocContentCard>

        <DocContentCard
          title="What Stays Private"
          description="Certain categories are intentionally excluded from the public website."
        >
          <BulletList
            items={[
              'Infrastructure implementation details and vendor-specific deployment plans',
              'Operational credentials, internal topology, and privileged endpoints',
              'Proprietary decision logic, parameterization, and research internals',
              'Detailed operator procedures that would increase attack surface',
              'Sensitive telemetry that could leak trading or operational behavior',
            ]}
          />
        </DocContentCard>
      </section>

      <section className="mt-12">
        <Card className="glass">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[color:var(--brand-700)]" />
              <CardTitle>Public Architecture Pages Are Principle Pages</CardTitle>
            </div>
            <CardDescription>
              On this site, “architecture” means understanding boundaries, responsibilities, and trust assumptions at a high level.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-[color:var(--muted-foreground)]">
            This keeps the public documentation useful for collaborators, future users, and stakeholders without turning the site into a blueprint for private operations.
          </CardContent>
        </Card>
      </section>
    </PageContainer>
  )
}

function DomainCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Globe
  title: string
  text: string
}) {
  return (
    <Card className="glass h-full">
      <CardHeader>
        <div className="mb-2 grid h-9 w-9 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
          <Icon className="h-4 w-4" />
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{text}</CardDescription>
      </CardHeader>
    </Card>
  )
}

