import { motion } from "motion/react";
import { ArrowDown, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 lg:px-8"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-primary/60">Hello, I'm</span>
          </motion.div>

          <motion.h1
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block text-6xl lg:text-8xl mb-2">
              Adrian Tayeh
            </span>
            <span className="block text-4xl lg:text-6xl text-muted-foreground">
              Frontend Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Crafting beautiful, performant web experiences with modern
            technologies. Passionate about clean code and exceptional user
            interfaces.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <button
              onClick={() => onNavigate("projects")}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View my work
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors"
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="https://github.com/AdrianTayeh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-tayeh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              href="mailto:adriantayeh@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => onNavigate("projects")}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};
