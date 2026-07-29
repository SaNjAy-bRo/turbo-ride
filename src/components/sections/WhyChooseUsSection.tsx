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
      description: "Every vehicle is covered under comprehensive commercial insurance and undergoes a 50-point technical check before every handover."
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#FFD000]" />,
      title: "White-Glove Doorstep Delivery",
      description: "We deliver the supercar directly to your home, office, or luxury hotel anywhere in Bangalore—from UB City to Devanahalli Airport."
    },
    {
      icon: <Lock className="w-6 h-6 text-[#FF2D20]" />,
      title: "Transparent & Fast Security Deposit",
      description: "No hidden charges. Your security deposit is held securely and refunded directly to your account within 2 to 24 hours post-return."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#FFD000]" />,
      title: "24/7 Dedicated Supercar Concierge",
      description: "Our performance specialists remain on standby via WhatsApp and direct hotline for live technical support, route maps, and assistance."
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
            WHY EXECUTIVES CHOOSE <span className="text-gradient-red">TURBORIDE</span>
          </h2>
          <p className="text-neutral-200 text-sm mt-3 font-light leading-relaxed drop-shadow-lg">
            We don&apos;t just rent cars; we deliver unforgettable automotive memories crafted with security, speed, and discretion.
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
