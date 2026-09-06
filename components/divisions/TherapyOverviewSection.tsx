"use client";

import React from "react";
import Link from "next/link";

interface TherapyOverviewSectionProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function TherapyOverviewSection({
  onOpenConsultation,
}: TherapyOverviewSectionProps) {
  return (
    <section id="therapy-overview" className="w-full py-16 md:py-24 bg-[#f8f9ff] border-b border-[#E2E8F0]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left: Visual Showcase (Matching exact height of right content) */}
          <div className="lg:col-span-5 flex flex-col h-full order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden border border-[#E2E8F0] luxury-shadow-lg ring-1 ring-black/5 group w-full h-full min-h-[420px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
                alt="Multidisciplinary clinical physiotherapy and rehabilitation session"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-transparent to-transparent pointer-events-none"></div>

              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-lg border border-[#E2E8F0] shadow-sm flex items-center justify-between z-10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#725b38] block">
                    HCPC &amp; CSP Registered
                  </span>
                  <p className="text-[13px] font-semibold text-[#0A192F]">
                    Chartered Physiotherapists &amp; Clinicians
                  </p>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E3A2F] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1E3A2F]"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Details */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#fedeb2]/40 text-[#725b38] text-[11px] font-semibold uppercase tracking-widest border border-[#C5A880]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#725b38]"></span>
                Division 04 • Therapeutic &amp; Rehabilitation Services
              </div>

              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#0A192F] tracking-tight leading-[1.15]">
                Multidisciplinary Therapy, Rehabilitation &amp; Mental Health
              </h2>

              <p className="text-[16px] md:text-[17px] text-[#44474D] leading-relaxed">
                Empowering physical mobility, daily independence, cognitive communication, and psychological resilience. In partnership with Phoenix Gold Care models, our clinical team delivers coordinated in-clinic and in-home therapy plans supervised by HCPC-registered practitioners.
              </p>

              {/* Concise Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3.5 rounded-md bg-white border border-[#E2E8F0] hover:border-[#C5A880]/50 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                  <span className="material-symbols-outlined text-[#725b38] text-[20px] flex-shrink-0 mt-0.5">
                    fitness_center
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#0A192F]">Physiotherapy &amp; Mobility</h4>
                    <p className="text-[12px] text-[#64748B]">Musculoskeletal rehabilitation, joint mobilization &amp; pain relief.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-md bg-white border border-[#E2E8F0] hover:border-[#C5A880]/50 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                  <span className="material-symbols-outlined text-[#725b38] text-[20px] flex-shrink-0 mt-0.5">
                    accessibility
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#0A192F]">Occupational Therapy</h4>
                    <p className="text-[12px] text-[#64748B]">Daily life skills (ADL), fine motor training &amp; home adaptation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-md bg-white border border-[#E2E8F0] hover:border-[#C5A880]/50 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                  <span className="material-symbols-outlined text-[#725b38] text-[20px] flex-shrink-0 mt-0.5">
                    record_voice_over
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#0A192F]">Speech &amp; Language Therapy</h4>
                    <p className="text-[12px] text-[#64748B]">Swallowing (dysphagia), articulation, fluency &amp; stroke aphasia.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-md bg-white border border-[#E2E8F0] hover:border-[#C5A880]/50 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                  <span className="material-symbols-outlined text-[#725b38] text-[20px] flex-shrink-0 mt-0.5">
                    psychology
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#0A192F]">Clinical Psychotherapy</h4>
                    <p className="text-[12px] text-[#64748B]">Stress management, depression, trauma CBT &amp; emotional wellness.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E2E8F0]">
              <Link
                href="/therapy"
                className="h-11 px-6 bg-[#0A192F] text-white font-medium text-[14px] rounded-[4px] border border-[#C5A880] hover:bg-[#152542] hover:border-[#E5D9C5] active:scale-[0.985] transition-all shadow-sm flex items-center gap-2 group cursor-pointer"
              >
                <span>Visit Therapy Main Page</span>
                <span className="material-symbols-outlined text-[18px] text-[#C5A880] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>

              <button
                type="button"
                onClick={() => onOpenConsultation?.("therapy")}
                className="h-11 px-5 bg-white border border-[#E2E8F0] hover:border-[#0A192F] hover:bg-[#F7F5F0] active:scale-[0.985] text-[#0A192F] font-semibold text-[14px] rounded-[4px] transition-all cursor-pointer shadow-xs"
              >
                Book Therapy Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
