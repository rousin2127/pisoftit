import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '../../data/services';
import { getServiceIcon } from '../../utils/serviceIcons';
import PageHero from '../../components/shared/PageHero/PageHero';

const steps = [
  {
    title: 'Discovery',
    desc: 'We analyze your requirements and business goals in detail.',
  },
  {
    title: 'Strategy',
    desc: 'Architecture planning and tech stack selection for optimal scale.',
  },
  {
    title: 'Development',
    desc: 'Agile execution with regular sprints and transparent reporting.',
  },
  {
    title: 'Quality Assurance',
    desc: 'Rigorous automated and manual testing protocols.',
  },
  {
    title: 'Deployment',
    desc: 'Zero-downtime shipping and post-launch optimization.',
  },
];

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-brand-500/60');
        setTimeout(() => el.classList.remove('ring-2', 'ring-brand-500/60'), 1800);
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <div>
      <PageHero
        label="What We Offer"
        title={
          <>
            Comprehensive <span className="text-blue-300">IT Solutions</span>
          </>
        }
        subtitle="We deliver end-to-end software engineering services, helping organizations modernize their technology stacks and optimize business processes."
      />

      <div className="py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => {
              const Icon = getServiceIcon(service.icon);
              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="reveal card-stripe p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group scroll-mt-28 transition-shadow"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-brand-50 dark:bg-brand-900/20 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-h3 mb-3 dark:text-white">{service.title}</h3>
                  <p className="text-body-sm text-slate-600 dark:text-slate-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-brand-600" />
                      Enterprise Integration
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-brand-600" />
                      Cloud-Native Architecture
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-10 lg:p-16 reveal-scale border border-slate-100 dark:border-slate-800">
            <div className="text-center mb-12">
              <h2 className="text-h2 dark:text-white mb-4">Our Engineering Process</h2>
              <p className="text-body text-slate-600 dark:text-slate-400">
                How we turn complex requirements into reliable products.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="text-3xl font-black text-brand-600/10 mb-4">{index + 1}</div>
                  <h4 className="text-h3 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-body-sm text-slate-600 dark:text-slate-400">{step.desc}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 -right-4 text-slate-200 dark:text-slate-800">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center reveal">
            <Link
              to="/contact"
              className="btn-stripe inline-flex items-center px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-base"
            >
              Start a Project Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
