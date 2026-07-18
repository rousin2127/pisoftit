import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { siteConfig } from '../../config/site';
import Logo from '../shared/Logo/Logo';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);

    const saved = localStorage.getItem('theme') || 'dark';
    const isDark = saved === 'dark';
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `text-sm font-medium pb-0.5 transition-colors ${
      isActive
        ? 'text-brand-600 dark:text-brand-400'
        : 'text-slate-600 dark:text-slate-400 hover:text-brand-600'
    }`;

  return (
    <nav
      className={`transition-all duration-300 ${
        scrolled
          ? 'glass-nav bg-white/90 dark:bg-slate-950/90 shadow-sm border-b border-slate-200/50 dark:border-slate-800/50'
          : 'bg-white/80 dark:bg-slate-950/80 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex-1 flex justify-start min-w-0">
          <Link to="/" onClick={closeMobile} className="flex items-center group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <Logo />
            </div>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-7">
          {siteConfig.navigation.map((item) => {
            if (item.children?.length) {
              const servicesActive = location.pathname.startsWith('/services');
              return (
                <div key={item.path} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((open) => !open)}
                    onMouseEnter={() => setServicesOpen(true)}
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                      servicesActive
                        ? 'text-brand-600 dark:text-brand-400'
                        : 'text-slate-600 dark:text-slate-400 hover:text-brand-600'
                    }`}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {servicesOpen && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl py-2 z-50"
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        to={item.path}
                        className="block px-4 py-2.5 text-sm font-semibold text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                        onClick={() => setServicesOpen(false)}
                      >
                        All Services
                      </Link>
                      <div className="border-t border-slate-100 dark:border-slate-800 my-1" />
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-brand-600"
                          onClick={() => setServicesOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink key={item.path} to={item.path} end={item.path === '/'} className={linkClass}>
                {item.name}
              </NavLink>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center justify-end flex-1">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-all"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile / tablet controls */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-600 dark:text-slate-400"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden border-t border-slate-100 dark:border-slate-800 transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[85vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-4 gap-1 bg-white dark:bg-slate-950">
          {siteConfig.navigation.map((item) => {
            if (item.children?.length) {
              return (
                <div key={item.path} className="border-b border-slate-100 dark:border-slate-800 pb-2 mb-1">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((open) => !open)}
                    className="w-full flex items-center justify-between py-2.5 text-base font-medium text-slate-700 dark:text-slate-300"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-3 pb-2 space-y-1">
                      <Link
                        to={item.path}
                        onClick={closeMobile}
                        className="block py-2 text-sm font-semibold text-brand-600"
                      >
                        All Services
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={closeMobile}
                          className="block py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={closeMobile}
                className="py-2.5 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-brand-600 border-b border-slate-100 dark:border-slate-800 last:border-0"
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
