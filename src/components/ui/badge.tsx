import type * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium tracking-wide',
  {
    variants: {
      variant: {
        default: 'border-white/70 bg-white/70 text-[color:var(--foreground)]',
        success: 'border-emerald-300/70 bg-emerald-100/80 text-emerald-900',
        warning: 'border-amber-300/70 bg-amber-100/80 text-amber-900',
        danger: 'border-rose-300/70 bg-rose-100/80 text-rose-900',
        brand: 'border-sky-300/70 bg-sky-100/80 text-sky-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, className }))} {...props} />
}
