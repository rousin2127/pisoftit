import React from 'react';
import { useLoaderData, Link } from 'react-router';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { FiArrowRight } from 'react-icons/fi';

const CaseStudy = () => {
    const studies = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
            <div className="mb-14 space-y-4 max-w-3xl">
                <span className="inline-block bg-[#e0f0ff] text-[#0060c1] text-xs font-semibold px-4 py-1.5 rounded-full">
                    Success Stories
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                    Client <span className="text-blue-600">Case Studies</span>
                </h1>
                <p className="text-slate-600 text-lg">
                    Real outcomes from web, e-commerce, POS, and AI projects we have delivered for our partners.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {studies.map((study) => (
                    <div
                        key={study.id}
                        className="card bg-base-100 shadow-xl border border-base-200"
                    >
                        <div className="card-body">
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                {study.industry}
                            </span>
                            <h2 className="card-title text-slate-900 mt-1">{study.title}</h2>
                            <p className="text-slate-600">{study.summary}</p>

                            <div className="mt-4 space-y-2">
                                {study.results.map((result) => (
                                    <div key={result} className="flex items-center gap-2 text-sm text-slate-700">
                                        <IoIosCheckmarkCircleOutline className="text-blue-600 text-lg shrink-0" />
                                        {result}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                                {study.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="badge badge-outline badge-sm text-slate-600"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16 bg-slate-50 rounded-3xl py-12 px-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Have a similar project in mind?</h2>
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg transition"
                >
                    Start a Consultation <FiArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default CaseStudy;
