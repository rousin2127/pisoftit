import React from 'react';
import HeroIm from '../../../assets/banner_0004.jpg';
import Herobg from '../../../assets/banner_bg.jpg';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        
            <section className="relative  flex items-center pt-20 overflow-hidden"
                style={{
                    backgroundImage: `url(${Herobg})`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white dark:from-slate-950 dark:to-slate-900 -z-10" />
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />

                <div className="max-w-6xl mx-auto pt-15 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="reveal">
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-brand-600 bg-brand-100 dark:bg-brand-900/30 rounded-full">
                            Leading IT Innovation
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-6">
                            Engineering <span className="text-brand-600">Reliable</span> Software for
                            Businesses
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
                            We specialize in high-performance web applications, machine learning projects, and
                            enterprise POS solutions that empower modern enterprises.
                        </p>
                        <div className="flex flex-wrap gap-4 my-5">
                            <Link
                                to="/services"
                                className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold shadow-lg shadow-brand-600/20 flex items-center gap-2 group transition-all"
                            >
                                Our Services
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-4 border border-slate-200 dark:border-slate-700 hover:border-brand-600 dark:hover:border-brand-500 rounded-xl font-semibold text-slate-900 dark:text-white transition-all"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    <div className="relative  lg:block">
                        <div className="rounded-xl overflow-hidden  relative isolate">
                            <img
                                src={HeroIm}
                                alt="Team at work"
                                className="w-full h-full "
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce">
                            <p className="text-3xl font-bold text-brand-600">100+</p>
                            <p className="text-sm text-slate-500 font-medium">Projects Delivered</p>
                        </div>
                    </div>
                </div>
            </section>
        
    );
};

export default Hero;