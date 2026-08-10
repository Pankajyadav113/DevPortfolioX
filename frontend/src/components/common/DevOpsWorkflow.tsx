import { motion } from "framer-motion";
import { FaCode, FaShieldAlt, FaDocker, FaCloudUploadAlt, FaChartLine } from "react-icons/fa";
import FadeIn from "../ui/FadeIn";

const workflowSteps = [
  {
    id: "iac",
    title: "1. Infrastructure as Code",
    tool: "Terraform & Azure/AWS",
    icon: FaCloudUploadAlt,
    color: "from-purple-500 to-indigo-500",
    desc: "Modular HCL templates provisioning virtual networks, security groups, key vaults, and server nodes.",
  },
  {
    id: "code",
    title: "2. Build & Development",
    tool: "React & TypeScript",
    icon: FaCode,
    color: "from-cyan-500 to-blue-500",
    desc: "Single page web applications built with modern type safety, modular architecture, and automated linting.",
  },
  {
    id: "sec",
    title: "3. DevSecOps Scanning",
    tool: "Checkov, Trivy & Sonar",
    icon: FaShieldAlt,
    color: "from-emerald-500 to-teal-500",
    desc: "Automated vulnerability checks for Docker containers and static code analysis before deployment.",
  },
  {
    id: "container",
    title: "4. Container Orchestration",
    tool: "Docker & Kubernetes",
    icon: FaDocker,
    color: "from-blue-500 to-cyan-500",
    desc: "Multi-stage alpine Docker packaging, container port mapping, and Kubernetes deployment manifests.",
  },
  {
    id: "obs",
    title: "5. Continuous Monitoring",
    tool: "Prometheus & Grafana",
    icon: FaChartLine,
    color: "from-amber-500 to-orange-500",
    desc: "Real-time metrics scraping, alertmanager notifications, and resource utilization dashboards.",
  },
];

export default function DevOpsWorkflow() {
  return (
    <section id="workflow" className="relative py-24 bg-[#f8fafc] dark:bg-[#070b14] overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              DevOps Engineering Lifecycle
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
              End-to-End Automation Workflow
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
            <p className="mt-6 text-base sm:text-lg text-slate-700 dark:text-slate-400">
              How I bridge development and cloud infrastructure through automated continuous integration, infrastructure as code, containerization, and monitoring.
            </p>
          </div>
        </FadeIn>

        {/* Workflow Timeline Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {workflowSteps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <FadeIn key={step.id} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1222]/80 p-6 backdrop-blur-md flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-cyan-500 dark:hover:border-cyan-400/40 hover:shadow-lg group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} p-3 text-white shadow-lg mb-5 flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <IconComponent className="text-xl" />
                    </div>

                    <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
                      {step.tool}
                    </span>

                    <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Stage 0{idx + 1}</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-mono font-semibold">Automated ⚡</span>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
