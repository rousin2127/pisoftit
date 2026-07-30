import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '../../config/site';
import Logo from '../shared/Logo/Logo';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
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

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `text-lg font-medium transition-colors ${
      isActive ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'
    }`;

  return (
    <nav
      className={`transition-all duration-300 ${
        scrolled
          ? 'glass-nav bg-white/95 shadow-sm border-b border-slate-200/80'
          : 'bg-white/80 border-b border-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        <Link to="/" onClick={closeMobile} className="flex items-center group shrink-0">
          <div className="transition-transform duration-300 group-hover:scale-105">
            <Logo compact />
          </div>
        </Link>

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
                    className={`inline-flex items-center gap-1 text-lg font-medium transition-colors ${
                      servicesActive ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'
                    }`}
                    aria-expanded={servicesOpen}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {servicesOpen && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 rounded-2xl border border-slate-200 bg-white shadow-xl py-2 z-50"
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        to={item.path}
                        className="block px-4 py-2.5 text-sm font-semibold text-brand-600 hover:bg-brand-50 mx-2 rounded-xl"
                        onClick={() => setServicesOpen(false)}
                      >
                        All Services
                      </Link>
                      <div className="border-t border-slate-100 my-1 mx-2" />
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-600 mx-2 rounded-xl"
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

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-slate-600"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={`lg:hidden border-t border-slate-100 transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[85vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-4 gap-1 bg-white">
          {siteConfig.navigation.map((item) => {
            if (item.children?.length) {
              return (
                <div key={item.path} className="border-b border-slate-100 pb-2 mb-1">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((open) => !open)}
                    className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-slate-700"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-3 pb-2 space-y-1">
                      <Link to={item.path} onClick={closeMobile} className="block py-2 text-sm font-semibold text-brand-600">
                        All Services
                      </Link>
                      {item.children.map((child) => (
                        <Link key={child.path} to={child.path} onClick={closeMobile} className="block py-2 text-sm text-slate-600">
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
                className="py-2.5 text-sm font-medium text-slate-700 hover:text-brand-600 border-b border-slate-100 last:border-0"
              >
                {item.name}
              </NavLink>
            );
          })}
          <Link to="/contact" onClick={closeMobile} className="btn-primary mt-3 justify-center text-sm">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
