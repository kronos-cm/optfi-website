import { ArrowLeft, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageContainer, PageHero, DocContentCard, BulletList } from '../components/page-primitives'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'

export function PlannedDocPage({
  title,
  eyebrow,
  summary,
  whyItMatters,
  nextContent,
}: {
  title: string
  eyebrow: string
  summary: string
  whyItMatters: string
  nextContent: string[]
}) {
  return (
    <PageContainer>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={summary}
        actions={
          <>
            <Badge variant="default">Planned page</Badge>
            <Badge variant="warning"><Clock3 className="h-3.5 w-3.5" /> Next docs sprint</Badge>
            <Button asChild variant="secondary">
              <Link to="/docs">
                <ArrowLeft className="h-4 w-4" />
                Back to docs hub
              </Link>
            </Button>
          </>
        }
      />

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <DocContentCard title="Why This Page Exists" description="This placeholder is intentional, not a missing route.">
          <p>{whyItMatters}</p>
        </DocContentCard>

        <DocContentCard title="What Will Be Added Here" description="Planned content outline for the next iteration.">
          <BulletList items={nextContent} />
        </DocContentCard>
      </section>
    </PageContainer>
  )
}
