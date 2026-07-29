import { Shield, MapPin, Instagram } from "lucide-react";
import Image from "next/image";
import { BANGALORE_LOCATIONS } from "@/data/locations";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-28 lg:pb-12 border-t border-white/10 overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-red-glow bottom-0 right-0 opacity-20" />
      <div className="ambient-gold-glow bottom-1/3 left-0 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <Image
                src="/images/Logo-3-2048x308.png"
                alt="TurboRide Supercars Bangalore"
                width={220}
                height={33}
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Bangalore&apos;s premier luxury supercar rental platform. Delivering precision engineering, raw V8 & V10 emotion, and white-glove concierge experiences across Karnataka.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/turboride_supercars"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-white/10 hover:border-[#FF2D20]/50 hover:bg-[#FF2D20]/10 text-xs font-semibold text-neutral-300 hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4 text-[#FF2D20]" />
                <span>@turboride_supercars</span>
              </a>

              <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-medium text-emerald-400">
                <Shield className="w-3.5 h-3.5" />
                <span>Verified Fleet</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-[#FFD000]">
              Supercar Fleet
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li>
                <a href="#porsche-718-cayman" className="hover:text-[#FF2D20] transition-colors flex items-center gap-1">
                  Porsche 718 Cayman <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1 py-0.2 rounded">Available</span>
                </a>
              </li>
              <li>
                <a href="#lamborghini-huracan-evo" className="hover:text-[#FF2D20] transition-colors flex items-center gap-1">
                  Lamborghini Huracán EVO <span className="text-[9px] bg-amber-500/20 text-amber-400 px-1 py-0.2 rounded">Soon</span>
                </a>
              </li>
              <li>
                <a href="#ford-mustang-gt-v8" className="hover:text-[#FF2D20] transition-colors flex items-center gap-1">
                  Ford Mustang GT V8 <span className="text-[9px] bg-amber-500/20 text-amber-400 px-1 py-0.2 rounded">Soon</span>
                </a>
              </li>
              <li>
                <a href="#ferrari-f8-tributo" className="hover:text-[#FF2D20] transition-colors">
                  Ferrari F8 Tributo (VIP)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-[#FFD000]">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li><a href="#experiences" className="hover:text-white transition-colors">Self Drive Rental</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Ride Along Thrill</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Luxury Road Trips</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Cinematic Photoshoots</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Wedding Grand Entry</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Corporate Events</a></li>
            </ul>
          </div>

          {/* Column 4: Bangalore Locations */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-[#FFD000]">
              Bangalore Zones
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              {BANGALORE_LOCATIONS.map((loc) => (
                <div key={loc.name} className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF2D20] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">{loc.name}</div>
                    <div className="text-[10px] text-neutral-500">{loc.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} TurboRide Supercars Bangalore. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
            <a href="#faq" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#faq" className="hover:text-white transition-colors">Rental Terms</a>
            <a href="#faq" className="hover:text-white transition-colors">Insurance Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
