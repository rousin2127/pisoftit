import React from 'react';

const SectionHeader = ({
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClass =
    align === 'left' ? 'text-left max-w-2xl' : 'text-center max-w-2xl mx-auto';

  return (
    <div className={`reveal mb-12 lg:mb-14 ${alignClass} ${className}`}>
      {label && <p className="section-label mb-3">{label}</p>}
      <h2 className="text-h2 text-slate-800 mb-4">{title}</h2>
      {subtitle && <p className="text-body text-slate-600">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
