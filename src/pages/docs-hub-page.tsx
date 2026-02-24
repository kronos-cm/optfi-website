import { useMemo, useState } from 'react'
import { ArrowRight, Clock3, Filter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageContainer, PageHero, SectionHeading } from '../components/page-primitives'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { docCategoryLabels, publicDocPages, type DocCategory } from '../content/site-map'

const filters: Array<{ key: 'all' | DocCategory; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'strategy', label: 'Strategy' },
  { key: 'operations', label: 'Operations' },
  { key: 'safety', label: 'Safety' },
  { key: 'product', label: 'Product' },
]

export function DocsHubPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | DocCategory>('all')
  const [showPlanned, setShowPlanned] = useState(true)

  const visibleDocs = useMemo(() => {
    return publicDocPages.filter((doc) => {
      if (!showPlanned && doc.status === 'planned') {
        return false
      }
      if (activeFilter !== 'all' && doc.category !== activeFilter) {
        return false
      }
      return true
    })
  }, [activeFilter, showPlanned])

  const liveCount = publicDocPages.filter((doc) => doc.status === 'live').length
  const plannedCount = publicDocPages.filter((doc) => doc.status === 'planned').length

  return (
    <PageContainer>
      <PageHero
        eyebrow="Docs Experience"
        title="Designed docs pages for how OptFi works, not a raw markdown dump"
        description="This hub is the primary public reading path. Each page is curated for clarity and keeps sensitive implementation details out of the public experience."
        actions={
          <>
            <Badge variant="success">{liveCount} live pages</Badge>
            <Badge variant="warning">{plannedCount} planned pages</Badge>
          </>
        }
      />

      <section className="mt-10 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Browse by Topic</CardTitle>
            <CardDescription>
              Filter pages by what you want to understand first: platform principles, approach, operations, safety, or future product planning.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const active = filter.key === activeFilter
                return (
                  <button
                    key={filter.key}
                    type="button"
                    onClick={() => setActiveFilter(filter.key)}
                    className={[
                      'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors',
                      active
                        ? 'border-sky-300 bg-sky-100 text-sky-900'
                        : 'border-white/70 bg-white/70 text-[color:var(--muted-foreground)] hover:bg-white',
                    ].join(' ')}
                  >
                    <Filter className="h-3.5 w-3.5" />
                    {filter.label}
                  </button>
                )
              })}
            </div>
            <label className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/70 px-3 py-2 text-sm">
              <input
                type="checkbox"
                checked={showPlanned}
                onChange={(event) => setShowPlanned(event.target.checked)}
                className="h-4 w-4 rounded border-slate-300"
              />
              <span>Show planned pages (recommended while docs are being built)</span>
            </label>
            <div className="rounded-xl border border-white/70 bg-white/70 p-4 text-sm leading-6 text-[color:var(--muted-foreground)]">
              <p className="font-medium text-[color:var(--foreground)]">Current build policy</p>
              <p className="mt-1">
                Public pages should explain the platform in product and operational language first. Sensitive technical and research details are intentionally withheld from the public site.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Reading Paths</CardTitle>
            <CardDescription>Suggested sequences depending on what you are trying to achieve.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <PathCard
              title="Understand the platform"
              steps={['Platform Principles', 'Approach & Validation', 'Roadmap']}
              description="Best path for understanding what OptFi is building and how progress is evaluated at a public level."
            />
            <PathCard
              title="Evaluate business potential"
              steps={['Roadmap', 'Monetization (planned)', 'Operator Access (planned)']}
              description="Best path for understanding how product direction and future business models are being considered."
            />
            <PathCard
              title="Follow public progress"
              steps={['Status', 'Roadmap', 'Docs updates']}
              description="For periodic check-ins while the product, documentation, and private operating program continue in parallel."
            />
          </CardContent>
        </Card>
      </section>

      <section className="mt-12 space-y-4">
        <SectionHeading
          kicker="Documentation Pages"
          title="Public docs map"
          description="Curated pages available now and the next public-facing pages planned for product, safety, and operations communication."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleDocs.map((doc) => (
            <Card key={doc.slug} className="glass h-full transition-transform hover:-translate-y-1">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <Badge variant={doc.status === 'live' ? 'success' : 'default'}>{doc.status}</Badge>
                  <div className="inline-flex items-center gap-1 text-xs text-[color:var(--muted-foreground)]">
                    <Clock3 className="h-3.5 w-3.5" />
                    {doc.readTime}
                  </div>
                </div>
                <div className="mb-2 grid h-9 w-9 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                  <doc.icon className="h-4 w-4" />
                </div>
                <CardTitle className="text-lg">{doc.title}</CardTitle>
                <CardDescription>{doc.summary}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge variant="default" className="w-fit">{docCategoryLabels[doc.category]}</Badge>
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant={doc.status === 'live' ? 'default' : 'secondary'}>
                    <Link to={doc.route}>
                      {doc.status === 'live' ? 'Open page' : 'Preview plan'}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageContainer>
  )
}

function PathCard({ title, description, steps }: { title: string; description: string; steps: string[] }) {
  return (
    <div className="rounded-xl border border-white/70 bg-white/70 p-4">
      <h3 className="text-sm font-semibold text-[color:var(--foreground)]">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-[color:var(--muted-foreground)]">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {steps.map((step) => (
          <Badge key={step} variant="default">{step}</Badge>
        ))}
      </div>
    </div>
  )
}
