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

const fieldClass =
  'w-full px-4 py-3 text-base text-slate-800 bg-white border border-slate-200 rounded-xl outline-none placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition';

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
        title="Let's build your next project together"
        subtitle="Fill out the form and we will respond within one business day. You can also call or email us directly."
      />

      <div className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="reveal space-y-6">
              <div className="card-highlight bg-white p-5 rounded-2xl flex gap-4">
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Email</h3>
                  <p className="text-sm text-slate-500 mb-2">We reply within 24 hours.</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-base font-medium text-brand-600 hover:underline break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="card-highlight bg-white p-5 rounded-2xl flex gap-4">
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Phone</h3>
                  <p className="text-sm text-slate-500 mb-2">{siteConfig.contact.hours}</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-base font-medium text-brand-600 hover:underline"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="card-highlight bg-white p-5 rounded-2xl flex gap-4">
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Office</h3>
                  <p className="text-sm text-slate-500 mb-2">Visit us by appointment.</p>
                  <address className="text-base font-medium text-slate-700 not-italic leading-relaxed">
                    {siteConfig.contact.address}
                  </address>
                </div>
              </div>
            </div>

            <div className="reveal">
              <div className="card-highlight bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                {status === 'success' ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Message <span className="gradient-text">sent</span>!
                    </h3>
                    <p className="text-base text-slate-600 mb-6">
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
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">Send a message</h3>
                      <p className="text-sm text-slate-500">
                        Share a few details and we&apos;ll get back to you soon.
                      </p>
                    </div>

                    {status === 'error' && (
                      <div className="flex gap-3 items-start bg-red-50 text-red-700 text-sm px-4 py-3 rounded-xl border border-red-200">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={fieldClass}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700">
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
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+880 1XXX-XXXXXX"
                        className={fieldClass}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="service" className="text-sm font-medium text-slate-700">
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={`${fieldClass} appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%2364748b%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpath d=%22m4 6 4 4 4-4%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_1rem_center] pr-10`}
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
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        className={`${fieldClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:pointer-events-none"
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
