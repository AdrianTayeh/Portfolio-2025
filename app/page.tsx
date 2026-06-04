import About from "@/components/About";
import CommandMenu from "@/components/CommandMenu";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <CommandMenu />
      <Hero />
      <div className="content-flow-bg">
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
