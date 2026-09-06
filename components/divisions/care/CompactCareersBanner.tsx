"use client";

import React from "react";

export default function CompactCareersBanner() {
  return (
    <section className="w-full py-16 md:py-20 bg-[#FBFBFD] border-b border-[#E5E5EA]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Double-Bezel Card */}
        <div className="p-2 sm:p-3 rounded-[2.5rem] bg-[#E5E5EA]/40 ring-1 ring-black/5">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0D5C3A] via-[#0A4A2E] to-[#083521] text-white p-8 sm:p-12 lg:p-16">
            {/* Ambient Lighting */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#A7F3D0] text-[11px] font-semibold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                  <span>Care Careers &amp; Professional Development</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  Join a Dynamic Team Making Real, Lasting Impact.
                </h3>

                <p className="text-[16px] sm:text-[17px] text-white/80 max-w-2xl leading-relaxed">
                  We are actively hiring compassionate support workers. Starting salary of <strong className="text-white underline decoration-[#34D399] decoration-2 underline-offset-4 tnum">£26,364 per year</strong>. No previous experience needed — we provide paid comprehensive clinical training, Care Certificate attainment, and clear career progression.
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-2 text-[13px] text-white/90">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#34D399] text-[18px]">payments</span>
                    <span>£26,364 starting salary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#34D399] text-[18px]">workspace_premium</span>
                    <span>Full Care Certificate provided</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#34D399] text-[18px]">diversity_3</span>
                    <span>Stockport &amp; North West hubs</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-start lg:items-end">
                <a
                  href="#contact-compact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-[#0D5C3A] font-semibold text-[14px] hover:bg-[#F5F5F7] active:scale-[0.985] transition-all shadow-md text-center inline-flex items-center justify-center gap-2"
                >
                  <span>Apply or Enquire Today</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
                <a
                  href="mailto:info@compactpersonnel.co.uk?subject=Career%20Enquiry%20-%20Support%20Worker%20Role"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-[14px] transition-all text-center inline-flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  <span>Email CV Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
