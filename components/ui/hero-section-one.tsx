"use client";

import { useState, useEffect } from "react";

function HeroSectionOne() {
  const [currentSpot, setCurrentSpot] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  
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
  }, []);

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
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-slate-600 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-slate-500 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-40 w-20 h-20 bg-slate-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-slate-600 rounded-full animate-bounce delay-500"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
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