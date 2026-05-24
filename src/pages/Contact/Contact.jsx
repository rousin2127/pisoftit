import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteConfig } from '../../config/site';
import useScrollReveal from '../../hooks/useScrollReveal';

const Contact = () => {
  useScrollReveal();
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16 reveal">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Let&apos;s build your <span className="text-brand-600">next big thing</span> together.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have a project in mind? We&apos;d love to hear from you. Fill out the form or use our
            contact details to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="reveal">
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900/30 text-brand-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold dark:text-white mb-1">Email Us</h3>
                  <p className="text-slate-500 mb-2">Our team will get back to you within 24 hours.</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-lg font-medium text-brand-600 hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900/30 text-brand-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold dark:text-white mb-1">Call Us</h3>
                  <p className="text-slate-500 mb-2">Mon-Fri from 10am to 6pm (GMT+6).</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-lg font-medium text-brand-600 hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900/30 text-brand-600 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold dark:text-white mb-1">Our Office</h3>
                  <p className="text-slate-500 mb-2">Visit us for a coffee and chat.</p>
                  <address className="text-lg font-medium text-slate-900 dark:text-white not-italic">
                    {siteConfig.contact.address}
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="bg-white dark:bg-slate-900 p-8 lg:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8">
                    Thank you for reaching out. We&apos;ll be in touch very soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus(null)}
                    className="text-brand-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-brand-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-brand-500/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Service Required
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-brand-500/50">
                      <option>Web Application Development</option>
                      <option>E-commerce Solution</option>
                      <option>ML/AI Project</option>
                      <option>POS Management</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-brand-500/50 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold shadow-lg shadow-brand-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
