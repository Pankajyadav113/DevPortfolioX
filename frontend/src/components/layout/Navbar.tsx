import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaTerminal, FaPaperPlane } from "react-icons/fa";
import { siteConfig } from "../../constants/siteConfig";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/80 bg-[#070b14]/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo & Brand */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="group cursor-pointer flex items-center gap-2 text-xl font-extrabold tracking-tight"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-2 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <FaTerminal className="text-slate-950 text-lg" />
          </div>
          <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href.replace("#", "")}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="!text-cyan-400 font-bold after:w-full"
              className="
                relative
                cursor-pointer
                text-sm
                font-medium
                text-slate-300
                transition-all
                duration-300
                hover:text-cyan-300
                after:absolute
                after:-bottom-2
                after:left-0
                after:h-[2px]
                after:w-0
                after:rounded-full
                after:bg-cyan-400
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button & Status */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-semibold text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {siteConfig.hero.statusPill}
          </div>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
          >
            <FaPaperPlane className="text-xs" />
            Let's Talk
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="rounded-xl border border-slate-800 bg-slate-900/80 p-2.5 text-2xl text-cyan-400 transition-colors hover:bg-slate-800 lg:hidden"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-t border-slate-800/80 bg-[#070b14]/95 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col py-4 px-6 gap-2">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href.replace("#", "")}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="bg-cyan-500/10 text-cyan-400 font-bold border-l-2 border-cyan-400 pl-3"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-xl px-4 py-3 text-base text-slate-300 transition-all hover:bg-slate-900 hover:text-cyan-400"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 text-center text-sm font-bold text-slate-950"
              >
                <FaPaperPlane /> Contact Me
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;