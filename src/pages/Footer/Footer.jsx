import React from 'react';
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { FiMail, FiPhone } from 'react-icons/fi';
import { MdOutlineLocationOn } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-slate-50  text-slate-600 pt-16 pb-8 ">
            {/* Top Section: 4 Column Grid Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                {/* Column 1: Logo & About */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        {/* Logo Box */}
                        <div className="bg-blue-600 text-white font-extrabold text-xl w-10 h-10 flex items-center justify-center rounded-lg shadow-sm">
                            P
                        </div>
                        <span className="text-xl font-black text-slate-800 tracking-wide">
                            PAISOFT <span className="text-blue-600">IT</span>
                        </span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
                        Engineering reliable software for modern businesses.
                    </p>
                    {/* Social Media Icons */}
                    <div className="flex gap-3 pt-2">
                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-200/60 hover:bg-blue-600 hover:text-white text-slate-600 transition-colors duration-200">
                            <AiOutlineTwitter className="text-lg" />
                        </a>
                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-200/60 hover:bg-blue-600 hover:text-white text-slate-600 transition-colors duration-200">
                            <AiFillLinkedin className="text-lg" />
                        </a>
                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-200/60 hover:bg-blue-600 hover:text-white text-slate-600 transition-colors duration-200">
                            <AiOutlineGithub className="text-lg" />
                        </a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="text-slate-800 font-bold text-base mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Services</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Case Studies</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Us */}
                <div>
                    <h4 className="text-slate-800 font-bold text-base mb-6">Contact Us</h4>
                    <ul className="space-y-5 text-sm">
                        <li className="flex items-center gap-3">
                            <FiMail className="text-blue-600 text-lg shrink-0" />
                            <a href="mailto:paisoft6@gmail.com" className="hover:text-blue-600 transition-colors">paisoft6@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <FiPhone className="text-blue-600 text-lg shrink-0" />
                            <a href="tel:+8801755191900" className="hover:text-blue-600 transition-colors">+8801755191900</a>
                        </li>
                        <li className="flex items-start gap-3">
                            <MdOutlineLocationOn className="text-blue-600 text-xl shrink-0 mt-0.5" />
                            <span className="text-slate-500 leading-relaxed">
                                House 4, Lane 10, Mirpur 2,<br />Dhaka-1216
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Newsletter */}
                <div className="space-y-4">
                    <h4 className="text-slate-800 font-bold text-base mb-6">Newsletter</h4>
                    <p className="text-sm leading-relaxed text-slate-500">
                        Get the latest updates on software engineering and IT solutions.
                    </p>
                    <div className="space-y-3 pt-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-all"
                        />
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 rounded-xl shadow-md transition-all active:scale-[0.98]">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom Section: Copyright Line */}
            <div className="max-w-7xl mx-auto border-t border-slate-200/80 pt-8 text-center text-xs text-slate-400 font-medium">
                © 2026 PAISOFT IT. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;