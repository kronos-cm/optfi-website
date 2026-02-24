import type { LucideIcon } from 'lucide-react'
import { Activity, BookOpen, Building2, Lock, ShieldCheck, Workflow } from 'lucide-react'

export type DocCategory = 'architecture' | 'strategy' | 'operations' | 'safety' | 'product'

export interface PublicDocPage {
  slug: string
  title: string
  summary: string
  category: DocCategory
  status: 'live' | 'planned'
  icon: LucideIcon
  route: string
  sourceHref?: string
  readTime: string
}

export const publicDocPages: PublicDocPage[] = [
  {
    slug: 'architecture',
    title: 'Platform Principles',
    summary: 'How OptFi separates public experiences, private workflows, and operational responsibilities at a high level.',
    category: 'architecture',
    status: 'live',
    icon: Workflow,
    route: '/docs/architecture',
    readTime: '8 min',
  },
  {
    slug: 'strategy',
    title: 'Approach & Validation',
    summary: 'How OptFi validates ideas, measures outcomes, and makes progress decisions without exposing proprietary methods.',
    category: 'strategy',
    status: 'live',
    icon: Activity,
    route: '/docs/strategy',
    readTime: '10 min',
  },
  {
    slug: 'runbook',
    title: 'Operator Runbook',
    summary: 'Public-facing explanation of operating principles, monitoring expectations, and response discipline.',
    category: 'operations',
    status: 'live',
    icon: BookOpen,
    route: '/docs/runbook',
    readTime: '7 min',
  },
  {
    slug: 'safety',
    title: 'Security & Wallet Safety',
    summary: 'Public overview of safety principles, access boundaries, and responsible operating posture.',
    category: 'safety',
    status: 'live',
    icon: ShieldCheck,
    route: '/docs/safety',
    readTime: '6 min',
  },
  {
    slug: 'identity',
    title: 'Operator Access',
    summary: 'Private operator access principles and governance for the non-public operating surface.',
    category: 'product',
    status: 'live',
    icon: Lock,
    route: '/docs/operator-access',
    readTime: '5 min',
  },
  {
    slug: 'monetization',
    title: 'Monetization Options',
    summary: 'Possible business models for the platform, with product and compliance tradeoffs described at a high level.',
    category: 'product',
    status: 'live',
    icon: Building2,
    route: '/docs/monetization',
    readTime: '9 min',
  },
]

export const docCategoryLabels: Record<DocCategory, string> = {
  architecture: 'Architecture',
  strategy: 'Strategy',
  operations: 'Operations',
  safety: 'Safety',
  product: 'Product',
}
