import React from 'react';
import SectionHeader from '../../../components/shared/SectionHeader/SectionHeader';
import securityIcon from '../../../assets/security.png';
import scrutinyIcon from '../../../assets/scrutiny.png';
import telephoneIcon from '../../../assets/telephone.png';

const AboutUs = () => {
  const features = [
    {
      id: 1,
      title: 'Built to Last',
      description:
        'We write clean, secure code so your software stays stable long after launch — not just on day one.',
      icon: securityIcon,
      isFeatured: false,
    },
    {
      id: 2,
      title: 'Grows With You',
      description:
        'Start small or go big. We design systems that can grow as your business expands.',
      icon: scrutinyIcon,
      isFeatured: true,
    },
    {
      id: 3,
      title: 'We Stay Available',
      description:
        'Questions after launch? Need a fix or update? Our team is here when you need us.',
      icon: telephoneIcon,
      isFeatured: false,
    },
  ];

  return (
    <section className="section-shell section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Why Work With Us"
          title="A team that cares about your outcome"
          subtitle="We don't just deliver code — we help you solve real business problems with software that works."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {features.map((item, index) => (
              <div
                key={item.id}
                className={`reveal card-stripe p-6 flex flex-col ${
                  item.isFeatured ? 'card-featured bg-slate-900 text-white' : ''
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`rounded-2xl flex items-center justify-center shrink-0 overflow-hidden ${
                      item.isFeatured
                        ? 'w-16 h-16 bg-white shadow-md ring-2 ring-white/30'
                        : 'w-14 h-14 bg-brand-50'
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className={`object-contain ${
                        item.isFeatured ? 'w-12 h-12' : 'w-10 h-10'
                      }`}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-h3">{item.title}</h3>
                </div>
                <div
                  className={`divider-accent mb-4 ${item.isFeatured ? 'bg-white/20' : ''}`}
                />
                <p className="text-body-sm">{item.description}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
