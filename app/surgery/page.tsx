"use client";

import React, { useState } from "react";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import ConsultationModal from "@/components/common/ConsultationModal";
import SurgeryHero from "@/components/divisions/surgery/SurgeryHero";
import SurgeryProceduresGrid from "@/components/divisions/surgery/SurgeryProceduresGrid";
import SurgicalJourneyProtocol from "@/components/divisions/surgery/SurgicalJourneyProtocol";
import SurgeryReviews from "@/components/divisions/surgery/SurgeryReviews";
import SurgeryBookingSection from "@/components/divisions/surgery/SurgeryBookingSection";

export default function SurgeryPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => {
    setIsConsultationOpen(true);
  };

  return (
    <>
      {/* Global Persistent Universal Header */}
      <Header onOpenConsultation={openConsultation} />

      {/* Main Cosmetic Surgery Page Flow */}
      <main className="w-full pt-28 bg-[#F8FAFC] min-h-screen text-[#1D3557] selection:bg-[#E8F6F3] selection:text-[#2A9D8F]">
        {/* 1. Apple-Tier Surgery Hero Section */}
        <SurgeryHero onOpenConsultation={openConsultation} />

        {/* 2. Comprehensive Procedures Bento Matrix & Modal Sheet */}
        <SurgeryProceduresGrid onOpenConsultation={openConsultation} />

        {/* 3. The 5-Stage Clinical Surgical Journey Protocol */}
        <SurgicalJourneyProtocol onOpenConsultation={openConsultation} />

        {/* 5. Patient Transformation Outcomes & Verified Surgical Reviews */}
        <SurgeryReviews />

        {/* 6. Dedicated Consultant Surgeon Priority Booking & Intake Section */}
        <SurgeryBookingSection />
      </main>

      {/* Global Universal Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultDepartment="surgery"
      />
    </>
  );
}
