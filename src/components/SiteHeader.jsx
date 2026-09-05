import React, { useState } from 'react';
import { FaBars, FaXmark, FaArrowRight } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

const SiteHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Skills', href: '/#skills', isHash: true },
        { name: 'Experience', href: '/#experience', isHash: true },
        { name: 'Projects', href: '/#projects', isHash: true },
        { name: 'Education', href: '/#education', isHash: true },
        {
            name: 'Download Resume',
            href: '/pdf/AnkushKumarResume.pdf',
            target: '_blank',
            rel: 'noopener noreferrer',
            download: true,
            isHash: false
        }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (e, link) => {
        setIsMenuOpen(false);

        if (link.isHash) {
            const targetId = link.href.replace('/#', '');
            
            // If already on the homepage, perform smooth scroll directly
            if (location.pathname === '/') {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    // Update URL hash without forcing a full page re-render
                    window.history.pushState(null, '', link.href);
                }
            }
        }
    };

    const renderNavLink = (link, extraClasses = '') => {
        if (link.isHash) {
            const isActive = location.pathname + location.hash === link.href;
            const activeColorClass = isActive ? 'text-[#2dd4bf]' : 'text-gray-300 hover:text-white';

            return (
                <Link
                    key={link.name}
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`transition-colors duration-200 ${activeColorClass} ${extraClasses}`}
                >
                    {link.name}
                </Link>
            );
        }

        return (
            <a
                key={link.name}
                href={link.href}
                target={link.target || '_self'}
                rel={link.rel || undefined}
                download={link.download || undefined}
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-300 hover:text-white transition-colors duration-200 ${extraClasses}`}
            >
                {link.name}
            </a>
        );
    };

    return (
        <header className="sticky top-0 z-50 bg-[#0b0f17] backdrop-blur-md text-white border-b border-gray-800 px-3 py-4 lg:px-12 font-sans transition-all">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Brand / Logo */}
                <Link to="/" className="font-mono text-lg lg:text-xl font-bold tracking-wide">
                    <span className="text-[#38bdf8]">{'{ '}</span>
                    <span className="text-white">ankush.shingari</span>
                    <span className="text-[#38bdf8]">{' }'}</span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center space-x-8 text-gray-400 font-sans text-sm font-medium">
                    {navLinks.map((link) => renderNavLink(link))}
                </div>

                {/* Right Side: Desktop CTA & Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/contact-me"
                        className="hidden lg:inline-flex items-center gap-2 bg-[#2dd4bf] hover:bg-[#26b8a5] text-gray-950 font-semibold px-5 py-2 rounded-lg transition-colors duration-200 text-sm"
                    >
                        Contact Me
                        <FaArrowRight className="text-xs" />
                    </Link>

                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        className="lg:hidden text-gray-300 hover:text-white focus:outline-none p-2 text-xl"
                    >
                        {isMenuOpen ? <FaXmark /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile & Tablet Dropdown Menu */}
            {isMenuOpen && (
                <div className="lg:hidden mt-4 pt-4 border-t border-gray-800 flex flex-col space-y-4 animate-in slide-in-from-top-2 duration-200">
                    {navLinks.map((link) =>
                        renderNavLink(
                            link,
                            "font-medium text-base px-2 py-1"
                        )
                    )}

                    {/* Mobile CTA Button */}
                    <Link
                        to="/contact-me"
                        onClick={() => setIsMenuOpen(false)}
                        className="inline-flex items-center justify-center gap-2 bg-[#2dd4bf] hover:bg-[#26b8a5] text-gray-950 font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm w-full mt-2"
                    >
                        Contact Me
                        <FaArrowRight className="text-xs" />
                    </Link>
                </div>
            )}
        </header>
    );
};

export default SiteHeader;