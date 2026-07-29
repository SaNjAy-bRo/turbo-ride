"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronRight, Flame, Gauge, Zap, Calendar, MapPin, MessageSquare, Volume2, Sparkles, ShieldCheck, Play, Pause, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FLEET_DATA } from "@/data/fleet";

interface HeroSectionProps {
  onOpenBooking: (carId?: string) => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const [activeCarId, setActiveCarId] = useState("porsche-718-cayman");
  const [viewMode, setViewMode] = useState<'video' | 'exterior' | 'cockpit'>('video');
  const [heroDate, setHeroDate] = useState("");
  const [isRevving, setIsRevving] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  const activeCar = FLEET_DATA.find((c) => c.id === activeCarId) || FLEET_DATA[0];

  // Guaranteed video autoplay for mobile & desktop browsers
  useEffect(() => {
    if (viewMode === 'video' && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => {
        setIsVideoPlaying(true);
      }).catch((err) => {
        console.warn("Video autoplay triggered:", err);
        setIsVideoPlaying(false);
      });
    }
  }, [activeCarId, viewMode]);

  const handleRevSound = () => {
    setIsRevving(true);
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }

    try {
      const audio = new Audio(activeCar.audioUrl);
      audio.volume = 0.95;
      currentAudioRef.current = audio;
      
      audio.play().then(() => {
        audio.onended = () => setIsRevving(false);
        setTimeout(() => setIsRevving(false), 3500);
      }).catch(() => {
        // Fallback Web Audio Synth
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = activeCarId === 'porsche-718-cayman' ? 'sawtooth' : activeCarId === 'lamborghini-huracan-evo' ? 'triangle' : 'square';
        osc.frequency.setValueAtTime(activeCar.audioFrequency, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(500, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(3500, ctx.currentTime + 0.8);
        filter.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 2.0);

        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.2);
        gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 2.2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        setTimeout(() => {
          osc.stop();
          ctx.close();
          setIsRevving(false);
        }, 2200);
      });
    } catch {
      setIsRevving(false);
    }
  };

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const currentImage = viewMode === 'cockpit' && activeCar.cockpitImage ? activeCar.cockpitImage : activeCar.image;

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#050505] border-b border-white/10">
      {/* Pure High-Definition Background Media Engine for Mobile & Desktop */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCarId}-${viewMode}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 z-0"
        >
          {/* Universal Video View for Mobile & Desktop */}
          {viewMode === 'video' && activeCar.heroVideo && (
            <video
              ref={videoRef}
              key={activeCar.heroVideo}
              src={activeCar.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-center scale-105"
            />
          )}

          {/* Exterior / Cockpit Image View */}
          {viewMode !== 'video' && (
            <div className="absolute inset-0">
              <Image
                src={currentImage}
                alt={`${activeCar.name} TurboRide Bangalore`}
                fill
                priority
                className="object-cover object-center scale-105"
              />
            </div>
          )}

          {/* Subtle Bottom & Side Vignette Gradient for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40 opacity-70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Headline & Subheadline (Mobile Order 1) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-1 lg:col-span-7 space-y-4 text-center lg:text-left w-full"
          >
            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] drop-shadow-2xl">
              DRIVE THE <br />
              <span
                className="bg-clip-text text-transparent drop-shadow-2xl"
                style={{
                  backgroundImage: `linear-gradient(135deg, #FFFFFF 0%, ${activeCar.brandColor} 100%)`,
                }}
              >
                EXTRAORDINARY
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-neutral-300 text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed drop-shadow-md">
              Experience world-class supercars on the finest roads of Bangalore. Pure mechanical emotion, laser-sharp PDK dynamics, and white-glove doorstep handover.
            </p>
          </motion.div>

          {/* Supercar Telemetry HUD Card (Mobile Order 2 -> MOVES UP ON MOBILE) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-3 lg:col-span-5 w-full relative"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden group backdrop-blur-xl bg-black/60">
              {/* Top View Mode Switcher */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-heading font-bold text-white uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" style={{ color: activeCar.brandColor }} />
                  <span>Telemetry HUD</span>
                </div>

                <div className="flex items-center gap-1 glass-pill p-1 rounded-lg border border-white/15 text-[10px]">
                  <button
                    onClick={() => setViewMode('video')}
                    className={`px-2.5 py-1 rounded-md font-heading uppercase transition-colors flex items-center gap-1 ${
                      viewMode === 'video' ? "bg-white text-black font-bold" : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    <Video className="w-3 h-3" />
                    Video
                  </button>
                  <button
                    onClick={() => setViewMode('exterior')}
                    className={`px-2.5 py-1 rounded-md font-heading uppercase transition-colors ${
                      viewMode === 'exterior' ? "bg-white text-black font-bold" : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    Exterior
                  </button>
                  <button
                    onClick={() => setViewMode('cockpit')}
                    className={`px-2.5 py-1 rounded-md font-heading uppercase transition-colors ${
                      viewMode === 'cockpit' ? "bg-white text-black font-bold" : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    Cockpit
                  </button>
                </div>
              </div>

              {/* Vehicle Highlight Card */}
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 border border-white/15 bg-neutral-900 shadow-inner">
                <Image
                  src={currentImage}
                  alt={activeCar.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Video Play/Pause Overlay Button */}
                {viewMode === 'video' && (
                  <button
                    onClick={toggleVideoPlayback}
                    className="absolute top-3 right-3 p-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                  >
                    {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>
                )}

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">
                      {activeCar.brand} Performance
                    </span>
                    <h3 className="font-heading text-xl font-extrabold">{activeCar.name}</h3>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-neutral-400 block uppercase">Rental Rate</span>
                    <span className="font-heading text-lg font-extrabold" style={{ color: activeCar.brandColor }}>
                      ₹{activeCar.pricePerDay.toLocaleString('en-IN')}<span className="text-xs font-normal text-neutral-400">/day</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Jet Fighter Telemetry Metrics Grid */}
              <div className="grid grid-cols-3 gap-2.5 text-center mb-4">
                <div className="p-3 rounded-xl bg-neutral-950/90 border border-white/10">
                  <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-400 uppercase font-semibold">
                    <Flame className="w-3.5 h-3.5 text-[#FF2D20]" /> Output
                  </div>
                  <div className="font-heading text-base font-extrabold text-white mt-1">
                    {activeCar.horsepower} HP
                  </div>
                  <div className="text-[9px] text-neutral-500 truncate mt-0.5">{activeCar.engine}</div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-950/90 border border-white/10">
                  <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-400 uppercase font-semibold">
                    <Gauge className="w-3.5 h-3.5" style={{ color: activeCar.brandColor }} /> 0-100
                  </div>
                  <div className="font-heading text-base font-extrabold text-white mt-1">
                    {activeCar.acceleration}
                  </div>
                  <div className="text-[9px] text-neutral-500 mt-0.5">Sprint Time</div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-950/90 border border-white/10">
                  <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-400 uppercase font-semibold">
                    <Zap className="w-3.5 h-3.5 text-[#FF2D20]" /> Top Speed
                  </div>
                  <div className="font-heading text-base font-extrabold text-white mt-1">
                    {activeCar.topSpeed}
                  </div>
                  <div className="text-[9px] text-neutral-500 mt-0.5">Maximum V-max</div>
                </div>
              </div>

              {/* Quick Perks */}
              <div className="flex items-center justify-between text-xs text-neutral-400 pt-2 border-t border-white/10">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" /> Insured Handover
                </span>
                <span className="text-white font-heading font-medium">150 km/day included</span>
              </div>
            </div>
          </motion.div>

          {/* Car Selection Switcher Tabs & Action Buttons (Mobile Order 3 -> MOVES DOWN BELOW TELEMETRY HUD) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-3 lg:order-2 lg:col-span-7 space-y-6 text-center lg:text-left w-full mt-2 lg:mt-0"
          >
            {/* Car Switcher Tabs */}
            <div className="pt-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 drop-shadow">
                Select Vehicle Unveiling
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {FLEET_DATA.map((car) => (
                  <button
                    key={car.id}
                    onClick={() => {
                      setActiveCarId(car.id);
                      setViewMode('video');
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all border ${
                      activeCarId === car.id
                        ? "text-black border-white shadow-2xl scale-105"
                        : "bg-black/70 backdrop-blur-md text-neutral-300 border-white/15 hover:border-white/40"
                    }`}
                    style={{
                      backgroundColor: activeCarId === car.id ? car.brandColor : undefined,
                    }}
                  >
                    {car.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenBooking(activeCarId)}
                className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-2xl"
              >
                <span
                  className="absolute inset-0 rounded-xl opacity-90 group-hover:opacity-100 transition-opacity"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${activeCar.brandColor}, #FF2D20)`,
                  }}
                />
                <span className="relative flex items-center gap-3 px-8 py-4 rounded-[11px] bg-[#050505] text-white group-hover:bg-[#FF2D20] group-hover:text-black transition-all duration-300 font-heading font-bold">
                  <span>Reserve {activeCar.name}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={handleRevSound}
                className={`flex items-center gap-2.5 px-6 py-4 rounded-xl border font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all backdrop-blur-xl ${
                  isRevving
                    ? "bg-[#FFD000] text-black border-[#FFD000] shadow-2xl animate-pulse"
                    : "bg-black/70 text-white border-white/20 hover:bg-white/10"
                }`}
              >
                <Volume2 className="w-4 h-4 text-[#FF2D20]" />
                <span>{isRevving ? "Revving Exhaust..." : "Rev Real Engine"}</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Quick Availability Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
        <div className="glass-panel p-4 rounded-2xl border border-white/15 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center backdrop-blur-xl bg-black/60">
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#FF2D20]" /> Select Supercar
            </label>
            <select
              value={activeCarId}
              onChange={(e) => setActiveCarId(e.target.value)}
              className="w-full bg-neutral-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white font-heading font-semibold focus:outline-none focus:border-[#FF2D20]"
            >
              {FLEET_DATA.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.name} ({car.status === 'available' ? 'Available Now' : 'Pre-Book'})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#FF2D20]" /> Preferred Date
            </label>
            <input
              type="date"
              value={heroDate}
              onChange={(e) => setHeroDate(e.target.value)}
              className="w-full bg-neutral-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-[#FFFFFF] font-heading focus:outline-none focus:border-[#FF2D20]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#FF2D20]" /> Delivery Zone
            </label>
            <div className="bg-neutral-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white font-heading font-medium flex items-center justify-between">
              <span>UB City / Doorstep BLR</span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-bold">Free</span>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking(activeCarId)}
            className="w-full h-full py-3.5 rounded-xl bg-[#FF2D20] hover:bg-[#e02619] text-[#000000] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#FF2D20]/25"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>Check Availability</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
