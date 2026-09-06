"use client";

import React from "react";
import Link from "next/link";

interface AestheticsOverviewSectionProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function AestheticsOverviewSection({
  onOpenConsultation,
}: AestheticsOverviewSectionProps) {
  return (
    <section id="aesthetics-overview" className="w-full py-16 md:py-24 bg-[#f8f9ff] border-b border-[#E2E8F0]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left: Visual Showcase (Matching exact height of right content) */}
          <div className="lg:col-span-5 flex flex-col h-full order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden border border-[#E2E8F0] shadow-xl group w-full h-full min-h-[420px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1512290900672-1f41d9a26370?auto=format&fit=crop&w=1200&q=80"
                alt="Doctor-administered non-surgical aesthetics clinic"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-transparent to-transparent pointer-events-none"></div>

              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-lg border border-[#E2E8F0] shadow-sm flex items-center justify-between z-10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#725b38] block">
                    Save Face Accredited Suite
                  </span>
                  <p className="text-[13px] font-semibold text-[#0A192F]">
                    100% GMC Medical Doctors • Ultrasound Guided
                  </p>
                </div>
                <span className="w-3 h-3 rounded-full bg-[#1E3A2F] flex-shrink-0"></span>
              </div>
            </div>
          </div>

          {/* Right: Content Details */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#fedeb2]/40 text-[#725b38] text-[11px] font-semibold uppercase tracking-widest border border-[#C5A880]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#725b38]"></span>
                Division 02 • Advanced Medical Aesthetics Clinic
              </div>

              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#0A192F] tracking-tight leading-[1.15]">
                Doctor-Led Non-Surgical Rejuvenation &amp; Skin Science
              </h2>

              <p className="text-[16px] md:text-[17px] text-[#44474D] leading-relaxed">
                Delivering subtle, refined aesthetic outcomes at our private Harley Street and Belgravia clinic suites. All injectables and energy devices are administered exclusively by GMC-registered medical practitioners with ultrasonic vascular mapping for uncompromising safety.
              </p>

              {/* Concise Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3.5 rounded-md bg-white border border-[#E2E8F0]">
                  <span className="material-symbols-outlined text-[#725b38] text-[20px] flex-shrink-0 mt-0.5">
                    vaccines
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#0A192F]">Precision Anti-Wrinkle</h4>
                    <p className="text-[12px] text-[#64748B]">Forehead smoothing &amp; micro-dosing preserving natural mobility.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-md bg-white border border-[#E2E8F0]">
                  <span className="material-symbols-outlined text-[#725b38] text-[20px] flex-shrink-0 mt-0.5">
                    spa
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#0A192F]">Profhilo® Bioremodelling</h4>
                    <p className="text-[12px] text-[#64748B]">Collagen and elastin stimulation for luminous skin firmness.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-md bg-white border border-[#E2E8F0]">
                  <span className="material-symbols-outlined text-[#725b38] text-[20px] flex-shrink-0 mt-0.5">
                    flash_on
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#0A192F]">Morpheus8 RF Microneedling</h4>
                    <p className="text-[12px] text-[#64748B]">Subdermal fat remodeling to tighten jawlines and jowls.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-md bg-white border border-[#E2E8F0]">
                  <span className="material-symbols-outlined text-[#725b38] text-[20px] flex-shrink-0 mt-0.5">
                    radiology
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#0A192F]">Ultrasound-Guided Safety</h4>
                    <p className="text-[12px] text-[#64748B]">Pre-injection vascular scanning with 2-week follow-up included.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E2E8F0]">
              <Link
                href="/aesthetics"
                className="h-11 px-6 bg-[#0A192F] text-white font-medium text-[14px] rounded-[4px] border border-[#C5A880] hover:bg-[#152542] transition-all shadow-sm flex items-center gap-2 group"
              >
                <span>Visit Aesthetics Main Page</span>
                <span className="material-symbols-outlined text-[18px] text-[#C5A880] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>

              <button
                type="button"
                onClick={() => onOpenConsultation?.("aesthetics")}
                className="h-11 px-5 bg-white border border-[#E2E8F0] hover:border-[#0A192F] text-[#0A192F] font-semibold text-[14px] rounded-[4px] transition-colors cursor-pointer"
              >
                Book Aesthetic Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
