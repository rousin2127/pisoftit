import React from 'react';
import { Link } from 'react-router';
import { FaPhoneAlt, FaEnvelope, FaArrowRight, FaAngleRight } from 'react-icons/fa';
import { siteConfig } from '../../../config/site';

const TopHeader = () => {
  return (
    <div className="bg-[#1053F3] text-white py-2 px-4 flex flex-col sm:flex-row justify-between items-center text-sm gap-2 sm:gap-0">
      <p className="tracking-wide text-center sm:text-left flex items-center">
        <FaAngleRight />
        Have a project in mind?{' '}
        <Link to="/contact" className="underline hover:text-blue-100 transition-colors font-medium">
          Contact us
        </Link>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex items-center gap-2 hover:text-blue-100 transition-colors"
        >
          <FaPhoneAlt className="text-xs" />
          <span>{siteConfig.contact.phoneDisplay}</span>
        </a>

        <span className="hidden sm:inline text-white/40">|</span>

        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="flex items-center gap-2 hover:text-blue-100 transition-colors"
        >
          <FaEnvelope className="text-sm" />
          <span>{siteConfig.contact.email}</span>
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
