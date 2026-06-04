import { ArrowRightLeft, BookOpenText, Clock3, FlaskConical, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '../components/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { PageContainer, PageHero, SectionHeading } from '../components/page-primitives'

const entries = [
  {
    to: '/journal/when-arbitrage-stops-being-free-money',
    icon: ArrowRightLeft,
    category: 'Strategy economics',
    title: 'When arbitrage stops being free money. The receipt arrives first.',
    summary: 'A data-backed story on why visible CEX price gaps can disappear under fees, spread, slippage, and tax-aware accounting.',
    badge: 'New',
  },
  {
    to: '/journal/fresh-evidence',
    icon: Clock3,
    category: 'Proof discipline',
    title: 'Old proof can look clean. Fresh proof can still say no.',
    summary: 'The first P1 slice makes evidence freshness a deterministic test contract before more dashboard surface gets added.',
    badge: 'P1 started',
  },
  {
    to: '/journal/proof-before-capital',
    icon: ShieldCheck,
    category: 'Proof discipline',
    title: 'Capital waits at the locked door. Proof holds the key.',
    summary: 'The current proof gate is blocked. This story explains what has to improve before capital access is credible.',
    badge: 'Current proof: blocked',
  },
  {
    to: '/journal/local-first-hosting',
    icon: Clock3,
    category: 'Operating discipline',
    title: 'We turned the server bill into a gate. Not a habit.',
    summary: 'Infrastructure burn is EUR 0 right now. The private runtime stays off until proof or continuity earns it.',
    badge: 'Local-first',
  },
  {
    to: '/journal/defi-source-timestamp',
    icon: FlaskConical,
    category: 'DeFi research',
    title: 'A DeFi yield number walked in without a clock. We sent it back.',
    summary: 'A DeFi yield row cannot be ranked as current research evidence until its source timestamp is visible and fresh.',
    badge: 'Research-only',
  },
  {
    to: '/journal/strategy-proof',
    icon: BookOpenText,
    category: 'Strategy thinking',
    title: '28 strategies walked into the lab. Zero promoted. Here is what that means.',
    summary: 'A prior strategy-lab note on why a zero-promote result can still be useful when the gate is honest.',
    badge: 'Archive',
  },
] as const

export function JournalIndexPage() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="Journal"
        title="Public notes from the proof loop"
        description="These entries explain OptFi's operating discipline, research gates, and DeFi posture without exposing private telemetry or making return claims."
        actions={
          <>
            <Badge variant="warning">Proof blocked</Badge>
            <Badge variant="default">No investment advice</Badge>
            <Badge variant="brand">Local-first</Badge>
          </>
        }
      />

      <section className="mt-10 space-y-4">
        <SectionHeading
          kicker="Entries"
          title="Current public writing"
          description="The newest entries focus on the trust problem directly: cost control is solved locally, but capital proof is not."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {entries.map((entry) => (
            <Link key={entry.to} to={entry.to} className="group block">
              <Card className="glass h-full transition-transform duration-150 group-hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                      <entry.icon className="h-5 w-5" />
                    </div>
                    <Badge variant={entry.badge.includes('blocked') ? 'warning' : 'default'}>{entry.badge}</Badge>
                  </div>
                  <p className="font-mono text-xs tracking-[0.16em] text-[color:var(--muted-foreground)]">{entry.category}</p>
                  <CardTitle className="text-lg">{entry.title}</CardTitle>
                  <CardDescription>{entry.summary}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </PageContainer>
  )
}
