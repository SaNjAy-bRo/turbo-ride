export interface Review {
  id: string;
  name: string;
  role: string;
  location: string;
  vehicleDriven: string;
  rating: number;
  date: string;
  comment: string;
  verifiedSource: 'Google Verified' | 'Instagram Verified' | 'VIP Customer';
  avatar: string;
  highlightBadge: string;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    name: "Vikramaditya Rao",
    role: "Tech Founder & Angel Investor",
    location: "Indiranagar, Bangalore",
    vehicleDriven: "Porsche 718 Cayman",
    rating: 5,
    date: "July 2026",
    comment: "Rented the Porsche 718 Cayman for my 30th birthday drive to Nandi Hills. The condition of the car was pristine—clean engine response, zero mechanical glitches, and the delivery was right on time at my residence. TurboRide is hands down the gold standard for supercar rentals in India.",
    verifiedSource: "Google Verified",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    highlightBadge: "Verified Porsche Self Drive"
  },
  {
    id: "rev-2",
    name: "Ananya & Rohan Deshmukh",
    role: "Wedding Clients",
    location: "UB City, Bangalore",
    vehicleDriven: "Porsche 718 Cayman",
    rating: 5,
    date: "June 2026",
    comment: "We booked the Porsche for Rohan's entry at our wedding reception in Leela Palace. The engine roar, the polished coat under venue lights, and the seamless coordination by the TurboRide team made our entry look straight out of a movie!",
    verifiedSource: "Instagram Verified",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    highlightBadge: "Wedding Entry Customer"
  },
  {
    id: "rev-3",
    name: "Siddharth Nair",
    role: "Automotive Creator & Vlogger",
    location: "Koramangala, Bangalore",
    vehicleDriven: "Porsche 718 Cayman",
    rating: 5,
    date: "May 2026",
    comment: "I've shot with luxury rental companies across Dubai and Europe, and TurboRide matches that exact international level. Professional paperwork, transparent security deposit refund within 2 hours, and top-tier vehicle upkeep.",
    verifiedSource: "Google Verified",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    highlightBadge: "4K YouTube Shoot"
  },
  {
    id: "rev-4",
    name: "Karan Johar",
    role: "Managing Director",
    location: "Sadashivanagar, Bangalore",
    vehicleDriven: "Porsche 718 Cayman",
    rating: 5,
    date: "April 2026",
    comment: "Hosted an executive client retreat and booked the Ride Along and Weekend drive package. Everything from white-glove delivery to 24/7 concierge was executed flawlessly. Highly recommended.",
    verifiedSource: "VIP Customer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    highlightBadge: "Corporate VIP Client"
  }
];

export const TRUST_STATS = [
  { label: "Supercar Drives Completed", value: "500+", description: "Flawlessly delivered across Bangalore & Karnataka" },
  { label: "Google & Social Rating", value: "4.9 ★", description: "Based on 180+ verified client testimonials" },
  { label: "Insured Fleet Coverage", value: "100%", description: "Zero-deductible comprehensive insurance" },
  { label: "Concierge Response Time", value: "< 15m", description: "Direct WhatsApp & dedicated concierge hotline" },
];
