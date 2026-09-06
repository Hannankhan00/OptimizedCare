"use client";

import React, { useState } from "react";

interface SurgeryFinanceCalculatorProps {
  onOpenConsultation?: (dept: string) => void;
}

export default function SurgeryFinanceCalculator({
  onOpenConsultation,
}: SurgeryFinanceCalculatorProps) {
  const [totalCost, setTotalCost] = useState<number>(6500);
  const [depositPct, setDepositPct] = useState<number>(20);
  const [termMonths, setTermMonths] = useState<number>(12); // 12, 24, 36, 60

  const depositAmount = Math.round((totalCost * depositPct) / 100);
  const loanAmount = totalCost - depositAmount;

  // APR rates (Chrysalis UK standard medical finance)
  const apr = termMonths === 12 ? 0 : termMonths <= 36 ? 0.099 : 0.149;

  // Monthly payment calculation
  const calculateMonthly = () => {
    if (apr === 0) {
      return Math.round(loanAmount / termMonths);
    }
    const monthlyRate = apr / 12;
    const payment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) /
      (Math.pow(1 + monthlyRate, termMonths) - 1);
    return Math.round(payment);
  };

  const monthlyPayment = calculateMonthly();
  const totalRepayable = depositAmount + monthlyPayment * termMonths;
  const totalInterest = totalRepayable - totalCost;

  return (
    <div className="w-full bg-[#f8f9ff] rounded-xl border border-[#E2E8F0] shadow-sm p-6 md:p-8 lg:p-10">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#fedeb2]/40 text-[#725b38] text-[11px] font-semibold uppercase tracking-wider border border-[#C5A880]/30 mb-2">
            <span className="material-symbols-outlined text-[14px]">credit_card</span>
            Surgery Component 02 • Chrysalis 0% APR Finance Calculator
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0A192F] tracking-tight">
            Flexible Cosmetic Surgery Finance Calculator
          </h3>
          <p className="text-[14px] md:text-[15px] text-[#44474D] mt-2">
            Calculate your transparent monthly repayments with 0% APR interest-free terms over 12 months, or extended plans up to 5 years with Chrysalis Finance UK.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 md:p-8 shadow-sm">
          {/* Slider 1: Total Procedure Cost */}
          <div className="mb-6 bg-[#f8f9ff] p-5 rounded-md border border-[#E2E8F0]">
            <div className="flex items-center justify-between mb-2">
              <label className="text-[13px] font-semibold text-[#0A192F]">
                Estimated Procedure Value
              </label>
              <span className="font-mono text-[16px] font-bold text-[#0A192F] bg-white px-3 py-1 rounded border border-[#E2E8F0] tnum">
                £{totalCost.toLocaleString("en-GB")}
              </span>
            </div>
            <input
              type="range"
              min={3000}
              max={15000}
              step={250}
              value={totalCost}
              onChange={(e) => setTotalCost(Number(e.target.value))}
              className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#0A192F]"
            />
            <div className="flex justify-between text-[11px] text-[#64748B] mt-1 font-mono">
              <span>£3,000 (Blepharoplasty)</span>
              <span>£6,500 (Breast / Rhino)</span>
              <span>£10,000+ (Deep Plane / 360 Lipo)</span>
            </div>
          </div>

          {/* Deposit Selector */}
          <div className="mb-6">
            <label className="block text-[13px] font-semibold text-[#0A192F] mb-2">
              Select Initial Deposit Percentage:{" "}
              <span className="font-mono text-[#725b38] font-bold">
                {depositPct}% (£{depositAmount.toLocaleString("en-GB")})
              </span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[10, 20, 30, 50].map((pct) => (
                <button
                  key={pct}
                  type="button"
                  onClick={() => setDepositPct(pct)}
                  className={`py-2 text-[13px] font-medium rounded border transition-all cursor-pointer font-mono ${
                    depositPct === pct
                      ? "bg-[#0A192F] text-white border-[#0A192F] shadow-xs"
                      : "bg-white text-[#44474D] border-[#E2E8F0] hover:bg-[#eff4ff]"
                  }`}
                >
                  {pct}% Deposit
                </button>
              ))}
            </div>
          </div>

          {/* Repayment Term Selector */}
          <div className="mb-8">
            <label className="block text-[13px] font-semibold text-[#0A192F] mb-2">
              Repayment Duration &amp; APR Terms
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { term: 12, label: "12 Months", badge: "0% APR Interest-Free" },
                { term: 24, label: "24 Months", badge: "9.9% APR Representative" },
                { term: 36, label: "36 Months", badge: "9.9% APR Representative" },
                { term: 60, label: "60 Months", badge: "14.9% APR Extended" },
              ].map((item) => (
                <button
                  key={item.term}
                  type="button"
                  onClick={() => setTermMonths(item.term)}
                  className={`p-3 text-left rounded border transition-all cursor-pointer ${
                    termMonths === item.term
                      ? "bg-[#0A192F] text-white border-[#0A192F] shadow-xs"
                      : "bg-white text-[#44474D] border-[#E2E8F0] hover:bg-[#eff4ff]"
                  }`}
                >
                  <span
                    className={`block text-[13px] font-bold ${
                      termMonths === item.term ? "text-white" : "text-[#0A192F]"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`block text-[10px] mt-0.5 ${
                      termMonths === item.term ? "text-[#C5A880]" : "text-[#725b38]"
                    }`}
                  >
                    {item.badge}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Breakdown Output */}
          <div className="p-6 rounded-md bg-[#0A192F] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] uppercase tracking-wider text-[#C5A880] font-semibold">
                  Monthly Repayment
                </span>
                {termMonths === 12 && (
                  <span className="text-[10px] font-bold bg-[#2D5A46] text-white px-2 py-0.5 rounded">
                    0% INTEREST FREE
                  </span>
                )}
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-mono text-3xl md:text-4xl font-bold text-white tnum">
                  £{monthlyPayment.toLocaleString("en-GB")}
                </span>
                <span className="text-white/70 text-[14px]">/ month</span>
              </div>
              <div className="text-[11px] text-white/70 mt-2 space-y-0.5 font-mono">
                <p>Deposit paid: £{depositAmount.toLocaleString("en-GB")} • Total repayable: £{totalRepayable.toLocaleString("en-GB")}</p>
                <p>Interest cost: £{Math.max(0, totalInterest).toLocaleString("en-GB")}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                type="button"
                onClick={() => onOpenConsultation?.("surgery")}
                className="w-full sm:w-auto h-11 px-6 bg-[#C5A880] text-[#0A192F] font-semibold text-[13px] rounded-[4px] hover:bg-[#d6be9a] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Check Eligibility (Soft Search)</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#64748B]">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#2D5A46]">verified</span>
              Regulated by Financial Conduct Authority (FCA) via Chrysalis Finance
            </span>
            <span>Zero Impact on Credit Score for Initial Soft Check</span>
          </div>
        </div>
      </div>
    </div>
  );
}
