import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaDocker,
  FaLinux,
  FaPython,
  FaReact,
  FaTerminal,
  FaAws,
  FaShieldAlt,
} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  SiTerraform,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiAnsible,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import FadeIn from "../ui/FadeIn";

interface TechItem {
  name: string;
  category: "Cloud & IaC" | "Containers & K8s" | "CI/CD & OS" | "Observability & Security";
  icon: any;
  level: "Advanced" | "Intermediate" | "Proficient";
  color: string;
}

const techList: TechItem[] = [
  // Cloud & IaC
  { name: "Microsoft Azure", category: "Cloud & IaC", icon: VscAzure, level: "Advanced", color: "#0089D6" },
  { name: "AWS Cloud", category: "Cloud & IaC", icon: FaAws, level: "Intermediate", color: "#FF9900" },
  { name: "Terraform", category: "Cloud & IaC", icon: SiTerraform, level: "Advanced", color: "#844FBA" },
  { name: "Ansible", category: "Cloud & IaC", icon: SiAnsible, level: "Intermediate", color: "#EE0000" },

  // Containers & K8s
  { name: "Docker", category: "Containers & K8s", icon: FaDocker, level: "Advanced", color: "#2496ED" },
  { name: "Kubernetes", category: "Containers & K8s", icon: SiKubernetes, level: "Intermediate", color: "#326CE5" },

  // CI/CD & OS
  { name: "GitHub Actions", category: "CI/CD & OS", icon: SiGithubactions, level: "Advanced", color: "#2088FF" },
  { name: "Jenkins", category: "CI/CD & OS", icon: SiJenkins, level: "Intermediate", color: "#D24939" },
  { name: "Linux Administration", category: "CI/CD & OS", icon: FaLinux, level: "Advanced", color: "#FCC624" },
  { name: "Bash Scripting", category: "CI/CD & OS", icon: FaTerminal, level: "Advanced", color: "#4EAA25" },

  // Observability & Security
  { name: "Prometheus", category: "Observability & Security", icon: SiPrometheus, level: "Intermediate", color: "#E6522C" },
  { name: "Grafana", category: "Observability & Security", icon: SiGrafana, level: "Intermediate", color: "#F46800" },
  { name: "SonarQube", category: "Observability & Security", icon: FaShieldAlt, level: "Proficient", color: "#4E9BCD" },

  // App Stack
  { name: "TypeScript", category: "CI/CD & OS", icon: SiTypescript, level: "Proficient", color: "#3178C6" },
  { name: "React", category: "CI/CD & OS", icon: FaReact, level: "Proficient", color: "#61DAFB" },
  { name: "Tailwind CSS", category: "CI/CD & OS", icon: SiTailwindcss, level: "Advanced", color: "#06B6D4" },
  { name: "Python", category: "CI/CD & OS", icon: FaPython, level: "Proficient", color: "#3776AB" },
];

const categories = ["All", "Cloud & IaC", "Containers & K8s", "CI/CD & OS", "Observability & Security"] as const;

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredTech = selectedCategory === "All"
    ? techList
    : techList.filter((item) => item.category === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-[#f8fafc] dark:bg-[#070b14] relative overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Technical Skill Set Matrix
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
              Tech Stack & Tooling
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
            <p className="mt-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Technologies, cloud platforms, container tools, and automation frameworks I use to build scalable production environments.
            </p>
          </div>
        </FadeIn>

        {/* Filter Categories */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid Cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filteredTech.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <FadeIn key={item.name} delay={idx * 0.03}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-5 backdrop-blur-md flex flex-col items-center justify-between text-center h-44 shadow-sm transition-all duration-300 hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-lg"
                >
                  <div className="mt-2 text-4xl transition-transform duration-300 group-hover:scale-110" style={{ color: item.color }}>
                    <IconComp />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h3>
                    <span className="mt-1 inline-block text-[11px] font-medium text-slate-500 dark:text-slate-400 font-mono-code">
                      {item.level}
                    </span>
                  </div>

                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 h-full rounded-full"
                      style={{
                        width: item.level === "Advanced" ? "90%" : item.level === "Intermediate" ? "75%" : "60%",
                      }}
                    />
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