import { useState } from "react";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { SlideIn } from "@/components/motion-wrapper";

const educationLevels = [
  { id: "hsc", label: "HSC / A-Level / Alim", subtitle: "Undergraduate Entry" },
  { id: "bachelor", label: "Bachelor's Degree", subtitle: "Master's & Postgrad Entry" },
  {
    id: "masters",
    label: "Master's / Working Professional",
    subtitle: "Postgrad / Second Master's / Spouse",
  },
];

const englishProficiency = [
  { id: "german", label: "German Language Track (A1–B2)", badge: "Tuition-Free Germany" },
  { id: "danish", label: "Danish Language Track", badge: "Denmark Pathway" },
  { id: "ielts", label: "IELTS 6.5 – 8.0+", badge: "Direct Global Entry" },
  { id: "needcoaching", label: "Need IELTS Private Batch", badge: "10–12 Students / Batch" },
  { id: "kids", label: "Kids English (Ages 5–14)", badge: "Phonics & Spoken" },
];

const destinationPreferences = [
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    tag: "Tuition-Free Public Unis",
    partner: "APS & Goethe Prep",
  },
  {
    id: "denmark",
    name: "Denmark",
    flag: "🇩🇰",
    tag: "Scandinavian Quality",
    partner: "Danish Course Included",
  },
  {
    id: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    tag: "Zoekjaar Visa",
    partner: "High Tech Hub",
  },
  { id: "canada", name: "Canada", flag: "🇨🇦", tag: "3-Yr PGWP / Co-op", partner: "Public DLIs" },
  { id: "spain", name: "Spain", flag: "🇪🇸", tag: "Schengen Mobility", partner: "Low Tuition Campaign" },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    tag: "1-Yr Masters / PSW",
    partner: "Bursaries to £4,000",
  },
];

