const TYPE_SCALE = [
  { token: "display-large", sample: "Material You", size: "57 / 64", css: "400 36px/40px Roboto" },
  { token: "headline-medium", sample: "Dynamic color", size: "28 / 36", css: "400 28px/36px Roboto" },
  { token: "title-large", sample: "Tonal elevation", size: "22 / 28", css: "400 22px/28px Roboto" },
  {
    token: "body-large",
    sample: "State layers respond to hover, focus, and press.",
    size: "16 / 24",
    css: "400 16px/24px Roboto",
  },
  { token: "label-large", sample: "BUTTON LABEL", size: "14 / 20", css: "500 14px/20px Roboto" },
]

export default function TypeScaleDemo() {
  return (
    <div className="grid gap-0.5">
      {TYPE_SCALE.map((t) => (
        <div
          key={t.token}
          className="flex items-baseline gap-6 border-b border-border py-3.5"
        >
          <span className="w-30 shrink-0 font-mono text-xs text-muted-foreground">
            {t.token}
          </span>
          <span className="flex-1 truncate text-foreground" style={{ font: t.css }}>
            {t.sample}
          </span>
          <span className="w-[90px] shrink-0 text-right font-mono text-xs text-muted-foreground">
            {t.size}
          </span>
        </div>
      ))}
    </div>
  )
}
