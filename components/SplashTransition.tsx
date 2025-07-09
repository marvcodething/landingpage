"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function SplashTransition({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [logoTransition, setLogoTransition] = useState(false);

  useEffect(() => {
    // Disable scrolling during splash animation
    document.body.style.overflow = 'hidden';
    
    // Ensure page starts at top
    window.scrollTo(0, 0);
    
    const splashTimeout = setTimeout(() => {
      setLogoTransition(true);
      setTimeout(() => {
        setShowSplash(false);
        // Re-enable scrolling after animation completes
        document.body.style.overflow = 'auto';
      }, 1200);
    }, 800); // was 2000, now much quicker to start
    
    return () => {
      clearTimeout(splashTimeout);
      // Cleanup: ensure scrolling is re-enabled if component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <div className={`fixed inset-0 z-20 pointer-events-none`}>
        <div
          className={`absolute transition-all duration-1000 ease-in-out
            ${
              logoTransition
                ? "top-4 left-4 md:top-8 md:left-8 w-32 md:w-56 h-auto"
                : "top-1/2 left-1/2 w-[300px] md:w-[600px] h-auto -translate-x-1/2 -translate-y-1/2"
            }
          `}
          style={{ zIndex: 30 }}
        >
          <Image
            src="/assets/logos/studyspottextlogo1white.svg"
            alt="StudySpot Logo"
            width={1200}
            height={308}
            className="w-full h-auto"
            priority
          />
        </div>
        <p
          className={`absolute left-1/2 top-[calc(50%+120px)] -translate-x-1/2 text-2xl font-satoshi text-center text-white transition-opacity duration-700 ease-in-out
            ${logoTransition ? "opacity-0" : "opacity-100"}
          `}
          style={{ zIndex: 20 }}
        >
          Find your focus
        </p>
      </div>
      <div
        className={`transition-opacity duration-700 ${
          showSplash
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        {children}
      </div>
    </>
  );
}