export function VisaPathfinder() {
  const { open } = useRegisterModal();
  const [eduLevel, setEduLevel] = useState("bachelor");
  const [english, setEnglish] = useState("german");
  const [destination, setDestination] = useState("germany");

  // Dynamic computation logic
  const getMatchData = () => {
    if (english === "german" || destination === "germany") {
      return {
        matchScore: 99,
        title: "Germany Tuition-Free Public University Track",
        headline: "Tuition-Free Public Higher Education, APS & Goethe-Institut German A1–B2",
        timeline: "Winter & Summer Intakes Open",
        scholarship: "100% Tuition Fee Waiver at German State Universities",
        moiAccepted: "English-Medium & German-Medium Programs",
        partnerNote:
          "Guided by AB STUDY HUB counselors at Commerce View Complex, Chattogram. Complete support for APS verification, blocked accounts, and Goethe German certification.",
        actionType: "abroad",
      };
    }

    if (english === "danish" || destination === "denmark") {
      return {
        matchScore: 98,
        title: "Denmark Higher Education & Career Track",
        headline: "Scandinavian World-Ranked Education & Tailored Danish Language Training",
        timeline: "Autumn & Spring Intakes Open",
        scholarship: "Post-Study Work Permits & High Standard of Living",
        moiAccepted: "English-Taught Bachelor's & Master's Degrees",
        partnerNote:
          "Exclusive Danish language instruction and student visa processing coordinated from our Chattogram headquarters.",
        actionType: "abroad",
      };
    }

    if (english === "needcoaching") {
      return {
        matchScore: 99,
        title: "AB STUDY HUB IELTS Private Batch",
        headline: "Intensive IELTS Preparation (10–12 Students / Batch, Band 7.5+ Target)",
        timeline: "2 to 3 Months to Band 7.5+",
        scholarship: "Free Mock Interview & Detailed Writing Diagnostic",
        moiAccepted: "British Council & IDP Aligned Curriculum",
        partnerNote:
          "Conducted at our Commerce View Complex, CDA Avenue, East Nasirabad studio with 1-on-1 speaking evaluations.",
        actionType: "course",
      };
    }

    if (english === "kids") {
      return {
        matchScore: 100,
        title: "Kids English & Phonics Foundation",
        headline: "Fun, Creative & Child-Centric English Learning (Ages 5–14)",
        timeline: "3 Months Interactive Batches",
        scholarship: "Sibling Discount & Free Trial Class",
        moiAccepted: "Phonics, Storytelling & Spoken Confidence",
        partnerNote:
          "Modern air-conditioned classrooms with nurturing, patient trainers at Commerce View Complex, Chattogram.",
        actionType: "course",
      };
    }

    if (destination === "uk") {
      return {
        matchScore: 98,
        title: "UK Direct University Admission",
        headline: "1-Year Master's, 2-Year PSW & Fast CAS Turnaround",
        timeline: "Offer Letter in 1–2 Weeks",
        scholarship: "Up to £2,000 – £4,000 Merit Bursaries",
        moiAccepted: "MOI Accepted for Eligible Graduates",
        partnerNote:
          "AB STUDY HUB provides complete visa file auditing and 1-on-1 embassy mock interview coaching.",
        actionType: "abroad",
      };
    } else if (destination === "canada") {
      return {
        matchScore: 95,
        title: "Canada DLI Admission & Work Permit",
        headline: "Top Designated Learning Institutions with up to 3-Year PGWP",
        timeline: "Jan, May & Sep Intakes",
        scholarship: "CAD $2,000 – $8,000 Entrance Grants",
        moiAccepted: "IELTS / PTE / Duolingo Accepted",
        partnerNote:
          "Paid co-op internships and open work permit opportunities for accompanying spouses.",
        actionType: "abroad",
      };
    } else if (destination === "spain") {
      return {
        matchScore: 97,
        title: "Spain European University Pathway",
        headline: "Affordable Tuition from €1,500/Year & 29 Schengen Countries Access",
        timeline: "Fall & Spring Intakes Open",
        scholarship: "Regional & Institutional Merit Grants",
        moiAccepted: "English-Taught Bachelor's & Master's Degrees",
        partnerNote:
          "Official dedicated campaign by AB STUDY HUB. Affordable living, part-time work rights, and fast European processing.",
        actionType: "abroad",
      };
    }

    return {
      matchScore: 96,
      title: "Netherlands High-Tech European Pathway",
      headline: "100% English-Taught Degrees & 1-Year Zoekjaar Orientation Visa",
      timeline: "September & February Intakes",
      scholarship: "Holland Scholarship (€5,000) & Merit Bursaries",
      moiAccepted: "IELTS / Academic English",
      partnerNote:
        "Europe's foremost innovation hub with exceptional global employability upon graduation.",
      actionType: "abroad",
    };
  };

  const match = getMatchData();

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-[#043E8B] mb-3">
            <IconSparkles className="w-3.5 h-3.5 text-red-600" />
            <span>AI-Driven Eligibility Calculator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Find Your Ideal <span className="text-red-600">Study Abroad Pathway</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
            Select your academic level, English background, and target country to instantly
            calculate your admission, scholarship, and visa probability.
          </p>
        </div>

        {/* 2-Column Pathfinder Architecture */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start max-w-5xl mx-auto">
          {/* Left: Input Selection Cards */}
          <div className="space-y-6">
            {/* 1. Academic Level */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-wider text-red-600 block mb-3">
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
                        ? "border-[#043E8B] bg-blue-50/60 shadow-xs ring-1 ring-[#043E8B]"
                        : "border-slate-200 hover:border-slate-300 bg-white",
                    )}
                  >
                    <div className="font-bold text-xs text-slate-900">{lvl.label}</div>
                    <div className="text-[0.68rem] text-slate-500 mt-0.5">{lvl.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. English Proficiency */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-wider text-red-600 block mb-3">
                2. English Proficiency Status
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
                        ? "border-[#043E8B] bg-blue-50/60 shadow-xs ring-1 ring-[#043E8B]"
                        : "border-slate-200 hover:border-slate-300 bg-white",
                    )}
                  >
                    <div>
                      <div className="font-bold text-xs text-slate-900">{eng.label}</div>
                      <span className="inline-block mt-1 rounded bg-slate-100 px-2 py-0.5 text-[0.62rem] font-semibold text-slate-600">
                        {eng.badge}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Preferred Destination */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-wider text-red-600 block mb-3">
                3. Preferred Study Destination
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {destinationPreferences.map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setDestination(dest.id)}
                    className={cn(
                      "rounded-2xl p-3 text-left border transition-all cursor-pointer",
                      destination === dest.id
                        ? "border-red-600 bg-red-50/50 shadow-xs ring-1 ring-red-600"
                        : "border-slate-200 hover:border-slate-300 bg-white",
                    )}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                      <span>{dest.flag}</span>
                      <span>{dest.name}</span>
                    </div>
                    <div className="text-[0.65rem] text-slate-500 mt-1 truncate">{dest.tag}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Dynamic Match Assessment Card */}
          <div className="sticky top-24">
            <div className="rounded-3xl border-2 border-red-500/30 bg-gradient-to-br from-white via-[#F0F5FC]/50 to-white p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-5">
                <div>
                  <span className="text-[0.65rem] font-black uppercase tracking-widest text-red-600">
                    Official Assessment
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
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
                      Scholarship Potential
                    </span>
                    <span className="font-bold text-emerald-700 text-xs">{match.scholarship}</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-blue-50/70 border border-blue-100 p-3.5">
                  <span className="text-[#043E8B] font-bold block mb-1">
                    English & Admission Flexibility:
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
                  className="btn-shimmer w-full rounded-xl bg-red-600 hover:bg-red-700 text-white py-3 text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for 100% Free File Opening</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Hello AB STUDY HUB! My calculated pathway is ${match.title} with ${match.matchScore}% match. Please guide me on admissions and language batches.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl border border-emerald-600/30 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 py-3 text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Discuss With Advisor on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
