import React, { useCallback, useEffect } from 'react';
import { industries } from '../../../data/industries';
import SectionHeader from '../../../components/shared/SectionHeader/SectionHeader';

const IndustryFootprint = () => {
  const initParticles = useCallback(() => {
    if (!window.particlesJS) return;

    const oldCanvas = document.querySelector('#industry-particles-js canvas');
    if (oldCanvas) oldCanvas.remove();

    if (window.pJSDom?.length > 0) {
      window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
      window.pJSDom = [];
    }

    window.particlesJS('industry-particles-js', {
      particles: {
        number: { value: 140, density: { enable: true, value_area: 800 } },
        color: { value: '#0277bd' },
        shape: { type: 'circle', stroke: { width: 0.5, color: '#039be5' } },
        opacity: {
          value: 0.7,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.3 },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: true, speed: 2, size_min: 1 },
        },
        line_linked: {
          enable: true,
          distance: 160,
          color: '#0288d1',
          opacity: 0.4,
          width: 1.2,
        },
        move: { enable: true, speed: 2, random: true, out_mode: 'bounce' },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true,
        },
        modes: {
          grab: { distance: 220, line_linked: { opacity: 0.8 } },
          push: { particles_nb: 4 },
          repulse: { distance: 180, duration: 0.4 },
        },
      },
      retina_detect: true,
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const existingScript = document.querySelector(
      'script[src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"]'
    );

    if (existingScript && window.particlesJS) {
      initParticles();
      return undefined;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    script.onload = initParticles;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, [initParticles]);

  return (
    <section className="section-white py-14 lg:py-16 relative overflow-hidden">
      <div
        id="industry-particles-js"
        className="absolute inset-0 z-0 transition-colors duration-500 bg-gradient-to-tr from-[#e3f2fd] via-[#90caf9] to-[#64b5f6]"
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="Industries We Serve"
          title="Software for every kind of business"
          subtitle="At PaiSoft IT, we specialize in providing industry-standard tailored software solutions designed to meet the unique needs of diverse sectors. Our expert team combines deep industry knowledge with cutting-edge technology to deliver customized applications that enhance efficiency, streamline operations, and drive innovation. We are committed to helping businesses succeed in today’s dynamic landscape."
          className="max-w-5xl"
          subtitleClassName="max-w-none text-lg leading-8 text-slate-500"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className="reveal card-highlight industry-card group flex flex-col items-center text-center gap-4 p-6 sm:p-7"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-50 flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                <img
                  src={industry.icon}
                  alt=""
                  className="w-11 h-11 sm:w-14 sm:h-14 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryFootprint;
