import { CountUp, MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function WhyChooseSection() {
  const features = [
    {
      icon: "🧭",
      iconBg: "bg-sky-50 text-sky-600",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-sky-600",
      tag: "VISA & ADMISSIONS",
      title: "100% Visa Guidance",
      desc: "End-to-end guidance from university shortlisting and Japanese COE filing to embassy mock interview coaching from Jashore.",
    },
    {
      icon: "🎓",
      iconBg: "bg-orange-50 text-orange-600",
      value: 6,
      suffix: " Days/Wk",
      label: "",
      metricColor: "text-orange-600",
      tag: "INTENSIVE TRAINING",
      title: "Experienced Trainers",
      desc: "Skilled instructors for Japanese (N5/N4), Goethe-standard German (A1), and Cambridge IELTS delivering daily interactive practice.",
    },
    {
      icon: "📚",
      iconBg: "bg-emerald-50 text-emerald-600",
      value: 100,
      suffix: "% Free",
      label: "",
      metricColor: "text-emerald-600",
      tag: "SPECIAL CARE",
      title: "Free Books & Extra Classes",
      desc: "All study books and audio-visual materials provided completely free of charge, plus free extra classes post-course without any additional fees.",
    },
    {
      icon: "🇯🇵",
      iconBg: "bg-blue-50 text-blue-600",
      value: 2,
      suffix: " Hubs",
      label: "",
      metricColor: "text-blue-600",
      tag: "INTERNATIONAL LIAISON",
      title: "Tokyo Liaison Branch",
      desc: "Direct support in Shin-Koiwa, Tokyo, Japan for student reception, accommodation, part-time jobs, and school coordination.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Title with Editorial Italic Serif & Framer Motion */}
        <MotionHeading
          tag="— WHY NEXUS GLOBAL —"
          title="Why choose"
          highlight="Nexus Global?"
          description="The best way to predict the future is to create it. We provide premier foreign language training, transparent admission processing, and direct Tokyo liaison support."
          tagColor="text-sky-600"
          highlightColor="text-sky-600"
        />

        {/* 4 Feature Cards Grid with Staggered Entrance & CountUp */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="rounded-3xl border border-slate-200/70 bg-slate-50/40 p-7 text-center flex flex-col items-center hover:bg-white hover:border-sky-300 hover:shadow-2xl transition-all duration-300 group hover-lift h-full">
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
