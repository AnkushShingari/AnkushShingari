import React, { useState } from 'react';
import { FaBars, FaXmark, FaArrowRight } from 'react-icons/fa6';

const SiteHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        /* Added sticky positioning, top offset, high z-index, and backdrop blur */
        <header className="sticky top-0 z-50 bg-[#0b0f17] backdrop-blur-md text-white border-b border-gray-800 px-3 py-4 md:px-12 font-sans transition-all">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                
                {/* Brand / Logo */}
                <a href="#" className="font-mono text-lg md:text-xl font-bold tracking-wide">
                    <span className="text-[#38bdf8]">{'{ '}</span>
                    <span className="text-white">ankush.shingari</span>
                    <span className="text-[#38bdf8]">{' }'}</span>
                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-8 text-gray-400 font-sans text-sm font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="hover:text-white transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Right Side: Desktop CTA & Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    {/* Desktop CTA Button */}
                    <a
                        href="#contact"
                        className="hidden md:inline-flex items-center gap-2 bg-[#2dd4bf] hover:bg-[#26b8a5] text-gray-950 font-semibold px-5 py-2 rounded-lg transition-colors duration-200 text-sm"
                    >
                        Contact Me
                        <FaArrowRight className="text-xs" />
                    </a>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2 text-xl"
                    >
                        {isMenuOpen ? <FaXmark /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 pt-4 border-t border-gray-800 flex flex-col space-y-4 animate-in slide-in-from-top-2 duration-200">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-300 hover:text-[#2dd4bf] font-medium text-base transition-colors duration-200 px-2 py-1"
                        >
                            {link.name}
                        </a>
                    ))}
                    
                    {/* Mobile CTA Button */}
                    <a
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="inline-flex items-center justify-center gap-2 bg-[#2dd4bf] hover:bg-[#26b8a5] text-gray-950 font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm w-full mt-2"
                    >
                        Contact Me
                        <FaArrowRight className="text-xs" />
                    </a>
                </div>
            )}
        </header>
    );
};

export default SiteHeader;