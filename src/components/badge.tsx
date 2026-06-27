"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Material 3 badge.
 *
 * `variant="dot"` is the 6dp small badge; `variant="number"` is the large badge
 * for counts; `tone` switches between the error (default) and neutral colors.
 * For a standalone status pill, use `tone="neutral"` with text content.
 */
const badgeVariants = cva(
  "inline-flex items-center justify-center font-medium",
  {
    variants: {
      variant: {
        dot: "size-1.5 rounded-full p-0",
        number: "h-4 min-w-4 rounded-full px-1 text-[11px] leading-none",
        pill: "h-[22px] rounded-full px-2.5 text-xs",
      },
      tone: {
        error: "bg-destructive text-destructive-foreground",
        primary: "bg-primary text-primary-foreground",
        neutral: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: { variant: "number", tone: "error" },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, tone }), className)} {...props} />
}

export { Badge, badgeVariants }
