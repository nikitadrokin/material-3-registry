"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

/** Material 3 primary tabs. Underline indicator, state layers per tab. */
const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("flex w-full items-stretch border-b border-border", className)}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "md-state-layer relative flex h-12 flex-1 items-center justify-center gap-2 px-4 text-sm font-medium text-muted-foreground outline-none transition-colors",
      "focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-[0.38] [&_svg]:size-5",
      "data-[state=active]:text-primary",
      "after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-16 after:-translate-x-1/2 after:rounded-t-full after:bg-primary after:opacity-0 data-[state=active]:after:opacity-100",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-4 outline-none focus-visible:ring-2 focus-visible:ring-ring", className)}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
