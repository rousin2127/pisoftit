import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; // Assumes you have react-icons installed

const Hero = () => {
  return (
    <>

      <style>
  {`
    @keyframes tennisBounce {
      /* 0% থেকে 40% পর্যন্ত কার্ডটি মাটিতে স্থির থাকবে (১ সেকেন্ডের বিরতি/Pause) */
      0%,  100% {
        transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      
      /* 70% সময়ে কার্ডটি সর্বোচ্চ ওপরে উঠবে এবং ধীরগতিতে ভাসবে */
      60% {
        transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }

    .animate-jump-bounce {
      animation: tennisBounce 3s infinite;
    }
  `}
</style>

    
      <section className="  py-16 lg:py-24 overflow-hidden relative bg-slate-50">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          

          <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            
           
            <span className="inline-block bg-[#e0f0ff] text-[#0060c1] text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              Leading IT Innovation
            </span>
            
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#101828] leading-[1.1] mb-6">
              Engineering <span className="text-[#0060c1]">Reliable</span> Software for Businesses
            </h1>
            
           
            <p className="text-base md:text-lg text-[#667085] leading-relaxed mb-10 max-w-2xl">
              We specialize in high-performance web applications, machine learning projects, and enterprise POS solutions that empower modern enterprises.
            </p>
            
           
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-[#0060c1] hover:bg-[#0050a1] text-white font-semibold px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 text-base transition duration-150">
                Our Services <FiArrowRight className="text-lg" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-[#101828] font-semibold px-8 py-3.5 rounded-lg border border-gray-300 text-base transition duration-150 shadow-sm">
                Get Started
              </button>
            </div>
          </div>
          
          {/* RIGHT IMAGE COLUMN */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative mb-12 lg:mb-0 ">
           
            <div className="relative w-full h-3/4 max-w-[580px] lg:w-auto aspect-[10/11] rounded-3xl bg-[#dfe7f2] shadow-xl overflow-hidden border border-[#cfe0f2]">
            <img src="https://picsum.photos/800/800?grayscale" alt="Team at work" class="w-full h-full object-cover opacity-60 mix-blend-overlay"></img>
            </div>

            
          </div>
          
        </div>
        <div className="absolute bottom-15 left-6 sm:left-12 lg:left-160 bg-white px-8 py-6 rounded-2xl shadow-xl border border-gray-100 min-w-[200px] animate-jump-bounce z-50">
              <div className="text-4xl font-extrabold text-[#0060c1] mb-1">
                100+
              </div>
              <div className="text-sm font-medium text-[#667085] tracking-tight">
                Projects Delivered
              </div>
            </div>
      </section>
    </>
  );
};

export default Hero;