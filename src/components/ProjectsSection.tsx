import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import CVCreator from "../assets/CVCreator.png";
import GuessTheFootballer from "../assets/GuessTheFootballer.png";
import WorkoutJournal from "../assets/WorkoutJournal.png";
import AiContentRepurposer from "../assets/AIContentRepurposer.png";

const projects = [
  {
    title: "CVCreator",
    description:
      "CV Creator is a modern, React-based web application that allows users to easily create, customize, and download professional CVs. The app features a user-friendly interface for entering personal details, education, work experience, and skills, with live preview and PDF export functionality. Built with Vite for fast development and styled for clarity and accessibility, it helps users generate ATS-friendly resumes efficiently.",
    image: CVCreator,
    tags: ["React"],
    github: "https://github.com/AdrianTayeh/CVCreator",
    live: "https://cv-template-react.netlify.app/",
  },
  {
    title: "Guess The Footballer",
    description: (
      <>
        This project is a web-based football player guessing game built with
        React and Vite, featuring a modern UI using Tailwind CSS and Material
        UI. Users select a league and try to guess a randomly chosen footballer,
        receiving feedback on attributes like nationality, league, club,
        position, and age. The backend provides player, club, and flag data via
        a REST API. The frontend was developed in collaboration with{" "}
        <a
          href="https://github.com/KevinRuangrad"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kevin Ruangrad
        </a>
        , showcasing teamwork in building interactive gameplay and dynamic data
        handling.
      </>
    ),
    image: GuessTheFootballer,
    tags: ["TailwindCSS", "React", "NodeJS", "Material UI"],
    github: "https://github.com/KevinRuangrad/guessthefotballer",
  },
  {
    title: "WorkoutJournal",
    description:
      "This project is a full-stack Workout Journal application where users can register, log in, and manage their workouts and activities. Built with React and FluentUI for a modern, accessible frontend, and Node.js/Express with a MySQL database for the backend, it allows users to create, edit, and delete workouts, link activities, and track workout details such as date, duration, and comments. The app features authentication, a clean FluentUI-based interface, and real-time updates, making it easy to monitor fitness progress over time.",
    image: WorkoutJournal,
    tags: [
      "Fluent UI",
      "React",
      "NodeJS",
      "ReCharts",
      "MySQL",
      "TailwindCSS",
      "Axios",
      "Bcrypt",
      "Cors",
    ],
    github:
      "https://github.com/MH-GRIT/databashantering-tr-ningsdagboken-AdrianTayeh",
  },
  {
    title: "AI Content Repurposer",
    description:
      "A Next.js application that uses Google Gemini AI to transform single pieces of content into multiple formats - tweet threads, LinkedIn posts, newsletters, summaries, and SEO hashtags. Features user authentication, content history dashboard, and document upload support, built with TypeScript, Prisma, and modern React patterns.",
    image: AiContentRepurposer,
    tags: [
      "NextJS",
      "React",
      "ShadCN",
      "Motion",
      "Next-Auth",
      "Zustand",
      "Prisma",
      "PostgreSQL",
      "Typescript",
    ],
    github: "https://github.com/AdrianTayeh/AI-Content-Repurposer",
    live: "https://content-repurposer-ebon.vercel.app/",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
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
            <span className="text-primary/60 mb-2 block">02 - Projects</span>
            <h2 className="text-5xl lg:text-6xl">Featured Work</h2>
            <p className="text-muted-foreground mt-4 text-lg">
              A selection of projects showcasing my skills and passion for
              frontend development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index + 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl bg-secondary aspect-video mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <h3 className="mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/AdrianTayeh?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              View all projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
