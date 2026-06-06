import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, Shield, Zap } from 'lucide-react';
import { services } from '../../data/services';
import { getServiceIcon } from '../../utils/serviceIcons';
import useScrollReveal from '../../hooks/useScrollReveal';
import Hero from '../../assets/hero.png'

const Home = () => {
  useScrollReveal();

  return (
    <div className="flex flex-col  mx-auto">
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white dark:from-slate-950 dark:to-slate-900 -z-10" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />

        <div className="max-w-6xl mx-auto pt-15 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-brand-600 bg-brand-100 dark:bg-brand-900/30 rounded-full">
              Leading IT Innovation
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-6">
              Engineering <span className="text-brand-600">Reliable</span> Software for
              Businesses
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
              We specialize in high-performance web applications, machine learning projects, and
              enterprise POS solutions that empower modern enterprises.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold shadow-lg shadow-brand-600/20 flex items-center gap-2 group transition-all"
              >
                Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-slate-200 dark:border-slate-700 hover:border-brand-600 dark:hover:border-brand-500 rounded-xl font-semibold text-slate-900 dark:text-white transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="relative  lg:block">
            <div className="rounded-xl overflow-hidden  relative isolate">
              <img
                src={Hero}
                alt="Team at work"
                className="w-full h-full "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce">
              <p className="text-3xl font-bold text-brand-600">100+</p>
              <p className="text-sm text-slate-500 font-medium">Projects Delivered</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
              World-class IT Solutions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              From ideation to deployment, we provide comprehensive technical services that scale
              with your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = getServiceIcon(service.icon);
              return (
                <div
                  key={service.id}
                  className="reveal p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-brand-600/50 dark:hover:border-brand-500/50 transition-all group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center mb-6 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="text-brand-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 dark:text-white leading-tight">
                Why Leading Enterprises <br />
                Choose PAISOFT IT
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 p-3 bg-brand-600 text-white rounded-lg h-fit">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold dark:text-white mb-2">
                      Uncompromising Security
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Security is at our core. We build enterprise systems with industry-leading
                      protection standards.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 p-3 bg-brand-600 text-white rounded-lg h-fit">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold dark:text-white mb-2">High Performance</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Our code is optimized for speed and efficiency, ensuring minimal latency even
                      under high load.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 reveal">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                <p className="text-4xl font-bold text-brand-600 mb-2">99%</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Client Satisfaction
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 text-center mt-8">
                <p className="text-4xl font-bold text-brand-600 mb-2">24/7</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Technical Support
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                <p className="text-4xl font-bold text-brand-600 mb-2">15+</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Core Experts
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 text-center mt-8">
                <p className="text-4xl font-bold text-brand-600 mb-2">10M+</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Lines of Code
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-600">
        <div className="max-w-7xl mx-auto px-6 text-center reveal">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
            Ready to transform your business?
          </h2>
          <p className="text-brand-100 text-lg mb-12 max-w-2xl mx-auto">
            Our consultants are ready to discuss your project. Let&apos;s engineer something great
            together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-brand-600 hover:bg-slate-50 rounded-xl font-bold text-lg shadow-xl shadow-black/10 transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
