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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1D1D1F]/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-[#D2D2D7] shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="bg-white px-6 py-5 text-[#1D1D1F] flex items-center justify-between border-b border-[#D2D2D7]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#1D1D1F]">
              <span className="material-symbols-outlined text-[20px]">event_available</span>
            </div>
            <div>
              <h3 className="text-[17px] font-semibold tracking-tight">
                Request Clinical Consultation
              </h3>
              <p className="text-[11px] text-[#6E6E73] tracking-wider uppercase font-semibold">
                OptimizedCare • Confidential Concierge
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-8 flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#1D1D1F] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h4 className="text-[20px] font-semibold text-[#1D1D1F]">
              Consultation Request Registered
            </h4>
            <p className="text-[13px] text-[#6E6E73] max-w-sm leading-relaxed">
              Thank you, {formData.name || "Patient"}. Our clinical concierge will contact you within 2 business hours via secure line to confirm your appointment at {formData.location}.
            </p>
            <div className="text-[11px] font-mono text-[#1D1D1F] bg-[#F5F5F7] px-3 py-1.5 rounded-full border border-[#D2D2D7]">
              Reference: HB-{Math.floor(100000 + Math.random() * 900000)}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Department Selector */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6E6E73] mb-1.5">
                Select Clinical Division
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "care", label: "Care Services" },
                  { id: "aesthetics", label: "Aesthetics" },
                  { id: "surgery", label: "Cosmetic Surgery" },
                  { id: "therapy", label: "Therapeutic" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDepartment(item.id)}
                    className={`py-2 px-2 text-center text-[12px] font-medium rounded-full border transition-all ${
                      department === item.id
                        ? "bg-[#1D1D1F] text-white border-[#1D1D1F]"
                        : "bg-white text-[#6E6E73] border-[#D2D2D7] hover:border-[#1D1D1F] hover:text-[#1D1D1F]"
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
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6E6E73] mb-1">
                  Full Legal Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Eleanor Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-10 px-3 text-[13px] bg-[#F5F5F7] border border-[#D2D2D7] rounded-lg focus:outline-none focus:border-[#1D1D1F] focus:bg-white text-[#1D1D1F]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6E6E73] mb-1">
                  Telephone (UK Mobile / Direct)
                </label>
                <input
                  required
                  type="tel"
                  placeholder="e.g. 07700 900123"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-10 px-3 text-[13px] bg-[#F5F5F7] border border-[#D2D2D7] rounded-lg focus:outline-none focus:border-[#1D1D1F] focus:bg-white text-[#1D1D1F]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6E6E73] mb-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="patient@domain.co.uk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-10 px-3 text-[13px] bg-[#F5F5F7] border border-[#D2D2D7] rounded-lg focus:outline-none focus:border-[#1D1D1F] focus:bg-white text-[#1D1D1F]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6E6E73] mb-1">
                  Consultation Location
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full h-10 px-3 text-[13px] bg-[#F5F5F7] border border-[#D2D2D7] rounded-lg focus:outline-none focus:border-[#1D1D1F] focus:bg-white text-[#1D1D1F]"
                >
                  <option value="Harley Street Suite, London">10 Harley Street, London</option>
                  <option value="Belgrave Square, London">42 Belgrave Square, London</option>
                  <option value="In-Home Care Assessment">In-Home Care Assessment (UK-Wide)</option>
                  <option value="Private Video Consultation">Private Video Consultation (GMC)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6E6E73] mb-1">
                Clinical Notes / Desired Procedure or Care Requirement
              </label>
              <textarea
                rows={2}
                placeholder="Please describe your specific inquiry or care needs..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-2.5 text-[13px] bg-[#F5F5F7] border border-[#D2D2D7] rounded-lg focus:outline-none focus:border-[#1D1D1F] focus:bg-white text-[#1D1D1F] resize-none"
              />
            </div>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-[#6E6E73]">
              <span className="material-symbols-outlined text-[15px] text-[#1D1D1F]">lock</span>
              <span>Protected by NHS &amp; GDPR encryption standards. Never shared with third parties.</span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-11 bg-[#1D1D1F] text-white font-medium text-[14px] rounded-full hover:opacity-85 transition-opacity cursor-pointer"
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
