import FadeIn from "../ui/FadeIn";

function TechStack() {
  const technologies = [
    "Azure",
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "Linux",
    "Bash",
    "Git",
    "Prometheus",
    "Grafana",
    "SonarQube",
    "Trivy",
    "Terraform Cloud",
    "Ansible",
  ];

  return (
    <section
      id="skills"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Tech Stack
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-cyan-400"></div>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Technologies and tools I use to build scalable, secure and
              production-ready cloud infrastructure with automation and
              DevOps best practices.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <FadeIn
              key={tech}
              delay={index * 0.05}
            >
              <div className="group flex h-20 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 px-6 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-slate-800 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]">
                <span className="transition-colors duration-300 group-hover:text-cyan-400">
                  {tech}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;