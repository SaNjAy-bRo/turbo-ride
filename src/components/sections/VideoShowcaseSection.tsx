"use client";

import { useState } from "react";
import { Play, Instagram, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export interface Reel {
  id: string;
  title: string;
  duration: string;
  views: string;
  thumbnail: string;
  reelUrl: string;
  embedUrl: string;
  creator: string;
  category: string;
}

export const INSTAGRAM_REELS: Reel[] = [
  {
    id: "reel-1",
    title: "Porsche 718 Cayman • Highway Session",
    duration: "0:45",
    views: "24.2K Views",
    thumbnail: "/images/gallery/cust1.png",
    reelUrl: "https://www.instagram.com/reel/DYr_tf_JMo1/",
    embedUrl: "https://www.instagram.com/reel/DYr_tf_JMo1/embed",
    creator: "@TURBORIDE9",
    category: "Porsche 718"
  },
  {
    id: "reel-2",
    title: "Porsche 718 Cayman • Open-Road Run",
    duration: "0:30",
    views: "48.9K Views",
    thumbnail: "/images/gallery/cust3.jpg",
    reelUrl: "https://www.instagram.com/reel/DN7ofKdCckZ/",
    embedUrl: "https://www.instagram.com/reel/DN7ofKdCckZ/embed",
    creator: "@TURBORIDE9",
    category: "Porsche 718"
  },
  {
    id: "reel-3",
    title: "Porsche 718 Cayman • STRR Expressway",
    duration: "0:35",
    views: "32.1K Views",
    thumbnail: "/images/gallery/cust5.jpg",
    reelUrl: "https://www.instagram.com/reel/DG8Q509pLQD/",
    embedUrl: "https://www.instagram.com/reel/DG8Q509pLQD/embed",
    creator: "@TURBORIDE9",
    category: "Porsche 718"
  },
  {
    id: "reel-4",
    title: "Porsche 718 Cayman • Drive Experience",
    duration: "0:55",
    views: "59.5K Views",
    thumbnail: "/images/gallery/cust7.jpg",
    reelUrl: "https://www.instagram.com/reel/DGkEKHvphoh/",
    embedUrl: "https://www.instagram.com/reel/DGkEKHvphoh/embed",
    creator: "@TURBORIDE9",
    category: "Porsche 718"
  }
];

export default function VideoShowcaseSection() {
  const [activeReel, setActiveReel] = useState<Reel | null>(null);

  const handleCardClick = (e: React.MouseEvent, video: Reel) => {
    e.preventDefault();
    setActiveReel(video);
  };

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden border-b border-white/10">
      {/* Ambient Glow */}
      <div className="ambient-red-glow top-1/4 right-10 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FFD000] mb-2">
              <Instagram className="w-3.5 h-3.5 text-[#FF2D20]" />
              <span>Official Instagram Reels</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
              SUPERCAR <span className="text-gradient-red">REELS & FOOTAGE</span>
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mt-3 leading-relaxed">
              Watch authentic client drives, exhaust launch controls, and photoshoot reels recorded live on Bangalore roads.
            </p>
          </div>

          <a
            href="https://instagram.com/turboride9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 border border-white/10 hover:border-[#FF2D20] text-xs font-heading font-bold uppercase tracking-wider text-white transition-all self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-[#FF2D20]" />
            <span>Follow @TURBORIDE9</span>
          </a>
        </div>

        {/* Video Cards Grid with Updated Porsche Thumbnails & Instant Popup Handler */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_REELS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={(e) => handleCardClick(e, video)}
              className="glass-card rounded-2xl p-3.5 border border-white/10 flex flex-col justify-between group cursor-pointer relative hover:border-[#FF2D20] transition-all bg-neutral-950"
            >
              {/* Thumbnail Container */}
              <div className="relative h-80 w-full rounded-xl overflow-hidden mb-3 bg-black border border-white/10">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />

                {/* Duration & Category Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-heading font-bold uppercase tracking-wider text-[#FFD000]">
                    {video.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white z-10">
                  {video.duration}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <button
                    type="button"
                    onClick={(e) => handleCardClick(e, video)}
                    className="w-14 h-14 rounded-full bg-[#FF2D20] text-black flex items-center justify-center font-bold shadow-xl shadow-[#FF2D20]/40 group-hover:scale-110 transition-transform duration-300"
                  >
                    <Play className="w-6 h-6 fill-black translate-x-0.5" />
                  </button>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-300 z-10">
                  <span className="font-semibold text-white drop-shadow">{video.creator}</span>
                  <span className="text-[10px] text-neutral-300 font-mono drop-shadow">{video.views}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading text-xs font-bold text-white group-hover:text-[#FF2D20] transition-colors leading-snug line-clamp-2 px-1">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Instagram Reel Modal Player */}
      <AnimatePresence>
        {activeReel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <button
              type="button"
              onClick={() => setActiveReel(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md bg-neutral-950 rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col items-center p-6 text-center z-30"
            >
              {/* Instagram Reel Embedded Iframe */}
              <div className="w-full h-[460px] rounded-2xl overflow-hidden bg-black mb-4 border border-white/10 relative">
                <iframe
                  src={activeReel.embedUrl}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="w-full space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-heading font-bold text-white">{activeReel.title}</span>
                  <span className="text-[10px] text-neutral-400 font-mono">{activeReel.views}</span>
                </div>

                <a
                  href={activeReel.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#FF2D20] hover:bg-[#e02619] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Open Full Reel on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
