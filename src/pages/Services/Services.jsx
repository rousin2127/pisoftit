import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '../../data/services';
import { getServiceIcon } from '../../utils/serviceIcons';
import GradientMesh from '../../components/ui/GradientMesh';

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
  return (
    <div className="py-24 relative overflow-hidden">
      <GradientMesh className="opacity-50" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20 reveal-left">
          <h1 className="text-h1 text-slate-900 dark:text-white mb-4">
            Comprehensive <span className="gradient-text">IT Solutions</span>
          </h1>
          <p className="text-body text-slate-600 dark:text-slate-400">
            We deliver end-to-end software engineering services, helping organizations modernize
            their technology stacks and optimize business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <div
                key={service.id}
                className="reveal card-stripe p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-brand-50 dark:bg-brand-900/20 text-brand-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
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

        <div className="bg-slate-50 dark:bg-slate-900 rounded-[40px] p-12 lg:p-20 reveal-scale border border-slate-100 dark:border-slate-800">
          <div className="text-center mb-16">
            <h2 className="text-h2 dark:text-white mb-4">
              Our Engineering Process
            </h2>
            <p className="text-body text-slate-600 dark:text-slate-400">
              How we turn complex requirements into reliable products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="text-3xl font-black text-brand-600/10 mb-4">{index + 1}</div>
                <h4 className="text-lg font-bold dark:text-white mb-2">{step.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{step.desc}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 text-slate-200 dark:text-slate-800">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center reveal">
          <Link
            to="/contact"
            className="btn-stripe inline-flex items-center px-10 py-5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg shine-hover"
          >
            Start a Project Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
