import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#070B14] py-12 px-4 sm:px-6 relative text-slate-600 dark:text-slate-400">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-600 flex items-center justify-center text-white font-mono font-bold text-xs shadow-sm">
                &gt;_
              </div>
              <span className="font-black text-base text-slate-900 dark:text-white">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium max-w-sm">
              Azure DevOps Engineer & Cloud Infrastructure Enthusiast. Automated with Terraform & Docker.
            </p>
          </div>

          {/* System Status & Uptime Badge */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-slate-700 dark:text-slate-300">System Status:</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% OPERATIONAL</span>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 shadow-sm transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 shadow-sm transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 shadow-sm transition-colors"
              title="Email Pankaj"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-cyan-600 text-white hover:bg-cyan-500 transition-colors shadow-md shadow-cyan-600/20 cursor-pointer ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 text-center text-xs text-slate-600 dark:text-slate-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-2 font-medium">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with React, TypeScript, Tailwind CSS & Express</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;