"use client";

import { ShieldCheck, Clock, Award, MapPin, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TRUST_STATS } from "@/data/reviews";

export default function WhyChooseUsSection() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#FF2D20]" />,
      title: "100% Insured & Verified Fleet",
      description: "Every supercar is covered under comprehensive insurance and undergoes a rigorous 50-point safety and mechanical check before every drive session."
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#FFD000]" />,
      title: "Expert Safety Pilot Guidance",
      description: "Drive with complete confidence. Every highway session includes a professional safety pilot providing a thorough briefing and live route guidance."
    },
    {
      icon: <Lock className="w-6 h-6 text-[#FF2D20]" />,
      title: "All-Inclusive Experience Pricing",
      description: "Transparent pricing with zero hidden fees. Your booking covers supercar access, fuel, professional pilot guidance, and 4K media packages."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#FFD000]" />,
      title: "24/7 Dedicated Supercar Support",
      description: "Our performance team is available on WhatsApp and phone to answer queries, help select your supercar package, and coordinate your drive slot seamlessly."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-b border-white/10">
      {/* Supercar Studio Workshop Background Image with Balanced Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=2000&q=85"
          alt="Supercar Workshop Studio Background"
          fill
          className="object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-[#0a0a0a]/70 opacity-70" />
      </div>

      {/* Background Orbs */}
      <div className="ambient-red-glow top-1/3 left-1/4 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-emerald-500/40 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3 bg-black/60 backdrop-blur-md">
            <Award className="w-3.5 h-3.5" />
            <span>Unmatched Luxury Standards</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-2xl">
            WHY ENTHUSIASTS CHOOSE <span className="text-gradient-red">TURBORIDE</span>
          </h2>
          <p className="text-neutral-200 text-sm mt-3 font-light leading-relaxed drop-shadow-lg">
            We don&apos;t just hand over keys; we curate unforgettable supercar highway drive experiences engineered for pure performance, thrill, and safety.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TRUST_STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-white/20 text-center relative overflow-hidden group backdrop-blur-2xl bg-black/70"
            >
              <div className="font-heading text-3xl sm:text-4xl font-black text-[#FFD000] group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="font-heading text-xs font-bold text-white uppercase tracking-wider mt-2">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-300 mt-1">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl p-8 border border-white/20 flex items-start gap-5 hover:border-[#FF2D20]/60 transition-colors group backdrop-blur-2xl bg-black/70"
            >
              <div className="p-3 rounded-2xl bg-neutral-900 border border-white/15 shrink-0 group-hover:bg-[#FF2D20]/15 transition-colors shadow-md">
                {item.icon}
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#FF2D20] transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-300 text-xs mt-2 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
