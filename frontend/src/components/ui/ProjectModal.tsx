import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLayerGroup, FaListUl } from "react-icons/fa";
import type { Project } from "../../constants/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040711]/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 bg-[#0b1222] p-6 sm:p-8 shadow-2xl z-10 custom-scrollbar text-slate-100"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 rounded-full p-2.5 bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-white hover:border-[#38bdf8] hover:bg-slate-700 transition-all cursor-pointer"
          >
            <FaTimes />
          </button>

          {/* Modal Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pr-12">
            <div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 text-[#38bdf8]">
                {project.category}
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h2>
            </div>
            <span
              className={`inline-flex items-center gap-1.5 self-start sm:self-auto text-xs font-bold px-3 py-1.5 rounded-full ${
                project.status === "Completed"
                  ? "badge-neon-green"
                  : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
              }`}
            >
              <FaCheckCircle className="text-xs" />
              {project.status}
            </span>
          </div>

          {/* Banner Graphic */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 sm:h-72 object-cover object-center"
            />
          </div>

          {/* Detailed Overview */}
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#38bdf8] flex items-center gap-2">
                <FaLayerGroup /> Architecture Overview
              </h3>
              <p className="mt-2 text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-bold text-[#38bdf8] flex items-center gap-2">
                <FaListUl /> Key Capabilities & Highlights
              </h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300"
                  >
                    <span className="text-[#38bdf8] mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Implementation Steps */}
            <div>
              <h3 className="text-lg font-bold text-[#38bdf8] mb-3">
                🛠 Engineering Execution Workflow
              </h3>
              <div className="space-y-2.5">
                {project.architectureSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span className="text-slate-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-4">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl btn-primary-gradient font-bold text-sm transition-all shadow-lg"
                >
                  <FaGithub /> View Source on GitHub
                </a>
              ) : null}

              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 hover:border-[#38bdf8] bg-slate-800 text-white font-bold text-sm transition-all"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              ) : null}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-400 hover:text-white transition-all text-sm cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
