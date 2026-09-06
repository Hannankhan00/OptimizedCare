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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#fedeb2]/40 text-[#725b38] text-[11px] font-semibold uppercase tracking-widest border border-[#C5A880]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#725b38]"></span>
                Division 01 • Supported Living &amp; Domiciliary Care
              </div>

              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#0A192F] tracking-tight leading-[1.15]">
                Dignified Supported Living &amp; Private In-Home Nursing
              </h2>

              <p className="text-[16px] md:text-[17px] text-[#44474D] leading-relaxed">
                Tailored personal care that fosters independence in the comfort of your own home. Regulated under CQC clinical standards, we support adults transitioning to independent supported living, seniors needing daily domiciliary visits, and patients requiring 24/7 dedicated live-in nursing.
              </p>

              {/* Concise Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3.5 rounded-md bg-[#f8f9ff] border border-[#E2E8F0] hover:border-[#C5A880]/50 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                  <span className="material-symbols-outlined text-[#2D5A46] text-[20px] flex-shrink-0 mt-0.5">
                    apartment
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#0A192F]">Supported Living Tenancies</h4>
                    <p className="text-[12px] text-[#64748B]">Autonomy, budgeting &amp; community life skills for adults.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-md bg-[#f8f9ff] border border-[#E2E8F0] hover:border-[#C5A880]/50 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                  <span className="material-symbols-outlined text-[#2D5A46] text-[20px] flex-shrink-0 mt-0.5">
                    home
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#0A192F]">Daily Domiciliary Care</h4>
                    <p className="text-[12px] text-[#64748B]">Medication administration, meals &amp; personal hygiene visits.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-md bg-[#f8f9ff] border border-[#E2E8F0] hover:border-[#C5A880]/50 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                  <span className="material-symbols-outlined text-[#2D5A46] text-[20px] flex-shrink-0 mt-0.5">
                    healing
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#0A192F]">24/7 Live-in Carers</h4>
                    <p className="text-[12px] text-[#64748B]">Round-the-clock peace of mind with vetted resident carers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-md bg-[#f8f9ff] border border-[#E2E8F0] hover:border-[#C5A880]/50 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                  <span className="material-symbols-outlined text-[#2D5A46] text-[20px] flex-shrink-0 mt-0.5">
                    verified
                  </span>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#0A192F]">CQC Outstanding Oversight</h4>
                    <p className="text-[12px] text-[#64748B]">Direct payments, NHS CHC &amp; private referrals accepted.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E2E8F0]">
              <Link
                href="/care"
                className="h-11 px-6 bg-[#0A192F] text-white font-medium text-[14px] rounded-[4px] border border-[#C5A880] hover:bg-[#152542] active:scale-[0.985] transition-all duration-200 shadow-sm flex items-center gap-2 group"
              >
                <span>Visit Care Main Page</span>
                <span className="material-symbols-outlined text-[18px] text-[#C5A880] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>

              <button
                type="button"
                onClick={() => onOpenConsultation?.("care")}
                className="h-11 px-5 bg-white border border-[#E2E8F0] hover:border-[#0A192F] hover:bg-[#f8f9ff] active:scale-[0.985] text-[#0A192F] font-semibold text-[14px] rounded-[4px] transition-all duration-200 cursor-pointer"
              >
                Arrange Care Assessment
              </button>
            </div>
          </div>

          {/* Right: Visual Showcase (Matching exact height of left content) */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="relative rounded-xl overflow-hidden border border-[#E2E8F0] ring-1 ring-black/5 luxury-shadow-lg group w-full h-full min-h-[420px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
                alt="Supported living and compassionate domiciliary care"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-transparent to-transparent pointer-events-none"></div>

              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-lg border border-[#E2E8F0] shadow-sm flex items-center justify-between z-10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#725b38] block">
                    CQC Regulated Standards
                  </span>
                  <p className="text-[13px] font-semibold text-[#0A192F]">
                    Rated “Outstanding” for Dignity &amp; Care
                  </p>
                </div>
                <span className="w-3 h-3 rounded-full bg-[#1E3A2F] flex-shrink-0 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
