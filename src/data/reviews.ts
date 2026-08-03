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
    name: "Tony Paulson Chungath",
    role: "Local Guide",
    location: "Bengaluru",
    vehicleDriven: "Porsche 718 Cayman",
    rating: 5,
    date: "2 months ago",
    comment: "We had an amazing experience here with the one and only Porsche 718 Caymen. It was a surprise for my best friend and he loved the driving. The car was in top notch condition with proper instructions and support provided by the Turbo ride team. We even got the reels done through their team and spend a great time with friends. Will recommend everyone to experience this car at least once with Turboride.",
    verifiedSource: "Google Verified",
    avatar: "/images/gallery/tony paul.png",
    highlightBadge: "HIGHWAY DRIVE EXPERIENCE"
  },
  {
    id: "rev-2",
    name: "Gayathri R",
    role: "Verified Customer",
    location: "Bengaluru",
    vehicleDriven: "Porsche 718 Cayman",
    rating: 5,
    date: "2 months ago",
    comment: "I had booked the Turboride Porsche driving experience for my husband as a birthday gift, and it turned out to be an amazing experience. Everything was very smooth right from the booking process to the actual drive. He absolutely enjoyed driving the Porsche, and the whole experience was well organized and memorable. Highly recommended for anyone looking for a unique gift or driving experience!",
    verifiedSource: "Google Verified",
    avatar: "/images/gallery/gayathri r.png",
    highlightBadge: "BIRTHDAY GIFT DRIVE"
  },
  {
    id: "rev-3",
    name: "Ganesh Raghav",
    role: "Local Guide",
    location: "Bengaluru",
    vehicleDriven: "Porsche 718 Cayman",
    rating: 5,
    date: "3 months ago",
    comment: "I had the most incredible birthday surprise thanks to Turbo Ride! I got to drive a Porsche Cayman 718, and honestly, it was a dream come true. Everything was perfectly arranged Mr. Prashanth was super professional, friendly, and made sure I was comfortable before hitting the road. The car itself was in top condition, and the whole experience felt premium and seamless. It’s not every day you get to live a moment like this, and it truly made my birthday unforgettable. Huge thanks to Turbo Ride for making it so special. Highly recommend this to anyone looking for a unique and thrilling experience!",
    verifiedSource: "Google Verified",
    avatar: "/images/gallery/ganesh raghav.png",
    highlightBadge: "BIRTHDAY HIGHWAY DRIVE"
  },
  {
    id: "rev-4",
    name: "Shenoy Rahul",
    role: "Verified Driver",
    location: "Bengaluru",
    vehicleDriven: "Porsche 718 Cayman",
    rating: 5,
    date: "5 months ago",
    comment: "It was an amazing experience to witness the joy of driving the super car ! Must try and especially dont forget to capture your experience!! Prashant was an amazing gentleman who explained in detail about the car and its features and assisted throughout",
    verifiedSource: "Google Verified",
    avatar: "/images/gallery/shenoy.png",
    highlightBadge: "SUPERCAR EXPERIENCE"
  }
];

export const TRUST_STATS = [
  { label: "Drives Completed", value: "500+", description: "Flawlessly executed highway drive experiences in Bengaluru" },
  { label: "Google & Social Rating", value: "5.0 ★", description: "Based on verified client testimonials" },
  { label: "Insured Fleet Coverage", value: "100%", description: "Full insurance coverage for peace of mind" },
  { label: "Response Time", value: "< 15m", description: "Dedicated drive booking support via WhatsApp & phone" },
];
