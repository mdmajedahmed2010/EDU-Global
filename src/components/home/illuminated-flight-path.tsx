import { useState } from "react";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { useRegisterModal } from "@/components/register-modal";
import { company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

const roadmapStages = [
  {
    step: "01",
    title: "Free Profile Assessment & Destination Selection",
    timeline: "Day 0 – 2",
    badge: "Free Consultation",
    desc: "Comprehensive evaluation of your academic history, study gap, English level, and global study ambitions (UK, Europe, USA, Canada, Australia, New Zealand, Japan, South Korea) by EDU Global.",
    checklist: [
      "Academic Transcript & Certificate Audit",
      "Long Study Gap & Low CGPA Evaluation",
      "Tailored Destination & Budget Planning",
    ],
    counselorTip:
      `Visit our Head Office at Keari Plaza, 4th Floor (Lift-3), Road 8/A, Satmasjid Road, Dhanmondi, Dhaka, or connect via WhatsApp (${company.phones[0]} / ${company.phones[1]}).`,
  },
  {
    step: "02",
    title: "Language Academy: IELTS, Spoken, Kids & Japanese",
    timeline: "Weeks 1 – 8",
    badge: "Language Academy",
    desc: "Join our intensive IELTS Academic/General (Band 7.5+), Spoken English Fluency, Kids English & Phonics (ages 5–14), or Japanese Language courses.",
    checklist: [
      "Cambridge Certified Trainers & Mock Tests",
      "Target Band 7.5+ Strategy Modules",
      "Kids Phonics & Spoken Fluency Programs",
    ],
    counselorTip:
      "Our language courses are designed to meet foreign university requirements, career demands, and visa interview standards with confidence.",
  },
  {
    step: "03",
    title: "100% University Admission Guidance & Offers",
    timeline: "Weeks 4 – 10",
    badge: "100% Admission",
    desc: "Fast-track admissions to accredited universities such as Canterbury Christ Church University UK, HELP University Malaysia, and premier European institutions.",
    checklist: [
      "Direct Application to Partner Institutions",
      "Offer Letter Issuance (Conditional / Unconditional)",
      "Scholarship & Tuition Discount Assistance",
    ],
    counselorTip:
      "We partner with reputable universities offering lower tuition costs, installment facilities, and MOI options, easing your financial journey.",
  },
  {
    step: "04",
    title: "Free Bank Support & Solvency Advisory",
    timeline: "Weeks 8 – 14",
    badge: "Free Bank Support",
    desc: "Exclusive Free Bank Support for the first 20 students applying for Cyprus and European Union partner university intakes, along with strict embassy document auditing.",
    checklist: [
      "Free Bank Support for First 20 Students",
      "Authentic Financial Advice & Solvency Auditing",
      "CAS / Visa Document Structuring",
    ],
    counselorTip:
      "Take advantage of our Free Bank Support campaign to fulfill European embassy financial solvency without unnecessary stress.",
  },
  {
    step: "05",
    title: "Visa Lodgment, Mock Interview & Pre-Departure",
    timeline: "Prior to Travel",
    badge: "Global Visa Success",
    desc: "Meticulous visa dossier preparation, embassy interview coaching, biometrics assistance, and pre-departure briefing at our Dhanmondi center.",
    checklist: [
      "Embassy / VFS File Lodgment & Interview Prep",
      "Pre-Departure Briefing on Part-Time Jobs & Accommodation",
      "Global University Alumni Network Support",
    ],
    counselorTip:
      "Our counselors guide you through every step of visa filing, interview simulations, and pre-departure settlement advice.",
  },
];

export function IlluminatedFlightPath() {
  const [activeStage, setActiveStage] = useState(0);
  const { open } = useRegisterModal();
  const current = roadmapStages[activeStage] ?? roadmapStages[0]!;

  return (
    <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-700 mb-2">
          <IconSparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Interactive Student Journey</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Your 5-Stage Path to <span className="text-emerald-600">Global Education</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Explore each phase of the EDU Global journey from free profile assessment to pre-departure briefing.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-start">
        {/* Stages Nav List */}
        <div className="space-y-2">
          {roadmapStages.map((stage, idx) => (
            <button
              key={stage.step}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={cn(
                "w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer",
                activeStage === idx
                  ? "bg-[#0c1f17] border-emerald-500 text-white shadow-md ring-1 ring-emerald-500/30"
                  : "bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-slate-50",
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-xl text-xs font-black",
                    activeStage === idx
                      ? "bg-emerald-500 text-slate-950"
                      : "bg-slate-100 text-slate-700",
                  )}
                >
                  {stage.step}
                </span>
                <div>
                  <p
                    className={cn(
                      "font-display text-xs sm:text-sm font-bold",
                      activeStage === idx ? "text-white" : "text-slate-900",
                    )}
                  >
                    {stage.title}
                  </p>
                  <p
                    className={cn(
                      "text-[0.68rem]",
                      activeStage === idx ? "text-emerald-300" : "text-slate-500",
                    )}
                  >
                    {stage.timeline}
                  </p>
                </div>
              </div>
              <span
                className={cn(
                  "text-xs font-bold px-2 py-0.5 rounded-full border",
                  activeStage === idx
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                    : "bg-slate-100 text-slate-600 border-slate-200",
                )}
              >
                {stage.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Stage Detail Card */}
        <div className="card-clean rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-md space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[0.68rem] font-bold uppercase tracking-wider text-emerald-600">
                Phase {current.step} · {current.timeline}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 mt-1">
                {current.title}
              </h3>
            </div>
            <span className="rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 text-xs font-bold">
              {current.badge}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            {current.desc}
          </p>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Key Inclusions & Action Items:
            </h4>
            <div className="grid gap-2">
              {current.checklist.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70"
                >
                  <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-emerald-50/50 border border-emerald-200/80 p-5 space-y-4">
            <div className="flex items-start gap-2.5">
              <span className="text-lg">💡</span>
              <div>
                <p className="text-xs font-bold text-emerald-950">Counselor Pro-Tip</p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {current.counselorTip}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={open}
                className="btn-shimmer w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book 100% Free Assessment</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello EDU Global! I am currently at Stage ${current.step} (${current.title}). Please guide me on next steps.`,
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
