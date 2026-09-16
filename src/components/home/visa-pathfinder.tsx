import { useState } from "react";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { SlideIn } from "@/components/motion-wrapper";

const educationLevels = [
  { id: "hsc", label: "HSC / Alim / Equivalent", subtitle: "Undergrad Abroad & IELTS" },
  { id: "bachelor", label: "Bachelor's / Diploma", subtitle: "Master's, Europe & PSW Track" },
  {
    id: "masters",
    label: "Master's / Professional",
    subtitle: "Postgraduate & Skilled Migration",
  },
];

const englishProficiency = [
  { id: "ielts", label: "Cambridge IELTS (Target 7.5+)", badge: "Flagship Course" },
  { id: "mock", label: "Audio Lab CBT Mock Test (300 BDT)", badge: "Special Facility" },
  { id: "spoken", label: "Spoken English & Fluency", badge: "Practical Speaking" },
  { id: "kids", label: "Kids English Academy (Ages 5–14)", badge: "Phonics & Junior Care" },
];

const destinationPreferences = [
  {
    id: "portugal",
    name: "Portugal",
    flag: "🇵🇹",
    tag: "Schengen Gateway & PR",
    partner: "Affordable Public Unis",
  },
  {
    id: "czech",
    name: "Czech Republic",
    flag: "🇨🇿",
    tag: "Central European Hub",
    partner: "Top Public Universities",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    tag: "1-Yr Masters / 2-Yr PSW",
    partner: "Direct Admissions",
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
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    tag: "Tuition-Free & Research",
    partner: "Public Universities",
  },
];

export function VisaPathfinder() {
  const { open } = useRegisterModal();
  const [eduLevel, setEduLevel] = useState("bachelor");
  const [english, setEnglish] = useState("ielts");
  const [destination, setDestination] = useState("portugal");

  // Dynamic computation logic
  const getMatchData = () => {
    if (english === "mock") {
      return {
        matchScore: 100,
        title: "Audio Lab CBT Mock Test (300 BDT)",
        headline: "Computer-Based Real Exam Simulation with Individual Headsets",
        timeline: "Every Week at Kushtia Campus",
        scholarship: "Only 300 BDT per test with Immediate Diagnostic Band Evaluation",
        moiAccepted: "Listening, Reading, Writing & 1-on-1 Speaking",
        partnerNote:
          "Take real exam feel in our state-of-the-art audio lab at Old Kataikhana More, Kushtia. Individual sound isolation headsets eliminate echo.",
        actionType: "course",
      };
    }

    if (english === "spoken") {
      return {
        matchScore: 98,
        title: "Kushtia IELTS Care Spoken English Fluency",
        headline: "Interactive Fluency, Pronunciation & Job Interview Confidence",
        timeline: "2 Months Intensive Practice",
        scholarship: "Free Speaking Level Assessment & Practice Materials",
        moiAccepted: "Practical Everyday & Professional Corporate Communication",
        partnerNote:
          "Conducted at our Kushtia campus with daily conversational drills, presentation sessions, and public speaking confidence building.",
        actionType: "course",
      };
    }

    if (english === "kids") {
      return {
        matchScore: 100,
        title: "Kids English Academy (Ages 5–14)",
        headline: "Fun, Creative & Child-Centric English Learning (Ages 5–14)",
        timeline: "3 Months Interactive Batches",
        scholarship: "Free Trial Class & Parent Orientation",
        moiAccepted: "Phonics, Storytelling & Spoken Habits",
        partnerNote:
          "Child-friendly interactive classrooms with caring, patient instructors at 169/4 Mahatab Uddin Road, Old Kataikhana More, Kushtia.",
        actionType: "course",
      };
    }

    if (destination === "portugal") {
      return {
        matchScore: 99,
        title: "Portugal European Schengen Study Pathway",
        headline: "Affordable Higher Education, Part-Time Work & Schengen Residence Card",
        timeline: "Fall & Spring Intakes Open",
        scholarship: "Affordable Tuition (€1,500 – €3,500/year) + Work Rights",
        moiAccepted: "Public Universities in Lisbon, Porto, Coimbra, Aveiro",
        partnerNote:
          "Our flagship European destination. Complete assistance with documentation, university admissions, and VFS Global Schengen student visa filing from Kushtia.",
        actionType: "abroad",
      };
    }

    if (destination === "czech") {
      return {
        matchScore: 98,
        title: "Czech Republic European University Track",
        headline: "Prestigious Central European Public Universities & High Safety",
        timeline: "September & February Intakes",
        scholarship: "Low Living Costs & High Student Employment Opportunities",
        moiAccepted: "English-Taught Bachelor's & Master's Programs",
        partnerNote:
          "Full visa and document nostrification guidance from Kushtia IELTS Care campus.",
        actionType: "abroad",
      };
    }

    if (destination === "uk") {
      return {
        matchScore: 98,
        title: "UK Direct University Admission",
        headline: "1-Year Master's, 2-Year PSW & Fast CAS Turnaround",
        timeline: "Offer Letter in 1–2 Weeks",
        scholarship: "Up to £2,000 – £4,000 International Bursaries",
        moiAccepted: "IELTS 6.5+ or MOI Options",
        partnerNote:
          "Kushtia IELTS Care provides complete visa file auditing and 1-on-1 embassy mock interview coaching in Kushtia.",
        actionType: "abroad",
      };
    }

    if (destination === "canada") {
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
      matchScore: 99,
      title: "Cambridge IELTS Preparation Batch",
      headline: "Intensive IELTS Coaching (Target Band 7.5+, Audio Lab CBT Mocks)",
      timeline: "2 to 3 Months to Band 7.5+",
      scholarship: "Free Diagnostic Mock Test & Detailed Writing Review",
      moiAccepted: "British Council & IDP Aligned Curriculum",
      partnerNote:
        "Conducted at Old Kataikhana More, Kushtia with audio lab individual headsets, Cambridge syllabus, and 1-on-1 speaking evaluations.",
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
            <span>Kushtia IELTS Care Eligibility & Pathway Calculator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Find Your Ideal <span className="text-amber-500">IELTS & Study Pathway</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium font-bangla">
            আপনার শিক্ষাগত যোগ্যতা ও লক্ষ্য সিলেক্ট করে ক্যামব্রিজ আইইএলটিএস, অডিও ল্যাব মক টেস্ট (৩০০ টাকা) অথবা পর্তুগাল/ইউরোপে উচ্চশিক্ষার সুযোগ তাৎক্ষণিকভাবে যাচাই করুন।
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
                    `Hello Kushtia IELTS Care! My calculated pathway is ${match.title} with ${match.matchScore}% match. Please guide me on new batch schedules and admissions.`,
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
