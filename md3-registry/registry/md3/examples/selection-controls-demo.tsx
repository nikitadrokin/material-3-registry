"use client"

import * as React from "react"

import { Switch } from "@/registry/md3/ui/switch"
import { Checkbox } from "@/registry/md3/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/registry/md3/ui/radio-group"
import { Slider } from "@/registry/md3/ui/slider"
import { Label } from "@/registry/md3/ui/label"

const CHECKS = ["Ripple on press", "Reduce motion", "Tonal surfaces"]
const DENSITY = ["Comfortable", "Compact", "Spacious"]

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-mono text-[13px] text-muted-foreground">{title}</span>
      {children}
    </div>
  )
}

export default function SelectionControlsDemo() {
  const [switchOn, setSwitchOn] = React.useState(true)
  const [checks, setChecks] = React.useState([true, false, true])
  const [density, setDensity] = React.useState("Comfortable")
  const [slider, setSlider] = React.useState(60)

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
      <Section title="Switch">
        <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
      </Section>

      <Section title="Checkbox">
        <div className="flex flex-col gap-2.5">
          {CHECKS.map((label, i) => (
            <Label key={label} className="flex items-center gap-3 font-normal">
              <Checkbox
                checked={checks[i]}
                onCheckedChange={(v) =>
                  setChecks((prev) =>
                    prev.map((c, idx) => (idx === i ? Boolean(v) : c))
                  )
                }
              />
              {label}
            </Label>
          ))}
        </div>
      </Section>

      <Section title="Radio">
        <RadioGroup value={density} onValueChange={setDensity} className="gap-2.5">
          {DENSITY.map((label) => (
            <Label key={label} className="flex items-center gap-3 font-normal">
              <RadioGroupItem value={label} />
              {label}
            </Label>
          ))}
        </RadioGroup>
      </Section>

      <Section title={`Slider · ${slider}`}>
        <Slider
          value={[slider]}
          onValueChange={([v]) => setSlider(v)}
          max={100}
          step={1}
        />
      </Section>
    </div>
  )
}
