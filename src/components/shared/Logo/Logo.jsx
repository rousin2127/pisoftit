import React from 'react';

import logo1 from '../../../assets/1.png'
import logo2 from "../../../assets/2.png"

const Logo = () => {
    return (
        <div className='flex items-center gap-3'>
            <div>
                <img className='w-10' src={logo1} alt="" />
            </div>
            <div className=''>
                <img className='w-30' src={logo2} alt="" />
            </div>
        </div>
    );
};

export default Logo;