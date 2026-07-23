import React, { useState } from 'react';
import { Link } from 'react-router';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { siteConfig } from '../../config/site';
import Logo from '../shared/Logo/Logo';
import { subscribeNewsletter } from '../../api/contact';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState(null);
  const [subError, setSubError] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSubStatus('loading');
    setSubError('');
    try {
      await subscribeNewsletter(email);
      setSubStatus('success');
      setEmail('');
    } catch (err) {
      setSubStatus('error');
      setSubError(err.message);
    }
  };

  return (
    <footer className="bg-[#0f1c3d] dark:bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <Link to="/">
              <Logo light />
            </Link>
            <p className="text-body-sm text-slate-400">{siteConfig.tagline}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-body-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy-policy" className="text-body-sm text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-body-sm">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                {siteConfig.contact.address}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-body-sm text-slate-400 mb-3">
              Get updates on software engineering and IT solutions.
            </p>
            {subStatus === 'success' ? (
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <CheckCircle className="w-4 h-4" />
                Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                {subStatus === 'error' && (
                  <div className="flex gap-2 items-start text-red-400 text-xs">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    {subError}
                  </div>
                )}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-brand-500/40 text-white placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  disabled={subStatus === 'loading'}
                  className="w-full px-3 py-2 text-sm bg-brand-600 hover:bg-brand-500 disabled:opacity-60 text-white rounded-lg font-medium transition-colors"
                >
                  {subStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-center text-caption text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
