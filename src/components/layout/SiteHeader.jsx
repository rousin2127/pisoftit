import React, { useEffect, useRef } from 'react';
import TopHeader from '../shared/Topheader/TopHeader';
import Navbar from './Navbar';

const SiteHeader = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const setOffset = () => {
      document.documentElement.style.setProperty(
        '--header-offset',
        `${header.offsetHeight}px`
      );
    };

    setOffset();
    const observer = new ResizeObserver(setOffset);
    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
      <TopHeader />
      <Navbar />
    </div>
  );
};

export default SiteHeader;
