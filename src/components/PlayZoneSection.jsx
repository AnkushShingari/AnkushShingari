import React, { useState, useRef, useEffect } from 'react';
import { FaArrowUpRightFromSquare, FaExpand, FaCompress, FaPlay, FaMobileScreenButton } from 'react-icons/fa6';

export default function PlayZoneSection({
    games = [
        {
            id: "wild-west-turf",
            name: "Wild West Turf",
            description: "HTML5 Canvas & JavaScript arcade showdown.\nStake virtual chips with friends in rapid-fire strategy rounds.\nFeatures custom physics engine and real-time canvas rendering.",
            url: "/playzone/wild-west-turf/index.html",
            mobile: 0
        },
        {
            id: "matchmind-colour-match-challenge",
            name: "MatchMind - Colour Match Challenge",
            description: "Fast-paced reaction puzzle built with Tailwind CSS & JS.\nTests cognitive speed, color recognition, and decision logic under pressure.\nIncludes dynamic score tracking, streak combos, and responsive layout.",
            url: "https://ankushshingari.github.io/MatchMind/",
            mobile: 1
        },
        {
            id: "bongo-neko-companio",
            name: "Bongo Neko Companion",
            description: "Interactive desktop pet that mirrors keyboard & mouse inputs in real time.\nFully customizable avatar themes, accessories, and behavior settings.\nLightweight browser widget built for stream overlays and fun interactions.",
            url: "/playzone/bongo-neko-companion/index.html",
            mobile: 0
        }
    ]
}) {
    const [activeGameId, setActiveGameId] = useState(null);
    const [fullscreenGameId, setFullscreenGameId] = useState(null);
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    const containerRefs = useRef({});
    const iframeRefs = useRef({});

    // Detect if current screen size is mobile (< 768px)
    useEffect(() => {
        const checkMobileScreen = () => {
            setIsMobileScreen(window.innerWidth < 768);
        };

        checkMobileScreen();
        window.addEventListener('resize', checkMobileScreen);
        return () => window.removeEventListener('resize', checkMobileScreen);
    }, []);

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
            <div className="max-w-7xl mx-auto space-y-16">

                {games.map((game, index) => {
                    const isPlaying = activeGameId === game.id;
                    const isFullscreen = fullscreenGameId === game.id;
                    
                    // Game is disabled ONLY IF it doesn't support mobile AND user is on a mobile device
                    const isMobileDisabled = game.mobile === 0 && isMobileScreen;

                    return (
                        <div 
                            key={game.id} 
                            id={game.id} 
                            className="space-y-6 pt-6 border-t border-gray-800/60 first:border-t-0 first:pt-0"
                        >
                            {/* Game Heading & Subheading Container */}
                            <div className="bg-[#11161d] p-5 rounded-lg border border-gray-800/80 space-y-2">
                                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                                    <span className="text-emerald-400 font-mono text-base sm:text-lg">0{index + 1}.</span> 
                                    {game.name}
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                                    {game.description}
                                </p>
                            </div>

                            {/* Game Window Container */}
                            <div
                                ref={(el) => (containerRefs.current[game.id] = el)}
                                className="bg-[#11161d] border border-gray-800 rounded-xl w-full h-[70vh] sm:h-[80vh] flex flex-col overflow-hidden shadow-2xl relative"
                            >
                                {/* macOS Window Header Bar */}
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

                                        {!isMobileDisabled && (
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
                                        )}
                                    </div>
                                </div>

                                {/* Window Body & Iframe */}
                                <div className="flex-1 w-full h-full bg-[#0b0f17] relative">
                                    {isMobileDisabled ? (
                                        /* Display message when game.mobile === 0 AND screen width < 768px */
                                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center bg-[#0b0f17]">
                                            <div className="w-16 h-16 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center border border-red-500/20 mb-4 shadow-lg shadow-red-500/5">
                                                <FaMobileScreenButton className="text-2xl" />
                                            </div>
                                            <h4 className="text-lg font-bold text-white mb-2">
                                                Not Available for Mobile Version
                                            </h4>
                                            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
                                                This experience requires desktop inputs (keyboard & mouse) and is disabled on mobile devices.
                                            </p>
                                        </div>
                                    ) : (
                                        /* Standard Game Play & Iframe flow */
                                        <>
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
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}