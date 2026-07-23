import React from 'react';
import { clients } from '../../../data/clients';

const ClientCard = ({ client }) => (
  <div className="clients-marquee-card">
    <span className="clients-marquee-mark">{client.initials}</span>
    <span className="clients-marquee-name">{client.name}</span>
  </div>
);

const MarqueeRow = ({ items, reverse = false }) => {
  // Pad so the row looks full, then duplicate once for a seamless loop
  const padded = [...items, ...items, ...items, ...items];
  const loop = [...padded, ...padded];

  return (
    <div className={`clients-marquee-row ${reverse ? 'is-reverse' : ''}`}>
      <div className="clients-marquee-track">
        {loop.map((client, index) => (
          <ClientCard key={`${client.id}-${reverse ? 'b' : 'a'}-${index}`} client={client} />
        ))}
      </div>
    </div>
  );
};

const ClientsSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10 lg:mb-12">
        <div className="text-center reveal">
          <p className="section-label mb-3">Trusted Partnerships</p>
          <h2 className="text-h2 text-slate-900 dark:text-white mb-4">Our Clients</h2>
          <p className="text-body text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Brands we partner with to design, build, and ship digital products.
          </p>
        </div>
      </div>

      <div className="clients-marquee reveal">
        <MarqueeRow items={clients} />
        <MarqueeRow items={[...clients].reverse()} reverse />
      </div>
    </section>
  );
};

export default ClientsSection;
