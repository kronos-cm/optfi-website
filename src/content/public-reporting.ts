import rawData from './public-reporting.json'

export type PublicCardVariant = 'success' | 'warning' | 'default'
export type PublicUpdateSeverity = 'info' | 'attention' | 'warning'

export interface PublicMethodValidationCard {
  title: string
  state: string
  detail: string
  variant: PublicCardVariant
}

export interface PublicTransparencyUpdate {
  id: string
  publishedAt: string
  category: string
  severity: PublicUpdateSeverity
  title: string
  summary: string
  bullets: string[]
  nextSteps: string[]
}

export interface PublicReportingFeed {
  version: number
  updatedAt: string
  methodValidationCard: PublicMethodValidationCard
  transparencyUpdates: PublicTransparencyUpdate[]
}

function isCardVariant(value: unknown): value is PublicCardVariant {
  return value === 'success' || value === 'warning' || value === 'default'
}

function isUpdateSeverity(value: unknown): value is PublicUpdateSeverity {
  return value === 'info' || value === 'attention' || value === 'warning'
}

function asStringArray(value: unknown, field: string): string[] {
  if (!Array.isArray(value) || !value.every((v) => typeof v === 'string')) {
    throw new Error(`public-reporting.json invalid ${field}`)
  }
  return value
}

function parsePublicReportingFeed(value: unknown): PublicReportingFeed {
  if (!value || typeof value !== 'object') {
    throw new Error('public-reporting.json must be an object')
  }
  const data = value as Record<string, unknown>
  const card = data.methodValidationCard as Record<string, unknown>
  if (!card || typeof card !== 'object') {
    throw new Error('public-reporting.json missing methodValidationCard')
  }
  if (!isCardVariant(card.variant)) {
    throw new Error('public-reporting.json invalid methodValidationCard.variant')
  }
  const updatesRaw = data.transparencyUpdates
  if (!Array.isArray(updatesRaw)) {
    throw new Error('public-reporting.json missing transparencyUpdates')
  }

  const transparencyUpdates: PublicTransparencyUpdate[] = updatesRaw.map((item, index) => {
    if (!item || typeof item !== 'object') {
      throw new Error(`public-reporting.json invalid transparencyUpdates[${index}]`)
    }
    const row = item as Record<string, unknown>
    if (!isUpdateSeverity(row.severity)) {
      throw new Error(`public-reporting.json invalid transparencyUpdates[${index}].severity`)
    }
    return {
      id: String(row.id ?? ''),
      publishedAt: String(row.publishedAt ?? ''),
      category: String(row.category ?? 'update'),
      severity: row.severity,
      title: String(row.title ?? ''),
      summary: String(row.summary ?? ''),
      bullets: asStringArray(row.bullets ?? [], `transparencyUpdates[${index}].bullets`),
      nextSteps: asStringArray(row.nextSteps ?? [], `transparencyUpdates[${index}].nextSteps`),
    }
  })

  return {
    version: Number(data.version ?? 1),
    updatedAt: String(data.updatedAt ?? ''),
    methodValidationCard: {
      title: String(card.title ?? ''),
      state: String(card.state ?? ''),
      detail: String(card.detail ?? ''),
      variant: card.variant,
    },
    transparencyUpdates,
  }
}

export const publicReporting = parsePublicReportingFeed(rawData)
