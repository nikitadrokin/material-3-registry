"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

/**
 * Material 3 switch.
 *
 * Built on Radix Switch. The thumb grows from 16dp → 24dp on activation and the
 * track flips from outlined (off) to filled `primary` (on), per the MD3 spec.
 */
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      "peer inline-flex h-8 w-[52px] shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-[0.38]",
      "data-[state=unchecked]:border-muted-foreground data-[state=unchecked]:bg-secondary",
      "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "pointer-events-none block rounded-full shadow-sm transition-all",
        "data-[state=unchecked]:ml-1 data-[state=unchecked]:size-4 data-[state=unchecked]:bg-muted-foreground",
        "data-[state=checked]:ml-[22px] data-[state=checked]:size-6 data-[state=checked]:bg-primary-foreground"
      )}
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }
