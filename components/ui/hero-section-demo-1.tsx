"use client";

import { useState, useEffect } from "react";

function HeroSectionOne() {
  const [currentSpot, setCurrentSpot] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const studySpots = [
    "quiet cafes",
    "cozy libraries", 
    "study lounges",
    "rooftop terraces",
    "bookstore nooks"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSpot((prev) => (prev + 1) % studySpots.length);
        setIsVisible(true);
      }, 200);
    }, 2500);
    
    return () => clearInterval(interval);
  }, [studySpots.length]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-700/40 to-slate-900/40"></div>
      {/* Main content */}
      <div className="relative z-10">
        <h1 className="text-6xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">
          Find your perfect
          <br />
          <span className={`transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {studySpots[currentSpot]}
          </span>
        </h1>
        
        <p className="text-xl font-normal text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Discover quiet cafes, libraries, and study spaces near you. Monitor 
          <span className="text-slate-200 font-semibold"> real-time availability</span>, 
          <span className="text-slate-200 font-semibold"> noise levels</span>, and 
          <span className="text-slate-200 font-semibold"> amenities</span> to find the ideal environment for your productivity.
        </p>
      </div>
      
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-1 h-6 bg-slate-400 rounded-full animate-bounce"></div>
        <span className="text-slate-400 text-sm mt-2">Scroll</span>
      </div>
    </div>
  );
}

export default HeroSectionOne;