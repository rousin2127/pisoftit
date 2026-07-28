import { Shield, Zap } from 'lucide-react';
import React from 'react';
import StatDisplay from '../../../components/ui/StatDisplay';
import { siteConfig } from '../../../config/site';
import SectionHeader from '../../../components/shared/SectionHeader/SectionHeader';

const Support = () => {
  return (
    <section className="section-shell section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="reveal-left">
            <SectionHeader
              align="left"
              label="Our Promise"
              title="Why clients keep working with us"
              subtitle="We focus on quality, clear communication, and software you can depend on every day."
              className="mb-8"
            />

            <div className="space-y-5">
              <div className="reveal flex gap-4 card-stripe p-5 rounded-2xl">
                <div className="shrink-0 p-3 bg-brand-600 text-white rounded-2xl h-fit">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-h3 mb-2">Secure by Design</h4>
                  <p className="text-body-sm">
                    Your data and your customers&apos; data matter. We build with security in mind
                    from the start.
                  </p>
                </div>
              </div>
              <div className="reveal flex gap-4 card-stripe p-5 rounded-2xl" style={{ transitionDelay: '100ms' }}>
                <div className="shrink-0 p-3 bg-brand-600 text-white rounded-2xl h-fit">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-h3 mb-2">Fast & Reliable</h4>
                  <p className="text-body-sm">
                    Nobody likes slow software. We optimize for speed so your users have a smooth
                    experience.
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
                className={index % 2 === 1 ? 'mt-6' : ''}
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
