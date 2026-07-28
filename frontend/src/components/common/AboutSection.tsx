function AboutSection() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            About Me
          </h2>

          <p className="mt-4 text-slate-400">
            Passionate about building scalable cloud infrastructure,
            automating deployments and following production-ready
            DevOps practices.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Education */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-cyan-400">

            <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
              🎓 Education
            </h3>

            <p className="text-lg font-semibold text-white">
              Bachelor of Technology
            </p>

            <p className="text-slate-300">
              Information Technology
            </p>

            <p className="mt-3 text-slate-400">
              Dr. A.P.J. Abdul Kalam Technical University,
              Lucknow
            </p>

            <p className="mt-2 text-slate-500">
              Expected Graduation : 2027
            </p>

          </div>

          {/* Experience */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-cyan-400">

            <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
              💼 Experience
            </h3>

            <p className="text-lg font-semibold text-white">
              DevOps Engineer Intern
            </p>

            <p className="text-slate-300">
              DevOps Insiders
            </p>

            <p className="mt-3 text-slate-400">
              Duration
            </p>

            <p className="text-white">
              6+ Months
            </p>

          </div>

          {/* Current Focus */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-cyan-400">

            <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
              🚀 Current Focus
            </h3>

            <ul className="space-y-3 text-slate-300">

              <li>☁ AWS Cloud</li>

              <li>☁ Microsoft Azure</li>

              <li>⚙ Terraform</li>

              <li>🐳 Docker</li>

              <li>☸ Kubernetes</li>

              <li>🚀 CI/CD Pipelines</li>

              <li>📊 Monitoring</li>

              <li>🔒 DevSecOps</li>

            </ul>

          </div>

          {/* Career Goal */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-cyan-400">

            <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
              🎯 Career Goal
            </h3>

            <p className="leading-8 text-slate-300">

              My goal is to become a highly skilled Cloud and DevOps
              Engineer by designing secure, scalable and automated
              infrastructure using AWS, Azure, Terraform,
              Kubernetes and modern CI/CD practices.

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;