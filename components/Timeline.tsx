"use client";

import { motion } from "motion/react";

import { fadeUp, hoverScale, stagger, viewport } from "@/lib/motion";

const timelineItems = [
  {
    period: "2020-2024",
    title: "Malmo University",
    subtitle: "BSc Computer Science, specialization in Game Development",
    kind: "Education",
  },
  {
    period: "Sep 2023-Jan 2024",
    title: "Commerz Consultants",
    subtitle: "Assistant Project Lead - Internship",
    kind: "Experience",
  },
  {
    period: "2024-2026",
    title: "Grit Academy",
    subtitle: "Higher Vocational Education Diploma in Frontend Development",
    kind: "Education",
  },
  {
    period: "Jun 2025-Aug 2025",
    title: "Axis Communications",
    subtitle: "Frontend Developer - Summer Internship",
    kind: "Experience",
  },
  {
    period: "Sep 2025-Dec 2025",
    title: "Apiva AB",
    subtitle: "Fullstack Developer - Internship",
    kind: "Experience",
  },
  {
    period: "Feb 2026-May 2026",
    title: "IMVI Labs",
    subtitle: "Fullstack Developer - Internship",
    kind: "Experience",
  },
];

export default function Timeline() {
  return (
    <motion.section
      id="experience"
      className="relative overflow-hidden py-24 sm:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <p className="text-xs tracking-[0.2em] text-secondary uppercase">
          Experience Timeline
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
          How I Built My Path
        </h2>

        <div className="relative mt-12">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-white/18 md:left-[11.9rem]" />
          <motion.div
            className="absolute left-3 top-0 w-px bg-linear-to-b from-[#2dd4bf] via-[#38bdf8] to-transparent md:left-[11.9rem]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewport}
            transition={{ duration: 1.4 }}
            style={{ transformOrigin: "top", bottom: 0 }}
          />

          <motion.ol
            className="space-y-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {timelineItems.map((item, index) => (
              <motion.li
                key={`${item.period}-${item.title}`}
                className="relative grid gap-4 pl-10 md:grid-cols-[10.5rem_1fr] md:items-start md:gap-7 md:pl-0"
                variants={fadeUp}
                transition={{ delay: index * 0.04 }}
              >
                <div className="text-xs tracking-[0.12em] text-secondary uppercase md:pt-5 md:text-right">
                  {item.period}
                </div>

                <span className="absolute left-[0.35rem] top-5 size-5 rounded-full border-2 border-[#2dd4bf]/70 bg-[#081a2f] shadow-[0_0_0_6px_rgba(45,212,191,0.12)] md:left-[11.4rem]" />

                <motion.article
                  className="rounded-2xl border border-white/15 bg-[linear-gradient(160deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] px-5 py-5 shadow-[0_16px_34px_rgba(0,0,0,0.32)] backdrop-blur-md sm:px-6"
                  whileHover={hoverScale}
                >
                  <p className="text-[11px] tracking-[0.14em] text-secondary uppercase">
                    {item.kind}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary sm:text-base">
                    {item.subtitle}
                  </p>
                </motion.article>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </motion.section>
  );
}
