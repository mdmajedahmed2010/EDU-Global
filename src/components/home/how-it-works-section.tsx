import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight } from "@/components/ui-blocks";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function HowItWorksSection() {
  const { open } = useRegisterModal();

  const steps = [
    {
      step: "01",
      stepColor: "bg-[#043E8B] text-white",
      dotPosition: "bottom",
      dotColor: "bg-[#043E8B]",
      icon: "🔍",
      iconBg: "bg-blue-50 text-[#043E8B]",
      title: "Research & Matching",
      desc: "Explore universities and degree programs across Finland, Canada, the USA, the UK, and Europe that fit your goals and budget.",
    },
    {
      step: "02",
      stepColor: "bg-red-600 text-white",
      dotPosition: "top",
      dotColor: "bg-red-600",
      icon: "🎁",
      iconBg: "bg-red-50 text-red-600",
      title: "100% Free File Opening",
      desc: "Meet our senior advisors at Rang Mohol Tower, Bandar Bazar, Sylhet or via WhatsApp for 100% free profile assessment.",
    },
    {
      step: "03",
      stepColor: "bg-[#043E8B] text-white",
      dotPosition: "bottom",
      dotColor: "bg-[#043E8B]",
      icon: "📄",
      iconBg: "bg-blue-50 text-[#043E8B]",
      title: "Application & Offer",
      desc: "Our admissions team reviews your SOP, transcripts, and credentials to secure your conditional/unconditional offer letters.",
    },
    {
      step: "04",
      stepColor: "bg-red-600 text-white",
      dotPosition: "top",
      dotColor: "bg-red-600",
      icon: "✓",
      iconBg: "bg-red-50 text-red-600",
      title: "Visa Filing & Mock Interview",
      desc: "Comprehensive visa filing, bank solvency check, and rigorous 1-on-1 embassy mock interview coaching.",
    },
    {
      step: "05",
      stepColor: "bg-[#043E8B] text-white",
      dotPosition: "bottom",
      dotColor: "bg-[#043E8B]",
      icon: "✈",
      iconBg: "bg-blue-50 text-[#043E8B]",
      title: "Pre-Departure & Arrival Care",
      desc: "Pre-flight briefing, student airfare assistance, student dorm search, and airport arrival coordination.",
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
          description="Your transparent path to studying abroad with RANS Scholarships in 5 simple, structured steps."
          tagColor="text-[#043E8B]"
          highlightColor="text-red-600"
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
                <div className="relative rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-red-400/50 flex flex-col justify-between hover-lift group h-full">
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
                  <div className="space-y-2">
                    <h3 className="font-display text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{s.desc}</p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider">
                      Step {s.step}
                    </span>
                    <span className="text-xs text-red-500 font-bold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={open}
            className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 text-xs sm:text-sm font-bold shadow-lg hover:shadow-red-600/30 transition-all cursor-pointer"
          >
            <span>Start Step 1: 100% Free File Opening</span>
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
