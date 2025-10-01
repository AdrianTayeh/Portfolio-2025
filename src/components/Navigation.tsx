import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [isDark, setIsDark] = useState(false);

  const sections = [
    { id: "hero", label: "01", name: "Home" },
    { id: "projects", label: "02", name: "Projects" },
    { id: "stack", label: "03", name: "Stack" },
    { id: "about", label: "04", name: "About" },
    { id: "contact", label: "05", name: "Contact" },
  ];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <>
      {/*Desktop navigation*/}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className="group flex items-center gap-3 relative"
            >
              <motion.div className="ml-auto text-right opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm text-muted-foreground">
                  {section.name}
                </span>
              </motion.div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs text-muted-foreground">
                  {section.label}
                </span>
                <div
                  className={`w-0.5 h-8 transition-all ${
                    activeSection === section.id
                      ? "bg-primary"
                      : "bg-border group-hover:bg-muted-foreground"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </nav>

      {/*Mobile Navigation*/}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/80 backdrop-blur-lg border-t border-border">
        <div className="flex justify-around items-center px-4 py-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeSection === section.id
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <span className="text-xs">{section.label}</span>
              <span className="text-[10px]">{section.name}</span>
            </button>
          ))}
        </div>
      </nav>

      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-8 right-8 z-50 w-10 h-10 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </>
  );
};
