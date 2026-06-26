"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  supportingText?: string
  error?: boolean
}

/** Material 3 multi-line text field (outlined). */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, supportingText, error = false, id, ...props }, ref) => {
    const reactId = React.useId()
    const fieldId = id ?? reactId
    return (
      <div className="flex flex-col">
        <div
          className={cn(
            "group relative rounded-[4px] border-2 transition-colors",
            error ? "border-destructive" : "border-border focus-within:border-primary"
          )}
        >
          {label ? (
            <label
              htmlFor={fieldId}
              className={cn(
                "pointer-events-none absolute -top-2 left-3 bg-background px-1 text-xs",
                error ? "text-destructive" : "text-muted-foreground group-focus-within:text-primary"
              )}
            >
              {label}
            </label>
          ) : null}
          <textarea
            ref={ref}
            id={fieldId}
            className={cn(
              "min-h-[96px] w-full resize-y bg-transparent px-4 py-3 text-base text-foreground outline-none placeholder:text-muted-foreground",
              className
            )}
            {...props}
          />
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
Textarea.displayName = "Textarea"

export { Textarea }
