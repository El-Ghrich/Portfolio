  import Link from "next/link"
  import { ArrowRight, Download, Mouse } from "lucide-react"
  import { TechStackBar } from "./tech-stack-bar"
  import { ShootingStarsGrid, type ShootingStarsGridTheme } from "./ui/background"
  import Image from 'next/image';

  const heroTheme: ShootingStarsGridTheme = {
    gridLineColor: "color-mix(in srgb, var(--foreground) 8%, transparent)",
    overlayColor: "transparent 0%, transparent 100%",
    glowPrimary: "oklch(0.72 0.18 55 / 0.22)",
    glowSecondary: "oklch(0.72 0.18 55 / 0.12)",
    starColor: "oklch(0.72 0.18 55 / 0.4)",
    starShadow: "oklch(0.72 0.18 55 / 0.25)",
    shootingStarFrom: "oklch(0.72 0.18 55 / 0.18)",
    shootingStarTo: "rgba(255,255,255,0.92)",
    shootingStarGlow: "oklch(0.72 0.18 55 / 0.35), oklch(0.72 0.18 55 / 0.1)",
  };

  export function Hero() {
    return (
      <>
      <section className="relative z-0 min-h-screen w-full overflow-hidden bg-background text-foreground ">
        <ShootingStarsGrid
          asBackground
          showGrid
          showStaticStars
          shootingStarCount={6}
          gridSize={64}
          glow
          theme={heroTheme}
        />

        {/* Single faded ENGINEER wordmark in the background */}
          <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 z-0 flex items-center justify-center"
        >
          <span className="animate-wordmark-in select-none font-sans text-[16vw] font-black uppercase leading-none tracking-tighter text-foreground/35 md:text-[16vw] ">
            Engineer
          </span>
        </div>

        {/* Photo (transparent cutout) */}
        <div className="absolute inset-y-0 right-0 z-10 flex h-full w-full items-end justify-center md:w-[60%] md:justify-end">
          <div className="animate-hero-image-in relative flex h-full w-full items-end justify-center [animation-delay:200ms]">
            {/* Soft ground shadow under the portrait */}
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[6%] left-1/2 h-16 w-3/5 -translate-x-1/2 rounded-[50%] bg-black/50 blur-2xl md:left-[55%]"
            />
            <Image
              src="/me.png"
              alt="Portrait of the software engineer wearing a dark suit"
              width={800}
              height={800}
              priority
              quality={100}
              className="relative h-auto w-full max-h-[100%] max-w-none object-contain drop-shadow-2xl"
            />
          </div>
          {/* Fade the bottom edge into the background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, var(--background) 92%)",
            }}
          />
          {/* On mobile, darken behind the copy for readability */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(180deg, var(--background) 8%, transparent 45%)",
            }}
          />
        </div>
        

        {/* Content */}
        <div className="relative z-20 mx-auto ml-0 md:ml-20 sm:ml-20 flex min-h-screen max-w-8xl flex-col justify-center px-6 sm:px-10">
          <div className="max-w-xl">
            <p className="animate-hero-fade mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.35em] text-primary [animation-delay:100ms]">
              <span className="h-px w-8 bg-primary" />
              Portfolio
            </p>

            <h1 className="font-sans font-black uppercase leading-[0.92] tracking-tight">
              <span className="animate-hero-rise block text-6xl sm:text-7xl lg:text-8xl [animation-delay:200ms]">
                Software
              </span>
              <span className="animate-hero-rise block text-6xl text-primary sm:text-7xl lg:text-8xl [animation-delay:340ms]">
                Engineer
              </span>
            </h1>

            <p className="animate-hero-rise mt-6 max-w-md font-body text-lg leading-relaxed text-muted-foreground [animation-delay:5500ms]">
              Architecting unshakeable systems. Bridging the gap between impenetrable backend infrastructure and seamless, human-centric interfaces.
            </p>

            <div className="animate-hero-rise mt-10 flex flex-col gap-4 sm:flex-row [animation-delay:720ms]">
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Explore Architecture
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-transparent px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors duration-300 hover:border-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Download className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-y-0.5" />
                View Technical CV
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-hero-fade absolute inset-x-0 bottom-8 z-20 flex flex-col items-center gap-2 [animation-delay:1000ms]">
          <div className="animate-scroll-bob flex h-9 w-6 items-start justify-center rounded-full border border-primary/50 p-1.5">
            <span className="animate-scroll-dot h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
          <span className="flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
            <Mouse className="h-3.5 w-3.5" />
            Scroll
          </span>
        </div>

        {/* Tech stack bar */}
        
      </section>
      <div className=" relative mt-10 bottom-0 z-999">
          <TechStackBar />
        </div>
      </>
    )
  }
