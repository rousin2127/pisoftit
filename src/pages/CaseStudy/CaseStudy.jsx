import React from 'react';
import { useParams, Link } from 'react-router';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { FiArrowRight } from 'react-icons/fi';
import { caseStudies } from '../../data/caseStudies';
import PageHero from '../../components/shared/PageHero/PageHero';

const CaseStudy = () => {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === id || s.id === Number(id));

  if (!study) {
    return (
      <div>
        <PageHero label="Case Study" title="Case study not found" />
        <div className="py-16 text-center">
          <Link to="/case-studies" className="text-brand-600 hover:underline">
            Back to all Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        label={`Success Story / ${study.category}`}
        title={study.title}
        subtitle={study.description}
      />

      <div className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {study.image && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 mb-10 reveal">
              <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
            </div>
          )}

          {study.results && study.results.length > 0 && (
            <div className="mb-12 reveal">
              <h3 className="text-h3 text-slate-900 dark:text-white mb-4">
                Project Results & Impact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {study.results.map((result) => (
                  <div
                    key={result}
                    className="flex items-start gap-2 text-body-sm text-slate-700 dark:text-slate-300"
                  >
                    <IoIosCheckmarkCircleOutline className="text-brand-600 text-xl shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {study.technologies && (
            <div className="border-t border-slate-200 dark:border-slate-800 pt-6 reveal">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Technologies Leveraged
              </h4>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-16 bg-slate-50 dark:bg-slate-900 rounded-2xl py-12 px-6 reveal">
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
  );
};

export default CaseStudy;
