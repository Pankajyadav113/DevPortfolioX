import profileImage from "../../assets/images/profile.png";
import { siteConfig } from "../../constants/siteConfig";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

function HeroSection() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 py-20 lg:flex-row">

        {/* Left Side */}
        <div className="max-w-2xl text-center lg:text-left">

          <p className="text-lg font-medium text-cyan-400">
            {siteConfig.hero.greeting}
          </p>

          <h1 className="mt-4 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            {siteConfig.hero.fullName}
          </h1>

          <h2 className="mt-5 text-3xl font-medium text-slate-400">
            {siteConfig.hero.role}
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            {siteConfig.hero.description}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">

            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaDownload />

              Resume
            </a>

          </div>

          {/* Social Icons */}

          <div className="mt-10 flex justify-center gap-6 text-3xl text-slate-400 lg:justify-start">

            <a
              href="https://github.com/Pankajyadav113"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="transition hover:text-cyan-400"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-3xl"></div>

          <img
            src={profileImage}
            alt="Pankaj Yadav"
            className="relative h-80 w-80 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_60px_rgba(34,211,238,0.35)] lg:h-[420px] lg:w-[420px]"
          />

        </div>

      </div>
    </section>
  );
}

export default HeroSection;