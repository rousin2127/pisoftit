import React from 'react';
import { siteConfig } from '../../config/site';
import useScrollReveal from '../../hooks/useScrollReveal';

const About = () => {
  useScrollReveal();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16 reveal">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8">
            Engineering Reliability Since Inception.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            PAISOFT IT was founded with a clear mission: to bridge the gap between complex business
            challenges and elegant software solutions. Based in the heart of Dhaka, we serve
            clients globally with a focus on enterprise stability and cutting-edge innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div className="reveal">
            <img
              src="https://picsum.photos/800/600"
              alt="Office"
              className="rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800"
            />
          </div>
          <div className="space-y-8 reveal">
            <div>
              <h3 className="text-2xl font-bold dark:text-white mb-4">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400">
                To be the most trusted technology partner for businesses undergoing digital
                transformation, known for building systems that never fail.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold dark:text-white mb-4">Our Core Values</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2.5 shrink-0" />
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-white">Precision:</strong> We value
                    meticulous attention to detail in every line of code.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2.5 shrink-0" />
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-white">Integrity:</strong> Honest
                    timelines, transparent pricing, and unwavering commitment.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2.5 shrink-0" />
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-white">Innovation:</strong>{' '}
                    Constant learning to bring the latest AI and ML benefits to our clients.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 rounded-[32px] p-12 lg:p-20 text-center reveal">
          <h2 className="text-3xl font-bold dark:text-white mb-6">Need a reliable tech partner?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
            We are always open to discussing new projects, creative ideas or opportunities to be
            part of your visions.
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-2xl lg:text-4xl font-bold text-brand-600 hover:underline"
          >
            {siteConfig.contact.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
