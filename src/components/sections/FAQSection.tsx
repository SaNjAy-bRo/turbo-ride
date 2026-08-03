"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS_DATA } from "@/data/faqs";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 bg-[#0a0a0a] relative overflow-hidden border-b border-white/10">
      {/* Subtle Background Lighting */}
      <div className="ambient-red-glow top-1/3 left-1/3 opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-white/10 text-[11px] font-semibold uppercase tracking-widest text-[#FFD000] mb-2.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF2D20]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight">
            EVERYTHING YOU <span className="text-gradient-red">NEED TO KNOW</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2 font-light leading-relaxed">
            Got questions about security deposits, fuel policy, or Bangalore doorstep delivery? We&apos;ve got answers.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-card rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-start sm:items-center justify-between gap-3 font-heading text-sm sm:text-base font-bold text-white hover:text-[#FF2D20] active:bg-white/5 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <span className="inline-self-start text-[10px] font-bold text-[#FFD000] bg-[#FFD000]/10 border border-[#FFD000]/20 px-2 py-0.5 rounded w-fit shrink-0">
                      {faq.category}
                    </span>
                    <span className="leading-snug text-white">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 mt-0.5 sm:mt-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#FF2D20]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 sm:px-5 sm:pb-5 text-neutral-300 text-xs sm:text-sm font-light leading-relaxed border-t border-white/5 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
