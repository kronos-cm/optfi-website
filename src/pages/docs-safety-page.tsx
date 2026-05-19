import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { PageContainer, PageHero, SectionHeading, DocContentCard, BulletList } from '../components/page-primitives'
import {
  FileSearch,
  HardDriveDownload,
  KeyRound,
  Lock,
  ScrollText,
  ShieldAlert,
  ShieldCheck,
  SplitSquareVertical,
  Wallet,
} from 'lucide-react'

const principles = [
  {
    icon: SplitSquareVertical,
    title: 'Least privilege',
    text: 'Read access, execution access, and configuration access are separated. No single credential carries unnecessary power.',
  },
  {
    icon: ShieldCheck,
    title: 'Fail-safe defaults',
    text: 'The system defaults to denied. Execution is disabled until explicitly enabled. Hardware wallet confirmation is required above a notional threshold.',
  },
  {
    icon: ScrollText,
    title: 'Immutable audit trail',
    text: 'Every execution decision — allow or deny — is recorded with the full reason set. The audit log cannot be bypassed by operator action.',
  },
  {
    icon: ShieldAlert,
    title: 'Blast-radius control',
    text: 'Hard allocation caps, daily spend limits, and per-order notional limits constrain the maximum damage from any single failure or mistake.',
  },
] as const

const faq = [
  {
    q: 'How are API credentials stored?',
    a: 'Exchange credentials are resolved exclusively from the OS keychain at runtime. No plaintext credentials appear in configuration files, environment files, or the codebase. The application rejects any credential that arrives as a raw string unless a legacy override is explicitly enabled — and that override is flagged in the policy audit log.',
  },
  {
    q: 'What is the hardware wallet signing gate?',
    a: 'Any transaction above a notional threshold requires hardware wallet confirmation before it can be submitted. This is enforced in the execution path — not a UI warning, but a hard gate that returns a deny decision with an audited reason. Until hardware wallet confirmation is wired up, all transactions above the threshold are automatically denied.',
  },
  {
    q: 'What happens when a preflight check fails?',
    a: 'The execution request is denied with a structured reason set. The denial is recorded in the signing audit log with the decision, the reasons, and the execution context. No order is submitted. The operator cockpit surfaces the reason so the operator can understand what blocked the trade.',
  },
  {
    q: 'Can an operator override a denied execution?',
    a: 'No. The signing policy, capital lane rules, and proof window gates are enforced by the system. There is no operator override path. Changing the policy requires a code change, a code review, and a new deployment — not an in-app setting.',
  },
  {
    q: 'How is wallet data handled?',
    a: 'Wallet addresses are read-only inputs. The platform reads balances and transaction history for inventory purposes. It does not store private keys, generate signing requests, or move funds through wallet addresses. The separation between read-only wallet inventory and active exchange execution is architectural, not just a policy.',
  },
] as const

export function DocsSafetyPage() {
  return (
    <PageContainer>
      <PageHero
        eyebrow="Docs / Safety & Signing Policy"
        title="Safety is enforced by the system, not by operator discipline"
        description="OptFi treats every execution decision as an auditable event with a policy-enforced gate. This page explains how credentials, signing policy, and audit trails work — at a level that builds trust without exposing exploitable internals."
        actions={
          <>
            <Badge variant="success">Safety architecture</Badge>
            <Badge variant="default">No credential detail published</Badge>
          </>
        }
      />

      {/* Principles grid */}
      <section className="mt-10 space-y-4">
        <SectionHeading
          kicker="Safety Posture"
          title="Four principles, enforced architecturally"
          description="These are not guidelines. They are constraints built into the execution path."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((item) => (
            <Card key={item.title} className="glass h-full">
              <CardHeader>
                <div className="mb-2 grid h-9 w-9 place-items-center rounded-xl bg-white/80 text-sky-800 ring-1 ring-white/70">
                  <item.icon className="h-4 w-4" />
                </div>
                <CardTitle className="text-base">{item.title}</CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Credential and signing policy */}
      <section className="mt-12 grid gap-4 lg:grid-cols-2">
        <Card className="glass">
          <CardHeader>
            <div className="flex items-center gap-2">
              <KeyRound className="h-4 w-4 text-sky-700" />
              <CardTitle>Credential Policy</CardTitle>
            </div>
            <CardDescription>How secrets are stored and resolved at runtime.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            <p>Exchange credentials are resolved from the OS keychain at runtime using a pointer-based scheme. An environment variable holds a reference like <code className="rounded bg-white/80 px-1.5 py-0.5 font-mono text-xs text-sky-800">keychain://service-name/account</code> — the actual secret is never stored in config.</p>
            <p>The same pointer pattern supports cloud deployments using a <code className="rounded bg-white/80 px-1.5 py-0.5 font-mono text-xs text-sky-800">secretsmanager://</code> scheme that resolves through the cloud provider's secrets API. The application code is identical in both environments.</p>
            <p>A secret policy audit runs at startup and flags any credential that arrived as plaintext, reports how many resolved via keychain versus reference, and records the audit status in the observability log.</p>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <div className="flex items-center gap-2">
              <HardDriveDownload className="h-4 w-4 text-sky-700" />
              <CardTitle>Signing Policy Gate</CardTitle>
            </div>
            <CardDescription>What happens before any live order is submitted.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            <p>Every execution request passes through a signing policy evaluation before reaching the exchange. The policy checks:</p>
            <ul className="space-y-2">
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" /><span>Whether execution is enabled at all (defaults to disabled)</span></li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" /><span>Whether the notional exceeds the hardware wallet threshold</span></li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" /><span>Whether the per-order maximum is respected</span></li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" /><span>Whether the daily spend cap has been reached</span></li>
            </ul>
            <p>Every evaluation — allow or deny — is recorded in the signing audit log with the full reason set. There is no silent failure.</p>
          </CardContent>
        </Card>
      </section>

      {/* Audit trail */}
      <section className="mt-12 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <DocContentCard
          title="What the Audit Trail Records"
          description="Every execution-path event produces a structured audit entry."
        >
          <BulletList
            items={[
              'Decision: allow or deny',
              'Deny reasons: structured reason codes, not free-form text',
              'Notional amount evaluated against policy',
              'Execution context: which lane and asset the request came from',
              'Timestamp and sequence position within the execution log',
            ]}
          />
        </DocContentCard>

        <Card className="glass">
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileSearch className="h-4 w-4 text-sky-700" />
              <CardTitle>Wallet Inventory — Read Only</CardTitle>
            </div>
            <CardDescription>
              Wallet addresses are inputs to the inventory view, not to the execution path.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            <SafetyRow icon={Wallet} title="What wallet data is used for" text="Reading balances and transaction history to populate the unified inventory ledger. The platform knows what you hold — it does not control it." />
            <SafetyRow icon={Lock} title="What wallet data is not used for" text="The platform does not hold private keys, generate wallet signing requests, or route funds through wallet addresses. Exchange execution goes through exchange APIs, not wallet signing." />
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Safety FAQ</CardTitle>
            <CardDescription>
              Questions about credentials, signing policy, and audit trails.
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

function SafetyRow({ icon: Icon, title, text }: { icon: typeof Lock; title: string; text: string }) {
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
