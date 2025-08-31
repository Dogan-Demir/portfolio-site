import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <div id="hero" className="min-h-screen flex items-center">
          <HeroSection />
        </div>
        <div id="about" className="min-h-screen flex items-center">
          <AboutSection />
        </div>
        <div id="projects" className="min-h-screen flex items-center">
          <ProjectsSection />
        </div>
        <div id="email" className="min-h-screen flex items-center">
          <EmailSection/>
        </div>
      </div>
    </main>


  );
}
