#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'

function usage() {
  console.error('Usage: node scripts/import-public-draft.mjs <draft-json-path> [--publish-at ISO8601]')
}

const args = process.argv.slice(2)
if (args.length < 1) {
  usage()
  process.exit(1)
}

const draftPath = path.resolve(args[0])
let publishAt = new Date().toISOString()
for (let i = 1; i < args.length; i += 1) {
  if (args[i] === '--publish-at') {
    publishAt = args[i + 1] ?? publishAt
    i += 1
  }
}

const feedPath = path.resolve('src/content/public-reporting.json')
const draft = JSON.parse(fs.readFileSync(draftPath, 'utf8'))
const feed = JSON.parse(fs.readFileSync(feedPath, 'utf8'))

if (draft.draftVersion !== 1) {
  throw new Error(`Unsupported draftVersion: ${draft.draftVersion}`)
}
if (!Array.isArray(feed.transparencyUpdates)) {
  throw new Error('public-reporting.json missing transparencyUpdates array')
}

const idBase = String(draft.generatedAt || publishAt)
  .replace(/[:.]/g, '-')
  .replace(/[^0-9TZ-]/g, '')
const id = `${idBase}-${String(draft.category || 'update')}`

const entry = {
  id,
  publishedAt: publishAt,
  category: String(draft.category || 'update'),
  severity: String(draft.severity || 'info'),
  title: String(draft.title || 'Public update'),
  summary: String(draft.summary || ''),
  bullets: Array.isArray(draft.bullets) ? draft.bullets.map(String) : [],
  nextSteps: Array.isArray(draft.nextSteps) ? draft.nextSteps.map(String) : [],
}

feed.updatedAt = publishAt
feed.methodValidationCard = {
  title: String(draft.statusCard?.title || feed.methodValidationCard?.title || 'Method Validation'),
  state: String(draft.statusCard?.state || feed.methodValidationCard?.state || 'In Progress'),
  detail: String(draft.statusCard?.detail || feed.methodValidationCard?.detail || ''),
  variant: String(draft.statusCard?.variant || feed.methodValidationCard?.variant || 'default'),
}

feed.transparencyUpdates = [entry, ...feed.transparencyUpdates.filter((item) => item.id !== entry.id)]

fs.writeFileSync(feedPath, `${JSON.stringify(feed, null, 2)}\n`, 'utf8')
console.log(feedPath)
console.log(`Imported draft as ${entry.id}`)
