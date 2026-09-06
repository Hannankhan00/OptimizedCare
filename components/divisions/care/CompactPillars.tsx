"use client";

import React, { useState } from "react";

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  points: string[];
  icon: string;
  image: string;
}

const pillars: Pillar[] = [
  {
    id: "pbs",
    title: "Positive Behaviour Support",
    subtitle: "Evidence-Based Empathy Over Restriction",
    badge: "Clinical Framework",
    icon: "psychology_alt",
    description:
      "Reducing distressed and challenging behaviours not through sanction or sedation, but by understanding communication needs, enriching daily sensory environments, and dramatically uplifting quality of life.",
    points: [
      "Functional behavioral analysis by qualified PBS practitioners",
      "De-escalation strategies tailored to individual triggers",
      "Focus on communication barriers and unmet emotional needs",
      "Restraint reduction network (RRN) compliant governance",
    ],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "active-support",
    title: "Active Support",
    subtitle: "Meaningful Participation in Everyday Life",
    badge: "Person-Centred Action",
    icon: "pan_tool_alt",
    description:
      "A proactive methodology ensuring people with severe learning disabilities and complex needs are never passive recipients of care, but active co-creators in cooking, cleaning, gardening, and community errands.",
    points: [
      "Breaking tasks into manageable, celebrated micro-steps",
      "Fostering pride, daily routine ownership, and physical dexterity",
      "Strengthening social inclusion and genuine reciprocal relationships",
      "Eliminating the culture of over-reliance on support workers",
    ],
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "positive-risk",
    title: "Positive Risk Taking & Adventure",
    subtitle: "Hiking, Climbing & Living Without Fear",
    badge: "Community Life",
    icon: "terrain",
    description:
      "In a world where vulnerable individuals are often wrapped in cotton wool, our service enables clients to safely take calculated risks — experiencing the thrill and confidence of real outdoor pursuits.",
    points: [
      "Guided hiking & trail navigation in the Peak District",
      "Supervised indoor rock climbing and bouldering sessions",
      "Equestrian therapy, horse riding & grooming experiences",
      "Open-water kayaking, canoeing, boating and swimming",
    ],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "learning-hub",
    title: "The Learning Hub",
    subtitle: "Interactive Life Skills & Vocational Growth",
    badge: "Lifelong Education",
    icon: "school",
    description:
      "An inclusive, stimulating environment fostering practical digital literacy, money handling, cooking masterclasses, and creative arts — unlocking potential rather than highlighting limitations.",
    points: [
      "Digital tablets & assistive communication software training",
      "Practical domestic cooking, kitchen hygiene & nutritional wellness",
      "Budgeting workshops and public transit navigation practice",
      "Creative music, art therapy, and sensory development rooms",
    ],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CompactPillars() {
  const [activeTab, setActiveTab] = useState(0);
  const current = pillars[activeTab];

  return (
    <section className="w-full py-20 md:py-28 bg-white border-b border-[#E5E5EA]">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block p-1 rounded-full bg-[#E5E5EA]/60 ring-1 ring-black/5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0D5C3A]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0D5C3A]">
                Our Care Philosophy
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#1D1D1F] tracking-tight leading-[1.12] text-balance">
            Nurturing Potential Rather Than Defining Limitations.
          </h2>

          <p className="text-[17px] sm:text-[18px] text-[#6E6E73] font-normal leading-relaxed text-pretty">
            Our care philosophy combines evidence-based psychological frameworks with real-world adventure. Here is how we transform lives every single day.
          </p>
        </div>

        {/* Apple Segmented Controller */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E5EA] flex flex-wrap items-center justify-center gap-1.5 max-w-full">
            {pillars.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#0D5C3A] text-white shadow-sm"
                    : "text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-white/60"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {p.icon}
                </span>
                <span>{p.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Apple Double-Bezel Showcase Feature */}
        <div className="p-2.5 sm:p-4 rounded-[2.5rem] bg-[#F5F5F7] ring-1 ring-black/5">
          <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Descriptive Breakdown */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#0D5C3A] text-[12px] font-semibold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C3A]" />
                  <span>{current.badge}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-[17px] font-medium text-[#0D5C3A]">
                    {current.subtitle}
                  </p>
                </div>

                <p className="text-[16px] text-[#555] leading-relaxed">
                  {current.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-3 pt-2">
                  {current.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[#0D5C3A] text-[13px]">
                          check
                        </span>
                      </div>
                      <span className="text-[14px] text-[#222] font-medium leading-normal">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="#contact-compact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0D5C3A] text-white text-[14px] font-medium hover:bg-[#0A4A2E] transition-colors shadow-xs"
                  >
                    <span>Discuss Individualised Pathway</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Imagery Showcase */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-[#E5E5EA] shadow-md group">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[11px] uppercase tracking-wider text-[#A7F3D0] font-semibold">
                      Real Community Impact
                    </p>
                    <p className="text-[14px] font-medium">
                      Tailored risk assessments ensuring safety and self-growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
