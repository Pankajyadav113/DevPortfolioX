import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTerminal, FaPlay, FaTrashAlt, FaCheckCircle, FaLaptopCode } from "react-icons/fa";
import { siteConfig } from "../../constants/siteConfig";
import { projects } from "../../constants/projects";

interface CommandLog {
  id: number;
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 1,
      command: "welcome",
      output: (
        <div className="space-y-1 text-xs sm:text-sm text-slate-300">
          <p className="font-bold text-[#38bdf8]">⚡ DevPortfolioX Interactive DevOps Shell v2.4</p>
          <p className="text-slate-400">Type <span className="font-mono text-[#f472b6]">help</span> to view available commands, or click any quick chip below.</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleRunCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        outputNode = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
            <div><span className="font-mono text-[#38bdf8]">whoami</span> - Display engineer profile</div>
            <div><span className="font-mono text-[#38bdf8]">skills</span> - List DevOps tech stack</div>
            <div><span className="font-mono text-[#38bdf8]">projects</span> - View active cloud projects</div>
            <div><span className="font-mono text-[#38bdf8]">status</span> - Check availability & role status</div>
            <div><span className="font-mono text-[#38bdf8]">contact</span> - Show contact details</div>
            <div><span className="font-mono text-[#38bdf8]">clear</span> - Clear terminal logs</div>
          </div>
        );
        break;

      case "whoami":
        outputNode = (
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <p><span className="text-[#38bdf8] font-semibold">Name:</span> {siteConfig.hero.fullName}</p>
            <p><span className="text-[#38bdf8] font-semibold">Role:</span> {siteConfig.hero.roles[0]}</p>
            <p><span className="text-[#38bdf8] font-semibold">Education:</span> B.Tech in IT @ AKTU Lucknow</p>
            <p><span className="text-[#38bdf8] font-semibold">Experience:</span> DevOps Intern @ DevOps Insiders (6+ Mos)</p>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <p className="text-[#38bdf8] font-semibold">Core DevOps Stack:</p>
            <p className="text-slate-300">☁ Cloud: Azure, AWS</p>
            <p className="text-slate-300">⚙ IaC: Terraform, HCL, Ansible</p>
            <p className="text-slate-300">🐳 Containers: Docker, Kubernetes</p>
            <p className="text-slate-300">🚀 CI/CD: GitHub Actions, Jenkins</p>
            <p className="text-slate-300">📊 Security & Ops: Trivy, Checkov, Prometheus, Grafana, Linux</p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-2 text-xs sm:text-sm">
            {projects.slice(0, 4).map((p) => (
              <div key={p.id} className="border-l-2 border-[#38bdf8] pl-2">
                <span className="text-white font-semibold">[{p.status}] {p.title}</span>
                <p className="text-slate-400 text-xs">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "status":
        outputNode = (
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#34d399] font-medium">
            <FaCheckCircle className="animate-pulse" />
            <span>🟢 Status: Open for Cloud & DevOps Engineer Opportunities</span>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1 text-xs sm:text-sm text-slate-300">
            <p>📧 Email: <a href={`mailto:${siteConfig.social.email}`} className="text-[#38bdf8] underline">{siteConfig.social.email}</a></p>
            <p>🐙 GitHub: <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="text-[#38bdf8] underline">{siteConfig.social.github}</a></p>
            <p>💼 LinkedIn: <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="text-[#38bdf8] underline">{siteConfig.social.linkedin}</a></p>
          </div>
        );
        break;

      case "clear":
        setLogs([]);
        setInput("");
        return;

      default:
        outputNode = (
          <div className="text-xs sm:text-sm text-red-400">
            Command not found: <span className="font-mono">{cmdStr}</span>. Type <span className="font-mono text-[#f472b6]">help</span> for command list.
          </div>
        );
        break;
    }

    setLogs((prev) => [
      ...prev,
      { id: Date.now(), command: cmdStr, output: outputNode },
    ]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRunCommand(input);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl rounded-2xl border border-slate-800 bg-[#0b1222]/95 shadow-2xl overflow-hidden backdrop-blur-md font-mono-code"
    >
      {/* Terminal Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs font-semibold text-slate-400 flex items-center gap-1.5">
            <FaTerminal className="text-[#38bdf8]" />
            pankaj@devops-node:~
          </span>
        </div>

        <button
          onClick={() => handleRunCommand("clear")}
          title="Clear Logs"
          className="text-slate-400 hover:text-white transition-colors p-1"
        >
          <FaTrashAlt className="text-xs" />
        </button>
      </div>

      {/* Terminal Content */}
      <div className="p-4 space-y-3 max-h-72 overflow-y-auto custom-scrollbar">
        {logs.map((log) => (
          <div key={log.id} className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="text-[#38bdf8] font-bold">pankaj@devops:~$</span>
              <span className="text-slate-200 font-semibold">{log.command}</span>
            </div>
            <div className="pl-4">{log.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Action Chips */}
      <div className="px-4 py-2 bg-slate-950/40 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
        <span className="text-[11px] text-slate-500 flex items-center gap-1">
          <FaLaptopCode className="text-[#38bdf8]" /> Quick Chips:
        </span>
        {["whoami", "skills", "projects", "status", "contact"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleRunCommand(cmd)}
            className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8]/20 transition-all cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Input Line */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-t border-slate-800">
        <span className="text-[#38bdf8] text-xs sm:text-sm font-bold">pankaj@devops:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type a command (e.g. skills)..."
          className="flex-1 bg-transparent text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 outline-none"
        />
        <button type="submit" className="text-[#38bdf8] hover:text-[#7dd3fc] p-1 cursor-pointer">
          <FaPlay className="text-xs" />
        </button>
      </form>
    </motion.div>
  );
}
