"use client";

import React from "react";
import SurgeryProceduresGrid from "./surgery/SurgeryProceduresGrid";
import SurgicalJourneyProtocol from "./surgery/SurgicalJourneyProtocol";

interface SurgeryDivisionSectionProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function SurgeryDivisionSection({
  onOpenConsultation,
}: SurgeryDivisionSectionProps) {
  return (
    <section id="surgery-division" className="w-full space-y-12">
      <SurgeryProceduresGrid onOpenConsultation={onOpenConsultation} />
      <SurgicalJourneyProtocol onOpenConsultation={onOpenConsultation} />
    </section>
  );
}
