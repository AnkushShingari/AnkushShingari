import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLocationDot,
  FaXmark,
  FaRegCopy,
  FaCheck
} from 'react-icons/fa6';
import { IoCodeSlashOutline } from 'react-icons/io5';

const developerData = {
  name: "Ankush Kumar",
  title: "Software Developer",
  status: "AVAILABLE FOR LIVE PROJECTS",
  location: "Yamunanagar, India",
  email: "ankush.kumar1026@gmail.com",
  phone: "+91 8930091095",
  github: "AnkushShingari",
  bio: "Software Developer with hands-on experience in PHP, WordPress development, custom plugin development, frontend implementation, and API integration. Currently expanding expertise in React JS to strengthen full-stack capabilities.",
  techStack: ["PHP", "WordPress", "React JS", "JavaScript", "Tailwind CSS", "REST APIs", "MySQL", "Git"],
  experienceYears: 2,
  availability: "Full-time / Freelance"
};

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(developerData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#0b0f17] text-white min-h-[90vh] flex items-center justify-center p-6 md:p-12 relative font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Column: Hero Text */}
        <div className="space-y-6">
          {/* Status Badge */}
          <div className="text-xs font-mono">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d2a2a] text-[#2dd4bf] border border-[#1b4d4f]">
              <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse"></span>
              AVAILABLE FOR LIVE PROJECTS
            </span>
          </div>

          <div>
            <h2 className="text-[#2dd4bf] font-mono font-medium tracking-wide text-sm mb-1 uppercase">
              ANKUSH KUMAR
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Software Developer
            </h1>
          </div>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Software Developer with hands-on experience in PHP, WordPress development, custom
            plugin development, frontend implementation, and API integration. Currently expanding
            expertise in React JS to strengthen full-stack capabilities.
          </p>

          {/* Contact Badges */}
          <div className="flex flex-wrap gap-3 font-mono text-xs text-gray-300">
            <a
              href={`mailto:${developerData.email}`}
              className="flex items-center gap-2 bg-[#161b22] border border-gray-800 hover:border-gray-700 px-3 py-2 rounded-md transition hover:text-white"
            >
              <FaEnvelope className="text-[#2dd4bf] text-sm" />
              <span>{developerData.email}</span>
            </a>
            <a
              href={`tel:${developerData.phone}`}
              className="flex items-center gap-2 bg-[#161b22] border border-gray-800 hover:border-gray-700 px-3 py-2 rounded-md transition hover:text-white"
            >
              <FaPhone className="text-[#2dd4bf] text-sm" />
              <span>{developerData.phone}</span>
            </a>
            <a
              href={`https://github.com/${developerData.github}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#161b22] border border-gray-800 hover:border-gray-700 px-3 py-2 rounded-md transition hover:text-white"
            >
              <FaGithub className="text-[#2dd4bf] text-sm" />
              <span>{developerData.github}</span>
            </a>
            <div className="flex items-center gap-2 bg-[#161b22] border border-gray-800 px-3 py-2 rounded-md">
              <FaLocationDot className="text-[#2dd4bf] text-sm" />
              <span>{developerData.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Code Window Card */}
        <div
          onClick={() => setIsOpen(true)}
          className="bg-[#11161d] border border-gray-800 rounded-xl shadow-2xl hover:border-gray-700 transition cursor-pointer relative group flex flex-col justify-between"
        >
          {/* Card Window Header */}
          <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-gray-800 rounded-t-xl">
            <div className="flex gap-1 md:gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
            </div>
            <span className="font-mono text-xs text-gray-400">developer.json</span>
            <span className="font-mono text-xs text-gray-500 group-hover:text-[#2dd4bf] transition flex items-center gap-1">
              <IoCodeSlashOutline className="text-sm" /> Click to expand
            </span>
          </div>

          {/* Card Body */}
          <div className="p-6 font-mono text-xs md:text-sm leading-relaxed relative min-h-[280px] flex flex-col justify-between">
            <div className="space-y-1 text-gray-300 overflow-x-auto pr-24 sm:pr-32 md:pr-40">
              <p><span className="text-gray-500 mr-4">1</span><span className="text-[#38bdf8]">const</span> <span className="text-white">developer</span> = &#123;</p>
              <p><span className="text-gray-500 mr-4">2</span>  <span className="text-gray-400">name:</span> <span className="text-[#a5d6ff]">"{developerData.name}"</span>,</p>
              <p><span className="text-gray-500 mr-4">3</span>  <span className="text-gray-400">role:</span> <span className="text-[#a5d6ff]">"{developerData.title}"</span>,</p>
              <p><span className="text-gray-500 mr-4">4</span>  <span className="text-gray-400">techStack:</span> [<span className="text-[#a5d6ff]">"PHP"</span>, <span className="text-[#a5d6ff]">"WordPress"</span>, <span className="text-[#a5d6ff]">"React JS"</span>],</p>
              <p><span className="text-gray-500 mr-4">5</span>  <span className="text-gray-400">location:</span> <span className="text-[#a5d6ff]">"{developerData.location}"</span></p>
              <p><span className="text-gray-500 mr-4">6</span>&#125;;</p>
            </div>

            {/* Avatar Circle Container (Kept inside the padding boundary) */}
            <div className="absolute bottom-4 right-4 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 border-2 border-[#2dd4bf]/50 rounded-full flex items-center justify-center p-1.5 bg-[#0b0f17]/80 backdrop-blur-md shadow-xl transition-transform duration-300 group-hover:scale-105 pointer-events-none">
              <img
                src="/media/Ankush-Kumar-Avatar.png"
                alt={developerData.name}
                className="w-full h-full object-cover rounded-full border border-[#2dd4bf]/30"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Modal / Popup for Full JSON */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-[#11161d] border border-gray-800 rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                <span className="font-mono text-xs text-gray-400 ml-2">developer.json (Full Data)</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="text-gray-400 hover:text-white p-1.5 rounded transition hover:bg-gray-800"
                  title="Copy JSON"
                >
                  {copied ? <FaCheck className="text-green-400" /> : <FaRegCopy />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white p-1.5 rounded transition hover:bg-gray-800"
                >
                  <FaXmark className="text-lg" />
                </button>
              </div>
            </div>

            {/* Modal Code Body */}
            <div className="p-6 font-mono text-sm overflow-x-auto max-h-[70vh] bg-[#0d1117]">
              <pre className="text-[#a5d6ff]">
                <code className="text-gray-300">
                  {JSON.stringify(developerData, null, 2)}
                </code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}