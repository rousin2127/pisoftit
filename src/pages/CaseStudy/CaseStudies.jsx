import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { caseStudies } from '../../data/caseStudies';
import PageHero from '../../components/shared/PageHero/PageHero';

const CaseStudies = () => {
  const [active, setActive] = useState('All');
  const categories = ['All', ...new Set(caseStudies.map((s) => s.category))];
  const filtered =
    active === 'All' ? caseStudies : caseStudies.filter((s) => s.category === active);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      document.querySelectorAll('.case-study-card').forEach((el) => {
        el.classList.add('active');
      });
    });
    return () => cancelAnimationFrame(id);
  }, [active, filtered.length]);

  return (
    <div>
      <PageHero
        label="Our Work"
        title={
          <>
            Selected <span className="text-blue-300">Projects</span>
          </>
        }
        subtitle="A focused look at brands and platforms we are building and delivering."
      />

      <div className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-10">
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

          <div className="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
            {filtered.map((study, index) => {
              const isCompleted = study.status === 'completed';

              return (
                <Link
                  key={`${active}-${study.id}`}
                  to={`/case-studies/${study.id}`}
                  className="reveal case-study-card active group flex items-center justify-between gap-6 py-8 transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-900/40 px-2 sm:px-4 -mx-2 sm:-mx-4"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {study.category}
                      </span>
                      <span className="text-slate-300 dark:text-slate-700">·</span>
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider ${
                          isCompleted
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-amber-600 dark:text-amber-400'
                        }`}
                      >
                        {study.statusLabel}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-brand-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="mt-2 text-body-sm text-slate-500 dark:text-slate-400">
                      {study.summary}
                    </p>
                  </div>

                  <span className="shrink-0 w-11 h-11 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-slate-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
