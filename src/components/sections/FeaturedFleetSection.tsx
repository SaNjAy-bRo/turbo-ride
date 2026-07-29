"use client";

import { useState } from "react";
import { Gauge, Flame, Zap, ChevronRight, Info, Sparkles, Filter } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FLEET_DATA, Car } from "@/data/fleet";

interface FeaturedFleetSectionProps {
  onOpenBooking: (carId: string) => void;
  onOpenDetail: (car: Car) => void;
}

export default function FeaturedFleetSection({
  onOpenBooking,
  onOpenDetail,
}: FeaturedFleetSectionProps) {
  const [filter, setFilter] = useState<'all' | 'available' | 'coming-soon'>('all');

  const filteredFleet = FLEET_DATA.filter((car) => {
    if (filter === 'available') return car.status === 'available';
    if (filter === 'coming-soon') return car.status === 'coming-soon' || car.status === 'vip-reserve';
    return true;
  });

  return (
    <section id="fleet" className="py-24 bg-[#f8f9fa] text-neutral-900 relative overflow-hidden border-b border-neutral-200">
      {/* High-Contrast Studio Subtle Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-neutral-200/50 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF2D20] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bangalore Supercar Lineup</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-black tracking-tight">
              FEATURED <span className="text-[#FF2D20]">FLEET</span>
            </h2>
            <p className="text-neutral-600 text-sm max-w-xl mt-3 font-normal">
              Meticulously maintained high-performance machines. Available for self drive, luxury road trips, and VIP event entries.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 bg-neutral-200/80 p-1.5 rounded-xl border border-neutral-300 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-heading font-semibold uppercase tracking-wider transition-all ${
                filter === 'all'
                  ? "bg-black text-white shadow-md"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              All Vehicles ({FLEET_DATA.length})
            </button>
            <button
              onClick={() => setFilter('available')}
              className={`px-4 py-2 rounded-lg text-xs font-heading font-semibold uppercase tracking-wider transition-all ${
                filter === 'available'
                  ? "bg-black text-white shadow-md"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              Available Now
            </button>
            <button
              onClick={() => setFilter('coming-soon')}
              className={`px-4 py-2 rounded-lg text-xs font-heading font-semibold uppercase tracking-wider transition-all ${
                filter === 'coming-soon'
                  ? "bg-black text-white shadow-md"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xl hover:shadow-2xl hover:border-[#FF2D20]/40 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-60 w-full rounded-xl overflow-hidden mb-6 bg-neutral-100 border border-neutral-200">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${
                        car.status === 'available'
                          ? "bg-emerald-500 text-white"
                          : "bg-amber-500 text-black"
                      }`}
                    >
                      {car.statusLabel}
                    </span>
                  </div>

                  {/* View Details Overlay trigger */}
                  <button
                    onClick={() => onOpenDetail(car)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 text-black hover:bg-[#FF2D20] hover:text-white transition-colors"
                    title="View Full Specifications"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Car Title & Tagline */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl font-bold text-black group-hover:text-[#FF2D20] transition-colors">
                      {car.name}
                    </h3>
                    <span className="text-xs font-semibold text-neutral-500 font-heading">
                      {car.year}
                    </span>
                  </div>
                  <p className="text-neutral-600 text-xs mt-1 line-clamp-2 leading-relaxed">
                    {car.tagline}
                  </p>
                </div>

                {/* Key Specs Breakdown Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-neutral-200 mb-6 text-center">
                  <div className="p-2.5 rounded-lg bg-neutral-100">
                    <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-500 uppercase font-semibold">
                      <Flame className="w-3 h-3 text-[#FF2D20]" /> HP
                    </div>
                    <div className="font-heading text-sm font-bold text-black mt-0.5">
                      {car.horsepower}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-neutral-100">
                    <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-500 uppercase font-semibold">
                      <Gauge className="w-3 h-3 text-amber-600" /> 0-100
                    </div>
                    <div className="font-heading text-sm font-bold text-black mt-0.5">
                      {car.acceleration}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-neutral-100">
                    <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-500 uppercase font-semibold">
                      <Zap className="w-3 h-3 text-[#FF2D20]" /> Top
                    </div>
                    <div className="font-heading text-sm font-bold text-black mt-0.5">
                      {car.topSpeed}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & Booking Actions */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <div className="text-[10px] uppercase font-semibold text-neutral-500">Daily Rate</div>
                  <div className="font-heading text-xl font-extrabold text-black">
                    ₹{car.pricePerDay.toLocaleString('en-IN')}<span className="text-xs font-normal text-neutral-500">/day</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenDetail(car)}
                    className="p-3 rounded-xl bg-neutral-100 border border-neutral-300 hover:bg-neutral-200 text-black transition-colors"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(car.id)}
                    className="px-4 py-3 rounded-xl bg-[#FF2D20] hover:bg-[#e02619] text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-[#FF2D20]/20 transition-all"
                  >
                    <span>Reserve</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
