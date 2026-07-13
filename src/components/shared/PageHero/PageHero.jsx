import React from 'react';
import heroBg from '../../../assets/inr.jpg';

/**
 * Shared page hero — background: inr.jpg
 * Used on Services, About, Contact, Case Studies, Privacy Policy, etc.
 */
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
      <div className="absolute inset-0 bg-[#061153]/55" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl reveal">
          {label && (
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-200 mb-3">
              {label}
            </p>
          )}
          <h1 className="text-h1 text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-body text-blue-100/90 max-w-2xl">{subtitle}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
