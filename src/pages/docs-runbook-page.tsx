import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { PageContainer, PageHero, SectionHeading, DocContentCard, BulletList } from '../components/page-primitives'
import {
  Activity,
  AlertTriangle,
  Bell,
  CheckCircle2,
  Clock3,
  Compass,
  Eye,
  Gauge,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Wrench,
} from 'lucide-react'

const operatingLoop = [
  {
    icon: Eye,
    step: '01',
    title: 'Observe',
    text: 'The operator cockpit surfaces a real-time view of paper trading performance, canary execution state, signing audit history, and the tactical proof window status. Health is visible before any intervention is needed.',
  },
  {
    icon: Gauge,
    step: '02',
    title: 'Interpret',
    text: 'Each panel in the cockpit shows not just a metric, but the decision and the reasons behind it. A denied execution shows exactly which policy rule blocked it. A Watch decision shows which horizon is failing and by how much.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Respond',
    text: 'The system handles most state transitions automatically — proof window promotions, demotions, and blocks. Operator intervention is reserved for configuration changes, policy updates, and situations outside the automated envelope.',
  },
  {
    icon: Compass,
    step: '04',
    title: 'Review',
    text: 'Outcomes feed back into the research comparison, experiment records, and strategy research history. A strategy that degrades has a documented trail — what was tested, what was measured, and what the decision was.',
  },
] as const

const cockpitPanels = [
  {
    title: 'Canary Status',
    description: 'Shows the current execution posture: whether the canary is running, the current proof window decision (Promote / Watch / Reject), and the reasons driving that decision. The signing audit history is also surfaced here.',
  },
  {
    title: 'Tactical Proof',
    description: 'The proof window metric — short and medium horizon PnL, win rate, fee drag, and the number of executed sells in the window. This is the gate that controls whether the canary can expand scope.',
  },
  {
    title: 'Capital Lanes',
    description: 'Per-lane status showing which capital allocation lanes are active, which are blocked, and what the blocking reason is. Lanes are isolated — tactical income performance cannot borrow from core compounding metrics.',
  },
  {
    title: 'Action Board',
    description: 'Operator-facing action surface. Shows which decisions are pending, what is blocking them, and what evidence is needed to unblock. Prioritises by impact rather than recency.',
  },
  {
    title: 'Research Comparison',
    description: 'Side-by-side view of strategy candidates across datasets, including walk-forward robustness classification for each. Shows which candidates are promote-ready, watch-only, or rejected across all windows.',
  },
  {
    title: 'Wallet Foundation',
    description: 'Read-only wallet inventory, signing policy status, and the execution audit log. Shows whether credentials are resolved from the keychain and whether the signing policy is in research-only or execution mode.',
  },
] as const

const faq = [
  {
    q: 'What should I check first when something looks wrong?',
    a: 'Start with the Action Board — it surfaces the highest-priority operator decisions and blocked states. If there is a signing audit denial you did not expect, the Wallet Foundation panel shows the full reason set. If the canary proof window shows Watch or Reject, the Tactical Proof panel explains which horizon is failing and why.',
  },
  {
    q: 'What does a Watch decision on the proof window mean?',
    a: 'Watch means the canary is not yet in a state where scope can expand, but it has not failed badly enough to be rejected. Typically this means one horizon is positive while the other is borderline, or the number of executed trades in the window is below the minimum needed for a statistically meaningful decision. The cockpit shows the specific reason.',
  },
  {
    q: 'What does a Reject decision mean operationally?',
    a: 'Reject means the canary has failed its proof window across at least one critical dimension — typically sustained negative PnL, loss-biased outcomes, or excessive fee drag. The canary stops advancing scope and the reasons are recorded. The research comparison will show which candidate was running and what the measured outcomes were.',
  },
  {
    q: 'Can I change the signing policy from the cockpit?',
    a: 'No. Signing policy changes require a code change and a new deployment. The cockpit shows the current policy state and the audit history, but it cannot modify policy. This is intentional — policy changes should go through review, not through an operator UI.',
  },
  {
    q: 'What is the difference between a capital lane and a strategy?',
    a: 'A capital lane defines a bucket of capital with its own allocation rules, proof requirements, and risk limits. A strategy operates within a lane. The separation means that a tactical income strategy failing its proof window does not affect the core compounding lane — they are evaluated and constrained independently.',
  },
] as const

