"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/** Material 3 banner / alert. Tonal surface with an optional leading icon. */
const alertVariants = cva("relative flex gap-3 rounded-xl border p-4 text-sm [&_svg]:size-5 [&_svg]:shrink-0", {
  variants: {
    tone: {
      neutral: "border-border bg-card text-card-foreground [&_svg]:text-muted-foreground",
      error: "border-transparent bg-destructive/10 text-destructive [&_svg]:text-destructive",
    },
  },
  defaultVariants: { tone: "neutral" },
})

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ className, tone, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ tone }), className)} {...props} />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-0.5 font-medium leading-tight", className)} {...props} />
  )
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
  )
)
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription, alertVariants }
