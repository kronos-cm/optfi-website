import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageContainer, PageHero } from '../components/page-primitives'
import { Button } from '../components/ui/button'

export function NotFoundPage() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="404"
        title="This page does not exist yet"
        description="The public site is being built in stages. Use the docs hub or roadmap to navigate current pages."
        actions={
          <>
            <Button asChild>
              <Link to="/docs">Go to docs hub</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Back home
              </Link>
            </Button>
          </>
        }
      />
    </PageContainer>
  )
}
