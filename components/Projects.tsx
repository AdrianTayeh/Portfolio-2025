"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { fadeUp, hoverScale, stagger, viewport } from "@/lib/motion";

const featuredProjects = [
  {
    title: "Internox",
    description:
      "Web app for automating internal finance workflows, with time-report parsing, invoice/bookkeeping management, and role-based admin dashboards.",
    image: "/projects/internox.png",
    tech: ["React", "TypeScript", "GraphQL", "Prisma", "Playwright", "Tanstack Router", "Fluent UI", "Apollo Query", "PostgreSQL"],
    demoUrl: "https://internox.vercel.app",
    githubUrl: "https://github.com/Sparven0/internox-frontend",
  },
  {
    title: "AI Content Repurposer",
    description:
      "A Next.js application that uses Google Gemini AI to transform single pieces of content into multiple formats - tweet threads, LinkedIn posts, newsletters, summaries, and SEO hashtags. Features user authentication, content history dashboard, and document upload support, built with TypeScript, Prisma, and modern React patterns.",
    image: "/projects/AIContent.png",
    tech: ["Next.js", "ShadCN", "Motion", "Next-Auth", "Zustand", "Prisma", "PostgreSQL", "Typescript"],
    demoUrl: "https://content-repurposer-ebon.vercel.app/",
    githubUrl: "https://github.com/AdrianTayeh/AI-Content-Repurposer",
  },
  {
    title: "CV Creator",
    description:
      "CV Creator is a modern, React-based web application that allows users to easily create, customize, and download professional CVs. The app features a user-friendly interface for entering personal details, education, work experience, and skills, with live preview and PDF export functionality. Built with Vite for fast development and styled for clarity and accessibility, it helps users generate ATS-friendly resumes efficiently.",
    image: "/projects/CVCreator.png",
    tech: ["React"],
    demoUrl: "https://cvformatter.netlify.app/",
    githubUrl: "https://github.com/AdrianTayeh/CVCreator",
  },
  {
    title: "Workout Journal",
    description:
      "This project is a full-stack Workout Journal application where users can register, log in, and manage their workouts and activities. Built with React and FluentUI for a modern, accessible frontend, and Node.js/Express with a MySQL database for the backend, it allows users to create, edit, and delete workouts, link activities, and track workout details such as date, duration, and comments. The app features authentication, a clean FluentUI-based interface, and real-time updates, making it easy to monitor fitness progress over time.",
    image: "/projects/WorkoutJournal.png",
    tech: ["Fluent UI", "React", "NodeJS", "ReCharts", "MySQL", "Bcrypt"],
    demoUrl: "",
    githubUrl: "https://github.com/MH-GRIT/databashantering-tr-ningsdagboken-AdrianTayeh",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="relative overflow-hidden py-24 sm:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <motion.div
          className="mb-10 flex flex-wrap items-end justify-between gap-5"
          variants={fadeUp}
        >
          <div>
            <p className="text-xs tracking-[0.2em] text-secondary uppercase">
              Featured Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
              Selected Work
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-secondary sm:text-base">
            A focused set of projects where performance, UX clarity, and system
            reliability mattered most.
          </p>
        </motion.div>

        <motion.div
          className="grid items-stretch gap-8 lg:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {featuredProjects.map((project) => (
            <motion.article
              key={project.title}
              className="project-card group relative h-full overflow-hidden rounded-3xl p-px"
              variants={fadeUp}
              whileHover={hoverScale}
            >
              <div className="project-card-inner relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-[linear-gradient(165deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] backdrop-blur-lg">
                <div className="project-glow pointer-events-none absolute inset-0" />

                <div className="relative overflow-hidden rounded-t-[calc(1.5rem-1px)] border-b border-white/12">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={1400}
                    height={900}
                    className="aspect-14/9 h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-2xl font-semibold text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2.5">
                    {project.tech.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-primary/95 sm:text-sm"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center gap-5 pt-6 text-sm font-medium sm:text-base">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary transition-colors duration-300 hover:text-[#2dd4bf]"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-secondary transition-colors duration-300 hover:text-primary"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
