"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import ConsultationModal from "@/components/common/ConsultationModal";
import CareOverviewSection from "@/components/divisions/CareOverviewSection";
import AestheticsOverviewSection from "@/components/divisions/AestheticsOverviewSection";
import SurgeryOverviewSection from "@/components/divisions/SurgeryOverviewSection";
import TherapyOverviewSection from "@/components/divisions/TherapyOverviewSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"aesthetics" | "surgery" | "care">("aesthetics");
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationDept, setConsultationDept] = useState("surgery");

  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const openConsultation = (dept: string = "surgery") => {
    setConsultationDept(dept);
    setIsConsultationOpen(true);
  };

  const slides = [
    {
      id: "trust",
      divisionNumber: "Flagship Umbrella",
      navTitle: "OptimizedCare Group",
      badge: "The Sovereign Clinical Trust • London & UK",
      title: "World-Class British Medicine & Dedicated Personal Care",
      description:
        "Uniting pioneer surgical precision, doctor-led aesthetic science, and dignified private residential nursing under sovereign clinical governance at OptimizedCare.org.uk.",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
      highlights: [
        "Care Quality Commission (CQC) Rated “Outstanding”",
        "GMC Specialist Governance Across All Divisions",
        "Central London Enclaves: Marylebone & Belgravia",
      ],
      primaryCta: {
        label: "Book Priority Consultation",
        action: () => openConsultation("surgery"),
      },
      secondaryCta: {
        label: "Explore Treatments",
        href: "#treatments",
      },
    },
    {
      id: "care",
      divisionNumber: "Division 01",
      navTitle: "Supported Care",
      badge: "Residential, Domiciliary & Complex Nursing",
      title: "Dignified In-Home Care & Supported Living Services",
      description:
        "Bespoke, compassionate residential, supported living, and private nursing care tailored to foster independence with dignity. 24/7 live-in carers and dementia specialists.",
      image:
        "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1600&q=80",
      highlights: [
        "24/7 Dedicated Live-in Care & Waking Nights",
        "Specialist Dementia, Stroke & Complex Needs",
        "Direct Local Authority & Family Referral Intake",
      ],
      primaryCta: {
        label: "Explore Care Services",
        href: "/care",
      },
      secondaryCta: {
        label: "Arrange Care Assessment",
        action: () => openConsultation("care"),
      },
    },
    {
      id: "aesthetics",
      divisionNumber: "Division 02",
      navTitle: "Advanced Aesthetics",
      badge: "Doctor-Led Clinical Dermatology",
      title: "Doctor-Led Non-Surgical Rejuvenation & Skin Science",
      description:
        "Physician-administered anti-wrinkle injectables, subtle hyaluronic dermal contouring, Profhilo biostimulators, and Morpheus8 RF subdermal remodeling at private Harley Street suites.",
      image:
        "https://images.unsplash.com/photo-1512290900672-1f41d9a26370?auto=format&fit=crop&w=1600&q=80",
      highlights: [
        "Strictly GMC & NMC Doctor-Led Consultations",
        "Profhilo, Polynucleotides & Natural Contouring",
        "Morpheus8 RF & Fractional Laser Resurfacing",
      ],
      primaryCta: {
        label: "Explore Aesthetics Clinic",
        href: "/aesthetics",
      },
      secondaryCta: {
        label: "Book Aesthetic Consultation",
        action: () => openConsultation("aesthetics"),
      },
    },
    {
      id: "surgery",
      divisionNumber: "Division 03",
      navTitle: "Cosmetic Surgery",
      badge: "Pioneer Surgical Theatres • GMC Registered",
      title: "Consultant Cosmetic & Reconstructive Surgical Distinction",
      description:
        "Pioneering surgical excellence delivered by GMC-specialist registered British surgeons. Breast augmentation, preservation rhinoplasty, and high-definition VASER liposuction with 0% finance.",
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1600&q=80",
      highlights: [
        "100% BAAPS & BAPRAS Consultant Surgeons",
        "0% APR Chrysalis Medical Finance (12 Months)",
        "Ultra-Clean CQC-Registered Hospital Theatres",
      ],
      primaryCta: {
        label: "Explore Cosmetic Surgery",
        href: "/surgery",
      },
      secondaryCta: {
        label: "Calculate 0% Finance Plans",
        href: "/surgery#finance",
      },
    },
    {
      id: "therapy",
      divisionNumber: "Division 04",
      navTitle: "Therapeutic Services",
      badge: "HCPC & CSP Multidisciplinary Rehabilitation",
      title: "Restorative Physiotherapy, Speech & Clinical Therapy",
      description:
        "Empowering physical autonomy, cognitive communication, and mental health resilience through specialist occupational therapy, chartered physiotherapy, and clinical psychotherapy.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
      highlights: [
        "HCPC, CSP, RCOT & RCSLT Registered Clinicians",
        "In-Clinic Suites & Direct Home Visit Therapy",
        "Direct Payments & NHS Continuing Healthcare",
      ],
      primaryCta: {
        label: "Explore Therapeutic Services",
        href: "/therapy",
      },
      secondaryCta: {
        label: "Book Therapy Assessment",
        action: () => openConsultation("therapy"),
      },
    },
  ];

  const SLIDE_DURATION = 6500; // 6.5s auto-rotation

  // Auto-play timer with progress bar
  useEffect(() => {
    if (isPaused) return;

    const interval = 50;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % slides.length);
          return 0;
        }
        return prev + (interval / SLIDE_DURATION) * 100;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, currentSlide, slides.length]);

  const handleSelectSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((curr) => (curr - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSlide((curr) => (curr + 1) % slides.length);
    setProgress(0);
  };

  const activeSlideData = slides[currentSlide];

  return (
    <>
      {/* Global Persistent Universal Header */}
      <Header onOpenConsultation={() => openConsultation("surgery")} />

      {/* Main Page Container */}
      <main className="w-full pt-28 bg-[#f8f9ff] min-h-screen text-[#0b1c30]">
        <div className="flex flex-col w-full">
          {/* ========================================================================= */}
          {/* INTERACTIVE HERO CAROUSEL: 4 SECTIONS / DIVISIONS IN COMMON               */}
          {/* ========================================================================= */}
          <section
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative w-full bg-[#0A192F] text-white overflow-hidden border-b border-[#C5A880]/30"
          >
            {/* Cinematic Background Images with Cross-Fade */}
            <div className="absolute inset-0 z-0">
              {slides.map((s, idx) => (
                <div
                  key={s.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    currentSlide === idx ? "opacity-35 scale-105" : "opacity-0 scale-100"
                  } transform transition-transform duration-[7000ms]`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}
              {/* Sovereign Navy Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/90 to-[#0A192F]/65 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent z-10" />
            </div>

            {/* Main Carousel Hero Content */}
            <div className="relative z-20 max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12 pt-12 md:pt-16 pb-10 min-h-[560px] md:min-h-[620px] flex flex-col justify-between">
              {/* Top Row: Division Counter & Pause Indicator */}
              <div className="flex items-center justify-between gap-4 pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C5A880]/40 text-[#fedeb2] text-[11px] font-semibold uppercase tracking-widest backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-ping" />
                  <span>{activeSlideData.badge}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-300 font-mono">
                    <span className="text-[#fedeb2] font-semibold">0{currentSlide + 1}</span>
                    <span className="text-slate-500">/</span>
                    <span>04</span>
                  </div>
                  {/* Arrow Buttons */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handlePrev}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A880] hover:text-[#0A192F] text-white flex items-center justify-center border border-white/20 hover:border-[#C5A880] active:scale-95 transition-all cursor-pointer shadow-xs"
                      aria-label="Previous Slide"
                    >
                      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A880] hover:text-[#0A192F] text-white flex items-center justify-center border border-white/20 hover:border-[#C5A880] active:scale-95 transition-all cursor-pointer shadow-xs"
                      aria-label="Next Slide"
                    >
                      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Slide Main Content (Text + Highlights) */}
              <div className="max-w-[880px] my-auto py-4">
                <div className="inline-block text-[#C5A880] font-semibold text-[12px] uppercase tracking-widest mb-3">
                  {activeSlideData.divisionNumber}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-white tracking-tight leading-[1.12] mb-5 text-balance transition-all duration-500">
                  {activeSlideData.title}
                </h1>
                <p className="text-[16px] md:text-[18px] text-slate-200 leading-relaxed mb-6 max-w-[720px]">
                  {activeSlideData.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 mb-8 text-[13px] text-[#fedeb2] font-medium">
                  {activeSlideData.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#C5A880] text-[17px]">
                        check_circle
                      </span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Slide Action CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  {activeSlideData.primaryCta.href ? (
                    <Link
                      href={activeSlideData.primaryCta.href}
                      className="inline-flex items-center justify-center h-12 px-7 bg-[#fedeb2] text-[#0A192F] font-semibold text-[14px] rounded-[4px] hover:bg-[#e0c298] active:scale-[0.985] transition-all shadow-lg cursor-pointer"
                    >
                      <span>{activeSlideData.primaryCta.label}</span>
                      <span className="material-symbols-outlined text-[18px] ml-1.5">
                        arrow_forward
                      </span>
                    </Link>
                  ) : (
                    <button
                      onClick={activeSlideData.primaryCta.action}
                      className="inline-flex items-center justify-center h-12 px-7 bg-[#fedeb2] text-[#0A192F] font-semibold text-[14px] rounded-[4px] hover:bg-[#e0c298] active:scale-[0.985] transition-all shadow-lg cursor-pointer"
                    >
                      <span>{activeSlideData.primaryCta.label}</span>
                      <span className="material-symbols-outlined text-[18px] ml-1.5">
                        arrow_forward
                      </span>
                    </button>
                  )}

                  {activeSlideData.secondaryCta.href ? (
                    <Link
                      href={activeSlideData.secondaryCta.href}
                      className="inline-flex items-center justify-center h-12 px-6 bg-white/10 hover:bg-white/20 text-white font-medium text-[14px] rounded-[4px] border border-white/30 active:scale-[0.985] transition-all cursor-pointer"
                    >
                      <span>{activeSlideData.secondaryCta.label}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={activeSlideData.secondaryCta.action}
                      className="inline-flex items-center justify-center h-12 px-6 bg-white/10 hover:bg-white/20 text-white font-medium text-[14px] rounded-[4px] border border-white/30 active:scale-[0.985] transition-all cursor-pointer"
                    >
                      <span>{activeSlideData.secondaryCta.label}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Sleek Minimal Carousel Indicators (No Clunky Boxes) */}
              <div className="pt-8 flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-2">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => handleSelectSlide(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        currentSlide === idx
                          ? "w-10 bg-[#C5A880]"
                          : "w-3 bg-white/25 hover:bg-white/50"
                      }`}
                      aria-label={`Go to slide ${idx + 1}: ${s.navTitle}`}
                    />
                  ))}
                </div>

                <div className="text-[12px] text-slate-300 font-mono tracking-wider flex items-center gap-2">
                  <span className="text-[#fedeb2] font-semibold">0{currentSlide + 1}</span>
                  <span className="text-slate-500">/</span>
                  <span>04</span>
                  <span className="text-slate-400 hidden sm:inline ml-2 text-[11px] font-sans">
                    • {activeSlideData.navTitle}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* FULL-WIDTH SOVEREIGN TRUST BANNER                                         */}
          {/* ========================================================================= */}
          <section className="w-full bg-[#fedeb2]/30 py-10 border-b border-[#E2E8F0]">
            <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
              {/* Primary 3 Trust Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-8 border-b border-[#E2E8F0]/80">
                {/* Trust Pillar 1: CQC Outstanding */}
                <div className="flex items-center gap-4 p-5 bg-white/95 backdrop-blur-sm rounded-lg luxury-shadow-sm hover:luxury-shadow-md hover:-translate-y-0.5 border border-[#E2E8F0] hover:border-[#C5A880]/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-[#0A192F] flex items-center justify-center text-[#C5A880] shrink-0">
                    <span className="material-symbols-outlined text-2xl">verified_user</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-[#725b38] uppercase tracking-wider">
                        Independent Audit
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#0A192F]"></span>
                      <span className="text-[11px] font-semibold text-[#0A192F]">2024 / 2025</span>
                    </div>
                    <span className="text-[18px] text-[#0A192F] font-semibold tracking-tight leading-snug">
                      CQC Rated “Outstanding”
                    </span>
                    <span className="text-[12px] text-[#44474D]">
                      Excellence in patient safety, clinical care, and responsiveness.
                    </span>
                  </div>
                </div>

                {/* Trust Pillar 2: GMC Specialist Register */}
                <div className="flex items-center gap-4 p-5 bg-white/95 backdrop-blur-sm rounded-lg luxury-shadow-sm hover:luxury-shadow-md hover:-translate-y-0.5 border border-[#E2E8F0] hover:border-[#C5A880]/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-[#0A192F] flex items-center justify-center text-[#C5A880] shrink-0">
                    <span className="material-symbols-outlined text-2xl">workspace_premium</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-[#725b38] uppercase tracking-wider">
                        Clinical Governance
                      </span>
                    </div>
                    <span className="text-[18px] text-[#0A192F] font-semibold tracking-tight leading-snug">
                      GMC Specialist Register
                    </span>
                    <span className="text-[12px] text-[#44474D]">
                      100% of surgical consultants hold substantive NHS credentials.
                    </span>
                  </div>
                </div>

                {/* Trust Pillar 3: Over 10,000 Patients & Reviews */}
                <div className="flex items-center gap-4 p-5 bg-white/95 backdrop-blur-sm rounded-lg luxury-shadow-sm hover:luxury-shadow-md hover:-translate-y-0.5 border border-[#E2E8F0] hover:border-[#C5A880]/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-[#0A192F] flex items-center justify-center text-[#C5A880] shrink-0">
                    <span className="material-symbols-outlined text-2xl">stars</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 text-[#725b38] mb-0.5">
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="text-[12px] text-[#0A192F] font-semibold ml-1 tnum">4.98 / 5.0</span>
                    </div>
                    <span className="text-[18px] text-[#0A192F] font-semibold tracking-tight leading-snug">
                      Over 10,000 Happy Patients
                    </span>
                    <span className="text-[12px] text-[#44474D]">
                      Verified clinical outcomes, family care reviews, and discretion.
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary Trust Strip */}
              <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[#44474D] text-[13px] font-medium">
                  <span className="material-symbols-outlined text-[#725b38] text-base">location_on</span>
                  <span>Harley Street &amp; Belgravia Enclaves</span>
                </div>
                <div className="flex items-center gap-2 text-[#44474D] text-[13px] font-medium">
                  <span className="material-symbols-outlined text-[#725b38] text-base">security</span>
                  <span>Strict Clinical &amp; GDPR Governance</span>
                </div>
                <div className="flex items-center gap-2 text-[#44474D] text-[13px] font-medium">
                  <span className="material-symbols-outlined text-[#725b38] text-base">health_and_safety</span>
                  <span>BUPA, AXA Health &amp; Aviva Approved</span>
                </div>
                <div className="flex items-center gap-2 text-[#44474D] text-[13px] font-medium">
                  <span className="material-symbols-outlined text-[#725b38] text-base">lock</span>
                  <span>End-to-End Patient Discretion</span>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* THREE SEPARATE CLINICAL DIVISIONS (CONCISE DETAILS & DEDICATED PAGE LINK) */}
          {/* ========================================================================= */}
          <div id="divisions" className="w-full">
            {/* Division 01: Care Section */}
            <CareOverviewSection onOpenConsultation={openConsultation} />

            {/* Division 02: Aesthetics Section */}
            <AestheticsOverviewSection onOpenConsultation={openConsultation} />

            {/* Division 03: Surgery Section */}
            <SurgeryOverviewSection onOpenConsultation={openConsultation} />

            {/* Division 04: Therapeutic & Rehabilitation Section */}
            <TherapyOverviewSection onOpenConsultation={openConsultation} />
          </div>

          {/* ========================================================================= */}
          {/* PATIENT STORIES & REVIEWS SECTION                                         */}
          {/* ========================================================================= */}
          <section className="w-full bg-[#eff4ff]/60 py-16 md:py-24 border-b border-[#E2E8F0]">
            <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
              <div className="flex flex-col items-center text-center max-w-[820px] mx-auto mb-12">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#e5eeff] text-[#725b38] text-[11px] font-semibold uppercase tracking-widest mb-3 border border-[#C5A880]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
                  Patient Outcomes &amp; Family Voices
                </div>
                <h2 className="font-headline-xl text-3xl md:text-[38px] text-[#0A192F] font-semibold tracking-tight mb-3">
                  Stories of Discretion, Care &amp; Transformation
                </h2>
                <p className="text-[17px] text-[#44474D] max-w-[680px] leading-relaxed">
                  Reflecting our unwavering commitment to surgical distinction, clinical empathy, and exemplary patient outcomes.
                </p>
              </div>

              {/* 3 Patient Review Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {/* Card 1: Cosmetic Surgery */}
                <div className="flex flex-col justify-between p-6 bg-white rounded-lg border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-0.5 text-[#725b38]">
                        <span className="material-symbols-outlined text-base">star</span>
                        <span className="material-symbols-outlined text-base">star</span>
                        <span className="material-symbols-outlined text-base">star</span>
                        <span className="material-symbols-outlined text-base">star</span>
                        <span className="material-symbols-outlined text-base">star</span>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#fedeb2]/40 text-[#725b38] text-[11px] font-semibold uppercase tracking-wider">
                        <span className="material-symbols-outlined text-[14px]">verified</span>
                        Verified Patient
                      </span>
                    </div>
                    <p className="text-[15px] text-[#0A192F] leading-relaxed mb-6 italic">
                      “My rhinoplasty results changed my life. From initial 3D surgical simulation to post-operative recovery in Mayfair, the surgical theatre team delivered complete aesthetic perfection with absolute discretion.”
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-1">
                    <span className="text-[16px] text-[#0A192F] font-semibold tracking-tight">
                      Lady Charlotte H.
                    </span>
                    <span className="text-[11px] text-[#725b38] uppercase font-semibold tracking-wider">
                      Preservation Rhinoplasty • Harley Street Suite
                    </span>
                  </div>
                </div>

                {/* Card 2: Care Services */}
                <div className="flex flex-col justify-between p-6 bg-white rounded-lg border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-0.5 text-[#725b38]">
                        <span className="material-symbols-outlined text-base">star</span>
                        <span className="material-symbols-outlined text-base">star</span>
                        <span className="material-symbols-outlined text-base">star</span>
                        <span className="material-symbols-outlined text-base">star</span>
                        <span className="material-symbols-outlined text-base">star</span>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#fedeb2]/40 text-[#725b38] text-[11px] font-semibold uppercase tracking-wider">
                        <span className="material-symbols-outlined text-[14px]">verified</span>
                        Family Advocate
                      </span>
                    </div>
                    <p className="text-[15px] text-[#0A192F] leading-relaxed mb-6 italic">
                      “The care team was exceptional in supporting my father's transition into bespoke private residential nursing. Dignified, warm, and constantly communicative—our family felt supported every single day.”
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-1">
                    <span className="text-[16px] text-[#0A192F] font-semibold tracking-tight">
                      Alexander M., KC
                    </span>
                    <span className="text-[11px] text-[#725b38] uppercase font-semibold tracking-wider">
                      Full-Time Domiciliary &amp; Nursing Care • Belgravia
                    </span>
                  </div>
                </div>

                {/* Card 3: Advanced Aesthetics */}
                <div className="flex flex-col justify-between p-6 bg-white rounded-lg border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-0.5 text-[#725b38]">
                        <span className="material-symbols-outlined text-base">star</span>
                        <span className="material-symbols-outlined text-base">star</span>
                        <span className="material-symbols-outlined text-base">star</span>
                        <span className="material-symbols-outlined text-base">star</span>
                        <span className="material-symbols-outlined text-base">star</span>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#fedeb2]/40 text-[#725b38] text-[11px] font-semibold uppercase tracking-wider">
                        <span className="material-symbols-outlined text-[14px]">verified</span>
                        Verified Patient
                      </span>
                    </div>
                    <p className="text-[15px] text-[#0A192F] leading-relaxed mb-6 italic">
                      “Doctor-led aesthetics at its highest standard. The bespoke laser resurfacing and subtle hyaluronic contouring left my skin luminous without ever looking overdone. I wouldn't trust anyone else.”
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-1">
                    <span className="text-[16px] text-[#0A192F] font-semibold tracking-tight">
                      Elena V.
                    </span>
                    <span className="text-[11px] text-[#725b38] uppercase font-semibold tracking-wider">
                      Fractional Laser &amp; Subtle Dermal Contouring
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* PRIVATE CLINICAL CONCIERGE & APPOINTMENT BOOKING SECTION                 */}
          {/* ========================================================================= */}
          <section className="w-full bg-[#0A192F] py-16 md:py-20 text-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#C5A880] via-transparent to-transparent"></div>
            <div className="relative max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-[#C5A880]/30 text-[#fedeb2] text-[11px] font-semibold uppercase tracking-widest mb-4 backdrop-blur">
                <span className="material-symbols-outlined text-[16px] text-[#fedeb2]">medical_services</span>
                Confidential Clinical Concierge
              </div>
              <h2 className="font-headline-xl text-3xl md:text-[40px] font-semibold tracking-tight mb-3 text-balance">
                Arrange Your Priority Consultation Across Our{" "}
                <span className="text-[#fedeb2]">London Enclaves</span>
              </h2>
              <p className="text-[17px] text-slate-300 max-w-[680px] mx-auto leading-relaxed mb-8">
                Whether seeking comprehensive domiciliary care support, doctor-led aesthetic protocols, or consultant cosmetic surgery, our clinical coordinators provide discrete, same-day scheduling.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button
                  onClick={() => openConsultation("surgery")}
                  className="inline-flex items-center justify-center h-12 px-7 bg-[#fedeb2] text-[#0A192F] font-semibold text-[14px] rounded-[4px] hover:bg-[#e0c298] transition-all shadow-md w-full sm:w-auto cursor-pointer"
                >
                  <span>Book Private Consultation</span>
                  <span className="material-symbols-outlined text-[18px] ml-1.5">calendar_month</span>
                </button>
                <a
                  href="tel:03331234567"
                  className="inline-flex items-center justify-center h-12 px-7 border border-[#C5A880]/70 text-white font-medium text-[14px] rounded-[4px] hover:bg-white/10 transition-all w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#C5A880] mr-2">call</span>
                  <span>Direct Line: 0333 123 4567</span>
                </a>
              </div>

              {/* Security & Compliance Strip */}
              <div className="pt-6 border-t border-slate-700/60 flex flex-wrap items-center justify-center gap-8 text-slate-300 text-[11px] font-semibold uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#fedeb2] text-[16px]">
                    shield
                  </span>
                  <span>100% Confidentiality</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-[#fedeb2]/40 hidden sm:inline-block"></span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#fedeb2] text-[16px]">
                    verified_user
                  </span>
                  <span>CQC Regulated Care</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-[#fedeb2]/40 hidden sm:inline-block"></span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#fedeb2] text-[16px]">
                    workspace_premium
                  </span>
                  <span>GMC Consultant Practice</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Global Universal Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultDepartment={consultationDept}
      />
    </>
  );
}
