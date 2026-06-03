import { Clock3, DatabaseZap, ShieldAlert, Workflow } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { PageContainer, PageHero, SectionHeading } from '../components/page-primitives'

const rules = [
  {
    icon: Clock3,
    title: 'The timestamp comes first',
    text: 'Before a yield row can be ranked, OptFi checks whether the source timestamp is current enough to trust for research comparison.',
  },
  {
    icon: ShieldAlert,
    title: 'Stale APY is blocked',
    text: 'If the source is stale or missing, the row can stay visible for review, but APY-led ranking is held so it cannot look like a recommendation.',
  },
  {
    icon: Workflow,
    title: 'Research is not execution',
    text: 'A fresh source only allows research ordering. It does not create a wallet action, trading instruction, or capital allocation.',
  },
] as const

export function JournalDefiSourceTimestampPage() {
  return (
    <PageContainer>
      <article>
        <PageHero
          eyebrow="Journal / DeFi research"
          title="Why DeFi APY needs a source timestamp"
          description="DeFi yield can change quickly. OptFi treats every APY as untrusted until the source timestamp is fresh enough to support research ranking."
          actions={
            <>
              <Badge variant="warning">Research-only</Badge>
              <Badge variant="default">No investment advice</Badge>
              <Badge variant="success">Freshness gate drafted</Badge>
            </>
          }
        />

        <section className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="glass">
            <CardHeader>
              <div className="mb-2 grid h-10 w-10 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                <DatabaseZap className="h-5 w-5" />
              </div>
              <CardTitle>APY is a snapshot, not a fact</CardTitle>
              <CardDescription>
                A DeFi yield number is only meaningful when the source, update time, and assumptions are visible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-[color:var(--muted-foreground)]">
              <p>
                A lending pool, liquid staking product, or stable-stable LP can show an attractive yield at one moment and a very different one later.
                Rewards can be diluted, utilization can change, fees can move, and liquidity can dry up. If the source timestamp is missing, the
                displayed APY should not be treated as current research evidence.
              </p>
              <p>
                That is why OptFi now blocks APY-led ranking when the DeFi catalogue timestamp is stale or unknown. The row may still be shown for
                inspection, but it is not allowed to compete with fresher evidence.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {rules.map((rule) => (
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
            kicker="Freshness Gate"
            title="What happens when the source is stale"
            description="The system changes the table behavior before the operator can infer too much from a yield number."
          />
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-base">Warning</CardTitle>
                <CardDescription>The DeFi table shows a source warning above the rows.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-base">No APY ranking</CardTitle>
                <CardDescription>Rows fall back to protocol and name ordering instead of net-yield ordering.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-base">No proof</CardTitle>
                <CardDescription>Stale DeFi data cannot be compared against CEX strategy evidence.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="mt-12">
          <Card className="glass border-amber-200/80 bg-amber-50/70">
            <CardHeader>
              <CardTitle>This is not a yield recommendation</CardTitle>
              <CardDescription>
                The timestamp rule is a research hygiene rule. It does not say a fresh APY is safe, profitable, tax-efficient, or suitable for any person.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
              <p>
                A fresh timestamp only answers one narrow question: is the source recent enough to rank for research review? Smart-contract risk,
                governance risk, impermanent loss, gas, tax treatment, wallet policy, and accounting readiness still need separate checks.
              </p>
              <p>
                OptFi keeps DeFi in research-only mode until the broader proof and safety gates are satisfied.
              </p>
            </CardContent>
          </Card>
        </section>
      </article>
    </PageContainer>
  )
}
