import { CountUp, MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function WhyChooseSection() {
  const features = [
    {
      icon: "🧭",
      iconBg: "bg-red-50 text-red-600",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-red-600",
      tag: "STUDENT-FIRST",
      title: "Expert Guidance",
      desc: "Individual profile evaluation, academic gap analysis, and tailored university shortlisting with transparent roadmap from Chattogram.",
    },
    {
      icon: "🎓",
      iconBg: "bg-amber-50 text-amber-600",
      value: 10,
      suffix: "-12",
      label: "",
      metricColor: "text-amber-600",
      tag: "INTENSIVE TRAINING",
      title: "Experienced Trainers",
      desc: "Goethe-oriented German language instructors, native Danish trainers, and certified IELTS mentors providing daily speaking practice.",
    },
    {
      icon: "🤝",
      iconBg: "bg-emerald-50 text-emerald-600",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-emerald-600",
      tag: "PRIVATE BATCHES",
      title: "Personalized Support",
      desc: "Strictly 10–12 students per batch ensuring regular Sprechen sessions, 1-on-1 IELTS diagnostic interviews, and visa mock trials.",
    },
    {
      icon: "🌍",
      iconBg: "bg-blue-50 text-blue-600",
      value: 6,
      suffix: " Major",
      label: "",
      metricColor: "text-blue-600",
      tag: "GLOBAL OPPORTUNITIES",
      title: "Global Destinations",
      desc: "Specializing in Tuition-Free German Universities, Denmark, Netherlands (Zoekjaar), Spain, Greece, Malaysia, Canada, and UK.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Title with Editorial Italic Serif & Framer Motion */}
        <MotionHeading
          tag="— WHY AB STUDY HUB —"
          title="Why choose"
          highlight="AB STUDY HUB?"
          description="Learn Today, Lead Tomorrow, Succeed Anywhere. We provide ethical, student-first guidance, premium European language coaching, and international higher education admissions."
          tagColor="text-red-600"
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
