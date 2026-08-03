"use client";

import { useState } from "react";
import { Maximize2, X, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LuxuryShowcaseSection() {
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/images/gallery/cust1.png",
      fallback: "/images/porsche-yellow.png",
      caption: "Porsche 718 Cayman • Sunset Highway Stance",
      tag: "GOLDEN HOUR"
    },
    {
      src: "/images/gallery/cust2.jpg",
      fallback: "/images/cockpit/porsche-cockpit.png",
      caption: "Porsche 718 Cayman • Open-Road Elegance",
      tag: "MEMBER MOMENTS"
    },
    {
      src: "/images/gallery/cust3.jpg",
      fallback: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      caption: "Rule The Road • Porsche 718 Cayman Experience",
      tag: "HIGHWAY DRIVE"
    },
    {
      src: "/images/gallery/cust4.jpg",
      fallback: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      caption: "Porsche 718 Cayman • Rear Profile & Stance",
      tag: "DRIVER JOY"
    },
    {
      src: "/images/gallery/cust5.jpg",
      fallback: "/images/porsche-yellow.png",
      caption: "Highway Walkaround • Porsche 718 Cayman",
      tag: "HIGHWAY RUN"
    },
    {
      src: "/images/gallery/cust6.jpg",
      fallback: "/images/cockpit/porsche-cockpit.png",
      caption: "Porsche Passion • 718 Cayman Highway Run",
      tag: "ENTHUSIAST VIBES"
    },
    {
      src: "/images/gallery/cust7.jpg",
      fallback: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      caption: "Porsche 718 Cayman • Highway Profile",
      tag: "CINEMATIC SHOT"
    },
    {
      src: "/images/gallery/cust8.jpg",
      fallback: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      caption: "Special Memory Drive • Porsche 718 Cayman",
      tag: "COUPLE GOALS"
    },
    {
      src: "/images/gallery/cust9.png",
      fallback: "/images/porsche-yellow.png",
      caption: "Unforgettable Supercar Moment • Porsche 718",
      tag: "SPECIAL MOMENTS"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Background glow */}
      <div className="ambient-gold-glow bottom-0 right-1/4 opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-[#FF2D20]/30 text-xs font-semibold uppercase tracking-widest text-[#FFD000] mb-3">
            <Camera className="w-3.5 h-3.5 text-[#FF2D20]" />
            <span>DRIVER GALLERY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            MEMORIES FROM <span className="text-gradient-red">THE COCKPIT</span>
          </h2>
          <p className="text-neutral-400 text-sm mt-3 font-light leading-relaxed">
            Take a look at our members and guests capturing their highway drive moments in the Porsche 718 Cayman.
          </p>
        </div>

        {/* 9 Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              onClick={() => setActiveLightbox(img.src)}
              className="relative h-72 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700"
                onError={(e) => {
                  // Fallback image handling
                  const target = e.target as HTMLImageElement;
                  if (target && target.src !== img.fallback) {
                    target.src = img.fallback;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-heading font-bold uppercase tracking-wider text-[#FFD000]">
                  {img.tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <p className="font-heading text-sm font-bold truncate max-w-[80%]">
                  {img.caption}
                </p>
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-md group-hover:bg-[#FF2D20] group-hover:text-black transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden border border-white/20"
            >
              <Image
                src={activeLightbox}
                alt="Full resolution supercar view"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
