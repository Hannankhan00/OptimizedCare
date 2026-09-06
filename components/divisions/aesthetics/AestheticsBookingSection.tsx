"use client";

import React, { useState } from "react";

export default function AestheticsBookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "24 Greek Street, Stockport (SK3 8AB)",
    treatment: "Anti-Wrinkle Injections",
    preferredTime: "Morning (09:00 - 12:00)",
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
    <section className="w-full py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F6F3] border border-[#94D2BD] text-[#2A9D8F] text-[11px] font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A9D8F]" />
              <span>24 Greek Street, Stockport (SK3 8AB)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D3557] tracking-tight leading-tight">
              Arrange Your Private Aesthetic Consultation
            </h2>

            <p className="text-[16px] text-[#457B9D] leading-relaxed">
              Every appointment begins with an in-depth clinical consultation and ultrasound vascular examination with our GMC-registered doctors. We take time to understand your individual anatomy and aesthetic goals.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="w-9 h-9 rounded-full bg-[#E8F6F3] border border-[#94D2BD] flex items-center justify-center text-[#2A9D8F] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#1D3557]">Comprehensive 45-Min Appointment</h4>
                  <p className="text-[12px] text-[#457B9D]">Never rushed. Full facial mapping, skin health triage, and treatment planning.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="w-9 h-9 rounded-full bg-[#E8F6F3] border border-[#94D2BD] flex items-center justify-center text-[#2A9D8F] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">radiology</span>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#1D3557]">Handheld Ultrasound Examination</h4>
                  <p className="text-[12px] text-[#457B9D]">Real-time arterial vascular mapping included with all dermal contouring consultations.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="w-9 h-9 rounded-full bg-[#E8F6F3] border border-[#94D2BD] flex items-center justify-center text-[#2A9D8F] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#1D3557]">Discreet Private Suites</h4>
                  <p className="text-[12px] text-[#457B9D]">Private consultation rooms at 24 Greek Street with dedicated parking.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-[13px] text-[#457B9D]">
                <span>Prefer direct telephone booking?</span>
                <a href="tel:+447404210566" className="font-semibold text-[#1D3557] hover:text-[#2A9D8F] underline">
                  +44 7404 210566
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form (Double-Bezel Architecture) */}
          <div className="lg:col-span-7">
            <div className="p-2 rounded-[2rem] bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm">
              <div className="p-6 md:p-8 rounded-[calc(2rem-0.5rem)] bg-white border border-[#E2E8F0]">
                {submitted ? (
                  <div className="py-12 flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#2A9D8F] text-white flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-4xl">check</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#1D3557]">
                      Consultation Request Received
                    </h3>
                    <p className="text-[14px] text-[#457B9D] max-w-md leading-relaxed">
                      Thank you, {formData.name}. Our clinical concierge has received your request and will contact you via secure line within 2 business hours to confirm your appointment.
                    </p>
                    <div className="text-[12px] font-mono text-[#1D3557] bg-[#E8F6F3] px-4 py-2 rounded-full border border-[#94D2BD]">
                      Reference: OC-AESTH-{Math.floor(100000 + Math.random() * 900000)}
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 h-10 bg-[#F8FAFC] hover:bg-[#E8F6F3] border border-[#E2E8F0] text-[#1D3557] text-[12px] font-semibold rounded-full transition-all"
                    >
                      Book Another Consultation
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                      <div>
                        <h3 className="text-[18px] font-semibold text-[#1D3557]">
                          Priority Consultation Request
                        </h3>
                        <p className="text-[12px] text-[#457B9D]">
                          Doctor-Led Clinical Dermatology &amp; Rejuvenation
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-[#2A9D8F] bg-[#E8F6F3] border border-[#94D2BD] px-2.5 py-1 rounded-full font-semibold">
                        GMC Accredited
                      </span>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-1.5">
                          Full Legal Name
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Lady Victoria Spencer"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full h-11 px-3.5 text-[13px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#2A9D8F] focus:bg-white text-[#1D3557] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-1.5">
                          UK Telephone / Mobile
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="e.g. 07700 900456"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full h-11 px-3.5 text-[13px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#2A9D8F] focus:bg-white text-[#1D3557] transition-all"
                        />
                      </div>
                    </div>

                    {/* Email & Clinic */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-1.5">
                          Email Address
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="patient@domain.co.uk"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full h-11 px-3.5 text-[13px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#2A9D8F] focus:bg-white text-[#1D3557] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-1.5">
                          Preferred Clinic Suite
                        </label>
                        <select
                          value={formData.clinic}
                          onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                          className="w-full h-11 px-3.5 text-[13px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#2A9D8F] focus:bg-white text-[#1D3557] transition-all"
                        >
                          <option value="24 Greek Street, Stockport (SK3 8AB)">24 Greek Street Clinic Suite, Stockport (SK3 8AB)</option>
                          <option value="Virtual Video Consultation">Virtual Video Consultation (GMC)</option>
                        </select>
                      </div>
                    </div>

                    {/* Treatment of Interest & Preferred Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-1.5">
                          Treatment / Skin Concern
                        </label>
                        <select
                          value={formData.treatment}
                          onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                          className="w-full h-11 px-3.5 text-[13px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#2A9D8F] focus:bg-white text-[#1D3557] transition-all"
                        >
                          <option value="Anti-Wrinkle Injections">Anti-Wrinkle Injections (Forehead / Frown / Eyes)</option>
                          <option value="Ultrasound Dermal Contouring">Ultrasound Dermal Contouring (Cheeks / Jawline)</option>
                          <option value="Profhilo Bioremodelling">Profhilo® Bioremodelling (Face &amp; Neck)</option>
                          <option value="Morpheus8 RF Remodeling">Morpheus8 RF Microneedling (Tightening &amp; Jowls)</option>
                          <option value="Polynucleotide Cellular Repair">Polynucleotide Therapy (Under-Eye Dark Circles)</option>
                          <option value="HydraFacial & Medical Peels">HydraFacial Syndeo™ &amp; Medical TCA Peels</option>
                          <option value="General Doctor Consultation">General Doctor Consultation &amp; Full Skin Assessment</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-1.5">
                          Preferred Timeframe
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full h-11 px-3.5 text-[13px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#2A9D8F] focus:bg-white text-[#1D3557] transition-all"
                        >
                          <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                          <option value="Afternoon (12:00 - 16:00)">Afternoon (12:00 - 16:00)</option>
                          <option value="Evening (16:00 - 19:30)">Late Afternoon / Evening (16:00 - 19:30)</option>
                          <option value="Saturday Morning">Saturday Morning Priority</option>
                        </select>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-1.5">
                        Clinical Goals / Medical Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Please describe any previous aesthetic treatments or specific concerns..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full p-3 text-[13px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#2A9D8F] focus:bg-white text-[#1D3557] resize-none transition-all"
                      />
                    </div>

                    {/* Privacy Note */}
                    <div className="flex items-center gap-2 text-[11px] text-[#457B9D] pt-1">
                      <span className="material-symbols-outlined text-[16px] text-[#2A9D8F]">lock</span>
                      <span>Strict NHS &amp; GDPR patient data encryption standards. Never shared with third parties.</span>
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
                            <span>Request Priority Aesthetic Consultation</span>
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
