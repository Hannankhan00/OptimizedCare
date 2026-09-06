"use client";

import React from "react";

interface CareIntakeJourneyProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function CareIntakeJourney({ onOpenConsultation }: CareIntakeJourneyProps) {
  const steps = [
    {
      step: "01",
      title: "Immediate Clinical Consultation",
      tag: "Day 1",
      description:
        "Speak directly with our Registered Care Manager or Senior Clinical Nurse to discuss diagnosis, medical routines, and immediate support requirements.",
      icon: "phone_in_talk",
      badge: "No Obligation",
    },
    {
      step: "02",
      title: "In-Home Holistic Needs Assessment",
      tag: "Day 1–2",
      description:
        "A senior assessor conducts a comprehensive home assessment evaluating mobility, safety risks, nutritional needs, medication schedules, and family goals.",
      icon: "assignment",
      badge: "CQC Regulated",
    },
    {
      step: "03",
      title: "Carer Matching & Chemistry Meeting",
      tag: "Day 2–3",
      description:
        "We introduce a handpicked, DBS-enhanced carer whose skills and personality align with the individual, ensuring mutual comfort before care commences.",
      icon: "diversity_3",
      badge: "Personality Match",
    },
    {
      step: "04",
      title: "Care Commences & Ongoing Auditing",
      tag: "Continuous",
      description:
        "Care initiates seamlessly with real-time digital care log logging, regular manager spot checks, and proactive weekly reviews with family members.",
      icon: "verified_user",
      badge: "24/7 Support",
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl border border-[#DDD3BF] shadow-sm p-6 md:p-8 lg:p-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#E9C9AC]/40 text-[#8A4530] text-[11px] font-semibold uppercase tracking-wider border border-[#A85D3D]/30 mb-2">
            <span className="material-symbols-outlined text-[14px]">timeline</span>
            Care Component 03 • The Care Intake Pathway
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#211E1A] tracking-tight">
            How Care Begins: Four-Step Clinical Pathway
          </h3>
          <p className="text-[15px] text-[#5A5347] mt-1">
            Streamlined, stress-free care coordination designed to have qualified care in place within 24 to 48 hours when urgent.
          </p>
        </div>

        <button
          onClick={() => onOpenConsultation?.("care")}
          className="h-10 px-5 bg-[#211E1A] text-white font-medium text-[13px] rounded-[4px] border border-[#A85D3D] hover:bg-[#3A342B] transition-colors shadow-sm flex items-center gap-2 flex-shrink-0 cursor-pointer"
        >
          <span>Start Assessment Process</span>
          <span className="material-symbols-outlined text-[16px] text-[#A85D3D]">arrow_forward</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-[#F7F4EC] p-6 rounded-lg border border-[#DDD3BF] flex flex-col justify-between hover:border-[#A85D3D]/60 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-bold text-[#A85D3D]">
                  {item.step}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A4530] bg-white px-2 py-0.5 rounded border border-[#DDD3BF]">
                  {item.tag}
                </span>
              </div>
              <div className="w-10 h-10 rounded-md bg-white border border-[#DDD3BF] flex items-center justify-center text-[#211E1A] mb-3 group-hover:bg-[#211E1A] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              </div>
              <h4 className="text-[16px] font-semibold text-[#211E1A] leading-snug">
                {item.title}
              </h4>
              <p className="text-[13px] text-[#5A5347] mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#DDD3BF] flex items-center justify-between">
              <span className="text-[11px] font-medium text-[#6B6457] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#2D5A46]">check_circle</span>
                {item.badge}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency & Hospital Discharge Ribbon */}
      <div className="mt-8 bg-[#211E1A] text-white p-5 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#A85D3D]/20 border border-[#A85D3D] flex items-center justify-center text-[#A85D3D] flex-shrink-0">
            <span className="material-symbols-outlined text-[22px]">urgent</span>
          </div>
          <div>
            <h5 className="text-[15px] font-semibold text-white">
              Urgent Same-Day or Hospital Discharge Required?
            </h5>
            <p className="text-[13px] text-white/70">
              Our registered nursing intake team can liaise directly with NHS hospital discharge teams today.
            </p>
          </div>
        </div>

        <a
          href="tel:03331234567"
          className="h-10 px-5 bg-white text-[#211E1A] font-semibold text-[13px] rounded-[4px] hover:bg-[#EFEAE0] transition-colors flex items-center gap-2 flex-shrink-0"
        >
          <span className="material-symbols-outlined text-[16px] text-[#8A4530]">call</span>
          <span>Call 0333 123 4567</span>
        </a>
      </div>
    </div>
  );
}
