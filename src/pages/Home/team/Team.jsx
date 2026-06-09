import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Member1 from '../../../assets/member1.png';
import Member2 from '../../../assets/member2.png';
import Member3 from '../../../assets/member3.png';
import Member4 from '../../../assets/member4.png';
import Member5 from '../../../assets/member5.png';
import Member6 from '../../../assets/member6.png';
import Member7 from '../../../assets/member7.png';
const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Md. Kamrul Hasan Kabir', role: 'Founder & CEO', image: Member1 },
    { id: 2, name: 'Md. Kawsar', role: 'CTO', image: Member2 },
    { id: 3, name: 'Sawrav Hasan', role: 'Project Manager', image: Member3 },
    { id: 4, name: 'Md. Asad', role: 'Senior Software Eng', image: Member4 },
    { id: 5, name: 'Md. Salafi', role: 'Senior Developer', image: Member5 },
    { id: 6, name: 'Umma Fatima', role: 'QA', image: Member6 },
    { id: 7, name: 'Md. Sojib Mridha', role: 'Head of Marketing', image: Member7 },
  ];

  const [activeImage, setActiveImage] = useState(teamMembers[0].image);
  const [activeId, setActiveId] = useState(teamMembers[0].id);

  return (
    <section className="bg-white dark:bg-slate-950 py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-5 relative reveal-left">
          <div className="img-zoom relative aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-brand-600/10 border border-slate-100 dark:border-slate-800">
            <img
              src={activeImage}
              alt="Team Member"
              className="w-full h-full object-cover transition-all duration-700 ease-out"
            />
          </div>

        </div>

        <div className="lg:col-span-7 flex flex-col justify-center reveal-right">
          <p className="section-label mb-3">Our Team</p>
          <h2 className="text-h2 text-slate-900 dark:text-white mb-8">
            Meet the people behind PAISOFT IT
          </h2>
          <div className="divide-y divide-slate-100 dark:divide-slate-800 border-b border-slate-100 dark:border-slate-800">
            {teamMembers.map((member) => {
              const isSelected = activeId === member.id;

              return (
                <div
                  key={member.id}
                  onMouseEnter={() => {
                    setActiveImage(member.image);
                    setActiveId(member.id);
                  }}
                  className={`grid grid-cols-12 items-center py-6 cursor-pointer group/item transition-all duration-300 ${
                    isSelected ? 'pl-2 border-l-2 border-blue-600' : 'border-l-2 border-transparent'
                  }`}
                >
                  <div className="col-span-6">
                    <h3
                      className={`text-base lg:text-lg font-semibold tracking-tight transition-colors duration-300 ${
                        isSelected
                          ? 'text-blue-600'
                          : 'text-slate-900 dark:text-white group-hover/item:text-blue-600'
                      }`}
                    >
                      {member.name}
                    </h3>
                  </div>

                  <div className="col-span-5">
                    <p className="text-slate-500 dark:text-slate-400 text-sm lg:text-base font-medium">
                      {member.role}
                    </p>
                  </div>

                  <div className="col-span-1 flex justify-end">
                    <ArrowUpRight
                      className={`w-6 h-6 transition-all duration-300 ${
                        isSelected
                          ? 'text-blue-600 translate-x-0.5 -translate-y-0.5'
                          : 'text-slate-400 dark:text-slate-600 group-hover/item:text-blue-600 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
