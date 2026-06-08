import { Shield, Zap } from 'lucide-react';
import React from 'react';

const Support = () => {
    return (
              <section className="py-24 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-6xl mx-auto px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="reveal">
                      <h2 className="text-3xl lg:text-4xl font-bold mb-6 dark:text-white leading-tight">
                        Why Leading Enterprises <br />
                        Choose PAISOFT IT
                      </h2>
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="shrink-0 p-3 bg-brand-600 text-white rounded-lg h-fit">
                            <Shield className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold dark:text-white mb-2">
                              Uncompromising Security
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400">
                              Security is at our core. We build enterprise systems with industry-leading
                              protection standards.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="shrink-0 p-3 bg-brand-600 text-white rounded-lg h-fit">
                            <Zap className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold dark:text-white mb-2">High Performance</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                              Our code is optimized for speed and efficiency, ensuring minimal latency even
                              under high load.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
        
                    <div className="grid grid-cols-2 gap-4 reveal">
                      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                        <p className="text-4xl font-bold text-brand-600 mb-2">99%</p>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                          Client Satisfaction
                        </p>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 text-center mt-8">
                        <p className="text-4xl font-bold text-brand-600 mb-2">24/7</p>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                          Technical Support
                        </p>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                        <p className="text-4xl font-bold text-brand-600 mb-2">15+</p>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                          Core Experts
                        </p>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 text-center mt-8">
                        <p className="text-4xl font-bold text-brand-600 mb-2">10M+</p>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                          Lines of Code
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    );
};

export default Support;