"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/** Material 3 icon toggle button. Outlined, fills tonal when on. */
const toggleVariants = cva(
  "md-state-layer inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-[0.38] [&_svg]:size-5 data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground",
  {
    variants: {
      variant: {
        standard: "bg-transparent text-foreground",
        outlined: "border border-border bg-transparent text-foreground",
      },
      size: {
        default: "h-10 px-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "outlined", size: "icon" },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size }), className)} {...props} />
))
Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
