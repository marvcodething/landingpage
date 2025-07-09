import { SmoothCursor } from "./ui/smooth-cursor";
import HeroSectionOne from "./ui/hero-section-one";
import { StudyLocationsMarquee } from "./ui/study-locations-marquee";
import FeaturesAndProcess from "./ui/features-and-process";
import BetaSignup from "./ui/beta-signup";
import { ToastContainer, useToast } from "./ui/toast";

export function MainContent() {
  const toast = useToast();

  return (
    <>
      <SmoothCursor />
      <HeroSectionOne />
      <StudyLocationsMarquee />
      <FeaturesAndProcess />
      <BetaSignup toast={toast} />
      <ToastContainer toasts={toast.toasts} onRemove={toast.removeToast} />
    </>
  );
}
