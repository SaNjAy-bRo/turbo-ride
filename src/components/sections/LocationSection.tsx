"use client";

import { MapPin, Navigation, Clock, Compass, ExternalLink } from "lucide-react";

export default function LocationSection() {
  const mapUrl = "https://share.google/hYC1WSTormHHnemRF";
  const embedIframeUrl = "https://maps.google.com/maps?q=Turboride%20Supercars%20Dobaspet%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="location" className="py-20 bg-[#050505] text-white relative overflow-hidden border-b border-white/10">
      {/* Background Lighting Glow */}
      <div className="ambient-red-glow top-0 right-1/4 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/20 text-xs font-semibold uppercase tracking-widest text-[#FFD000] mb-3 bg-black/60 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#FF2D20]" />
            <span>Dobaspet STRR Expressway Location</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-2xl">
            TURBORIDE <span className="text-gradient-red">EXPERIENCE ZONE</span>
          </h2>
          <p className="text-neutral-300 text-sm mt-3 font-normal leading-relaxed">
            Conveniently located in Dobaspet on the 6-lane STRR Expressway. ~45 mins from Airport & Nagasandra Metro / IKEA.
          </p>
        </div>

        {/* Map & Venue Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Info Box */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 glass-card p-6 sm:p-8 rounded-3xl border border-white/15 bg-black/70 backdrop-blur-xl">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#FF2D20]/15 border border-[#FF2D20]/30 text-[#FF2D20] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">Experience Venue</h3>
                  <p className="text-neutral-300 text-xs mt-1 leading-relaxed">
                    Turboride Experience Zone, Dobaspet STRR Expressway, Bengaluru Outskirts
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#FFD000]/15 border border-[#FFD000]/30 text-[#FFD000] shrink-0">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">Access & Travel Time</h3>
                  <p className="text-neutral-300 text-xs mt-1 leading-relaxed">
                    ~45 mins from Airport via Satellite Town Ring Road (STRR).
                    ~45 mins from Nagasandra Metro Station / IKEA via Tumkur Highway.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">Operating Hours</h3>
                  <p className="text-neutral-300 text-xs mt-1 leading-relaxed">
                    Open 7 Days a Week: 11:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-[#FF2D20] hover:bg-[#e02619] text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#FF2D20]/25"
              >
                <Compass className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <p className="text-[11px] text-neutral-400 text-center font-mono">
                💡 Search &ldquo;Turboride Supercars&rdquo; on Google Maps for direct turn-by-turn navigation.
              </p>
            </div>
          </div>

          {/* Right Embedded Google Map Container */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative bg-neutral-900">
            <iframe
              src={embedIframeUrl}
              className="w-full h-full border-0 filter grayscale contrast-125 invert-[0.9] hue-rotate-180"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Turboride Supercars Experience Zone Google Maps Location"
            />
            <div className="absolute bottom-4 right-4 z-10">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-xs font-heading font-bold uppercase tracking-wider text-white hover:text-[#FF2D20] transition-colors flex items-center gap-1.5 shadow-xl"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
