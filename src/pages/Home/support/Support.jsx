import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react'; // React Icons thakle oikhan thekeo import korte paren

const Support = () => {
    return (
        <section className="bg-slate-50 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* LEFT SIDE: Text Content */}
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Why Leading Enterprises <br /> Choose PAISOFT IT
                    </h2>
                    
                    <div className="space-y-6">
                        {/* Security Feature */}
                        <div className="flex gap-4 items-start">
                            <div className="p-3 bg-blue-600 text-white rounded-xl shadow-md shrink-0">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">Uncompromising Security</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Security is at our core. We build enterprise systems with industry-leading protection standards.
                                </p>
                            </div>
                        </div>

                        {/* Performance Feature */}
                        <div className="flex gap-4 items-start">
                            <div className="p-3 bg-blue-600 text-white rounded-xl shadow-md shrink-0">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">High Performance</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Our code is optimized for speed and efficiency, ensuring minimal latency even under high load.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Stat Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center min-h-[180px]">
                        <span className="text-4xl font-extrabold text-blue-600 mb-2">99%</span>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Client Satisfaction</span>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center  max-h-[140px] translate-y-10">
                        <span className="text-4xl font-extrabold text-blue-600 mb-2">24/7</span>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Technical Support</span>
                    </div>

                    {/* Stat Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center min-h-[180px]">
                        <span className="text-4xl font-extrabold text-blue-600 mb-2">15+</span>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Core Experts</span>
                    </div>

                    {/* Stat Card 4 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center max-h-[140px] translate-y-10">
                        <span className="text-4xl font-extrabold text-blue-600 mb-2">10M+</span>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lines of Code</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Support;