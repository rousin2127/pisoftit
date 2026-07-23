import React from 'react';
import { industries } from '../../../data/industries';

const IndustryFootprint = () => {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 lg:mb-14 reveal">
          <p className="section-label mb-3">Where We Deliver</p>
          <h2 className="text-h2 text-slate-900 dark:text-white mb-4">
            Industrial Footprint
          </h2>
          <p className="text-body text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We build software for businesses across key industries — from healthcare and education
            to retail, hospitality, and beyond.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.id}
                className="reveal card-highlight group flex flex-col items-center text-center gap-4 p-6 sm:p-8 rounded-2xl"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-50 dark:bg-brand-900/25 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-snug">
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryFootprint;
