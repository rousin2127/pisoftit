import React from 'react';
import { useParams, Link } from 'react-router';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { FiArrowRight } from 'react-icons/fi';
import { caseStudies } from '../../data/caseStudies';

const CaseStudy = () => {
  // 1. Grab the dynamic ID parameter from the URL
  const { id } = useParams();

  // 2. Find the specific case study matching that parameter
  const study = caseStudies.find((s) => s.id === id || s.id === Number(id));

  // 3. Render a fallback state if the case study isn't found
  if (!study) {
    return (
      <div className="pb-24 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Case study not found</h2>
        <Link to="/case-studies" className="text-blue-600 hover:underline">
          Back to all Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
      {/* Success Tag */}
      <div className="mb-6 space-y-4">
        <span className="inline-block bg-[#e0f0ff] text-[#0060c1] text-xs font-semibold px-4 py-1.5 rounded-full">
          Success Story / {study.category}
        </span>
        <h1 className="text-h1 text-slate-900 dark:text-white">
          {study.title}
        </h1>
      </div>

      {/* Main Image */}
      {study.image && (
        <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden border border-slate-200 dark:border-slate-800 mb-8">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Description Content */}
      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-body text-slate-600 dark:text-slate-400">
          {study.description}
        </p>
      </div>

      {/* Key Project Outcomes (Safely check if your data object includes a 'results' array) */}
      {study.results && study.results.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Project Results & Impact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {study.results.map((result) => (
              <div key={result} className="flex items-start gap-2 text-base text-slate-700 dark:text-slate-300">
                <IoIosCheckmarkCircleOutline className="text-blue-600 text-xl shrink-0 mt-0.5" />
                <span>{result}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies Used */}
      {/* Note: Updated 'tech' to 'technologies' to match your main list page schema */}
      {study.technologies && (
        <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Technologies Leveraged</h4>
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

      {/* Bottom CTA Section */}
      <div className="text-center mt-16 bg-slate-50 dark:bg-slate-900 rounded-3xl py-12 px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Have a similar project in mind?</h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg transition"
        >
          Start a Consultation <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudy;