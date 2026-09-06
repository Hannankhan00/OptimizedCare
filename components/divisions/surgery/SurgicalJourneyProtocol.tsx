"use client";

import React from "react";

interface SurgicalJourneyProtocolProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function SurgicalJourneyProtocol({
  onOpenConsultation,
}: SurgicalJourneyProtocolProps) {
  const stages = [
    {
      step: "01",
      title: "Consultant Surgeon Consultation",
      tag: "Stage 1",
      icon: "person",
      desc: "A direct 45-minute consultation with your operating BAAPS/BAPRAS consultant plastic surgeon. Detailed anatomical evaluation and Crisalix 3D simulation.",
      highlight: "Direct Surgeon Meeting",
    },
    {
      step: "02",
      title: "Mandatory 14-Day Cooling-Off",
      tag: "Stage 2",
      icon: "hourglass_top",
      desc: "Strictly upholding GMC ethical standards, a minimum two-week reflective period is mandatory. No same-day deposits or high-pressure sales coordinators.",
      highlight: "Ethical Reflection",
    },
    {
      step: "03",
      title: "Pre-Operative Medical Screening",
      tag: "Stage 3",
      icon: "vital_signs",
      desc: "Complete pre-assessment including blood panels, MRSA screening, ECG, and consultation with our Consultant Anesthetist (FRCA) ensuring total theatre safety.",
      highlight: "FRCA Anesthetist Review",
    },
    {
      step: "04",
      title: "Private Hospital Theatre Day",
      tag: "Stage 4",
      icon: "local_hospital",
      desc: "Procedure performed in our CQC-inspected partner hospital theatres. En-suite private room, dedicated recovery nurse, and surgeon post-op visit.",
      highlight: "En-Suite Hospital Room",
    },
    {
      step: "05",
      title: "2-Year Clinical Aftercare Package",
      tag: "Stage 5",
      icon: "verified_user",
      desc: "Unlimited scheduled surgeon reviews at 1 week, 6 weeks, 6 months, and 1 year, supported by compression garments and our 24/7 emergency nurse hotline.",
      highlight: "Revision Policy Included",
    },
  ];

  return (
    <div className="w-full py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
              <span className="text-[#1D3557]">GMC Clinical Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D3557] tracking-tight leading-tight">
              The Five-Stage Clinical Surgical Journey
            </h2>
            <p className="text-[16px] text-[#457B9D] mt-2 max-w-2xl leading-relaxed">
              From initial consultation to long-term aftercare, our patient safety protocol strictly follows General Medical Council (GMC) guidance.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation?.("surgery")}
            className="inline-flex items-center justify-center h-12 px-7 bg-[#2A9D8F] hover:bg-[#21867A] text-white font-semibold text-[14px] rounded-full transition-all shadow-xs shrink-0 cursor-pointer active:scale-95"
          >
            <span>Book Surgeon Consultation</span>
            <span className="material-symbols-outlined text-[18px] ml-2">arrow_forward</span>
          </button>
        </div>

        {/* 5 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#94D2BD] shadow-xs flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-[#2A9D8F]">
                    {stage.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2A9D8F] bg-[#E8F6F3] border border-[#94D2BD] px-2.5 py-0.5 rounded-full">
                    {stage.tag}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#1D3557] mb-4 group-hover:bg-[#1D3557] group-hover:text-white transition-colors shadow-2xs">
                  <span className="material-symbols-outlined text-[20px]">{stage.icon}</span>
                </div>

                <h3 className="text-[15px] font-semibold text-[#1D3557] leading-snug">
                  {stage.title}
                </h3>

                <p className="text-[12px] text-[#457B9D] mt-2 leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-semibold text-[#2A9D8F]">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                <span>{stage.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Footer Banner */}
        <div className="mt-8 p-2 rounded-[2rem] bg-white border border-[#E2E8F0] shadow-sm">
          <div className="p-6 rounded-[calc(2rem-0.5rem)] bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#457B9D]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#E8F6F3] border border-[#94D2BD] flex items-center justify-center text-[#2A9D8F] shrink-0">
                <span className="material-symbols-outlined text-[20px]">shield</span>
              </div>
              <span>
                <strong className="text-[#1D3557]">Comprehensive 2-Year Clinical Aftercare Warranty:</strong> All follow-up appointments, wound checks, surgical dressings, and revision policies are explicitly contracted with no hidden charges.
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#1D3557] font-semibold bg-white px-3 py-1 rounded-full border border-[#E2E8F0] shrink-0">
              GMC Surgery Protocol OC-SURG-2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
