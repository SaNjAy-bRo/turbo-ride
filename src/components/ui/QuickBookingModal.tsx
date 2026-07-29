"use client";

import { useState } from "react";
import { X, ChevronRight, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FLEET_DATA } from "@/data/fleet";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCarId?: string;
}

export default function QuickBookingModal({
  isOpen,
  onClose,
  selectedCarId = "porsche-718-cayman",
}: QuickBookingModalProps) {
  const [carId, setCarId] = useState(selectedCarId);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const activeCar = FLEET_DATA.find((c) => c.id === carId) || FLEET_DATA[0];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*NEW TURBORIDE SUPERCAR RESERVATION REQUEST*%0A%0A` +
      `*Vehicle:* ${activeCar.name}%0A` +
      `*Daily Rate:* ₹${activeCar.pricePerDay.toLocaleString('en-IN')}/day%0A` +
      `*Client Name:* ${customerName || 'Luxury Client'}%0A` +
      `*Phone:* ${customerPhone || 'N/A'}%0A%0A` +
      `_Sent from TurboRide Supercars Official Website_`;

    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-[#101010] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-red-950/20 z-10 my-8 overflow-hidden"
          >
            {/* Ambient Background Light */}
            <div className="ambient-red-glow -top-20 -right-20 opacity-30 pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD000]">
                  Instant Reservation Concierge
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  Reserve Your Supercar
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleWhatsAppBooking} className="space-y-6">
              {/* Car Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  1. Select Supercar
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FLEET_DATA.map((car) => (
                    <button
                      key={car.id}
                      type="button"
                      onClick={() => setCarId(car.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden ${
                        carId === car.id
                          ? "bg-[#FF2D20]/15 border-[#FF2D20] text-white shadow-lg shadow-[#FF2D20]/20"
                          : "bg-neutral-900/60 border-white/10 text-neutral-400 hover:border-white/20"
                      }`}
                    >
                      <div className="font-heading text-sm font-bold truncate">{car.name}</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">{car.engine}</div>
                      <div className="mt-2 text-xs font-bold text-[#FFD000]">
                        ₹{car.pricePerDay.toLocaleString('en-IN')}/day
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Customer Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vikramaditya Rao"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#FF2D20] text-sm placeholder:text-neutral-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#FF2D20] text-sm placeholder:text-neutral-600"
                  />
                </div>
              </div>

              {/* Security & Perks note */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/80 border border-white/5 text-xs text-neutral-400">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Includes Doorstep Delivery, Insured Coverage & 24/7 Concierge Support.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#FF2D20] hover:bg-[#e02619] text-white font-heading text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#FF2D20]/25 transition-all"
              >
                <span>Submit Reservation</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
