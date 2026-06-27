"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/** Material 3 skeleton — tonal surface with a pulse. */
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-secondary", className)} {...props} />
}

export { Skeleton }
