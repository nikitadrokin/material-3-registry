const COLOR_ROLES = [
  { name: "Primary", var: "--primary" },
  { name: "On Primary", var: "--primary-foreground" },
  { name: "Secondary", var: "--secondary" },
  { name: "Muted", var: "--muted" },
  { name: "Accent", var: "--accent" },
  { name: "Destructive", var: "--destructive" },
  { name: "Border", var: "--border" },
  { name: "Card", var: "--card" },
]

export default function ColorRolesDemo() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3.5">
      {COLOR_ROLES.map((c) => (
        <div key={c.var} className="overflow-hidden rounded-xl border border-border">
          <div className="h-16" style={{ background: `var(${c.var})` }} />
          <div className="px-3 py-2.5">
            <div className="text-[13px] font-medium">{c.name}</div>
            <div className="mt-0.5 font-mono text-[11px] text-muted-foreground">
              {c.var}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
