import React from 'react';
import services from '../../../../public/service.json';
// 1. BoxIcons import korun ebong variable er naam ti sohoj rakhun
import * as BoxIcons from 'react-icons/bi';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

const Ser = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
            {services.map(service => {
                {/* 2. service.iconName er bodole service.icon likhun, karon JSON-e "icon" lekha */ }
                const IconComponent = BoxIcons[service.icon];

                return (
                    <div key={service.id} className="card bg-base-100 shadow-xl border border-base-200 group  transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                        <div className="card-body ">
                            {/* Icon thakle ekhon shohojei render hobe */}
                            <div className='px-3 py-2 border-1 w-fit rounded-lg transition-transform duration-300 group-hover:scale-115'>
                                {IconComponent && <IconComponent className="text-3xl  " />}
                            </div>

                            <h2 className="card-title">{service.title}</h2>
                            <p>{service.description}</p>

                            {/* Apnar JSON er tags gulo ekhane render hobe */}
                            <p className='flex gap-2 items-center text-blue-500 cursor-pointer w-fit'>Learn More <HiOutlineArrowSmRight className='text-xl transition-transform duration-300 transform group-hover:translate-x-2 ' /></p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Ser;