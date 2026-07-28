import FadeIn from "../ui/FadeIn";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import { contact } from "../../constants/contact";

function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Contact Me
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-cyan-400"></div>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              I'm always open to discussing DevOps, Cloud Engineering,
              Infrastructure Automation, internships and full-time
              opportunities. Feel free to connect with me.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
            <div className="grid gap-10 md:grid-cols-2">
              {/* Contact Details */}

              <div className="space-y-6">
                <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-all duration-300 hover:border-cyan-400">
                  <FaEnvelope className="text-2xl text-cyan-400" />

                  <span className="break-all text-slate-300">
                    {contact.email}
                  </span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-all duration-300 hover:border-cyan-400">
                  <FaPhone className="text-2xl text-cyan-400" />

                  <span className="text-slate-300">
                    {contact.phone}
                  </span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-all duration-300 hover:border-cyan-400">
                  <FaMapMarkerAlt className="text-2xl text-cyan-400" />

                  <span className="text-slate-300">
                    {contact.location}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}

              <div className="flex flex-col justify-center gap-5">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-xl bg-slate-800 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-slate-950"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-xl bg-slate-800 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-slate-950"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>

                <a
                  href={contact.resume}
                  className="flex items-center justify-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
                >
                  <FaFileDownload />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default ContactSection;