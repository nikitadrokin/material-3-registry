"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Material 3 navigation bar (bottom nav).
 *
 * `NavigationBar` is the container; each `NavigationBarItem` shows an icon in a
 * tonal "active indicator" pill plus a label. Pass `active` and `icon`.
 */
const NavigationBar = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn(
        "flex h-20 items-center justify-around gap-2 bg-card px-3 shadow-[var(--elevation-2)]",
        className
      )}
      {...props}
    />
  )
)
NavigationBar.displayName = "NavigationBar"

export interface NavigationBarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  label: React.ReactNode
  active?: boolean
}

const NavigationBarItem = React.forwardRef<HTMLButtonElement, NavigationBarItemProps>(
  ({ className, icon, label, active = false, ...props }, ref) => (
    <button
      ref={ref}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex flex-col items-center gap-1 text-xs font-medium outline-none",
        active ? "text-foreground" : "text-muted-foreground",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "grid h-8 w-16 place-items-center rounded-full transition-colors [&_svg]:size-6",
          active ? "bg-primary/[0.22]" : "bg-transparent"
        )}
      >
        {icon}
      </span>
      {label}
    </button>
  )
)
NavigationBarItem.displayName = "NavigationBarItem"

export { NavigationBar, NavigationBarItem }
