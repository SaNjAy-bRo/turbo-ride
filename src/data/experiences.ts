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
    id: "self-drive",
    title: "Self Drive Supercar Experience",
    subtitle: "Command the cockpit yourself on curated scenic routes.",
    badge: "Most Popular",
    description: "Take absolute control of the wheel. We deliver the Porsche 718 Cayman directly to your doorstep in Bangalore with zero hassle and white-glove onboarding.",
    highlights: [
      "24-Hour / Multi-Day Rental Options",
      "Doorstep Delivery across Bangalore",
      "Comprehensive Zero-Deductible Insurance Coverage",
      "Detailed Cockpit & Launch Control Briefing"
    ],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
    iconName: "Key",
    idealFor: "Enthusiasts, Anniversaries & Birthday Surprises"
  },
  {
    id: "ride-along",
    title: "Ride Along Experience",
    subtitle: "Thrill without the driving responsibility.",
    badge: "High Emotion",
    description: "Sit shotgun while an experienced performance driver navigates high-speed expressways or twisty mountain passes around Nandi Hills.",
    highlights: [
      "Professional Precision Driver at the Wheel",
      "Dynamic Launch Control Demos",
      "Ideal for non-drivers or thrill seekers",
      "Complimentary HD GoPro Cockpit Footage"
    ],
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=85",
    iconName: "Flame",
    idealFor: "Thrill Seekers & Gift Vouchers"
  },
  {
    id: "luxury-driving-experiences",
    title: "Luxury Driving Experiences",
    subtitle: "Custom 100km+ curated supercar road trips.",
    badge: "Bespoke",
    description: "Experience Bangalore to Nandi Hills or Kolar Highway in style. Includes luxury breakfast stopover, convoy support, and aerial drone capture.",
    highlights: [
      "Pre-mapped smooth tarmac routes",
      "Support vehicle & technical concierge",
      "Luxury breakfast / high-tea included",
      "Drone video & cinematic edit"
    ],
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=85",
    iconName: "Compass",
    idealFor: "Weekend Escapes & Automotive Purists"
  },
  {
    id: "photoshoots",
    title: "Cinematic Photoshoots & Reels",
    subtitle: "High-fashion & automotive media productions.",
    badge: "Creator Preferred",
    description: "Elevate your brand, YouTube channel, or personal portfolio with studio-lit static setups or dynamic rolling shots on location.",
    highlights: [
      "Hourly static & rolling shoot slots",
      "Clean, flawless exterior detail",
      "Access to Bangalore premium shoot locations",
      "Lighting & crew assistant provided"
    ],
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=85",
    iconName: "Camera",
    idealFor: "Content Creators, Models & Brands"
  },
  {
    id: "wedding-entry",
    title: "Grand Wedding Entry",
    subtitle: "Make an unforgettable arrival on your big day.",
    badge: "VIP Luxury",
    description: "Arrive like royalty in a roaring supercar. Red-carpet valet setup, pristine detailing, and uniformed chauffeur for smooth wedding transitions.",
    highlights: [
      "Immaculate detail polishing & floral trim friendly",
      "Chauffeur or Groom Self-Drive Option",
      "On-time venue arrival guarantee",
      "Photo-op session with guests"
    ],
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=85",
    iconName: "Sparkles",
    idealFor: "Grooms, Brides & Luxury Weddings"
  },
  {
    id: "corporate-events",
    title: "Corporate Events & Product Launches",
    subtitle: "Impress clients & motivate top performers.",
    badge: "Enterprise",
    description: "Add magnetic prestige to your tech product launch, corporate gala, or VIP incentive drive in Silicon Valley of India.",
    highlights: [
      "Multi-vehicle display options",
      "Branded vinyl wrap options available",
      "VIP client drive experiences",
      "Dedicated corporate liaison manager"
    ],
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=85",
    iconName: "Briefcase",
    idealFor: "Tech Executives, Brands & Galas"
  },
  {
    id: "weekend-experiences",
    title: "Weekend Supercar Escape",
    subtitle: "48-hour unrestricted luxury journey.",
    badge: "Ultimate Weekend",
    description: "Escape the city hustle with a 2-day weekend package. Freedom to explore Coorg, Chikmagalur, or Mysore in total elegance.",
    highlights: [
      "Extended mileage allowance",
      "Zero hassle valet pickup",
      "24/7 roadside VIP support",
      "Exclusive member perks"
    ],
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85",
    iconName: "Sun",
    idealFor: "Luxury Getaways & Special Celebrations"
  }
];
