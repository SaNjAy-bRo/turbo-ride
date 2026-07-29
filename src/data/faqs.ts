export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "Rental Requirements",
    question: "What documents are required to rent a supercar with TurboRide in Bangalore?",
    answer: "To rent a supercar for Self Drive, you must present a valid Indian Driving License (or International Driving Permit for foreign nationals), Government-issued ID (Aadhaar Card or Passport), and proof of address. Driving licenses must be held for a minimum of 2 years."
  },
  {
    id: "faq-2",
    category: "Age Eligibility",
    question: "What is the minimum age requirement to drive?",
    answer: "The minimum age requirement for Self Drive is 21 years. Drivers aged 21-23 may be subject to a brief driving evaluation by our instructor. For Ride Along and Wedding Entry experiences, there is no age restriction."
  },
  {
    id: "faq-3",
    category: "Security Deposit",
    question: "How does the security deposit work, and when is it refunded?",
    answer: "A refundable security deposit is collected before handover via UPI, Credit Card, or Bank Transfer. Once the vehicle is returned and inspected by our technical team, the full deposit is refunded within 2 to 24 hours back to your original payment method."
  },
  {
    id: "faq-4",
    category: "Delivery & Pickup",
    question: "Do you deliver supercars to specific areas in Bangalore?",
    answer: "Yes! We offer white-glove doorstep delivery and pickup across all major Bangalore zones, including Indiranagar, Koramangala, UB City, Sadashivanagar, Whitefield, Electronic City, and Kempegowda International Airport (BLR)."
  },
  {
    id: "faq-5",
    category: "Insurance & Safety",
    question: "Are the supercars covered by insurance?",
    answer: "All TurboRide vehicles carry comprehensive commercial insurance. We maintain strict maintenance schedules with authorized brand service centers (e.g. Porsche Centre Bangalore) to ensure peak mechanical safety."
  },
  {
    id: "faq-6",
    category: "Mileage & Distance",
    question: "Is there a daily mileage limit?",
    answer: "Standard self-drive bookings include 150 km per day, which is ideal for city cruises, photoshoot routes, and trips to Nandi Hills. Additional kilometers can be purchased at transparent per-kilometer rates."
  },
  {
    id: "faq-7",
    category: "Pre-Booking Supercars",
    question: "How do I reserve the Lamborghini Huracán or Ford Mustang GT coming soon?",
    answer: "You can lock in early VIP reservation priority for upcoming fleet additions by clicking 'Pre-Book' or connecting directly with our WhatsApp concierge."
  }
];
