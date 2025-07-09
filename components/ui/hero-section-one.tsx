"use client";

import { useState, useEffect } from "react";
import { WordRotate } from "./word-rotate";

function HeroSectionOne() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  
  const studySpots = [
    "quiet cafes",
    "cozy libraries", 
    "study lounges",
    "rooftop terraces",
    "bookstore nooks"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full text-center overflow-hidden">
      {/* Animated background elements */}

      
      {/* Main content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">
          Find your perfect
          <br />
          <div className="h-[1.2em] flex items-center justify-center">
            <WordRotate 
              words={studySpots} 
              duration={2500}
              className="text-4xl md:text-6xl font-bold text-white tracking-wide drop-shadow-lg"
            />
          </div>
        </h1>
        
        <p className="text-base md:text-xl font-normal text-slate-300 max-w-2xl mx-auto leading-relaxed px-4">
          Discover quiet cafes, libraries, and study spaces near you. Monitor 
          <span className="text-slate-200 font-semibold"> real-time availability</span>, 
          <span className="text-slate-200 font-semibold"> noise levels</span>, and 
          <span className="text-slate-200 font-semibold"> amenities</span> to find the ideal environment for your productivity.
        </p>
      </div>
      
      {/* Scroll indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-300">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-slate-400 text-sm mt-2 font-medium">Scroll to explore</span>
        </div>
      )}
    </div>
  );
}

export default HeroSectionOne;