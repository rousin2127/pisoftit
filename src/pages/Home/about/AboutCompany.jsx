import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import TeamImage from '../../../assets/team.jpg';
import { Link } from 'react-router';

const AboutCompany = () => {
  const points = [
    'Custom Web & Mobile Applications',
    'E-commerce & POS Solutions',
    'Machine Learning & AI Projects',
    'Ongoing Support & Maintenance',
  ];

  return (
    <section className="bg-white dark:bg-slate-950 py-16 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5 reveal-left">
          <p className="section-label">About Our Company</p>

          <h2 className="text-h2 text-slate-900 dark:text-white">
            Transforming Ideas Into{' '}
            <span className="gradient-text">Scalable Digital Solutions</span>
          </h2>

          <p className="text-body text-slate-600 dark:text-slate-400 max-w-xl">
            PAISOFT IT is a Dhaka-based software company specializing in web applications,
            e-commerce platforms, POS systems, and machine learning solutions. We partner with
            businesses to turn their ideas into reliable, production-ready software.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{point}</span>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="btn-stripe inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 text-sm"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="lg:col-span-6 relative pb-12 reveal-right">
          <div className="img-zoom relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
            <img src={TeamImage} alt="PAISOFT IT team" className="w-full h-full object-cover" />
          </div>

          <div className="float-badge absolute -bottom-4 left-4 sm:left-8 bg-brand-600 text-white p-6 rounded-2xl shadow-xl max-w-[280px]">
            <p className="text-3xl font-bold">10+</p>
            <p className="text-sm text-blue-100 mb-3">Years of industry experience</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 bg-white text-brand-600 text-xs font-bold px-3 py-2 rounded-lg hover:bg-blue-50 transition"
            >
              Let&apos;s Talk <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
