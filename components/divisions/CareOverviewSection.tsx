"use client";

import React from "react";
import Link from "next/link";

interface CareOverviewSectionProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function CareOverviewSection({
  onOpenConsultation,
}: CareOverviewSectionProps) {
  return (
    <section id="care-overview" className="w-full py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left: Content Details */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[11px] font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]"></span>
                <span className="text-[#1D3557]">Supported Living &amp; Domiciliary Care</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#1D3557] tracking-tight leading-[1.15]">
                Dignified Supported Living &amp; Private In-Home Nursing
              </h2>

              <p className="text-[16px] md:text-[17px] text-[#457B9D] leading-relaxed">
                Tailored personal care that fosters independence in the comfort of your own home. Regulated under CQC clinical standards, we support adults transitioning to independent supported living, seniors needing daily domiciliary visits, and patients requiring 24/7 dedicated live-in nursing.
              </p>

              {/* Concise Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#E8F6F3] border border-[#E2E8F0] transition-colors duration-300">
                  <span className="material-symbols-outlined text-[#2A9D8F] text-[20px] flex-shrink-0 mt-0.5">
                    apartment
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#1D3557]">Supported Living Tenancies</h4>
                    <p className="text-[12px] text-[#457B9D]">Autonomy, budgeting &amp; community life skills for adults.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#E8F6F3] border border-[#E2E8F0] transition-colors duration-300">
                  <span className="material-symbols-outlined text-[#2A9D8F] text-[20px] flex-shrink-0 mt-0.5">
                    home
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#1D3557]">Daily Domiciliary Care</h4>
                    <p className="text-[12px] text-[#457B9D]">Medication administration, meals &amp; personal hygiene visits.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#E8F6F3] border border-[#E2E8F0] transition-colors duration-300">
                  <span className="material-symbols-outlined text-[#2A9D8F] text-[20px] flex-shrink-0 mt-0.5">
                    healing
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#1D3557]">24/7 Live-in Carers</h4>
                    <p className="text-[12px] text-[#457B9D]">Round-the-clock peace of mind with vetted resident carers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#E8F6F3] border border-[#E2E8F0] transition-colors duration-300">
                  <span className="material-symbols-outlined text-[#2A9D8F] text-[20px] flex-shrink-0 mt-0.5">
                    verified
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#1D3557]">CQC Outstanding Oversight</h4>
                    <p className="text-[12px] text-[#457B9D]">Direct payments, NHS CHC &amp; private referrals accepted.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E2E8F0]">
              <Link
                href="/care"
                className="h-11 px-6 bg-[#2A9D8F] text-white font-medium text-[14px] rounded-full hover:bg-[#21867A] active:scale-[0.985] transition-all duration-200 flex items-center gap-2 group shadow-xs"
              >
                <span>Visit Supported Living Hub</span>
                <span className="material-symbols-outlined text-[18px] text-white group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>

              <button
                type="button"
                onClick={() => onOpenConsultation?.("care")}
                className="h-11 px-5 bg-white border border-[#E2E8F0] hover:border-[#94D2BD] hover:bg-[#F0F9FF] active:scale-[0.985] text-[#1D3557] font-semibold text-[14px] rounded-full transition-all duration-200 cursor-pointer"
              >
                Arrange Care Assessment
              </button>
            </div>
          </div>

          {/* Right: Visual Showcase (Matching exact height of left content) */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] group w-full h-full min-h-[420px] lg:min-h-full shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
                alt="Supported living and compassionate domiciliary care"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D3557]/70 via-transparent to-transparent pointer-events-none"></div>

              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-xl border border-[#E2E8F0] flex items-center justify-between z-10 shadow-sm">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#457B9D] block">
                    CQC Regulated Standards
                  </span>
                  <p className="text-[13px] font-semibold text-[#1D3557]">
                    Rated “Outstanding” for Dignity &amp; Care
                  </p>
                </div>
                <span className="material-symbols-outlined text-[#2A9D8F] text-[20px] flex-shrink-0">
                  check_circle
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
