import React from 'react';
import logo3 from '../../../assets/3.png';

const Logo = ({ light = false, compact = false }) => {
  return (
    <div className="flex items-center gap-3">
      <div>
        <img
          className={`${compact ? 'w-15 h-15' : 'w-12 h-12'} object-contain`}
          src={logo3}
          alt="PAISOFT IT"
        />
      </div>
      <div className="leading-tight">
        <h2
          className={`font-extrabold ${compact ? 'text-3xl' : 'text-2xl'} ${
            light ? 'text-white' : 'text-slate-800'
          }`}
        >
          PAISOFT IT
        </h2>
        <p
          className={`text-[12px] sm:text-xs font-medium tracking-wide ${
            light ? 'text-gray-200' : 'text-gray-500'
          }`}
        >
          Innovate With Intelligence
        </p>
      </div>
    </div>
  );
};

export default Logo;
