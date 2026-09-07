"use client";

import React, { useState } from "react";

export default function TherapyBookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deliveryLocation: "Home Visit (Domiciliary)",
    discipline: "Physiotherapy & Physical Rehabilitation",
    fundingRoute: "Private Self-Pay / Medical Insurance",
    urgency: "Routine (Within 1 Week)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Guarantees & Clinical Assurances */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[11px] font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
              <span>Direct Diagnostic Assessment Intake</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D3557] tracking-tight leading-tight">
              Arrange Your Comprehensive Diagnostic Assessment
            </h2>

            <p className="text-[16px] text-[#457B9D] leading-relaxed">
              Every clinical care plan begins with a 60-minute objective evaluation by our HCPC-registered chartered clinicians at our Diagnostic Center. Available in our Stockport clinic (24 Greek Street) or delivered at home nationwide.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <div className="w-9 h-9 rounded-full bg-[#E8F6F3] border border-[#94D2BD] flex items-center justify-center text-[#2A9D8F] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">home_health</span>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#1D3557]">UK-Wide Home Visit Capability</h4>
                  <p className="text-[12px] text-[#457B9D]">Our therapists visit clients in private homes, care homes, and hospitals with all mobile diagnostic equipment.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <div className="w-9 h-9 rounded-full bg-[#E8F6F3] border border-[#94D2BD] flex items-center justify-center text-[#2A9D8F] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">clinical_notes</span>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#1D3557]">Formal Multidisciplinary Reports</h4>
                  <p className="text-[12px] text-[#457B9D]">Detailed clinical reports provided within 48 hours for GP liaison, case managers, and social services.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <div className="w-9 h-9 rounded-full bg-[#E8F6F3] border border-[#94D2BD] flex items-center justify-center text-[#2A9D8F] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#1D3557]">Flexible Funding Integration</h4>
                  <p className="text-[12px] text-[#457B9D]">Direct billing support for Local Authority Direct Payments, NHS CHC budgets, and private insurers.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-[13px] text-[#457B9D]">
                <span>Prefer direct telephone intake?</span>
                <a href="tel:+447404210566" className="font-semibold text-[#1D3557] hover:text-[#2A9D8F] underline">
                  +44 7404 210566
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form (Double-Bezel Architecture) */}
          <div className="lg:col-span-7">
            <div className="p-2 rounded-[2rem] bg-white border border-[#E2E8F0] shadow-sm">
              <div className="p-6 md:p-8 rounded-[calc(2rem-0.5rem)] bg-[#F8FAFC] border border-[#E2E8F0]">
                {submitted ? (
                  <div className="py-12 flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#2A9D8F] text-white flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-4xl">check</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#1D3557]">
                      Therapy Assessment Request Received
                    </h3>
                    <p className="text-[14px] text-[#457B9D] max-w-md leading-relaxed">
                      Thank you, {formData.name}. Our clinical therapy coordinator has received your enquiry and will contact you via phone within 2 business hours to schedule your initial evaluation.
                    </p>
                    <div className="text-[12px] font-mono text-[#1D3557] bg-[#E8F6F3] px-4 py-2 rounded-full border border-[#94D2BD]">
                      Reference: OC-THRP-{Math.floor(100000 + Math.random() * 900000)}
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 h-10 bg-white hover:bg-[#E8F6F3] border border-[#E2E8F0] text-[#1D3557] text-[12px] font-semibold rounded-full transition-all"
                    >
                      Book Another Assessment
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                      <div>
                        <h3 className="text-[18px] font-semibold text-[#1D3557]">
                          Clinical Therapy Referral Form
                        </h3>
                        <p className="text-[12px] text-[#457B9D]">
                          Chartered Physiotherapy, OT, Speech &amp; Psychotherapy
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-[#2A9D8F] bg-[#E8F6F3] border border-[#94D2BD] px-2.5 py-1 rounded-full font-semibold">
                        HCPC Registered
                      </span>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-1.5">
                          Patient / Advocate Name
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Arthur Miller"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full h-11 px-3.5 text-[13px] bg-white border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#2A9D8F] text-[#1D3557] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-1.5">
                          UK Telephone / Mobile
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="e.g. 07700 900321"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full h-11 px-3.5 text-[13px] bg-white border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#2A9D8F] text-[#1D3557] transition-all"
                        />
                      </div>
                    </div>

                    {/* Email & Delivery Mode */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-1.5">
                          Email Address
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="client@domain.co.uk"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full h-11 px-3.5 text-[13px] bg-white border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#2A9D8F] text-[#1D3557] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-1.5">
                          Assessment Location
                        </label>
                        <select
                          value={formData.deliveryLocation}
                          onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                          className="w-full h-11 px-3.5 text-[13px] bg-white border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#2A9D8F] text-[#1D3557] transition-all"
                        >
                          <option value="Home Visit (Domiciliary)">Home Visit (Domiciliary • UK-Wide)</option>
                          <option value="24 Greek Street Suite, Stockport">24 Greek Street Clinic Suite, Stockport (SK3 8AB)</option>
                          <option value="Secure Video Consultation">Secure Telehealth Video Consultation</option>
                        </select>
                      </div>
                    </div>

                    {/* Discipline & Funding Route */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-1.5">
                          Therapy Discipline
                        </label>
                        <select
                          value={formData.discipline}
                          onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                          className="w-full h-11 px-3.5 text-[13px] bg-white border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#2A9D8F] text-[#1D3557] transition-all"
                        >
                          <option value="Physiotherapy & Physical Rehabilitation">Physiotherapy &amp; Physical Rehabilitation</option>
                          <option value="Occupational Therapy & Home Adaptation">Occupational Therapy (ADL &amp; Home Adaptation)</option>
                          <option value="Speech & Language (Dysphagia/Aphasia)">Speech &amp; Language Therapy (Dysphagia/Aphasia)</option>
                          <option value="Clinical Psychotherapy & CBT">Clinical Psychotherapy &amp; CBT</option>
                          <option value="Multidisciplinary Coordinated Assessment">Multidisciplinary Coordinated Assessment (MDT)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-1.5">
                          Funding Route
                        </label>
                        <select
                          value={formData.fundingRoute}
                          onChange={(e) => setFormData({ ...formData, fundingRoute: e.target.value })}
                          className="w-full h-11 px-3.5 text-[13px] bg-white border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#2A9D8F] text-[#1D3557] transition-all"
                        >
                          <option value="Private Self-Pay / Medical Insurance">Private Self-Pay / Medical Insurance (BUPA/AXA)</option>
                          <option value="Direct Payments / Personal Health Budget">Local Authority Direct Payments / PHB</option>
                          <option value="NHS Continuing Healthcare (CHC)">NHS Continuing Healthcare (CHC)</option>
                          <option value="Case Manager / Solicitor Referral">Catastrophic Case Management / Solicitor</option>
                        </select>
                      </div>
                    </div>

                    {/* Urgency */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-1.5">
                        Urgency &amp; Desired Start Timeframe
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="w-full h-11 px-3.5 text-[13px] bg-white border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#2A9D8F] text-[#1D3557] transition-all"
                      >
                        <option value="Routine (Within 1 Week)">Routine Assessment (Within 1 Week)</option>
                        <option value="Urgent (Within 48 Hours)">Urgent Hospital Discharge / Dysphagia (Within 48 Hours)</option>
                        <option value="Weekend / Saturday Priority">Weekend / Saturday Priority</option>
                        <option value="Planning Ahead (Next Month)">Planning Ahead (Next Month)</option>
                      </select>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-1.5">
                        Clinical Presentation &amp; Medical History (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Please describe diagnosis, mobility levels, or recent operations..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full p-3 text-[13px] bg-white border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#2A9D8F] text-[#1D3557] resize-none transition-all"
                      />
                    </div>

                    {/* Privacy Note */}
                    <div className="flex items-center gap-2 text-[11px] text-[#457B9D] pt-1">
                      <span className="material-symbols-outlined text-[16px] text-[#2A9D8F]">lock</span>
                      <span>Strict NHS &amp; GDPR encryption. Formal clinical report provided within 48 hours.</span>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-12 bg-[#2A9D8F] hover:bg-[#21867A] disabled:opacity-75 text-white font-semibold text-[14px] rounded-full transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.985]"
                      >
                        {loading ? (
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Request Clinical Therapy Assessment</span>
                            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
