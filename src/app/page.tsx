"use client";
import { SplashTransition } from "../../components/SplashTransition";
import { MainContent } from "../../components/MainContent";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <BackgroundGradientAnimation containerClassName="fixed inset-0 -z-10" />
      <div className="invisible absolute inset-0 -z-20">
        <MainContent />
      </div>
      <SplashTransition>
        <MainContent />
      </SplashTransition>
    </div>
  );
}
