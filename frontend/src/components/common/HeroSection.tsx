import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Terminal, Cloud, ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

interface HeroSectionProps {
  isDarkMode?: boolean;
  onOpenTerminal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTerminal }) => {
  const titles = [
    "Azure DevOps Engineer",
    "Terraform & IaC Specialist",
    "Cloud Automation Specialist",
    "Docker & Linux Administrator"
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 flex items-center justify-center overflow-hidden">
      {/* Background Matrix & Grid Glow Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 dark:bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Hero Copy */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full border border-cyan-400/50 dark:border-cyan-800 bg-white/90 dark:bg-slate-900/90 text-[#14798E] dark:text-cyan-300 font-mono text-xs sm:text-sm font-bold shadow-sm backdrop-blur-md">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-400/30 flex items-center justify-center shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            <span>{PERSONAL_INFO.status}</span>
          </div>

          {/* Headline & Typing Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-blue-600 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-400">{PERSONAL_INFO.name}</span>
            </h1>
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <span className="font-mono text-xl sm:text-2xl font-bold text-cyan-600 dark:text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse">
                {displayedText}
              </span>
            </div>
          </div>

          {/* Subtitle / Bio */}
          <p className="text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-semibold">
            {PERSONAL_INFO.profileSummary}
          </p>

          {/* Key Tech Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
            {['Microsoft Azure', 'Terraform IaC', 'Packer VM', 'Docker', 'Linux', 'CI/CD Pipelines'].map((badge) => (
              <span 
                key={badge}
                className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-200 shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-black bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg shadow-cyan-600/30 transition-all hover:scale-105 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.resumePdf}
              download="Pankaj_Yadav_DevOps_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-black border-2 border-slate-700 text-slate-200 bg-slate-900 hover:bg-slate-800 shadow-md transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Quick Link Icon Cards (GitHub, LinkedIn, Email) */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="w-13 h-13 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all group"
              title="GitHub Profile"
            >
              <Github className="w-6 h-6 text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-13 h-13 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all group"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-13 h-13 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all group"
              title="Email Pankaj"
            >
              <Mail className="w-6 h-6 text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
            </a>
          </div>

        </div>

        {/* Right Column: DevOps Node Architecture Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md">
            
            {/* Main DevOps Terminal Visual Box */}
            <div className="rounded-2xl border-2 border-slate-800 bg-[#0B0F19] p-6 shadow-2xl space-y-4 text-slate-100 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="font-mono text-xs text-slate-400 font-bold flex items-center gap-1.5">
                  <Cloud className="w-3.5 h-3.5 text-cyan-400" />
                  azure-topology.tf
                </div>
              </div>

              {/* Simulated IaC Code snippet */}
              <div className="font-mono text-xs space-y-2 leading-relaxed bg-slate-950 p-4 rounded-xl text-slate-300 shadow-inner">
                <div><span className="text-purple-400 font-bold">resource</span> <span className="text-emerald-400">"azurerm_virtual_network"</span> <span className="text-amber-300">"vnet"</span> &#123;</div>
                <div className="pl-4 text-slate-400">name = <span className="text-emerald-300">"vnet-devops-prod"</span></div>
                <div className="pl-4 text-slate-400">address_space = [<span className="text-emerald-300">"10.0.0.0/16"</span>]</div>
                <div className="pl-4 text-slate-400">location = <span className="text-emerald-300">"East US"</span></div>
                <div>&#125;</div>

                <div className="pt-2"><span className="text-purple-400 font-bold">resource</span> <span className="text-emerald-400">"azurerm_application_gateway"</span> <span className="text-amber-300">"app_gw"</span> &#123;</div>
                <div className="pl-4 text-slate-400">sku &#123; name = <span className="text-emerald-300">"Standard_v2"</span> &#125;</div>
                <div>&#125;</div>
              </div>

              {/* Embedded Terminal Action Trigger inside Window */}
              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] shadow-md"
                >
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>Launch CLI Terminal &gt;_</span>
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;