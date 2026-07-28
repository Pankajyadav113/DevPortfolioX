import HeroSection from "../components/common/HeroSection";
import TechStack from "../components/common/TechStack";
import AboutSection from "../components/common/AboutSection";
import ProjectsSection from "../components/common/ProjectsSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <AboutSection />
      <ProjectsSection />
    </>
  );
}

export default HomePage;