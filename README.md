# optfi-website

Public marketing/docs site for `optfi.eu`.

This repo is intentionally separate from the trading runtime (`optfi`) so public site deploys never interfere with money-critical services.

## Stack

- Vite
- React + TypeScript
- Tailwind CSS (v4)
- shadcn-style local UI components (Button, Badge, Card, Accordion)
- GitHub Pages (GitHub Actions deploy)

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Public Reporting Feed Pipeline

`/status` and `/transparency` are powered by a structured public feed:

- `/Users/A83283214/Projects/Personal/CascadeProjects/windsurf-project/optfi-website/src/content/public-reporting.json`

The intended workflow is:

1. Generate a sanitized draft in the private `optfi` repo using the internal reporting CLI:

```bash
cd /Users/A83283214/Projects/Personal/CascadeProjects/windsurf-project/optfi
# internal reporting command (kept in the private repo)
# writes: data/reports/public-update-draft.json
```

2. Review the draft for disclosure safety.
3. Import into this repo:

```bash
cd /Users/A83283214/Projects/Personal/CascadeProjects/windsurf-project/optfi-website
npm run import:public-draft -- ../optfi/data/reports/public-update-draft.json
```

4. Review the site diff and publish.

This pipeline is intentionally curated and human-reviewed. It is not a direct publish-from-telemetry path.

## GitHub Pages Setup

1. In GitHub -> `kronos-cm/optfi-website` -> `Settings` -> `Pages`
2. Set source to `GitHub Actions`
3. Ensure custom domain is `optfi.eu` (the repo includes `public/CNAME`)
4. Wait for the `Deploy GitHub Pages` workflow to complete

## Namecheap DNS Records (GitHub Pages)

Apex domain (`optfi.eu`):

- `A  @  185.199.108.153`
- `A  @  185.199.109.153`
- `A  @  185.199.110.153`
- `A  @  185.199.111.153`

`www` subdomain:

- `CNAME  www  kronos-cm.github.io`

Recommendation:

- Set `www.optfi.eu` to redirect to `optfi.eu` in GitHub Pages settings (or keep both serving same content initially).

## Planned Public Site Scope

- Landing page and positioning
- Documentation entry points
- Architecture and roadmap links
- Transparency/status pages (sanitized, no operator controls)

## Non-Goals

- No trading controls
- No exchange credentials
- No private operator telemetry
