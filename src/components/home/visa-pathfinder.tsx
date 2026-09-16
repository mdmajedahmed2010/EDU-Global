import { useState } from "react";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { SlideIn } from "@/components/motion-wrapper";

const educationLevels = [
  { id: "hsc", label: "HSC / A-Levels / Equivalent", subtitle: "Undergraduate Abroad & Foundation" },
  { id: "bachelor", label: "Bachelor's / Honors / Diploma", subtitle: "Master's & Post-Study Work Visa" },
  {
    id: "masters",
    label: "Master's / Professional Experience",
    subtitle: "Postgraduate & Family Relocation",
  },
];

const englishProficiency = [
  { id: "ielts", label: "IELTS (Academic & General)", badge: "Cash Back Offer" },
  { id: "spoken", label: "Spoken English & Fluency", badge: "Interview Prep" },
  { id: "kids", label: "Kids' English Academy", badge: "Ages 5–14" },
  { id: "moi", label: "Without IELTS (MOI Track)", badge: "Europe & Dubai" },
];

const destinationPreferences = [
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    tag: "1-Yr Masters / Family",
    partner: "Top UK Universities",
  },
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    tag: "STEM OPT 3 Years",
    partner: "High Scholarships",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    tag: "Spouse Work Rights",
    partner: "Go8 & Tech Unis",
  },
  {
    id: "hungary",
    name: "Hungary",
    flag: "🇭🇺",
    tag: "Low Tuition / Schengen",
    partner: "Tuition After Visa",
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    tag: "PGWP & PR Pathways",
    partner: "Public DLIs",
  },
  {
    id: "finland",
    name: "Finland",
    flag: "🇫🇮",
    tag: "30 Hrs/Wk Work Rights",
    partner: "Nordic Happiness",
  },
  {
    id: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    tag: "Twin Degrees / Low Cost",
    partner: "Fast Visa Approval",
  },
  {
    id: "dubai",
    name: "Dubai (UAE)",
    flag: "🇦🇪",
    tag: "100% Visa / No IELTS",
    partner: "Work & Study Track",
  },
];

