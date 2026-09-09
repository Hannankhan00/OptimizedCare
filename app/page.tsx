"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import ConsultationModal from "@/components/common/ConsultationModal";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationDept, setConsultationDept] = useState("general");

  const openConsultation = (dept: string = "general") => {
    setConsultationDept(dept);
    setIsConsultationOpen(true);
  };

  const services = [
    {
      id: "care",
      number: "01 / CARE",
      badge: "Care Pathways",
      badgeClass: "bg-primary/10 text-primary",
      glowClass: "bg-primary/10",
      image: "/stitch/service_care.jpg",
      title: "Supported Living",
      description:
        "Compassionate, person-centred support designed to help individuals live with greater independence, confidence and dignity.",
      tags: [
        "24/7 Supported Environments",
        "Personalised Independence Plans",
        "Trained Care Teams",
      ],
      href: "/care",
      ctaText: "Explore Supported Living",
      btnClass:
        "bg-primary text-on-primary hover:bg-[#005a22] shadow-[0_4px_16px_rgba(0,107,41,0.22)] hover:shadow-[0_6px_22px_rgba(0,107,41,0.32)]",
    },
    {
      id: "aesthetics",
      number: "02 / AESTHETICS",
      badge: "Doctor-Led",
      badgeClass: "bg-secondary/10 text-secondary",
      glowClass: "bg-secondary/10",
      image: "/stitch/service_aesthetics.jpg",
      title: "Advanced Aesthetics",
      description:
        "Advanced aesthetic treatments combining clinical expertise, precision and a natural approach to helping you look and feel your best.",
      tags: [
        "Doctor-Led Consultations",
        "Bespoke Facial Rejuvenation",
        "Medical Grade Skincare",
      ],
      href: "/aesthetics",
      ctaText: "Explore Aesthetics",
      btnClass:
        "bg-secondary text-on-secondary hover:bg-[#005280] shadow-[0_4px_16px_rgba(0,99,154,0.22)] hover:shadow-[0_6px_22px_rgba(0,99,154,0.32)]",
    },
    {
      id: "surgery",
      number: "03 / SURGERY",
      badge: "Consultant Surgeons",
      badgeClass: "bg-surface-container-high text-on-surface",
      glowClass: "bg-secondary-container/10",
      image: "/stitch/service_surgery.jpg",
      title: "Cosmetic Surgeries",
      description:
        "Thoughtfully delivered cosmetic procedures focused on safety, precision, confidence and naturally refined results.",
      tags: [
        "Consultant Plastic Surgeons",
        "Accredited Hospital Theatres",
        "Full Aftercare Support",
      ],
      href: "/surgery",
      ctaText: "Explore Cosmetic Surgery",
      btnClass:
        "bg-secondary text-on-secondary hover:bg-[#005280] shadow-[0_4px_16px_rgba(0,99,154,0.22)] hover:shadow-[0_6px_22px_rgba(0,99,154,0.32)]",
    },
    {
      id: "diagnostics",
      number: "04 / DIAGNOSTICS",
      badge: "Rapid Diagnostic Scans",
      badgeClass: "bg-secondary-fixed text-on-secondary-fixed",
      glowClass: "bg-primary-fixed/15",
      image: "/stitch/service_diagnostics.jpg",
      title: "Diagnostic Center",
      description:
        "Modern diagnostic services supported by advanced technology, experienced professionals and a commitment to accurate results.",
      tags: [
        "Rapid Access Scans",
        "High-Resolution MRI & Ultrasound",
        "Same-Day Consultant Reports",
      ],
      href: "/therapy",
      ctaText: "Explore Diagnostics",
      btnClass:
        "bg-secondary text-on-secondary hover:bg-[#005280] shadow-[0_4px_16px_rgba(0,99,154,0.22)] hover:shadow-[0_6px_22px_rgba(0,99,154,0.32)]",
    },
  ];

  const principles = [
    {
      title: "People First",
      icon: "favorite",
      iconColor: "text-primary",
      description:
        "Compassion and respect in every individual journey. Every protocol is structured to respect personal dignity and autonomy.",
    },
    {
      title: "Clinical Excellence",
      icon: "verified",
      iconColor: "text-secondary",
      description:
        "Rigorous British medical standards, stringent CQC oversight, and consultant-led patient pathways at every stage.",
    },
    {
      title: "Modern Expertise",
      icon: "biotech",
      iconColor: "text-secondary",
      description:
        "Cutting-edge clinical diagnostic tech, modern imaging equipment, and evidence-based aesthetic methodologies.",
    },
    {
      title: "Personalised Care",
      icon: "tune",
      iconColor: "text-primary",
      description:
        "Tailored treatment plans crafted uniquely for your biological needs, lifestyle goals, and personal comfort.",
    },
  ];

  return (
    <>
      <Header onOpenConsultation={() => openConsultation("general")} />

      <main className="w-full pt-20 sm:pt-24 bg-background min-h-screen">
        <div className="flex flex-col w-full selection:bg-secondary-fixed selection:text-on-secondary-fixed">
          {/* ========================================================================= */}
          {/* HERO SECTION                                                              */}
          {/* ========================================================================= */}
          <section className="relative overflow-hidden pt-unit-3xl pb-unit-4xl">
            {/* Ambient Biotech / Wellness Glow Accents */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[840px] h-[520px] bg-gradient-to-tr from-secondary/15 via-primary-fixed/25 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute -top-24 right-10 w-96 h-96 bg-secondary-container/15 blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex flex-col items-center">
              {/* Trust Indicator Pill */}
              <div className="inline-flex items-center gap-unit-xs px-unit-md py-unit-2xs rounded-full bg-surface-container-lowest shadow-sm mb-unit-xl border border-border-slate/50">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                </span>
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant font-semibold">
                  Compassionate Care • Clinical Excellence • Modern Expertise
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display-hero text-display-hero md:text-[68px] md:leading-[1.08] tracking-tight text-on-surface max-w-4xl text-center">
                Care, Beauty &amp; Precision.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary-container to-primary">
                  Optimized for You.
                </span>
              </h1>

              {/* Supporting Subtitle */}
              <p className="mt-unit-lg font-body-xl text-body-xl text-on-surface-variant max-w-2xl text-center leading-relaxed">
                Exceptional care, advanced aesthetics, cosmetic surgery and diagnostic services — brought together under one trusted organisation.
              </p>

              {/* CTAs */}
              <div className="mt-unit-xl flex flex-wrap items-center justify-center gap-unit-md">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-unit-2xl py-unit-sm rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg shadow-md hover:bg-secondary/90 transition-all hover:scale-[1.02] active:scale-95"
                >
                  Explore Our Services
                </a>
                <button
                  onClick={() => openConsultation("general")}
                  className="inline-flex items-center justify-center px-unit-2xl py-unit-sm rounded-full bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container-low transition-all border border-border-slate/60 cursor-pointer hover:border-secondary/40"
                >
                  Book a Consultation
                </button>
              </div>

              {/* Large Showcase Visual with Floating Badges */}
              <div className="mt-unit-3xl relative w-full max-w-6xl">
                <div className="relative rounded-xl overflow-hidden shadow-2xl bg-surface-container-lowest ring-1 ring-border-slate/40">
                  <div className="relative w-full h-[380px] sm:h-[480px] md:h-[620px]">
                    <Image
                      src="/stitch/hero_consultation.jpg"
                      alt="Optimized Care Clinical Consultation"
                      fill
                      priority
                      fetchPriority="high"
                      sizes="(max-width: 1280px) 100vw, 1152px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/30 via-transparent to-transparent pointer-events-none" />

                  {/* Micro Badge: Top Left CQC */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 backdrop-blur-xl bg-surface-container-lowest/90 px-unit-md py-unit-xs rounded-full shadow-lg flex items-center gap-unit-xs border border-white/50">
                    <span className="material-symbols-outlined text-primary text-base">verified</span>
                    <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface font-semibold">
                      CQC Regulated Standards
                    </span>
                  </div>

                  {/* Micro Badge: Bottom Right Disciplines */}
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 backdrop-blur-xl bg-inverse-surface/90 text-inverse-on-surface px-unit-lg py-unit-xs rounded-full shadow-xl flex items-center gap-unit-sm border border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed animate-ping" />
                    <span className="font-label-md text-label-md">
                      4 Comprehensive Clinical Disciplines
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SERVICES OVERVIEW SECTION                                                 */}
          {/* ========================================================================= */}
          <section className="w-full py-unit-4xl bg-surface border-t border-border-slate/40" id="services">
            <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
              {/* Minimal Centered Header */}
              <div className="max-w-2xl mx-auto text-center mb-unit-3xl flex flex-col items-center">
                <span className="font-label-caps text-label-caps tracking-widest uppercase text-secondary font-semibold mb-unit-xs">
                  Our Services
                </span>
                <h2 className="font-headline-xl text-headline-xl md:text-[44px] md:leading-[52px] text-on-surface tracking-tight">
                  Four areas of expertise.
                  <br />
                  One standard of excellence.
                </h2>
                <p className="mt-unit-md font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Optimized Care brings together dedicated supported living, bespoke advanced aesthetics, precision cosmetic surgery, and state-of-the-art diagnostic imaging under one cohesive, patient-centred organisation.
                </p>
              </div>

              {/* Spacious 2x2 Bento Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-desktop">
                {services.map((svc) => (
                  <div
                    key={svc.id}
                    className="group relative rounded-lg bg-surface-container-lowest p-unit-xl md:p-unit-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-border-slate/40"
                  >
                    <div
                      className={`absolute -right-16 -top-16 w-56 h-56 ${svc.glowClass} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500`}
                    />
                    <div>
                      <div className="flex items-center justify-between mb-unit-lg">
                        <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase font-bold">
                          {svc.number}
                        </span>
                        <span className={`px-unit-sm py-1 rounded-full font-label-caps text-label-caps ${svc.badgeClass}`}>
                          {svc.badge}
                        </span>
                      </div>
                      <div className="relative rounded-DEFAULT overflow-hidden mb-unit-lg shadow-sm h-64 sm:h-72 ring-1 ring-border-slate/40">
                        <Image
                          src={svc.image}
                          alt={svc.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-secondary transition-colors">
                        {svc.title}
                      </h3>
                      <p className="mt-unit-xs font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {svc.description}
                      </p>
                    </div>

                    <div className="mt-unit-xl">
                      {/* Feature Tags */}
                      <div className="flex flex-wrap gap-unit-2xs mb-unit-lg">
                        {svc.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-unit-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-label-caps text-label-caps"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={svc.href}
                        className={`inline-flex items-center justify-between gap-3 w-full sm:w-auto px-6 py-3 rounded-full font-label-lg text-label-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer group/btn ${svc.btnClass}`}
                      >
                        <span className="font-semibold tracking-tight">{svc.ctaText}</span>
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1 shrink-0">
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* WHY OPTIMIZED CARE (Split Editorial Layout)                               */}
          {/* ========================================================================= */}
          <section className="w-full py-unit-4xl bg-surface-container-low border-t border-border-slate/40" id="philosophy">
            <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
                {/* Left Sticky Narrative */}
                <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-unit-md">
                  <span className="font-label-caps text-label-caps tracking-widest uppercase text-primary font-semibold">
                    Our Philosophy
                  </span>
                  <h2 className="font-headline-xl text-headline-xl md:text-5xl md:leading-[1.15] text-on-surface tracking-tight">
                    Healthcare should feel human.
                  </h2>
                  <p className="font-body-xl text-body-xl text-on-surface-variant leading-relaxed">
                    By harmonising clinical precision with deep human empathy, we eradicate the clinical friction in health journeys. Whether in daily supported living or bespoke surgical care, our standard is tailored to you.
                  </p>
                  <div className="mt-unit-lg p-unit-lg rounded-lg bg-surface-container-lowest shadow-sm flex items-center gap-unit-md border border-border-slate/40">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-2xl">
                        shield_with_heart
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        Integrated Clinical Pathways
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Seamless continuity from diagnosis to ongoing wellbeing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right 4 Core Principles */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-gutter-tablet">
                  {principles.map((p) => (
                    <div
                      key={p.title}
                      className="p-unit-xl rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col border border-border-slate/40"
                    >
                      <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-unit-lg">
                        <span className={`material-symbols-outlined text-2xl ${p.iconColor}`}>
                          {p.icon}
                        </span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-on-surface mb-unit-xs">
                        {p.title}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* METRICS & TRUST SECTION                                                   */}
          {/* ========================================================================= */}
          <section className="w-full py-unit-3xl bg-surface-container-lowest border-t border-border-slate/40">
            <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
              <div className="rounded-xl bg-surface-container-low p-unit-xl md:p-unit-2xl shadow-sm relative overflow-hidden border border-border-slate/50">
                {/* Gradient Accent Bar Top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary-container to-primary" />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter-desktop items-center">
                  <div className="flex flex-col items-center text-center">
                    <span className="font-display-hero text-display-hero md:text-6xl font-bold text-on-surface tracking-tight leading-none tnum">
                      4
                    </span>
                    <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary mt-unit-xs">
                      Core Services
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant mt-unit-2xs">
                      Integrated in one network
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="font-display-hero text-display-hero md:text-6xl font-bold text-secondary tracking-tight leading-none tnum">
                      1
                    </span>
                    <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary mt-unit-xs">
                      Integrated Organization
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant mt-unit-2xs">
                      Seamless communication
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="font-display-hero text-display-hero md:text-6xl font-bold text-primary tracking-tight leading-none tnum">
                      100%
                    </span>
                    <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary mt-unit-xs">
                      Patient Focused
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant mt-unit-2xs">
                      Dedicated medical teams
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="font-display-hero text-display-hero md:text-6xl font-bold text-on-surface tracking-tight leading-none tnum">
                      24/7
                    </span>
                    <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface mt-unit-xs">
                      Commitment to Care
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant mt-unit-2xs">
                      Active round-the-clock safety
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* ABOUT OPTIMIZED CARE (Modern Editorial Showcase)                          */}
          {/* ========================================================================= */}
          <section className="w-full py-unit-4xl bg-surface border-t border-border-slate/40" id="about">
            <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                {/* Left Editorial Copy */}
                <div className="lg:col-span-6 flex flex-col items-start gap-unit-md">
                  <span className="font-label-caps text-label-caps tracking-widest uppercase text-secondary font-semibold">
                    About Optimized Care
                  </span>
                  <h2 className="font-headline-xl text-headline-xl md:text-5xl md:leading-[1.15] text-on-surface tracking-tight">
                    One organization.
                    <br />
                    Multiple ways to care.
                  </h2>
                  <p className="font-body-xl text-body-xl text-on-surface-variant leading-relaxed">
                    Optimized Care was established to dismantle the fragmentation typical in modern British healthcare. By synthesizing supported community housing, advanced non-invasive aesthetics, surgical expertise, and ultra-high resolution diagnostics, we create a unified standard of care.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Every consultant, nurse, and support worker works within a unified governance structure registered with the Care Quality Commission, ensuring that trust, transparency, and clinical excellence guide every decision.
                  </p>
                  <div className="pt-unit-sm">
                    <button
                      onClick={() => openConsultation("general")}
                      className="inline-flex items-center gap-unit-xs px-unit-xl py-unit-sm rounded-full bg-inverse-surface text-inverse-on-surface font-label-lg text-label-lg shadow-sm hover:bg-inverse-surface/90 transition-all cursor-pointer"
                    >
                      <span>About Optimized Care</span>
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </button>
                  </div>
                </div>

                {/* Right Visual Showcase */}
                <div className="lg:col-span-6 relative">
                  <div className="relative rounded-xl overflow-hidden shadow-xl ring-1 ring-border-slate/40">
                    <div className="relative w-full h-[360px] sm:h-[460px]">
                      <Image
                        src="/stitch/hero_consultation.jpg"
                        alt="Optimized Care Clinical Facility"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-inverse-surface/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 backdrop-blur-md bg-surface-container-lowest/90 p-unit-md rounded-lg shadow-lg flex items-center gap-unit-md border border-white/50">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                        <span className="material-symbols-outlined">verified_user</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-caps text-label-caps uppercase text-on-surface font-bold">
                          UK Care Quality Commission
                        </span>
                        <span className="font-body-md text-body-md text-on-surface-variant">
                          Registered &amp; Regulated Health and Social Care Provider
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* FINAL CONSULTATION CTA                                                    */}
          {/* ========================================================================= */}
          <section className="w-full py-unit-4xl bg-inverse-surface relative overflow-hidden" id="consultation">
            {/* Bioluminescent Glows in Navy Room */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop relative z-10 text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-unit-xs px-unit-md py-1 rounded-full bg-surface-container-high/10 text-primary-fixed mb-unit-lg border border-primary-fixed/20">
                <span className="w-2 h-2 rounded-full bg-primary-fixed animate-ping" />
                <span className="font-label-caps text-label-caps uppercase tracking-widest">
                  Appointments Available Across London &amp; South East
                </span>
              </div>

              <h2 className="font-display-hero text-display-hero md:text-6xl text-inverse-on-surface tracking-tight max-w-3xl leading-[1.1]">
                Ready to take the next step?
              </h2>

              <p className="mt-unit-md font-body-xl text-body-xl text-tertiary-fixed-dim max-w-xl leading-relaxed">
                Speak with our team and discover the right service for you. Confidential consultations available online or at our regional clinics.
              </p>

              <div className="mt-unit-2xl flex flex-wrap items-center justify-center gap-unit-md">
                <button
                  onClick={() => openConsultation("general")}
                  className="inline-flex items-center justify-center px-unit-2xl py-unit-md rounded-full bg-surface-container-lowest text-inverse-surface font-label-lg text-label-lg shadow-xl hover:bg-surface-container-low transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Book a Consultation
                </button>
                <a
                  href="tel:+447404210566"
                  className="inline-flex items-center justify-center px-unit-2xl py-unit-md rounded-full bg-surface-container-high/10 text-inverse-on-surface font-label-lg text-label-lg hover:bg-surface-container-high/20 transition-all border border-white/10"
                >
                  Contact Us
                </a>
              </div>

              <div className="mt-unit-3xl flex flex-wrap items-center justify-center gap-unit-xl text-tertiary-fixed-dim font-body-md text-body-md">
                <div className="flex items-center gap-unit-2xs">
                  <span className="material-symbols-outlined text-sm text-primary-fixed">lock</span>
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center gap-unit-2xs">
                  <span className="material-symbols-outlined text-sm text-secondary-fixed">
                    calendar_today
                  </span>
                  <span>Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-unit-2xs">
                  <span className="material-symbols-outlined text-sm text-primary-fixed">
                    verified
                  </span>
                  <span>Consultant-Led Approach</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* Interactive Consultation Intake Flow Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultDepartment={consultationDept}
      />
    </>
  );
}
