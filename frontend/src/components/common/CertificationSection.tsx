import FadeIn from "../ui/FadeIn";
import {
  FaCertificate,
  FaGraduationCap,
  FaClock,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { certifications } from "../../constants/certifications";

function CertificationSection() {
  return (
    <section
      id="certifications"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Certifications
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-cyan-400"></div>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Certifications, internship programs and continuous learning
              initiatives that strengthen my DevOps, Cloud Engineering and
              Infrastructure Automation expertise.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certificate, index) => (
            <FadeIn
              key={certificate.id}
              delay={index * 0.1}
            >
              <div className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950 p-7 transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">
                {/* Header */}

                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-cyan-500/10 p-4">
                    <FaCertificate className="text-3xl text-cyan-400" />
                  </div>

                  <span
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                      certificate.status === "Completed"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {certificate.status}
                  </span>
                </div>

                {/* Title */}

                <h3 className="mt-6 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                  {certificate.title}
                </h3>

                {/* Details */}

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <FaGraduationCap className="text-cyan-400" />
                    <span>{certificate.provider}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300">
                    <FaClock className="text-cyan-400" />
                    <span>{certificate.duration}</span>
                  </div>
                </div>

                {/* Description */}

                <p className="mt-6 flex-1 leading-7 text-slate-400">
                  {certificate.description}
                </p>

                {/* Button */}

                <div className="mt-8">
                  {certificate.link ? (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
                    >
                      <FaExternalLinkAlt />
                      View Certificate
                    </a>
                  ) : (
                    <button
                      disabled
                      className="cursor-not-allowed rounded-xl border border-slate-700 px-5 py-2.5 font-semibold text-slate-500"
                    >
                      Certificate Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationSection;