import { Activity, AlertTriangle, Compass, ShieldCheck, Sparkles } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { PageContainer, PageHero, SectionHeading, DocContentCard, BulletList } from '../components/page-primitives'

const publicFaq = [
  {
    q: 'Why publish an approach page at all?',
    a: 'Because people should understand how OptFi thinks about validation, safety, and disciplined improvement. The public site explains the process without disclosing proprietary methods.',
  },
  {
    q: 'Does this page contain trading logic or parameters?',
    a: 'No. Specific methods, parameters, and implementation details are intentionally excluded from the public website and private by design.',
  },
  {
    q: 'What does “validation-first” mean here?',
    a: 'It means progress claims should follow evidence, monitoring, and review rather than hype. The process matters as much as the outcome.',
  },
] as const

export function DocsStrategyPage() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="Docs / Approach & Validation"
        title="How OptFi evaluates progress without disclosing proprietary methods"
        description="This page explains the public philosophy for validation and iteration. It does not publish implementation specifics, signal logic, or operational parameters."
        actions={
          <>
            <Badge variant="warning">Public-safe overview</Badge>
            <Badge variant="default">No method disclosure</Badge>
          </>
        }
      />

      <section className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <DocContentCard
          title="Public Validation Principles"
          description="What can be said publicly without leaking intellectual property."
        >
          <BulletList
            items={[
              'Progress should be measured using evidence and review, not anecdotal wins',
              'Risk and safety constraints should be explicit and monitored continuously',
              'Instrumentation quality should improve before major changes are made',
              'Changes should be introduced deliberately and evaluated over meaningful windows',
              'Public communication should stay honest about maturity and uncertainty',
            ]}
          />
        </DocContentCard>

        <Card className="glass">
          <CardHeader>
            <CardTitle>What This Page Does Not Disclose</CardTitle>
            <CardDescription>These details are intentionally kept out of the public site.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <MetricLine icon={AlertTriangle} label="Proprietary methods" description="No specific signal logic, thresholds, or tuning details." />
            <MetricLine icon={ShieldCheck} label="Operational constraints" description="No internal guard configuration values or control surfaces." />
            <MetricLine icon={Activity} label="Private telemetry" description="No detailed execution traces, positions, or internal diagnostics." />
            <MetricLine icon={Compass} label="Internal roadmap logic" description="No private decision criteria beyond high-level sequencing." />
          </CardContent>
        </Card>
      </section>

      <section className="mt-12 space-y-4">
        <SectionHeading
          kicker="Public Reader Goal"
          title="Understand the discipline, not the proprietary recipe"
          description="The public site should explain how OptFi thinks and operates at a high level so readers can assess the product and philosophy without exposing internal know-how."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <PrincipleCard icon={ShieldCheck} title="Safety" text="Public messaging should reflect disciplined controls and careful rollout." />
          <PrincipleCard icon={Sparkles} title="Clarity" text="Explain boundaries, responsibilities, and progress in plain language." />
          <PrincipleCard icon={Activity} title="Evidence" text="Claims should be earned through monitoring and review, not implied by design language alone." />
        </div>
      </section>

      <section className="mt-12">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Approach FAQ</CardTitle>
            <CardDescription>Public-facing answers to common questions about disclosure and validation philosophy.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible defaultValue="item-0">
              {publicFaq.map((item, index) => (
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

function PrincipleCard({ icon: Icon, title, text }: { icon: typeof Activity; title: string; text: string }) {
  return (
    <Card className="glass h-full">
      <CardHeader>
        <div className="mb-2 grid h-9 w-9 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
          <Icon className="h-4 w-4" />
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{text}</CardDescription>
      </CardContent>
    </Card>
  )
}

function MetricLine({
  icon: Icon,
  label,
  description,
}: {
  icon: typeof Activity
  label: string
  description: string
}) {
  return (
    <div className="rounded-xl border border-white/70 bg-white/70 p-3">
      <div className="mb-1 flex items-center gap-2">
        <Icon className="h-4 w-4 text-sky-700" />
        <p className="text-sm font-semibold text-[color:var(--foreground)]">{label}</p>
      </div>
      <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">{description}</p>
    </div>
  )
}
