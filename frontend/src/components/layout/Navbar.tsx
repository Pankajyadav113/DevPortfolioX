import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { siteConfig } from "../../constants/siteConfig";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link
          to="home"
          smooth={true}
          duration={300}
          offset={-60}
          className="cursor-pointer text-2xl font-bold tracking-wide text-cyan-400 transition duration-300 hover:text-cyan-300"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href.replace("#", "")}
              smooth={true}
              duration={300}
              offset={-60}
              spy={true}
              activeClass="!text-cyan-400 font-semibold"
              className="relative cursor-pointer text-slate-300 transition-all duration-300 hover:text-cyan-400 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-cyan-400 transition hover:scale-110 md:hidden"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col py-4">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href.replace("#", "")}
                smooth={true}
                duration={300}
                offset={-60}
                spy={true}
                activeClass="bg-cyan-500/10 text-cyan-400"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer px-6 py-3 text-slate-300 transition-all duration-300 hover:bg-slate-900 hover:text-cyan-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;