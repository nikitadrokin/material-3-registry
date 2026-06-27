"use client"

import * as React from "react"
import { Box, Moon, Sun, Terminal } from "lucide-react"

import { IconButton } from "@/registry/md3/ui/icon-button"
import TypeScaleDemo from "@/registry/md3/examples/type-scale-demo"
import ColorRolesDemo from "@/registry/md3/examples/color-roles-demo"
import ButtonsDemo from "@/registry/md3/examples/buttons-demo"
import ChipsDemo from "@/registry/md3/examples/chips-demo"
import SelectionControlsDemo from "@/registry/md3/examples/selection-controls-demo"
import TextFieldsDemo from "@/registry/md3/examples/text-fields-demo"
import CardsDemo from "@/registry/md3/examples/cards-demo"
import OverlaysDemo from "@/registry/md3/examples/overlays-demo"
import DataDisplayDemo from "@/registry/md3/examples/data-display-demo"
import NavigationDemo from "@/registry/md3/examples/navigation-demo"
import DisclosureDemo from "@/registry/md3/examples/disclosure-demo"

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 border-b border-border pb-3.5 font-mono text-[13px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
      {children}
    </h2>
  )
}

const SECTIONS: { label: string; node: React.ReactNode }[] = [
  { label: "Type scale", node: <TypeScaleDemo /> },
  { label: "Color roles", node: <ColorRolesDemo /> },
  { label: "Common buttons", node: <ButtonsDemo /> },
  { label: "Chips", node: <ChipsDemo /> },
  { label: "Selection controls", node: <SelectionControlsDemo /> },
  { label: "Text fields", node: <TextFieldsDemo /> },
  { label: "Cards & elevation", node: <CardsDemo /> },
  { label: "Dialogs, menus & feedback", node: <OverlaysDemo /> },
  { label: "Lists, tables & data", node: <DataDisplayDemo /> },
  { label: "Navigation", node: <NavigationDemo /> },
  { label: "Disclosure & banners", node: <DisclosureDemo /> },
]

/**
 * The full Material 3 × shadcn "kitchen sink" — a React composition of every
 * example in the registry, with a light/dark toggle. This replaces the static
 * .dc.html prototype.
 */
export default function KitchenSink() {
  const [dark, setDark] = React.useState(false)

  return (
    <div
      className={dark ? "dark" : undefined}
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/85 px-5 backdrop-blur">
        <Box className="size-7 text-primary" />
        <div className="flex flex-col leading-tight">
          <span className="text-[17px] font-medium tracking-tight">
            Material 3{" "}
            <span className="font-normal text-muted-foreground">for</span> shadcn
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">
            md3-registry · v1.0.0
          </span>
        </div>
        <div className="flex-1" />
        <span className="hidden items-center gap-2 rounded-full border border-border px-3.5 py-2 text-[13px] font-medium sm:inline-flex">
          <Terminal className="size-4" />
          npx shadcn add
        </span>
        <IconButton
          variant="standard"
          aria-label="Toggle theme"
          onClick={() => setDark((d) => !d)}
        >
          {dark ? <Sun /> : <Moon />}
        </IconButton>
      </header>

      <main className="mx-auto max-w-[1180px] px-6 py-11 pb-28">
        <section className="mb-16">
          <h1 className="m-0 mb-4 max-w-3xl text-5xl font-normal leading-[1.08] tracking-tight">
            Google&apos;s Material 3, wearing shadcn&apos;s tokens.
          </h1>
          <p className="m-0 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            A faithful Material Design 3 component spec — state layers, ripples,
            tonal elevation, shape &amp; motion — built on the neutral shadcn
            CSS-variable palette and installable via the CLI.
          </p>
        </section>

        <div className="flex flex-col gap-16">
          {SECTIONS.map((s) => (
            <section key={s.label}>
              <SectionLabel>{s.label}</SectionLabel>
              {s.node}
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}
