"use client";

import { useState } from "react";

const FEATURES_DATA = [
  {
    icon: "🎯",
    title: "Smart Discovery",
    subtitle: "AI-Powered Recommendations",
    description:
      "Our intelligent system learns your study habits and preferences to suggest the perfect study spots tailored to your productivity needs.",
    detailedFeatures: [
      "Personalized AI recommendations based on your study patterns",
      "Real-time availability and crowd density updates",
      "Noise level monitoring and ambiance tracking",
      "Comprehensive amenities mapping (WiFi, outlets, seating)",
    ],
  },
  {
    icon: "📊",
    title: "Productivity Analytics",
    subtitle: "Track & Optimize Performance",
    description:
      "Get detailed insights into your study sessions and discover which environments maximize your focus and learning outcomes.",
    detailedFeatures: [
      "Detailed session time tracking and focus metrics",
      "Environment-productivity correlation analysis",
      "Personalized insights and improvement suggestions",
      "Goal setting with achievement tracking and rewards",
    ],
  },
  {
    icon: "🤝",
    title: "Study Community",
    subtitle: "Connect & Collaborate",
    description:
      "Join a vibrant community of students sharing reviews, tips, and forming study groups in your area.",
    detailedFeatures: [
      "User-generated reviews with photos and ratings",
      "Study group formation and coordination tools",
      "Community challenges and study streaks",
      "Verified student recommendations and local insights",
    ],
  },
];

const STEPS_DATA = [
  {
    number: "01",
    title: "Discover",
    description:
      "AI analyzes your preferences and past productivity to recommend ideal study environments.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Optimize",
    description:
      "Track your sessions and get insights on which locations boost your performance.",
    icon: "📈",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Share experiences and discover new spots through our student community.",
    icon: "🌟",
  },
];

function FeaturesAndProcess() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <>
      {/* Dark section - Detailed features */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced capabilities for serious students
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Dive deeper into the powerful features that make StudySpot your ultimate study companion
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {FEATURES_DATA.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-slate-700 border-l-4 border-blue-400"
                      : "bg-slate-750 hover:bg-slate-700"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{feature.icon}</span>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm">{feature.subtitle}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                {FEATURES_DATA[activeFeature].title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {FEATURES_DATA[activeFeature].description}
              </p>
              <ul className="space-y-3">
                {FEATURES_DATA[activeFeature].detailedFeatures.map(
                  (item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-slate-200"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesAndProcess;