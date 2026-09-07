"use client";

import React from "react";
import Link from "next/link";

interface SurgeryHeroProps {
  onOpenConsultation?: () => void;
}

export default function SurgeryHero({ onOpenConsultation }: SurgeryHeroProps) {
  return (
    <section className="relative w-full bg-white border-b border-[#E2E8F0] overflow-hidden pt-8 md:pt-12 pb-16 md:pb-24">
      {/* Ambient Teal-Green Radial Mesh */}
      <div className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[720px] md:w-[1100px] h-[380px] bg-gradient-to-b from-[#2A9D8F]/15 via-[#94D2BD]/10 to-transparent blur-3xl opacity-80" />

      <div className="relative max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Navigation Breadcrumb Pill */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] hover:bg-[#E8F6F3] border border-[#E2E8F0] hover:border-[#94D2BD] text-[#457B9D] hover:text-[#1D3557] text-[12px] font-medium transition-all group"
          >
            <span className="material-symbols-outlined text-[16px] text-[#2A9D8F] group-hover:-translate-x-0.5 transition-transform">
              arrow_back
            </span>
            <span>Return to Group Hub (OptimizedCare)</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[11px] font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F] animate-pulse" />
            <span className="text-[#1D3557]">24 Greek Street, Stockport</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[11px] font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
              <span className="text-[#1D3557]">GMC Specialist Registered Surgeons</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-semibold text-[#1D3557] tracking-tight leading-[1.1] text-balance">
              Consultant Plastic &amp; Reconstructive Surgical Distinction.
            </h1>

            <p className="text-[17px] sm:text-[18px] text-[#457B9D] leading-relaxed max-w-[620px]">
              Pioneering surgical excellence delivered exclusively by BAAPS &amp; BAPRAS consultant plastic surgeons. Combining Crisalix 3D simulation, ultrasonic preservation rhinoplasty, dual-plane breast enhancement, and 360 VASER® liposuction in ultra-clean CQC-registered hospital theatres.
            </p>

            {/* Key Clinical Governance Chips */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[12px] font-semibold text-[#1D3557]">
                <span className="material-symbols-outlined text-[16px] text-[#2A9D8F]">workspace_premium</span>
                <span>100% BAAPS &amp; BAPRAS Fellows</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[12px] font-semibold text-[#1D3557]">
                <span className="material-symbols-outlined text-[16px] text-[#2A9D8F]">local_hospital</span>
                <span>CQC Hospital Theatres</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[12px] font-semibold text-[#1D3557]">
                <span className="material-symbols-outlined text-[16px] text-[#2A9D8F]">verified_user</span>
                <span>2-Year Comprehensive Aftercare</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center justify-between gap-4 h-13 pl-7 pr-3 bg-[#2A9D8F] text-white font-semibold text-[14px] rounded-full hover:bg-[#21867A] active:scale-[0.985] transition-all cursor-pointer shadow-xs"
              >
                <span>Book Consultant Surgeon Consultation</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-105 group-hover:translate-x-0.5 transition-all">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </span>
              </button>

              <a
                href="tel:+447404210566"
                className="inline-flex items-center justify-center h-13 px-6 bg-white border border-[#E2E8F0] hover:border-[#94D2BD] hover:bg-[#F0F9FF] text-[#1D3557] font-semibold text-[14px] rounded-full transition-all"
              >
                <span className="material-symbols-outlined text-[18px] text-[#2A9D8F] mr-2">call</span>
                <span>+44 7404 210566</span>
              </a>
            </div>

            {/* Reassurance Footer Line */}
            <div className="flex items-center gap-2 pt-2 text-[12px] text-[#457B9D]">
              <span className="material-symbols-outlined text-[16px] text-[#2A9D8F]">verified</span>
              <span>Mandatory 14-day cooling-off period. Zero high-pressure sales advisors.</span>
            </div>
          </div>

          {/* Right Column: Double-Bezel Hardware Showcase Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full p-2 rounded-[2rem] bg-gradient-to-b from-[#E2E8F0] via-white to-[#E2E8F0] border border-[#E2E8F0] shadow-sm">
              <div className="relative rounded-[calc(2rem-0.5rem)] overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] bg-[#1D3557]">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
                  alt="Consultant plastic surgeon and hospital theatres"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D3557]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top-Right Badge */}
                <div className="absolute top-4 right-4 bg-[#1D3557]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 flex items-center gap-2 text-white text-[11px] font-medium shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#2A9D8F] animate-ping" />
                  <span>GMC Specialist Register</span>
                </div>

                {/* Bottom Overlay Glass Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E2E8F0] flex items-center justify-between shadow-sm">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#457B9D] block">
                      Stockport Surgical &amp; Hospital Suites
                    </span>
                    <p className="text-[13px] font-semibold text-[#1D3557]">
                      Substantive NHS Consultant Surgeons
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#E8F6F3] border border-[#94D2BD] flex items-center justify-center text-[#2A9D8F] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">local_hospital</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid Under Hero Card */}
            <div className="grid grid-cols-3 gap-3 w-full mt-4">
              <div className="p-3 bg-white rounded-xl border border-[#E2E8F0] text-center shadow-2xs">
                <span className="block text-[10px] uppercase tracking-wider text-[#457B9D] font-semibold">Surgeon Reg</span>
                <span className="text-[16px] font-semibold text-[#1D3557]">100% GMC</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#E2E8F0] text-center shadow-2xs">
                <span className="block text-[10px] uppercase tracking-wider text-[#457B9D] font-semibold">Theatres</span>
                <span className="text-[16px] font-semibold text-[#2A9D8F]">CQC Reg</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#E2E8F0] text-center shadow-2xs">
                <span className="block text-[10px] uppercase tracking-wider text-[#457B9D] font-semibold">Aftercare</span>
                <span className="text-[16px] font-semibold text-[#1D3557]">2 Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
