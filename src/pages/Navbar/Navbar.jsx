import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router'; 
import Logo from '../../components/shared/Logo/Logo';
import { IoMoonOutline } from 'react-icons/io5';
import { FiSun } from 'react-icons/fi';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
   
    const [isOpen, setIsOpen] = useState(false);
    
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    );

    
    const dropdownRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme]);

    
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    const links = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Case Study", path: "/case-study" },
        { name: "About", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" }
    ];

    
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const navLinks = links.map((link, index) => (
        <li key={index} onClick={handleLinkClick}>
            <NavLink
                to={link.path}
                className={({ isActive }) =>
                    `font-medium ${isActive ? 'text-primary font-bold' : ''}`
                }
            >
                {link.name}
            </NavLink>
        </li>
    ));

    return (
        <div className=" py-2 border-2 flex justify-between items-center relative">
            
            <div>
                <Link to="/" className="">
                    <Logo />
                </Link>
            </div>

           
            <div className=" flex  w-auto items-center">
                
               
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1">
                        {navLinks}
                    </ul>
                </div>

                
                <label className="swap swap-rotate btn btn-ghost btn-circle">
                    <input
                        type="checkbox"
                        onChange={handleToggle}
                        checked={theme === 'dark'
                            
                        }
                        
                    />
                    <span className="swap-on text-xl"><FiSun /></span>
                    <span className="swap-off text-xl"><IoMoonOutline /></span>
                </label>

                
                <div ref={dropdownRef} className="relative lg:hidden">
                    
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="btn btn-ghost btn-circle text-2xl flex items-center justify-center"
                        aria-label="Toggle Menu"
                    >
                    
                        {isOpen ? <IoMdClose /> : <RiMenu3Fill />}
                    </button>
                    
                    
                    <ul
                        className={`menu menu-sm absolute right-0 mt-3 w-52 p-2 bg-base-100 rounded-box shadow-lg z-[50] transition-all duration-200 ${
                            isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                        }`}
                    >
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;