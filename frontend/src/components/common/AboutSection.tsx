import FadeIn from "../ui/FadeIn";

function AboutSection() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              About Me
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-cyan-400"></div>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Passionate about building scalable cloud infrastructure,
              automating deployments, and following production-ready
              DevOps practices with a strong focus on cloud, automation,
              security and infrastructure as code.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education */}

          <FadeIn delay={0.1}>
            <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <h3 className="mb-5 text-2xl font-semibold text-cyan-400">
                🎓 Education
              </h3>

              <p className="text-xl font-semibold text-white">
                Bachelor of Technology
              </p>

              <p className="mt-2 text-slate-300">
                Information Technology
              </p>

              <p className="mt-4 text-slate-400">
                Dr. A.P.J. Abdul Kalam Technical University, Lucknow
              </p>

              <p className="mt-2 text-slate-500">
                Expected Graduation : 2027
              </p>
            </div>
          </FadeIn>

          {/* Experience */}

          <FadeIn delay={0.2}>
            <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <h3 className="mb-5 text-2xl font-semibold text-cyan-400">
                💼 Experience
              </h3>

              <p className="text-xl font-semibold text-white">
                DevOps Engineer Intern
              </p>

              <p className="mt-2 text-slate-300">
                DevOps Insiders
              </p>

              <p className="mt-4 text-slate-400">
                Duration
              </p>

              <p className="font-medium text-white">
                6+ Months
              </p>
            </div>
          </FadeIn>

          {/* Current Focus */}

          <FadeIn delay={0.3}>
            <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <h3 className="mb-5 text-2xl font-semibold text-cyan-400">
                🚀 Current Focus
              </h3>

              <ul className="grid grid-cols-2 gap-3 text-slate-300">
                <li>☁ AWS Cloud</li>
                <li>☁ Microsoft Azure</li>
                <li>⚙ Terraform</li>
                <li>🐳 Docker</li>
                <li>☸ Kubernetes</li>
                <li>🚀 CI/CD</li>
                <li>📊 Monitoring</li>
                <li>🔒 DevSecOps</li>
              </ul>
            </div>
          </FadeIn>

          {/* Career Goal */}

          <FadeIn delay={0.4}>
            <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <h3 className="mb-5 text-2xl font-semibold text-cyan-400">
                🎯 Career Goal
              </h3>

              <p className="leading-8 text-slate-300">
                My goal is to become a highly skilled Cloud and DevOps
                Engineer by designing secure, scalable and automated
                infrastructure using AWS, Azure, Terraform,
                Kubernetes and modern CI/CD practices. I enjoy learning
                new technologies and continuously improving my skills by
                building real-world projects.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;