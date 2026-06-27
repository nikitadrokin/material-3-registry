"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { useRipple } from "@/hooks/use-ripple"

/**
 * Material 3 chip.
 *
 * One component covers the four MD3 chip kinds via `variant`
 * (`assist` | `filter` | `input` | `suggestion`); pass `selected` to render the
 * filter/input selected state (tonal fill + leading check).
 */
const chipVariants = cva(
  "md-state-layer relative inline-flex h-8 items-center gap-2 overflow-hidden rounded-lg px-4 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-[0.38] [&_svg]:size-[18px] [&_svg]:shrink-0",
  {
    variants: {
      selected: {
        true: "border border-transparent bg-secondary text-secondary-foreground",
        false: "border border-border bg-transparent text-foreground",
      },
    },
    defaultVariants: { selected: false },
  }
)

export interface ChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">,
    VariantProps<typeof chipVariants> {
  /** MD3 chip kind. Semantic only — styling is driven by `selected`. */
  variant?: "assist" | "filter" | "input" | "suggestion"
}

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, selected, onPointerDown, children, ...props }, ref) => {
    const ripple = useRipple()
    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={selected ?? undefined}
        className={cn(chipVariants({ selected }), className)}
        onPointerDown={(e) => {
          ripple.onPointerDown(e)
          onPointerDown?.(e)
        }}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Chip.displayName = "Chip"

export { Chip, chipVariants }
