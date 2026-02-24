import {
  Activity,
  ArrowRight,
  Cloud,
  Compass,
  Lock,
  ShieldCheck,
  Sparkles,
  Wallet,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { PageContainer, PageHero, SectionHeading } from '../components/page-primitives'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Guardrails First',
    text: 'Safety constraints and review discipline before any broader rollout decisions.',
  },
  {
    icon: Activity,
    title: 'Observable Operations',
    text: 'Build monitoring and auditability into the platform instead of relying on intuition.',
  },
  {
    icon: Wallet,
    title: 'Economics-Aware Design',
    text: 'Product and operating decisions should account for costs, constraints, and sustainability.',
  },
  {
    icon: Cloud,
    title: 'Phased Promotion',
    text: 'Prove behavior in controlled environments before promoting systems to more durable runtime setups.',
  },
] as const

const faqs = [
  {
    q: 'Is OptFi a public trading app?',
    a: 'No. This site is the public product and documentation experience. Private operating surfaces are separate and not part of the public website.',
  },
  {
    q: 'Why build a docs experience instead of linking markdown files?',
    a: 'Because the public site should explain the system in product terms first. Source docs remain valuable, but they are supporting references, not the primary UX.',
  },
  {
    q: 'What comes first: monetization or strategy optimization?',
    a: 'The current priority is the public website and documentation experience, then monetization planning, then deeper iteration on private operating methods using evidence.',
  },
] as const

export function HomePage() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="Public Product & Docs"
        title="A modern front door for a disciplined trading platform"
        description="OptFi is building a safety-first platform and learning system. This site is where the principles, roadmap, and product direction are explained clearly without exposing private operations or proprietary methods."
        actions={
          <>
            <Button asChild size="lg">
              <Link to="/docs">
                Explore the Docs Experience
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/roadmap">See Roadmap & Priorities</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/status">View Public Status</Link>
            </Button>
          </>
        }
      />

      <section className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="glass">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[color:var(--brand-700)]" />
              <CardTitle>What This Site Is For</CardTitle>
            </div>
            <CardDescription>
              Product narrative, designed documentation, roadmap communication, and sanitized status visibility.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-xl border border-white/70 bg-white/70 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-sky-100 text-sky-800">
                      <pillar.icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-semibold">{pillar.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">{pillar.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Delivery Sequence (Current)</CardTitle>
            <CardDescription>
              The order matters. We are deliberately not mixing website work, monetization planning, and strategy tuning all at once.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <SequenceStep icon={Compass} title="1. Public site UX" text="Build a sleek docs-native product site with curated pages, not repo-link-first UX." />
            <SequenceStep icon={Wallet} title="2. Monetization planning" text="Model future revenue paths and constraints before productizing anything." />
            <SequenceStep icon={Activity} title="3. Method iteration" text="Improve private operating methods using measured outcomes and review discipline." />
            <SequenceStep icon={Lock} title="4. Private app access plan" text="Design a private operator surface with strong identity and access controls." />
          </CardContent>
        </Card>
      </section>

      <section className="mt-12 space-y-4">
        <SectionHeading
          kicker="First-Class Docs Experience"
          title="Designed pages for architecture and strategy, with more domains coming next"
          description="The docs hub is now part of the public site experience. These pages are the primary reader journey and intentionally avoid sensitive internals."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <LinkCard to="/docs" title="Docs Hub" description="Browse by topic and maturity level." badge="Live" />
          <LinkCard to="/docs/architecture" title="Architecture" description="System boundaries, disclosure rules, and operating principles." badge="Live" />
          <LinkCard to="/docs/strategy" title="Approach" description="Validation-first methodology and how progress should be judged." badge="Live" />
        </div>
      </section>

      <section className="mt-12">
        <Card className="glass">
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
            <CardDescription>
              Public-facing answers that keep the product narrative accurate and grounded.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.q} value={`item-${index}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </PageContainer>
  )
}

function SequenceStep({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Activity
  title: string
  text: string
}) {
  return (
    <div className="rounded-xl border border-white/70 bg-white/70 p-3">
      <div className="mb-1 flex items-center gap-2">
        <Icon className="h-4 w-4 text-sky-700" />
        <p className="text-sm font-semibold text-[color:var(--foreground)]">{title}</p>
      </div>
      <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">{text}</p>
    </div>
  )
}

function LinkCard({ to, title, description, badge }: { to: string; title: string; description: string; badge: string }) {
  return (
    <Card className="glass transition-transform hover:-translate-y-1">
      <CardHeader>
        <Badge variant="default" className="mb-2 w-fit">{badge}</Badge>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant="ghost">
          <Link to={to}>
            Open <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
