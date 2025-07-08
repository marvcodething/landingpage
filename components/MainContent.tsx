import { SmoothCursor } from "./ui/smooth-cursor";

export function MainContent() {
  return (
    <>
      <SmoothCursor />
      <div className="flex flex-col items-center justify-center min-h-screen font-satoshi bg-transparent text-black dark:text-white">
        <h1 className="text-3xl font-bold mb-4">Welcome to StudySpot</h1>
        <p className="mb-2">
          This is the main content of your product page. Replace this with your
          actual content.
        </p>
        <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">[Filler content goes here]</span>
        </div>
      </div>
    </>
  );
}
