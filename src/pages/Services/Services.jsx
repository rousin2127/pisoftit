import React from 'react';
import { useLoaderData } from 'react-router';
import * as BoxIcons from 'react-icons/bi';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { HiOutlineArrowSmDown, HiOutlineArrowSmRight } from 'react-icons/hi';

const Services = () => {

    const services = useLoaderData();

    const steps = [
        {
            id: "1",
            title: "Discovery",
            desc: "We analyze your requirements and business goals in detail."
        },
        {
            id: "2",
            title: "Strategy",
            desc: "Architecture planning and tech stack selection for optimal scale."
        },
        {
            id: "3",
            title: "Development",
            desc: "Agile execution with regular sprints and transparent reporting."
        },
        {
            id: "4",
            title: "Quality Assurance",
            desc: "Rigorous automated and manual testing protocols."
        },
        {
            id: "5",
            title: "Deployment",
            desc: "Zero-downtime shipping and post-launch optimization."
        }
    ];

    return (
        <div>
            <div className=''>
                <h1 className='text-6xl font-bold'>Comprehensive <span className='text-blue-600'>IT <br />Solutions</span></h1>
                <p>We deliver end-to-end software engineering services, helping organizations modernize their technology stacks and optimize business processes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                {services.map(service => {
                    
                    const IconComponent = BoxIcons[service.icon];

                    return (
                        <div key={service.id} className="card bg-base-100 shadow-xl border border-base-200">
                            <div className="card-body">
                                
                                {IconComponent && <IconComponent className="text-3xl text-primary mb-2" />}

                                <h2 className="card-title">{service.title}</h2>
                                <p>{service.description}</p>

                                
                                <div className="card-actions  mt-4">
                                    {service.tags?.map((tag, index) => (
                                        <div key={index} className="flex items-center gap-2"><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline>{tag}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <section className="bg-slate-50 py-20 px-6 md:px-12 lg:px-20 rounded-[2.5rem]">
                <div className="max-w-7xl mx-auto">

                    
                    <div className="text-center mb-16 space-y-3">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                            Our Engineering Process
                        </h2>
                        <p className="text-slate-500 text-base md:text-lg">
                            How we turn complex requirements into reliable products.
                        </p>
                    </div>

                   
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative flex flex-col items-start">

                                
                                <div className="flex items-center justify-between w-full mb-4">
                                  
                                    <span className="text-6xl font-black text-blue-500/10 select-none leading-none">
                                        {step.id}
                                    </span>

                                  
                                    {index < steps.length - 1 && (
                                        <div className="text-slate-300">
                                           
                                            <HiOutlineArrowSmRight className="hidden lg:block text-2xl translate-x-4" />
                                         
                                            <HiOutlineArrowSmDown className="block lg:hidden text-2xl mx-auto mt-4" />
                                        </div>
                                    )}
                                </div>

                               
                                <div className="space-y-2 pr-2">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-slate-500 font-medium">
                                        {step.desc}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <div className='text-center text-lg font-bold '> 
                <button className='text-white bg-blue-600  w-fit px-10 py-6 rounded-2xl'>Start a Project Consultation</button>
            </div>

        </div>
    );
};

export default Services;