import React from 'react';
import { PERSONAL_INFO, WHAT_I_BRING, CURRENT_LEARNING_FOCUS } from '../../data/portfolioData';
import { Boxes, Cloud, Container, Terminal, GitBranch, ShieldCheck, Sparkles, CheckCircle2, MapPin, GraduationCap, Building2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Boxes': return <Boxes className="w-6 h-6 text-purple-400" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-cyan-400" />;
      case 'Container': return <Container className="w-6 h-6 text-blue-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-emerald-400" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-amber-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-teal-400" />;
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            About Me & Core Values
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Engineering Cloud Systems with <span className="text-cyan-500">Automation</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Pursuing Information Technology Engineering with hands-on focus on Azure Cloud, Infrastructure as Code, Packer imaging, and Containerization.
          </p>
        </div>

        {/* Bio Overview & Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Detailed Bio Text */}
          <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md space-y-6 text-slate-700 dark:text-slate-300 shadow-lg dark:shadow-none">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span>Professional Overview</span>
            </h3>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
              <p>{PERSONAL_INFO.aboutDetailed}</p>
            </div>

            {/* Quick Metadata Info */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300">
                <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>{PERSONAL_INFO.degree} - B.Tech IT</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300">
                <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{PERSONAL_INFO.college}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Internship at {PERSONAL_INFO.internshipCompany}</span>
              </div>
            </div>
          </div>

          {/* Career Objective Box */}
          <div className="lg:col-span-5 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-cyan-50 via-slate-50 to-white dark:from-cyan-950/40 dark:via-slate-900 dark:to-slate-950 border border-cyan-500/30 shadow-lg dark:shadow-none flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="px-3 py-1 w-fit rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold uppercase">
                Career Objective
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">Targeting DevOps & Cloud Engineering Excellence</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {PERSONAL_INFO.careerObjective}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
              <div className="text-xs font-bold font-mono text-cyan-600 dark:text-cyan-400">Core Engineering Philosophy</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 italic">
                "Infrastructure should be version-controlled code, deployments should be automated pipelines, and environments should be reproducible."
              </div>
            </div>
          </div>

        </div>

        {/* "What I Bring" 6 Grid Cards */}
        <div className="space-y-6">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white text-center">
            What I Bring to Engineering Teams
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_I_BRING.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/80 shadow-md dark:shadow-none transition-all duration-300 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Learning Focus */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-none space-y-4">
          <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Current Continuous Learning & Engineering Focus
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {CURRENT_LEARNING_FOCUS.map((focus) => (
              <span
                key={focus}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-50 dark:bg-slate-800/90 border border-cyan-200 dark:border-cyan-900/50 text-cyan-800 dark:text-cyan-300 hover:border-cyan-400 transition-colors"
              >
                # {focus}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;