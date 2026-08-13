import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Menu, X, Sun, Moon, Download, Terminal } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onToggleTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleTheme, onToggleTerminal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Floating Centered Glass Pill Container */}
        <div className={`rounded-full px-4 sm:px-6 py-2 transition-all duration-300 flex items-center justify-between shadow-xl backdrop-blur-xl ${
          isDarkMode 
            ? 'bg-[#0B0F19]/90 border border-slate-800/80 text-slate-100 shadow-cyan-950/20' 
            : 'bg-[#F8FAF7]/95 border border-slate-200/90 text-slate-900 shadow-slate-300/40'
        }`}>
          
          {/* Brand Logo - Left */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 flex items-center justify-center text-white font-mono font-black text-sm shadow-md group-hover:scale-105 transition-transform shrink-0">
              &gt;_
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white leading-tight">
                Pankaj <span className="text-[#107086] dark:text-cyan-400">Yadav</span>
              </span>
              <span className="text-[9px] font-mono font-bold tracking-wider text-[#14798E] dark:text-cyan-400/90 uppercase">
                SRE &amp; CLOUD ARCHITECTURE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Center Capsule Pill */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4 px-6 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-[#0C7B93] dark:hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Controls: Terminal CLI + Resume PDF + Theme Switcher */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Terminal Quick Button */}
            {onToggleTerminal && (
              <button
                onClick={onToggleTerminal}
                className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title="Launch Terminal CLI"
              >
                <Terminal className="w-4 h-4" />
              </button>
            )}

            {/* Resume PDF Gradient Button */}
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Pankaj_Yadav_DevOps_CV.pdf"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white shadow-md shadow-cyan-500/20 transition-all hover:scale-105 cursor-pointer"
              title="Download Pankaj's Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-cyan-500/50 shadow-sm flex items-center justify-center transition-colors cursor-pointer shrink-0"
              title={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#107086]" />}
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            {onToggleTerminal && (
              <button
                onClick={onToggleTerminal}
                className="p-1.5 rounded-full border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200"
              >
                <Terminal className="w-4 h-4 text-cyan-500" />
              </button>
            )}

            <button
              onClick={onToggleTheme}
              className="p-1.5 rounded-full border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-200"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#107086]" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-900 dark:text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`sm:hidden mt-2 p-4 rounded-2xl border-2 shadow-xl backdrop-blur-xl ${
            isDarkMode ? 'bg-slate-950/95 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
          }`}>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-black text-slate-900 dark:text-slate-200 hover:text-cyan-700 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-300 dark:border-slate-800 flex items-center justify-between">
                <a
                  href={PERSONAL_INFO.resumePdf}
                  download="Pankaj_Yadav_DevOps_CV.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500 to-emerald-500 text-white"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;