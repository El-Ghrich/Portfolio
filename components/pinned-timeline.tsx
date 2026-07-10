"use client"

import { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion"

// 1. Expanded Project Data
const projects = [
  {
    year: "2026",
    title: "CV Generator",
    description: "An automated, job-targeted CV platform driven by a multi-agent RAG architecture, featuring 20+ microservices and 6 databases. Provisioned infrastructure-as-code (Terraform/Ansible) for local deployment with AWS migration pathways.",
    techStack: ["FastAPI", ".NET", "Angular", "Terraform", "AWS"],
    image: "/projects/CV.png", 
    links: { live: "", github: "https://github.com" },
    align: "left",
  },
  {
    year: "2026",
    title: "Readov",
    description: "Led the strategic migration of a monolithic Flask application with Jinja templates into a high-performance Next.js architecture, leveraging Edge Functions for global scalability.",
    techStack: ["Next.js", "Edge Functions", "Supabase", "Flask"],
    image: "/projects/readov.png",
    links: { live: "https://readov.com", github: "https://github.com" },
    align: "right",
  },
  {
    year: "2025",
    title: "Roadmap Builder",
    description: "Led the full project lifecycle for a scalable management platform. Implemented a RAG-powered intelligent search agent specifically designed to surface build progress and metrics for roadmap creators.",
    techStack: ["React", "TypeScript", "Express", "Docker"],
    image: "/projects/roadmap.png",
    links: { live: "", github: "https://github.com" },
    align: "left",
  },
  {
    year: "2025",
    title: "GrowTrack",
    description: "Architected the production security layer, designing and implementing a robust JWT-based authentication system within an Agile/Scrum environment.",
    techStack: ["Vue.js", "Express.js", "JWT Auth", "PostgreSQL"],
    image: "/projects/growtrack.png",
    links: { live: "", github: "https://github.com" },
    align: "right",
  },
  {
    year: "2025",
    title: "Turbo Bites",
    description: "A high-performance restaurant platform featuring aggressive responsive design, interactive menus, and geolocation routing. Engineered for sub-second load times on mobile edge networks.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/turbobites.png",
    links: { live: "https://yourlink.com", github: "https://github.com" },
    align: "left",
  },
] as const;

type Project = (typeof projects)[number]

export default function PinnedTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollProgress } = useScrollProgress(sectionRef)
  const trackY = useTransform(scrollProgress, [0, 1], ["8%", "-8%"])
  const lineScale = useTransform(scrollProgress, [0, 1], [0, 1])

  return (
    <section ref={sectionRef} className="relative h-[400vh] w-full bg-[#050505] font-sans">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        
        {/* Background Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#182ebf]/[0.04] blur-3xl" />

        

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: useTransform(scrollProgress, [0, 0.08], [1, 0]) }}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-[0.3em] text-white/40"
        >
          Scroll
        </motion.div>

        {/* Center Timeline Line */}
        <div className="absolute inset-y-0 left-8 md:left-1/2 md:-translate-x-1/2">
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/5" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 origin-top bg-gradient-to-b from-[#cf4f05] via-white/50 to-transparent shadow-[0_0_10px_rgba(24,46,191,0.5)]"
          />
          {/* Glowing Center Dot */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#cf4f05]/20 blur-md" />
            <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-white/40" />
            <span className="relative block h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_16px_4px_rgba(255,255,255,0.8)]" />
          </div>
        </div>

        {/* Track */}
        <motion.div
          style={{ y: trackY }}
          className="relative mx-auto h-full w-full max-w-7xl"
        >
          {projects.map((project, i) => (
            <TimelineCard
              key={project.title}
              project={project}
              index={i}
              total={projects.length}
              progress={scrollProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TimelineCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const seg = 1 / total
  const start = index * seg
  const end = start + seg
  const enter = start + seg * 0.28
  const exit = end - seg * 0.28

  const y = useTransform(progress, [start, enter, exit, end], [160, 0, 0, -160])
  const opacity = useTransform(progress, [start, enter, exit, end], [0, 1, 1, 0])
  const scale = useTransform(progress, [start, enter, exit, end], [0.85, 1, 1, 0.9])

  const smoothY = useSpring(y, { stiffness: 100, damping: 25, mass: 0.5 })
  const isLeft = project.align === "left"

  return (
    <motion.div
      style={{ y: smoothY, opacity, scale }}
      className="absolute inset-x-0 top-1/2 -translate-y-1/2"
    >
      <div
        className={[
          "flex w-full",
          "justify-start pl-20 pr-6", // Mobile padding
          isLeft ? "md:justify-start md:pl-0 md:pr-0" : "md:justify-end md:pl-0 md:pr-0",
        ].join(" ")}
      >
        <div
          className={[
            "w-full md:w-[45%]", // Keep it slightly under 50% so it doesn't touch the line
            isLeft ? "md:pr-12" : "md:pl-12",
          ].join(" ")}
        >
          <Card project={project} />
        </div>
      </div>
    </motion.div>
  )
}

// 2. The Upgraded Card Component
function Card({ project }: { project: Project }) {
  return (
    <div className="group relative flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)]">
      
      {/* Top Image Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black/40">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Year Badge */}
        <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-xs text-white/80 backdrop-blur-md">
          {project.year}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col p-4 md:p-6 text-left">
        <div className="flex items-start justify-between">
          <h3 className="font-sans text-2xl font-bold tracking-tight text-white">
            {project.title}
          </h3>
          
          {/* Action Links (GitHub / Live) */}
          <div className="flex items-center gap-3 text-white/50">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-white/60">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })
  return { scrollProgress: scrollYProgress }
}