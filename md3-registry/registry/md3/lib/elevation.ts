/**
 * Material 3 tonal/shadow elevation scale.
 *
 * MD3 uses six elevation levels (0–5). On light surfaces elevation reads as a
 * shadow; the values below mirror the dp-based key + ambient shadow pairs from
 * the spec. Use the `elevation` map for inline styles, or the Tailwind utility
 * classes `shadow-[var(--elevation-1)]` … wired up by the md3-theme tokens.
 */
export const elevation = {
  0: "none",
  1: "var(--elevation-1)",
  2: "var(--elevation-2)",
  3: "var(--elevation-3)",
  4: "var(--elevation-4)",
} as const

export type ElevationLevel = keyof typeof elevation
