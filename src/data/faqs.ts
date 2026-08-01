export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "Driving Experience",
    question: "Do I need prior experience driving a supercar?",
    answer: "No! You will receive a full briefing and have an instructor/pilot guide you to ensure a safe, exhilarating drive."
  },
  {
    id: "faq-2",
    category: "Requirements",
    question: "What is required to book a supercar drive?",
    answer: "A valid, original driving license and completion of our quick safety agreement."
  },
  {
    id: "faq-3",
    category: "Pricing & Packages",
    question: "How is the driving session priced?",
    answer: "Pricing is based per highway experience session."
  },
  {
    id: "faq-4",
    category: "Fuel & Pilot",
    question: "Is fuel included in the booking fee?",
    answer: "Yes, all drive experience packages are all-inclusive of fuel and pilot guidance."
  },
  {
    id: "faq-5",
    category: "Insurance & Safety",
    question: "Are the supercars covered by insurance during the session?",
    answer: "All TurboRide supercars carry full commercial insurance coverage. Every vehicle undergoes a 50-point technical pre-drive check to guarantee safety."
  },
  {
    id: "faq-6",
    category: "Media Packages",
    question: "Are photos and videos included with my drive session?",
    answer: "Yes! High-resolution exterior stills and 4K Instagram format reels are captured during your session and delivered directly to you."
  }
];
