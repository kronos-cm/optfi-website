import { Activity, AlertCircle, CheckCircle2, Globe, Lock, Server, Shield, Wifi } from 'lucide-react'
import { PageContainer, PageHero } from '../components/page-primitives'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export function StatusPage() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="Status (Public, Sanitized)"
        title="A public status surface for product progress, not operator telemetry"
        description="This page is intentionally high-level. It communicates public-facing project state while keeping trading controls, exchange details, and private operator telemetry out of the public surface."
        actions={
          <>
            <Badge variant="brand">Sanitized status</Badge>
            <Badge variant="default">No operator controls</Badge>
          </>
        }
      />

      <section className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatusCard icon={Globe} title="optfi.eu" state="Live" detail="GitHub Pages with custom domain and HTTPS." variant="success" />
        <StatusCard icon={Activity} title="Method Validation" state="In Progress" detail="Evidence collection and review continue in parallel." variant="warning" />
        <StatusCard icon={CheckCircle2} title="Transparency Page" state="Live" detail="Public disclosure policy and summary boundaries are now documented." variant="success" />
        <StatusCard icon={Server} title="Private Services" state="Planned" detail="Private service deployment is staged as a later promotion step." variant="default" />
        <StatusCard icon={Lock} title="app.optfi.eu" state="Planned" detail="Private operator app with restricted access controls." variant="default" />
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="glass">
          <CardHeader>
            <CardTitle>What This Page Will Eventually Show</CardTitle>
            <CardDescription>
              Public-safe operational signals. Not raw internal observability or any operator-only controls.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            <Row icon={Wifi} title="Public site uptime" text="Reachability and deploy health for the public website." />
            <Row icon={Shield} title="Platform maturity stage" text="Local-first, staging, or cloud-primary status without revealing sensitive runtime details." />
            <Row icon={CheckCircle2} title="Docs coverage" text="Which public docs pages are live vs planned." />
            <Row icon={AlertCircle} title="Public incidents" text="High-level issue summaries that matter for public communication, if any." />
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>What This Page Will Not Show</CardTitle>
            <CardDescription>Intentional limits to avoid creating a security or operational liability.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" /><span>Exchange credentials or account identifiers</span></li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" /><span>Operator app internals, private dashboards, or admin URLs</span></li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" /><span>Detailed trading positions, per-trade internals, or strategy secrets</span></li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" /><span>Anything that increases exploitability or social-engineering risk</span></li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </PageContainer>
  )
}

function StatusCard({
  icon: Icon,
  title,
  state,
  detail,
  variant,
}: {
  icon: typeof Globe
  title: string
  state: string
  detail: string
  variant: 'success' | 'warning' | 'default'
}) {
  return (
    <Card className="glass h-full">
      <CardHeader>
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
            <Icon className="h-4 w-4" />
          </div>
          <Badge variant={variant}>{state}</Badge>
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{detail}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function Row({ icon: Icon, title, text }: { icon: typeof Globe; title: string; text: string }) {
  return (
    <div className="rounded-xl border border-white/70 bg-white/70 p-3">
      <div className="mb-1 flex items-center gap-2">
        <Icon className="h-4 w-4 text-sky-700" />
        <p className="text-sm font-semibold text-[color:var(--foreground)]">{title}</p>
      </div>
      <p>{text}</p>
    </div>
  )
}
