import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImg from '../../../assets/hero1.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="PAISOFT IT team collaborating in the office"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-slate-900/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-7xl reveal-left">

          <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-bold text-white leading-[1.12] mb-5">
            We build software that helps your business run better
          </h1>

          <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8 max-w-lg">
            From e-commerce stores to custom business systems — we design, develop, and support
            software with care, clarity, and a team that stays with you.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/services" className="btn-primary">
              Explore Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
