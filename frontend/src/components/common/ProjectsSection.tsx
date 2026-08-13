import React, { useState } from 'react';
import { PROJECTS, type Project } from '../../data/portfolioData';
import { ExternalLink, Layers, CheckCircle2, X, Sparkles } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'iac', label: 'IaC & Automation' },
    { id: 'cloud', label: 'Cloud Infrastructure' },
    { id: 'container', label: 'Containers & Nginx' },
    { id: 'testing', label: 'Load & Capacity' }
  ];

  const filteredProjects = PROJECTS.filter((proj: Project) => {
    if (selectedCategory === 'all') return true;
    return proj.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            Hands-on DevOps Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Featured <span className="text-cyan-500">DevOps Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Real-world cloud automation, Terraform IaC, HashiCorp Packer VM imaging, Docker deployments, and benchmarking setups.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'bg-white dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-md dark:shadow-none transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-extrabold uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                    {project.category.toUpperCase()}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {project.shortDescription}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-cyan-600 dark:hover:bg-cyan-600 text-slate-800 hover:text-white dark:text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Inspect Details</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Detailed Modal View */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="w-full max-w-3xl max-h-[85vh] bg-white dark:bg-[#090D16] border border-slate-300 dark:border-cyan-500/40 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-900 dark:text-slate-200">
              
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-extrabold uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                    {activeModalProject.category.toUpperCase()}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{activeModalProject.title}</h3>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase text-cyan-600 dark:text-cyan-400 tracking-wider">Project Overview</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800 font-medium">
                  {activeModalProject.fullOverview}
                </p>
              </div>

              {/* Key Implementation Points */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-cyan-600 dark:text-cyan-400 tracking-wider">Key Implementation Steps</h4>
                <div className="space-y-2">
                  {activeModalProject.keyImplementation.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning & Takeaway */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase text-cyan-600 dark:text-cyan-400 tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Key Engineering Learning
                </h4>
                <div className="p-3.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-900/60 text-xs sm:text-sm text-cyan-900 dark:text-cyan-200 italic font-medium">
                  "{activeModalProject.keyLearning}"
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.technologies.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold transition-all shadow-md"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Code</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;