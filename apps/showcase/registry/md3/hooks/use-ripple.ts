"use client"

import * as React from "react"

/**
 * Material 3 touch ripple.
 *
 * Attach the returned `onPointerDown` to any positioned, `overflow-hidden`
 * element. A radial ripple grows from the pointer position and fades out,
 * matching the MD3 "state layer" press response.
 *
 * @example
 * const ripple = useRipple()
 * return <button className="relative overflow-hidden" {...ripple}>Press</button>
 */
export function useRipple() {
  const onPointerDown = React.useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      const host = e.currentTarget
      const rect = host.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const span = document.createElement("span")
      span.style.position = "absolute"
      span.style.borderRadius = "50%"
      span.style.pointerEvents = "none"
      span.style.transform = "scale(0)"
      span.style.background = "currentColor"
      span.style.opacity = "0.16"
      span.style.width = span.style.height = `${size}px`
      span.style.left = `${e.clientX - rect.left - size / 2}px`
      span.style.top = `${e.clientY - rect.top - size / 2}px`
      span.style.animation = "md-ripple 550ms var(--ease-standard) forwards"
      host.appendChild(span)
      span.addEventListener("animationend", () => span.remove())
    },
    []
  )

  return { onPointerDown }
}
