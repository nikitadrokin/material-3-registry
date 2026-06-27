# Material 3 for shadcn

A Material Design 3 component registry for [shadcn/ui](https://ui.shadcn.com), plus a Vite showcase app.

## Structure

This repo follows [shadcn/ui's monorepo layout](https://ui.shadcn.com/docs/monorepo): the registry and the demo app live in separate workspaces.

```
.
├── md3-registry/          # shadcn registry (registry.json; registry/md3 → symlink)
└── apps/
    └── showcase/          # Vite + React showcase (no router)
        └── registry/md3/  # UI components, hooks, lib, and examples (source of truth)
```

- **`md3-registry`** — publishable registry consumed via `npx shadcn add` (`registry/md3` symlinks to the showcase copy).
- **`apps/showcase`** — local dev app and Coolify deployment target; imports registry files through path aliases and renders the kitchen-sink demo.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`    | Start the showcase app   |
| `npm run build`  | Production build         |
| `npm run preview`| Preview production build |

## Installing components elsewhere

Point the shadcn CLI at this registry (once published or served locally), then:

```bash
npx shadcn@latest add button
```

## Deploying (Coolify / Nixpacks)

Set the **base directory** to `apps/showcase`. Nixpacks reads `apps/showcase/nixpacks.toml`, runs `npm run build`, and serves the Vite `dist/` folder.

From the repo root you can also run `npm run build` via workspaces.

## License

MIT
