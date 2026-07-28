import FadeIn from "../ui/FadeIn";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

function ExperienceSection() {
  const responsibilities = [
    "Building Infrastructure using Terraform",
    "Deploying resources on Microsoft Azure",
    "Learning AWS Cloud Services",
    "Docker Containerization",
    "Git & GitHub Version Control",
    "CI/CD using GitHub Actions & Jenkins",
    "Linux Administration & Bash Scripting",
    "Monitoring with Prometheus & Grafana",
    "Infrastructure Automation",
    "DevSecOps Best Practices",
  ];

  return (
    <section
      id="experience"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Experience
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-cyan-400"></div>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              My professional journey in DevOps, Cloud Engineering,
              Infrastructure Automation and production-ready deployment
              practices.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            {/* Header */}

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-cyan-500/10 p-4">
                  <FaBriefcase className="text-3xl text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    DevOps Engineer Intern
                  </h3>

                  <p className="mt-1 text-lg text-cyan-400">
                    DevOps Insiders
                  </p>
                </div>
              </div>

              <span className="w-fit rounded-full bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
                Ongoing
              </span>
            </div>

            {/* Details */}

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-300">
                <FaCalendarAlt className="text-cyan-400" />
                <span>6+ Months (Present)</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-300">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>Remote</span>
              </div>
            </div>

            {/* Responsibilities */}

            <div className="mt-12">
              <h4 className="mb-6 text-xl font-semibold text-white">
                Responsibilities & Learning
              </h4>

              <div className="grid gap-4 md:grid-cols-2">
                {responsibilities.map((item, index) => (
                  <FadeIn
                    key={item}
                    delay={0.15 + index * 0.05}
                  >
                    <div className="group flex h-full items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]">
                      <FaCheckCircle className="mt-1 text-cyan-400" />

                      <span className="leading-7 text-slate-300 transition-colors duration-300 group-hover:text-white">
                        {item}
                      </span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default ExperienceSection;