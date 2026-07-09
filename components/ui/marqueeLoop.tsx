import { Marquee } from './marquee';

const phrases = [
  "Production React",
  "Backend Engineering",
  "System Design & Optimisation",
  "Enterprise Scale",
  "TypeScript · Next.js",
  "DevSecOps · Application Security",
  "Cloudflare · Edge Computing",
  "Spring Boot · Node.js",
  "PostgreSQL · MongoDB",
  "RESTful APIs · Microservices",
  "Containerisation · Docker · Kubernetes",
  "CI/CD Pipelines · GitHub Actions",
];


export default function MarqueeLoop() {
  return (
    <>
    <div className="relative w-full opacity-80 p-1.5 py-6  overflow-hidden border-y border-border/40 bg-background/40 backdrop-blur-sm">
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
          <div className='flex gap-2.5 px-5 md:px-15'>
            <p className=" flex items-center gap-4 text-[14px] font-body tracking-[0.2em] text-primary">
                  
                  <span className="h-px w-7 bg-primary" />
                  Disciplines
                </p>

          <Marquee className="[--duration:60s] p-0 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] overflow-hidden" >
            {phrases.map((phrase, index) => (
            <div
                key={index}
                className="mx-6 lg:mx-12 text-m lg:text-m font-medium text-muted-foreground whitespace-nowrap"
            >
                {phrase}
            </div>
            
            ))}
        </Marquee >
        </div>
        </div>
    </>
  );
}
