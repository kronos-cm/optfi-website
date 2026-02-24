import { AlertCircle, BookOpenCheck, Clock3, ShieldCheck, Sparkles, TriangleAlert } from 'lucide-react'
import { publicReporting } from '../content/public-reporting'
import { PageContainer, PageHero, SectionHeading } from '../components/page-primitives'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const principles = [
  {
    icon: ShieldCheck,
    title: 'No performance marketing',
    text: 'Public communication focuses on discipline, maturity, and process quality instead of return claims.',
  },
  {
    icon: BookOpenCheck,
    title: 'Curated summaries',
    text: 'Transparency pages publish reviewed summaries, not raw private observability streams or operator telemetry.',
  },
  {
    icon: TriangleAlert,
    title: 'Bounded disclosure',
    text: 'Details that increase exploitability or reveal proprietary methods are intentionally withheld.',
  },
  {
    icon: Clock3,
    title: 'Time-windowed updates',
    text: 'Updates should describe what changed, why it matters, and what is still uncertain over a defined review window.',
  },
] as const

export function TransparencyPage() {
  const updates = publicReporting.transparencyUpdates

  return (
    <PageContainer>
      <PageHero
        eyebrow="Transparency (Public, Sanitized)"
        title="Public transparency should increase trust without increasing risk"
        description="This page defines how OptFi intends to communicate progress, incidents, and maturity changes. It is a public-facing disclosure policy, not an operator dashboard."
        actions={
          <>
            <Badge variant="brand">Transparency policy</Badge>
            <Badge variant="default">Sanitized summaries only</Badge>
          </>
        }
      />

      <section className="mt-10 space-y-4">
        <SectionHeading
          kicker="Transparency Principles"
          title="What the public transparency surface is for"
          description="The objective is to communicate honestly with stakeholders while preserving safety, operational integrity, and private intellectual property."
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

      <section className="mt-12 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="glass">
          <CardHeader>
            <CardTitle>What Will Be Published Here</CardTitle>
            <CardDescription>Public-safe updates intended for collaborators, users, and stakeholders.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" /><span>Maturity-stage changes and major roadmap shifts</span></li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" /><span>Public-impacting incidents and resolution summaries</span></li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" /><span>Documentation coverage milestones and public product improvements</span></li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" /><span>Changes to public disclosure boundaries or communication policy</span></li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>What Will Not Be Published Here</CardTitle>
            <CardDescription>Private operational and proprietary details remain outside the public surface.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" /><span>Raw internal observability streams or operator-only telemetry</span></li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" /><span>Implementation specifics for private services, auth, or infrastructure</span></li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" /><span>Proprietary methods, tuning details, or private decision internals</span></li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" /><span>Claims that imply guaranteed outcomes or unverified performance narratives</span></li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-2">
        <Card className="glass">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[color:var(--brand-700)]" />
              <CardTitle>Publishing Workflow</CardTitle>
            </div>
            <CardDescription>A practical workflow for turning private reviews into public-safe updates.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            <p>1. Private review produces a structured summary and flags anything sensitive.</p>
            <p>2. A sanitized public summary is drafted with impact, status, and next-step context.</p>
            <p>3. The summary is reviewed for disclosure risk before publication on `optfi.eu`.</p>
            <p>4. The roadmap/status/transparency pages are updated consistently to avoid mixed messages.</p>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Why This Matters</CardTitle>
            <CardDescription>Transparency is a product quality feature when handled with discipline.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            <p>
              Strong transparency makes the platform easier to trust and evaluate. Poor transparency can either leak sensitive details or create misleading narratives.
            </p>
            <p>
              This page exists to make the disclosure boundary explicit and to keep future public updates consistent with the operating model.
            </p>
            <div className="rounded-xl border border-white/70 bg-white/70 p-3">
              <div className="mb-1 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-sky-700" />
                <p className="text-sm font-semibold text-[color:var(--foreground)]">Implementation note</p>
              </div>
              <p>
                Public summaries should be generated from reviewed internal outputs, not directly from private logs or raw operator tooling.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12 space-y-4">
        <SectionHeading
          kicker="Transparency Feed"
          title="Reviewed public updates"
          description="This timeline is driven by a structured public reporting feed produced from reviewed internal summaries. It is curated and sanitized by design."
        />
        <div className="grid gap-4">
          {updates.map((update) => (
            <Card key={update.id} className="glass">
              <CardHeader>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge variant={update.severity === 'warning' ? 'warning' : update.severity === 'attention' ? 'default' : 'success'}>
                    {update.severity}
                  </Badge>
                  <Badge variant="default">{update.category}</Badge>
                  <span className="text-xs text-[color:var(--muted-foreground)]">
                    {new Date(update.publishedAt).toLocaleString()}
                  </span>
                </div>
                <CardTitle>{update.title}</CardTitle>
                <CardDescription>{update.summary}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 lg:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-mono tracking-[0.16em] text-[color:var(--muted-foreground)]">SUMMARY</p>
                  <ul className="space-y-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                    {update.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-xs font-mono tracking-[0.16em] text-[color:var(--muted-foreground)]">NEXT</p>
                  <ul className="space-y-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                    {update.nextSteps.map((step) => (
                      <li key={step} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageContainer>
  )
}
