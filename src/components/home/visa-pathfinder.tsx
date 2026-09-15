import { useState } from "react";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { SlideIn } from "@/components/motion-wrapper";

const educationLevels = [
  { id: "hsc", label: "HSC / Alim / Equivalent", subtitle: "Language School & Undergrad" },
  { id: "bachelor", label: "Bachelor's / Diploma", subtitle: "Master's, SSW & Career Visa" },
  {
    id: "masters",
    label: "Master's / Skilled Professional",
    subtitle: "SSW Category 1 & 2 / Postgrad",
  },
];

const englishProficiency = [
  { id: "japanese", label: "Japanese Language Track (N5–N4)", badge: "Japan Managed Track" },
  { id: "ssw", label: "TITP & SSW Career Track", badge: "JFT-Basic & Trade Test" },
  { id: "ielts", label: "IELTS Academic (Band 7.0+)", badge: "Global Higher Study" },
  { id: "spoken", label: "Spoken English Mastery", badge: "Fluency & Confidence" },
  { id: "kids", label: "Kids English (Ages 5–14)", badge: "Phonics & Junior Fluency" },
];

const destinationPreferences = [
  {
    id: "japan",
    name: "Japan",
    flag: "🇯🇵",
    tag: "Japan Based & Managed",
    partner: "N5/N4 + Student & SSW Visas",
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    tag: "Tuition-Free & Ausbildung",
    partner: "Public Universities",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    tag: "1-Yr Masters / PSW",
    partner: "Fast Track CAS",
  },
  { id: "canada", name: "Canada", flag: "🇨🇦", tag: "3-Yr PGWP / Co-op", partner: "Public DLIs" },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    tag: "Top Degrees / High Wages",
    partner: "Group of Eight",
  },
  {
    id: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    tag: "Fast EMGS & Affordable",
    partner: "Branch Campuses",
  },
];

