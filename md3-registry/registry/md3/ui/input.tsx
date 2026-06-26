"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Material 3 text field.
 *
 * Maps to shadcn's `input`, but rendered as a full MD3 text field with a
 * floating label, supporting text, and `filled` / `outlined` variants. Pass
 * `error` to show the error state, and `startIcon` / `endIcon` for affixes.
 */
const fieldVariants = cva(
  "group relative flex items-center transition-colors",
  {
    variants: {
      variant: {
        filled: "h-14 rounded-t-[4px] bg-secondary border-b-2",
        outlined: "h-14 rounded-[4px] border-2",
      },
      error: { true: "", false: "" },
    },
    compoundVariants: [
      { variant: "filled", error: false, className: "border-muted-foreground focus-within:border-primary" },
      { variant: "outlined", error: false, className: "border-border focus-within:border-primary" },
      { variant: "filled", error: true, className: "border-destructive" },
      { variant: "outlined", error: true, className: "border-destructive" },
    ],
    defaultVariants: { variant: "outlined", error: false },
  }
)

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof fieldVariants> {
  label?: string
  supportingText?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  containerClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { className, containerClassName, variant = "outlined", error = false, label, supportingText, startIcon, endIcon, id, ...props },
    ref
  ) => {
    const reactId = React.useId()
    const fieldId = id ?? reactId
    const filled = variant === "filled"
    return (
      <div className={cn("flex flex-col", containerClassName)}>
        <div className={cn(fieldVariants({ variant, error }))}>
          {startIcon ? (
            <span className="pl-3 text-muted-foreground [&_svg]:size-5">{startIcon}</span>
          ) : null}
          {label ? (
            <label
              htmlFor={fieldId}
              className={cn(
                "pointer-events-none absolute text-xs",
                error ? "text-destructive" : "text-muted-foreground group-focus-within:text-primary",
                filled ? "left-4 top-2" : "left-3 -top-2 bg-background px-1"
              )}
            >
              {label}
            </label>
          ) : null}
          <input
            ref={ref}
            id={fieldId}
            className={cn(
              "h-full w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground",
              filled ? "px-4 pt-5 pb-1" : "px-4",
              startIcon && "pl-2",
              endIcon && "pr-2",
              className
            )}
            {...props}
          />
          {endIcon ? (
            <span className={cn("pr-3 [&_svg]:size-5", error ? "text-destructive" : "text-muted-foreground")}>
              {endIcon}
            </span>
          ) : null}
        </div>
        {supportingText ? (
          <p className={cn("px-4 pt-1 text-xs", error ? "text-destructive" : "text-muted-foreground")}>
            {supportingText}
          </p>
        ) : null}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, fieldVariants }
