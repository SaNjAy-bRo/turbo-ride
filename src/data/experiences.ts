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
    id: "porsche-self-drive",
    title: "Porsche 718 Cayman Self Drive",
    subtitle: "Command mid-engine precision on Bangalore's finest expressways.",
    badge: "Most Popular",
    description: "Take absolute control of the wheel. White-glove doorstep delivery of the Racing Yellow Porsche 718 Cayman directly to your location in Bangalore.",
    highlights: [
      "24-Hour / Multi-Day Rental Options",
      "Doorstep Delivery across UB City & Airport Expressway",
      "Comprehensive Zero-Deductible Insurance Coverage",
      "Sport Chrono & Launch Control Briefing"
    ],
    image: "/images/porsche-yellow.png",
    iconName: "Key",
    idealFor: "Enthusiasts, Anniversaries & Birthday Surprises"
  },
  {
    id: "lamborghini-thrill",
    title: "Lamborghini Huracán V10 Experience",
    subtitle: "Raw 640 HP naturally aspirated V10 emotional roar.",
    badge: "High Emotion",
    description: "Experience Italian supercar royalty. Available for high-speed road trips, VIP event arrivals, and thrilling ride-along experiences.",
    highlights: [
      "Naturally Aspirated 5.2L V10 Exhaust Roar",
      "LDVI Dynamics & Anima Mode Switch",
      "Ideal for VIP entries & prestige occasions",
      "Complimentary HD GoPro Cockpit Capture"
    ],
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=85",
    iconName: "Flame",
    idealFor: "Thrill Seekers & VIP Prestige Events"
  },
  {
    id: "mustang-gt-drive",
    title: "Ford Mustang GT V8 Muscle Drive",
    subtitle: "Pure 5.0L Coyote V8 roar & iconic American muscle stance.",
    badge: "Muscle Icon",
    description: "Unleash 450 horsepower of pure American muscle. Deep rumble quad exhaust, MagneRide suspension, and head-turning presence on every avenue.",
    highlights: [
      "5.0L Coyote V8 Active Valve Exhaust",
      "Brembo 6-Piston Performance Brakes",
      "Smooth 10-Speed Automatic Cruise",
      "Perfect for photoshoots & weekend cruising"
    ],
    image: "/images/mustang-gt-exterior.png",
    iconName: "Zap",
    idealFor: "Weekend Escapes & Automotive Purists"
  },
  {
    id: "ferrari-f8-vip",
    title: "Ferrari F8 Tributo VIP Experience",
    subtitle: "Peak Maranello twin-turbo V8 engineering (710 HP).",
    badge: "VIP Reserve",
    description: "The crown jewel of Maranello. Experience explosive 0-100 acceleration in 2.9 seconds with white-glove VIP concierge support.",
    highlights: [
      "710 HP Twin-Turbo V8 Engine",
      "S-Duct Aerodynamics & Rosso Corsa Finish",
      "Chauffeur or Valet Delivery Options",
      "Red-carpet event onboarding"
    ],
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=85",
    iconName: "Sparkles",
    idealFor: "Wedding Grand Entries & Luxury Product Launches"
  },
  {
    id: "nandi-hills-roadtrip",
    title: "Nandi Hills Supercar Road Trip",
    subtitle: "Curated 100km+ dawn highway convoy & mountain run.",
    badge: "Curated Tour",
    description: "Join a pre-mapped sunrise drive from Bangalore to Nandi Hills. Includes smooth tarmac routes, luxury breakfast stopover, and aerial drone video capture.",
    highlights: [
      "Pre-mapped smooth tarmac routes",
      "Support vehicle & technical concierge",
      "Luxury breakfast / high-tea included",
      "Drone video & cinematic edit"
    ],
    image: "/images/porsche-yellow.png",
    iconName: "Compass",
    idealFor: "Automotive Purists & Sunrise Highway Drives"
  }
];
