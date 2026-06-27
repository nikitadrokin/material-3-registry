"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { useRipple } from "@/hooks/use-ripple"

/** Material 3 icon button: standard, filled, tonal, and outlined. */
const iconButtonVariants = cva(
  "md-state-layer relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:text-foreground/[0.38] [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        standard: "bg-transparent text-foreground",
        filled: "bg-primary text-primary-foreground",
        tonal: "bg-secondary text-secondary-foreground",
        outlined: "border border-border bg-transparent text-foreground",
      },
    },
    defaultVariants: { variant: "standard" },
  }
)

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, onPointerDown, ...props }, ref) => {
    const ripple = useRipple()
    return (
      <button
        ref={ref}
        className={cn(iconButtonVariants({ variant }), className)}
        onPointerDown={(e) => {
          ripple.onPointerDown(e)
          onPointerDown?.(e)
        }}
        {...props}
      />
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton, iconButtonVariants }
