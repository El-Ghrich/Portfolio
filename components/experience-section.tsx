'use client'
import PinnedTimeline from "./pinned-timeline"

export function ExperienceSection() {
  return (
    <section  id="projects" className="w-full bg-[#050505]">
      <div className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <div className=" flex justify-center items-center">
          <p className=" flex items-center gap-4 text-sm font-medium uppercase tracking-[0.35em] text-primary">
                  02
                  <span className="h-px w-15 bg-primary" />
                  PROJECTS
                </p>
                </div>
          <h1 className="my-6 font-sans text-4xl font-black uppercase leading-[1.2] tracking-tight sm:text-6xl">
            Architecting systems that <i> <span className="text-primary">scale.</span></i>
          </h1>
          <p className="mt-6 text-pretty text-white/50 md:text-lg">
            Keep scrolling to move through the timeline.
          </p>
        </div>
      </div>
      <PinnedTimeline />
    </section>
  )
}

export default ExperienceSection;