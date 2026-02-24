import type { PropsWithChildren, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from './ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export function PageContainer({ children }: PropsWithChildren) {
  return <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">{children}</main>
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string
  title: string
  description: string
  actions?: ReactNode
}) {
  return (
    <section className="animate-fade-up">
      <div className="glass rounded-3xl border border-white/60 p-6 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.35)] sm:p-8">
        <Badge variant="brand" className="w-fit">
          {eyebrow}
        </Badge>
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[color:var(--muted-foreground)] sm:text-lg">
          {description}
        </p>
        {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  )
}

export function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string
  title: string
  description: string
}) {
  return (
    <div className="space-y-2">
      <p className="font-mono text-xs tracking-[0.18em] text-[color:var(--muted-foreground)]">{kicker}</p>
      <h2 className="max-w-4xl text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <p className="max-w-3xl text-sm leading-7 text-[color:var(--muted-foreground)] sm:text-base">{description}</p>
    </div>
  )
}

export function DocContentCard({
  title,
  description,
  children,
}: PropsWithChildren<{ title: string; description?: string }>) {
  return (
    <Card className="glass">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent className="space-y-4 text-sm leading-7 text-[color:var(--muted-foreground)]">{children}</CardContent>
    </Card>
  )
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function InternalDocLinkCard({
  to,
  title,
  summary,
  badge,
}: {
  to: string
  title: string
  summary: string
  badge?: string
}) {
  return (
    <Link to={to} className="group block">
      <Card className="glass h-full transition-transform duration-150 group-hover:-translate-y-1">
        <CardHeader>
          {badge ? <Badge variant="default" className="mb-2 w-fit">{badge}</Badge> : null}
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{summary}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--brand-700)]">
            Open page <ArrowRight className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
