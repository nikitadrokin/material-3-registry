import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/registry/md3/ui/card"

const ELEVATIONS = [
  { label: "level 0", shadow: "none" },
  { label: "level 1", shadow: "var(--elevation-1)" },
  { label: "level 2", shadow: "var(--elevation-2)" },
  { label: "level 3", shadow: "var(--elevation-3)" },
  { label: "level 4", shadow: "var(--elevation-4)" },
]

export default function CardsDemo() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        <Card variant="elevated" className="overflow-hidden">
          <div className="h-28 bg-secondary" />
          <CardContent className="p-4">
            <CardTitle className="mb-1.5">Elevated card</CardTitle>
            <CardDescription>Shadow-based elevation level 1.</CardDescription>
          </CardContent>
        </Card>
        <Card variant="filled" className="overflow-hidden">
          <div className="h-28 bg-foreground/[0.08]" />
          <CardContent className="p-4">
            <CardTitle className="mb-1.5">Filled card</CardTitle>
            <CardDescription>Tonal surface, no shadow.</CardDescription>
          </CardContent>
        </Card>
        <Card variant="outlined" className="overflow-hidden">
          <div className="h-28 bg-secondary" />
          <CardContent className="p-4">
            <CardTitle className="mb-1.5">Outlined card</CardTitle>
            <CardDescription>1px border, flat.</CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Elevation scale */}
      <div className="flex flex-wrap gap-5">
        {ELEVATIONS.map((e) => (
          <div key={e.label} className="flex flex-col items-center gap-2.5">
            <div
              className="h-18 w-24 rounded-xl bg-card"
              style={{ boxShadow: e.shadow, height: 72 }}
            />
            <span className="font-mono text-[11px] text-muted-foreground">
              {e.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
