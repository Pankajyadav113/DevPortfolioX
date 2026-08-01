import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

import profileImage from "../../assets/images/profile.png";
import { siteConfig } from "../../constants/siteConfig";
import FadeIn from "../ui/FadeIn";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-20 px-6 py-20 lg:flex-row">
        {/* ================= Left Side ================= */}

        <FadeIn>
          <div className="max-w-2xl text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold tracking-wide text-cyan-400"
            >
              {siteConfig.hero.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-5xl font-extrabold leading-tight text-white md:text-7xl"
            >
              {siteConfig.hero.fullName}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-5 text-2xl font-medium text-slate-400 md:text-3xl"
            >
              {siteConfig.hero.role}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8 text-lg leading-8 text-slate-400"
            >
              {siteConfig.hero.description}
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-10 flex flex-wrap justify-center gap-5 lg:justify-start"
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-60}
                className="cursor-pointer rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
              >
                View Projects
              </Link>

              <a
                href="/resume/resume.pdf"
                className="flex items-center gap-2 rounded-xl border border-slate-700 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaDownload />
                Resume
              </a>
            </motion.div>

            {/* Social Icons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex justify-center gap-6 lg:justify-start"
            >
              <a
                href="https://github.com/Pankajyadav113"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 p-4 text-2xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/pankajyadav113/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 p-4 text-2xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:pankaj738074@gmail.com"
                className="rounded-full border border-slate-700 p-4 text-2xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </div>
        </FadeIn>

        {/* ================= Right Side ================= */}

        <FadeIn delay={0.3}>
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-cyan-500/25 blur-3xl" />

            <div className="absolute -inset-2 rounded-full border border-cyan-400/30" />

            <img
              src={profileImage}
              alt="Pankaj Yadav"
              className="relative h-80 w-80 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_70px_rgba(34,211,238,0.35)] lg:h-[430px] lg:w-[430px]"
            />
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

export default HeroSection;