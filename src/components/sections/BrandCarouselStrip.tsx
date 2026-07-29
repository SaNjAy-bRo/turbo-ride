"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
  badgeBg?: string;
}

const BRANDS: Brand[] = [
  { name: "Porsche", logo: "/images/logos/porsche.svg" },
  { name: "Lamborghini", logo: "/images/logos/lamborghini.svg" },
  { name: "BMW", logo: "/images/logos/bmw.svg" },
  { name: "Mercedes-Benz", logo: "/images/logos/mercedes.svg" },
  { name: "Audi", logo: "/images/logos/audi.svg" },
  { name: "Ford Mustang", logo: "/images/logos/ford.svg" },
  { name: "Land Rover", logo: "/images/logos/landrover.svg" },
  { name: "McLaren", logo: "/images/logos/mclaren.svg" },
  { name: "Bugatti", logo: "/images/logos/bugatti.svg" },
  { name: "Aston Martin", logo: "/images/logos/astonmartin.svg" },
  { name: "Bentley", logo: "/images/logos/bentley.svg" },
  { name: "Maserati", logo: "/images/logos/maserati.svg" },
  { name: "Rolls-Royce", logo: "/images/logos/rollsroyce.svg" },
];

export default function BrandCarouselStrip() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Duplicate 14-brand array for a smooth 100% infinite continuous marquee loop
  const doubleBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="relative py-10 bg-[#060606] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Line matching User Reference Design */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-r from-transparent via-neutral-600 to-white/40" />
          <h2 className="font-heading text-xs sm:text-sm font-black tracking-[0.35em] uppercase text-white drop-shadow">
            ALL BRAND CAR
          </h2>
          <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-l from-transparent via-neutral-600 to-white/40" />
        </div>

        {/* Carousel Container with Chevrons and Slow Infinite Auto-Marquee */}
        <div className="relative flex items-center justify-center group">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-2 sm:left-0 z-30 p-3 text-[#FF2D20] hover:text-white transition-all focus:outline-none bg-black/80 hover:bg-[#FF2D20] hover:scale-110 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl"
            aria-label="Previous Brands"
          >
            <ChevronLeft className="w-5 h-5 stroke-[3]" />
          </button>

          {/* Smooth Slow Auto-Carousel Ticker Window */}
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth px-8 py-3 w-full max-w-6xl"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div
              className={`flex items-center gap-4 sm:gap-6 shrink-0 transition-transform duration-1000 ${
                isPaused ? "" : "animate-marquee-slow"
              }`}
            >
              {doubleBrands.map((brand, idx) => (
                <div
                  key={`${brand.name}-${idx}`}
                  className="flex-none w-32 sm:w-40 h-20 sm:h-24 bg-white rounded-2xl shadow-xl border border-neutral-200 flex flex-col items-center justify-center p-3 group/card hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  {/* Colorful Authentic Vector Logo */}
                  <div className="relative w-full h-12 flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} official colorful logo`}
                      width={90}
                      height={48}
                      className="max-h-11 w-auto object-contain transition-transform group-hover/card:scale-110 drop-shadow-sm"
                      unoptimized
                    />
                  </div>

                  {/* Brand Label */}
                  <span className="text-[10px] sm:text-xs font-heading font-extrabold text-neutral-900 uppercase tracking-wider mt-1 truncate max-w-full">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 sm:right-0 z-30 p-3 text-[#FF2D20] hover:text-white transition-all focus:outline-none bg-black/80 hover:bg-[#FF2D20] hover:scale-110 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl"
            aria-label="Next Brands"
          >
            <ChevronRight className="w-5 h-5 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Tailwind Marquee Custom Keyframes Style */}
      <style jsx>{`
        @keyframes marqueeSlow {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-slow {
          animation: marqueeSlow 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
