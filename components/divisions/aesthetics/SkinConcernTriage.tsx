"use client";

import React, { useState } from "react";

interface SkinConcernTriageProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function SkinConcernTriage({ onOpenConsultation }: SkinConcernTriageProps) {
  const [selectedConcern, setSelectedConcern] = useState<number>(0);

  const concerns = [
    {
      id: "expression-lines",
      title: "Forehead & Expression Lines",
      subtitle: "Dynamic Wrinkles & Crow's Feet",
      icon: "face",
      recommendedProtocol: "Targeted Micro-Botox & Bocouture Smoothing",
      clinicalRationale:
        "Micro-dosed neuromodulators block acetylcholine release at neuromuscular junctions, relaxing hyperactive facial muscles while strictly preventing frozen or unnatural appearances.",
      protocolDetails: [
        "Session Duration: 30 minutes with zero downtime",
        "Targeted Zones: Glabella (frown), Frontalis (forehead), Lateral Canthal (crow's feet)",
        "Peak Clinical Onset: 10 to 14 days",
        "Maintenance Schedule: 3 to 4 times annually",
      ],
      expectedResult: "Smooth, relaxed complexion with full expressive mobility preserved.",
      priceGuideline: "From £220 for 1 area / £340 for 3 areas",
    },
    {
      id: "volume-loss",
      title: "Mid-Face & Cheek Flattening",
      subtitle: "Age-Related Fat Pad Resorption",
      icon: "mood",
      recommendedProtocol: "Ultrasound-Guided Deep Dermal Volumisation",
      clinicalRationale:
        "Cross-linked hyaluronic acid gels (Juvederm Voluma / Teoxane Ultra Deep) placed supra-periosteally on the zygomatic bone to restore youthful anatomical cheek projection and soften smile lines.",
      protocolDetails: [
        "Session Duration: 45 minutes under topical anesthetic",
        "High-Resolution Ultrasound Pre-Scan for 100% vascular safety",
        "Subtle structural lifting of the mid-face with zero pillowing",
        "Longevity: Clinically proven to endure 12 to 18 months",
      ],
      expectedResult: "Restored youthful cheek contours and naturally lifted lower face.",
      priceGuideline: "From £350 per syringe (1.0ml)",
    },
    {
      id: "jowls-laxity",
      title: "Lower Face Sagging & Jowls",
      subtitle: "Loss of Collagen & SMAS Architecture",
      icon: "self_improvement",
      recommendedProtocol: "Morpheus8 Subdermal Remodeling & Profhilo",
      clinicalRationale:
        "Radiofrequency thermal micro-pins penetrate into the fibroseptal network up to 4mm, denaturing lax collagen and stimulating neocollagenesis to visibly tighten the jawline and submental plane.",
      protocolDetails: [
        "Course Recommendation: 2 to 3 sessions spaced 4 to 6 weeks apart",
        "Dual mechanism: Deep subdermal heating + epidermal micro-resurfacing",
        "Recovery: Mild redness and micro-crusting resolving in 48 to 72 hours",
        "Optimal Tightening: Progressive over 3 to 6 months post-treatment",
      ],
      expectedResult: "Sharpened jawline definition, reduced double chin laxity, and firmer tissue.",
      priceGuideline: "From £650 per session / £1,650 for course of 3",
    },
    {
      id: "dark-circles",
      title: "Under-Eye Hollowness & Crepiness",
      subtitle: "Periorbital Thinning & Pigmentation",
      icon: "visibility",
      recommendedProtocol: "Ameela / Nucleofill Polynucleotide Cellular Repair",
      clinicalRationale:
        "Highly purified polynucleotides stimulate microcirculation and scavenge free radicals, naturally thickening fragile under-eye tissue and clearing venous pooling without the water-retention risks of traditional tear-trough fillers.",
      protocolDetails: [
        "Protocol: 2 sessions spaced 2 weeks apart",
        "Zero risk of Tyndall effect or post-filler swelling/oedema",
        "Stimulates endogenous fibroblast proliferation and vascular growth",
        "Ideal for dark circles, hollowing, and fine skin crinkling",
      ],
      expectedResult: "Brighter, thicker under-eye skin with marked reduction in fatigue shadows.",
      priceGuideline: "From £420 per session",
    },
    {
      id: "texture-scarring",
      title: "Acne Scars, Pores & Sun Damage",
      subtitle: "Epidermal Roughness & Melasma",
      icon: "flare",
      recommendedProtocol: "Medical TCA/Salicylic Peels & Medical Microneedling",
      clinicalRationale:
        "Controlled chemical exfoliation and micro-channeling prompt cellular turnover, breakdown fibrous scar tissue, and suppress hyperactive melanocytes for uniform tonal clarity.",
      protocolDetails: [
        "Preparation: 2-week Obagi medical skin priming protocol",
        "Controlled depth resurfacing customized to Fitzpatrick skin type",
        "Suppresses post-inflammatory hyperpigmentation (PIH)",
        "Post-procedure epidermal recovery in 3 to 5 days",
      ],
      expectedResult: "Refined pore structure, smoothed scar depths, and luminous clarity.",
      priceGuideline: "From £195 per session",
    },
  ];

