import React from 'react';
import developerData from '../data/developer.json';

export default function ExperienceSection() {
  const { workExperience } = developerData;

  return (
    <section id="experience" className="bg-[#0b0f17] text-white py-8 px-4 md:py-16 md:px-12 border-b border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-[#2dd4bf] font-mono text-xs md:text-sm tracking-wider uppercase">
            // TIMELINE
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Work History & Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-8">
          {workExperience?.map((exp, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              {/* Left Column: Date & Location */}
              <div className="md:col-span-3 text-left md:text-right font-mono pt-2">
                <p className="text-[#2dd4bf] text-xs sm:text-sm font-medium">
                  {exp.startDate} – {exp.endDate}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  {exp.location}
                </p>
              </div>

              {/* Timeline Connector Line & Dot */}
              <div className="hidden md:flex md:col-span-1 justify-center relative self-stretch">
                {/* Vertical Line */}
                <div className="w-[1px] bg-gray-800 h-full absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
                {/* Teal Dot */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#2dd4bf] relative z-10 mt-3.5 ring-4 ring-[#0b0f17]"></div>
              </div>

              {/* Right Column: Experience Card */}
              <div className="md:col-span-8 bg-[#11161d] border border-gray-800/80 rounded-xl p-6 sm:p-8 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400 text-sm mt-0.5">
                    {exp.company}
                  </p>
                </div>

                {/* Achievements / Tasks List */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                  {exp.achievementsAndTasks?.map((task, taskIdx) => (
                    <li key={taskIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-[#2dd4bf] font-mono font-bold select-none">&gt;</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}