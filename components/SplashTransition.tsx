"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function SplashTransition({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [logoTransition, setLogoTransition] = useState(false);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setLogoTransition(true);
      setTimeout(() => setShowSplash(false), 1200);
    }, 2000);
    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <>
      <div className={`fixed inset-0 z-20 pointer-events-none`}>
        <div
          className={`absolute transition-all duration-1000 ease-in-out
            ${
              logoTransition
                ? "top-8 left-8 w-56 h-auto"
                : "top-1/2 left-1/2 w-[600px] h-auto -translate-x-1/2 -translate-y-1/2"
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
