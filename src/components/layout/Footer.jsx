import React from 'react';
import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { siteConfig } from '../../config/site';
import Logo from '../shared/Logo/Logo';

const Footer = () => {
  return (
    <footer className="bg-[#061153] dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Logo></Logo>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-brand-600 hover:text-white transition-all"
              >
                <AiOutlineTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-brand-600 hover:text-white transition-all"
              >
                <AiFillLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-brand-600 hover:text-white transition-all"
              >
                <AiOutlineGithub className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {siteConfig.navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/"
                  className="text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Mail className="w-5 h-5 text-brand-600 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Phone className="w-5 h-5 text-brand-600 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`}>
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                <MapPin className="w-5 h-5 text-brand-600 shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Newsletter</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
              Get the latest updates on software engineering and IT solutions.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-brand-500/50"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} PAISOFT IT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
