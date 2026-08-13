import React from 'react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            Work Experience & Internships
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            DevOps <span className="text-cyan-500">Career Timeline</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Practical hands-on engineering exposure built through real-world cloud infrastructure labs and internship projects.
          </p>
        </div>

        {/* Timeline Items Container */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-slate-300 dark:border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Node Badge */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-cyan-600 border-4 border-white dark:border-[#0B0F19] shadow-lg shadow-cyan-500/50 flex items-center justify-center group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-md dark:shadow-none transition-all duration-300 space-y-6">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-extrabold uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{exp.role}</h3>
                    <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5 mt-0.5">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs font-mono text-slate-600 dark:text-slate-400 sm:text-right">
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5 text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {exp.description}
                </p>

                {/* Accomplishments Bullet Points */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase text-cyan-600 dark:text-cyan-400 tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Key Internship Achievements
                  </h4>
                  <div className="space-y-2">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;