export function VisaPathfinder() {
  const { open } = useRegisterModal();
  const [eduLevel, setEduLevel] = useState("bachelor");
  const [english, setEnglish] = useState("ielts");
  const [destination, setDestination] = useState("uk");

  // Dynamic computation logic
  const getMatchData = () => {
    if (english === "kids") {
      return {
        matchScore: 100,
        title: "Kids' English Academy (Ages 5–14)",
        headline: "Phonics, Interactive Storytelling & Confident Speaking for Children",
        timeline: "Ongoing Weekend & After-School Batches",
        scholarship: "Free Parent Orientation & Child Level Assessment",
        moiAccepted: "Joyful English learning, correct British pronunciation & rhymes",
        partnerNote:
          "Conducted at our modern, child-friendly campus at House 23, Road 2, Sector 3, Uttara, Dhaka with gentle, patient teachers.",
        actionType: "course",
      };
    }

    if (english === "spoken") {
      return {
        matchScore: 98,
        title: "Spoken English & Communication Mastery",
        headline: "Break Speaking Hesitation, Refine Accent & Master Embassy Interviews",
        timeline: "2 Months Intensive Fluency Drills",
        scholarship: "Free Speaking Level Evaluation & Presentation Coaching",
        moiAccepted: "Situational Roleplays, Group Discussions & Daily Dialogue",
        partnerNote:
          "Interactive speaking sessions at our Sector 3 Uttara office designed for students, job holders, and visa applicants.",
        actionType: "course",
      };
    }

    if (destination === "uk") {
      return {
        matchScore: 99,
        title: "United Kingdom Master's & Family Move",
        headline: "1-Year Fast Master's, 2-Year Graduate Route PSW & IELTS Cashback on Visa",
        timeline: "Offer Letter in 1–2 Weeks · Major Intakes: Jan, May, Sep",
        scholarship: "£1,500 – £5,000 University Merit Bursaries + IELTS Cashback",
        moiAccepted: "IELTS 6.0–6.5 or MOI acceptance in select partner universities",
        partnerNote:
          "Higher Study Counselors Bangladesh provides full spouse/dependent visa processing, bank solvency guidance, and 1-on-1 consular mock interviews.",
        actionType: "abroad",
      };
    }

    if (destination === "hungary") {
      return {
        matchScore: 98,
        title: "Hungary European Schengen Degree Track",
        headline: "Low Tuition Fees (€1,800–€3,500/yr), Tuition After Visa & 29 Schengen Countries",
        timeline: "Fall (September) & Spring (February) Intakes",
        scholarship: "Low Cost of Living + Stipendium Hungaricum Opportunities",
        moiAccepted: "MOI Accepted / With or Without IELTS",
        partnerNote:
          "Featured on our official banner. Study gap accepted with job proof. Complete documentation and Schengen visa assistance from Uttara Dhaka HQ.",
        actionType: "abroad",
      };
    }

    if (destination === "australia") {
      return {
        matchScore: 97,
        title: "Australia Master's & Spouse Full Work Rights",
        headline: "Post-Study Work Visas up to 4+ Years & Legal Spouse Full-Time Employment",
        timeline: "February & July Intakes",
        scholarship: "20% – 30% International Student Merit Reductions",
        moiAccepted: "IELTS 6.5+ / PTE Academic Accepted",
        partnerNote:
          "Subclass 500 visa filing, Genuine Student (GS) formulation, and joint dependent file processing by senior HSC BD counselors.",
        actionType: "abroad",
      };
    }

    if (destination === "usa") {
      return {
        matchScore: 96,
        title: "USA STEM Degree & 3-Year OPT Work Rights",
        headline: "World-Class State Universities with Substantial Merit Scholarships & F-1 Visa",
        timeline: "Fall (August) & Spring (January) Intakes",
        scholarship: "$3,000 – $15,000 / year Institutional Merit Awards",
        moiAccepted: "IELTS 6.5+ / Duolingo / GRE waivers available",
        partnerNote:
          "Comprehensive F-1 visa interview training and DS-160 document verification at our Uttara Dhaka office.",
        actionType: "abroad",
      };
    }

    if (destination === "dubai" || destination === "malaysia") {
      return {
        matchScore: 100,
        title: "Fast Visa & Budget-Friendly Higher Education",
        headline: "100% Visa Approvals, No IELTS Required (MOI), Low Fees & Twin Degrees",
        timeline: "Rapid 2–3 Weeks Visa Turnaround · Monthly Rolling Intakes",
        scholarship: "High Part-time Earning Potential to Cover Living Costs",
        moiAccepted: "Medium of Instruction (MOI) 100% Accepted",
        partnerNote:
          "Official banner destination. No complicated bank statements required. Tuition fee after visa in select Dubai universities.",
        actionType: "abroad",
      };
    }

    return {
      matchScore: 99,
      title: "Cambridge IELTS Preparation + Visa Cashback",
      headline: "Master Listening, Reading, Writing & Speaking (Target Band 7.5+)",
      timeline: "2.5 to 3 Months Intensive Coaching",
      scholarship: "100% IELTS Test Fee Cashback Upon Visa Approval with HSC BD",
      moiAccepted: "Cambridge Authentic Test Materials & British Council Aligned",
      partnerNote:
        "Taught at House 23, Road 2, Sector 3, Uttara, Dhaka with 1-on-1 speaking interview simulations and weekly full-length mock exams.",
      actionType: "course",
    };
  };

  const match = getMatchData();

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-300 px-3.5 py-1 text-xs font-bold text-amber-800 mb-3">
            <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Higher Study Counselors Bangladesh · Eligibility Pathfinder</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#161b38] tracking-tight leading-tight">
            Find Your Ideal <span className="text-amber-500">Study & Visa Pathway</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium font-bangla">
            আপনার শিক্ষাগত যোগ্যতা, বর্তমান ইংরেজি স্তর ও কাঙ্ক্ষিত দেশ সিলেক্ট করে ভিসা সম্ভাবনা, IELTS ক্যাশ ব্যাক ও ফ্যামিলি মুভ সুবিধা তাৎক্ষণিকভাবে যাচাই করুন।
          </p>
        </div>

        {/* 2-Column Pathfinder Architecture */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start max-w-5xl mx-auto">
          {/* Left: Input Selection Cards */}
          <div className="space-y-6">
            {/* 1. Academic Level */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 block mb-3">
                1. Your Current Academic Qualification
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {educationLevels.map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setEduLevel(lvl.id)}
                    className={cn(
                      "rounded-2xl p-3.5 text-left border transition-all cursor-pointer",
                      eduLevel === lvl.id
                        ? "border-amber-500 bg-amber-50/60 shadow-xs ring-1 ring-amber-500"
                        : "border-slate-200 hover:border-slate-300 bg-white",
                    )}
                  >
                    <div className="font-bold text-xs text-slate-900">{lvl.label}</div>
                    <div className="text-[0.68rem] text-slate-500 mt-0.5">{lvl.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Language Status */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 block mb-3">
                2. Target Program / Language Status
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {englishProficiency.map((eng) => (
                  <button
                    key={eng.id}
                    type="button"
                    onClick={() => setEnglish(eng.id)}
                    className={cn(
                      "rounded-2xl p-3.5 text-left border transition-all cursor-pointer flex items-center justify-between",
                      english === eng.id
                        ? "border-amber-500 bg-amber-50/60 shadow-xs ring-1 ring-amber-500"
                        : "border-slate-200 hover:border-slate-300 bg-white",
                    )}
                  >
                    <div>
                      <div className="font-bold text-xs text-slate-900">{eng.label}</div>
                      <span className="inline-block mt-1 rounded bg-slate-100 px-2 py-0.5 text-[0.62rem] font-semibold text-slate-700">
                        {eng.badge}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Preferred Destination */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 block mb-3">
                3. Preferred Destination (Official Banner Countries)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {destinationPreferences.map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setDestination(dest.id)}
                    className={cn(
                      "rounded-2xl p-3 text-left border transition-all cursor-pointer",
                      destination === dest.id
                        ? "border-amber-500 bg-amber-50/50 shadow-xs ring-1 ring-amber-500"
                        : "border-slate-200 hover:border-slate-300 bg-white",
                    )}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                      <span>{dest.flag}</span>
                      <span className="truncate">{dest.name}</span>
                    </div>
                    <div className="text-[0.65rem] text-slate-500 mt-1 truncate">{dest.tag}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Dynamic Match Assessment Card */}
          <div className="sticky top-24">
            <div className="rounded-3xl border-2 border-amber-500/30 bg-gradient-to-br from-white via-[#FDFBF7] to-white p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-5">
                <div>
                  <span className="text-[0.65rem] font-black uppercase tracking-widest text-amber-700">
                    Official Assessment
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#161b38] mt-0.5">
                    {match.title}
                  </h3>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-display text-2xl font-black text-emerald-600">
                    {match.matchScore}%
                  </span>
                  <span className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest">
                    Match Ratio
                  </span>
                </div>
              </div>

              {/* Assessment Breakdown */}
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 font-semibold block mb-0.5">
                    Primary Opportunity:
                  </span>
                  <p className="font-bold text-slate-900 text-sm leading-snug">{match.headline}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="rounded-2xl bg-white border border-slate-100 p-3 shadow-2xs">
                    <span className="text-slate-400 text-[0.68rem] block mb-0.5 font-semibold">
                      Estimated Timeline
                    </span>
                    <span className="font-bold text-slate-800 text-xs">{match.timeline}</span>
                  </div>

                  <div className="rounded-2xl bg-white border border-slate-100 p-3 shadow-2xs">
                    <span className="text-slate-400 text-[0.68rem] block mb-0.5 font-semibold">
                      Opportunity Potential
                    </span>
                    <span className="font-bold text-emerald-700 text-xs">{match.scholarship}</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-50/70 border border-amber-200 p-3.5">
                  <span className="text-amber-900 font-bold block mb-1">
                    Language & Pathway Requirements:
                  </span>
                  <span className="text-slate-700 font-medium">{match.moiAccepted}</span>
                </div>

                <p className="text-slate-600 font-medium text-[0.75rem] leading-relaxed italic">
                  &quot;{match.partnerNote}&quot;
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
                <button
                  type="button"
                  onClick={open}
                  className="w-full rounded-xl bg-[#161b38] hover:bg-[#242c56] text-amber-400 py-3 text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-amber-500/30"
                >
                  <span>Apply for 100% Free Profile Assessment</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Hello Higher Study Counselors Bangladesh! My calculated pathway is ${match.title} with ${match.matchScore}% match. Please guide me on next admission intakes and IELTS cashback benefits.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl border border-emerald-600/30 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 py-3 text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Discuss With Counselor on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
