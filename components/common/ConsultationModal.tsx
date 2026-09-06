"use client";

import React, { useState } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDepartment?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultDepartment = "surgery",
}: ConsultationModalProps) {
  const [department, setDepartment] = useState(defaultDepartment);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "Harley Street Suite, London",
    date: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after showing confirmation
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#ffffff] rounded-lg border border-[#C5A880]/40 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#0A192F] px-6 py-5 text-white flex items-center justify-between border-b border-[#C5A880]/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#152542] flex items-center justify-center text-[#C5A880]">
              <span className="material-symbols-outlined text-[20px]">event_available</span>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold tracking-tight">
                Request Clinical Consultation
              </h3>
              <p className="text-[11px] text-[#C5A880] tracking-wider uppercase font-semibold">
                OptimizedCare • Confidential Concierge
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-8 flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#eff4ff] text-[#1E3A2F] flex items-center justify-center border border-[#1E3A2F]/20">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <h4 className="text-[20px] font-semibold text-[#0A192F]">
              Consultation Request Registered
            </h4>
            <p className="text-[13px] text-[#64748B] max-w-sm leading-relaxed">
              Thank you, {formData.name || "Patient"}. Our clinical concierge will contact you within 2 business hours via secure line to confirm your appointment at {formData.location}.
            </p>
            <div className="text-[11px] font-mono text-[#725b38] bg-[#F7F5F0] px-3 py-1.5 rounded border border-[#E2E8F0]">
              Reference: HB-{Math.floor(100000 + Math.random() * 900000)}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Department Selector */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#64748B] mb-1.5">
                Select Clinical Division
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "care", label: "Care Services" },
                  { id: "aesthetics", label: "Aesthetics" },
                  { id: "surgery", label: "Cosmetic Surgery" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDepartment(item.id)}
                    className={`py-2 px-2 text-center text-[12px] font-medium rounded border transition-all ${
                      department === item.id
                        ? "bg-[#0A192F] text-white border-[#C5A880] shadow-sm"
                        : "bg-[#f8f9ff] text-[#44474D] border-[#E2E8F0] hover:bg-[#eff4ff]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                  Full Legal Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Eleanor Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-10 px-3 text-[13px] bg-[#f8f9ff] border border-[#E2E8F0] rounded focus:outline-none focus:border-[#C5A880] focus:bg-white text-[#0A192F]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                  Telephone (UK Mobile / Direct)
                </label>
                <input
                  required
                  type="tel"
                  placeholder="e.g. 07700 900123"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-10 px-3 text-[13px] bg-[#f8f9ff] border border-[#E2E8F0] rounded focus:outline-none focus:border-[#C5A880] focus:bg-white text-[#0A192F]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="patient@domain.co.uk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-10 px-3 text-[13px] bg-[#f8f9ff] border border-[#E2E8F0] rounded focus:outline-none focus:border-[#C5A880] focus:bg-white text-[#0A192F]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                  Consultation Location
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full h-10 px-3 text-[13px] bg-[#f8f9ff] border border-[#E2E8F0] rounded focus:outline-none focus:border-[#C5A880] focus:bg-white text-[#0A192F]"
                >
                  <option value="Harley Street Suite, London">10 Harley Street, London</option>
                  <option value="Belgrave Square, London">42 Belgrave Square, London</option>
                  <option value="In-Home Care Assessment">In-Home Care Assessment (UK-Wide)</option>
                  <option value="Private Video Consultation">Private Video Consultation (GMC)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                Clinical Notes / Desired Procedure or Care Requirement
              </label>
              <textarea
                rows={2}
                placeholder="Please describe your specific inquiry or care needs..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-2.5 text-[13px] bg-[#f8f9ff] border border-[#E2E8F0] rounded focus:outline-none focus:border-[#C5A880] focus:bg-white text-[#0A192F] resize-none"
              />
            </div>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-[#64748B]">
              <span className="material-symbols-outlined text-[15px] text-[#1E3A2F]">lock</span>
              <span>Protected by NHS &amp; GDPR encryption standards. Never shared with third parties.</span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-11 bg-[#0A192F] text-white font-medium text-[14px] rounded-[4px] border border-[#C5A880] hover:bg-[#152542] transition-colors shadow-sm cursor-pointer"
              >
                Submit Consultation Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
