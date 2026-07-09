'use client'

import { ReactLenis } from "lenis/react"

export interface LenisScrollProviderProps {
  children: React.ReactNode
  /**
   * Linear interpolation intensity (0–1). Lower = smoother/floatier.
   * @default 0.1
   */
  lerp?: number
  /**
   * Scroll duration in seconds (used for programmatic scrollTo).
   * @default 1
   */
  duration?: number
  /**
   * Enable smooth wheel scrolling.
   * @default true
   */
  smoothWheel?: boolean
  /**
   * Wheel event multiplier. >1 scrolls faster.
   * @default 1
   */
  wheelMultiplier?: number
  /**
   * Touch event multiplier. >1 scrolls faster.
   * @default 1
   */
  touchMultiplier?: number
  /**
   * Orientation of scrolling.
   * @default "vertical"
   */
  orientation?: "vertical" | "horizontal"
  /**
   * Whether to animate anchor links (<a href="#section">) smoothly.
   * @default true
   */
  anchors?: boolean
  /**
   * Stop propagation of wheel events to prevent page bounce.
   * @default false
   */
  overscroll?: boolean
}

export function LenisScrollProvider({
  children,
  lerp = 0.1,
  duration = 1,
  smoothWheel = true,
  wheelMultiplier = 1,
  touchMultiplier = 1,
  orientation = "vertical",
  anchors = true,
  overscroll = true,
}: LenisScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp,
        duration,
        smoothWheel,
        wheelMultiplier,
        touchMultiplier,
        orientation,
        anchors,
        overscroll,
      }}
    >
      {children}
    </ReactLenis>
  )
}
