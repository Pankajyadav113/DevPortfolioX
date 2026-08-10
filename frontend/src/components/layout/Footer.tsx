import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaTerminal } from "react-icons/fa";
import { Link } from "react-scroll";
import { siteConfig } from "../../constants/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-[#070b14] relative overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-2 shadow-lg shadow-cyan-500/20">
                <FaTerminal className="text-slate-950 text-base" />
              </div>
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {siteConfig.name}
              </span>
            </div>

            <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 font-mono-code">
              Pankaj Yadav — Cloud & DevOps Engineer
            </p>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Architecting production-ready cloud infrastructures, container orchestration workflows, and continuous delivery pipelines with AWS, Azure, Terraform, Docker, and Kubernetes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300">Quick Navigation</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              {siteConfig.navLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href.replace("#", "")}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Top */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300 mb-3">Connect Online</h4>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1222] text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm"
                >
                  <FaGithub className="text-lg" />
                </a>

                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1222] text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm"
                >
                  <FaLinkedin className="text-lg" />
                </a>

                <a
                  href={`mailto:${siteConfig.social.email}`}
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1222] text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm"
                >
                  <FaEnvelope className="text-lg" />
                </a>
              </div>
            </div>

            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1222] text-xs font-bold text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer w-fit shadow-sm"
            >
              <FaArrowUp className="text-cyan-600 dark:text-cyan-400" /> Back to Top
            </Link>
          </div>

        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-900 py-6">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Pankaj Yadav. All rights reserved.</p>
          <p className="font-mono-code">
            Built with React, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}