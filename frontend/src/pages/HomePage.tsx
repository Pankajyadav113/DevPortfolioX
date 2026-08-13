import React from 'react';
import { useOutletContext } from 'react-router-dom';
import HeroSection from '../components/common/HeroSection';
import AboutSection from '../components/common/AboutSection';
import TechStack from '../components/common/TechStack';
import ProjectsSection from '../components/common/ProjectsSection';
import ExperienceSection from '../components/common/ExperienceSection';
import CertificationSection from '../components/common/CertificationSection';
import ContactSection from '../components/common/ContactSection';
import Footer from '../components/layout/Footer';

interface OutletContextType {
  isDarkMode: boolean;
  onOpenTerminal: () => void;
}

export const HomePage: React.FC = () => {
  const context = useOutletContext<OutletContextType>();
  const onOpenTerminal = context?.onOpenTerminal;
  const isDarkMode = context?.isDarkMode ?? true;

  return (
    <>
      <HeroSection isDarkMode={isDarkMode} onOpenTerminal={onOpenTerminal} />
      <AboutSection />
      <TechStack />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;