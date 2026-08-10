import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInfoCircle, FaCheckCircle } from "react-icons/fa";
import FadeIn from "../ui/FadeIn";
import ProjectModal from "../ui/ProjectModal";
import { projects, projectCategories, type Project } from "../../constants/projects";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-[#f1f5f9] dark:bg-[#090e1a] relative overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              DevOps Showcase
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
            <p className="mt-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Real-world DevOps implementations demonstrating Infrastructure as Code, Docker containerization, Kubernetes monitoring, and automated CI/CD security pipelines.
            </p>
          </div>
        </FadeIn>

        {/* Category Filter Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105"
                  : "bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <FadeIn key={project.id} delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group flex flex-col h-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1222]/90 overflow-hidden backdrop-blur-md shadow-lg dark:shadow-2xl transition-all duration-300 hover:border-cyan-500 dark:hover:border-cyan-400/60"
              >
                {/* Project Banner Image */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-[#0c1222] via-transparent to-transparent opacity-90" />

                  {/* Clean Status Badge at Top Right */}
                  <span className="absolute top-3.5 right-3.5 text-[11px] font-bold px-3 py-1 rounded-full bg-slate-950/80 border border-emerald-500/40 text-emerald-300 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                    <FaCheckCircle className="text-emerald-400 text-xs" />
                    {project.status}
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    {/* Category Label */}
                    <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 font-mono-code">
                      {project.category}
                    </span>

                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="text-[11px] font-medium px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all text-xs shadow-md shadow-cyan-500/20 cursor-pointer"
                    >
                      <FaInfoCircle className="text-slate-950 text-sm" /> Deep Dive Architecture
                    </button>

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub Repository"
                        className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all text-sm"
                      >
                        <FaGithub />
                      </a>
                    ) : null}
                  </div>

                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

      </div>

      {/* Project Architecture Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}