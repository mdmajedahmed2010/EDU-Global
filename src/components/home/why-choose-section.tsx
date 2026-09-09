import { CountUp, MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function WhyChooseSection() {
  const features = [
    {
      icon: "🎁",
      iconBg: "bg-blue-50 text-[#043E8B]",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-[#043E8B]",
      tag: "OFFICIAL BENEFIT",
      title: "100% Free File Opening",
      desc: "Complete transparency from day one. Profile evaluation, gap analysis, and university shortlisting with zero upfront file-opening fees.",
    },
    {
      icon: "⏳",
      iconBg: "bg-rose-50 text-red-600",
      value: 10,
      suffix: " Years",
      label: "",
      metricColor: "text-red-600",
      tag: "ESTABLISHED 2017",
      title: "10 Year's Experience",
      desc: "Operating with high integrity and student trust in Rang Mohol Tower, Bandar Bazar, Sylhet since 2017.",
    },
    {
      icon: "🏛️",
      iconBg: "bg-amber-50 text-amber-600",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-amber-600",
      tag: "GOVT RECOGNIZED",
      title: "Member of FECAS & FACD-CAB",
      desc: "Proud member of Bangladesh's premier registered education consultancy bodies adhering to ethical, high-quality counseling.",
    },
    {
      icon: "🇫🇮",
      iconBg: "bg-blue-50 text-[#043E8B]",
      value: 50,
      suffix: "+",
      label: "",
      metricColor: "text-[#043E8B]",
      tag: "GLOBAL PARTNERS",
      title: "Finland #1 Specialist",
      desc: "January 2027 Joint Applications, rolling admissions with no entrance exam, spouse full work rights, and family relocation support.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Title with Editorial Italic Serif & Framer Motion */}
        <MotionHeading
          tag="— WHY RANS SCHOLARSHIPS —"
          title="Why choose"
          highlight="RANS Scholarships?"
          description="We are committed to making your study-abroad dream a reality — with 100% free file opening, 10 years of trusted experience, and expert scholarship guidance."
          tagColor="text-[#043E8B]"
          highlightColor="text-red-600"
        />

        {/* 4 Feature Cards Grid with Staggered Entrance & CountUp */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="rounded-3xl border border-slate-200/70 bg-slate-50/40 p-7 text-center flex flex-col items-center hover:bg-white hover:border-red-200 hover:shadow-2xl transition-all duration-300 group hover-lift h-full">
                {/* Icon Container */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl mb-4 transition-transform duration-300 group-hover:scale-110 ${f.iconBg}`}
                >
                  <span>{f.icon}</span>
                </div>

                {/* Animated Big Metric */}
                <div
                  className={`font-display text-3xl sm:text-4xl font-extrabold mb-0.5 ${f.metricColor}`}
                >
                  <CountUp value={f.value} suffix={f.suffix} duration={2} />
                </div>

                {/* Subheading Tag */}
                <div className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400 mb-3">
                  {f.tag}
                </div>

                {/* Title */}
                <h3 className="font-display text-base font-bold text-slate-900 mb-2">{f.title}</h3>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
