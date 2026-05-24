import React from 'react';
import Hero from './hero/Hero';
import Ser from './services/Ser';
import Support from './support/Support';



const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className=' text-center  items-center my-[50px] mx-auto'>
                <h1 className='text-4xl font-bold my-5'>World-class IT Solutions</h1>
                <p className=''>From ideation to deployment, we provide comprehensive technical services that scale with<br /> your growth.</p>
            </div>
            <Ser></Ser>
            <Support></Support>
            <div className='grid  text-center py-15 bg-[#0c87eb]'>
                <h2 className='text-5xl font-bold my-5'>Ready to transform your business?</h2>
                <p className='my-5'>Our consultants are ready to discuss your project. Let's engineer something great <br />together.</p>
                <button className='border w-fit px-8 py-3 bg-blue-500 text-white text-lg font-bold rounded-lg mx-auto'>Contact Us Today</button>
            </div>
        </div>
    );
};

export default Home;