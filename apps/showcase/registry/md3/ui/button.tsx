"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { useRipple } from "@/hooks/use-ripple"

/**
 * Material 3 common button.
 *
 * Five spec variants: `elevated`, `filled` (default), `tonal`, `outlined`, and
 * `text`. Each carries a hover/focus/press state layer (`md-state-layer`) plus
 * a pointer ripple. Fully pill-shaped per MD3 (`rounded-full`).
 */
const buttonVariants = cva(
  "md-state-layer relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full text-sm font-medium tracking-[0.1px] outline-none transition-[box-shadow,background-color] focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-foreground/[0.12] disabled:text-foreground/[0.38] disabled:shadow-none [&_svg]:size-[18px] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        elevated:
          "bg-primary text-primary-foreground shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-2)]",
        filled: "bg-primary text-primary-foreground",
        tonal: "bg-secondary text-secondary-foreground",
        outlined: "border border-border bg-transparent text-foreground",
        text: "bg-transparent text-foreground",
      },
      size: {
        default: "h-10 px-6",
        text: "h-10 px-4",
        icon: "h-10 w-10 px-0",
      },
    },
    compoundVariants: [
      { variant: "text", size: "default", className: "px-4" },
    ],
    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onPointerDown, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const ripple = useRipple()
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        onPointerDown={(e: React.PointerEvent<HTMLButtonElement>) => {
          ripple.onPointerDown(e)
          onPointerDown?.(e)
        }}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
