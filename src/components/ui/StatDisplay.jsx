import React from 'react';
import useCountUp from '../../hooks/useCountUp';

const StatDisplay = ({ value, label, className = '', animate = true }) => {
  const { ref, display } = useCountUp(animate ? value : '0');

  return (
    <div ref={ref} className={`stat-card bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 text-center ${className}`}>
      <p className="text-2xl sm:text-3xl font-bold text-brand-600 mb-2">{animate ? display : value}</p>
      <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</p>
    </div>
  );
};

export default StatDisplay;
