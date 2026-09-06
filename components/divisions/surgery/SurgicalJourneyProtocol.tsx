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
      title: "Consultant Plastic Surgeon Consultation",
      tag: "Stage 1",
      icon: "person",
      desc: "A direct 45-minute consultation with your operating BAAPS/BAPRAS consultant surgeon. Candid discussion of anatomy, technique, Crisalix 3D imaging, and realistic outcomes.",
      highlight: "Direct Surgeon Meeting",
    },
    {
      step: "02",
      title: "Mandatory 2-Week Cooling-Off Period",
      tag: "Stage 2",
      icon: "hourglass_top",
      desc: "Strictly upholding GMC ethical standards, a minimum 14-day reflective period is mandatory. No same-day bookings or high-pressure sales coordinators.",
      highlight: "Ethical Reflection",
    },
    {
      step: "03",
      title: "Pre-Operative Health Screening",
      tag: "Stage 3",
      icon: "vital_signs",
      desc: "Complete pre-assessment including blood panels, MRSA screening, ECG, and consultation with our Consultant Anesthetist (FRCA) to guarantee your theatre safety.",
      highlight: "Full Medical Workup",
    },
    {
      step: "04",
      title: "Private Hospital Theatre Day",
      tag: "Stage 4",
      icon: "local_hospital",
      desc: "Procedure performed in our CQC-inspected Central London partner hospital theatres. En-suite private room, dedicated surgical recovery nurse, and surgeon post-op review.",
      highlight: "Private En-Suite Room",
    },
    {
      step: "05",
      title: "Comprehensive 2-Year Clinical Aftercare",
      tag: "Stage 5",
      icon: "verified_user",
      desc: "All dressings, compression garments, unlimited scheduled surgeon reviews at 1 week, 6 weeks, 6 months, and 1 year, backed by our 24/7 nurse emergency hotline.",
      highlight: "Revision Policy Included",
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-6 md:p-8 lg:p-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#fedeb2]/40 text-[#725b38] text-[11px] font-semibold uppercase tracking-wider border border-[#C5A880]/30 mb-2">
            <span className="material-symbols-outlined text-[14px]">checklist</span>
            Surgery Component 03 • The Five-Stage Surgical Journey
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0A192F] tracking-tight">
            British Standard Clinical Surgery Protocol
          </h3>
          <p className="text-[15px] text-[#44474D] mt-1">
            From initial consultation to long-term aftercare, our patient safety protocol strictly follows General Medical Council (GMC) guidance.
          </p>
        </div>

        <button
          onClick={() => onOpenConsultation?.("surgery")}
          className="h-10 px-5 bg-[#0A192F] text-white font-medium text-[13px] rounded-[4px] border border-[#C5A880] hover:bg-[#152542] transition-colors shadow-sm flex items-center gap-2 flex-shrink-0 cursor-pointer"
        >
          <span>Book Consultant Consultation</span>
          <span className="material-symbols-outlined text-[16px] text-[#C5A880]">arrow_forward</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {stages.map((stage, idx) => (
          <div
            key={idx}
            className="p-5 rounded-lg bg-[#f8f9ff] border border-[#E2E8F0] flex flex-col justify-between hover:border-[#C5A880]/70 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xl font-bold text-[#C5A880]">
                  {stage.step}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#725b38] bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">
                  {stage.tag}
                </span>
              </div>
              <div className="w-9 h-9 rounded-md bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0A192F] mb-3 group-hover:bg-[#0A192F] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">{stage.icon}</span>
              </div>
              <h4 className="text-[14px] font-semibold text-[#0A192F] leading-snug">
                {stage.title}
              </h4>
              <p className="text-[12px] text-[#44474D] mt-2 leading-relaxed">
                {stage.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center gap-1 text-[11px] font-medium text-[#2D5A46]">
              <span className="material-symbols-outlined text-[14px]">check_circle</span>
              <span>{stage.highlight}</span>
            </div>
          </div>
        ))}
      </div>

      {/* GMC & BAAPS Reassurance Guarantee */}
      <div className="mt-8 p-4 rounded-lg bg-[#eff4ff] border border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#44474D]">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#725b38] text-[22px]">verified_user</span>
          <span>
            <strong>Zero High-Pressure Sales Guarantee:</strong> All surgical appointments are conducted strictly by Consultant Plastic Surgeons, never patient advisors or sales personnel.
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0A192F] bg-white px-3 py-1 rounded border border-[#E2E8F0]">
            BAAPS &amp; BAPRAS Fellows
          </span>
        </div>
      </div>
    </div>
  );
}
