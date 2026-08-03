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
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl reveal">
          {label && (
            <p className="inline-flex items-center gap-2 text-xl font-semibold uppercase tracking-[0.15em] text-white mb-4">
              <span className="inline-block w-5 h-0.5 rounded-sm bg-white" />
              {label}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.15] text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg leading-relaxed text-white/90 max-w-7xl">{subtitle}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
