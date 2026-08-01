import {
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              DevPortfolioX
            </h2>

            <p className="mt-2 text-lg font-medium text-white">
              DevOps Engineer
            </p>

            <p className="mt-4 max-w-lg leading-7 text-slate-400">
              Passionate about building scalable cloud infrastructure,
              automating deployments and creating reliable CI/CD pipelines
              using Azure, Terraform, Docker, Linux and modern DevOps
              practices.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="mb-5 text-lg font-semibold text-white">
              Connect with Me
            </h3>

            <div className="flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/Pankajyadav113"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 p-3 text-xl text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/pankajyadav113/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 p-3 text-xl text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

              {/* Email */}
              <a
                href="mailto:pankaj738074@gmail.com"
                className="rounded-xl border border-slate-700 p-3 text-xl text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaEnvelope />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400"
            >
              <FaArrowUp />
              Back to Top
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row">
          <p>© {currentYear} Pankaj Yadav. All Rights Reserved.</p>

          <p className="flex items-center gap-2">
            Built with
            <FaHeart className="text-red-500" />
            React • TypeScript • Tailwind CSS • Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;