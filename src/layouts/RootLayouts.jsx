import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const RootLayouts = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayouts;
