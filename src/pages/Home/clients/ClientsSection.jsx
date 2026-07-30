import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Quote } from 'lucide-react';
import { clientShowcases } from '../../../data/clients';
import SectionHeader from '../../../components/shared/SectionHeader/SectionHeader';

const ClientsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeClient = clientShowcases[activeIndex];

  return (
    <section className="section-shell section-alt relative overflow-hidden py-14 lg:py-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#ffffff',
          backgroundImage:
            'radial-gradient(circle, rgba(148, 163, 184, 0.55) 1.2px, transparent 1.2px)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="Our Clients"
          title="Brands we've built for"
          subtitle="Real projects, real businesses — from completed stores to systems still in development."
          className="max-w-7xl"
          subtitleClassName="max-w-none text-lg leading-8 text-slate-500"
        />

        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-8">
          {clientShowcases.map((client, index) => (
            <button
              key={client.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`client-tab-card ${activeIndex === index ? 'is-active' : ''}`}
              aria-pressed={activeIndex === index}
              style={
                activeIndex === index
                  ? { borderColor: client.brandColor, color: client.brandColor }
                  : { color: client.brandColor }
              }
            >
              <span className="text-sm sm:text-base font-bold tracking-tight">{client.name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-6 items-stretch">
          <div className="client-quote-card reveal h-full flex flex-col justify-between">
            <Quote className=" w-15 h-15 text-slate-300 client-quote-icon client-quote-icon-bottom" strokeWidth={1.5} />

            <div className="relative z-10">
              <Quote
                className="w-15 h-15 text-slate-300 mb-4"
                strokeWidth={1.5}
              />
              <p className="text-lg sm:text-xl leading-8 text-slate-600 pl-4 border-l-2 border-slate-300">
                {activeClient.quote}
              </p>
            </div>

            <p
              className="mt-6 text-base sm:text-lg font-bold relative z-10"
              style={{ color: activeClient.brandColor }}
            >
              {activeClient.name}
            </p>
          </div>

          <div className="flex flex-col gap-4 reveal h-full">
            <div className="client-tech-card flex-1 flex items-center justify-center min-h-[280px]">
              <img
                src={activeClient.techStack}
                alt={`${activeClient.name} technology stack`}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

            <Link
              to={`/case-studies/${activeClient.caseStudyId}`}
              className="client-case-link group shrink-0"
            >
              Read Case study
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
