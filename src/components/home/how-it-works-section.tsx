import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight } from "@/components/ui-blocks";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function HowItWorksSection() {
  const { open } = useRegisterModal();

  const steps = [
    {
      step: "01",
      stepColor: "bg-sky-600 text-white",
      dotPosition: "bottom",
      dotColor: "bg-sky-600",
      icon: "🔍",
      iconBg: "bg-sky-50 text-sky-600",
      title: "Free Profile Assessment",
      desc: "Meet our counselors at Nowrin Tower, East Side of Laldighi, Jashore or consult online. We evaluate your CGPA, language readiness, and target country.",
    },
    {
      step: "02",
      stepColor: "bg-slate-900 text-white",
      dotPosition: "top",
      dotColor: "bg-slate-900",
      icon: "📚",
      iconBg: "bg-slate-100 text-slate-800",
      title: "Language Training",
      desc: "Enroll in our Japanese (N5/N4), Goethe-standard German (A1), or IELTS batches with 100% free books and personalized speaking care.",
    },
    {
      step: "03",
      stepColor: "bg-sky-600 text-white",
      dotPosition: "bottom",
      dotColor: "bg-sky-600",
      icon: "📋",
      iconBg: "bg-sky-50 text-sky-600",
      title: "Application & COE Support",
      desc: "Official application lodgement for Japanese language academies, universities in Germany/Malaysia/UK, and COE (Certificate of Eligibility) processing.",
    },
    {
      step: "04",
      stepColor: "bg-slate-900 text-white",
      dotPosition: "top",
      dotColor: "bg-slate-900",
      icon: "✓",
      iconBg: "bg-slate-100 text-slate-800",
      title: "Visa File & Mock Interviews",
      desc: "Thorough financial document verification, custom Statement of Purpose (SOP) drafting, and rigorous 1-on-1 embassy mock interview sessions.",
    },
    {
      step: "05",
      stepColor: "bg-orange-600 text-white",
      dotPosition: "bottom",
      dotColor: "bg-orange-600",
      icon: "✈",
      iconBg: "bg-orange-50 text-orange-600",
      title: "Visa & Tokyo Reception",
      desc: "Celebrate your visa approval! Attend our pre-departure briefing, flight booking, and get connected with our Tokyo office in Shin-Koiwa for arrival reception.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#FAFAFC] border-b border-slate-200/80 overflow-hidden">
      <div className="section-shell">
        {/* Animated Section Header */}
        <MotionHeading
          tag="— YOUR ADMISSION ROADMAP —"
          title="How It"
          highlight="Works"
          description="Your transparent path to studying abroad and foreign language mastery with Nexus Global in 5 simple, structured steps."
          tagColor="text-sky-600"
          highlightColor="text-sky-600"
        />

        {/* 5 Step Roadway Cards with Stagger Animation */}
        <div className="relative">
          {/* Subtle Horizontal Connector Bar on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 bg-slate-200 pointer-events-none z-0" />

          <StaggerContainer
            staggerDelay={0.12}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10"
          >
            {steps.map((s) => (
              <StaggerItem key={s.step} className="h-full">
                <div className="relative rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/50 flex flex-col justify-between hover-lift group h-full">
                  {/* Step Number Badge */}
                  <div
                    className={`absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full text-xs font-black shadow-md transition-transform duration-300 group-hover:scale-110 ${s.stepColor}`}
                  >
                    {s.step}
                  </div>

                  {/* Top Icon */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl mb-4 transition-transform duration-300 group-hover:scale-110 ${s.iconBg}`}
                  >
                    <span>{s.icon}</span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{s.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={open}
            className="btn-luxury-primary text-xs sm:text-sm py-3.5 px-8 shadow-lg active:scale-95 text-white"
          >
            <span>Start Step 01: Book Free Consultation</span>
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
