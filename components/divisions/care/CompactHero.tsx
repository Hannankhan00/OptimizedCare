"use client";

import React from "react";
import Link from "next/link";

interface CompactHeroProps {
  onOpenConsultation?: () => void;
}

export default function CompactHero({ onOpenConsultation }: CompactHeroProps) {
  return (
    <section className="relative w-full pt-10 pb-20 md:pb-28 overflow-hidden bg-[#FBFBFD] border-b border-[#E5E5EA]">
      {/* Subtle Apple Radial Emerald Ambient Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] md:w-[1000px] h-[400px] bg-gradient-to-b from-[#107C41]/10 via-[#0D5C3A]/5 to-transparent blur-3xl opacity-70" />

      <div className="relative max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Navigation Breadcrumb Pill */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors py-1.5 px-3 rounded-full bg-white/80 backdrop-blur border border-[#E5E5EA] shadow-xs active:scale-[0.985]"
          >
            <span className="material-symbols-outlined text-[16px] text-[#0D5C3A] group-hover:-translate-x-0.5 transition-transform">
              arrow_back
            </span>
            <span>OptimizedCare Clinical Group</span>
          </Link>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#0D5C3A] text-[12px] font-medium tracking-tight">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]"></span>
            </span>
            <span>CQC Regulated Care Network</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Content (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Double-Bezel Mini Eyebrow Badge */}
            <div className="inline-block p-1 rounded-full bg-[#E5E5EA]/60 ring-1 ring-black/5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0D5C3A]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0D5C3A]">
                  Division 01 • Supported Living &amp; Domiciliary Care
                </span>
              </div>
            </div>

            {/* Apple Cinematic Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[#1D1D1F] tracking-[-0.03em] leading-[1.08] text-balance">
              Empowering Independence Through Dignified, Person-Centred Care.
            </h1>

            {/* Subheading text-pretty */}
            <p className="text-[18px] sm:text-[20px] text-[#6E6E73] font-normal leading-relaxed text-pretty max-w-2xl">
              From our regional care hubs to communities nationwide, our dedicated clinical teams deliver bespoke supported living, 24/7 complex nursing, and positive risk-taking therapy designed unconditionally around the individual.
            </p>

            {/* Apple Button-in-Button Architecture CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Green CTA */}
              <a
                href="#contact-compact"
                className="group relative inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#0D5C3A] text-white font-medium text-[15px] shadow-sm hover:bg-[#0A4A2E] active:scale-[0.985] transition-all duration-300"
              >
                <span>Refer or Contact Team</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:scale-105 transition-all duration-300">
                  <span className="material-symbols-outlined text-[18px] text-white">arrow_forward</span>
                </span>
              </a>

              {/* Secondary Direct Hotline */}
              <a
                href="tel:01614785814"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white text-[#1D1D1F] border border-[#E5E5EA] font-medium text-[15px] hover:bg-[#F5F5F7] hover:border-[#D2D2D7] active:scale-[0.985] transition-all shadow-xs"
              >
                <span className="material-symbols-outlined text-[#0D5C3A] text-[20px]">phone_in_talk</span>
                <span className="tnum font-semibold">0161 478 5814</span>
              </a>

              {/* Services Anchor Link */}
              <a
                href="#services-grid"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#6E6E73] hover:text-[#0D5C3A] transition-colors py-2 px-3"
              >
                <span>Explore 8 Services</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </a>
            </div>

            {/* Metric Strip (Apple Clean Row) */}
            <div className="pt-6 border-t border-[#E5E5EA] grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <p className="text-[28px] font-bold text-[#1D1D1F] tracking-tight tnum">8</p>
                <p className="text-[12px] font-medium text-[#86868B] uppercase tracking-wider">Clinical Pathways</p>
              </div>
              <div>
                <p className="text-[28px] font-bold text-[#1D1D1F] tracking-tight tnum">100%</p>
                <p className="text-[12px] font-medium text-[#86868B] uppercase tracking-wider">Person-Centred</p>
              </div>
              <div>
                <p className="text-[28px] font-bold text-[#1D1D1F] tracking-tight tnum">24/7</p>
                <p className="text-[12px] font-medium text-[#86868B] uppercase tracking-wider">Dedicated Carers</p>
              </div>
              <div>
                <p className="text-[28px] font-bold text-[#0D5C3A] tracking-tight tnum">SK3 8AB</p>
                <p className="text-[12px] font-medium text-[#86868B] uppercase tracking-wider">Stockport HQ</p>
              </div>
            </div>
          </div>

          {/* Hero Visual: Apple Double-Bezel Hardware Showcase (Right 5 Cols) */}
          <div className="lg:col-span-5">
            {/* Outer Shell Wrapper (Double-Bezel) */}
            <div className="p-2.5 sm:p-3 rounded-[2rem] bg-black/[0.03] ring-1 ring-black/5 shadow-xl">
              {/* Inner Core */}
              <div className="relative rounded-[calc(2rem-0.75rem)] overflow-hidden bg-white shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=85"
                  alt="Compassionate Supported Living and Domiciliary Care"
                  className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover scale-[1.01] hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                />

                {/* Floating Apple Glass Floating Card (Bottom) */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/60 shadow-lg flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#0D5C3A]">
                      Active Support &amp; PBS
                    </span>
                    <p className="text-[14px] font-semibold text-[#1D1D1F]">
                      Positive Risk Taking &amp; Growth
                    </p>
                    <p className="text-[12px] text-[#6E6E73]">
                      Peak District hiking, rock climbing &amp; community inclusion
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center flex-shrink-0 ml-3">
                    <span className="material-symbols-outlined text-[#0D5C3A] text-[20px]">
                      verified_user
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
