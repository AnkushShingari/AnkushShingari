import { useState } from 'react';
import { FaXmark, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import developerData from '../data/developer.json';

// Static image mapping for projects
const projectImages = [
  "/media/matchmind-preview.png",
  "/media/svg-generator-preview.png"
];

export default function ProjectsSection() {
  const { projects } = developerData;
  const [activeDemoUrl, setActiveDemoUrl] = useState(null);

  const handleOpenDemo = (url) => {
    setActiveDemoUrl(url);
  };

  const handleCloseDemo = () => {
    // Unmounts and empties the iframe
    setActiveDemoUrl(null);
  };

  return (
    <section id="projects" className="bg-[#0b0f17] text-white py-8 px-4 md:py-16 md:px-12 scroll-mt-12 md:scroll-mt-6 border-b border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-[#2dd4bf] font-mono text-xs md:text-sm tracking-wider uppercase">
            // PORTFOLIO
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Personal Projects
          </h2>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects?.map((project, index) => (
            <div
              key={index}
              onClick={() => handleOpenDemo(project.liveDemo)}
              className="bg-[#11161d] border border-gray-800/80 rounded-xl overflow-hidden hover:border-gray-700 transition cursor-pointer group flex flex-col justify-between"
            >
              {/* Card Image Banner */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#161b22]">
                <img
                  src={projectImages[index] || "/media/project-placeholder.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Card Body */}
              <div className="p-3 md:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#2dd4bf] transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-gray-500 whitespace-nowrap pt-1">
                      {project.date}
                    </span>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {project.keyFeatures?.join(" ")}
                  </p>
                </div>

                {/* Tech Tags from developer.json */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.techStack?.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="bg-[#0d2a2a] text-[#2dd4bf] border border-[#1b4d4f] text-xs px-2.5 py-1 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Iframe Preview Popup Modal */}
      {activeDemoUrl && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 z-50 animate-in fade-in duration-200">
          <div className="bg-[#11161d] border border-gray-800 rounded-xl w-full max-w-6xl h-[85vh] flex flex-col overflow-hidden shadow-2xl">
            
            {/* Modal Header */}
            <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                </div>
                <span className="font-mono text-xs text-gray-400 truncate max-w-xs sm:max-w-md">
                  {activeDemoUrl}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white p-1.5 rounded transition hover:bg-gray-800 text-xs flex items-center gap-1.5 font-mono"
                  title="Open in new tab"
                >
                  <FaArrowUpRightFromSquare className="text-xs" />
                  <span className="hidden sm:inline">Open External</span>
                </a>
                <button
                  onClick={handleCloseDemo}
                  className="text-gray-400 hover:text-white p-1.5 rounded transition hover:bg-gray-800"
                  title="Close Preview"
                >
                  <FaXmark className="text-lg" />
                </button>
              </div>
            </div>

            {/* Modal Body / Iframe Container */}
            <div className="flex-1 w-full h-full bg-[#0b0f17]">
              <iframe
                src={activeDemoUrl}
                title="Live Project Demo"
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}