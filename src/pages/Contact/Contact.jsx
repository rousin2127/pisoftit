import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { sendContactMessage } from '../../api/contact';
import { services } from '../../data/services';
import PageHero from '../../components/shared/PageHero/PageHero';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: services[0]?.title || 'Other',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      await sendContactMessage(form);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please call or email us directly.');
    }
  };

  return (
    <div>
      <PageHero
        label="Get in Touch"
        title={
          <>
            Let&apos;s build your <span className="text-blue-300">next project</span> together
          </>
        }
        subtitle="Fill out the form and we will respond within one business day. You can also call or email us directly."
      />

      <div className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="reveal space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-h3 text-slate-900 dark:text-white mb-1">Email</h3>
                  <p className="text-sm text-slate-500 mb-2">We reply within 24 hours.</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-base font-medium text-brand-600 hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-h3 text-slate-900 dark:text-white mb-1">Phone</h3>
                  <p className="text-sm text-slate-500 mb-2">{siteConfig.contact.hours}</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-base font-medium text-brand-600 hover:underline"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-h3 text-slate-900 dark:text-white mb-1">Office</h3>
                  <p className="text-sm text-slate-500 mb-2">Visit us by appointment.</p>
                  <address className="text-base font-medium text-slate-700 dark:text-slate-300 not-italic">
                    {siteConfig.contact.address}
                  </address>
                </div>
              </div>
            </div>

            <div className="reveal">
              <div className="bg-white dark:bg-slate-900 p-6 lg:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
                {status === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-6 h-6" />
                    </div>
                    <h3 className="text-h3 text-slate-900 dark:text-white mb-2">Message sent!</h3>
                    <p className="text-body text-slate-600 dark:text-slate-400 mb-6">
                      Thank you for contacting PAISOFT IT. We will get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus(null)}
                      className="text-brand-600 font-semibold hover:underline text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status === 'error' && (
                      <div className="flex gap-3 items-start bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm px-4 py-3 rounded-xl border border-red-200 dark:border-red-800">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full px-4 py-2.5 text-base bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-brand-500/40"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-2.5 text-base bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-brand-500/40"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+880 1XXX-XXXXXX"
                        className="w-full px-4 py-2.5 text-base bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-brand-500/40"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="service" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-base bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-brand-500/40"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        className="w-full px-4 py-2.5 text-base bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-brand-500/40 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-3 bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white rounded-lg font-semibold text-base transition-all flex items-center justify-center gap-2"
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
    </div>
  );
};

export default Contact;
