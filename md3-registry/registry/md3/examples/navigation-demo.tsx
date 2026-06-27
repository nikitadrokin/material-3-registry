"use client"

import * as React from "react"
import {
  Boxes,
  SlidersHorizontal,
  Download,
  Home,
  LayoutGrid,
  Bookmark,
  User,
  Bold,
  Italic,
  Underline,
} from "lucide-react"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/md3/ui/tabs"
import {
  NavigationBar,
  NavigationBarItem,
} from "@/registry/md3/ui/navigation-bar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/md3/ui/select"
import { Toggle } from "@/registry/md3/ui/toggle"

const TABS = [
  { value: "components", label: "Components", icon: Boxes },
  { value: "tokens", label: "Tokens", icon: SlidersHorizontal },
  { value: "install", label: "Install", icon: Download },
]

const NAV = [
  { label: "Home", icon: Home },
  { label: "Browse", icon: LayoutGrid },
  { label: "Saved", icon: Bookmark },
  { label: "Profile", icon: User },
]

const DENSITY = ["Comfortable", "Cozy", "Compact", "Spacious"]

export default function NavigationDemo() {
  const [nav, setNav] = React.useState(0)

  return (
    <div className="flex flex-col gap-10">
      {/* Primary tabs */}
      <Tabs defaultValue="components">
        <TabsList>
          {TABS.map(({ value, label, icon: Icon }) => (
            <TabsTrigger key={value} value={value}>
              <Icon />
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        {TABS.map(({ value, label }) => (
          <TabsContent key={value} value={value} className="text-sm text-muted-foreground">
            {label} panel content.
          </TabsContent>
        ))}
      </Tabs>

      {/* Bottom navigation bar */}
      <div className="flex justify-center">
        <NavigationBar className="w-full max-w-md rounded-2xl">
          {NAV.map(({ label, icon: Icon }, i) => (
            <NavigationBarItem
              key={label}
              label={label}
              active={nav === i}
              onClick={() => setNav(i)}
              icon={<Icon className={nav === i ? "fill-current" : undefined} />}
            />
          ))}
        </NavigationBar>
      </div>

      {/* Select + icon toggles */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] items-start gap-8">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[13px] text-muted-foreground">Select</span>
          <Select defaultValue="Comfortable">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {DENSITY.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[13px] text-muted-foreground">
            Icon toggles
          </span>
          <div className="flex gap-2.5">
            <Toggle defaultPressed aria-label="Bold">
              <Bold />
            </Toggle>
            <Toggle aria-label="Italic">
              <Italic />
            </Toggle>
            <Toggle aria-label="Underline">
              <Underline />
            </Toggle>
          </div>
        </div>
      </div>
    </div>
  )
}
