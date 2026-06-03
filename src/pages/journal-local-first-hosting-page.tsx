import { CircleSlash, Clock3, Cpu, ReceiptText } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { PageContainer, PageHero, SectionHeading } from '../components/page-primitives'

const costRules = [
  {
    icon: Cpu,
    title: 'Run locally while proof is weak',
    text: 'The cockpit, research lab, and paper proof loop can run locally. Paying for private hosting before proof would create pressure without improving the evidence.',
  },
  {
    icon: CircleSlash,
    title: 'Keep private runtime off',
    text: 'No private hosted trading runtime is active. If continuity or proof justifies one later, it must come back as an explicit workpackage with a shutdown condition.',
  },
  {
    icon: ReceiptText,
    title: 'Name the real burn',
    text: 'Current infrastructure burn is EUR 0. The only active variable cost is model and token usage tied to implementation, verification, and documentation.',
  },
] as const

export function JournalLocalFirstHostingPage() {
  return (
    <PageContainer>
      <article>
        <PageHero
          eyebrow="Journal / Operating discipline"
          title="Why OptFi stays local-first until proof pays for hosting"
          description="A strategy system that is not yet profitable should not create a standing infrastructure bill. OptFi keeps private runtime local until evidence or continuity makes hosting worth the cost."
          actions={
            <>
              <Badge variant="success">Infrastructure burn: EUR 0</Badge>
              <Badge variant="default">Local-first</Badge>
              <Badge variant="warning">No return claims</Badge>
            </>
          }
        />

        <section className="mt-10 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="glass">
            <CardHeader>
              <div className="mb-2 grid h-10 w-10 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                <Clock3 className="h-5 w-5" />
              </div>
              <CardTitle>Hosting is not proof</CardTitle>
              <CardDescription>
                Paying for uptime does not make a strategy robust, profitable, or safe to scale.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-[color:var(--muted-foreground)]">
              <p>
                OptFi is still in an evidence-first stage. The useful work is making scorecards current, finding blockers,
                documenting decisions, and keeping execution boundaries clear. Those jobs do not require a private hosted runtime today.
              </p>
              <p>
                The operating rule is simple: local proof first, hosted continuity later. If a future canary or monitoring need justifies
                hosting, it must include a cost cap, an owner decision, and a shutdown condition.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {costRules.map((rule) => (
              <Card key={rule.title} className="glass">
                <CardHeader className="flex flex-row gap-4">
                  <div className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                    <rule.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{rule.title}</CardTitle>
                    <CardDescription>{rule.text}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <SectionHeading
            kicker="Cost Gate"
            title="What has to be true before hosting comes back"
            description="The private runtime stays off unless one of these conditions is explicit and reviewed."
          />
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-base">Proof</CardTitle>
                <CardDescription>A fresh scorecard and canary evidence justify paying for runtime continuity.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-base">Safety</CardTitle>
                <CardDescription>Wallet policy, secrets, monitoring, and rollback are ready before any private runtime is exposed.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-base">Shutdown</CardTitle>
                <CardDescription>Every kept paid surface has a clear stop condition before it is turned on.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="mt-12">
          <Card className="glass border-amber-200/80 bg-amber-50/70">
            <CardHeader>
              <CardTitle>Local-first does not mean finished</CardTitle>
              <CardDescription>
                It means the system refuses to spend recurring infrastructure money before the operating proof earns it.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
              <p>
                The current proof state is deliberately separate from the cost state. Infrastructure burn can be under control while strategy
                evidence still fails. That distinction matters: low cost is good discipline, not a claim that the strategy makes money.
              </p>
              <p>
                The next useful work is to keep evidence current, expose the current blocker clearly, and only consider hosting when the system
                has a reason stronger than convenience.
              </p>
            </CardContent>
          </Card>
        </section>
      </article>
    </PageContainer>
  )
}
