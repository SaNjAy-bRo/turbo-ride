"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:block group">
      {/* Pulsating Ambient Outer Ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

      {/* Main Floating Button */}
      <motion.a
        href="https://wa.me/919876543210?text=Hi%20TurboRide%2C%20I%20want%20to%20reserve%20a%20supercar%20in%20Bangalore."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Chat with TurboRide Concierge on WhatsApp"
        className="relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-2xl shadow-[#25D366]/40 border border-white/20 transition-all cursor-pointer"
      >
        <WhatsAppIcon className="w-6 h-6 shrink-0 fill-white" />
        <span className="leading-none">WhatsApp Concierge</span>
      </motion.a>
    </div>
  );
}
