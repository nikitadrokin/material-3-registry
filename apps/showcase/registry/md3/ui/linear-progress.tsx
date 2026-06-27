"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface LinearProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0–100. Omit for an indeterminate track. */
  value?: number
}

/**
 * Material 3 linear progress indicator.
 *
 * Pass `value` (0–100) for determinate, or omit it for the indeterminate
 * sweeping animation (`md-linear-indeterminate`, shipped by md3-theme).
 */
const LinearProgress = React.forwardRef<HTMLDivElement, LinearProgressProps>(
  ({ className, value, ...props }, ref) => {
    const indeterminate = value === undefined
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn("relative h-1 w-full overflow-hidden rounded-full bg-secondary", className)}
        {...props}
      >
        <div
          className={cn(
            "absolute inset-y-0 rounded-full bg-primary",
            indeterminate
              ? "animate-[md-linear-indeterminate_2s_cubic-bezier(0.65,0.815,0.735,0.395)_infinite]"
              : "left-0 transition-[width] duration-300"
          )}
          style={indeterminate ? undefined : { width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    )
  }
)
LinearProgress.displayName = "LinearProgress"

export { LinearProgress }
