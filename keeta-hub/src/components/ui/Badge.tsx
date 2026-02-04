import { HTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-white hover:bg-primary-hover',
        secondary:
          'border-transparent bg-background-card text-text-primary hover:bg-background-card-hover',
        destructive: 'border-transparent bg-danger text-white hover:bg-danger/80',
        success: 'border-transparent bg-success text-white hover:bg-success/80',
        outline: 'text-text-primary border-border',
        live: 'border-transparent bg-success text-white animate-pulse',
        trending: 'border-transparent bg-primary-light text-primary-dark',
        featured: 'border-transparent bg-gradient-to-r from-primary to-primary-light text-white',
        danger: 'border-transparent bg-danger text-white hover:bg-danger/80',
        warning: 'border-transparent bg-orange-500 text-white hover:bg-orange-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
Badge.displayName = 'Badge'

export { Badge, badgeVariants }