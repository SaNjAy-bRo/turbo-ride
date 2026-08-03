"use client";

import { useState } from "react";
import { CheckSquare, Square, ShieldAlert, CheckCircle2, FileText, UserCheck, AlertCircle } from "lucide-react";

export default function RequirementsSection() {
  const [ageCheck, setAgeCheck] = useState(true);
  const [licenseCheck, setLicenseCheck] = useState(true);
  const [autoCheck, setAutoCheck] = useState(true);
  const [guidelinesCheck, setGuidelinesCheck] = useState(true);

  const isEligible = ageCheck && licenseCheck && autoCheck && guidelinesCheck;

  return (
    <section className="py-24 bg-white text-neutral-900 relative overflow-hidden border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Information Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-semibold uppercase tracking-widest text-[#FF2D20]">
              <FileText className="w-3.5 h-3.5" />
              <span>DRIVE GUIDELINES</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-black tracking-tight">
              DRIVER ELIGIBILITY <span className="text-[#FF2D20]">& TERMS</span>
            </h2>
            <p className="text-neutral-600 text-sm font-normal leading-relaxed">
              We uphold rigorous safety standards to protect both our drivers and our supercar fleet. Ensure you meet the core criteria below before taking the wheel.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <UserCheck className="w-5 h-5 text-[#FF2D20] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-black">Minimum Driving Age: 21 Years</h4>
                  <p className="text-neutral-600 text-xs mt-1">Drivers aged 21 and above receive a comprehensive briefing from our safety pilot before the drive.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <FileText className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-black">Valid Driving License Required</h4>
                  <p className="text-neutral-600 text-xs mt-1">Must present an original Indian LMV Driving License or International Driving Permit (IDP) physically at the venue.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <ShieldAlert className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-black">Zero Security Deposit</h4>
                  <p className="text-neutral-600 text-xs mt-1">No security deposits held. Transparent pricing with zero hidden charges or post-drive holds.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Checker Column */}
          <div className="lg:col-span-6">
            <div className="bg-[#f8f9fa] rounded-3xl p-8 border border-neutral-200 shadow-xl relative overflow-hidden">
              <h3 className="font-heading text-xl font-bold text-black mb-2">
                Instant Eligibility Checker
              </h3>
              <p className="text-neutral-600 text-xs mb-6">
                Check the criteria below to confirm if you are eligible to drive today.
              </p>

              <div className="space-y-3 mb-6">
                <button
                  type="button"
                  onClick={() => setAgeCheck(!ageCheck)}
                  className={`w-full p-4 rounded-xl border flex items-center justify-between text-left transition-all ${
                    ageCheck ? "bg-red-50/80 border-[#FF2D20] text-black" : "bg-white border-neutral-300 text-neutral-600"
                  }`}
                >
                  <span className="text-xs font-semibold">1. I am at least 21 years of age</span>
                  {ageCheck ? <CheckSquare className="w-5 h-5 text-[#FF2D20]" /> : <Square className="w-5 h-5 text-neutral-400" />}
                </button>

                <button
                  type="button"
                  onClick={() => setLicenseCheck(!licenseCheck)}
                  className={`w-full p-4 rounded-xl border flex items-center justify-between text-left transition-all ${
                    licenseCheck ? "bg-red-50/80 border-[#FF2D20] text-black" : "bg-white border-neutral-300 text-neutral-600"
                  }`}
                >
                  <span className="text-xs font-semibold">2. I hold a valid LMV Driving License or IDP</span>
                  {licenseCheck ? <CheckSquare className="w-5 h-5 text-[#FF2D20]" /> : <Square className="w-5 h-5 text-neutral-400" />}
                </button>

                <button
                  type="button"
                  onClick={() => setAutoCheck(!autoCheck)}
                  className={`w-full p-4 rounded-xl border flex items-center justify-between text-left transition-all ${
                    autoCheck ? "bg-red-50/80 border-[#FF2D20] text-black" : "bg-white border-neutral-300 text-neutral-600"
                  }`}
                >
                  <span className="text-xs font-semibold">3. I know how to drive an automatic transmission car</span>
                  {autoCheck ? <CheckSquare className="w-5 h-5 text-[#FF2D20]" /> : <Square className="w-5 h-5 text-neutral-400" />}
                </button>

                <button
                  type="button"
                  onClick={() => setGuidelinesCheck(!guidelinesCheck)}
                  className={`w-full p-4 rounded-xl border flex items-center justify-between text-left transition-all ${
                    guidelinesCheck ? "bg-red-50/80 border-[#FF2D20] text-black" : "bg-white border-neutral-300 text-neutral-600"
                  }`}
                >
                  <span className="text-xs font-semibold">4. I agree to follow safety pilot instructions & drive guidelines</span>
                  {guidelinesCheck ? <CheckSquare className="w-5 h-5 text-[#FF2D20]" /> : <Square className="w-5 h-5 text-neutral-400" />}
                </button>
              </div>

              {/* Status Outcome Box */}
              <div
                className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${
                  isEligible
                    ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                    : "bg-amber-50 border-amber-300 text-amber-800"
                }`}
              >
                {isEligible ? (
                  <>
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="font-heading text-sm font-bold">100% Eligible for Supercar Drive</h4>
                      <p className="text-[11px] text-emerald-700">You meet all TurboRide supercar experience criteria!</p>
                    </div>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
                    <div>
                      <h4 className="font-heading text-sm font-bold">Eligibility Pending</h4>
                      <p className="text-[11px] text-amber-700">Please check all criteria boxes above to confirm your eligibility.</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
