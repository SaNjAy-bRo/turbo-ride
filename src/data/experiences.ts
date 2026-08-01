export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  highlights: string[];
  image: string;
  iconName: string;
  idealFor: string;
}

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: "highway-experience-drive",
    title: "Guided Highway Experience Drives",
    subtitle: "High-speed open highway runs accompanied by professional safety pilots.",
    badge: "Core Experience",
    description: "Take the wheel for a thrilling highway drive session. Complete open-road freedom on Bengaluru's finest expressway stretches with real-time pilot guidance.",
    highlights: [
      "Per-Session Experience Package",
      "Professional Safety Pilot & Route Briefing",
      "Full Commercial Insurance & Fuel Included",
      "Launch Control & Mode Switch Demonstration"
    ],
    image: "/images/porsche-yellow.png",
    iconName: "Flame",
    idealFor: "Automotive Enthusiasts & Thrill Seekers"
  },
  {
    id: "content-media-package",
    title: "Content & 4K Media Packages",
    subtitle: "Professional photoshoots & Instagram reels captured during your session.",
    badge: "Media Included",
    description: "Document your supercar moment in cinematic 4K. Professional automotive photographers capture high-res exterior stills and dynamic highway reels.",
    highlights: [
      "High-Resolution Exterior & Cockpit Stills",
      "Ready-to-Post Instagram Reel Edit",
      "GoPro Cockpit Audio & Video Capture",
      "Delivered within 24 Hours of Drive"
    ],
    image: "/images/mustang-gt-exterior.png",
    iconName: "Zap",
    idealFor: "Content Creators, Surprises & Special Moments"
  },
  {
    id: "pilot-safety-briefing",
    title: "Supercar Pilot & Dynamics Briefing",
    subtitle: "Complete walkthrough of PDK dynamics, launch control, and supercar handling.",
    badge: "Safety First",
    description: "Before hitting the open road, receive a comprehensive cockpit briefing covering drive modes, launch control procedures, and high-speed safety protocols.",
    highlights: [
      "Cockpit Control Walkthrough",
      "PDK / Dual-Clutch Gearbox Overview",
      "Safety Protocols & Route Pre-Check",
      "Live Pilot Support Throughout Session"
    ],
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=85",
    iconName: "Key",
    idealFor: "First-Time Supercar Drivers"
  }
];
