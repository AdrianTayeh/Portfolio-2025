import { motion } from "motion/react";
import { Code2, Palette, Zap, Workflow } from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "text-blue-500",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Motion",
      "GSAP",
      "Fluent UI",
      "Material UI",
      "ShadCN",
    ],
  },
  {
    title: "Tools & Build",
    icon: Workflow,
    color: "text-green-500",
    technologies: [
      "Git",
      "Vite",
      "npm/yarn",
      "ESLint",
      "Prettier",
      "VS Code",
      "Playwright",
    ],
  },
  {
    title: "State & Data",
    icon: Zap,
    color: "text-purple-500",
    technologies: [
      "Redux",
      "Zustand",
      "React Query",
      "Apollo Query",
      "GraphQL",
      "REST APIs",
      "WebSockets",
      "Firebase",
      "NodeJS",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Design & UX",
    icon: Palette,
    color: "text-pink-500",
    technologies: [
      "Responsive Design",
      "Accessibility",
      "Performance",
      "User Testing",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
  },
];

export const TechStackSection = () => {
  return (
    <section
      id="stack"
      className="min-h-screen flex items-center justify-center px-4 lg:px-8 py-20"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <span className="text-primary/60 mb-2 block">03 — Tech Stack</span>
            <h2 className="text-5xl lg:text-6xl">My Toolkit</h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="relative group"
              >
                <div className="bg-secondary/50 backdrop-blur rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-background flex items-center justify-center ${category.color}`}
                    >
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h3>{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + techIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-background rounded-lg text-sm border border-border hover:border-primary/40 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-8 bg-primary text-primary-foreground rounded-2xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="mb-2">Always Learning</h3>
                <p className="opacity-90">
                  Currently exploring: SEO technologies, Three.js, and Docker
                </p>
              </div>
              <div className="flex-shrink-0">
                <Zap className="w-12 h-12 opacity-50" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
