import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="hero-shell relative left-1/2 right-1/2 min-h-svh w-screen -translate-x-1/2 overflow-hidden">
      <div className="hero-aurora" aria-hidden="true" />

      <div className="hero-blob hero-blob-one" aria-hidden="true" />
      <div className="hero-blob hero-blob-two" aria-hidden="true" />
      <div className="hero-blob hero-blob-three" aria-hidden="true" />

      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 24 }).map((_, index) => {
          const left = `${(index * 17) % 100}%`;
          const duration = `${8 + (index % 7)}s`;
          const delay = `${(index % 6) * -1.2}s`;

          return (
            <span
              key={index}
              className="hero-particle"
              style={{
                left,
                animationDuration: duration,
                animationDelay: delay,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-20 mx-auto flex min-h-svh w-full max-w-6xl items-center px-6 py-12 sm:px-10">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm tracking-[0.18em] text-secondary uppercase">
              Hi, I&apos;m Adrian.
            </p>
            <h1 className="text-pretty text-4xl leading-tight font-semibold text-primary sm:text-6xl sm:leading-tight">
              Frontend &amp; Fullstack Developer
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary sm:text-xl">
              Building performant web experiences with modern technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary px-6 text-[#0a1424] hover:bg-primary/90"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 px-6 text-primary hover:bg-white/10"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>

          <div className="hero-glass hero-tech-panel justify-self-end lg:mt-24">
            <p className="text-xs tracking-[0.16em] text-secondary uppercase">Core Stack</p>
            <ul className="hero-tech-list mt-3 space-y-2 text-sm text-primary">
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
