"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface CircularProgressProps extends React.SVGAttributes<SVGSVGElement> {
  /** 0–100. Omit for the indeterminate spinner. */
  value?: number
  /** Diameter in px. Default 48. */
  size?: number
  /** Stroke width in px. Default 4. */
  thickness?: number
}

/**
 * Material 3 circular progress indicator (determinate + indeterminate).
 *
 * The indeterminate spin relies on the `md-spin` / `md-dash` keyframes; add them
 * to your theme, or pass `value` for a determinate arc that needs no keyframes.
 */
const CircularProgress = React.forwardRef<SVGSVGElement, CircularProgressProps>(
  ({ className, value, size = 48, thickness = 4, ...props }, ref) => {
    const indeterminate = value === undefined
    const r = (size - thickness) / 2
    const c = 2 * Math.PI * r
    const offset = indeterminate ? 0 : c * (1 - Math.min(100, Math.max(0, value)) / 100)
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        className={cn("text-primary", indeterminate && "animate-[md-spin_1.4s_linear_infinite]", className)}
        {...props}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={indeterminate ? undefined : c}
          strokeDashoffset={indeterminate ? undefined : offset}
          transform={indeterminate ? undefined : `rotate(-90 ${size / 2} ${size / 2})`}
          className={cn(
            indeterminate && "animate-[md-dash_1.4s_ease-in-out_infinite]",
            !indeterminate && "transition-[stroke-dashoffset] duration-300"
          )}
        />
      </svg>
    )
  }
)
CircularProgress.displayName = "CircularProgress"

export { CircularProgress }
