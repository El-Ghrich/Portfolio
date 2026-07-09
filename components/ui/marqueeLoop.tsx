import { Marquee } from './marquee';

const phrases = [
  "Full-Stack Developer",
  "React & Next.js Expert",
  "UI/UX Enthusiast",
  "TypeScript Advocate",
  "Open Source Contributor",
  "Problem Solver",
  "Clean Code Practitioner",
  "Lifelong Learner",
];

export default function MarqueeBrandsDemo() {
  return (
    <>
      <Marquee className="[--duration:30s] p-0" pauseOnHover>
        {phrases.map((phrase, index) => (
          <div
            key={index}
            className="mx-6 lg:mx-12 text-lg lg:text-xl font-medium text-muted-foreground whitespace-nowrap"
          >
            {phrase}
          </div>
        ))}
      </Marquee>
    </>
  );
}
