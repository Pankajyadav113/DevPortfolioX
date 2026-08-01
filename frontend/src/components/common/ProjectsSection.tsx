import FadeIn from "../ui/FadeIn";
import { projects } from "../../constants/projects";

function getStatusColor(status: string) {
  switch (status) {
    case "Completed":
      return "bg-green-500";

    case "In Progress":
      return "bg-yellow-500 text-black";

    default:
      return "bg-blue-500";
  }
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Featured Projects
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-cyan-400"></div>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Real-world DevOps projects showcasing Cloud Infrastructure,
              Automation, CI/CD, Infrastructure as Code and production-ready
              deployment practices.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn
              key={project.id}
              delay={index * 0.1}
            >
              <div className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950 p-7 transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                    {project.title}
                  </h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="flex-1 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-cyan-500 px-5 py-2.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
                    >
                      GitHub
                    </a>
                  ) : (
                    <button
                      disabled
                      className="cursor-not-allowed rounded-xl bg-slate-700 px-5 py-2.5 font-semibold text-slate-400"
                    >
                      GitHub
                    </button>
                  )}

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-slate-700 px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="cursor-not-allowed rounded-xl border border-slate-700 px-5 py-2.5 font-semibold text-slate-500"
                    >
                      In Development
                    </button>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;