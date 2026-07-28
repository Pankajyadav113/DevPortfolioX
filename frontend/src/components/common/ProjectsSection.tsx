import { projects } from "../../constants/projects";

function getStatusColor(status: string) {
  switch (status) {
    case "Completed":
      return "bg-green-500";

    case "In Progress":
      return "bg-yellow-500";

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

        <div className="text-center">

          <h2 className="text-4xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mt-4 text-slate-400">
            Real-world DevOps projects showcasing Cloud, Infrastructure,
            Automation and Deployment practices.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.id}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >

              <div className="mb-5 flex items-center justify-between">

                <h3 className="text-xl font-semibold text-white">
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

              <p className="text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {project.techStack.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="mt-8 flex gap-3">

                <button className="rounded-lg bg-cyan-500 px-4 py-2 text-black font-semibold hover:bg-cyan-400">
                  GitHub
                </button>

                <button className="rounded-lg border border-slate-600 px-4 py-2 text-white hover:border-cyan-400">
                  Live
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;