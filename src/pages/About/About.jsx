import React from 'react';
import { siteConfig } from '../../config/site';
import Vision from '../../assets/vision.png';
import PageHero from '../../components/shared/PageHero/PageHero';

const About = () => {
  return (
    <div>
      <PageHero
        label="About Us"
        title="Engineering Reliability Since Inception."
        subtitle="PAISOFT IT was founded with a clear mission: to bridge the gap between complex business challenges and elegant software solutions. We serve clients globally with a focus on enterprise stability and innovation."
      />

      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-center">
            <div className="reveal">
              <img
                src={Vision}
                alt="PAISOFT IT vision"
                className="rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 w-full"
              />
            </div>
            <div className="space-y-8 reveal">
              <div>
                <h3 className="text-h3 dark:text-white mb-3">Our Vision</h3>
                <p className="text-body text-slate-600 dark:text-slate-400">
                  To be the most trusted technology partner for businesses undergoing digital
                  transformation, known for building systems that never fail.
                </p>
              </div>
              <div>
                <h3 className="text-h3 dark:text-white mb-3">Our Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2.5 shrink-0" />
                    <p className="text-body-sm text-slate-600 dark:text-slate-400">
                      <strong className="text-slate-900 dark:text-white">Precision:</strong> We value
                      meticulous attention to detail in every line of code.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2.5 shrink-0" />
                    <p className="text-body-sm text-slate-600 dark:text-slate-400">
                      <strong className="text-slate-900 dark:text-white">Integrity:</strong> Honest
                      timelines, transparent pricing, and unwavering commitment.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2.5 shrink-0" />
                    <p className="text-body-sm text-slate-600 dark:text-slate-400">
                      <strong className="text-slate-900 dark:text-white">Innovation:</strong>{' '}
                      Constant learning to bring the latest AI and ML benefits to our clients.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-highlight rounded-2xl p-10 lg:p-16 text-center reveal">
            <h2 className="text-h2 dark:text-white mb-4">Need a reliable tech partner?</h2>
            <p className="text-body text-slate-600 dark:text-slate-400 mb-6 max-w-xl mx-auto">
              We are always open to discussing new projects, creative ideas or opportunities to be
              part of your visions.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-xl lg:text-2xl font-bold text-brand-600 hover:underline"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
