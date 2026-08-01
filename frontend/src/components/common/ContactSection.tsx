import FadeIn from "../ui/FadeIn";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { sendContactMessage } from "../../api/contactApi";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      await sendContactMessage(formData);

      setStatus({
        type: "success",
        message: "Message sent successfully 🚀",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      console.error(err);

      let errorMessage = "Failed to send message.";

      if (
        err.response?.data?.errors &&
        Array.isArray(err.response.data.errors)
      ) {
        errorMessage = err.response.data.errors
          .map((error: any) => error.message)
          .join(" | ");
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      }

      setStatus({ 
        type: "error",
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="bg-slate-950 py-24">
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
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              {/* Contact Details */}

              <div className="space-y-6 lg:sticky lg:top-24">
                <h3 className="text-3xl font-bold text-white">Let's Connect</h3>

                <p className="pb-2 text-slate-400">
                  Have a DevOps project, internship opportunity, or just want to
                  say hello? I'd love to hear from you.
                </p>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-all duration-300 hover:border-cyan-400">
                  <FaEnvelope className="text-2xl text-cyan-400" />

                  <span className="break-all text-slate-300">
                    {contact.email}
                  </span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-all duration-300 hover:border-cyan-400">
                  <FaPhone className="text-2xl text-cyan-400" />

                  <span className="text-slate-300">{contact.phone}</span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-all duration-300 hover:border-cyan-400">
                  <FaMapMarkerAlt className="text-2xl text-cyan-400" />

                  <span className="text-slate-300">{contact.location}</span>
                </div>

                {/* Action Buttons */}

                <div className="mt-8 flex flex-col gap-4">
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

              {/* Contact Form */}

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-xl">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Send a Message
                </h3>

                <p className="mb-6 text-slate-400">
                  Fill out the form and I'll get back to you as soon as
                  possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />

                  {status.message && (
                    <div
                      className={`rounded-xl border p-4 text-center font-medium ${
                        status.type === "success"
                          ? "border-green-500 bg-green-500/10 text-green-300"
                          : "border-red-500 bg-red-500/10 text-red-300"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <FaPaperPlane />

                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default ContactSection;
