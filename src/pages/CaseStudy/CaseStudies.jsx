import React, { useEffect, useState } from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';
import { Link } from 'react-router';
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
            Our <span className="text-blue-300">Case Studies</span>
          </>
        }
        subtitle="Real projects delivered by PAISOFT IT — from completed e-commerce brands to platforms currently in development."
      />

      <div className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-12">
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
            {filtered.map((study, index) => {
              const isCompleted = study.status === 'completed';

              return (
                <div
                  key={`${active}-${study.id}`}
                  className="reveal case-study-card group active"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 mb-6 bg-slate-100 dark:bg-slate-900">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-brand-600 shadow-lg">
                        {study.category}
                      </span>
                      <span
                        className={`px-3 py-1 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${
                          isCompleted
                            ? 'bg-emerald-500 text-white'
                            : 'bg-amber-400 text-slate-900'
                        }`}
                      >
                        {isCompleted ? 'Completed' : 'In Development'}
                      </span>
                    </div>
                  </div>

                  <div className="px-1">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <div>
                        <p className="text-xs font-medium text-slate-400 mb-1">{study.client}</p>
                        <h3 className="text-h3 dark:text-white group-hover:text-brand-600 transition-colors">
                          {study.title}
                        </h3>
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-brand-600 hover:text-white transition-all shrink-0"
                        aria-label={`View ${study.title} case study`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>

                    <p className="text-body-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
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
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-slate-500">No case studies found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
