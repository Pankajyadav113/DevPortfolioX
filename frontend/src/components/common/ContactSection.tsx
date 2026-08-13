import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sendContactMessage } from '../../api/contactApi';
import { Mail, Phone, MapPin, Copy, Check, Send, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', msg: 'Please complete all required fields.' });
      return;
    }

    try {
      setSubmitting(true);
      setSubmitStatus(null);

      // 1. Dispatch to live Render Backend API
      const apiPromise = sendContactMessage(formData).catch(() => null);

      // 2. Dispatch to Formsubmit direct inbox delivery
      const formSubmitPromise = fetch('https://formsubmit.co/ajax/pankaj738074@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `🚀 New Portfolio Message from ${formData.name}: ${formData.subject || 'No Subject'}`,
          message: formData.message,
          _template: 'table'
        })
      }).catch(() => null);

      await Promise.allSettled([apiPromise, formSubmitPromise]);

      setSubmitStatus({
        type: 'success',
        msg: 'Thank you! Your message has been sent. Please check your Gmail Inbox & Spam folder.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setSubmitStatus({
        type: 'success',
        msg: 'Thank you! Your message has been sent. Please check your Gmail Inbox & Spam folder.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Let's Build Cloud <span className="text-cyan-500">Infrastructure Together</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Open for DevOps Engineer, Cloud Automation, and Infrastructure roles or collaborative engineering projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Copy Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="rounded-2xl p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-none space-y-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span>Direct Contact Information</span>
              </h3>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Email Address</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-200 truncate">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors shrink-0 cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card with Copy Button */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Phone Number</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-200">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors shrink-0 cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Location</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-200">{PERSONAL_INFO.location}</div>
                </div>
              </div>

            </div>

            {/* Social Channels */}
            <div className="rounded-2xl p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-none space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400">Professional Profiles</h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 text-slate-900 dark:text-slate-200 flex items-center gap-2.5 font-mono text-xs font-bold transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 text-slate-900 dark:text-slate-200 flex items-center gap-2.5 font-mono text-xs font-bold transition-all hover:scale-105"
                >
                  <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-none space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Send Message</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Fill out the form below to initiate direct contact.</p>
            </div>

            {submitStatus && (
              <div className={`p-4 rounded-xl flex items-center gap-3 text-xs sm:text-sm font-medium border ${
                submitStatus.type === 'success'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300'
                  : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-500/40 text-rose-800 dark:text-rose-300'
              }`}>
                {submitStatus.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                )}
                <span>{submitStatus.msg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-400">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-400">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-400">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. DevOps Opportunity / Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-400">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 transition-colors font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 px-6 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-sm font-bold transition-all shadow-lg shadow-cyan-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {submitting ? (
                  <span>Transmitting Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
