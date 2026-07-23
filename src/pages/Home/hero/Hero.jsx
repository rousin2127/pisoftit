import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import heroImg from '../../../assets/hero1.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[72vh] lg:min-h-[78vh] flex items-end lg:items-center overflow-hidden">
      {/* Full-bleed photo */}
      <img
        src={heroImg}
        alt="PAISOFT IT team collaborating in the office"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
      />

      {/* Soft realistic vignette — keeps photo visible, text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/40 to-slate-950/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-slate-950/20" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="max-w-xl reveal-left">
          <p className="text-sm font-medium tracking-wide text-white/80 mb-4">
            PAISOFT IT
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            Reliable software, built by a real engineering team
          </h1>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8 max-w-md">
            Web apps, e-commerce, and business systems — designed, developed, and delivered from
            Dhaka.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold rounded-md transition-colors"
            >
              Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-white/40 text-white text-sm font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