export function DocsRunbookPage() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="Docs / Operator Runbook"
        title="How to read the cockpit and what to do when it tells you something"
        description="The operator cockpit is designed to be self-explaining: every decision surfaces with its reasons, and every blocked state describes what would unblock it. This runbook explains the operating loop and the cockpit panels at a level useful for day-to-day operation."
        actions={
          <>
            <Badge variant="success">Operator-facing</Badge>
            <Badge variant="default">No privileged internals</Badge>
          </>
        }
      />

      {/* Operating loop */}
      <section className="mt-10 space-y-4">
        <SectionHeading
          kicker="Operating Model"
          title="Observe → Interpret → Respond → Review"
          description="The loop is designed to keep operator workload low during normal operation and unambiguous during abnormal states."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {operatingLoop.map((step) => (
            <Card key={step.step} className="glass h-full">
              <CardHeader>
                <p className="text-xs font-mono tracking-widest text-[color:var(--muted-foreground)]">STEP {step.step}</p>
                <div className="mb-1 grid h-9 w-9 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                  <step.icon className="h-4 w-4" />
                </div>
                <CardTitle className="text-base">{step.title}</CardTitle>
                <CardDescription>{step.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Cockpit panels */}
      <section className="mt-12 space-y-4">
        <SectionHeading
          kicker="Cockpit Panels"
          title="What each panel shows and what to look for"
          description="The cockpit is decomposed into focused panels. Each one has a single responsibility and surfaces the decision logic that drives it."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cockpitPanels.map((panel) => (
            <Card key={panel.title} className="glass h-full">
              <CardHeader>
                <CardTitle className="text-base">{panel.title}</CardTitle>
                <CardDescription>{panel.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Proof window decisions */}
      <section className="mt-12 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="glass">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[color:var(--brand-700)]" />
              <CardTitle>Reading the Proof Window Decision</CardTitle>
            </div>
            <CardDescription>
              The three possible decisions and what each one means for operator action.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <DecisionRow icon={CheckCircle2} color="text-emerald-600" title="Promote" text="Both horizons are positive, win rate is healthy, fee drag is within bounds, and sufficient trades exist in the window. The canary is eligible to expand scope. No operator action required." />
            <DecisionRow icon={Clock3} color="text-amber-600" title="Watch" text="One or more conditions are borderline but not failed. The canary continues accumulating data. Review the specific reason — it will tell you which horizon is soft and by how much." />
            <DecisionRow icon={TrendingDown} color="text-rose-600" title="Reject" text="One or more critical conditions have failed. The canary stops advancing. Check the research comparison to understand whether this is a strategy problem or a market condition." />
          </CardContent>
        </Card>

        <DocContentCard
          title="What the System Handles Automatically"
          description="Routine state transitions that do not require operator intervention."
        >
          <BulletList
            items={[
              'Proof window evaluation on every execution cycle',
              'Promotion and demotion decisions based on measured outcomes',
              'Signing policy enforcement on every execution request',
              'Daily spend cap tracking and blocking',
              'Capital lane isolation — a failure in one lane does not bleed into another',
              'Walk-forward robustness classification on every research comparison run',
            ]}
          />
        </DocContentCard>
      </section>

      {/* Incident posture */}
      <section className="mt-12 grid gap-4 lg:grid-cols-2">
        <DocContentCard
          title="When to Intervene"
          description="Situations that call for operator action rather than waiting."
        >
          <BulletList
            items={[
              'A signing audit deny you did not expect — check the reason, verify the policy is configured correctly',
              'A Reject decision on the proof window — review the research comparison for the affected candidate',
              'Canary not executing when you expect it to — check preflight reasons in the Action Board',
              'Credential resolution failures — verify the keychain entry is present and correctly named',
            ]}
          />
        </DocContentCard>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Monitoring Philosophy</CardTitle>
            <CardDescription>What the public status surface communicates versus what the cockpit shows.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            <MonitorRow icon={Activity} title="Public status" text="High-level maturity stage and public incident summaries. No operator telemetry." />
            <MonitorRow icon={ShieldCheck} title="Cockpit" text="Full decision surfaces, proof window metrics, signing audit, and research comparison. Operator-only." />
            <MonitorRow icon={Bell} title="Alerts" text="Policy-driven alerts fire when the proof window degrades or a preflight check starts failing consistently. Surfaced in the Action Board." />
            <MonitorRow icon={AlertTriangle} title="Incident threshold" text="Not every Watch is an incident. A Watch that persists across multiple review cycles without improving is worth investigating." />
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Runbook FAQ</CardTitle>
            <CardDescription>
              Common questions about reading the cockpit and responding to system states.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible defaultValue="item-0">
              {faq.map((item, index) => (
                <AccordionItem key={item.q} value={`item-${index}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </PageContainer>
  )
}

function DecisionRow({ icon: Icon, color, title, text }: { icon: typeof CheckCircle2; color: string; title: string; text: string }) {
  return (
    <div className="rounded-xl border border-white/70 bg-white/70 p-3">
      <div className="mb-1 flex items-center gap-2">
        <Icon className={`h-4 w-4 ${color}`} />
        <p className="text-sm font-semibold text-[color:var(--foreground)]">{title}</p>
      </div>
      <p className="text-sm leading-5 text-[color:var(--muted-foreground)]">{text}</p>
    </div>
  )
}

function MonitorRow({ icon: Icon, title, text }: { icon: typeof Activity; title: string; text: string }) {
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
