"use client";

import React, { useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import ConsultationModal from "@/components/common/ConsultationModal";
import CompactHero from "@/components/divisions/care/CompactHero";
import CompactServicesGrid from "@/components/divisions/care/CompactServicesGrid";
import CompactPillars from "@/components/divisions/care/CompactPillars";
import CompactCareersBanner from "@/components/divisions/care/CompactCareersBanner";
import CompactContactSection from "@/components/divisions/care/CompactContactSection";

export default function CarePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <Header onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main className="w-full pt-20 sm:pt-24 bg-[#FBFBFD] min-h-screen text-[#1D1D1F] selection:bg-[#ECFDF5] selection:text-[#0D5C3A]">
        {/* Apple High-End Hero with Emerald Green Accent */}
        <CompactHero onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Complete 8-Service Supported Care Bento Grid */}
        <CompactServicesGrid />

        {/* Philosophy & Pillars: PBS, Active Support & Peak District Adventures */}
        <CompactPillars />

        {/* Careers Banner: £26,364 Starting Salary & Care Training */}
        <CompactCareersBanner />

        {/* Dedicated Supported Care Team Contact & Referral Form */}
        <CompactContactSection />
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultDepartment="care"
      />
    </>
  );
}
