"use client";

import React, { useState } from "react";
import Image from "next/image";

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
    location: "24 Greek Street, Stockport, England, SK3 8AB",
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1D3557]/60 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-white px-5 sm:px-6 py-4 sm:py-5 text-[#1D3557] flex items-center justify-between border-b border-[#E2E8F0] shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-10 shrink-0">
              <Image
                src="/assets/logo.png"
                alt="OptimizedCare Logo"
                fill
                sizes="32px"
                className="object-contain mix-blend-multiply"
              />
            </div>
            <div>
              <h3 className="text-[16px] sm:text-[17px] font-semibold tracking-tight text-[#1D3557]">
                Request Clinical Consultation
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#457B9D] tracking-wider uppercase font-semibold">
                OptimizedCare • Confidential Concierge
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#457B9D] hover:text-[#1D3557] hover:bg-[#F8FAFC] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-6 sm:p-8 flex flex-col items-center text-center gap-4 overflow-y-auto">
            <div className="w-14 h-14 rounded-full bg-[#2A9D8F] text-white flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h4 className="text-[20px] font-semibold text-[#1D3557]">
              Consultation Request Registered
            </h4>
            <p className="text-[13px] text-[#457B9D] max-w-sm leading-relaxed">
              Thank you, {formData.name || "Patient"}. Our clinical concierge will contact you within 2 business hours via secure line to confirm your appointment at {formData.location}.
            </p>
            <div className="text-[11px] font-mono text-[#1D3557] bg-[#E8F6F3] px-3 py-1.5 rounded-full border border-[#94D2BD]">
              Reference: OC-{Math.floor(100000 + Math.random() * 900000)}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 overflow-y-auto">
            {/* Department Selector */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#457B9D] mb-1.5">
                Select Clinical Division
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "care", label: "Supported Living" },
                  { id: "aesthetics", label: "Aesthetics" },
                  { id: "surgery", label: "Cosmetic Surgeries" },
                  { id: "therapy", label: "Diagnostic Center" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDepartment(item.id)}
                    className={`py-2 px-2 text-center text-[12px] font-medium rounded-full border transition-all ${
                      department === item.id
                        ? "bg-[#2A9D8F] text-white border-[#2A9D8F] shadow-xs"
                        : "bg-white text-[#457B9D] border-[#E2E8F0] hover:border-[#94D2BD] hover:text-[#1D3557]"
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
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#457B9D] mb-1">
                  Full Legal Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Eleanor Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-10 px-3 text-[13px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#2A9D8F] focus:bg-white text-[#1D3557]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#457B9D] mb-1">
                  Telephone (UK Mobile / Direct)
                </label>
                <input
                  required
                  type="tel"
                  placeholder="e.g. 07700 900123"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-10 px-3 text-[13px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#2A9D8F] focus:bg-white text-[#1D3557]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#457B9D] mb-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="patient@domain.co.uk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-10 px-3 text-[13px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#2A9D8F] focus:bg-white text-[#1D3557]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#457B9D] mb-1">
                  Consultation Location
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full h-10 px-3 text-[13px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#2A9D8F] focus:bg-white text-[#1D3557]"
                >
                  <option value="24 Greek Street, Stockport, England, SK3 8AB">24 Greek Street, Stockport, England, SK3 8AB</option>
                  <option value="In-Home Care Assessment">In-Home Assessment (UK-Wide)</option>
                  <option value="Private Video Consultation">Private Video Consultation (GMC)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#457B9D] mb-1">
                Clinical Notes / Desired Procedure or Care Requirement
              </label>
              <textarea
                rows={2}
                placeholder="Please describe your specific inquiry or care needs..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-2.5 text-[13px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#2A9D8F] focus:bg-white text-[#1D3557] resize-none"
              />
            </div>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-[#457B9D]">
              <span className="material-symbols-outlined text-[15px] text-[#2A9D8F]">lock</span>
              <span>Protected by NHS &amp; GDPR encryption standards. Never shared with third parties.</span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-11 bg-[#2A9D8F] text-white font-medium text-[14px] rounded-full hover:bg-[#21867A] active:scale-[0.985] transition-all cursor-pointer shadow-xs"
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
