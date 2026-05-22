import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Navbar/Navbar';
import Footer from '../pages/Footer/Footer';

const RootLayouts = () => {
    return (
        <div className='max-w-7xl mx-auto px-6 py-2 inter tracking-wide'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;