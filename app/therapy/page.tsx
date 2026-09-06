"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import ConsultationModal from "@/components/common/ConsultationModal";

export default function TherapyPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeDiscipline, setActiveDiscipline] = useState<number>(0);

  const disciplines = [
    {
      id: "physiotherapy",
      title: "Physiotherapy & Physical Rehabilitation",
      subtitle: "Musculoskeletal, Neurological & Post-Operative Recovery",
      icon: "fitness_center",
      badge: "HCPC & CSP Registered",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
      description:
        "Specialist physiotherapists utilize evidence-based manual therapy, joint mobilization, electrotherapy, and customized exercise rehabilitation to relieve chronic pain, restore gait, and recover mobility after orthopedic surgery or neurological events.",
      provisions: [
        "Post-operative joint replacement & spinal rehabilitation protocols",
        "Stroke and neurological gait re-education and balance therapy",
        "Targeted musculoskeletal pain management (neck, back, sciatica, arthritis)",
        "Home visit physiotherapy for clients with limited mobility",
      ],
      suitableFor: "Patients recovering from surgery, stroke, injury, or living with chronic joint conditions.",
      governingBody: "Chartered Society of Physiotherapy (CSP)",
    },
    {
      id: "occupational-therapy",
      title: "Occupational Therapy (OT)",
      subtitle: "Restoring Autonomy, Daily Living Skills & Environmental Adaptations",
      icon: "accessibility",
      badge: "Royal College of OT (RCOT)",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
      description:
        "Empowering individuals to overcome physical and cognitive barriers in their everyday lives. Our Occupational Therapists assess home ergonomics, prescribe specialized assistive equipment, and implement functional training to restore daily independence.",
      provisions: [
        "Activities of Daily Living (ADL) retraining: cooking, dressing & washing",
        "Comprehensive home safety audits, stairlift & bathroom adaptation planning",
        "Fine motor coordination, hand therapy & cognitive rehabilitation",
        "Sensory integration and positive risk assessment for neurodiverse adults",
      ],
      suitableFor: "Individuals seeking maximum self-reliance at home following injury, illness, or aging.",
      governingBody: "Royal College of Occupational Therapists (RCOT)",
    },
    {
      id: "speech-language",
      title: "Speech & Language Therapy (SLT)",
      subtitle: "Dysphagia Swallowing Assessments, Communication & Voice Rehabilitation",
      icon: "record_voice_over",
      badge: "RCSLT Certified",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
      description:
        "Comprehensive diagnosis and intervention for adults and children experiencing speech impairment, language processing difficulties, or dysphagia (swallowing disorders). We ensure dignified, safe nutrition and effective communication.",
      provisions: [
        "Clinical bedside dysphagia and swallowing risk evaluations",
        "Post-stroke aphasia, dysarthria & apraxia speech re-training",
        "Voice disorder therapy for vocal cord pathology and muscle tension",
        "Alternative and Augmentative Communication (AAC) device setup",
      ],
      suitableFor: "Stroke survivors, Parkinson's/dementia clients, and patients with speech or swallowing difficulties.",
      governingBody: "Royal College of Speech and Language Therapists (RCSLT)",
    },
    {
      id: "psychotherapy",
      title: "Clinical Psychotherapy & Mental Health",
      subtitle: "Evidence-Based Psychological Support & Cognitive Resilience",
      icon: "psychology",
      badge: "BACP & UKCP Registered",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1000&q=80",
      description:
        "Confidential, compassionate psychotherapy addressing depression, anxiety disorders, medical trauma, chronic illness adjustment, and life transitions. Our clinicians utilize Cognitive Behavioural Therapy (CBT), psychodynamic therapy, and mindfulness techniques.",
      provisions: [
        "Targeted Cognitive Behavioural Therapy (CBT) for anxiety & panic",
        "Trauma, PTSD & post-medical procedure adjustment support",
        "Carer burnout and family coping strategies for degenerative illnesses",
        "Bespoke 1:1 sessions delivered in-clinic or via secure telehealth",
      ],
      suitableFor: "Anyone navigating emotional distress, life changes, trauma, or managing long-term health burdens.",
      governingBody: "British Association for Counselling & Psychotherapy (BACP)",
    },
  ];

  const current = disciplines[activeDiscipline];

  return (
    <>
      <Header onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main className="w-full pt-28 bg-[#F7F4EC] min-h-screen text-[#211E1A]">
        {/* Department Hero */}
        <section className="w-full bg-[#F7F4EC] py-14 md:py-20 border-b border-[#DDD3BF]">
          <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
            {/* Back Button */}
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6B6457] hover:text-[#211E1A] transition-colors py-1 px-2.5 rounded bg-white border border-[#DDD3BF]"
              >
                <span className="material-symbols-outlined text-[16px] text-[#A85D3D]">arrow_back</span>
                <span>Back to Main Home Page (OptimizedCare)</span>
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E9C9AC]/40 text-[#8A4530] text-[11px] font-semibold uppercase tracking-widest border border-[#A85D3D]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8A4530]"></span>
                  Division 04 • Therapeutic &amp; Rehabilitation Services
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#211E1A] tracking-tight leading-[1.15]">
                  Specialist Clinical Therapy &amp; Rehabilitation
                </h1>
                <p className="text-[17px] text-[#5A5347] leading-relaxed">
                  Inspired by Phoenix Gold Care clinical frameworks, our multidisciplinary therapy division delivers coordinated Physiotherapy, Occupational Therapy, Speech &amp; Language Therapy, and Psychotherapy across London and the UK.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setIsConsultationOpen(true)}
                    className="h-11 px-6 bg-[#211E1A] text-white font-medium text-[14px] rounded-[4px] border border-[#A85D3D] hover:bg-[#3A342B] transition-colors shadow-sm cursor-pointer"
                  >
                    Arrange Therapy Assessment
                  </button>
                  <a
                    href="tel:03331234567"
                    className="h-11 px-5 bg-white border border-[#DDD3BF] text-[#211E1A] font-semibold text-[14px] rounded-[4px] flex items-center gap-2 hover:bg-[#EFEAE0] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[#A85D3D] text-[18px]">call</span>
                    <span>0333 123 4567</span>
                  </a>
                </div>
              </div>

              <div className="flex-1 w-full max-w-lg lg:max-w-none">
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#DDD3BF]">
                  <img
                    alt="Multidisciplinary clinical rehabilitation and physiotherapy"
                    className="w-full aspect-[4/3] object-cover"
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-lg border border-[#DDD3BF] shadow-sm flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8A4530]">
                        Regulatory Certification
                      </p>
                      <p className="text-[14px] font-semibold text-[#211E1A]">
                        HCPC Registered • CSP, RCOT &amp; RCSLT Certified
                      </p>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-[#1E3A2F]"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Disciplines Interactive Showcase */}
        <section className="w-full py-16 md:py-24 bg-white border-b border-[#DDD3BF]">
          <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[11px] font-semibold text-[#8A4530] uppercase tracking-widest">
                Our Multidisciplinary Clinical Spectrum
              </span>
              <h2 className="font-serif text-3xl font-semibold text-[#211E1A] tracking-tight mt-2">
                Four Pillars of Restorative Healthcare
              </h2>
              <p className="text-[16px] text-[#5A5347] mt-3">
                Coordinated rehabilitation designed to restore functional movement, independence, clear speech, and mental resilience.
              </p>
            </div>

            {/* Discipline Selector Tabs */}
            <div className="flex items-center justify-center gap-3 overflow-x-auto pb-4 scrollbar-none mb-10">
              {disciplines.map((d, idx) => (
                <button
                  key={d.id}
                  onClick={() => setActiveDiscipline(idx)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-[4px] text-[13px] font-medium whitespace-nowrap transition-all cursor-pointer border ${
                    activeDiscipline === idx
                      ? "bg-[#211E1A] text-white border-[#211E1A] shadow-sm"
                      : "bg-[#F7F4EC] text-[#5A5347] border-[#DDD3BF] hover:bg-white"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px] text-[#A85D3D]">
                    {d.icon}
                  </span>
                  <span>{d.title.split(" & ")[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Discipline Card */}
            <div className="bg-[#F7F4EC] rounded-xl border border-[#DDD3BF] p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <div className="relative rounded-lg overflow-hidden border border-[#DDD3BF] shadow-md group">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211E1A]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#A85D3D] text-[#211E1A] text-[11px] font-bold uppercase tracking-wider mb-1">
                      {current.badge}
                    </span>
                    <p className="text-[13px] text-white/90 font-medium">
                      Governed by {current.governingBody}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-[12px] font-semibold text-[#8A4530] uppercase tracking-wider">
                    {current.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#211E1A] tracking-tight mt-1">
                    {current.title}
                  </h3>
                  <p className="text-[15px] text-[#5A5347] mt-2 leading-relaxed">
                    {current.description}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-[#DDD3BF]">
                  <p className="text-[12px] font-semibold text-[#211E1A] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#8A4530]">verified</span>
                    Clinical Interventions &amp; Treatments
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[13px] text-[#5A5347]">
                    {current.provisions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[15px] text-[#2D5A46] flex-shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[#DDD3BF]">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6B6457] block">Suited For</span>
                    <p className="text-[13px] font-medium text-[#211E1A]">{current.suitableFor}</p>
                  </div>
                  <button
                    onClick={() => setIsConsultationOpen(true)}
                    className="h-10 px-5 bg-[#211E1A] text-white font-medium text-[13px] rounded-[4px] border border-[#A85D3D] hover:bg-[#3A342B] transition-colors shadow-sm flex items-center gap-2 flex-shrink-0 cursor-pointer"
                  >
                    <span>Request Assessment</span>
                    <span className="material-symbols-outlined text-[16px] text-[#A85D3D]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Pathway & Funding Options */}
        <section className="w-full py-16 bg-[#F7F4EC] border-b border-[#DDD3BF]">
          <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg border border-[#DDD3BF] shadow-sm">
                <div className="w-10 h-10 rounded bg-[#E9C9AC]/40 text-[#8A4530] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[20px]">home_health</span>
                </div>
                <h4 className="text-[16px] font-semibold text-[#211E1A]">In-Clinic &amp; Domiciliary</h4>
                <p className="text-[13px] text-[#5A5347] mt-2 leading-relaxed">
                  Appointments available at our private clinic suites or delivered in the comfort and privacy of your home across London and the UK.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-[#DDD3BF] shadow-sm">
                <div className="w-10 h-10 rounded bg-[#E9C9AC]/40 text-[#8A4530] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                </div>
                <h4 className="text-[16px] font-semibold text-[#211E1A]">Funding &amp; Direct Payments</h4>
                <p className="text-[13px] text-[#5A5347] mt-2 leading-relaxed">
                  We accept Local Authority Direct Payments, NHS Continuing Healthcare (CHC) personal budgets, private medical insurance, and self-pay.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-[#DDD3BF] shadow-sm">
                <div className="w-10 h-10 rounded bg-[#E9C9AC]/40 text-[#8A4530] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[20px]">clinical_notes</span>
                </div>
                <h4 className="text-[16px] font-semibold text-[#211E1A]">Multidisciplinary Reports</h4>
                <p className="text-[13px] text-[#5A5347] mt-2 leading-relaxed">
                  Comprehensive assessment documentation provided within 48 hours for GP liaison, case managers, and social services.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultDepartment="therapy"
      />
    </>
  );
}
