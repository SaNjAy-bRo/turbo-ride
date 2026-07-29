export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  tagline: string;
  status: 'available' | 'coming-soon' | 'vip-reserve';
  statusLabel: string;
  pricePerDay: number;
  engine: string;
  horsepower: number;
  acceleration: string; // 0-100 km/h
  topSpeed: string;
  transmission: string;
  drivetrain: string;
  year: number;
  color: string;
  brandColor: string; // Dynamic theme accent color
  glowColor: string; // Dynamic ambient lighting color
  image: string;
  mobileImage?: string; // Dedicated portrait ad image for mobile screens
  cockpitImage?: string; // Dedicated cockpit interior image
  heroVideo?: string; // Local HD YouTube MP4 video loop path
  gallery: string[];
  audioUrl: string; // Authentic user-provided real engine exhaust revving sound
  audioFrequency: number;
  features: string[];
  description: string;
  suitableFor: string[];
}

export const FLEET_DATA: Car[] = [
  {
    id: "porsche-718-cayman",
    name: "Porsche 718 Cayman",
    brand: "Porsche",
    model: "718 Cayman",
    tagline: "Precision Engineering. Unmatched Mid-Engine Balance.",
    status: "available",
    statusLabel: "Available Now in Bangalore",
    pricePerDay: 28000,
    engine: "2.0L Turbocharged Flat-4",
    horsepower: 300,
    acceleration: "4.7s",
    topSpeed: "275 km/h",
    transmission: "7-Speed PDK Dual-Clutch",
    drivetrain: "Rear-Wheel Drive (RWD)",
    year: 2023,
    color: "Racing Yellow / Jet Black Accents",
    brandColor: "#FFD000",
    glowColor: "rgba(255, 208, 0, 0.35)",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
    mobileImage: "/images/mobile/porsche-mobile.png",
    cockpitImage: "/images/cockpit/porsche-cockpit.png",
    heroVideo: "/videos/porsche-hero.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "/images/cockpit/porsche-cockpit.png",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85"
    ],
    audioUrl: "/audio/porsche-rev.wav",
    audioFrequency: 180,
    features: [
      "Sport Chrono Package with Mode Switch",
      "Porsche Active Suspension Management (PASM)",
      "PDK Sports Exhaust System with Twin Tailpipes",
      "Full Carbon Fibre Racing Bucket Seats",
      "BOSE® Surround Sound System",
      "Apple CarPlay® & Launch Control"
    ],
    description: "The benchmark mid-engine sports car. Crafted for purists who demand laser-sharp handling on Nandi Hills curves or seamless elegance on Bangalore's expressways.",
    suitableFor: ["Self Drive", "Weekend Getaway", "Track Experience", "Photoshoots"]
  },
  {
    id: "lamborghini-huracan-evo",
    name: "Lamborghini Huracán EVO",
    brand: "Lamborghini",
    model: "Huracán EVO V10",
    tagline: "Naturally Aspirated V10 Symphony. Raw Emotional Power.",
    status: "coming-soon",
    statusLabel: "Arriving Soon – Pre-Book Access",
    pricePerDay: 75000,
    engine: "5.2L Naturally Aspirated V10",
    horsepower: 640,
    acceleration: "2.9s",
    topSpeed: "325 km/h",
    transmission: "7-Speed LDF Dual-Clutch",
    drivetrain: "All-Wheel Drive (AWD)",
    year: 2024,
    color: "Verde Mantis / Gloss Carbon",
    brandColor: "#22c55e",
    glowColor: "rgba(34, 197, 94, 0.35)",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=85",
    mobileImage: "/images/mobile/lamborghini-mobile.png",
    cockpitImage: "/images/cockpit/lamborghini-cockpit.png",
    heroVideo: "/videos/lamborghini-hero.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=85",
      "/images/cockpit/lamborghini-cockpit.png",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1600&q=85"
    ],
    audioUrl: "/audio/lamborghini-rev.mp3",
    audioFrequency: 240,
    features: [
      "LDVI (Lamborghini Dinamica Veicolo Integrata)",
      "Rear-Wheel Steering & Torque Vectoring",
      "Carbon Ceramic Brakes with Custom Calipers",
      "Anima Drive Modes (STRADA, SPORT, CORSA)",
      "Forged Composites® Interior Trim"
    ],
    description: "An Italian masterpiece engineered to thrill every sense. The 5.2-liter V10 engine delivers an explosive roar and unmatched visual drama for high-profile entries and VIP occasions.",
    suitableFor: ["Wedding Entry", "VIP Corporate Events", "Music Videos", "Ride Along"]
  },
  {
    id: "ford-mustang-gt-v8",
    name: "Ford Mustang GT V8",
    brand: "Ford",
    model: "Mustang GT 5.0 V8",
    tagline: "Pure American Muscle. Thunderous V8 Exhaust Note.",
    status: "coming-soon",
    statusLabel: "Arriving Soon – Join Waitlist",
    pricePerDay: 32000,
    engine: "5.0L Coyote V8",
    horsepower: 450,
    acceleration: "4.3s",
    topSpeed: "250 km/h",
    transmission: "10-Speed SelectShift Automatic",
    drivetrain: "Rear-Wheel Drive (RWD)",
    year: 2023,
    color: "Shadow Black / Triple Yellow Striping",
    brandColor: "#FF2D20",
    glowColor: "rgba(255, 45, 32, 0.35)",
    image: "/images/mustang-gt-exterior.png",
    mobileImage: "/images/mobile/mustang-mobile.png",
    cockpitImage: "/images/cockpit/mustang-cockpit.png",
    heroVideo: "/videos/mustang-hero.mp4",
    gallery: [
      "/images/mustang-gt-exterior.png",
      "/images/cockpit/mustang-cockpit.png",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85"
    ],
    audioUrl: "/audio/mustang-rev.mp3",
    audioFrequency: 150,
    features: [
      "Active Valve Performance Quad Exhaust",
      "MagneRide® Damping System",
      "Line-Lock Burnout Feature & Track Apps",
      "Brembo™ 6-Piston Front Brakes",
      "12-inch Digital LCD Instrument Cluster"
    ],
    description: "Iconic muscle design meets raw modern engineering. The 5.0L Coyote V8 produces an unmistakable deep rumble that demands attention across Bangalore roads.",
    suitableFor: ["Self Drive", "Photoshoots", "Weekend Drive", "Reels & Cinema"]
  },
  {
    id: "ferrari-f8-tributo",
    name: "Ferrari F8 Tributo",
    brand: "Ferrari",
    model: "F8 Tributo Twin-Turbo V8",
    tagline: "Peak Maranello Aerodynamics. Uncompromised Speed.",
    status: "vip-reserve",
    statusLabel: "Special VIP Reserve Only",
    pricePerDay: 95000,
    engine: "3.9L Twin-Turbo V8",
    horsepower: 710,
    acceleration: "2.9s",
    topSpeed: "340 km/h",
    transmission: "7-Speed F1 Dual-Clutch",
    drivetrain: "Rear-Wheel Drive (RWD)",
    year: 2024,
    color: "Rosso Corsa / Nero Roof",
    brandColor: "#DC2626",
    glowColor: "rgba(220, 38, 38, 0.35)",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1600&q=85",
    mobileImage: "/images/mobile/ferrari-mobile.png",
    cockpitImage: "/images/cockpit/ferrari-cockpit.png",
    heroVideo: "/videos/ferrari-hero.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1600&q=85",
      "/images/cockpit/ferrari-cockpit.png"
    ],
    audioUrl: "/audio/ferrari-rev.mp3",
    audioFrequency: 220,
    features: [
      "Ferrari Dynamic Enhancer (FDE+)",
      "Side Slip Angle Control 6.1 (SSC)",
      "S-Duct Front Aerodynamic Nose",
      "Scuderia Ferrari Carbon Shields",
      "Titanium Exhaust System"
    ],
    description: "The ultimate homage to Ferrari's V8 legacy. Delivering 710 horsepower of pure adrenaline, the F8 Tributo is available for elite corporate launches, wedding grand entries, and private media shoots.",
    suitableFor: ["Wedding Entry", "Private VIP Chauffeur", "Film Production"]
  }
];
