"use client";

import { useState, useRef } from "react";
import { Volume2, Play, Square, Flame } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FLEET_DATA, Car } from "@/data/fleet";

export default function SoundSimulatorSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCarId, setActiveCarId] = useState("porsche-718-cayman");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeCar = FLEET_DATA.find((c) => c.id === activeCarId) || FLEET_DATA[0];

  const playRealSupercarAudio = (car: Car) => {
    setActiveCarId(car.id);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    try {
      const audio = new Audio(car.audioUrl);
      audioRef.current = audio;
      audio.volume = 0.85;

      setIsPlaying(true);
      audio.play().catch((err) => {
        console.warn("Audio autoplay fallback:", err);
      });

      audio.onended = () => {
        setIsPlaying(false);
      };
    } catch {
      setIsPlaying(false);
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  return (
    <section id="sound-experience" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Supercar Studio Cockpit Background Image with Bare Minimum Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85"
          alt="Porsche Cockpit Studio Background"
          fill
          className="object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/60 opacity-60" />
      </div>

      {/* Dynamic Brand Ambient Light Orb */}
      <motion.div
        animate={{
          backgroundColor: activeCar.brandColor,
          opacity: 0.3,
        }}
        transition={{ duration: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/20 text-xs font-semibold uppercase tracking-widest text-white mb-3 bg-black/60 backdrop-blur-md">
            <Volume2 className="w-3.5 h-3.5 text-[#FF2D20]" />
            <span>Authentic Exhaust Acoustics</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-2xl">
            REAL SUPERCAR <span className="text-gradient-red">EXHAUST SOUNDS</span>
          </h2>
          <p className="text-white text-sm mt-3 font-normal leading-relaxed drop-shadow-lg">
            Tap a supercar below to play authentic high-definition exhaust roars recorded live from the tailpipes.
          </p>
        </div>

        {/* Vehicle Audio Selector Grid */}
        <div className="glass-card rounded-3xl p-6 sm:p-12 border border-white/25 max-w-5xl mx-auto relative overflow-hidden shadow-2xl backdrop-blur-2xl bg-black/65">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {FLEET_DATA.map((car) => {
              const isSelected = activeCarId === car.id;
              return (
                <button
                  key={car.id}
                  onClick={() => {
                    if (isSelected && isPlaying) {
                      stopAudio();
                    } else {
                      playRealSupercarAudio(car);
                    }
                  }}
                  className={`p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                    isSelected
                      ? "bg-neutral-900/90 border-[#FF2D20] shadow-xl shadow-[#FF2D20]/20 scale-102"
                      : "bg-neutral-950/85 border-white/15 hover:border-white/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                      {car.brand} Exhaust Spec
                    </span>
                    <div
                      className="w-3.5 h-3.5 rounded-full border border-white/20"
                      style={{ backgroundColor: car.brandColor }}
                    />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#FF2D20] transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-neutral-300 text-xs mt-1">{car.engine}</p>

                  <div className="mt-5 flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-black shadow-md transition-transform group-hover:scale-110"
                      style={{ backgroundColor: car.brandColor }}
                    >
                      {isSelected && isPlaying ? (
                        <Square className="w-4 h-4 fill-black" />
                      ) : (
                        <Play className="w-4 h-4 fill-black translate-x-0.5" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-heading font-bold uppercase text-white block">
                        {isSelected && isPlaying ? "Playing Real Sound..." : "Listen Real Audio"}
                      </span>
                      <span className="text-[10px] text-neutral-400">Live Recording</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Real Audio Equalizer Visualizer */}
          <div className="p-6 rounded-2xl bg-neutral-950/90 border border-white/15 flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center gap-1.5 h-16">
              {[...Array(32)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: isPlaying ? [12, Math.random() * 56 + 12, 12] : 8,
                  }}
                  transition={{
                    repeat: isPlaying ? Infinity : 0,
                    duration: 0.15 + (i % 6) * 0.08,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 rounded-full"
                  style={{
                    backgroundColor: isPlaying ? activeCar.brandColor : "#555555",
                  }}
                />
              ))}
            </div>

            <div className="text-center space-y-1">
              <span className="text-xs font-heading font-bold uppercase text-white flex items-center justify-center gap-1.5">
                <Flame className="w-4 h-4 text-[#FF2D20]" />
                {activeCar.name} • {activeCar.engine}
              </span>
              <p className="text-[11px] text-neutral-300 font-mono">
                {activeCar.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
