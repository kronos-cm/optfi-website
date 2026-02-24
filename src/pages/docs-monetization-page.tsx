import { BarChart3, BookOpen, Briefcase, CircleDollarSign, Scale, ShieldCheck, Sparkles } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { PageContainer, PageHero, SectionHeading, DocContentCard, BulletList } from '../components/page-primitives'

const lanes = [
  {
    icon: Briefcase,
    title: 'Platform product revenue',
    text: 'Monitoring, analytics, tooling, and operator workflow products that do not depend on publishing private methods.',
  },
  {
    icon: BookOpen,
    title: 'Education and research products',
    text: 'Playbooks, explainers, and frameworks built around disciplined operations and risk-aware decision making.',
  },
  {
    icon: BarChart3,
    title: 'Hybrid operator tooling',
    text: 'Products that help users run their own workflows while keeping sensitive execution decisions private.',
  },
  {
    icon: CircleDollarSign,
    title: 'Capital efficiency track',
    text: 'Self-directed operating returns remain a track, but not the only business path and not the public narrative anchor.',
  },
] as const

export function DocsMonetizationPage() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="Docs / Product"
        title="Monetization should come from product value, not only private operating outcomes"
        description="OptFi is planning monetization as a portfolio of options. This page explains the public framing and evaluation criteria without disclosing private method details or making premature performance claims."
        actions={
          <>
            <Badge variant="success">Public monetization page</Badge>
            <Badge variant="default">No performance claims</Badge>
          </>
        }
      />

      <section className="mt-10 space-y-4">
        <SectionHeading
          kicker="Monetization Philosophy"
          title="Build a business model that survives uncertainty"
          description="Product revenue, tooling, and education can create durable value even while private methods continue to evolve. This reduces pressure to overstate early results."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {lanes.map((lane) => (
            <Card key={lane.title} className="glass h-full">
              <CardHeader>
                <div className="mb-2 grid h-9 w-9 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                  <lane.icon className="h-4 w-4" />
                </div>
                <CardTitle className="text-base">{lane.title}</CardTitle>
                <CardDescription>{lane.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <DocContentCard
          title="How OptFi Should Evaluate Monetization Options"
          description="Public criteria that can guide prioritization without exposing proprietary internals."
        >
          <BulletList
            items={[
              'Does this create value independent of private method disclosure?',
              'Can it be delivered safely with clear boundaries between public and private surfaces?',
              'Does it fit a realistic operating and support model for a lean team?',
              'Can it be described honestly without making forward-looking performance claims?',
              'Does it avoid creating regulatory or trust burdens too early?',
            ]}
          />
        </DocContentCard>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Public Messaging Constraints</CardTitle>
            <CardDescription>What the website should and should not imply while monetization planning matures.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            <MonetizationLine icon={ShieldCheck} title="No implied guarantees" text="The site should avoid language that implies reliable returns or guaranteed outcomes." />
            <MonetizationLine icon={Scale} title="Compliance-aware framing" text="Describe product value and process quality without crossing into promotional claims about outcomes." />
            <MonetizationLine icon={Sparkles} title="Credibility over hype" text="Strong design should support clear communication, not overcompensate for unproven claims." />
          </CardContent>
        </Card>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-2">
        <DocContentCard
          title="Near-Term Public Deliverables"
          description="Monetization planning can advance now without waiting for final product packaging."
        >
          <BulletList
            items={[
              'Publish a clear problem statement for the platform and who it is for',
              'Explain the distinction between public product value and private methods',
              'Document monetization hypotheses and the evidence needed to prioritize them',
              'Create a transparency-friendly roadmap that avoids performance-forward messaging',
            ]}
          />
        </DocContentCard>

        <DocContentCard
          title="What Stays Private"
          description="These belong in internal planning and strategy docs, not the public site."
        >
          <BulletList
            items={[
              'Private method economics and internal threshold assumptions',
              'Detailed operating metrics used for internal decision making',
              'Implementation specifics for private services and controls',
              'Non-public partnership or commercial discussions',
            ]}
          />
        </DocContentCard>
      </section>
    </PageContainer>
  )
}

function MonetizationLine({ icon: Icon, title, text }: { icon: typeof ShieldCheck; title: string; text: string }) {
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
