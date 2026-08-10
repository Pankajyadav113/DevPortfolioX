import { motion } from "framer-motion";
import { FaLaptopCode, FaCheckCircle, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import FadeIn from "../ui/FadeIn";

const experienceData = [
  {
    role: "DevOps Engineer Intern",
    company: "DevOps Insiders",
    location: "Remote",
    period: "Sept 2025 — Present",
    status: "Active Internship",
    description: "Architecting, containerizing, and automating cloud infrastructure solutions across AWS & Azure cloud platforms using HashiCorp Terraform and CI/CD pipelines.",
    responsibilities: [
      "Worked with Microsoft Azure infrastructure and networking.",
      "Provisioned and managed cloud infrastructure using Terraform.",
      "Worked with Git, GitHub and Azure Repos.",
      "Worked with YAML based CI/CD pipelines.",
      "Implemented DevSecOps security scanning.",
    ],
  },
  {
    role: "Cloud Computing Intern",
    company: "IBM SkillsBuild & NASSCOM",
    location: "Virtual Training",
    period: "Aug 2025 — Sept 2025",
    status: "Completed",
    description: "Completed intensive cloud architecture bootcamp covering virtualization, cloud deployment models (IaaS, PaaS, SaaS), security posture, and hybrid cloud solutions.",
    responsibilities: [
      "Explored IBM Cloud services, virtual server instances, and object storage configurations.",
      "Studied IAM role-based access control policies and cloud network security fundamentals.",
      "Completed hands-on labs on cloud architecture design and disaster recovery principles.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-[#f1f5f9] dark:bg-[#070b14] relative overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Work & Internship History
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
              Professional Experience
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
            <p className="mt-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Hands-on experience in cloud infrastructure design, container orchestration, IaC automation, and continuous delivery.
            </p>
          </div>
        </FadeIn>

        {/* Timeline Container */}
        <div className="mt-16 max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, idx) => (
            <FadeIn key={exp.company} delay={idx * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1222]/90 p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500 dark:hover:border-cyan-400/50 shadow-lg dark:shadow-2xl space-y-6"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-2xl shrink-0 shadow-lg shadow-cyan-500/10">
                      <FaBriefcase />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                      <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300 mt-0.5">{exp.company}</p>
                    </div>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 self-start sm:self-auto text-xs font-bold px-3.5 py-1.5 rounded-full ${
                      exp.status === "Active Internship"
                        ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30"
                        : "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    {exp.status}
                  </span>
                </div>

                {/* Metadata Pills */}
                <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 font-mono-code">
                    <FaCalendarAlt className="text-cyan-600 dark:text-cyan-400" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 font-mono-code">
                    <FaMapMarkerAlt className="text-cyan-600 dark:text-cyan-400" /> {exp.location}
                  </span>
                </div>

                {/* Role Description */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Accomplishments Bullet Cards */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2 font-mono-code">
                    <FaLaptopCode className="text-cyan-600 dark:text-cyan-400" /> Key Engineering Responsibilities:
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                      >
                        <FaCheckCircle className="text-cyan-600 dark:text-cyan-400 mt-1 shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}