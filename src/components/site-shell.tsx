import type { PropsWithChildren } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './site-nav.css'

export function SiteShell({ children }: PropsWithChildren) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isDocs = location.pathname.startsWith('/docs')

  return (
    <div className="site-nav-root">
      {/* The home page renders its own nav — skip the shell nav there */}
      {!isHome && (
        <nav className="site-nav">
          <div className="site-nav-row">
            <NavLink to="/" className="site-nav-brand">
              <span className="site-nav-brand-mark" />
              OPTFI
            </NavLink>

            <div className="site-nav-links">
              <NavLink to="/docs" className={({ isActive }) => isActive ? 'active' : ''}>
                Docs
              </NavLink>
              <NavLink to="/roadmap" className={({ isActive }) => isActive ? 'active' : ''}>
                Roadmap
              </NavLink>
              <NavLink to="/status" className={({ isActive }) => isActive ? 'active' : ''}>
                Status
              </NavLink>
              <NavLink to="/transparency" className={({ isActive }) => isActive ? 'active' : ''}>
                Transparency
              </NavLink>
              <NavLink to="/journal" className={({ isActive }) => isActive ? 'active' : ''}>
                Journal
              </NavLink>
            </div>

            <div className="site-nav-cta">
              <span className="site-nav-pill-live">
                <span className="site-nav-dot" />
                Local proof
              </span>
              <a className="site-nav-btn site-nav-btn-primary" href="/#waitlist">
                Join waitlist <span className="arrow">→</span>
              </a>
            </div>
          </div>

          {isDocs && (
            <div style={{ borderTop: '1px solid #26261f', marginTop: '0' }}>
              <div className="site-nav-row" style={{ paddingTop: '10px', paddingBottom: '10px', gap: '24px' }}>
                <div className="site-nav-links" style={{ display: 'flex' }}>
                  <NavLink to="/docs" end className={({ isActive }) => isActive ? 'active' : ''}>
                    Hub
                  </NavLink>
                  <NavLink to="/docs/architecture" className={({ isActive }) => isActive ? 'active' : ''}>
                    Architecture
                  </NavLink>
                  <NavLink to="/docs/strategy" className={({ isActive }) => isActive ? 'active' : ''}>
                    Strategy
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </nav>
      )}

      {children}

      <footer style={{
        borderTop: '1px solid #26261f',
        padding: '48px 32px 32px',
        maxWidth: '1320px',
        margin: '0 auto',
        fontFamily: "'Geist Mono', monospace",
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '32px',
          paddingBottom: '24px',
          borderBottom: '1px solid #26261f',
          marginBottom: '24px',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span className="site-nav-brand-mark" />
              <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: '20px', letterSpacing: '-0.02em', color: '#ece8d8' }}>OPTFI</span>
            </div>
            <p style={{ fontSize: '14px', color: '#b8b4a3', margin: 0, maxWidth: '42ch', lineHeight: 1.6 }}>
              Germany-first, tax-aware crypto strategy research. Paper proof and canary gates must clear before real capital scales.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6f6c5e', margin: '0 0 12px' }}>Product</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                <NavLink to="/docs" style={{ color: '#b8b4a3', textDecoration: 'none' }}>Docs</NavLink>
                <NavLink to="/roadmap" style={{ color: '#b8b4a3', textDecoration: 'none' }}>Roadmap</NavLink>
                <NavLink to="/status" style={{ color: '#b8b4a3', textDecoration: 'none' }}>Status</NavLink>
              </div>
            </div>
            <div>
              <p style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6f6c5e', margin: '0 0 12px' }}>Company</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                <NavLink to="/transparency" style={{ color: '#b8b4a3', textDecoration: 'none' }}>Transparency</NavLink>
                <NavLink to="/journal" style={{ color: '#b8b4a3', textDecoration: 'none' }}>Journal</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', fontSize: '11px', color: '#6f6c5e', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          <span>© 2026 OptFi — All rights reserved</span>
          <span>Built Germany-first · Tax-aware by design</span>
        </div>
      </footer>
    </div>
  )
}
