"use client";

import { useEffect, useMemo, useState } from "react";
import { Command } from "cmdk";

type CommandAction = {
  id: string;
  label: string;
  keywords: string;
  run: () => void;
};

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;

  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function downloadResume() {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Adrian-Tayeh-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((current) => !current);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const actions = useMemo<CommandAction[]>(
    () => [
      {
        id: "projects",
        label: "Go to projects",
        keywords: "portfolio work showcase",
        run: () => scrollToSection("projects"),
      },
      {
        id: "resume",
        label: "Download resume",
        keywords: "cv curriculum vitae",
        run: downloadResume,
      },
      {
        id: "github",
        label: "Open GitHub",
        keywords: "code repository",
        run: () => window.open("https://github.com/adriantayeh", "_blank", "noopener,noreferrer"),
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        keywords: "profile network",
        run: () => window.open("https://www.linkedin.com/in/adrian-tayeh", "_blank", "noopener,noreferrer"),
      },
      {
        id: "contact",
        label: "Contact",
        keywords: "email message form",
        run: () => scrollToSection("contact"),
      },
    ],
    []
  );

  const runAction = (action: CommandAction) => {
    action.run();
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0c2238]/80 px-4 py-2 text-xs text-primary backdrop-blur-md transition hover:bg-[#15324f]"
      >
        <span>Command</span>
        <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px]">Cmd/Ctrl+K</span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/55 p-4 pt-[14vh]" onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/20 bg-[#0b2036]/96 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Command label="Site commands" className="w-full">
              <div className="border-b border-white/10 px-4">
                <Command.Input
                  autoFocus
                  placeholder="Type a command..."
                  className="h-12 w-full bg-transparent text-sm text-primary outline-none placeholder:text-secondary"
                />
              </div>

              <Command.List className="max-h-[320px] overflow-y-auto p-2">
                <Command.Empty className="px-3 py-6 text-sm text-secondary">No results found.</Command.Empty>
                <Command.Group heading="Actions" className="text-xs text-secondary [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2">
                  {actions.map((action) => (
                    <Command.Item
                      key={action.id}
                      value={`${action.label} ${action.keywords}`}
                      onSelect={() => runAction(action)}
                      className="cursor-pointer rounded-xl px-3 py-2.5 text-sm text-primary outline-none aria-selected:bg-white/10"
                    >
                      {action.label}
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      ) : null}
    </>
  );
}
