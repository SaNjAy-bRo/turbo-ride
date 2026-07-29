"use client";

import { useState } from "react";
import { Play, Youtube, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface YouTubeVideo {
  id: string;
  videoId: string;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
}

const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: "yt-1",
    videoId: "Pu6qToY1TE0",
    title: "Supercar Experience • Bangalore Roads",
    thumbnail: "https://img.youtube.com/vi/Pu6qToY1TE0/maxresdefault.jpg",
    duration: "Video",
    category: "Experience"
  },
  {
    id: "yt-2",
    videoId: "kgDCfi1eycM",
    title: "Exhaust & Launch Control • Raw Sound",
    thumbnail: "https://img.youtube.com/vi/kgDCfi1eycM/maxresdefault.jpg",
    duration: "Video",
    category: "Sound"
  },
  {
    id: "yt-3",
    videoId: "SjoSlwEXKhc",
    title: "Supercar Showcase • Full Walkthrough",
    thumbnail: "https://img.youtube.com/vi/SjoSlwEXKhc/maxresdefault.jpg",
    duration: "Video",
    category: "Showcase"
  }
];

export default function YouTubeShowcaseSection() {
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo | null>(null);

  return (
    <section className="py-16 bg-[#080808] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-semibold uppercase tracking-widest text-[#FF2D20] mb-3">
            <Youtube className="w-3.5 h-3.5" />
            <span>Watch on YouTube</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight">
            SUPERCAR <span className="text-gradient-red">VIDEOS</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto mt-2 leading-relaxed">
            Watch real supercar footage, exhaust launches, and client experiences filmed live in Bangalore.
          </p>
        </div>

        {/* 3-Column Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {YOUTUBE_VIDEOS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              onClick={() => setActiveVideo(video)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF2D20]/60 bg-neutral-950 transition-all shadow-lg hover:shadow-2xl hover:shadow-red-950/20"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video w-full bg-black overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />

                {/* Category Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-heading font-bold uppercase tracking-wider text-[#FF2D20]">
                    {video.category}
                  </span>
                </div>

                {/* YouTube Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-11 rounded-xl bg-[#FF0000] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Title Bar */}
              <div className="p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF0000]/15 flex items-center justify-center shrink-0">
                  <Youtube className="w-4 h-4 text-[#FF0000]" />
                </div>
                <h3 className="font-heading text-xs font-bold text-white group-hover:text-[#FF2D20] transition-colors leading-snug line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* YouTube Lightbox Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl"
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
