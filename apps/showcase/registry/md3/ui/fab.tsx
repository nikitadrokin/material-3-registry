"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { useRipple } from "@/hooks/use-ripple"

/**
 * Material 3 Floating Action Button.
 *
 * `size="regular"` is the 56dp square FAB; `extended` renders a pill with an
 * icon + label. Both sit at elevation level 3.
 */
const fabVariants = cva(
  "md-state-layer relative inline-flex items-center justify-center overflow-hidden rounded-2xl shadow-[var(--elevation-3)] outline-none transition-shadow hover:shadow-[var(--elevation-4)] focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-6 [&_svg]:shrink-0",
  {
    variants: {
      color: {
        primary: "bg-primary text-primary-foreground",
        surface: "bg-secondary text-secondary-foreground",
      },
      size: {
        regular: "h-14 w-14",
        extended: "h-14 gap-3 px-5 text-sm font-medium",
      },
    },
    defaultVariants: { color: "surface", size: "regular" },
  }
)

export interface FabProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof fabVariants> {}

const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  ({ className, color, size, onPointerDown, ...props }, ref) => {
    const ripple = useRipple()
    return (
      <button
        ref={ref}
        className={cn(fabVariants({ color, size }), className)}
        onPointerDown={(e) => {
          ripple.onPointerDown(e)
          onPointerDown?.(e)
        }}
        {...props}
      />
    )
  }
)
Fab.displayName = "Fab"

export { Fab, fabVariants }
