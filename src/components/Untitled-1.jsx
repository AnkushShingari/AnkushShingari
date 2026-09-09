import React, { useState, useRef } from 'react';
import { FaArrowUpRightFromSquare, FaExpand, FaCompress, FaPlay } from 'react-icons/fa6';

export default function PlayZoneSection({
  title = "Interactive Play Zone",
  description = "A collection of full-stack experiments, WebGL canvas demos, and retro games. Click any viewport below to activate controls.",
  games = [
    {
      id: "space-invaders",
      name: "Space Invaders Classic",
      description: "Built with pure HTML5 Canvas & JavaScript. Use Left/Right Arrow keys to move and Spacebar to fire.",
      url: "/playzone/space-invaders/index.html"
    },
    {
      id: "flappy-bird",
      name: "Flappy Bird JS",
      description: "Tap or hit Spacebar to jump through obstacles. Lightweight physics running locally in static HTML.",
      url: "/playzone/flappy-bird/index.html"
    },
    {
      id: "webgl-cube",
      name: "3D Geometry Render",
      description: "Interactive Three.js WebGL canvas demo. Click and drag your mouse inside to rotate the object.",
      url: "https://threejs.org/examples/webgl_geometry_cube.html"
    }
  ]
}) {
  // Stores the ID of the currently active game (only 1 plays at a time)
  const [activeGameId, setActiveGameId] = useState(null);
  const [fullscreenGameId, setFullscreenGameId] = useState(null);

  const containerRefs = useRef({});
  const iframeRefs = useRef({});

  // Handle Fullscreen Toggle
  const handleToggleFullscreen = (gameId) => {
    const targetContainer = containerRefs.current[gameId];
    if (!document.fullscreenElement) {
      if (targetContainer?.requestFullscreen) {
        targetContainer.requestFullscreen();
      }
      setFullscreenGameId(gameId);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setFullscreenGameId(null);
    }
  };

  // Start Play for selected game & stop all others
  const handleStartPlay = (gameId) => {
    setActiveGameId(gameId);
    setTimeout(() => {
      if (iframeRefs.current[gameId]) {
        iframeRefs.current[gameId].focus();
      }
    }, 50);
  };

  return (
    <section id="playzone" className="bg-[#0b0f17] text-white py-8 px-4 md:py-16 md:px-12 scroll-mt-12 md:scroll-mt-6 border-b border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Play Zone</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">{title}</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl">{description}</p>
        </div>

        {/* Vertical Stack of All Games Downward */}
        <div className="space-y-16">
          {games.map((game) => {
            const isPlaying = activeGameId === game.id;
            const isFullscreen = fullscreenGameId === game.id;

            return (
              <div key={game.id} className="space-y-4 max-w-6xl mx-auto">
                
                {/* Game Heading & Subheading */}
                <div className="bg-[#11161d] p-4 rounded-lg border border-gray-800/80 space-y-1">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-emerald-400 font-mono text-sm">#</span> {game.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{game.description}</p>
                </div>

                {/* Game Window Container */}
                <div 
                  ref={(el) => (containerRefs.current[game.id] = el)}
                  className="bg-[#11161d] border border-gray-800 rounded-xl w-full h-[70vh] sm:h-[80vh] flex flex-col overflow-hidden shadow-2xl relative"
                >
                  {/* macOS Header Bar */}
                  <div className="bg-[#161b22] px-3 sm:px-4 py-3 flex items-center justify-between border-b border-gray-800 min-w-0 z-20">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 mr-2">
                      <div className="hidden sm:flex gap-2 shrink-0">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                      </div>
                      <span className="font-mono text-xs text-gray-400 truncate max-w-[120px] xs:max-w-[180px] sm:max-w-md">
                        {game.url}
                      </span>
                    </div>

                    {/* Window Controls */}
                    <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                      <a
                        href={game.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white p-2 sm:p-1.5 rounded transition hover:bg-gray-800 text-xs flex items-center gap-1.5 font-mono"
                        title="Open External"
                      >
                        <FaArrowUpRightFromSquare className="text-sm sm:text-xs" />
                        <span className="hidden sm:inline">Open External</span>
                      </a>

                      <button
                        onClick={() => handleToggleFullscreen(game.id)}
                        className="text-gray-400 hover:text-white p-2 sm:p-1.5 rounded transition hover:bg-gray-800"
                        title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                      >
                        {isFullscreen ? (
                          <FaCompress className="text-base" />
                        ) : (
                          <FaExpand className="text-base" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Window Body & Iframe */}
                  <div className="flex-1 w-full h-full bg-[#0b0f17] relative">
                    
                    {/* Click-To-Play Overlay (Appears when not active) */}
                    {!isPlaying && (
                      <div 
                        onClick={() => handleStartPlay(game.id)}
                        className="absolute inset-0 bg-[#0b0f17]/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center cursor-pointer group transition duration-300"
                      >
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition duration-300 shadow-lg shadow-emerald-500/10 mb-3">
                          <FaPlay className="text-xl ml-1" />
                        </div>
                        <p className="text-sm font-mono text-gray-200 group-hover:text-white font-semibold">
                          Click to Interact & Play
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Starts this game & stops active sessions
                        </p>
                      </div>
                    )}

                    {/* Clean Embedded Static Game */}
                    <iframe
                      ref={(el) => (iframeRefs.current[game.id] = el)}
                      src={isPlaying ? game.url : 'about:blank'}
                      title={game.name}
                      className="w-full h-full border-0 focus:outline-none"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                      tabIndex="0"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}