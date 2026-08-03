import React from 'react';
import { Link } from 'react-router';
import { siteConfig } from '../../config/site';
import PageHero from '../../components/shared/PageHero/PageHero';

const sections = [
  {
    title: '1. Information We Collect',
    body: 'When you contact us through our website, we may collect your name, email address, phone number, company name, and the content of your message. We also collect standard technical data such as browser type and pages visited to improve our website performance.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'We use the information you provide solely to respond to your inquiries, deliver our software development services, send project-related updates, and improve our website. We do not sell or rent your personal information to third parties.',
  },
  {
    title: '3. Data Storage & Security',
    body: 'PAISOFT IT implements industry-standard security measures to protect your data. Contact form submissions are transmitted securely and stored only as long as necessary to fulfill the purpose for which they were collected.',
  },
  {
    title: '4. Third-Party Services',
    body: 'Our website may use third-party tools for form delivery and analytics. These services process data according to their own privacy policies. We only work with providers that maintain adequate data protection standards.',
  },
  {
    title: '5. Cookies',
    body: 'We use essential cookies only for core website functionality. We do not use cookies for advertising or tracking purposes without your consent.',
  },
  {
    title: '6. Your Rights',
    body: 'You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, contact us at the email address below. We will respond within a reasonable timeframe.',
  },
  {
    title: '7. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website after changes constitutes acceptance of the updated policy.',
  },
];

const PrivacyPolicy = () => {
  return (
    <div>
      <PageHero
        label="Legal"
        title={
          <>
            <span className="text-blue-300">Privacy</span> Policy
          </>
        }
        subtitle={`Effective date: ${new Date().getFullYear()}. This policy explains how ${siteConfig.name} collects, uses, and protects your information when you visit paisoftit.com.`}
      />

      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title} className="reveal">
                <h2 className="text-h3 text-slate-900 dark:text-white mb-3">{section.title}</h2>
                <p className="text-body text-slate-600 dark:text-slate-400">{section.body}</p>
              </section>
            ))}

            <section className="reveal card-highlight rounded-2xl p-8">
              <h2 className="text-h3 text-slate-900 dark:text-white mb-3">8. Contact Us</h2>
              <p className="text-body text-slate-600 dark:text-slate-400 mb-4">
                For privacy-related questions or data requests, reach us at:
              </p>
              <ul className="space-y-2 text-body">
                <li>
                  <span className="font-medium text-slate-900 dark:text-white">Email: </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-brand-600 hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <span className="font-medium text-slate-900 dark:text-white">Phone: </span>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-brand-600 hover:underline"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="font-medium text-slate-900 dark:text-white">Address: </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {siteConfig.contact.address}
                  </span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-block mt-6 text-brand-600 font-medium hover:underline"
              >
                Send us a message →
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
