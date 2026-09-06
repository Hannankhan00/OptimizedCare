"use client";

import React, { useState } from "react";

interface ServiceTier {
  id: string;
  name: string;
  hourlyEstimate: number;
  badge: string;
  desc: string;
}

const tiers: ServiceTier[] = [
  {
    id: "domiciliary",
    name: "Domiciliary Home Care",
    hourlyEstimate: 28,
    badge: "Flexible Visits",
    desc: "Scheduled morning, lunchtime, evening, or night check-ins.",
  },
  {
    id: "supported-living",
    name: "Supported Living (1:1)",
    hourlyEstimate: 32,
    badge: "Tenancy & Independence",
    desc: "Keyworker hours for tenancy, life skills, and community activities.",
  },
  {
    id: "complex",
    name: "Complex Clinical Care",
    hourlyEstimate: 42,
    badge: "Nurse-Supervised",
    desc: "Tracheostomy, PEG feeding, and high-dependency nursing oversight.",
  },
  {
    id: "live-in",
    name: "24/7 Dedicated Live-In",
    hourlyEstimate: 22, // Calculated on weekly block basis
    badge: "Round-the-Clock",
    desc: "Full-time resident companion carer living in client home.",
  },
];

export default function CompactNeedsEstimator() {
  const [selectedTier, setSelectedTier] = useState<string>("supported-living");
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(25);
  const [requiresNightSupervision, setRequiresNightSupervision] = useState<boolean>(false);
  const [requiresPositiveRiskSupport, setRequiresPositiveRiskSupport] = useState<boolean>(true);

  const tier = tiers.find((t) => t.id === selectedTier) || tiers[1];

  // Calculated approximate figures
  const baseWeekly =
    selectedTier === "live-in"
      ? 1450 + (requiresNightSupervision ? 250 : 0)
      : hoursPerWeek * tier.hourlyEstimate + (requiresNightSupervision ? 180 : 0);

  return (
    <section className="w-full py-20 md:py-28 bg-[#FBFBFD] border-b border-[#E5E5EA]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block p-1 rounded-full bg-[#E5E5EA]/60 ring-1 ring-black/5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0D5C3A]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0D5C3A]">
                Care Planning &amp; Cost Clarity
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1D1D1F] tracking-tight leading-[1.12] text-balance">
            Interactive Care Needs &amp; Hours Estimator.
          </h2>

          <p className="text-[17px] sm:text-[18px] text-[#6E6E73] font-normal leading-relaxed text-pretty">
            Plan your care model transparently. Whether self-funded, Direct Payments, Local Authority, or NHS Continuing Healthcare (CHC) funded.
          </p>
        </div>

        {/* Double-Bezel Calculator Container */}
        <div className="p-2.5 sm:p-4 rounded-[2.5rem] bg-[#E5E5EA]/40 ring-1 ring-black/5 max-w-5xl mx-auto">
          <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Interactive Selectors */}
              <div className="lg:col-span-7 space-y-8">
                {/* Service Model Selector */}
                <div>
                  <label className="block text-[13px] font-semibold uppercase tracking-wider text-[#1D1D1F] mb-3">
                    1. Select Care Model
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {tiers.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setSelectedTier(t.id)}
                        className={`p-3.5 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                          selectedTier === t.id
                            ? "bg-[#ECFDF5] border-[#0D5C3A] ring-1 ring-[#0D5C3A]"
                            : "bg-white border-[#E5E5EA] hover:border-[#D2D2D7] hover:bg-[#F9F9FB]"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[14px] font-semibold text-[#1D1D1F]">
                            {t.name}
                          </span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              selectedTier === t.id
                                ? "border-[#0D5C3A] bg-[#0D5C3A]"
                                : "border-[#D2D2D7]"
                            }`}
                          >
                            {selectedTier === t.id && (
                              <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            )}
                          </span>
                        </div>
                        <p className="text-[12px] text-[#6E6E73] mt-1 line-clamp-2">
                          {t.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hours Slider (If not live-in) */}
                {selectedTier !== "live-in" ? (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-[13px] font-semibold uppercase tracking-wider text-[#1D1D1F]">
                        2. Weekly Direct Support Hours
                      </label>
                      <span className="text-[16px] font-bold text-[#0D5C3A] tnum">
                        {hoursPerWeek} hrs / week
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={70}
                      step={5}
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                      className="w-full h-2 bg-[#E5E5EA] rounded-lg appearance-none cursor-pointer accent-[#0D5C3A]"
                    />
                    <div className="flex justify-between text-[11px] text-[#86868B] mt-1 tnum">
                      <span>5 hrs (Check-ins)</span>
                      <span>35 hrs (Daily part-time)</span>
                      <span>70 hrs (High intensity)</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#F5F5F7] border border-[#E5E5EA]">
                    <div className="flex items-center gap-2 text-[#0D5C3A] text-[13px] font-semibold">
                      <span className="material-symbols-outlined text-[18px]">info</span>
                      <span>24/7 Continuous Residential Coverage</span>
                    </div>
                    <p className="text-[12px] text-[#6E6E73] mt-1">
                      Includes day-to-day household support, cooking, medication, and sleep-in presence in your home.
                    </p>
                  </div>
                )}

                {/* Clinical Add-on Toggles */}
                <div className="space-y-3 pt-2">
                  <label className="block text-[13px] font-semibold uppercase tracking-wider text-[#1D1D1F]">
                    3. Specific Clinical Provisions
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl border border-[#E5E5EA] bg-[#FBFBFD] cursor-pointer hover:bg-white transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={requiresNightSupervision}
                        onChange={(e) => setRequiresNightSupervision(e.target.checked)}
                        className="w-4 h-4 rounded text-[#0D5C3A] accent-[#0D5C3A]"
                      />
                      <div>
                        <span className="text-[13px] font-medium text-[#1D1D1F]">
                          Waking Night or Active Night Oversight
                        </span>
                        <p className="text-[11px] text-[#86868B]">
                          For clients requiring active medication or repositioning during sleep hours.
                        </p>
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl border border-[#E5E5EA] bg-[#FBFBFD] cursor-pointer hover:bg-white transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={requiresPositiveRiskSupport}
                        onChange={(e) => setRequiresPositiveRiskSupport(e.target.checked)}
                        className="w-4 h-4 rounded text-[#0D5C3A] accent-[#0D5C3A]"
                      />
                      <div>
                        <span className="text-[13px] font-medium text-[#1D1D1F]">
                          Active Support &amp; Community Therapeutic Outings
                        </span>
                        <p className="text-[11px] text-[#86868B]">
                          Includes transport accompaniment, Peak District hikes, and sports activities.
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Right Column: Estimate Card */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0D5C3A] text-white space-y-6 shadow-xl relative overflow-hidden">
                  {/* Watermark Pattern */}
                  <div className="pointer-events-none absolute -bottom-10 -right-10 w-44 h-44 bg-white/5 rounded-full blur-2xl" />

                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-widest text-[#A7F3D0] font-semibold">
                      Indicative Package Estimate
                    </span>
                    <h3 className="text-xl font-bold">{tier.name}</h3>
                  </div>

                  <div className="pt-2 border-t border-white/15">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight tnum">
                        £{baseWeekly.toLocaleString()}
                      </span>
                      <span className="text-[14px] text-white/80 font-normal">/ estimated week</span>
                    </div>
                    <p className="text-[12px] text-white/70 mt-1">
                      {selectedTier === "live-in"
                        ? "Flat weekly residential block rate"
                        : `Based on ~${hoursPerWeek} direct hours @ £${tier.hourlyEstimate}/hr`}
                    </p>
                  </div>

                  {/* Funding Mechanisms */}
                  <div className="space-y-2 pt-2 border-t border-white/15 text-[12px] text-white/90">
                    <p className="font-semibold text-white">Accepted Funding Pathways:</p>
                    <ul className="space-y-1 text-white/80 list-disc list-inside">
                      <li>NHS Continuing Healthcare (CHC)</li>
                      <li>Local Authority Direct Payments</li>
                      <li>Private &amp; Family Self-Funding</li>
                      <li>Housing Benefits for Supported Living</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <a
                      href="#contact-compact"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white text-[#0D5C3A] font-semibold text-[14px] hover:bg-[#F5F5F7] active:scale-[0.985] transition-all shadow-md"
                    >
                      <span>Request Free Intake Assessment</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
