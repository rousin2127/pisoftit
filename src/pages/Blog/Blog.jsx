import React from 'react';
import { Link } from 'react-router';
import PageHero from '../../components/shared/PageHero/PageHero';

const posts = [
  {
    id: 1,
    title: (
      <>
        Building <span className="gradient-text">Reliable</span> Web Applications
      </>
    ),
    date: 'July 2026',
    excerpt:
      'How we approach architecture, security, and performance when delivering production-ready web apps for growing businesses.',
  },
  {
    id: 2,
    title: (
      <>
        E-commerce Trends for <span className="gradient-text">Bangladesh Brands</span>
      </>
    ),
    date: 'June 2026',
    excerpt:
      'Practical insights on storefront UX, checkout conversion, and inventory workflows for local retail brands going online.',
  },
  {
    id: 3,
    title: (
      <>
        Why <span className="gradient-text">Custom Software</span> Beats One-Size Templates
      </>
    ),
    date: 'May 2026',
    excerpt:
      'When off-the-shelf tools fall short — and how tailored software creates long-term operational advantage.',
  },
];

const Blog = () => {
  return (
    <div>
      <PageHero
        label="Insights"
        title={
          <>
            Our <span className="text-blue-300">Blog</span>
          </>
        }
        subtitle="Articles and notes from the PAISOFT IT team on software engineering, product delivery, and digital growth."
      />

      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="reveal card-highlight border rounded-2xl p-6 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                {post.date}
              </p>
              <h2 className="text-h3 text-slate-900 dark:text-white mb-3">{post.title}</h2>
              <p className="text-body-sm text-slate-600 dark:text-slate-400 mb-4">{post.excerpt}</p>
              <Link to="/contact" className="text-sm font-semibold text-brand-600 hover:underline">
                Talk to our team →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
