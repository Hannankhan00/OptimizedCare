"use client";

import React, { useState } from "react";

export default function CompactContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Supported Living",
    location: "",
    preferredTime: "Morning (09:00 - 12:00)",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseInfo, setResponseInfo] = useState<{ referenceId?: string; message?: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact-compact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Unable to send enquiry. Please try again or call us.");
      }

      setStatus("success");
      setResponseInfo({
        referenceId: data.referenceId,
        message: data.message,
      });

      // Clear fields on success
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "Supported Living",
        location: "",
        preferredTime: "Morning (09:00 - 12:00)",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please call +44 7404 210566 directly.");
      }
    }
  };

  return (
    <section id="contact-compact" className="w-full py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block p-1 rounded-full bg-[#E2E8F0]/80 ring-1 ring-[#2A9D8F]/20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#2A9D8F]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2A9D8F]">
                Intake &amp; Referrals
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1D3557] tracking-tight leading-[1.12] text-balance">
            Get in Touch with Our Supported Care Team.
          </h2>

          <p className="text-[17px] sm:text-[18px] text-[#457B9D] font-normal leading-relaxed text-pretty">
            Whether starting a new referral, exploring supported tenancies, or discussing complex care, our Stockport coordination team reviews every inquiry personally.
          </p>
        </div>

        {/* Double-Bezel Form & Contact Info Container */}
        <div className="p-2.5 sm:p-4 rounded-[2.5rem] bg-[#E2E8F0]/60 ring-1 ring-black/5 max-w-6xl mx-auto">
          <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-xs border border-[#E2E8F0]/60">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Column: Direct Contact & Location Info */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#2A9D8F]">
                    Headquarters &amp; Direct Intake
                  </span>
                  <h3 className="text-2xl font-bold text-[#1D3557] mt-1 tracking-tight">
                    We Are Here to Assist Every Step.
                  </h3>
                  <p className="text-[15px] text-[#457B9D] mt-2 leading-relaxed">
                    No one knows your loved one like you do. We welcome family conversations, local authority commissions, and hospital discharge managers.
                  </p>
                </div>

                {/* Contact Card Details */}
                <div className="space-y-4">
                  {/* Telephone */}
                  <a
                    href="tel:+447404210566"
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0F9FF] hover:bg-[#E8F6F3] border border-[#E2E8F0] transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center flex-shrink-0 group-hover:border-[#2A9D8F]">
                      <span className="material-symbols-outlined text-[#2A9D8F] text-[20px]">
                        call
                      </span>
                    </div>
                    <div>
                      <h4 className="text-[13px] font-semibold text-[#1D3557]">Telephone Enquiries</h4>
                      <p className="text-[15px] font-bold text-[#2A9D8F] tnum mt-0.5">+44 7404 210566</p>
                      <p className="text-[11px] text-[#457B9D]">Available Mon–Fri 08:30–17:30 (24/7 on call)</p>
                    </div>
                  </a>

                  {/* Direct Email */}
                  <a
                    href="mailto:info@optimizedcare.org.pk"
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0F9FF] hover:bg-[#E8F6F3] border border-[#E2E8F0] transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center flex-shrink-0 group-hover:border-[#2A9D8F]">
                      <span className="material-symbols-outlined text-[#2A9D8F] text-[20px]">
                        alternate_email
                      </span>
                    </div>
                    <div>
                      <h4 className="text-[13px] font-semibold text-[#1D3557]">Direct Clinical Email</h4>
                      <p className="text-[14px] font-semibold text-[#2A9D8F] mt-0.5">
                        info@optimizedcare.org.pk
                      </p>
                      <p className="text-[11px] text-[#457B9D]">Intake team response within 24 hours</p>
                    </div>
                  </a>

                  {/* Physical Office Address */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0F9FF] border border-[#E2E8F0]">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[#2A9D8F] text-[20px]">
                        location_on
                      </span>
                    </div>
                    <div>
                      <h4 className="text-[13px] font-semibold text-[#1D3557]">Head Office Location</h4>
                      <p className="text-[13px] text-[#1D3557] font-medium mt-0.5">
                        24 Greek Street, Stockport, England, SK3 8AB
                      </p>
                      <p className="text-[11px] text-[#457B9D]">Greater Manchester, United Kingdom</p>
                    </div>
                  </div>
                </div>

                {/* Reassurance Badge */}
                <div className="p-4 rounded-2xl bg-[#E8F6F3] border border-[#94D2BD] space-y-1">
                  <div className="flex items-center gap-2 text-[#2A9D8F] text-[13px] font-bold">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span className="text-[#1D3557]">Confidential Clinical Intake</span>
                  </div>
                  <p className="text-[12px] text-[#457B9D] leading-relaxed">
                    All client disclosures are governed under NHS Caldicott principles and CQC data protection standards.
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Referral / Contact Form */}
              <div className="lg:col-span-7">
                {status === "success" ? (
                  <div className="p-8 sm:p-10 rounded-2xl bg-[#E8F6F3] border border-[#94D2BD] text-center space-y-5 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-[#2A9D8F] text-white flex items-center justify-center mx-auto shadow-sm">
                      <span className="material-symbols-outlined text-[32px]">check_circle</span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[12px] font-bold uppercase tracking-wider text-[#2A9D8F]">
                        Enquiry Forwarded to Dedicated Intake Team
                      </span>
                      <h3 className="text-2xl font-bold text-[#1D3557]">
                        Thank You! We Have Received Your Referral.
                      </h3>
                      {responseInfo?.referenceId && (
                        <p className="text-[14px] font-mono text-[#2A9D8F] font-semibold">
                          Reference Code: {responseInfo.referenceId}
                        </p>
                      )}
                      <p className="text-[15px] text-[#457B9D] max-w-md mx-auto leading-relaxed">
                        A senior intake coordinator from our Stockport office will review your requirements and get in touch within 24 working hours.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={() => setStatus("idle")}
                        className="px-6 py-2.5 rounded-full bg-white border border-[#94D2BD] text-[#2A9D8F] font-medium text-[14px] hover:bg-[#E8F6F3] transition-colors cursor-pointer"
                      >
                        Submit Another Message
                      </button>
                      <a
                        href="tel:+447404210566"
                        className="px-6 py-2.5 rounded-full bg-[#2A9D8F] text-white font-medium text-[14px] hover:bg-[#21867A] transition-colors"
                      >
                        Call +44 7404 210566 Now
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status === "error" && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-[13px] flex items-center justify-between">
                        <span>{errorMessage}</span>
                        <a
                          href="mailto:info@optimizedcare.org.pk"
                          className="font-semibold underline ml-2 hover:text-red-900"
                        >
                          Email directly
                        </a>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-[12px] font-semibold text-[#1D3557] uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-[#2A9D8F]">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[14px] text-[#1D3557] focus:bg-white focus:border-[#2A9D8F] focus:ring-1 focus:ring-[#2A9D8F] outline-none transition-all"
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-[12px] font-semibold text-[#1D3557] uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-[#2A9D8F]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="sarah@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[14px] text-[#1D3557] focus:bg-white focus:border-[#2A9D8F] focus:ring-1 focus:ring-[#2A9D8F] outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Telephone */}
                      <div>
                        <label className="block text-[12px] font-semibold text-[#1D3557] uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-[#2A9D8F]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+44 7404... or 07..."
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[14px] text-[#1D3557] focus:bg-white focus:border-[#2A9D8F] focus:ring-1 focus:ring-[#2A9D8F] outline-none transition-all"
                        />
                      </div>

                      {/* Location / Postcode */}
                      <div>
                        <label className="block text-[12px] font-semibold text-[#1D3557] uppercase tracking-wider mb-1.5">
                          Location / Postcode
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Stockport, SK3 or Greater Manchester"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[14px] text-[#1D3557] focus:bg-white focus:border-[#2A9D8F] focus:ring-1 focus:ring-[#2A9D8F] outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Service Selector */}
                      <div>
                        <label className="block text-[12px] font-semibold text-[#1D3557] uppercase tracking-wider mb-1.5">
                          Service of Interest
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[14px] text-[#1D3557] focus:bg-white focus:border-[#2A9D8F] focus:ring-1 focus:ring-[#2A9D8F] outline-none transition-all cursor-pointer"
                        >
                          <option value="Supported Living">Supported Living</option>
                          <option value="Domiciliary Care">Domiciliary Care (Home Care)</option>
                          <option value="Complex Care">Complex Care (CHC / High Dependency)</option>
                          <option value="Mental Health Support">Mental Health Support</option>
                          <option value="Live-in Care">Live-in Care (24/7)</option>
                          <option value="Respite Care">Respite Care</option>
                          <option value="Palliative & End of Life Care">Palliative &amp; End of Life Care</option>
                          <option value="Hospital to Home">Hospital to Home Transition</option>
                          <option value="Careers / Support Worker Vacancy">Careers / Support Worker Vacancy</option>
                          <option value="Other Referral">Other Referral</option>
                        </select>
                      </div>

                      {/* Preferred Callback Time */}
                      <div>
                        <label className="block text-[12px] font-semibold text-[#1D3557] uppercase tracking-wider mb-1.5">
                          Preferred Contact Time
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[14px] text-[#1D3557] focus:bg-white focus:border-[#2A9D8F] focus:ring-1 focus:ring-[#2A9D8F] outline-none transition-all cursor-pointer"
                        >
                          <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                          <option value="Afternoon (12:00 - 16:00)">Afternoon (12:00 - 16:00)</option>
                          <option value="Evening (16:00 - 19:00)">Evening (16:00 - 19:00)</option>
                          <option value="Urgent / Anytime">Urgent / Anytime</option>
                        </select>
                      </div>
                    </div>

                    {/* Message / Care Details */}
                    <div>
                      <label className="block text-[12px] font-semibold text-[#1D3557] uppercase tracking-wider mb-1.5">
                        Tell Us About Your Care Needs <span className="text-[#2A9D8F]">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please share any diagnosis, current living situation, daily support requirements, or timeframe..."
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[14px] text-[#1D3557] focus:bg-white focus:border-[#2A9D8F] focus:ring-1 focus:ring-[#2A9D8F] outline-none transition-all resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-[12px] text-[#457B9D]">
                        Submitted directly to <span className="font-semibold text-[#2A9D8F]">Clinical Intake &amp; Assessment Coordinators</span>
                      </div>

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-7 pr-3 py-3 rounded-full bg-[#2A9D8F] text-white font-medium text-[15px] hover:bg-[#21867A] active:scale-[0.985] disabled:opacity-60 transition-all shadow-sm cursor-pointer"
                      >
                        {status === "loading" ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Dispatching Referral...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Care Referral</span>
                            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                              <span className="material-symbols-outlined text-[18px]">send</span>
                            </span>
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
