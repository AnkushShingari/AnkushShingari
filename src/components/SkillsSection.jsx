import React from 'react';
import developerData from '../data/developer.json';

export default function SkillsSection() {
  const { technicalSkills } = developerData;

  // Combining tools and other skills for the 4th box as shown in the screenshot
  const toolsAndOther = [
    ...(technicalSkills?.tools || []),
    ...(technicalSkills?.other || [])
  ];

  return (
    <section id="skills" className="bg-[#0b0f17] text-white py-16 px-6 md:px-12  border-b border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-[#2dd4bf] font-mono text-xs md:text-sm tracking-wider uppercase">
            // CAPABILITIES
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical Skillset
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            A structured collection of technologies, tools, and platforms I work with.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Frontend */}
          <div className="bg-[#11161d] border border-gray-800/80 rounded-xl p-6 flex flex-col justify-between">
            <h3 className="text-[#2dd4bf] font-mono text-xs uppercase tracking-wider font-semibold mb-4">
              FRONTEND
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills?.frontend?.map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#161b22] border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 text-xs md:text-sm px-3.5 py-2 rounded-lg font-mono transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-[#11161d] border border-gray-800/80 rounded-xl p-6 flex flex-col justify-between">
            <h3 className="text-[#2dd4bf] font-mono text-xs uppercase tracking-wider font-semibold mb-4">
              BACKEND
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills?.backend?.map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#161b22] border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 text-xs md:text-sm px-3.5 py-2 rounded-lg font-mono transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CMS */}
          <div className="bg-[#11161d] border border-gray-800/80 rounded-xl p-6 flex flex-col justify-between">
            <h3 className="text-[#2dd4bf] font-mono text-xs uppercase tracking-wider font-semibold mb-4">
              CMS
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills?.cms?.map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#161b22] border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 text-xs md:text-sm px-3.5 py-2 rounded-lg font-mono transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Other */}
          <div className="bg-[#11161d] border border-gray-800/80 rounded-xl p-6 flex flex-col justify-between">
            <h3 className="text-[#2dd4bf] font-mono text-xs uppercase tracking-wider font-semibold mb-4">
              TOOLS & OTHER
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {toolsAndOther.map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#161b22] border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 text-xs md:text-sm px-3.5 py-2 rounded-lg font-mono transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}