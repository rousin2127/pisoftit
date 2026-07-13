import React, { useState } from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';
import { Link } from 'react-router';
import PageHero from '../../components/shared/PageHero/PageHero';

const CaseStudies = () => {
  const [active, setActive] = useState('All');
  const categories = ['All', ...new Set(caseStudies.map((s) => s.category))];
  const filtered =
    active === 'All' ? caseStudies : caseStudies.filter((s) => s.category === active);

  return (
    <div>
      <PageHero
        label="Our Work"
        title={
          <>
            Our <span className="text-blue-300">Case Studies</span>
          </>
        }
        subtitle="Selected projects showcasing how PAISOFT IT delivers web, e-commerce, POS, and corporate software solutions for businesses."
      />

      <div className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-12 reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === cat
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-brand-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filtered.map((study, index) => (
              <div
                key={study.id}
                className="reveal group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 mb-6">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-brand-600 border border-slate-200/20 shadow-lg">
                      {study.category}
                    </span>
                  </div>
                </div>
                <div className="px-1">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-h3 dark:text-white group-hover:text-brand-600 transition-colors">
                      {study.title}
                    </h3>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-brand-600 hover:text-white transition-all shrink-0"
                      aria-label="View case study"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-body-sm text-slate-600 dark:text-slate-400 mb-4">
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
            <div className="py-16 text-center reveal">
              <p className="text-slate-500">No case studies found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
