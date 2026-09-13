import { useState } from "react";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { useRegisterModal } from "@/components/register-modal";
import { company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

const flightStages = [
  {
    step: "01",
    title: "Free Profile Assessment",
    timeline: "Day 0 – 2",
    badge: "Personalized Roadmap",
    desc: "Comprehensive evaluation of your GPA, German or English proficiency, and target destination budget (Germany tuition-free, Denmark, Netherlands, Spain, Greece, Canada, UK) by AB STUDY HUB advisors.",
    checklist: [
      "Academic Transcript Verification",
      "Germany & Denmark Eligibility Check",
      "Language & Country Shortlisting",
    ],
    counselorTip:
      "Bring your academic certificates to our Commerce View Complex, CDA Avenue, East Nasirabad, Chattogram office or connect via WhatsApp (01952-566966).",
  },
  {
    step: "02",
    title: "University Offer & APS Guidance",
    timeline: "Days 3 – 7",
    badge: "Official Acceptance",
    desc: "Direct application to accredited partner universities across Germany, Denmark, the Netherlands, Canada, Spain, Greece, and the UK with APS and scholarship assistance.",
    checklist: ["SOP & Motivation Letter Review", "APS & Uni-Assist Assistance", "Direct Admission Coordination"],
    counselorTip:
      "Qualifying applicants can secure 100% tuition-free education at German public universities or high-demand Danish technical institutions.",
  },
  {
    step: "03",
    title: "Blocked Account & Financial Compliance",
    timeline: "Days 8 – 14",
    badge: "Bank & Compliance",
    desc: "Thorough verification of German blocked account setup (Coracle/Expatrio), bank solvency, tuition deposit, and sponsor affidavits according to embassy standards.",
    checklist: [
      "German Blocked Account / Danish Solvency",
      "Health Insurance & Compliance Audit",
      "Official Acceptance Certificate Released",
    ],
    counselorTip:
      "Our compliance vetting ensures your visa file and financial documentation have zero documentary errors before lodgement.",
  },
  {
    step: "04",
    title: "Visa Lodgement & Mock Interview",
    timeline: "Days 15 – 25",
    badge: "Proven Visa Success",
    desc: "Expert German Embassy / VFS biometrics booking, student & spouse visa file preparation, and rigorous 1-on-1 interview practice.",
    checklist: [
      "VFS / Embassy Appointment Booking",
      "1-on-1 Embassy Mock Interview",
      "Passport Stamped with Visa",
    ],
    counselorTip:
      "Simulate authentic German and European consular interview questions with our experienced advisors at Commerce View Complex, Chattogram.",
  },
  {
    step: "05",
    title: "Pre-Departure & European Settlement",
    timeline: "Prior to Departure",
    badge: "Fly With Confidence",
    desc: "Student airfare booking assistance, student dorm / WG accommodation search in Germany & Denmark, city registration guidance, and arrival network.",
    checklist: [
      "Student Air Ticket Discount",
      "German WG / Dorm Accommodation Advice",
      "Post-Landing Student Community",
    ],
    counselorTip:
      "Our post-visa care connects you with seniors and alumni across German, Danish, and European universities!",
  },
];

export function IlluminatedFlightPath() {
  const [activeStage, setActiveStage] = useState(0);
  const { open } = useRegisterModal();
  const current = flightStages[activeStage] ?? flightStages[0]!;

  return (
    <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
      <SlideIn direction="up" distance={30}>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-700 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Transparent 5-Stage Roadmap</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            From Free File Opening to <span className="text-red-600">Global Campus</span>
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
          className="hidden md:block absolute top-6 left-12 h-0.5 bg-red-600 transition-all duration-500 -z-0"
          style={{ width: `${(activeStage / (flightStages.length - 1)) * 80}%` }}
        />

        <StaggerContainer
          staggerDelay={0.07}
          className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10"
        >
          {flightStages.map((stage, idx) => (
            <StaggerItem key={stage.step} direction="up" distance={22}>
              <button
                type="button"
                onClick={() => setActiveStage(idx)}
                className={cn(
                  "w-full rounded-2xl p-3 sm:p-4 text-left transition-all border cursor-pointer flex flex-col justify-between",
                  activeStage === idx
                    ? "bg-slate-900 text-white border-red-500 shadow-lg scale-102"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={cn(
                      "text-xs font-black px-2 py-0.5 rounded-md",
                      activeStage === idx ? "bg-red-600 text-white" : "bg-slate-100 text-slate-800",
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

      {/* Interactive Detail Box for Active Stage */}
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 p-6 sm:p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full bg-red-100 text-red-700 px-3 py-1 text-xs font-extrabold">
                {current.badge}
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                Estimated Duration: <strong className="text-slate-900">{current.timeline}</strong>
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              Stage {current.step}: {current.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {current.desc}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-800 block">
                Official Stage Checklist:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {current.checklist.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-700">
                    <IconCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white p-5 sm:p-6 space-y-4 shadow-xs">
            <div className="flex items-start gap-2.5">
              <span className="text-2xl">💡</span>
              <div>
                <span className="block font-bold text-xs text-[#043E8B] uppercase tracking-wider">
                  Senior Counselor Advice
                </span>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {current.counselorTip}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={open}
                className="btn-shimmer w-full rounded-xl bg-red-600 hover:bg-red-700 text-white py-2.5 text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book 100% Free Assessment</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello AB STUDY HUB! I am currently at Stage ${current.step} (${current.title}). Please guide me on next steps.`,
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
