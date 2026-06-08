import React from 'react';

import logo1 from '../../../assets/1.png'
import logo2 from "../../../assets/2.png"
import logo3 from '../../../assets/3.png'

const Logo = () => {
    return (
        <div className='flex items-center gap-3'>
            <div>
                <img className='w-15' src={logo3} alt="" />
            </div>
            <div className=''>
                <img className='w-30' src={logo2} alt="" />
            </div>
        </div>
    );
};

export default Logo;