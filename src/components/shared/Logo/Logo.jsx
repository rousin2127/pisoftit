import React from 'react';
import logo3 from '../../../assets/3.png';

const Logo = ({ light = false }) => {
  return (
    <div className="flex items-center gap-3">
      <div>
        <img className="w-10 h-10 object-contain" src={logo3} alt="PAISOFT IT" />
      </div>
      <div>
        <h2
          className={`font-bold text-2xl ${
            light ? 'text-white' : 'text-slate-800 dark:text-slate-100'
          }`}
        >
          Paisoft IT
        </h2>
      </div>
    </div>
  );
};

export default Logo;
