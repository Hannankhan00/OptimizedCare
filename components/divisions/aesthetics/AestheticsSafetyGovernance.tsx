"use client";

import React from "react";

interface AestheticsSafetyGovernanceProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function AestheticsSafetyGovernance({
  onOpenConsultation,
}: AestheticsSafetyGovernanceProps) {
  const pillars = [
    {
      title: "100% Doctor-Led Medical Team",
      icon: "medical_services",
      desc: "All injectable treatments are administered strictly by GMC and NMC registered medical doctors and independent prescribers. Zero non-medical injectors.",
    },
    {
      title: "High-Resolution Ultrasound Scanning",
      icon: "radiology",
      desc: "We utilize handheld high-frequency ultrasound to map facial vasculature and identify aberrant arteries before placing dermal filler, virtually eliminating vascular risk.",
    },
    {
      title: "Emergency Reversal Protocols",
      icon: "emergency",
      desc: "Immediate on-site availability of prescription hyaluronidase, hyperbaric referral networks, and 24/7 doctor telephone triage for all injection patients.",
    },
    {
      title: "Save Face & CQC Accredited Suites",
      icon: "health_and_safety",
      desc: "Our Marylebone & Belgravia clinical treatment suites operate under hospital-grade sterile disinfection, HEPA filtration, and strict single-use CE cannula standards.",
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-6 md:p-8 lg:p-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#fedeb2]/40 text-[#725b38] text-[11px] font-semibold uppercase tracking-wider border border-[#C5A880]/30 mb-2">
            <span className="material-symbols-outlined text-[14px]">gavel</span>
            Aesthetics Component 03 • Medical Safety &amp; Governance
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0A192F] tracking-tight">
            The Harley &amp; Belgravia Clinical Safety Standard
          </h3>
          <p className="text-[15px] text-[#44474D] mt-1">
            Setting the benchmark for safety in an unregulated UK aesthetics market through rigorous medical oversight.
          </p>
        </div>

        <button
          onClick={() => onOpenConsultation?.("aesthetics")}
          className="h-10 px-5 bg-[#0A192F] text-white font-medium text-[13px] rounded-[4px] border border-[#C5A880] hover:bg-[#152542] transition-colors shadow-sm flex items-center gap-2 flex-shrink-0 cursor-pointer"
        >
          <span>Book with GMC Doctor</span>
          <span className="material-symbols-outlined text-[16px] text-[#C5A880]">arrow_forward</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg bg-[#f8f9ff] border border-[#E2E8F0] flex flex-col justify-between hover:border-[#C5A880]/60 transition-colors"
          >
            <div>
              <div className="w-11 h-11 rounded-md bg-white border border-[#E2E8F0] flex items-center justify-center text-[#725b38] mb-4 shadow-xs">
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
              </div>
              <h4 className="text-[15px] font-semibold text-[#0A192F] leading-snug">
                {item.title}
              </h4>
              <p className="text-[13px] text-[#44474D] mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-medium text-[#2D5A46]">
              <span className="material-symbols-outlined text-[14px]">check_circle</span>
              <span>Certified Standard</span>
            </div>
          </div>
        ))}
      </div>

      {/* Reassurance Guarantee Footer */}
      <div className="mt-8 p-4 rounded-lg bg-[#eff4ff] border border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#44474D]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#725b38] text-[20px]">verified</span>
          <span>
            <strong>Complimentary 2-Week Follow-Up Review:</strong> Every injectable patient receives a face-to-face physician review with complimentary fine-tuning top-up if indicated.
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#64748B] flex-shrink-0">
          GMC Clinical Protocol HB-AESTH-2026
        </span>
      </div>
    </div>
  );
}
