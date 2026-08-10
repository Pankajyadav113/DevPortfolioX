import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaBook, FaUsers, FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import FadeIn from "../ui/FadeIn";

interface GitHubUser {
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

const featuredRepos = [
  {
    name: "Terraform_Practice",
    desc: "Modular Azure cloud infrastructure with Virtual Networks, Subnets, VM instances & Key Vault secrets.",
    lang: "HCL",
    stars: 5,
    url: "https://github.com/Pankajyadav113/Terraform_Practice",
  },
  {
    name: "DevPortfolioX",
    desc: "Production DevOps engineer portfolio with Docker multi-stage builds & GitHub Actions CI pipeline.",
    lang: "TypeScript",
    stars: 8,
    url: "https://github.com/Pankajyadav113/DevPortfolioX",
  },
  {
    name: "nginx-docker-project",
    desc: "Containerized NGINX web server deployment on Azure VM with custom reverse proxy configurations.",
    lang: "Dockerfile",
    stars: 4,
    url: "https://github.com/Pankajyadav113/nginx-docker-project",
  },
];

export default function GitHubSection() {
  const [user, setUser] = useState<GitHubUser | null>({
    avatar_url: "https://avatars.githubusercontent.com/u/10000000?v=4",
    html_url: "https://github.com/Pankajyadav113",
    name: "Pankaj Yadav",
    bio: "Cloud & DevOps Engineer | Terraform | Azure | AWS | Docker | Kubernetes | CI/CD",
    public_repos: 12,
    followers: 15,
    following: 20,
  });

  useEffect(() => {
    fetch("https://api.github.com/users/Pankajyadav113")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("API Limit");
      })
      .then((data) => {
        if (data) {
          setUser({
            ...data,
            name: "Pankaj Yadav",
          });
        }
      })
      .catch(() => {
        // Fallback to default user state
      });
  }, []);

  return (
    <section id="github" className="py-24 bg-[#f8fafc] dark:bg-[#070b14] relative overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Open Source & Code Activity
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
              GitHub Profile & Repositories
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
            <p className="mt-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Explore my open-source code repositories, cloud automation scripts, and continuous integration commits on GitHub.
            </p>
          </div>
        </FadeIn>

        {/* Profile Card */}
        {user && (
          <FadeIn delay={0.2}>
            <div className="mt-16 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1222]/90 p-8 backdrop-blur-md shadow-lg dark:shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                
                {/* Avatar */}
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 dark:opacity-40 blur-xl group-hover:opacity-70 transition-all" />
                  <img
                    src={user.avatar_url}
                    alt={user.name}
                    className="relative w-36 h-36 rounded-full border-4 border-cyan-500 dark:border-cyan-400 object-cover shadow-2xl"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div>
                    <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">{user.name}</h3>
                    <p className="text-cyan-700 dark:text-cyan-400 font-mono-code text-sm mt-1">@Pankajyadav113</p>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
                    ⚙️ DevOps Engineer | Terraform • Azure • AWS • CI/CD 🚀 Building scalable & automated infrastructure.
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <FaBook className="text-cyan-600 dark:text-cyan-400" />
                      <span>{user.public_repos} Repositories</span>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <FaUsers className="text-cyan-600 dark:text-cyan-400" />
                      <span>{user.followers} Followers</span>
                    </div>

                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                    >
                      <FaGithub /> Visit GitHub Profile
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        )}

        {/* Featured GitHub Repositories */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <FaCodeBranch className="text-cyan-600 dark:text-cyan-400" /> Featured Open-Source Repositories
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRepos.map((repo, idx) => (
              <FadeIn key={repo.name} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex flex-col justify-between h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1222]/90 p-6 backdrop-blur-md transition-all hover:border-cyan-500 dark:hover:border-cyan-400/50 shadow-sm hover:shadow-lg space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-code text-cyan-700 dark:text-cyan-400 font-semibold flex items-center gap-1.5">
                        <FaBook /> {repo.name}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono-code">
                        {repo.lang}
                      </span>
                    </div>
                    <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {repo.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono-code">
                      <FaStar className="text-amber-500 dark:text-amber-400" /> {repo.stars} stars
                    </span>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      View Code <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}