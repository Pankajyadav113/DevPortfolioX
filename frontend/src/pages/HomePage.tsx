import GitHubSection from "../components/common/GitHubSection";
import HeroSection from "../components/common/HeroSection";
import AboutSection from "../components/common/AboutSection";
import TechStack from "../components/common/TechStack";
import ProjectsSection from "../components/common/ProjectsSection";
import DevOpsWorkflow from "../components/common/DevOpsWorkflow";
import ExperienceSection from "../components/common/ExperienceSection";
import CertificationSection from "../components/common/CertificationSection";
import ContactSection from "../components/common/ContactSection";
import Footer from "../components/layout/Footer";

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechStack />
      <ProjectsSection />
      <DevOpsWorkflow />
      <ExperienceSection />
      <CertificationSection />
      <GitHubSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default HomePage;