  const current = concerns[selectedConcern];

  return (
    <div className="w-full bg-[#F7F4EC] rounded-xl border border-[#DDD3BF] shadow-sm p-6 md:p-8 lg:p-10">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#E9C9AC]/40 text-[#8A4530] text-[11px] font-semibold uppercase tracking-wider border border-[#A85D3D]/30 mb-2">
            <span className="material-symbols-outlined text-[14px]">psychology_alt</span>
            Aesthetics Component 02 • Skin Concern Diagnostic Triage
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#211E1A] tracking-tight">
            Personalised Clinical Protocol Finder
          </h3>
          <p className="text-[14px] md:text-[15px] text-[#5A5347] mt-2">
            Select your primary aesthetic objective to see the gold-standard medical protocol recommended by our Harley Street clinical doctors.
          </p>
        </div>

        {/* Concern Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-8">
          {concerns.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelectedConcern(idx)}
              className={`p-3 rounded-lg border text-left flex flex-col justify-between transition-all cursor-pointer ${
                selectedConcern === idx
                  ? "bg-[#211E1A] text-white border-[#211E1A] shadow-sm"
                  : "bg-white text-[#5A5347] border-[#DDD3BF] hover:border-[#A85D3D]/60 hover:bg-white/90"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[20px] mb-2 ${
                  selectedConcern === idx ? "text-[#A85D3D]" : "text-[#8A4530]"
                }`}
              >
                {item.icon}
              </span>
              <div>
                <span
                  className={`text-[12px] font-semibold block leading-tight ${
                    selectedConcern === idx ? "text-white" : "text-[#211E1A]"
                  }`}
                >
                  {item.title}
                </span>
                <span
                  className={`text-[10px] mt-1 block truncate ${
                    selectedConcern === idx ? "text-white/70" : "text-[#6B6457]"
                  }`}
                >
                  {item.subtitle}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Diagnostic Output Panel */}
        <div className="bg-white rounded-xl border border-[#DDD3BF] p-6 md:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 border-b border-[#DDD3BF] gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A4530]">
                Doctor Recommended Prescription
              </span>
              <h4 className="text-xl md:text-2xl font-bold text-[#211E1A] mt-1">
                {current.recommendedProtocol}
              </h4>
            </div>
            <div className="bg-[#EFEAE0] px-4 py-2 rounded border border-[#DDD3BF] flex-shrink-0">
              <span className="text-[11px] uppercase tracking-wider text-[#6B6457] block">Indicative Fee</span>
              <span className="font-mono text-[14px] font-bold text-[#211E1A] tnum">
                {current.priceGuideline}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-[12px] font-semibold text-[#211E1A] uppercase tracking-wider block mb-1">
                  Clinical Mechanism of Action
                </span>
                <p className="text-[14px] text-[#5A5347] leading-relaxed">
                  {current.clinicalRationale}
                </p>
              </div>

              <div className="bg-[#F7F4EC] p-4 rounded-lg border border-[#DDD3BF]">
                <span className="text-[12px] font-semibold text-[#211E1A] uppercase tracking-wider block mb-2">
                  Expected Clinical Outcome
                </span>
                <p className="text-[13px] text-[#2D5A46] font-medium flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  {current.expectedResult}
                </p>
              </div>
            </div>

            <div className="md:col-span-5 bg-[#F7F4EC] p-5 rounded-lg border border-[#DDD3BF] flex flex-col justify-between">
              <div>
                <span className="text-[12px] font-semibold text-[#211E1A] uppercase tracking-wider block mb-2.5">
                  Protocol Specifications
                </span>
                <ul className="space-y-2 text-[12px] text-[#5A5347]">
                  {current.protocolDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#A85D3D] flex-shrink-0 mt-0.5">
                        check
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onOpenConsultation?.("aesthetics")}
                className="w-full mt-4 h-10 bg-[#211E1A] text-white font-medium text-[13px] rounded-[4px] border border-[#A85D3D] hover:bg-[#3A342B] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Consult Our Doctors</span>
                <span className="material-symbols-outlined text-[15px] text-[#A85D3D]">calendar_month</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
