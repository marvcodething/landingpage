import { SmoothCursor } from "./ui/smooth-cursor";
import HeroSectionOne from "./ui/hero-section-one";
import FeaturesAndProcess from "./ui/features-and-process";
import BetaSignup from "./ui/beta-signup";

export function MainContent() {
  return (
    <>
      <SmoothCursor />
      <HeroSectionOne />
      <FeaturesAndProcess />
      <BetaSignup />
    </>
  );
}
