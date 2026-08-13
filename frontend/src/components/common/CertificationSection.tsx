import React from 'react';
import { EDUCATION_DATA, CERTIFICATIONS } from '../../data/portfolioData';
import { GraduationCap, Award, Calendar, Sparkles, BookOpen } from 'lucide-react';

export const CertificationSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            Academic Background & Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Education & <span className="text-cyan-500">Credentials</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Engineering degree background combined with targeted cloud engineering training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span>Academic Degrees</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-md dark:shadow-none transition-all duration-300 space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-extrabold uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                        {edu.status}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">{edu.degree} — {edu.field}</h4>
                      <div className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 font-semibold">{edu.institution}</div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 leading-relaxed font-medium">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Hands-on Training */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500 dark:text-amber-400" />
              <span>Certifications & Specialized Training</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-gradient-to-br from-amber-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 shadow-md dark:shadow-none transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                      {cert.icon === 'Sparkles' ? (
                        <Sparkles className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                      ) : (
                        <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                      )}
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                      VERIFIED
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{cert.title}</h4>
                    <div className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-0.5">Issuer: {cert.issuer}</div>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed font-medium">
                    {cert.description}
                  </p>
                </div>
              ))}

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-sm space-y-2 text-xs text-slate-700 dark:text-slate-400 font-medium">
                <div className="font-mono font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Continuous Certification Path</span>
                </div>
                <div>Preparing for Microsoft Certified: Azure DevOps Engineer Expert (AZ-400) & Terraform Associate certification exams.</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CertificationSection;
