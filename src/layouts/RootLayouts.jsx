import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import SiteHeader from '../components/layout/SiteHeader';
import NavbarSpacer from '../components/layout/NavbarSpacer';
import Footer from '../components/layout/Footer';
import useScrollReveal from '../hooks/useScrollReveal';

const RootLayouts = () => {
  const { pathname } = useLocation();
  useScrollReveal(pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-200 selection:text-brand-900">
      <SiteHeader />
      <NavbarSpacer />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayouts;
