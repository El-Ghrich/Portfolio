'use client'
import dynamic from "next/dynamic";
import { Hero } from "@/components/hero"
const About = dynamic(() => import("@/components/about"), {ssr : true});
const ExperienceSection = dynamic(() => import("@/components/experience-section"), {ssr : false});
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Page() {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <ScrollReveal direction="up" distance={60} duration={0.7} delay={0.1}>
      <ExperienceSection />
      </ScrollReveal>
    </main>
  )
}
