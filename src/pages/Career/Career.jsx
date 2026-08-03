import React from 'react';
import { Link } from 'react-router';
import { Mail, MapPin } from 'lucide-react';
import PageHero from '../../components/shared/PageHero/PageHero';
import { siteConfig } from '../../config/site';

const openings = [
  {
    id: 1,
    title: 'Frontend Developer',
    type: 'Full-time',
    location: 'Dhaka / Hybrid',
  },
  {
    id: 2,
    title: 'Backend Developer',
    type: 'Full-time',
    location: 'Dhaka / Hybrid',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Dhaka',
  },
];

const Career = () => {
  return (
    <div>
      <PageHero
        label="Join the Team"
        title={
          <>
            Careers at <span className="text-blue-300">PAISOFT IT</span>
          </>
        }
        subtitle="Build reliable software with a team that values craftsmanship, ownership, and long-term client partnerships."
      />

      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 reveal">
            <h2 className="text-h2 text-slate-900 dark:text-white mb-4">
              <span className="gradient-text">Open Positions</span>
            </h2>
            <p className="text-body text-slate-600 dark:text-slate-400">
              Interested in joining us? Browse current openings or send your CV to{' '}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-brand-600 font-medium hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>

          <div className="space-y-4 mb-16">
            {openings.map((job) => (
              <div
                key={job.id}
                className="reveal card-highlight flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl p-6"
              >
                <div>
                  <h3 className="text-h3 text-slate-900 dark:text-white mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                    <span>{job.type}</span>
                    <span className="text-slate-300 dark:text-slate-700">·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                  </div>
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Application: ${job.title}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Apply
                </a>
              </div>
            ))}
          </div>

          <div className="text-center reveal card-highlight rounded-2xl py-12 px-6">
            <h2 className="text-h2 text-slate-900 dark:text-white mb-4">
              Don&apos;t see the <span className="gradient-text">right role</span>?
            </h2>
            <p className="text-body text-slate-600 dark:text-slate-400 mb-6 max-w-xl mx-auto">
              We are always open to talented people. Send your portfolio and tell us how you want to
              contribute.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
