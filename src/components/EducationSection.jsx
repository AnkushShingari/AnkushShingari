import React from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import developerData from '../data/developer.json';

export default function EducationSection() {
  const { education } = developerData;

  return (
    <section id="education" className="bg-[#0b0f17] text-white py-8 px-4 md:py-16 md:px-12 scroll-mt-12 md:scroll-mt-6 border-b border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-[#2dd4bf] font-mono text-xs md:text-sm tracking-wider uppercase">
            // ACADEMICS
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Education background
          </h2>
        </div>

        {/* Education List Container */}
        <div className="space-y-6">
          {education?.map((item, index) => (
            <div
              key={index}
              className="bg-[#11161d] border border-gray-800/80 rounded-xl p-3 md:p-6 sm:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              {/* Left Side: Title, Institution & Core Focus */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-[#2dd4bf] text-xl md:text-2xl shrink-0" />
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {item.degree}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm pl-8">
                  {item.institution}
                </p>

                {item.courses && item.courses.length > 0 && (
                  <p className="font-mono text-xs md:text-sm text-gray-400 pl-8 pt-1">
                    <span className="text-gray-500">Core focus:</span>{' '}
                    <span className="text-gray-400">
                      {item.courses.join(', ')}
                    </span>
                  </p>
                )}
              </div>

              {/* Right Side: Date Range & Status */}
              <div className="text-left md:text-right font-mono shrink-0 space-y-1">
                <p className="text-[#2dd4bf] text-xs sm:text-sm font-medium">
                  {item.startDate} – {item.endDate}
                </p>
                <p className="text-gray-500 text-xs">
                  Completed Degree
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}