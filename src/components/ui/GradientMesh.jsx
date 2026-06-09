import React from 'react';

const GradientMesh = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`} aria-hidden>
    <div className="blob-1 absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-brand-400/20 dark:bg-brand-500/15 blur-[100px]" />
    <div className="blob-2 absolute top-1/2 -left-48 w-[500px] h-[500px] rounded-full bg-brand-300/15 dark:bg-brand-400/10 blur-[90px]" />
    <div className="blob-3 absolute -bottom-24 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-500/10 dark:bg-brand-600/10 blur-[80px]" />
  </div>
);

export default GradientMesh;
