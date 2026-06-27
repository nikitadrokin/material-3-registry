# Material 3 for shadcn

A Material Design 3 component registry for [shadcn/ui](https://ui.shadcn.com), plus a Vite showcase app.

## Structure

This repo follows [shadcn/ui's monorepo layout](https://ui.shadcn.com/docs/monorepo): the registry and the demo app live in separate workspaces.

```
.
├── md3-registry/          # shadcn registry (registry.json + component source)
│   └── registry/md3/    # UI components, hooks, lib, and examples
└── apps/
    └── showcase/        # Vite + React showcase (no router)
```

- **`md3-registry`** — publishable registry consumed via `npx shadcn add`.
- **`apps/showcase`** — local dev app that imports registry files through path aliases and renders the kitchen-sink demo.

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

## License

MIT
