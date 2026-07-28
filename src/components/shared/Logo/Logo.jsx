import React from 'react';
import logo3 from '../../../assets/3.png';

const Logo = ({ light = false, compact = false }) => {
  return (
    <div className="flex items-center gap-2.5">
      <div>
        <img
          className={`${compact ? 'w-9 h-9' : 'w-10 h-10'} object-contain`}
          src={logo3}
          alt="PAISOFT IT"
        />
      </div>
      <div>
        <h2
          className={`font-bold ${compact ? 'text-lg' : 'text-2xl'} ${
            light ? 'text-white' : 'text-slate-800'
          }`}
        >
          Paisoft IT
        </h2>
      </div>
    </div>
  );
};

export default Logo;
