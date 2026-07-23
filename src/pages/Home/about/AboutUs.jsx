import React from 'react';
import { ShieldCheck, TrendingUp, Headphones } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      id: 1,
      title: 'Secure Systems',
      description:
        'We build with security-first architecture — encrypted data, secure authentication, and protection against common vulnerabilities.',
      icon: ShieldCheck,
      isFeatured: false,
    },
    {
      id: 2,
      title: 'Scalable Solutions',
      description:
        'Our software is designed to grow with your business, from startup MVPs to enterprise systems handling high traffic.',
      icon: TrendingUp,
      isFeatured: true,
    },
    {
      id: 3,
      title: '24/7 Expert Support',
      description:
        'Our team provides ongoing technical support and maintenance so your systems stay reliable after launch.',
      icon: Headphones,
      isFeatured: false,
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative z-10">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`reveal card-stripe rounded-xl p-6 flex flex-col ${
                item.isFeatured
                  ? 'card-featured text-white'
                  : 'bg-white dark:bg-slate-900'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                    item.isFeatured
                      ? 'bg-[#1E6BFF] text-white'
                      : 'bg-brand-50 dark:bg-slate-800 text-brand-600'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-h3 text-slate-900 dark:text-white">{item.title}</h3>
              </div>
              <div className="divider-accent mb-4" />
              <p
                className={`text-body ${
                  item.isFeatured ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
