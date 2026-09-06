"use client";

import React from "react";
import AestheticsTreatmentsGrid from "./aesthetics/AestheticsTreatmentsGrid";
import SkinConcernTriage from "./aesthetics/SkinConcernTriage";
import AestheticsSafetyGovernance from "./aesthetics/AestheticsSafetyGovernance";

interface AestheticsDivisionSectionProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function AestheticsDivisionSection({
  onOpenConsultation,
}: AestheticsDivisionSectionProps) {
  return (
    <section id="aesthetics-division" className="w-full space-y-12">
      <AestheticsTreatmentsGrid onOpenConsultation={onOpenConsultation} />
      <SkinConcernTriage onOpenConsultation={onOpenConsultation} />
      <AestheticsSafetyGovernance onOpenConsultation={onOpenConsultation} />
    </section>
  );
}
