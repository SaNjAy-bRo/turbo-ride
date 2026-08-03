"use client";

import { Star, ShieldCheck, Quote, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { REVIEWS_DATA } from "@/data/reviews";

export default function CustomerReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-[#f3f4f6] text-neutral-900 relative overflow-hidden border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold uppercase tracking-widest text-amber-700 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>4.9 Star Rating • Verified Testimonials</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-black tracking-tight">
            REAL DRIVER <span className="text-[#FF2D20]">EXPERIENCES</span>
          </h2>
          <p className="text-neutral-600 text-sm mt-3 font-normal">
            Unfiltered reviews from real drivers who turned their supercar dreams into open-road reality.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-xl hover:shadow-2xl hover:border-[#FF2D20]/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-neutral-100 group-hover:text-[#FF2D20]/15 transition-colors" />

              <div>
                {/* Header Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-neutral-300 shrink-0">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-black flex items-center gap-2">
                      <span>{review.name}</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </h3>
                    <div className="text-xs text-neutral-500 font-normal">
                      {review.role} • {review.location}
                    </div>
                  </div>
                </div>

                {/* Rating & Vehicle Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-[10px] font-heading font-bold uppercase tracking-wider text-[#FF2D20]">
                    {review.highlightBadge}
                  </span>
                </div>

                {/* Review Body Text */}
                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed italic font-normal">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Footer info */}
              <div className="pt-6 mt-6 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                <span>Vehicle: <strong className="text-black">{review.vehicleDriven}</strong></span>
                <span className="text-emerald-700 flex items-center gap-1 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {review.verifiedSource}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
