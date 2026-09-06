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
        "Peak Clinical Onset: 10 to 14 days post-administration",
        "Maintenance Schedule: 3 to 4 times annually for preventative smoothness",
      ],
      expectedResult: "Smooth, relaxed complexion with full expressive mobility preserved.",
      priceGuideline: "From £220 (1 area) / £340 (3 areas)",
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
        "Session Duration: 45 minutes under topical numbing",
        "High-Resolution Ultrasound Pre-Scan for 100% vascular safety",
        "Subtle structural lifting of the mid-face with zero pillowing",
        "Endurance: Clinically proven to endure 12 to 18 months",
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
      priceGuideline: "From £650 per session / Course packages available",
    },
    {
      id: "dark-circles",
      title: "Under-Eye Hollowness & Crepiness",
      subtitle: "Periorbital Thinning & Pigmentation",
      icon: "visibility",
      recommendedProtocol: "Ameela® Polynucleotide Cellular DNA Repair",
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
    {
      id: "lips-perioral",
      title: "Perioral Lines & Lip Definition",
      subtitle: "Volume Atrophy & Smoker Lines",
      icon: "favorite",
      recommendedProtocol: "Micro-Droplet Hyaluronic Lip Architecture",
      clinicalRationale:
        "Ultralight cohesive hyaluronic acid (Teoxane RHA 2 / Juvederm Volbella) placed with microscopic precision along the vermilion border and oral commissures to hydrate and define without duck-lip swelling.",
      protocolDetails: [
        "Procedure: 30 minutes with dental block or topical numbing",
        "Micro-cannula delivery protecting the labial arteries",
        "Preserves natural perioral muscular dynamics during speech and smiling",
        "Longevity: 9 to 12 months with natural breakdown",
      ],
      expectedResult: "Supple, hydrated lips with razor-sharp borders and softened vertical smoker lines.",
      priceGuideline: "From £320 per syringe",
    },
  ];

  const current = concerns[selectedConcern];

  return (
    <div className="w-full py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[820px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[11px] font-semibold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
            Diagnostic Clinical Triage
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D3557] tracking-tight leading-tight">
            Personalised Clinical Protocol Finder
          </h2>
          <p className="text-[16px] text-[#457B9D] mt-3 leading-relaxed">
            Select your primary aesthetic objective to discover the evidence-based medical protocol prescribed by our clinical dermatologists.
          </p>
        </div>

        {/* Concern Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {concerns.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelectedConcern(idx)}
              className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-2xs ${
                selectedConcern === idx
                  ? "bg-[#1D3557] text-white border-[#1D3557] shadow-sm scale-[1.02]"
                  : "bg-[#F8FAFC] text-[#457B9D] border-[#E2E8F0] hover:border-[#94D2BD] hover:bg-[#E8F6F3]"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 ${
                  selectedConcern === idx
                    ? "bg-[#2A9D8F] text-white"
                    : "bg-white text-[#2A9D8F] border border-[#E2E8F0]"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
              </div>
              <div>
                <span
                  className={`text-[12px] font-semibold block leading-tight ${
                    selectedConcern === idx ? "text-white" : "text-[#1D3557]"
                  }`}
                >
                  {item.title}
                </span>
                <span
                  className={`text-[10px] mt-1 block truncate ${
                    selectedConcern === idx ? "text-white/75" : "text-[#457B9D]"
                  }`}
                >
                  {item.subtitle}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Protocol Display Card (Double Bezel) */}
        <div className="p-2 rounded-[2rem] bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm">
          <div className="bg-white rounded-[calc(2rem-0.5rem)] p-6 md:p-10 border border-[#E2E8F0]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#2A9D8F] block mb-1">
                    Recommended Medical Protocol
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D3557] tracking-tight">
                    {current.recommendedProtocol}
                  </h3>
                  <p className="text-[15px] text-[#457B9D] mt-3 leading-relaxed">
                    {current.clinicalRationale}
                  </p>
                </div>

                {/* Treatment Highlights */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-[13px] font-semibold uppercase tracking-wider text-[#1D3557]">
                    Clinical Procedure Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.protocolDetails.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
                      >
                        <span className="material-symbols-outlined text-[#2A9D8F] text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-[12px] text-[#1D3557] font-medium leading-snug">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Summary Card */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#457B9D] block mb-1">
                    Expected Aesthetic Outcome
                  </span>
                  <p className="text-[14px] font-semibold text-[#1D3557] leading-relaxed">
                    {current.expectedResult}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#457B9D] block">
                    Pricing Guideline
                  </span>
                  <div className="text-[20px] font-semibold text-[#2A9D8F] font-mono mt-0.5">
                    {current.priceGuideline}
                  </div>
                  <span className="text-[11px] text-[#457B9D] block mt-1">
                    Includes consultation, ultrasound scanning, and 14-day review.
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => onOpenConsultation?.("aesthetics")}
                    className="w-full h-12 bg-[#2A9D8F] hover:bg-[#21867A] text-white font-semibold text-[14px] rounded-full transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.985]"
                  >
                    <span>Book Triage Consultation</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#457B9D]">
                    <span className="material-symbols-outlined text-[15px] text-[#2A9D8F]">lock</span>
                    <span>100% Confidential • Zero High-Pressure Sales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
