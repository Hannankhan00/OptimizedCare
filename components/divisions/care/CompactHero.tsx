"use client";

import React from "react";
import Link from "next/link";

interface CompactHeroProps {
  onOpenConsultation?: () => void;
}

export default function CompactHero({ onOpenConsultation }: CompactHeroProps) {
  return (
    <section className="relative w-full pt-10 pb-20 md:pb-28 overflow-hidden bg-[#F8FAFC] border-b border-[#E2E8F0]">
      {/* Exact Compact Personnel Ambient Teal-Green Glow (#2A9D8F / #94D2BD) */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] md:w-[1000px] h-[400px] bg-gradient-to-b from-[#2A9D8F]/20 via-[#94D2BD]/15 to-transparent blur-3xl opacity-75" />

      <div className="relative max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Navigation Breadcrumb Pill */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#457B9D] hover:text-[#1D3557] transition-colors py-1.5 px-3 rounded-full bg-white/90 backdrop-blur border border-[#E2E8F0] shadow-xs active:scale-[0.985]"
          >
            <span className="material-symbols-outlined text-[16px] text-[#2A9D8F] group-hover:-translate-x-0.5 transition-transform">
              arrow_back
            </span>
            <span>OptimizedCare Clinical Group</span>
          </Link>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[12px] font-medium tracking-tight">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2A9D8F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2A9D8F]"></span>
            </span>
            <span className="font-semibold text-[#1D3557]">CQC Regulated Care Network</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Content (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Double-Bezel Mini Eyebrow Badge */}
            <div className="inline-block p-1 rounded-full bg-[#E2E8F0]/80 ring-1 ring-[#2A9D8F]/20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#2A9D8F]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2A9D8F]">
                  Division 01 • Supported Living &amp; Domiciliary Care
                </span>
              </div>
            </div>

            {/* Apple Cinematic Heading with Compact Personnel Navy (#1D3557) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[#1D3557] tracking-[-0.03em] leading-[1.08] text-balance">
              Empowering Independence Through Dignified, Person-Centred Care.
            </h1>

            {/* Subheading in Compact Personnel Ocean Slate (#457B9D) */}
            <p className="text-[18px] sm:text-[20px] text-[#457B9D] font-normal leading-relaxed text-pretty max-w-2xl">
              From our regional care hubs to communities nationwide, our dedicated clinical teams deliver bespoke supported living, 24/7 complex nursing, and positive risk-taking therapy designed unconditionally around the individual.
            </p>

            {/* Compact Personnel Emerald-Teal Action Button (#2A9D8F) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact-compact"
                className="group relative inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#2A9D8F] text-white font-medium text-[15px] shadow-sm hover:bg-[#21867A] active:scale-[0.985] transition-all duration-300"
              >
                <span>Refer or Contact Team</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:scale-105 transition-all duration-300">
                  <span className="material-symbols-outlined text-[18px] text-white">arrow_forward</span>
                </span>
              </a>

              {/* Secondary Direct Hotline */}
              <a
                href="tel:+447404210566"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white text-[#1D3557] border border-[#E2E8F0] font-medium text-[15px] hover:bg-[#F0F9FF] hover:border-[#94D2BD] active:scale-[0.985] transition-all shadow-xs"
              >
                <span className="material-symbols-outlined text-[#2A9D8F] text-[20px]">phone_in_talk</span>
                <span className="tnum font-semibold text-[#1D3557]">+44 7404 210566</span>
              </a>

              {/* Services Anchor Link */}
              <a
                href="#services-grid"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#457B9D] hover:text-[#2A9D8F] transition-colors py-2 px-3"
              >
                <span>Explore 8 Services</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </a>
            </div>

            {/* Metric Strip */}
            <div className="pt-6 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <p className="text-[28px] font-bold text-[#1D3557] tracking-tight tnum">8</p>
                <p className="text-[12px] font-medium text-[#457B9D] uppercase tracking-wider">Clinical Pathways</p>
              </div>
              <div>
                <p className="text-[28px] font-bold text-[#1D3557] tracking-tight tnum">100%</p>
                <p className="text-[12px] font-medium text-[#457B9D] uppercase tracking-wider">Person-Centred</p>
              </div>
              <div>
                <p className="text-[28px] font-bold text-[#1D3557] tracking-tight tnum">24/7</p>
                <p className="text-[12px] font-medium text-[#457B9D] uppercase tracking-wider">Dedicated Carers</p>
              </div>
              <div>
                <p className="text-[28px] font-bold text-[#2A9D8F] tracking-tight tnum">SK3 8AB</p>
                <p className="text-[12px] font-medium text-[#457B9D] uppercase tracking-wider">Stockport HQ</p>
              </div>
            </div>
          </div>

          {/* Hero Visual: Apple Double-Bezel Hardware Showcase */}
          <div className="lg:col-span-5">
            <div className="p-2.5 sm:p-3 rounded-[2rem] bg-[#E2E8F0]/60 ring-1 ring-[#2A9D8F]/15 shadow-xl">
              <div className="relative rounded-[calc(2rem-0.75rem)] overflow-hidden bg-white shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=85"
                  alt="Compassionate Supported Living and Domiciliary Care"
                  className="w-full aspect-[4/3] sm:aspect-[5/4] object-cover scale-[1.01] hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                />

                {/* Floating Apple Glass Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-lg flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#2A9D8F]">
                      Active Support &amp; PBS
                    </span>
                    <p className="text-[14px] font-semibold text-[#1D3557]">
                      Positive Risk Taking &amp; Growth
                    </p>
                    <p className="text-[12px] text-[#457B9D]">
                      Peak District hiking, rock climbing &amp; community inclusion
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#E8F6F3] border border-[#94D2BD] flex items-center justify-center flex-shrink-0 ml-3">
                    <span className="material-symbols-outlined text-[#2A9D8F] text-[20px]">
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
