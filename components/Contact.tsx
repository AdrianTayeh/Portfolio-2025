"use client";

import { motion } from "motion/react";
import { fadeUp, hoverScale, stagger, viewport } from "@/lib/motion";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/adriantayeh",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adrian-tayeh",
  },
  {
    label: "Email",
    href: "mailto:adriantayeh@gmail.com",
  },
];

const openTo = ["Full-time roles", "Freelance projects", "Collaborations"];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <motion.div className="mb-9" variants={fadeUp}>
          <p className="text-xs tracking-[0.2em] text-secondary uppercase">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
            Let&apos;s Build Something Great
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start"
          variants={stagger}
        >
          <motion.div
            className="rounded-3xl border border-white/20 bg-[linear-gradient(160deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-6 shadow-[0_24px_56px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-7"
            variants={fadeUp}
            whileHover={hoverScale}
          >
            <form
              className="space-y-5"
              action="https://formsubmit.co/adriantayeh@gmail.com"
              method="post"
            >
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs tracking-[0.14em] text-secondary uppercase"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/80 focus:border-[#2dd4bf]/70"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs tracking-[0.14em] text-secondary uppercase"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/80 focus:border-[#2dd4bf]/70"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs tracking-[0.14em] text-secondary uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-secondary/80 focus:border-[#2dd4bf]/70"
                  placeholder="Tell me about your project or role"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-[#081426] transition hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div className="space-y-5" variants={stagger}>
            <motion.article
              className="rounded-2xl border border-white/15 bg-[linear-gradient(160deg,rgba(255,255,255,0.13),rgba(255,255,255,0.04))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-7"
              variants={fadeUp}
              whileHover={hoverScale}
            >
              <p className="text-xs tracking-[0.14em] text-secondary uppercase">
                Connect
              </p>
              <ul className="mt-4 space-y-3">
                {contactLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="inline-flex items-center text-sm text-primary transition-colors hover:text-[#2dd4bf] sm:text-base"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              className="rounded-2xl border border-white/15 bg-[linear-gradient(160deg,rgba(255,255,255,0.13),rgba(255,255,255,0.04))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-7"
              variants={fadeUp}
              whileHover={hoverScale}
            >
              <p className="text-xs tracking-[0.14em] text-secondary uppercase">
                Currently Open To
              </p>
              <ul className="mt-4 space-y-3 text-sm text-primary sm:text-base">
                {openTo.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="text-[#2dd4bf]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
