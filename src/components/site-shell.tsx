import type { PropsWithChildren } from 'react'
import { Sparkles } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'

function navClass({ isActive }: { isActive: boolean }) {
  return [
    'rounded-full px-3 py-1.5 text-sm transition-colors',
    isActive ? 'bg-white text-[color:var(--foreground)] shadow-sm' : 'text-[color:var(--muted-foreground)] hover:bg-white/60 hover:text-[color:var(--foreground)]',
  ].join(' ')
}

export function SiteShell({ children }: PropsWithChildren) {
  const location = useLocation()
  const isDocs = location.pathname.startsWith('/docs')

  return (
    <div className="relative isolate overflow-x-clip">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-55 [mask-image:radial-gradient(circle_at_center,black_28%,transparent_82%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-16 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-24 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />

      <header className="sticky top-0 z-30 border-b border-white/30 bg-white/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[linear-gradient(145deg,var(--brand-500),var(--brand-700))] text-white shadow-lg shadow-sky-500/25">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-[color:var(--muted-foreground)]">OPTFI</p>
              <p className="text-sm font-semibold">Public Site</p>
            </div>
          </NavLink>

          <nav className="flex items-center gap-1 rounded-full border border-white/60 bg-white/40 p-1">
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
            <NavLink to="/docs" className={navClass}>
              Docs
            </NavLink>
            <NavLink to="/roadmap" className={navClass}>
              Roadmap
            </NavLink>
            <NavLink to="/status" className={navClass}>
              Status
            </NavLink>
          </nav>
        </div>

        {isDocs ? (
          <div className="mx-auto max-w-7xl px-4 pb-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/50 bg-white/40 p-2 text-sm">
              <NavLink to="/docs" end className={navClass}>
                Docs Hub
              </NavLink>
              <NavLink to="/docs/architecture" className={navClass}>
                Architecture
              </NavLink>
              <NavLink to="/docs/strategy" className={navClass}>
                Strategy
              </NavLink>
            </div>
          </div>
        ) : null}
      </header>

      {children}

      <footer className="mx-auto mt-6 max-w-7xl px-4 pb-14 pt-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl border border-white/60 p-5">
          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div>
              <p className="font-mono text-xs tracking-[0.16em] text-[color:var(--muted-foreground)]">OPTFI / PUBLIC</p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                Public product and documentation experience for OptFi. Sensitive implementation details and private operating workflows are intentionally kept off the public site.
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium text-[color:var(--foreground)]">Public Content Scope</p>
              <p className="text-[color:var(--muted-foreground)]">
                This site focuses on product direction, principles, and progress updates. Detailed infrastructure, operational, and research internals are reserved for private documentation.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
