import React from 'react'

export default function PlayZoneTopHeader() {
  return (
    <>
      <section className="bg-[#0b0f17] text-white py-8 px-4 md:py-16 md:px-12 scroll-mt-12 md:scroll-mt-6 border-b border-gray-800 font-sans">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102a2d] border border-[#1b4e52] text-[#2dd4bf] text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse"></span>
              PLAY ZONE
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Interactive Play Zone
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              A collection of full-stack experiments, WebGL canvas demos, and retro games. Click any viewport below to activate controls.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}