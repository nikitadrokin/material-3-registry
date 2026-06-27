"use client"

import * as React from "react"
import { Check } from "lucide-react"

import { Chip } from "@/registry/md3/ui/chip"

const LABELS = ["Enabled", "Filters", "Elevated", "Selected", "Disabled"]

export default function ChipsDemo() {
  const [selected, setSelected] = React.useState<boolean[]>([
    true,
    false,
    false,
    true,
    false,
  ])

  const toggle = (i: number) =>
    setSelected((prev) => prev.map((v, idx) => (idx === i ? !v : v)))

  return (
    <div className="flex flex-wrap gap-3">
      {LABELS.map((label, i) => (
        <Chip
          key={label}
          variant="filter"
          selected={selected[i]}
          onClick={() => toggle(i)}
        >
          {selected[i] ? <Check /> : null}
          {label}
        </Chip>
      ))}
    </div>
  )
}
