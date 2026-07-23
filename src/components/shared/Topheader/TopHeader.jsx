import React from 'react';
import { Link } from 'react-router';
import { FaPhoneAlt, FaEnvelope, FaAngleRight } from 'react-icons/fa';
import { siteConfig } from '../../../config/site';

const TopHeader = () => {
  return (
    <div className="bg-brand-700 text-white/95 py-2 px-4 flex flex-col sm:flex-row justify-between items-center text-sm gap-2 sm:gap-0">
      <p className="tracking-wide text-center sm:text-left flex items-center gap-1">
        <FaAngleRight className="opacity-70" />
        Have a project in mind?{' '}
        <Link to="/contact" className="underline hover:text-white transition-colors font-medium">
          Contact us
        </Link>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <FaPhoneAlt className="text-xs opacity-80" />
          <span>{siteConfig.contact.phoneDisplay}</span>
        </a>

        <span className="hidden sm:inline text-white/30">|</span>

        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <FaEnvelope className="text-sm opacity-80" />
          <span>{siteConfig.contact.email}</span>
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
