import { Shield, Zap } from 'lucide-react';
import React from 'react';
import StatDisplay from '../../../components/ui/StatDisplay';
import { siteConfig } from '../../../config/site';

const Support = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <h2 className="text-h2 mb-6 dark:text-white">
              Why Businesses Choose PAISOFT IT
            </h2>
            <div className="space-y-6">
              <div className="reveal flex gap-4 card-stripe p-5 rounded-xl">
                <div className="shrink-0 p-3 bg-brand-600 text-white rounded-xl h-fit shadow-lg shadow-brand-600/25">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-h3 dark:text-white mb-2">Uncompromising Security</h4>
                  <p className="text-body-sm text-slate-600 dark:text-slate-400">
                    Security is at our core. We build systems with encrypted data, secure
                    authentication, and protection against common vulnerabilities.
                  </p>
                </div>
              </div>
              <div
                className="reveal flex gap-4 card-stripe p-5 rounded-xl"
                style={{ transitionDelay: '100ms' }}
              >
                <div className="shrink-0 p-3 bg-brand-600 text-white rounded-xl h-fit shadow-lg shadow-brand-600/25">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-h3 dark:text-white mb-2">High Performance</h4>
                  <p className="text-body-sm text-slate-600 dark:text-slate-400">
                    Our code is optimized for speed and efficiency, ensuring minimal latency even
                    under high load.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 reveal-right stagger-children">
            {siteConfig.stats.map((stat, index) => (
              <StatDisplay
                key={stat.label}
                value={stat.value}
                label={stat.label}
                className={index % 2 === 1 ? 'mt-8' : ''}
                animate={!stat.value.includes('/')}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
