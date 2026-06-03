import { AlertTriangle, CheckCircle2, Clock3, FileText, RefreshCcw, ShieldCheck } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { PageContainer, PageHero, SectionHeading } from '../components/page-primitives'

const gateRules = [
  {
    icon: Clock3,
    title: 'Current or blocked',
    text: 'A scorecard that is outside the freshness window cannot be treated as promote evidence.',
  },
  {
    icon: FileText,
    title: 'Source named',
    text: 'The dataset, scorecard path, paper run, and research-gate event have to be visible enough to audit.',
  },
  {
    icon: RefreshCcw,
    title: 'Repeatable refresh',
    text: 'Operators need a command that can refresh the evidence and a test that proves stale handling still works.',
  },
  {
    icon: ShieldCheck,
    title: 'Capital stays gated',
    text: 'Fresh evidence is still only one gate. Failing PnL, drawdown, uptime, or coverage keeps capital blocked.',
  },
] as const

const currentSlice = [
  'The freshness checker now has deterministic tests for current, stale, missing, and invalid evidence.',
  'The commit gate runs script typecheck plus the freshness tests before frontend lint and typecheck.',
  'The current paper proof remains blocked; this slice improves trust in the gate, not the strategy economics.',
] as const

export function JournalFreshEvidencePage() {
  return (
    <PageContainer>
      <article>
        <PageHero
          eyebrow="Journal / Proof discipline"
          title="Fresh evidence beats backtest optimism"
          description="OptFi now treats evidence freshness as a testable contract. A stale or invalid proof artifact is a blocker, even when the old result looked promising."
          actions={
            <>
              <Badge variant="warning">P1 started</Badge>
              <Badge variant="default">Proof still blocked</Badge>
              <Badge variant="default">No investment advice</Badge>
            </>
          }
        />

        <section className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="glass">
            <CardHeader>
              <div className="mb-2 grid h-10 w-10 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <CardTitle>Old proof is not proof</CardTitle>
              <CardDescription>
                A stale scorecard can be more dangerous than a failed one because it can look clean while the market context has changed.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-[color:var(--muted-foreground)]">
              <p>
                Backtests and paper runs are useful only when they are current, reproducible, and connected to the actual gate that would
                allow or block capital. OptFi now tests the evidence freshness checker itself so the gate does not depend on manual memory.
              </p>
              <p>
                The important detail is not that the current strategy suddenly earns money. It does not. The important detail is that stale,
                missing, and invalid evidence now have a regression test before the system can move further into P1.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            {gateRules.map((rule) => (
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
            kicker="P1 Slice"
            title="What changed first"
            description="The first P1 deliverable is deliberately small: make the freshness gate testable before building more dashboard surface."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {currentSlice.map((text, index) => (
              <Card key={text} className="glass">
                <CardHeader>
                  <Badge variant={index === 2 ? 'warning' : 'brand'} className="mb-2 w-fit">
                    {index === 2 ? 'Still blocked' : `Delivered ${index + 1}`}
                  </Badge>
                  <CardDescription>{text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-4 lg:grid-cols-2">
          <Card className="glass">
            <CardHeader>
              <CardTitle>What happens next</CardTitle>
              <CardDescription>
                The next P1 work moves the stale state from script evidence into the operator-facing API and cockpit.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
              <p>
                The cockpit should show "Proof stale" as a blocker with a refresh action, not as a buried timestamp. The API should return
                current and stale scorecard states clearly enough that canary promotion cannot accidentally treat stale evidence as valid.
              </p>
              <p>
                After that, the strategy matrix still needs better economics. Fresh losing evidence is honest, but it is not monetizable.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-emerald-200/80 bg-emerald-50/70">
            <CardHeader>
              <div className="mb-2 grid h-10 w-10 place-items-center rounded-xl bg-white/80 text-emerald-800 ring-1 ring-white/70">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <CardTitle>Trust improves before revenue does</CardTitle>
              <CardDescription>
                This is not a revenue claim. It is a trust claim: the product is less likely to fool its operator.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-[color:var(--muted-foreground)]">
              A credible money product has to prove that it can say no. The current system is still saying no to capital, and the first P1
              slice makes that "no" easier to verify.
            </CardContent>
          </Card>
        </section>
      </article>
    </PageContainer>
  )
}
