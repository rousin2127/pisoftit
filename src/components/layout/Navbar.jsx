import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { siteConfig } from '../../config/site';
import Logo from '../shared/Logo/Logo';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);

    const saved = localStorage.getItem('theme') || 'dark';
    const isDark = saved === 'dark';
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-slate-950/80 backdrop-blur-md shadow-sm py-8'
          : 'bg-transparent py-10 '
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          onClick={closeMobile}
          className="flex items-center gap-2 group"
        >
          <div className=" h-10  rounded-lg flex items-center justify-center text-white font-bold  group-hover:scale-105 transition-transform">
            <Logo></Logo>
          </div>
          {/* <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            PAISOFT <span className="text-brand-600">IT</span>
          </span> */}
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {siteConfig.navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-xl font-medium transition-colors ${
                  isActive
                    ? 'text-brand-600 dark:text-brand-500'
                    : 'text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-500'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-all cursor-pointer"
            aria-label="Toggle Theme"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
            aria-label="Toggle Theme"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-600 dark:text-slate-400"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {siteConfig.navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMobile}
              className="text-lg font-medium text-slate-700 dark:text-slate-300"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
