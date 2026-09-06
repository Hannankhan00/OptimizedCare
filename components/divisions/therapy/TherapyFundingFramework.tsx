"use client";

import React from "react";

interface TherapyFundingFrameworkProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function TherapyFundingFramework({
  onOpenConsultation,
}: TherapyFundingFrameworkProps) {
  const pillars = [
    {
      title: "Direct Payments & NHS CHC",
      icon: "account_balance_wallet",
      desc: "We accept Local Authority Direct Payments, NHS Continuing Healthcare (CHC) personal health budgets, and statutory social care funding with straightforward invoicing.",
      highlight: "Personal Budgets Accepted",
    },
    {
      title: "Private Medical Insurance & Self-Pay",
      icon: "health_and_safety",
      desc: "Recognized by leading UK private medical insurers including BUPA, AXA Health, Aviva, and Vitality, as well as transparent direct self-pay fee schedules.",
      highlight: "BUPA & AXA Health Approved",
    },
    {
      title: "In-Clinic Suites & Home Visits",
      icon: "home_health",
      desc: "Attend our private Stockport clinical rooms, or receive treatment in the comfort and familiarity of your own home across the region and UK.",
      highlight: "UK-Wide Domiciliary Service",
    },
    {
      title: "48-Hour Clinical Documentation",
      icon: "clinical_notes",
      desc: "Comprehensive assessment reports and clinical discharge summaries delivered within 48 hours for GP liaison, case managers, and statutory social services.",
      highlight: "Rapid Multi-Agency Liaison",
    },
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Clinical Intake & Triage",
      desc: "Our senior lead clinician reviews your referral, medical history, and mobility status to match you with the ideal sub-specialist therapist.",
    },
    {
      step: "02",
      title: "Comprehensive Initial Assessment",
      desc: "A thorough 60-minute evaluation conducted in-clinic or in your home, assessing joint range, functional capacity, swallowing safety, or mental health.",
    },
    {
      step: "03",
      title: "SMART Functional Goal Setting",
      desc: "Collaborating with you and your family to establish concrete, realistic milestones—whether climbing stairs, speaking clearly, or self-bathing.",
    },
    {
      step: "04",
      title: "Evidence-Based Treatment & Review",
      desc: "Structured one-on-one therapy sessions with continuous outcome measurement and formal progress updates for your GP and care team.",
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
              <span className="text-[#1D3557]">Access, Funding &amp; Delivery Models</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D3557] tracking-tight leading-tight">
              Clinical Pathways &amp; Flexible Funding Options
            </h2>
            <p className="text-[16px] text-[#457B9D] mt-2 max-w-2xl leading-relaxed">
              Whether self-funding, utilizing Local Authority Direct Payments, or funded under NHS Continuing Healthcare, our service integrates seamlessly with your broader care network.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation?.("therapy")}
            className="inline-flex items-center justify-center h-12 px-7 bg-[#2A9D8F] hover:bg-[#21867A] text-white font-semibold text-[14px] rounded-full transition-all shadow-xs shrink-0 cursor-pointer active:scale-95"
          >
            <span>Consult Clinical Team</span>
            <span className="material-symbols-outlined text-[18px] ml-2">arrow_forward</span>
          </button>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#94D2BD] shadow-xs flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E8F6F3] border border-[#94D2BD] flex items-center justify-center text-[#2A9D8F] mb-5 shadow-2xs">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <h3 className="text-[17px] font-semibold text-[#1D3557] leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#457B9D] mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-semibold text-[#2A9D8F]">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Step-by-Step Clinical Delivery Journey */}
        <div className="p-2 rounded-[2rem] bg-white border border-[#E2E8F0] shadow-sm">
          <div className="p-6 md:p-10 rounded-[calc(2rem-0.5rem)] bg-[#F8FAFC] border border-[#E2E8F0]">
            <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2A9D8F] block mb-2">
                Care Journey
              </span>
              <h3 className="text-2xl font-semibold text-[#1D3557] tracking-tight">
                Our 4-Stage Rehabilitation Process
              </h3>
              <p className="text-[14px] text-[#457B9D] mt-2">
                Transparent clinical milestones designed to rebuild physical autonomy and personal dignity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {journeySteps.map((step) => (
                <div key={step.step} className="flex flex-col p-5 bg-white rounded-xl border border-[#E2E8F0]">
                  <span className="text-[28px] font-mono font-bold text-[#2A9D8F] mb-2 leading-none">
                    {step.step}
                  </span>
                  <h4 className="text-[15px] font-semibold text-[#1D3557] mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-[12px] text-[#457B9D] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Reassurance Footer */}
            <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#457B9D]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2A9D8F] text-[20px]">check_circle</span>
                <span>
                  <strong>Interdisciplinary Team Meetings (MDT):</strong> Our physiotherapists, OTs, speech therapists, and psychologists coordinate closely to prevent treatment conflicts.
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#1D3557] font-semibold bg-white px-3 py-1 rounded-full border border-[#E2E8F0] shrink-0">
                Protocol OC-THRP-2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
