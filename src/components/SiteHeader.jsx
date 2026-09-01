import React from 'react'

const SiteHeader = () => {
    const navLinks = [
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
    ];

    return (
        <div className="bg-[#0b0f17] text-white flex items-center justify-center relative border-b border-gray-800 font-sans">
            <nav className="max-w-7xl w-full bg-[#0d1117] text-white py-4 px-8 flex items-center justify-between">
                {/* Brand / Logo */}
                <a href="#" className="font-mono text-xl font-bold tracking-wide">
                    <span className="text-[#38bdf8]">{'{ '}</span>
                    <span className="text-white">ankush.shingari</span>
                    <span className="text-[#38bdf8]">{' }'}</span>
                </a>

                {/* Navigation Links */}
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

                {/* CTA Button */}
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#2dd4bf] hover:bg-[#26b8a5] text-gray-950 font-semibold px-5 py-2 rounded-lg transition-colors duration-200 text-sm"
                >
                    Contact Me
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                </a>
            </nav>
        </div>
    );
}

export default SiteHeader