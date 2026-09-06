"use client";

import React from "react";
import AestheticsTreatmentsGrid from "./aesthetics/AestheticsTreatmentsGrid";
import SkinConcernTriage from "./aesthetics/SkinConcernTriage";
import AestheticsSafetyGovernance from "./aesthetics/AestheticsSafetyGovernance";

interface AestheticsDivisionSectionProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function AestheticsDivisionSection({
  onOpenConsultation,
}: AestheticsDivisionSectionProps) {
  return (
    <section id="aesthetics-division" className="w-full py-12 md:py-16 space-y-12">
      {/* Division Intro Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2E8F0]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#fedeb2]/40 text-[#725b38] text-[11px] font-semibold uppercase tracking-widest border border-[#C5A880]/30 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#725b38]"></span>
            Division 02 • Advanced Medical Aesthetics Clinic
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0A192F] tracking-tight">
            Doctor-Led Non-Surgical Rejuvenation &amp; Skin Science
          </h2>
          <p className="text-[16px] text-[#44474D] mt-2 max-w-2xl leading-relaxed">
            Subtle, natural rejuvenation administered strictly by GMC medical doctors. Ultrasound-guided facial contouring, Profhilo biostimulators, and Morpheus8 RF tissue remodeling.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:03331234567"
            className="h-10 px-4 bg-white border border-[#E2E8F0] text-[#0A192F] text-[13px] font-semibold rounded-[4px] flex items-center gap-2 hover:bg-[#eff4ff] transition-colors"
          >
            <span className="material-symbols-outlined text-[#C5A880] text-[18px]">call</span>
            <span>0333 123 4567</span>
          </a>
          <button
            onClick={() => onOpenConsultation?.("aesthetics")}
            className="h-10 px-5 bg-[#0A192F] text-white text-[13px] font-medium rounded-[4px] border border-[#C5A880] hover:bg-[#152542] transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Book Consultation</span>
            <span className="material-symbols-outlined text-[16px] text-[#C5A880]">calendar_today</span>
          </button>
        </div>
      </div>

      {/* Component 1: Treatments Directory */}
      <AestheticsTreatmentsGrid onOpenConsultation={onOpenConsultation} />

      {/* Component 2: Skin Concern Diagnostic Triage */}
      <SkinConcernTriage onOpenConsultation={onOpenConsultation} />

      {/* Component 3: Clinical Safety & Governance */}
      <AestheticsSafetyGovernance onOpenConsultation={onOpenConsultation} />
    </section>
  );
}
