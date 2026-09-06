"use client";

import React, { useState } from "react";

interface TherapyConditionTriageProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function TherapyConditionTriage({
  onOpenConsultation,
}: TherapyConditionTriageProps) {
  const [selectedCondition, setSelectedCondition] = useState<number>(0);

  const conditions = [
    {
      id: "post-op-joint",
      title: "Post-Op Joint & Spine",
      subtitle: "Hip, Knee & Spinal Arthroplasty",
      icon: "personal_injury",
      recommendedProtocol: "Targeted Orthopedic & Spinal Physiotherapy",
      clinicalRationale:
        "Structured early mobilization protocols restore physiological range of motion, strengthen stabilizing peri-articular musculature, prevent deep scar tissue contractures, and restore normal reciprocal gait patterns.",
      provisions: [
        "Post-operative protocol adherence for hip, knee, ankle, or shoulder surgeries",
        "Gentle joint passive/active-assisted range of motion restoration",
        "Scar tissue mobilization and swelling management (cryotherapy guidance)",
        "Home visit rehabilitation starting immediately following hospital discharge",
      ],
      expectedResult: "Pain-free functional ambulation and return to independent stair climbing within 6 to 12 weeks.",
      priceGuideline: "Initial Assessment £160 / Follow-up £140",
    },
    {
      id: "stroke-neuro",
      title: "Stroke & Neurological",
      subtitle: "Hemiplegia, Parkinson's & MS",
      icon: "psychology",
      recommendedProtocol: "Neuro-Rehabilitation & Neuroplasticity Re-Education",
      clinicalRationale:
        "Targeted repetitive task-oriented training promotes cortical neuroplasticity. Utilizing Bobath and motor relearning principles, our therapists retrain neural pathways to recover arm reaching, hand grasp, and dynamic balance.",
      provisions: [
        "Bed mobility, sit-to-stand and postural symmetry training",
        "Constraint-induced movement therapy (CIMT) and functional electrical stimulation",
        "Dynamic balance and falls prevention training in real domestic environments",
        "Caregiver handling and transfer coaching for family members",
      ],
      expectedResult: "Enhanced motor control, reduced spasticity, and restored functional transfer safety.",
      priceGuideline: "Comprehensive Neuro Assessment £180 / 60-min Follow-up £150",
    },
    {
      id: "dysphagia-swallow",
      title: "Dysphagia & Swallowing",
      subtitle: "Safe Nutrition & Choking Prevention",
      icon: "record_voice_over",
      recommendedProtocol: "Clinical Bedside Swallowing Diagnostic & SLT",
      clinicalRationale:
        "Comprehensive cranial nerve and oral-pharyngeal examination to prevent silent aspiration pneumonia, determine precise IDDSI fluid and food texture levels, and strengthen pharyngeal squeeze muscles.",
      provisions: [
        "Bedside swallow evaluation with cervical auscultation observation",
        "IDDSI standardized diet and thickened fluid recommendation plan",
        "Swallowing maneuvering exercises (Mendelsohn, effortful swallow, Masako)",
        "Immediate clinical written report for GP and dietary catering staff",
      ],
      expectedResult: "Safe, dignified oral nutrition with zero aspiration risk and preserved mealtime enjoyment.",
      priceGuideline: "Dysphagia Diagnostic Assessment £175 / Follow-up £150",
    },
    {
      id: "home-adl",
      title: "Home Autonomy & Falls",
      subtitle: "Daily Living Skills & Ergonomics",
      icon: "accessibility",
      recommendedProtocol: "Specialist Occupational Therapy Home Audit & ADL",
      clinicalRationale:
        "Holistic architectural domestic audit identifying slip, trip, and transfer hazards. Designing bespoke adaptation plans (grab rails, ramps, level-access wet rooms, stairlifts) and retraining daily domestic activities.",
      provisions: [
        "Comprehensive domestic risk assessment (bathroom, bedroom, kitchen, stairs)",
        "Activities of Daily Living (ADL) retraining: personal hygiene, dressing, meal prep",
        "Specialist mobility equipment, wheelchair, and profiling bed prescription",
        "Direct liaison with Local Authority for Disabled Facilities Grants (DFG)",
      ],
      expectedResult: "Complete peace of mind and verified domestic safety, preventing costly hospital readmissions.",
      priceGuideline: "Full Home OT Assessment £220 (includes written formal adaptation report)",
    },
    {
      id: "chronic-pain",
      title: "Chronic Pain & Spine",
      subtitle: "Sciatica, Back Pain & Arthritis",
      icon: "healing",
      recommendedProtocol: "Biomechanical Pain Alleviation & Posture Therapy",
      clinicalRationale:
        "Multi-modal musculoskeletal therapy addressing the root mechanical cause of spinal compression, discogenic nerve irritation, and postural degeneration through manual decompression and core kinetic chain strengthening.",
      provisions: [
        "Spinal mobilization, peripheral nerve flossing, and myofascial trigger release",
        "Ergonomic desk and posture assessment for corporate professionals",
        "Progressive clinical Pilates and spinal stabilization exercise prescriptions",
        "Education on pain neurophysiology and flare-up self-management strategies",
      ],
      expectedResult: "Marked reduction in analgesic dependency, restored spinal flexibility, and restful sleep.",
      priceGuideline: "Initial Biomechanical Assessment £160 / Follow-up £140",
    },
    {
      id: "trauma-mental",
      title: "Trauma & Mental Resilience",
      subtitle: "Anxiety, Burnout & Medical PTSD",
      icon: "self_improvement",
      recommendedProtocol: "Trauma-Informed Psychotherapy & CBT Frameworks",
      clinicalRationale:
        "Structured psychological intervention providing a safe clinical container to process medical trauma, health anxiety, prolonged chronic illness burden, or profound caregiver fatigue.",
      provisions: [
        "Cognitive Behavioural Therapy (CBT) protocols for intrusive worry and panic",
        "Trauma-focused therapy addressing ICU stays or life-altering medical diagnoses",
        "Carer resilience strategies: boundaries, emotional regulation, and grief processing",
        "Flexible delivery via private clinic suites or encrypted medical telehealth",
      ],
      expectedResult: "Renewed emotional equilibrium, reduced physiological hyper-arousal, and coping confidence.",
      priceGuideline: "Initial Intake Consultation £150 / 50-min Weekly Session £130",
    },
  ];

  const current = conditions[selectedCondition];

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
            Personalised Clinical Rehabilitation Finder
          </h2>
          <p className="text-[16px] text-[#457B9D] mt-3 leading-relaxed">
            Select your specific clinical condition or recovery objective to view the recommended multidisciplinary therapy pathway prescribed by our senior HCPC clinicians.
          </p>
        </div>

        {/* Condition Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {conditions.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelectedCondition(idx)}
              className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-2xs ${
                selectedCondition === idx
                  ? "bg-[#1D3557] text-white border-[#1D3557] shadow-sm scale-[1.02]"
                  : "bg-[#F8FAFC] text-[#457B9D] border-[#E2E8F0] hover:border-[#94D2BD] hover:bg-[#E8F6F3]"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 ${
                  selectedCondition === idx
                    ? "bg-[#2A9D8F] text-white"
                    : "bg-white text-[#2A9D8F] border border-[#E2E8F0]"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
              </div>
              <div>
                <span
                  className={`text-[12px] font-semibold block leading-tight ${
                    selectedCondition === idx ? "text-white" : "text-[#1D3557]"
                  }`}
                >
                  {item.title}
                </span>
                <span
                  className={`text-[10px] mt-1 block truncate ${
                    selectedCondition === idx ? "text-white/75" : "text-[#457B9D]"
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
                    Recommended Clinical Pathway
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
                    Included Therapy Modalities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.provisions.map((provision, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]"
                      >
                        <span className="material-symbols-outlined text-[#2A9D8F] text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-[12px] text-[#1D3557] font-medium leading-snug">
                          {provision}
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
                    Expected Functional Milestone
                  </span>
                  <p className="text-[14px] font-semibold text-[#1D3557] leading-relaxed">
                    {current.expectedResult}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#457B9D] block">
                    Fee &amp; Assessment Guideline
                  </span>
                  <div className="text-[18px] font-semibold text-[#2A9D8F] font-mono mt-0.5">
                    {current.priceGuideline}
                  </div>
                  <span className="text-[11px] text-[#457B9D] block mt-1">
                    Eligible for Direct Payments, NHS CHC budgets &amp; private medical insurance.
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => onOpenConsultation?.("therapy")}
                    className="w-full h-12 bg-[#2A9D8F] hover:bg-[#21867A] text-white font-semibold text-[14px] rounded-full transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.985]"
                  >
                    <span>Arrange Assessment for This Condition</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#457B9D]">
                    <span className="material-symbols-outlined text-[15px] text-[#2A9D8F]">lock</span>
                    <span>HCPC Governed • GP Liaison &amp; Medical Reports</span>
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
