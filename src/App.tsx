import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteShell } from './components/site-shell'
import { HomePage } from './pages/home-page'
import { DocsHubPage } from './pages/docs-hub-page'
import { DocsArchitecturePage } from './pages/docs-architecture-page'
import { DocsStrategyPage } from './pages/docs-strategy-page'
import { RoadmapPage } from './pages/roadmap-page'
import { StatusPage } from './pages/status-page'
import { PlannedDocPage } from './pages/planned-doc-page'
import { NotFoundPage } from './pages/not-found-page'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/docs" element={<DocsHubPage />} />
      <Route path="/docs/architecture" element={<DocsArchitecturePage />} />
      <Route path="/docs/strategy" element={<DocsStrategyPage />} />
      <Route
        path="/docs/runbook"
        element={
          <PlannedDocPage
            eyebrow="Docs / Operations"
            title="Operator Runbook (Planned)"
            summary="This page will become the public-facing explanation of how operating workflows and reliability checks fit together, without exposing private runtime details."
            whyItMatters="Runbooks are where reliability lives. This page should make the operator workflow understandable to collaborators and future users without forcing them into repo internals."
            nextContent={[
              'Mental model: public surfaces vs private operating workflows',
              'What to monitor and how to interpret regressions',
              'Common failure modes and recovery actions',
              'Promotion guidance across environments',
            ]}
          />
        }
      />
      <Route
        path="/docs/safety"
        element={
          <PlannedDocPage
            eyebrow="Docs / Safety"
            title="Security & Wallet Safety (Planned)"
            summary="This page will present the security model for secrets, credentials, and wallet operations in a public-friendly format, with the private specifics kept out of the public surface."
            whyItMatters="Security guidance is one of the platform's differentiators. It should be legible and product-grade, not buried in implementation notes."
            nextContent={[
              'Principles for secret handling across local and hosted environments',
              'Permission separation and blast-radius reduction',
              'Withdrawal restrictions and emergency disable procedures',
              'Public-safe security posture summaries for optfi.eu',
            ]}
          />
        }
      />
      <Route
        path="/docs/operator-access"
        element={
          <PlannedDocPage
            eyebrow="Docs / Product"
            title="Operator Access for app.optfi.eu (Planned)"
            summary="This page will describe how the private operator app is authenticated and authorized using restricted access controls, separate from the public site."
            whyItMatters="The platform needs a clear private-operator access model before app.optfi.eu is exposed. This page should document the design and rollout plan."
            nextContent={[
              'Managed vs custom identity tradeoffs for operator-only access',
              'Allowlist model (users / groups) and admin process',
              'Session management and backend authorization responsibilities',
              'Rollout sequence for staging and production operator environments',
            ]}
          />
        }
      />
      <Route
        path="/docs/monetization"
        element={
          <PlannedDocPage
            eyebrow="Docs / Product"
            title="Monetization Options (Planned)"
            summary="This page will map future revenue streams for OptFi, separating product revenue possibilities from self-trading returns and documenting tradeoffs."
            whyItMatters="Thinking about monetization early helps shape what product capabilities are actually worth building, while keeping strategy validation and productization concerns separate."
            nextContent={[
              'Potential product revenue streams (monitoring, tooling, education, analytics)',
              'Hybrid execution tooling opportunities and constraints',
              'Private-method returns vs platform-product economics tradeoff matrix',
              'Compliance and messaging constraints for EU/Germany context',
            ]}
          />
        }
      />
      <Route path="/roadmap" element={<RoadmapPage />} />
      <Route path="/status" element={<StatusPage />} />
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
