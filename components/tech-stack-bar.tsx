"use client"

import LogoLoop from "./LogoLoop"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si"

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
]

export function TechStackBar() {
  return (
    <div className="relative w-full opacity-80 p-1.5 py-6 overflow-hidden border-y border-border/40 bg-background/40 backdrop-blur-sm">
      <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(40% 90% at 50% 0%, oklch(0.72 0.20 55 / 0.05) 0%, oklch(0.72 0.20 55 / 0.03) 70%, transparent 100%)",
              position: "absolute"
          }}
        />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
        <div className="h-full w-[200%]  bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden">
        <div className="h-full w-[200%] animate-shimmer bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />
      </div>
      <LogoLoop
        logos={techLogos}
        speed={60}
        direction="left"
        logoHeight={40}
        gap={90}
        hoverSpeed={30}
        scaleOnHover
        fadeOut
        ariaLabel="Technology partners"
      />
    </div>
  )
}
