"use client";

import React, { useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import ConsultationModal from "@/components/common/ConsultationModal";
import TherapyHero from "@/components/divisions/therapy/TherapyHero";
import TherapyDisciplinesGrid from "@/components/divisions/therapy/TherapyDisciplinesGrid";
import TherapyConditionTriage from "@/components/divisions/therapy/TherapyConditionTriage";
import TherapyFundingFramework from "@/components/divisions/therapy/TherapyFundingFramework";
import TherapyReviews from "@/components/divisions/therapy/TherapyReviews";
import TherapyBookingSection from "@/components/divisions/therapy/TherapyBookingSection";

export default function TherapyPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => {
    setIsConsultationOpen(true);
  };

  return (
    <>
      {/* Global Persistent Universal Header */}
      <Header onOpenConsultation={openConsultation} />

      {/* Main Therapeutic Services Page Flow */}
      <main className="w-full pt-24 sm:pt-28 bg-[#F8FAFC] min-h-screen text-[#1D3557] selection:bg-[#E8F6F3] selection:text-[#2A9D8F]">
        {/* 1. Apple-Tier Therapy Hero Section */}
        <TherapyHero onOpenConsultation={openConsultation} />

        {/* 2. Four Restorative Disciplines Bento Matrix & Modal Sheet */}
        <TherapyDisciplinesGrid onOpenConsultation={openConsultation} />

        {/* 3. Personalised Clinical Condition Diagnostic Triage */}
        <TherapyConditionTriage onOpenConsultation={openConsultation} />

        {/* 4. Funding, Referral Pathways & Delivery Models */}
        <TherapyFundingFramework onOpenConsultation={openConsultation} />

        {/* 5. Patient Transformation Outcomes & Verified Case Reviews */}
        <TherapyReviews />

        {/* 6. Dedicated Therapy Assessment Priority Booking & Intake Section */}
        <TherapyBookingSection />
      </main>

      {/* Global Universal Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultDepartment="therapy"
      />
    </>
  );
}
