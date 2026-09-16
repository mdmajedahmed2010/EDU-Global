import { useState } from "react";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { useRegisterModal } from "@/components/register-modal";
import { company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

const roadmapStages = [
  {
    step: "01",
    title: "Free Profile & English Diagnostic Assessment",
    timeline: "Day 0 – 2",
    badge: "Personalized Study Plan",
    desc: "Comprehensive evaluation of your educational background, current English proficiency level, and study abroad ambitions (Portugal, Czech Republic, UK, Canada, Australia) by Kushtia IELTS Care advisors.",
    checklist: [
      "Academic Certificate Review",
      "Free English Proficiency & Band Evaluation",
      "Tailored IELTS & Destination Roadmap",
    ],
    counselorTip:
      `Visit our center at 169/4, Mahatab Uddin Road, Old Kataikhana More, Kushtia, or connect via WhatsApp (${company.phones[0]} / ${company.phones[1]}).`,
  },
  {
    step: "02",
    title: "Cambridge IELTS Coaching & Audio Lab Practice",
    timeline: "Weeks 1 – 10",
    badge: "Modern Audio Lab",
    desc: "Join interactive Cambridge IELTS batches with individual headphones in our dedicated listening audio lab, intensive speaking sessions, and targeted writing feedbacks.",
    checklist: [
      "Individual Headset Listening Audio Lab",
      "1-on-1 Cambridge Speaking Evaluations",
      "Structured Grammar & Writing Templates",
    ],
    counselorTip:
      "Individual headphone practice eliminates audio distortion and guarantees realistic exam conditions to secure Band 7.0+.",
  },
  {
    step: "03",
    title: "Computer-Based & Paper Mock Tests (300 BDT)",
    timeline: "Weeks 8 – 12",
    badge: "300 BDT Exam Experience",
    desc: "Take full-length Cambridge computer-based and paper-based mock tests in our lab for only 300 BDT with immediate diagnostic score breakdowns.",
    checklist: [
      "Authentic Exam Simulation Interface",
      "Immediate Band Score & Error Feedback",
      "Final Band Booster Strategy Sessions",
    ],
    counselorTip:
      "Testing in real exam conditions before your official test date minimizes exam anxiety and boosts time management.",
  },
  {
    step: "04",
    title: "University Admission & Document Auditing",
    timeline: "Weeks 12 – 16",
    badge: "European University Offers",
    desc: "Direct applications to accredited universities in Portugal (Lisbon, Porto, Coimbra, Aveiro), Czech Republic, and top English-speaking nations with scholarship guidance.",
    checklist: [
      "Official Offer Letter / Admission Acceptance",
      "Tuition Fee Transfer Verification",
      "Document Legalization & Apostille Support",
    ],
    counselorTip:
      "Our counselors verify all educational certificates and bank solvency documents to ensure 100% compliance with Schengen visa directives.",
  },
  {
    step: "05",
    title: "VFS / Embassy File Lodgement & Pre-Departure",
    timeline: "Prior to Travel",
    badge: "Schengen Visa Success",
    desc: "Comprehensive visa dossier filing, consular interview preparation, flight bookings, and arrival guidance in Portugal and across Europe.",
    checklist: [
      "VFS Global Appointment & Visa Submission",
      "Pre-Departure Briefing & Currency Guidance",
      "Lifelong Kushtia IELTS Care Alumni Network",
    ],
    counselorTip:
      "We prepare you for life abroad with detailed orientation on European residence cards, part-time student work, and accommodation.",
  },
];

export function IlluminatedFlightPath() {
  const [activeStage, setActiveStage] = useState(0);
  const { open } = useRegisterModal();
  const current = roadmapStages[activeStage] ?? roadmapStages[0]!;

  return (
    <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
      <SlideIn direction="up" distance={30}>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-800 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Transparent 5-Stage Roadmap</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            From Free File Opening to <span className="text-sky-600">Global Campus</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Tap each milestone below to explore the verified timeline and counselor checkpoints.
          </p>
        </div>
      </SlideIn>

      {/* Horizontal Connected Stepper */}
      <div className="relative mb-8">
        <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-slate-200 -z-0" />
        <div
          className="hidden md:block absolute top-6 left-12 h-0.5 bg-sky-600 transition-all duration-500 -z-0"
          style={{ width: `${(activeStage / (roadmapStages.length - 1)) * 80}%` }}
        />

        <StaggerContainer
          staggerDelay={0.07}
          className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10"
        >
          {roadmapStages.map((stage, idx) => (
            <StaggerItem key={stage.step} direction="up" distance={22}>
              <button
                type="button"
                onClick={() => setActiveStage(idx)}
                className={cn(
                  "w-full rounded-2xl p-3 sm:p-4 text-left transition-all border cursor-pointer flex flex-col justify-between",
                  activeStage === idx
                    ? "bg-slate-900 text-white border-sky-500 shadow-lg scale-102"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={cn(
                      "text-xs font-black px-2 py-0.5 rounded-md",
                      activeStage === idx ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-800",
                    )}
                  >
                    Stage {stage.step}
                  </span>
                  <span className="text-[0.65rem] font-bold opacity-60">{stage.timeline}</span>
                </div>
                <div className="font-bold text-xs sm:text-sm leading-snug line-clamp-1">
                  {stage.title}
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Active Stage Detailed Breakdown */}
      <div className="card-clean rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-sm max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white font-black text-lg shadow-md">
              {current.step}
            </span>
            <div>
              <span className="badge-clean badge-blue text-[0.7rem]">{current.badge}</span>
              <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 mt-1">
                {current.title}
              </h3>
            </div>
          </div>
          <div className="rounded-xl bg-slate-50 px-3.5 py-1.5 border border-slate-200 text-xs font-semibold text-slate-700 self-start md:self-auto">
            ⏱ Typical Timeline: <strong className="text-slate-900">{current.timeline}</strong>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {current.desc}
            </p>

            <div className="space-y-2">
              <span className="text-[0.7rem] font-bold uppercase tracking-wider text-slate-400">
                Key Deliverables & Action Items:
              </span>
              <div className="space-y-1.5">
                {current.checklist.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-800">
                    <IconCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-sky-50/50 border border-sky-200/80 p-5 space-y-4">
            <div className="flex items-start gap-2.5">
              <span className="text-lg">💡</span>
              <div>
                <p className="text-xs font-bold text-sky-950">Counselor Pro-Tip</p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {current.counselorTip}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={open}
                className="btn-shimmer w-full rounded-xl bg-sky-600 hover:bg-sky-700 text-white py-2.5 text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book 100% Free Assessment</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello Kushtia IELTS Care! I am currently at Stage ${current.step} (${current.title}). Please guide me on next steps.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-xl border border-emerald-600/30 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 py-2.5 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Counselor Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
