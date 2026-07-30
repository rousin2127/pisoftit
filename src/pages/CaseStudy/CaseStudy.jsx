import React from 'react';
import { useParams, Link } from 'react-router';
import { FiArrowRight } from 'react-icons/fi';
import { caseStudies } from '../../data/caseStudies';
import PageHero from '../../components/shared/PageHero/PageHero';

const CaseStudy = () => {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return (
      <div>
        <PageHero label="Case Study" title="Project not found" />
        <div className="py-16 text-center">
          <Link to="/case-studies" className="text-brand-600 hover:underline">
            Back to all projects
          </Link>
        </div>
      </div>
    );
  }

  const isCompleted = study.status === 'completed';

  return (
    <div>
      <PageHero
        label={`${study.category} · ${study.statusLabel}`}
        title={study.title}
        subtitle={study.summary}
      />

      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-slate-500">Status</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  isCompleted
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                    : 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'
                }`}
              >
                {study.statusLabel}
              </span>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
              <h2 className="text-h3 text-slate-900 dark:text-white mb-3">Overview</h2>
              <p className="text-body text-slate-600 dark:text-slate-400">
                {study.title} is an {study.category.toLowerCase()} project
                {isCompleted
                  ? ' completed and handed over by PAISOFT IT.'
                  : ' currently under active development by PAISOFT IT.'}
              </p>
            </div>

            <div className="card-highlight text-center mt-10 rounded-2xl py-12 px-6">
              <h2 className="text-h2 text-slate-900 dark:text-white mb-4">
                Have a similar project in mind?
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-lg transition"
              >
                Start a Consultation <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
