"use client";

import React, { useState } from "react";

interface CareNeedsEstimatorProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function CareNeedsEstimator({ onOpenConsultation }: CareNeedsEstimatorProps) {
  const [careTier, setCareTier] = useState<"visiting" | "livein" | "complex">("visiting");
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(14);
  const [nightCover, setNightCover] = useState<boolean>(false);

  // Hourly rates benchmarked against UK private registered care providers
  const hourlyRate = careTier === "visiting" ? 28 : careTier === "complex" ? 38 : 32;
  const liveInWeeklyBase = 1250;
  const complexLiveInWeeklyBase = 1650;

  const calculateEstimate = () => {
    if (careTier === "livein") {
      return liveInWeeklyBase + (nightCover ? 350 : 0);
    }
    if (careTier === "complex") {
      return Math.round(hoursPerWeek * hourlyRate + (nightCover ? 450 : 0));
    }
    return Math.round(hoursPerWeek * hourlyRate);
  };

  const weeklyTotal = calculateEstimate();

  return (
    <div className="w-full bg-[#f8f9ff] rounded-xl border border-[#E2E8F0] shadow-sm p-6 md:p-8 lg:p-10">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#fedeb2]/40 text-[#725b38] text-[11px] font-semibold uppercase tracking-wider border border-[#C5A880]/30 mb-2">
            <span className="material-symbols-outlined text-[14px]">calculate</span>
            Care Component 02 • Assessment &amp; Cost Estimator
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0A192F] tracking-tight">
            Personal Care Investment Estimator
          </h3>
          <p className="text-[14px] md:text-[15px] text-[#44474D] mt-2">
            Transparent, indicative budgeting for private care, local authority direct payments, and NHS Continuing Healthcare (CHC) funding.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 md:p-8 shadow-sm">
          {/* Step 1: Select Care Level */}
          <div className="mb-6">
            <label className="block text-[13px] font-semibold uppercase tracking-wider text-[#0A192F] mb-3">
              1. Select Primary Care Model
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setCareTier("visiting")}
                className={`p-4 rounded-md border text-left transition-all cursor-pointer ${
                  careTier === "visiting"
                    ? "border-[#0A192F] bg-[#eff4ff]/60 shadow-sm"
                    : "border-[#E2E8F0] hover:border-[#C5A880]/60 bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[14px] font-semibold text-[#0A192F]">Visiting Care</span>
                  <span className="material-symbols-outlined text-[18px] text-[#C5A880]">home</span>
                </div>
                <p className="text-[12px] text-[#44474D]">Scheduled daytime &amp; evening home visits</p>
                <span className="inline-block mt-2 text-[12px] font-mono text-[#725b38] font-semibold">
                  From £28/hr
                </span>
              </button>

              <button
                type="button"
                onClick={() => setCareTier("livein")}
                className={`p-4 rounded-md border text-left transition-all cursor-pointer ${
                  careTier === "livein"
                    ? "border-[#0A192F] bg-[#eff4ff]/60 shadow-sm"
                    : "border-[#E2E8F0] hover:border-[#C5A880]/60 bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[14px] font-semibold text-[#0A192F]">24/7 Live-in Care</span>
                  <span className="material-symbols-outlined text-[18px] text-[#C5A880]">hotel</span>
                </div>
                <p className="text-[12px] text-[#44474D]">Dedicated resident carer living in your home</p>
                <span className="inline-block mt-2 text-[12px] font-mono text-[#725b38] font-semibold">
                  From £1,250/wk
                </span>
              </button>

              <button
                type="button"
                onClick={() => setCareTier("complex")}
                className={`p-4 rounded-md border text-left transition-all cursor-pointer ${
                  careTier === "complex"
                    ? "border-[#0A192F] bg-[#eff4ff]/60 shadow-sm"
                    : "border-[#E2E8F0] hover:border-[#C5A880]/60 bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[14px] font-semibold text-[#0A192F]">Complex / Dementia</span>
                  <span className="material-symbols-outlined text-[18px] text-[#C5A880]">psychology</span>
                </div>
                <p className="text-[12px] text-[#44474D]">Nurse-led clinical care &amp; palliative support</p>
                <span className="inline-block mt-2 text-[12px] font-mono text-[#725b38] font-semibold">
                  From £38/hr
                </span>
              </button>
            </div>
          </div>

          {/* Step 2: Slider or Options */}
          {careTier !== "livein" ? (
            <div className="mb-6 bg-[#f8f9ff] p-5 rounded-md border border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-2">
                <label className="text-[13px] font-semibold text-[#0A192F]">
                  Estimated Weekly Support Hours
                </label>
                <span className="font-mono text-[16px] font-bold text-[#0A192F] bg-white px-3 py-1 rounded border border-[#E2E8F0] tnum">
                  {hoursPerWeek} Hours / Week
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={56}
                step={1}
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#0A192F]"
              />
              <div className="flex justify-between text-[11px] text-[#64748B] mt-1 font-mono">
                <span>5 hrs (starter companion)</span>
                <span>14 hrs (2 hrs daily)</span>
                <span>28 hrs (4 hrs daily)</span>
                <span>56 hrs (intensive)</span>
              </div>
            </div>
          ) : (
            <div className="mb-6 bg-[#f8f9ff] p-5 rounded-md border border-[#E2E8F0] flex items-center justify-between">
              <div>
                <span className="text-[13px] font-semibold text-[#0A192F] block">
                  Add Waking Night Cover
                </span>
                <span className="text-[12px] text-[#64748B]">
                  Required if patient wakes frequently or requires continuous nighttime medication
                </span>
              </div>
              <button
                type="button"
                onClick={() => setNightCover(!nightCover)}
                className={`px-4 py-2 rounded text-[12px] font-semibold cursor-pointer border transition-colors ${
                  nightCover
                    ? "bg-[#0A192F] text-white border-[#0A192F]"
                    : "bg-white text-[#44474D] border-[#E2E8F0] hover:bg-[#eff4ff]"
                }`}
              >
                {nightCover ? "Included (+£350/wk)" : "Standard Sleep-In"}
              </button>
            </div>
          )}

          {/* Step 3: Calculation Breakdown */}
          <div className="p-6 rounded-md bg-[#0A192F] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] uppercase tracking-wider text-[#C5A880] font-semibold">
                  Indicative Care Estimate
                </span>
                <span className="text-[11px] text-white/60 bg-white/10 px-2 py-0.5 rounded">
                  Zero VAT on Care Services
                </span>
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-mono text-3xl md:text-4xl font-bold text-white tnum">
                  £{weeklyTotal.toLocaleString("en-GB")}
                </span>
                <span className="text-white/70 text-[14px]">/ week</span>
              </div>
              <p className="text-[12px] text-white/70 mt-1">
                Based on bespoke plan • Subject to in-home clinical nursing assessment
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                type="button"
                onClick={() => onOpenConsultation?.("care")}
                className="w-full sm:w-auto h-11 px-6 bg-[#C5A880] text-[#0A192F] font-semibold text-[13px] rounded-[4px] hover:bg-[#d6be9a] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Free Assessment</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[12px] text-[#64748B]">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#2D5A46]">check</span>
              Direct Payments &amp; Personal Health Budgets (PHB) Accepted
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#2D5A46]">check</span>
              Emergency Carer Placement Within 24-48 Hours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
