import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TiltedShowcase from "@/components/TiltedShowcase";
import About from "@/components/About";
import Services from "@/components/Services";
import ProjectGallery from "@/components/ProjectGallery";
import SkillsArsenal from "@/components/SkillsArsenal";
import WorkflowTimeline from "@/components/WorkflowTimeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TiltedShowcase />
        <About />
        <Services />
        <ProjectGallery />
        <SkillsArsenal />
        <WorkflowTimeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
