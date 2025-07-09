"use client";

import { Marquee } from "./marquee";

const laStudyLocations = [
  {
    name: "Ministry of Coffee",
    type: "Coffee Shop",
    area: "Westwood",
    features: ["Free WiFi", "Outlets", "Outdoor Seating"]
  },
  {
    name: "The Study at Hedrick",
    type: "Study Space",
    area: "UCLA Campus",
    features: ["24/7 Open", "Private Rooms", "Dining Options"]
  },
  {
    name: "Espresso Profeta",
    type: "Coffee Shop",
    area: "Westwood",
    features: ["Near UCLA", "Courtyard", "Baked Goods"]
  },
  {
    name: "Leavey Library",
    type: "Library",
    area: "USC Campus",
    features: ["Research Materials", "Free WiFi", "Quiet Environment"]
  },
  {
    name: "Ground Zero Performance Café",
    type: "Coffee Shop",
    area: "Near USC",
    features: ["Cozy Ambiance", "Ample Seating", "Study-Friendly"]
  },
  {
    name: "Cafe 451",
    type: "Coffee Shop",
    area: "UCLA Campus",
    features: ["Young Research Library", "Peet's Coffee", "Historic Location"]
  },
  {
    name: "Espressoteric Coffee Co.",
    type: "Coffee Shop",
    area: "Westwood",
    features: ["Warm Atmosphere", "Spacious Seating", "NYC Vibe"]
  },
  {
    name: "Blue Bottle Coffee",
    type: "Coffee Shop",
    area: "Downtown LA",
    features: ["Artisan Coffee", "Modern Space", "Great Lattes"]
  },
  {
    name: "Kerckhoff Coffee House",
    type: "Coffee Shop",
    area: "UCLA Campus",
    features: ["Central Location", "Multiple Outlets", "Lively Atmosphere"]
  },
  {
    name: "The Study Spot",
    type: "Study Space",
    area: "Near USC",
    features: ["Private Rooms", "Group Tables", "Free WiFi"]
  }
];

function StudyLocationCard({ location }: { location: typeof laStudyLocations[0] }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mx-2 min-w-[280px] border border-white/20">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-white text-sm">{location.name}</h3>
        <span className="text-xs text-slate-300 bg-white/20 px-2 py-1 rounded-full">
          {location.type}
        </span>
      </div>
      <p className="text-slate-300 text-xs mb-2">{location.area}</p>
      <div className="flex flex-wrap gap-1">
        {location.features.slice(0, 2).map((feature, index) => (
          <span
            key={index}
            className="text-xs text-slate-400 bg-white/10 px-2 py-1 rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}

export function StudyLocationsMarquee() {
  return (
    <div className="py-12 opacity-30">
      <Marquee pauseOnHover className="[--duration:60s]">
        {laStudyLocations.map((location, index) => (
          <StudyLocationCard key={index} location={location} />
        ))}
      </Marquee>
    </div>
  );
}