import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import slideOneImg from '../../../assets/h1.png';
import slideTwoImg from '../../../assets/h3.png';

const slides = [
  {
    id: 1,
    image: slideOneImg,
    heading: (
      <>
        We build software that helps your business{' '}
        <span className="gradient-text">run better</span>
      </>
    ),
    points: [
      'Custom web & mobile apps tailored to your workflow',
      'Secure, scalable systems built for long-term growth',
      'Clear communication from kickoff to ongoing support',
    ],
    cta: { label: 'Explore Services', to: '/services' },
  },
  {
    id: 2,
    image: slideTwoImg,
    heading: (
      <>
        <span className="gradient-text">Next-Gen</span> Software Solutions for Enterprises &amp;
        Government
      </>
    ),
    points: [
      'E-commerce, POS, ERP, and corporate websites',
      'Modern UI with performance-focused engineering',
      'A team that stays with you after go-live',
    ],
    cta: { label: "Let's Talk", to: '/contact' },
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setActive((prev) => (prev + 1) % slides.length);

  const slide = slides[active];

  return (
    <section className="relative overflow-hidden bg-[#e8f4fc]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 w-80 h-80 rounded-full bg-blue-200/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center min-h-[520px]">
          <div key={`copy-${slide.id}`} className="space-y-6">
            <h1
              className="hero-copy-item text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-800 leading-[1.15]"
              style={{ animationDelay: '0.55s' }}
            >
              {slide.heading}
            </h1>

            <ul className="space-y-3">
              {slide.points.map((point, index) => (
                <li
                  key={point}
                  className="hero-copy-item text-base sm:text-lg font-semibold text-brand-600 leading-relaxed"
                  style={{ animationDelay: `${0.95 + index * 0.35}s` }}
                >
                  {point}
                </li>
              ))}
            </ul>

            <div className="pt-2 hero-copy-item" style={{ animationDelay: '2.1s' }}>
              <Link to={slide.cta.to} className="btn-primary">
                {slide.cta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div
            key={`img-${slide.id}`}
            className="relative flex items-center justify-center animate-[heroImageIn_0.7s_ease_forwards]"
          >
            <div className="absolute inset-8 rounded-full bg-sky-300/30 blur-2xl" />
            <img
              src={slide.image}
              alt=""
              className="relative z-10 w-full max-w-xl mx-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-600 transition flex items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${
                  active === index ? 'w-8 bg-brand-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-600 transition flex items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
