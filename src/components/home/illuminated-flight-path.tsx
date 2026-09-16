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
    desc: "Comprehensive evaluation of your academic history, study gap, English level, and global study ambitions (UK, USA, Australia, Hungary, Canada, Finland, Denmark, Malaysia, Dubai) by Higher Study Counselors Bangladesh.",
    checklist: [
      "Academic Transcript & Certificate Audit",
      "Long Study Gap Evaluation & Strategy",
      "Tailored Destination & Budget Planning",
    ],
    counselorTip:
      `Visit our Head Office at House 23, Road 2, Sector 3, Uttara, Dhaka, or connect via WhatsApp (${company.phones[0]} / ${company.phones[1]}).`,
  },
  {
    step: "02",
    title: "IELTS Preparation with 100% Cash Back on Visa",
    timeline: "Weeks 1 – 8",
    badge: "IELTS Cash Back Offer",
    desc: "Join our intensive IELTS Academic/General, Spoken English, or Kids English coaching. Upon successful student visa grant through HSC BD, receive 100% course fee cash back!",
    checklist: [
      "Cambridge Exam Curriculum & Mock Tests",
      "Target Band 6.5 - 7.5+ Strategy Modules",
      "Automatic Cash Back Enrollment on Visa Lodgment",
    ],
    counselorTip:
      "Our IELTS coaching is tailored to ensure you meet university English requirements quickly while securing our signature 100% Cash Back on Visa Success guarantee.",
  },
  {
    step: "03",
    title: "Low Tuition University Offer Letter & Admission",
    timeline: "Weeks 4 – 10",
    badge: "Affordable Universities",
    desc: "Fast-track admissions to accredited universities with low tuition fees, high visa success rates, and flexible entry requirements across UK, Europe, and North America.",
    checklist: [
      "Direct Application to Partner Institutions",
      "Offer Letter Issuance (Conditional / Unconditional)",
      "Scholarship & Tuition Discount Assistance",
    ],
    counselorTip:
      "We partner with reputable universities offering lower tuition costs and installment payment facilities, easing your financial journey.",
  },
  {
    step: "04",
    title: "Move with Family & Financial Advice & Guidance",
    timeline: "Weeks 8 – 14",
    badge: "Move With Family",
    desc: "Specialized assistance for students planning to move with spouse and children. Comprehensive bank solvency preparation, fund justification, and CAS/I-20 issuance.",
    checklist: [
      "Family & Dependent Visa Document Structuring",
      "Authentic Financial Advice & Solvency Auditing",
      "CAS / I-20 / Confirmation of Acceptance Acquisition",
    ],
    counselorTip:
      "Our counselors have extensive experience with dependent visas, ensuring legal compliance so your family can accompany you seamlessly.",
  },
  {
    step: "05",
    title: "Visa Lodgment, UK Office Support & Pre-Departure",
    timeline: "Prior to Travel",
    badge: "Global Visa Success",
    desc: "Meticulous visa dossier preparation, biometrics appointment scheduling, flight booking assistance, and on-ground coordination via our Glasgow, UK office.",
    checklist: [
      "Embassy / VFS File Lodgment & Interview Prep",
      "Pre-Departure Briefing on Part-Time Jobs & Accommodation",
      "UK & Overseas Alumni Network Support",
    ],
    counselorTip:
      "With offices in both Dhaka and Glasgow, UK, our support doesn't end when your visa arrives—we guide you through arrival, accommodation, and part-time job hunting.",
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
                  `Hello Higher Study Counselors Bangladesh! I am currently at Stage ${current.step} (${current.title}). Please guide me on next steps.`,
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
