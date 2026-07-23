import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';
import { getServiceIcon } from '../../utils/serviceIcons';
import Hero from './hero/Hero';
import AboutUs from './about/AboutUs';
import AboutCompany from './about/AboutCompany';
import IndustryFootprint from './industries/IndustryFootprint';
import ClientsSection from './clients/ClientsSection';
import Support from './support/Support';
import Team from './team/Team';

const Home = () => {
  return (
    <div className="flex flex-col mx-auto">
      <Hero />
      <AboutUs />
      <AboutCompany />

      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <h2 className="text-h2 mb-4 dark:text-white">
              World-class <span className="gradient-text">IT Solutions</span>
            </h2>
            <p className="text-body text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              From ideation to deployment, we provide comprehensive technical services that scale
              with your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {services.map((service, index) => {
              const Icon = getServiceIcon(service.icon);
              return (
                <div
                  key={service.id}
                  className="reveal card-stripe p-8 bg-white dark:bg-slate-900 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 group-hover:shadow-brand-600/20 transition-all duration-500">
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="text-h3 mb-2 dark:text-white">{service.title}</h3>
                  <p className="text-body-sm text-slate-600 dark:text-slate-400 mb-5 line-clamp-2">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="text-brand-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300 text-sm"
                  >
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <IndustryFootprint />
      <ClientsSection />
      <Support />
      <Team />

      <section className="py-24 cta-gradient relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center reveal relative z-10">
          <h2 className="text-h2 text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-body text-brand-100 mb-10 max-w-2xl mx-auto">
            Our consultants are ready to discuss your project. Let&apos;s engineer something great
            together.
          </p>
          <Link
            to="/contact"
            className="btn-stripe inline-flex items-center px-8 py-3 bg-white text-brand-600 hover:bg-slate-50 font-semibold text-base shadow-xl shadow-black/20 shine-hover"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
