import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaAward, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";
import FadeIn from "../ui/FadeIn";
import { certifications } from "../../constants/certifications";

export default function CertificationSection() {
  return (
    <section id="certifications" className="py-24 bg-[#f8fafc] dark:bg-[#070b14] relative overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Verified Achievements
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
              Certifications & Training
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
            <p className="mt-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Professional credentials, cloud bootcamps, and ongoing learning milestones in DevOps, Cloud Engineering, and Terraform Infrastructure as Code.
            </p>
          </div>
        </FadeIn>

        {/* Certifications Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <FadeIn key={cert.id} delay={idx * 0.12}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group flex flex-col justify-between h-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1222]/90 p-7 backdrop-blur-md transition-all duration-300 hover:border-cyan-500 dark:hover:border-cyan-400/60 shadow-lg space-y-6"
              >
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 text-slate-950 flex items-center justify-center text-xl font-bold shadow-lg shadow-cyan-500/25">
                      <FaAward />
                    </div>

                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 backdrop-blur-md ${
                        cert.status === "Verified" || cert.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/40"
                          : "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/40"
                      }`}
                    >
                      {cert.status === "Verified" || cert.status === "Completed" ? (
                        <FaCheckCircle className="text-emerald-600 dark:text-emerald-400 text-xs" />
                      ) : (
                        <FaHourglassHalf className="text-amber-600 dark:text-amber-400 text-xs" />
                      )}
                      {cert.status}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider font-mono-code">
                      {cert.issuer}
                    </span>
                    <h3 className="mt-1 text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono-code">
                    📅 {cert.duration}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Skills Tags & Action Link */}
                <div className="space-y-5 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg border border-slate-200 dark:border-cyan-500/20 bg-slate-100 dark:bg-cyan-500/10 text-slate-700 dark:text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/25 cursor-pointer hover:scale-102"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Verify Official Credential
                    </a>
                  ) : cert.hasCertificate && cert.certificateUrl ? (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-white transition-all text-xs font-bold cursor-pointer"
                    >
                      <FaCertificate className="text-cyan-600 dark:text-cyan-400" /> View Certificate PDF
                    </a>
                  ) : (
                    <div className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950/80 text-center text-xs text-slate-500 dark:text-slate-400 font-mono-code flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      Official Certificate Issuance Pending
                    </div>
                  )}
                </div>

              </motion.div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
