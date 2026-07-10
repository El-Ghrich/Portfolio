import BorderGlow from "./BorderGlow"
import Image from 'next/image';
import { ScrollReveal } from "./scroll-reveal"
import { TechStackBar } from "./tech-stack-bar";
import MarqueeLoop from "@/components/ui/marqueeLoop"

export function About() {
  const proves: { title: string; description: string }[] = [
  { 
    title: "CV Generator", 
    description: "Multi-agent RAG architecture · 20+ microservices · 6 databases" 
  },
  { 
    title: "Readov", 
    description: "Monolith to Edge migration · Flask/Jinja to Next.js" 
  },
  { 
    title: "GrowTrack", 
    description: "Engineered production JWT security layer & authentication" 
  },
]

  return (
    <>
    <section id="about" className="w-full bg-background py-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid items-start gap-30 md:grid-cols-2">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-12 ">
            <ScrollReveal direction="left" distance={60} duration={0.7}>
              <div>
                <p className="mb-10 flex items-center gap-4 text-sm font-medium uppercase tracking-[0.35em] text-primary">
                  01
                  <span className="h-px w-15 bg-primary" />
                  ENGINEERING PHILOSOPHY
                </p>
                <h2 className="mb-6 font-sans text-4xl font-black uppercase leading-[0.92] tracking-tight sm:text-5xl">
                  <i> <span className="text-primary">Beautiful</span></i> on the surface. <i><span className="text-primary">Unshakeable</span></i> underneath.
                </h2>
                <div className="space-y-4 leading-relaxed text-muted-foreground">
                  <p>
                    I am a Full-Stack Engineer who believes a flawless user interface and impenetrable security are not mutually exclusive. While I obsess over the pixel-perfect details and fluid interactions of the frontend, I treat System Design and Application Security as indispensable absolutes.
                  </p>
                  <p>
                    A beautiful application is a liability if its architecture is fragile. I don't compromise between form and function. I engineer the seamless experiences users expect, backed by the rigorous infrastructure production demands.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* TIMELINE SECTION (Replaced Metrics) */}
            <ScrollReveal direction="left" distance={40} duration={0.6} delay={0.3}>
              <div className="mt-2">
                <p className="mb-6 flex items-center gap-4 text-sm font-medium uppercase tracking-[0.35em] text-primary/70">
                  <span className="h-px w-8 bg-primary/40" />
                  PROVEN EXPERIENCE
                </p>
                
                <div className="relative space-y-6">
                  {/* The continuous vertical line */}
                  <div className="absolute left-[5px] top-2 bottom-2 w-[1px] bg-primary/20" />

                  {proves.map((prove, index) => (
                    <div key={index} className="relative flex items-start gap-6">
                      {/* The dot indicator */}
                      <div className="relative z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full border-[2.5px] border-background bg-primary/70" />
                      
                      {/* Content block */}
                      <div className="flex w-full flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8">
                        <span className="text-xl font-bold tracking-widest text-primary/80 sm:w-40 sm:shrink-0">
                          {prove.title}
                        </span>
                        <span className="font-sans text-base font-medium text-foreground">
                          {prove.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN */}
          <ScrollReveal direction="right" distance={60} duration={0.7} delay={0.2}>
            <div className="flex flex-col gap-12 items-center">
              
              {/* Profile Image with BorderGlow */}
              <div className="flex justify-center md:justify-end">
                <BorderGlow
                  edgeSensitivity={30}
                  glowColor="40 80 80"
                  backgroundColor="#000000"
                  borderRadius={28}
                  glowRadius={40}
                  glowIntensity={1}
                  coneSpread={23}
                  animated={false}
                  colors={['#c084fc', '#f472b6', '#38bdf8']}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                      background:
                        "radial-gradient(60% 60% at 50% 80%, oklch(0.72 0.18 55 / 0.22) 20%, oklch(0.72 0.18 55 / 0.06) 90%, transparent 140%)",
                    }}
                  />
                  <div className="p-2 z-10">
                    <Image
                    src="/me.png"
                    alt="About the software engineer"
                    width={800}
                    height={800}
                    className="h-auto w-full max-w-md object-contain z-10"
                  />
                  </div>
                </BorderGlow>
              </div>

              {/* Clean Vitals List */}
              <div className="flex flex-col mr-0 sm:mr-40 space-y-4">
                
                {/* Based In */}
                <div className="group  border-b border-primary/5 pb-4 transition-all hover:border-primary/20">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                    Located In
                  </span>
                  <p className="mt-1 font-sans text-base font-bold text-foreground">
                    Tangier, Morocco
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    35.7595° N · 5.8340° W
                  </p>
                </div>

                {/* Background */}
                <div className="group border-b border-primary/5 pb-4 transition-all hover:border-primary/20">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                    Background
                  </span>
                  <p className="mt-1 font-sans text-base font-bold text-foreground">
                    4th-Year Engineering (Génie Informatique) · ENSA Tanger
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    Internship @ SEBN MA · Founding Readov.com
                  </p>
                </div>

                {/* Open To */}
                <div className="group transition-all hover:border-primary/20">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                    Status
                  </span>
                  <p className="mt-1 font-sans text-base font-bold text-foreground">
                    Seeking Technical PFA Internship (July 2026)
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    Full-Stack / Tech-Lead Roles 
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    <div className=" relative bottom-0 z-999">
              <MarqueeLoop />
     </div>
    </>
  )
}
export default About;