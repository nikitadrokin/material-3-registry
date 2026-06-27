"use client"

import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

/**
 * Material 3 snackbar, built on Sonner.
 *
 * Drop `<Toaster />` once near the root, then call `toast("…")`. Styling matches
 * the MD3 snackbar: inverse-surface container, 4dp corners, an inline action in
 * the inverse-primary color, elevation level 3.
 *
 * @example
 * toast("Changes saved", { action: { label: "Undo", onClick: () => {} } })
 */
const Toaster = ({ ...props }: ToasterProps) => (
  <Sonner
    className="toaster group"
    toastOptions={{
      classNames: {
        toast:
          "group toast flex items-center gap-6 rounded-[4px] bg-foreground px-4 py-3.5 text-sm text-background shadow-[var(--elevation-3)]",
        description: "text-background/80",
        actionButton: "ml-auto bg-transparent text-sm font-medium text-primary",
        cancelButton: "bg-transparent text-sm font-medium text-background/70",
      },
    }}
    {...props}
  />
)

export { Toaster, toast }
