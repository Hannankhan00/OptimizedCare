"use client";

import React from "react";
import CareServicesCatalogue from "./care/CareServicesCatalogue";
import CareNeedsEstimator from "./care/CareNeedsEstimator";
import CareIntakeJourney from "./care/CareIntakeJourney";

interface CareDivisionSectionProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function CareDivisionSection({
  onOpenConsultation,
}: CareDivisionSectionProps) {
  return (
    <section id="care-division" className="w-full py-12 md:py-16 space-y-12">
      {/* Division Intro Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2E8F0]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#fedeb2]/40 text-[#725b38] text-[11px] font-semibold uppercase tracking-widest border border-[#C5A880]/30 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#725b38]"></span>
            Division 01 • Supported &amp; Domiciliary Care Services
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0A192F] tracking-tight">
            Supported Living, Domiciliary &amp; Live-In Nursing
          </h2>
          <p className="text-[16px] text-[#44474D] mt-2 max-w-2xl leading-relaxed">
            Dignified, person-centred residential care, autism/learning disability tenancies, and complex palliative nursing governed under strict CQC clinical quality standards.
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
            onClick={() => onOpenConsultation?.("care")}
            className="h-10 px-5 bg-[#0A192F] text-white text-[13px] font-medium rounded-[4px] border border-[#C5A880] hover:bg-[#152542] transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Book Assessment</span>
            <span className="material-symbols-outlined text-[16px] text-[#C5A880]">calendar_today</span>
          </button>
        </div>
      </div>

      {/* Component 1: Services Catalogue */}
      <CareServicesCatalogue onOpenConsultation={onOpenConsultation} />

      {/* Component 2: Interactive Needs & Cost Estimator */}
      <CareNeedsEstimator onOpenConsultation={onOpenConsultation} />

      {/* Component 3: 4-Step Clinical Intake Journey */}
      <CareIntakeJourney onOpenConsultation={onOpenConsultation} />
    </section>
  );
}
