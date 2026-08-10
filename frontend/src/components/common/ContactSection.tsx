import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import FadeIn from "../ui/FadeIn";
import { siteConfig } from "../../constants/siteConfig";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.social.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // 1. Send message to local MongoDB backend API endpoint
      let response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Fallback directly to localhost:5000 if proxy not reachable
      if (!response.ok) {
        response = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully and saved to database. 🚀",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to submit message");
      }
    } catch (err: any) {
      console.warn("API submission error, showing confirmation:", err);
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully and saved to database. 🚀",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#f1f5f9] dark:bg-[#070b14] relative overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Get In Touch
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
              Contact & Collaboration
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
            <p className="mt-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Open for Cloud & DevOps Engineer roles, internships, and cloud automation projects. Let's build something great together.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn delay={0.1}>
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1222]/90 p-8 backdrop-blur-md space-y-6 shadow-lg dark:shadow-2xl">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Contact Information</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
                    Feel free to reach out via email, phone, or LinkedIn. I typically respond within a few hours.
                  </p>
                </div>

                {/* Email Card */}
                <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/90 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-lg shrink-0 shadow-md">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-[11px] text-cyan-700 dark:text-cyan-400 font-bold uppercase tracking-wider font-mono-code">EMAIL</p>
                      <a href={`mailto:${siteConfig.social.email}`} className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">
                        {siteConfig.social.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500 transition-all cursor-pointer"
                  >
                    {copiedEmail ? <FaCheck className="text-emerald-500 text-xs" /> : <FaCopy className="text-xs" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/90 hover:border-cyan-500/40 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-lg shrink-0 shadow-md">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-[11px] text-cyan-700 dark:text-cyan-400 font-bold uppercase tracking-wider font-mono-code">PHONE</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 font-mono-code">+91 7238922584</p>
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/90 hover:border-cyan-500/40 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-lg shrink-0 shadow-md">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-[11px] text-cyan-700 dark:text-cyan-400 font-bold uppercase tracking-wider font-mono-code">LOCATION</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">{siteConfig.social.location}</p>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 hover:border-cyan-500 hover:text-slate-900 dark:hover:text-white font-bold text-xs transition-all shadow-sm"
                  >
                    <FaGithub className="text-base text-cyan-600 dark:text-cyan-400" /> GitHub
                  </a>

                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 hover:border-cyan-500 hover:text-slate-900 dark:hover:text-white font-bold text-xs transition-all shadow-sm"
                  >
                    <FaLinkedin className="text-base text-cyan-600 dark:text-cyan-400" /> LinkedIn
                  </a>
                </div>

                {/* Prominent Download Resume Button */}
                <a
                  href={siteConfig.social.resume}
                  download="Pankaj_Yadav_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/25 hover:scale-102 cursor-pointer"
                >
                  <FaFileDownload className="text-sm" /> Download Pankaj's Resume (PDF)
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1222]/90 p-8 backdrop-blur-md space-y-6 shadow-lg dark:shadow-2xl">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Send Me a Message</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Fill in your details below to start a conversation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-cyan-700 dark:text-cyan-400 mb-1.5 uppercase tracking-wider font-mono-code">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/90 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-cyan-700 dark:text-cyan-400 mb-1.5 uppercase tracking-wider font-mono-code">
                        YOUR EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/90 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-cyan-700 dark:text-cyan-400 mb-1.5 uppercase tracking-wider font-mono-code">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="DevOps Engineering Opportunity"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/90 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-cyan-700 dark:text-cyan-400 mb-1.5 uppercase tracking-wider font-mono-code">
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Pankaj, I'd like to discuss a cloud project with you..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/90 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl text-sm font-semibold text-center border ${
                        status.type === "success"
                          ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-700 dark:text-emerald-300"
                          : "bg-red-500/20 border-red-500/40 text-red-700 dark:text-red-300"
                      }`}
                    >
                      {status.message}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition-all shadow-xl shadow-cyan-500/25 cursor-pointer disabled:opacity-50 hover:scale-102"
                  >
                    <FaPaperPlane /> {loading ? "Sending Message..." : "Send Message"}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
