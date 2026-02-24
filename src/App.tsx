import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteShell } from './components/site-shell'
import { HomePage } from './pages/home-page'
import { DocsHubPage } from './pages/docs-hub-page'
import { DocsArchitecturePage } from './pages/docs-architecture-page'
import { DocsStrategyPage } from './pages/docs-strategy-page'
import { DocsRunbookPage } from './pages/docs-runbook-page'
import { DocsSafetyPage } from './pages/docs-safety-page'
import { DocsOperatorAccessPage } from './pages/docs-operator-access-page'
import { DocsMonetizationPage } from './pages/docs-monetization-page'
import { RoadmapPage } from './pages/roadmap-page'
import { StatusPage } from './pages/status-page'
import { TransparencyPage } from './pages/transparency-page'
import { NotFoundPage } from './pages/not-found-page'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/docs" element={<DocsHubPage />} />
      <Route path="/docs/architecture" element={<DocsArchitecturePage />} />
      <Route path="/docs/strategy" element={<DocsStrategyPage />} />
      <Route path="/docs/runbook" element={<DocsRunbookPage />} />
      <Route path="/docs/safety" element={<DocsSafetyPage />} />
      <Route path="/docs/operator-access" element={<DocsOperatorAccessPage />} />
      <Route path="/docs/monetization" element={<DocsMonetizationPage />} />
      <Route path="/roadmap" element={<RoadmapPage />} />
      <Route path="/status" element={<StatusPage />} />
      <Route path="/transparency" element={<TransparencyPage />} />
      <Route path="/index.html" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteShell>
        <AppRoutes />
      </SiteShell>
    </BrowserRouter>
  )
}
