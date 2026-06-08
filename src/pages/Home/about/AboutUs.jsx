import React from 'react';
import { ShieldCheck, TrendingUp, Headphones } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      id: 1,
      title: 'Secure Systems',
      description: 'Provide our people with a meaningful expert that helps and guide growth.',
      icon: ShieldCheck,
      isFeatured: false,
    },
    {
      id: 2,
      title: 'Scalable Solutions',
      description: 'Provide our people with a meaningful expert that helps and guide growth.',
      icon: TrendingUp,
      isFeatured: true, // এটি মাঝখানের ডার্ক কার্ডটি অ্যাক্টিভেট করবে
    },
    {
      id: 3,
      title: '24/7 Expert Support',
      description: 'Provide our people with a meaningful expert that helps and guide growth.',
      icon: Headphones,
      isFeatured: false,
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`rounded-xl p-8 transition-all duration-300 flex flex-col justify-between ${
                item.isFeatured
                  ? 'bg-[#050C44] text-white shadow-xl'
                  : 'bg-[#F6F9FF] dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white'
              }`}
            >
              <div>
                {/* আইকন কন্টেইনার ও টাইটেল */}
                <div className="flex items-center gap-5 mb-6">
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center shrink-0 ${
                      item.isFeatured
                        ? 'bg-[#1E6BFF] text-white'
                        : 'bg-[#EEF4FF] dark:bg-slate-800 text-[#1E6BFF]'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* ডিভাইডার লাইন */}
                <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800 relative mb-6">
                  <div className="absolute top-0 left-0 w-12 h-[2px] bg-[#1E6BFF]" />
                </div>

                {/* ডেসক্রিপশন */}
                <p
                  className={`text-base leading-relaxed ${
                    item.isFeatured ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;