export function VisaPathfinder() {
  const { open } = useRegisterModal();
  const [eduLevel, setEduLevel] = useState("bachelor");
  const [english, setEnglish] = useState("japanese");
  const [destination, setDestination] = useState("japan");

  // Dynamic computation logic
  const getMatchData = () => {
    if (english === "japanese" || destination === "japan") {
      return {
        matchScore: 99,
        title: "Japan Student & SSW Career Pathway",
        headline: "Intensive Japanese N5/N4 Preparation & 100% Japan Standard Guidance",
        timeline: "April, July, October & January Intakes Open",
        scholarship: "Part-Time Work up to 28 hrs/wk (High Hourly Wages) + Tuition Reductions",
        moiAccepted: "Japanese Language Schools, Senmon Gakko & SSW Tracks",
        partnerNote:
          "Operated and managed directly from Japan. Complete guidance from Kadirganj, Rajshahi campus for COE filing, financial documentation, and embassy interview coaching.",
        actionType: "abroad",
      };
    }

    if (english === "ssw") {
      return {
        matchScore: 99,
        title: "Japan Specified Skilled Worker (SSW) Track",
        headline: "JFT-Basic A2 / JLPT N4 Qualification & Trade Skill Test Coaching",
        timeline: "Continuous Recruitment Cycles in Japan",
        scholarship: "Full-Time Competitive Japanese Salary & Health Benefits",
        moiAccepted: "Nursing Care, Food Service, Hospitality, Agriculture & Construction",
        partnerNote:
          "AcademiaZ Rajshahi provides targeted language training, resume formatting, and employer video interview simulations for Japan.",
        actionType: "abroad",
      };
    }

    if (english === "spoken") {
      return {
        matchScore: 98,
        title: "AcademiaZ Spoken English Fluency",
        headline: "Interactive Fluency, Pronunciation & Job Interview Confidence",
        timeline: "2 Months Intensive Practice",
        scholarship: "Free Speaking Level Assessment & Class Notes",
        moiAccepted: "Practical Everyday & Professional Corporate Communication",
        partnerNote:
          "Conducted at our Kadirganj, Rajshahi campus with interactive dialogues, debates, and public speaking drills.",
        actionType: "course",
      };
    }

    if (english === "ielts") {
      return {
        matchScore: 99,
        title: "AcademiaZ IELTS Preparation Batch",
        headline: "Intensive IELTS Coaching (Target Band 7.5+, Cambridge Mocks)",
        timeline: "2 to 3 Months to Band 7.5+",
        scholarship: "Free Diagnostic Mock Test & Detailed Writing Review",
        moiAccepted: "British Council & IDP Aligned Curriculum",
        partnerNote:
          "Conducted at Kadirganj, Rajshahi with experienced faculty, authentic Cambridge test series, and 1-on-1 speaking evaluations.",
        actionType: "course",
      };
    }

    if (english === "kids") {
      return {
        matchScore: 100,
        title: "Kids English & Phonics Foundation",
        headline: "Fun, Creative & Child-Centric English Learning (Ages 5–14)",
        timeline: "3 Months Interactive Batches",
        scholarship: "Free Trial Class & Parent Orientation",
        moiAccepted: "Phonics, Storytelling & Spoken Habits",
        partnerNote:
          "Child-friendly interactive classrooms with caring, patient instructors at Kadirganj, Greater Road, Rajshahi.",
        actionType: "course",
      };
    }

    if (destination === "germany") {
      return {
        matchScore: 97,
        title: "Germany Tuition-Free Public University Track",
        headline: "State Higher Education, Dual Ausbildung & Blocked Account Setup",
        timeline: "Winter & Summer Intakes",
        scholarship: "100% Tuition Fee Waiver at German State Universities",
        moiAccepted: "English & German Medium Programs",
        partnerNote:
          "Full counseling for public universities, Uni-Assist submissions, and blocked accounts from our Rajshahi center.",
        actionType: "abroad",
      };
    } else if (destination === "uk") {
      return {
        matchScore: 98,
        title: "UK Direct University Admission",
        headline: "1-Year Master's, 2-Year PSW & Fast CAS Turnaround",
        timeline: "Offer Letter in 1–2 Weeks",
        scholarship: "Up to £2,000 – £4,000 International Bursaries",
        moiAccepted: "IELTS 6.5+ or MOI Options",
        partnerNote:
          "AcademiaZ provides complete visa file auditing and 1-on-1 embassy mock interview coaching in Rajshahi.",
        actionType: "abroad",
      };
    } else if (destination === "canada") {
      return {
        matchScore: 96,
        title: "Canada DLI Admission & Work Permit",
        headline: "Top Designated Learning Institutions with up to 3-Year PGWP",
        timeline: "Jan, May & Sep Intakes",
        scholarship: "CAD $2,000 – $8,000 Entrance Grants",
        moiAccepted: "IELTS / PTE Accepted",
        partnerNote:
          "Paid co-op internships and post-graduation work permit guidance for global graduates.",
        actionType: "abroad",
      };
    }

    return {
      matchScore: 97,
      title: "Global Higher Education Pathway",
      headline: "Top Ranked Universities & Post-Study Work Opportunities",
      timeline: "Upcoming Intakes Ongoing",
      scholarship: "Merit Discounts & International Bursaries",
      moiAccepted: "Recognized English Language Tests",
      partnerNote:
        "Full transparent guidance from Kadirganj, Greater Road, Rajshahi.",
      actionType: "abroad",
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
            <span>AcademiaZ Eligibility & Pathway Calculator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Find Your Ideal <span className="text-amber-500">Study & Career Pathway</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium font-bangla">
            আপনার শিক্ষাগত যোগ্যতা, ভাষা দক্ষতা ও পছন্দের দেশ সিলেক্ট করে জাপানে উচ্চশিক্ষা, SSW ক্যারিয়ার অথবা IELTS/ইংলিশ কোর্সের সম্ভাবনা তাৎক্ষণিকভাবে যাচাই করুন।
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
                3. Preferred Destination
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
                        ? "border-amber-500 bg-amber-50/50 shadow-xs ring-1 ring-amber-500"
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
            <div className="rounded-3xl border-2 border-amber-500/30 bg-gradient-to-br from-white via-[#FDFBF7] to-white p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-5">
                <div>
                  <span className="text-[0.65rem] font-black uppercase tracking-widest text-amber-700">
                    Official Assessment
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-950 mt-0.5">
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
                  className="w-full rounded-xl bg-[#0a1931] hover:bg-[#0f2c59] text-amber-400 py-3 text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-amber-500/30"
                >
                  <span>Apply for 100% Free Profile Assessment</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Hello AcademiaZ Rajshahi! My calculated pathway is ${match.title} with ${match.matchScore}% match. Please guide me on new batch schedules and visa requirements.`,
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
