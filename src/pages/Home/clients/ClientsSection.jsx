import React from 'react';
import { clients } from '../../../data/clients';
import SectionHeader from '../../../components/shared/SectionHeader/SectionHeader';

const ClientCard = ({ client }) => (
  <div className="clients-marquee-card">
    <span className="clients-marquee-mark">{client.initials}</span>
    <span className="clients-marquee-name">{client.name}</span>
  </div>
);

const MarqueeRow = ({ items, reverse = false }) => {
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
    <section className="section-shell section-alt overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <SectionHeader
          label="Our Clients"
          title="Brands we've built for"
          subtitle="Real projects, real businesses — from completed stores to systems still in development."
        />
      </div>

      <div className="clients-marquee reveal">
        <MarqueeRow items={clients} />
        <MarqueeRow items={[...clients].reverse()} reverse />
      </div>
    </section>
  );
};

export default ClientsSection;
