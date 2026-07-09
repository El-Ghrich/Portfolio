import { Hero } from "@/components/hero"
import { TechStackBar } from "@/components/tech-stack-bar"
import { About } from "@/components/about"
import { ExperienceSection } from "@/components/experience-section"
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
