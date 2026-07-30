import React from 'react';
import heroBg from '../../../assets/inr.jpg';

const PageHero = ({ label, title, subtitle, children }) => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/55 to-slate-900/35" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl reveal">
          {label && <p className="section-label mb-4 text-blue-200">{label}</p>}
          <h1 className="text-h1 text-white mb-4">{title}</h1>
          {subtitle && <p className="text-body text-blue-50/90 max-w-7xl">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
