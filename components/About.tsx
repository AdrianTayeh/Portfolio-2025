"use client";

import { motion } from "motion/react";

import { fadeUp, hoverScale, stagger, viewport } from "@/lib/motion";

const aboutHighlights = [
  { label: "Years Coding", value: "6+" },
  { label: "Education", value: "BSc Computer Science • Frontend Diploma" },
  { label: "Focus", value: "User-centric fullstack products" },
];

const interestBlobs = [
  {
    title: "Frontend",
    detail: "React • Next.js • TypeScript",
  },
  {
    title: "Backend",
    detail: "Node.js • GraphQL • REST • SQL",
  },
  {
    title: "Performance",
    detail: "Optimization",
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative overflow-hidden py-24 sm:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <motion.div variants={fadeUp}>
          <p className="text-xs tracking-[0.18em] text-secondary uppercase">
            About Me
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
            Building thoughtful products with clean code.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
            I am a frontend and fullstack developer who enjoys turning complex
            ideas into clear, fast, and reliable user experiences. I care about
            product thinking, maintainable systems, and details that make
            interfaces feel smooth.
          </p>

          <motion.dl
            className="mt-8 grid gap-4 sm:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {aboutHighlights.map((item) => (
              <motion.div
                key={item.label}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-4 backdrop-blur-sm"
                variants={fadeUp}
                whileHover={hoverScale}
              >
                <dt className="text-xs tracking-[0.12em] text-secondary uppercase">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm font-medium text-primary">
                  {item.value}
                </dd>
              </motion.div>
            ))}
          </motion.dl>

          <motion.div
            className="mt-8 grid gap-4 sm:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {interestBlobs.map((blob) => (
              <motion.article
                key={blob.title}
                className="rounded-2xl border border-white/15 bg-[linear-gradient(160deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] px-4 py-4 shadow-[0_14px_34px_rgba(0,0,0,0.28)] backdrop-blur-md"
                variants={fadeUp}
                whileHover={hoverScale}
              >
                <h3 className="text-xs tracking-[0.14em] text-secondary uppercase">
                  {blob.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary">
                  {blob.detail}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
