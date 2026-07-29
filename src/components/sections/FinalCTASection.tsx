"use client";

import { Phone, Calendar, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

interface FinalCTASectionProps {
  onOpenBooking: () => void;
}

export default function FinalCTASection({ onOpenBooking }: FinalCTASectionProps) {
  return (
    <section className="py-28 bg-[#050505] relative overflow-hidden">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85"
          alt="Porsche 718 Cayman Cockpit Final CTA"
          fill
          className="object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]" />
      </div>

      {/* Ambient Red Glow */}
      <div className="ambient-red-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 sm:p-16 border border-[#FF2D20]/30 shadow-2xl shadow-red-950/30"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF2D20]/15 border border-[#FF2D20]/40 text-xs font-semibold uppercase tracking-widest text-[#FFD000] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2D20]" />
            <span>Bangalore Supercar Reservations</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            BOOK YOUR DREAM <br />
            <span className="text-gradient-red">DRIVE TODAY</span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-lg max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            The keys to the Porsche 718 Cayman are waiting. Deliveries available across Bangalore with white-glove concierge support.
          </p>

          {/* Action Button Stack */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-xl bg-[#FF2D20] hover:bg-[#e02619] text-black font-heading font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#FF2D20]/30 transition-all hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Online Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919876543210?text=Hi%20TurboRide%2C%20I%20want%20to%20reserve%20a%20supercar%20in%20Bangalore."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/25 font-heading font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>WhatsApp Concierge</span>
            </a>

            <a
              href="tel:+919876543210"
              className="px-8 py-4 rounded-xl bg-neutral-900 border border-white/10 hover:border-white/30 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-[#FF2D20]" />
              <span>Call Hotline</span>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Zero-Deductible Insurance
            </span>
            <span>•</span>
            <span className="text-[#FFD000]">Fast Doorstep Delivery</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
