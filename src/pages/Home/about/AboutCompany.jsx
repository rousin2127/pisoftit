import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
// আপনার সঠিক ইমেজ পাথ অনুযায়ী এগুলো ইমপোর্ট করে নেবেন
import TeamImage from '../../../assets/team.jpg'; 
import { Link } from 'react-router';

const AboutCompany = () => {
  const points = [
    'Customized Strategy Solutions',
    'Industry-Specific Insights',
    'Startup & Enterprise Support',
    'Global Expansion Planning'
  ];

  return (
    <section className="bg-white dark:bg-slate-950 py-20  overflow-hidden">
      <div className="max-w-6xl  mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        
        <div className="lg:col-span-6 space-y-6">
          <span className="text-sm font-bold uppercase tracking-wider text-blue-600 block">
            ABOUT OUR COMPANY
          </span>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-[1.15]">
            Transforming Ideas Into <br />
            <span className="text-[#0A1145] dark:text-blue-400">Scalable Digital Solutions</span>
          </h2>
          
          <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-xl">
            Position your agency as the bridge between a client's big-picture vision and 
            achievable action plans. data-driven strategies and your track.
          </p>

          {/* ২ কলামের বুলেট পয়েন্ট লিস্ট */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-sm font-semibold text-[#0A1145] dark:text-slate-300">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Discover More বাটন */}
          <div className="pt-4">
            <Link to={'contact'} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors group">
              Discover More 
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        
        <div className="lg:col-span-6 relative pt-10 lg:pt-0 pb-16 lg:pb-0">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
            <img 
              src={TeamImage} 
              alt="Team discussing digital solutions" 
              className="w-full h-full object-cover"
            />
          </div>

          
          <div className="absolute -bottom-15 left-16 sm:-left-10 bg-blue-600 text-white p-8 rounded-xl shadow-xl  sm:w-[320px] space-y-4">
            
            <div className="absolute top-6 right-6 opacity-30 grid grid-cols-2 gap-1">
              <div className="w-2 h-2 border border-white rounded-sm"></div>
              <div className="w-2 h-2 border border-white rounded-sm"></div>
              <div className="w-2 h-2 border border-white rounded-sm"></div>
              <div className="w-2 h-2 border border-white rounded-sm"></div>
            </div>

            <div className="space-y-1">
              <p className="text-4xl sm:text-5xl font-bold tracking-tight">10+</p>
              <p className="text-sm font-medium text-blue-100 leading-snug">
                Years of experience on
              </p>
            </div>

            <div className="pt-2">
              <Link to={'contact'} className="inline-flex items-center gap-1.5 bg-white text-blue-600 hover:bg-blue-50 text-xs font-bold px-4 py-2 rounded transition-colors group">
                Let's Talk
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCompany;