import { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaBullseye, FaServer, FaCheckCircle, FaLaptopCode } from "react-icons/fa";
import FadeIn from "../ui/FadeIn";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"pillars" | "experience" | "education" | "philosophy">("pillars");

  const pillars = [
    {
      title: "Infrastructure as Code (IaC)",
      desc: "Provisioning multi-cloud environments deterministically using HashiCorp Terraform modules and Ansible playbooks.",
      icon: "⚙️",
    },
    {
      title: "Container Orchestration",
      desc: "Docker multi-stage packaging and Kubernetes pod/service deployments with Helm charts and health checks.",
      icon: "🐳",
    },
    {
      title: "Automated CI/CD Pipelines",
      desc: "Zero-downtime deployment pipelines using GitHub Actions & Jenkins with continuous linting and image validation.",
      icon: "🚀",
    },
    {
      title: "Observability & DevSecOps",
      desc: "Monitoring cluster health with Prometheus & Grafana, paired with Trivy & Checkov automated security scanning.",
      icon: "🔒",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#f1f5f9] dark:bg-[#090e1a] relative overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              DevOps Mindset & Background
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
              About Pankaj Yadav
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
            <p className="mt-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Passionate Cloud & DevOps Engineer focused on building resilient cloud infrastructure, automating release pipelines, and maintaining high availability across multi-cloud environments.
            </p>
          </div>
        </FadeIn>

        {/* Navigation Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            { id: "pillars", label: "DevOps Pillars", icon: FaServer },
            { id: "experience", label: "Experience & Internship", icon: FaBriefcase },
            { id: "education", label: "Education", icon: FaGraduationCap },
            { id: "philosophy", label: "Career Goal", icon: FaBullseye },
          ].map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                    : "bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-white"
                }`}
              >
                <IconComp /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Cards */}
        <div className="mt-10 max-w-5xl mx-auto">
          {activeTab === "pillars" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 backdrop-blur-md shadow-sm hover:border-cyan-500/40 transition-all"
                >
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "experience" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-8 backdrop-blur-md space-y-6 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6 gap-4">
                <div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                    Active Internship
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">DevOps Engineer Intern</h3>
                  <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-300">DevOps Insiders</p>
                </div>
                <div className="text-xs font-semibold px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono-code">
                  Duration: 6+ Months (Ongoing)
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <p className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-cyan-600 dark:text-cyan-400 mt-1 shrink-0" />
                  Building automated infrastructure modules using HashiCorp Terraform on Azure & AWS.
                </p>
                <p className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-cyan-600 dark:text-cyan-400 mt-1 shrink-0" />
                  Containerizing web microservices using Docker and configuring NGINX reverse proxies.
                </p>
                <p className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-cyan-600 dark:text-cyan-400 mt-1 shrink-0" />
                  Implementing Continuous Integration workflows with GitHub Actions & static code checks.
                </p>
                <p className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-cyan-600 dark:text-cyan-400 mt-1 shrink-0" />
                  Exploring Kubernetes cluster setups, Prometheus monitoring, and DevSecOps tools.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-8 backdrop-blur-md space-y-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-2xl shrink-0">
                  <FaGraduationCap />
                </div>
                <div>
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                    Bachelor of Technology (B.Tech)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    Information Technology
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                    Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono-code">
                    Expected Graduation: 2027
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "philosophy" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-8 backdrop-blur-md space-y-4 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FaLaptopCode className="text-cyan-600 dark:text-cyan-400" /> Career Vision & Mission
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                My objective is to become an outstanding Cloud & DevOps Architect, enabling organization teams to ship code faster, securely, and seamlessly through automated CI/CD pipelines, Infrastructure as Code, and resilient cloud architectures on AWS and Azure.
              </p>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}