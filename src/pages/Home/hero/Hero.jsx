import React from 'react';
import HeroIm from '../../../assets/banner_0004.jpg';
import Herobg from '../../../assets/banner_bg.jpg';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="relative flex items-center pb-12 lg:pb-16 overflow-hidden"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute " />

      <div className="max-w-6xl mx-auto px-6 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        <div className="reveal-left">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wide text-brand-600 bg-brand-100/80 dark:bg-brand-900/30 rounded-full">
            Leading IT Innovation
          </span>
          <h1 className="text-h1 text-slate-900 dark:text-white mb-4">
            Engineering <span className="text-brand-600">Reliable</span> Software for Businesses
          </h1>
          <p className="text-body text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
            We specialize in high-performance web applications, machine learning projects, and
            enterprise POS solutions that empower modern enterprises.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/services"
              className="btn-stripe px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold"
            >
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="btn-stripe-outline px-6 py-3 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-semibold bg-white/60 dark:bg-slate-900/60"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="relative reveal-right">
          <div className="img-zoom rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-slate-700/50">
            <img src={HeroIm} alt="PAISOFT IT team at work" className="w-full h-full object-cover" />
          </div>
          <div className="float-badge absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-5 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
            <p className="text-2xl font-bold text-brand-600">100+</p>
            <p className="text-caption text-slate-500 font-medium">Projects Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
