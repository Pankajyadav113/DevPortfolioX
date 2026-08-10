import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTerminal,
  FaCloud,
  FaDocker,
  FaEye,
} from "react-icons/fa";
import { SiTerraform, SiKubernetes } from "react-icons/si";

import profileImage from "../../assets/images/profile.png";
import { siteConfig } from "../../constants/siteConfig";
import FadeIn from "../ui/FadeIn";
import InteractiveTerminal from "../ui/InteractiveTerminal";

function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % siteConfig.hero.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-[#070b14] cyber-grid flex flex-col justify-center"
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-20 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-1/4 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="mx-auto max-w-7xl px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ================= Left Column (Main Info) ================= */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <FadeIn>
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wider">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                {siteConfig.hero.greeting}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              {/* Full Name */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  {siteConfig.hero.fullName}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              {/* Dynamic Animated Role */}
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl sm:text-3xl font-semibold text-cyan-400 font-mono-code"
                >
                  ⚡ {siteConfig.hero.roles[roleIndex]}
                </motion.span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {siteConfig.hero.description}
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-bold text-slate-950 shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
                >
                  🚀 Explore Projects
                </Link>

                <a
                  href={siteConfig.social.resume}
                  target="_blank"
                  rel="noreferrer"
                  title="View Resume in Browser"
                  className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800 hover:text-white"
                >
                  <FaEye className="text-cyan-400" /> View Resume
                </a>

                <button
                  onClick={() => setShowTerminal(!showTerminal)}
                  className="flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-5 py-3.5 font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 cursor-pointer"
                >
                  <FaTerminal /> {showTerminal ? "Hide CLI Shell" : "Open CLI Shell"}
                </button>
              </div>
            </FadeIn>

            {/* Social Icons & Email */}
            <FadeIn delay={0.5}>
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Profile"
                  className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 text-xl text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 hover:-translate-y-1"
                >
                  <FaGithub />
                </a>

                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn Profile"
                  className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 text-xl text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 hover:-translate-y-1"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={`mailto:${siteConfig.social.email}`}
                  title="Send Email"
                  className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 text-xl text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 hover:-translate-y-1"
                >
                  <FaEnvelope />
                </a>

                <span className="text-xs text-slate-500 hidden sm:inline-block border-l border-slate-800 pl-4 font-mono-code">
                  {siteConfig.social.email}
                </span>
              </div>
            </FadeIn>
          </div>

          {/* ================= Right Column (Profile Avatar & Floating Icons) ================= */}
          <div className="lg:col-span-5 flex justify-center relative">
            <FadeIn delay={0.3}>
              <div className="relative group">
                
                {/* Breathing Glowing Rings */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur-2xl group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute -inset-1 rounded-full border border-cyan-400/40 animate-spin-slow pointer-events-none" />

                {/* Profile Image */}
                <img
                  src={profileImage}
                  alt={siteConfig.hero.fullName}
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full object-cover border-4 border-cyan-400/80 shadow-[0_0_50px_rgba(6,182,212,0.3)] transition-transform duration-500 group-hover:scale-102"
                />

                {/* Floating Tech Badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -left-4 rounded-2xl border border-slate-700 bg-slate-900/90 p-3 shadow-xl flex items-center gap-2 text-xs font-bold text-cyan-300 backdrop-blur-md"
                >
                  <SiTerraform className="text-purple-400 text-lg" /> Terraform
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 -left-6 rounded-2xl border border-slate-700 bg-slate-900/90 p-3 shadow-xl flex items-center gap-2 text-xs font-bold text-cyan-300 backdrop-blur-md"
                >
                  <FaDocker className="text-blue-400 text-lg" /> Docker
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/3 -right-6 rounded-2xl border border-slate-700 bg-slate-900/90 p-3 shadow-xl flex items-center gap-2 text-xs font-bold text-cyan-300 backdrop-blur-md"
                >
                  <SiKubernetes className="text-cyan-400 text-lg" /> Kubernetes
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 right-8 rounded-2xl border border-slate-700 bg-slate-900/90 p-3 shadow-xl flex items-center gap-2 text-xs font-bold text-emerald-300 backdrop-blur-md"
                >
                  <FaCloud className="text-cyan-400 text-lg" /> Azure & AWS
                </motion.div>

              </div>
            </FadeIn>
          </div>
        </div>

        {/* Interactive Terminal Toggle Box */}
        {showTerminal && (
          <div className="mt-12 flex justify-center">
            <InteractiveTerminal />
          </div>
        )}

        {/* Stats Counter Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-800/80">
          {siteConfig.stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center backdrop-blur-sm hover:border-cyan-500/40 transition-colors">
                <p className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono-code">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-400">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HeroSection;