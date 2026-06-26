# md3 — Material Design 3 for shadcn

A [shadcn registry](https://ui.shadcn.com/docs/registry) that delivers Google's **Material Design 3** component spec — state layers, ripples, tonal/shadow elevation, the shape scale, and motion easing — on top of shadcn's **neutral CSS-variable palette**. Install any piece with the shadcn CLI.

```bash
npx shadcn@latest add https://YOUR_HOST/r/button.json
```

## What's in the box

35 items: the theme + `cn()` + ripple hook, plus the full canonical shadcn/ui component set re-skinned to MD3 (and three MD3 extras — `fab`, `chip`, `navigation-bar`).

**Foundation**
| Item | Type | Notes |
|------|------|-------|
| `md3-theme` | `registry:style` | Color roles (light + dark), shape scale (`--radius-*`), elevation (`--elevation-1..4`), motion easings, the `.md-state-layer` utility, and the ripple / progress / accordion keyframes. |
| `utils` | `registry:lib` | `cn()` helper. |
| `use-ripple` | `registry:hook` | MD3 pointer ripple. |

**Actions** — `button` (Elevated · Filled · Tonal · Outlined · Text), `icon-button`, `fab` (regular + extended), `chip` (assist · filter · input · suggestion), `toggle`.

**Forms** — `input` (MD3 text field, filled/outlined, floating label), `textarea`, `label`, `checkbox`, `radio-group`, `switch`, `slider`, `select`.

**Containment** — `card` (elevated · filled · outlined), `accordion`, `separator`, `table`.

**Overlays** — `dialog`, `alert-dialog`, `sheet` (side + bottom), `popover`, `dropdown-menu`, `tooltip`, `snackbar` (Sonner-based).

**Communication / data** — `alert` (banner), `badge` (dot · number · pill), `avatar`, `skeleton`, `linear-progress`, `circular-progress`.

**Navigation** — `tabs`, `navigation-bar` (MD3 bottom nav).

Every component declares its `registryDependencies`, so adding e.g. `button` pulls `md3-theme`, `utils`, and `use-ripple` automatically.

## Why this is registry-compatible

- `registry.json` validates against the official `https://ui.shadcn.com/schema/registry.json` schema.
- Tokens ship as `cssVars` (`theme` / `light` / `dark`) and custom `css` (keyframes + the `.md-state-layer` component layer) — exactly how shadcn merges design tokens into your `globals.css`.
- Components import from the standard aliases (`@/lib/utils`, `@/hooks/use-ripple`) and declare their `registryDependencies`, so the CLI pulls the theme + ripple hook automatically when you add a component.

## Building & hosting

1. Install the CLI and build the registry into static JSON:
   ```bash
   npx shadcn@latest build      # emits public/r/*.json
   ```
2. Serve `public/` from any host (Vercel, GitHub Pages, S3…).
3. Consumers install by URL:
   ```bash
   npx shadcn@latest add https://YOUR_HOST/r/md3-theme.json
   npx shadcn@latest add https://YOUR_HOST/r/button.json
   ```

> Install `md3-theme` first (or just add a component — the CLI resolves it as a dependency). It writes the Material 3 tokens into your `globals.css`.

## Usage

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export function Demo() {
  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Material 3 × shadcn</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-3">
        <Button variant="filled">Filled</Button>
        <Button variant="tonal">Tonal</Button>
        <Button variant="outlined">Outlined</Button>
        <Switch defaultChecked />
      </CardContent>
    </Card>
  )
}
```

## Project layout

```
md3-registry/
├── registry.json                 # the manifest (build input)
└── registry/md3/
    ├── lib/utils.ts              # cn()
    ├── lib/elevation.ts          # elevation scale
    ├── hooks/use-ripple.ts       # MD3 ripple
    └── ui/                       # 32 components
        ├── button.tsx  icon-button.tsx  fab.tsx  chip.tsx  toggle.tsx
        ├── input.tsx  textarea.tsx  label.tsx  checkbox.tsx  radio-group.tsx
        ├── switch.tsx  slider.tsx  select.tsx
        ├── card.tsx  accordion.tsx  separator.tsx  table.tsx
        ├── dialog.tsx  alert-dialog.tsx  sheet.tsx  popover.tsx
        ├── dropdown-menu.tsx  tooltip.tsx  snackbar.tsx
        ├── alert.tsx  badge.tsx  avatar.tsx  skeleton.tsx
        ├── linear-progress.tsx  circular-progress.tsx
        └── tabs.tsx  navigation-bar.tsx
```

## Tokens at a glance

**Shape scale** — `--radius-xs 4px`, `--radius-sm 8px`, `--radius-md 12px`, `--radius-lg 16px`, `--radius-xl 28px`, `--radius-full`.

**Motion** — `--ease-standard`, `--ease-emphasized-decel`, `--ease-emphasized-accel`.

**Elevation** — `--elevation-1` … `--elevation-4` (key + ambient shadow pairs).

**Color** — the shadcn neutral roles (`primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `ring`, …) in light and dark.

---

Material Design is a trademark of Google LLC. This is an independent, MIT-licensed adaptation of the MD3 spec onto shadcn tokens.
