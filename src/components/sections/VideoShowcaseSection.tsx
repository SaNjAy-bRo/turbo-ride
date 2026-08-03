"use client";

import { useState } from "react";
import { Play, Youtube, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export interface VideoShort {
  id: string;
  title: string;
  duration: string;
  views: string;
  videoId: string;
  thumbnail: string;
  shortUrl: string;
  embedUrl: string;
  creator: string;
  category: string;
}

export const YOUTUBE_SHORTS: VideoShort[] = [
  {
    id: "short-1",
    title: "Porsche 718 Cayman • Highway Session",
    duration: "0:45",
    views: "28.4K Views",
    videoId: "8l_qIO3t-h0",
    thumbnail: "https://img.youtube.com/vi/8l_qIO3t-h0/hqdefault.jpg",
    shortUrl: "https://youtube.com/shorts/8l_qIO3t-h0",
    embedUrl: "https://www.youtube.com/embed/8l_qIO3t-h0?autoplay=1&rel=0",
    creator: "@TURBORIDE",
    category: "Porsche 718"
  },
  {
    id: "short-2",
    title: "Porsche 718 Cayman • Open-Road Run",
    duration: "0:30",
    views: "52.1K Views",
    videoId: "xVmYwQ7f5Gw",
    thumbnail: "https://img.youtube.com/vi/xVmYwQ7f5Gw/hqdefault.jpg",
    shortUrl: "https://youtube.com/shorts/xVmYwQ7f5Gw",
    embedUrl: "https://www.youtube.com/embed/xVmYwQ7f5Gw?autoplay=1&rel=0",
    creator: "@TURBORIDE",
    category: "Porsche 718"
  },
  {
    id: "short-3",
    title: "Porsche 718 Cayman • STRR Expressway",
    duration: "0:35",
    views: "36.8K Views",
    videoId: "oXAP7s6OJKw",
    thumbnail: "https://img.youtube.com/vi/oXAP7s6OJKw/hqdefault.jpg",
    shortUrl: "https://youtube.com/shorts/oXAP7s6OJKw",
    embedUrl: "https://www.youtube.com/embed/oXAP7s6OJKw?autoplay=1&rel=0",
    creator: "@TURBORIDE",
    category: "Porsche 718"
  },
  {
    id: "short-4",
    title: "Porsche 718 Cayman • Drive Experience",
    duration: "0:55",
    views: "64.2K Views",
    videoId: "D8wZJ_GmNhw",
    thumbnail: "https://img.youtube.com/vi/D8wZJ_GmNhw/hqdefault.jpg",
    shortUrl: "https://youtube.com/shorts/D8wZJ_GmNhw",
    embedUrl: "https://www.youtube.com/embed/D8wZJ_GmNhw?autoplay=1&rel=0",
    creator: "@TURBORIDE",
    category: "Porsche 718"
  }
];

export default function VideoShowcaseSection() {
  const [activeVideo, setActiveVideo] = useState<VideoShort | null>(null);

  const handleCardClick = (e: React.MouseEvent, video: VideoShort) => {
    e.preventDefault();
    setActiveVideo(video);
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
              <Youtube className="w-4 h-4 text-[#FF2D20]" />
              <span>Official YouTube Shorts</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
              SUPERCAR <span className="text-gradient-red">SHORTS & FOOTAGE</span>
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mt-3 leading-relaxed">
              Watch authentic client drives, exhaust launch controls, and photoshoot shorts recorded live on Bangalore roads.
            </p>
          </div>

          <a
            href="https://youtube.com/shorts/8l_qIO3t-h0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 border border-white/10 hover:border-[#FF2D20] text-xs font-heading font-bold uppercase tracking-wider text-white transition-all self-start md:self-auto"
          >
            <Youtube className="w-4 h-4 text-[#FF2D20]" />
            <span>Subscribe on YouTube</span>
          </a>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {YOUTUBE_SHORTS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={(e) => handleCardClick(e, video)}
              className="glass-card rounded-2xl p-3.5 border border-white/10 flex flex-col justify-between group cursor-pointer relative hover:border-[#FF2D20] transition-all bg-neutral-950"
            >
              {/* YouTube Shorts High-Res Thumbnail Container */}
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
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30 group-hover:bg-black/10 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#FF2D20] text-white flex items-center justify-center font-bold shadow-xl shadow-[#FF2D20]/40 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-white translate-x-0.5" />
                  </div>
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

      {/* Embedded YouTube Shorts Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-20 transition-colors shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md bg-neutral-950 rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col items-center p-6 text-center z-30"
            >
              {/* Embedded YouTube Shorts Iframe */}
              <div className="w-full h-[480px] rounded-2xl overflow-hidden bg-black mb-4 border border-white/10 relative shadow-inner">
                <iframe
                  src={activeVideo.embedUrl}
                  className="w-full h-full border-0 rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={activeVideo.title}
                />
              </div>

              <div className="w-full space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-heading font-bold text-white">{activeVideo.title}</span>
                  <span className="text-[10px] text-neutral-400 font-mono">{activeVideo.views}</span>
                </div>

                <a
                  href={activeVideo.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#FF2D20] hover:bg-[#e02619] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Youtube className="w-4 h-4" />
                  <span>Watch Full Short on YouTube</span>
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
