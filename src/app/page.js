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
      <div className="container mt-24 mx-auto px-4 md:px-12 py-4">
        <div id="hero" className="min-h-screen flex items-center justify-center w-full">
          <HeroSection />
        </div>
        <div id="about" className="min-h-screen flex items-center justify-center w-full">
          <AboutSection />
        </div>
                <div id="projects" className="min-h-screen flex items-center justify-center w-full">
          <ProjectsSection />
        </div>
        <div id="contact" className="min-h-screen flex items-center justify-center w-full">
          <EmailSection />
        </div>
      </div>
    </main>


  );
}
