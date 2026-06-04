"use client";

import { motion } from "motion/react";

import { fadeUp, hoverScale, stagger, viewport } from "@/lib/motion";

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "UI & Design Systems",
    items: ["shadcn/ui", "Fluent UI", "Material UI", "Motion", "GSAP"],
  },
  {
    title: "State & Data",
    items: ["TanStack Query", "Apollo Client", "Zustand", "Redux", "GraphQL"],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js",
      "REST APIs",
      "WebSockets",
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "Firebase",
    ],
  },
  {
    title: "Authentication",
    items: ["Auth.js / NextAuth", "OAuth", "JWT"],
  },
  {
    title: "Quality & Deployment",
    items: ["Playwright", "GitHub Actions", "Git", "Vercel"],
  },
];

const currentlyWorkingWith = [
  "React",
  "Next.js",
  "TypeScript",
  "GraphQL",
  "PostgreSQL",
  "Prisma",
];

const cardTones = [
  "from-cyan-300/28 to-sky-400/8",
  "from-teal-300/24 to-emerald-400/8",
  "from-blue-300/24 to-indigo-400/8",
  "from-sky-300/24 to-teal-400/8",
  "from-emerald-300/24 to-cyan-400/8",
  "from-indigo-300/22 to-blue-400/8",
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative overflow-hidden py-24 sm:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
    >
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <div className="absolute left-1/2 top-0 h-px w-[84%] -translate-x-1/2 bg-linear-to-r from-transparent via-white/55 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <motion.div className="grid gap-6 lg:grid-cols-2 lg:items-end" variants={stagger}>
          <motion.div variants={fadeUp}>
            <p className="text-xs tracking-[0.2em] text-secondary uppercase">
              Skills
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-primary sm:text-4xl">
              Engineered for product speed, scale, and polish.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-secondary sm:text-base">
              I combine frontend craft, API architecture, and delivery
              discipline to ship robust web products.
            </p>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-white/20 bg-[linear-gradient(155deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-5 shadow-[0_24px_50px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-6"
            variants={fadeUp}
            whileHover={hoverScale}
          >
            <p className="text-xs tracking-[0.14em] text-secondary uppercase">
              Currently Working With
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {currentlyWorkingWith.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(160deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] px-5 py-5 shadow-[0_16px_36px_rgba(0,0,0,0.3)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 sm:px-6"
              variants={fadeUp}
              whileHover={hoverScale}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-linear-to-br ${
                  cardTones[index % cardTones.length]
                } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <h3 className="relative z-10 text-xs tracking-[0.14em] text-secondary uppercase">
                {group.title}
              </h3>

              <ul className="relative z-10 mt-4 flex flex-wrap gap-2.5 text-sm leading-relaxed text-primary sm:text-base">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/15 bg-black/15 px-3 py-1 text-xs text-primary/95 sm:text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
