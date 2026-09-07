"use client";

import React, { useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import ConsultationModal from "@/components/common/ConsultationModal";
import AestheticsHero from "@/components/divisions/aesthetics/AestheticsHero";
import AestheticsTreatmentsGrid from "@/components/divisions/aesthetics/AestheticsTreatmentsGrid";
import SkinConcernTriage from "@/components/divisions/aesthetics/SkinConcernTriage";
import AestheticsSafetyGovernance from "@/components/divisions/aesthetics/AestheticsSafetyGovernance";
import AestheticsReviews from "@/components/divisions/aesthetics/AestheticsReviews";
import AestheticsBookingSection from "@/components/divisions/aesthetics/AestheticsBookingSection";

export default function AestheticsPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => {
    setIsConsultationOpen(true);
  };

  return (
    <>
      {/* Global Persistent Universal Header */}
      <Header onOpenConsultation={openConsultation} />

      {/* Main Aesthetics Page Flow */}
      <main className="w-full pt-24 sm:pt-28 bg-[#F8FAFC] min-h-screen text-[#1D3557] selection:bg-[#E8F6F3] selection:text-[#2A9D8F]">
        {/* 1. Apple-Tier Aesthetics Hero Section */}
        <AestheticsHero onOpenConsultation={openConsultation} />

        {/* 2. Comprehensive Treatments Bento Matrix & Modal Sheet */}
        <AestheticsTreatmentsGrid onOpenConsultation={openConsultation} />

        {/* 3. Interactive Skin Concern Diagnostic Triage */}
        <SkinConcernTriage onOpenConsultation={openConsultation} />

        {/* 4. Ultrasound-Guided Safety & Clinical Governance Standard */}
        <AestheticsSafetyGovernance onOpenConsultation={openConsultation} />

        {/* 5. Patient Case Outcomes & Verified Reviews */}
        <AestheticsReviews />

        {/* 6. Dedicated Aesthetic Priority Consultation & Intake Section */}
        <AestheticsBookingSection />
      </main>

      {/* Global Universal Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultDepartment="aesthetics"
      />
    </>
  );
}
