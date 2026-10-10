import MultilingualIntro from "@/components/MultilingualIntro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProjectGallery from "@/components/ProjectGallery";
import SkillsArsenal from "@/components/SkillsArsenal";
import WorkflowTimeline from "@/components/WorkflowTimeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <MultilingualIntro />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ProjectGallery />
        <SkillsArsenal />
        <WorkflowTimeline />
        <Contact />
      </main>
    </>
  );
}
