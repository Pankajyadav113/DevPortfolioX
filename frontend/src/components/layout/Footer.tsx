import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

        {/* Left */}

        <div className="text-center md:text-left">

          <h3 className="text-xl font-bold text-cyan-400">
            DevPortfolioX
          </h3>

          <p className="mt-2 max-w-md text-sm text-slate-400">
            Building scalable cloud infrastructure using AWS, Azure,
            Terraform, Docker, Kubernetes and modern DevOps practices.
          </p>

        </div>

        {/* Social */}

        <div className="flex items-center gap-5 text-2xl">

          <a
            href="https://github.com/Pankajyadav113"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="border-t border-slate-800 py-5">

        <p className="flex items-center justify-center gap-2 text-center text-sm text-slate-500">

          © {currentYear} Pankaj Yadav • Built with

          <FaHeart className="text-red-500" />

          React, TypeScript & Tailwind CSS

        </p>

      </div>

    </footer>
  );
}

export default Footer;