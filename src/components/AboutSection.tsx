import { motion } from "motion/react";
import { Briefcase, GraduationCap, Award, Heart } from "lucide-react";

const experiences = [
  {
    company: "Axis Communications",
    role: "Junior Frontend Developer - Summer Intern",
    period: "June 2025 - August 2025",
    description:
      "Implemented Microsoft Fluent UI components and developed new features using React and TypeScript for an internal site, with comprehensive testing through Microsoft Playwright. My responsibilities included developing features with GraphQL queries and mutations, diagnosing and resolving complex bugs, and maintaining automated tests to ensure code quality. I actively participated in code reviews and collaborated with the team to uphold coding standards and promote best practices.",
  },
  {
    company: "Commerz Consultants",
    role: "Assistant Project Lead - Internship",
    period: "September 2023 - January 2025",
    description:
      "I coordinated project tasks and ensured all milestones were achieved within established deadlines while assisting in the development of technical documentation and reports for client presentations. Through effective collaboration with cross-functional teams, I helped improve overall efficiency and communication across departments, contributing to successful project outcomes.",
  },
];

const education = [
  {
    institution: "Malmö University",
    degree: "B.S. Computer Science - Specialisation in Game Development",
    period: "2020 - 2024",
    description: "Focused on game development in Unity using C#",
  },
  {
    institution: "Grit Academy",
    degree: "Higher Vocational Education Diploma in Frontend Development",
    period: "2024 - 2026",
    description:
      "Specialized in frontend development using React but also learnt NextJS, Node JS, and other useful tools",
  },
];

const achievements = [
  "Led the migration of a 100,000+ line codebase from React Router v5 to TanStack Router v1, ensuring seamless navigation and improved maintainability",
  "Implemented accessibility improvements achieving WCAG 2.1 AA compliance",
  "Created new features for an internal admin web app in a large scale company",
];

export const AboutSection = () => {
  return (
    <section
      id="about"
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
            <span className="text-primary/60 mb-2 block">04 — About</span>
            <h2 className="text-5xl lg:text-6xl">Get to Know Me</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-primary" />
                <h3>My Story</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm an aspiring frontend developer currently studying at Grit
                  Academy, with a strong foundation in modern web technologies.
                  I enjoy turning ideas into clean, responsive, and
                  user-friendly interfaces.
                </p>
                <p>
                  When I'm not coding, I like experimenting with personal
                  projects, exploring new frameworks, and continuously building
                  my skills to grow as a developer. I'm always eager to learn
                  and solve problems creatively.
                </p>
                <p>
                  I thrive when collaborating with others and believe that
                  sharing knowledge is key to improving as a developer. My goal
                  is to create digital experiences that are not only functional
                  but also meaningful for the people who use them.
                </p>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h3>Achievements</h3>
              </div>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex gap-3 items-start"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3>Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-border hover:border-primary/40 transition-colors pb-6 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px]" />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4>{exp.role}</h4>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3>Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-border hover:border-primary/40 transition-colors"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px]" />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4>{edu.degree}</h4>
                    <span className="text-sm text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
