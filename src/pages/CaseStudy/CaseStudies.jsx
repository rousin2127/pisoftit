import React, { useState } from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';
import useScrollReveal from '../../hooks/useScrollReveal';

const CaseStudies = () => {
  useScrollReveal();
  const [active, setActive] = useState('All');
  const categories = ['All', ...new Set(caseStudies.map((s) => s.category))];
  const filtered =
    active === 'All' ? caseStudies : caseStudies.filter((s) => s.category === active);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16 reveal">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8">
            Our <span className="text-brand-600">Case Studies</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Real-world examples of how we&apos;ve helped enterprises solve technical challenges and
            achieve digital excellence.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-16 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-brand-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filtered.map((study, index) => (
            <div
              key={study.id}
              className="reveal group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden border border-slate-200 dark:border-slate-800 mb-8">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-brand-600 border border-slate-200/20 shadow-xl">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="px-2">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold dark:text-white group-hover:text-brand-600 transition-colors">
                    {study.title}
                  </h3>
                  <button
                    type="button"
                    className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-brand-600 hover:text-white transition-all"
                    aria-label="View case study"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-50 dark:bg-slate-900 px-3 py-1 rounded-lg border border-slate-100 dark:border-slate-800"
                    >
                      <Tag className="w-3 h-3" /> {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center reveal">
            <p className="text-slate-500">No case studies found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudies;
