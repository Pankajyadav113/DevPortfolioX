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
      className="bg-slate-900 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-white">
          Tech Stack
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Technologies and tools I use to build scalable cloud infrastructure.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-xl border border-cyan-500/20 bg-slate-800 px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;