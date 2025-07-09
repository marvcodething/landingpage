"use client";
import { useEffect, useState } from "react";
import { SmoothCursor } from "./ui/smooth-cursor";
import HeroSectionOne from "./ui/hero-section-one";
import { StudyLocationsMarquee } from "./ui/study-locations-marquee";
import FeaturesAndProcess from "./ui/features-and-process";
import BetaSignup from "./ui/beta-signup";
import { ToastContainer, useToast } from "./ui/toast";

export function MainContent() {
  const toast = useToast();
  const [sectionsVisible, setSectionsVisible] = useState([false, false, false, false]);

  useEffect(() => {
    // Stagger the fade-in of each section
    const timers = [
      setTimeout(() => setSectionsVisible(prev => [true, ...prev.slice(1)]), 200),
      setTimeout(() => setSectionsVisible(prev => [prev[0], true, ...prev.slice(2)]), 400),
      setTimeout(() => setSectionsVisible(prev => [...prev.slice(0, 2), true, prev[3]]), 600),
      setTimeout(() => setSectionsVisible(prev => [...prev.slice(0, 3), true]), 800),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <SmoothCursor />
      <div className={`transition-opacity duration-700 ease-out ${sectionsVisible[0] ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSectionOne />
      </div>
      <div className={`transition-opacity duration-700 ease-out ${sectionsVisible[1] ? 'opacity-100' : 'opacity-0'}`}>
        <StudyLocationsMarquee />
      </div>
      <div className={`transition-opacity duration-700 ease-out ${sectionsVisible[2] ? 'opacity-100' : 'opacity-0'}`}>
        <FeaturesAndProcess />
      </div>
      <div className={`transition-opacity duration-700 ease-out ${sectionsVisible[3] ? 'opacity-100' : 'opacity-0'}`}>
        <BetaSignup toast={toast} />
      </div>
      <ToastContainer toasts={toast.toasts} onRemove={toast.removeToast} />
    </>
  );
}
