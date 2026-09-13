import { CountUp, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function StatsImpactStrip() {
  const stats = [
    {
      icon: "🎯",
      val: 100,
      suffix: "%",
      label: "Visa Guidance Support",
      sublabel: "End-to-end documentation and interview coaching",
    },
    {
      icon: "📚",
      val: 3,
      suffix: " Months",
      label: "Intensive Language Packs",
      sublabel: "Japanese N5/N4 and Goethe German A1 mastery",
    },
    {
      icon: "📖",
      val: 100,
      suffix: "% Free",
      label: "Books & Study Materials",
      sublabel: "Complete books & lecture notes provided at zero cost",
    },
    {
      icon: "🗼",
      val: 2,
      suffix: " Hubs",
      label: "International Desks",
      sublabel: "Jashore Central HQ + Shin-Koiwa Tokyo Branch",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#0a1526] text-white overflow-hidden border-y border-sky-500/20">
      {/* Subtle Ambient Radial Lighting */}
      <div className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 h-72 w-[600px] rounded-full bg-sky-600/15 blur-[120px]" />

      <div className="section-shell relative z-10">
        {/* Section Heading with Editorial Italic Serif */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal tracking-tight text-white">
            From Jashore <span className="italic font-normal text-sky-400">to the World</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
            Nowrin Tower, East Side of Laldighi, Beside Kacchi Queen, Sadar, Jashore — empowering students
            with foreign language fluency and global higher education admissions.
          </p>
        </div>

        {/* 4 Massive Stat Counters Grid with Animated CountUp */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-center"
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="flex flex-col items-center group hover-lift">
              {/* Translucent Frosted Icon Box */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl mb-5 border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/15 shadow-lg">
                <span>{stat.icon}</span>
              </div>

              {/* Animated Serif Counter Number */}
              <div className="font-serif-editorial text-5xl sm:text-6xl font-normal text-white tracking-tight leading-none mb-3">
                <CountUp value={stat.val} suffix={stat.suffix} duration={2.2} />
              </div>

              {/* Bold Title */}
              <div className="text-sm font-bold text-slate-100 mb-1">{stat.label}</div>

              {/* Subtitle */}
              <div className="text-xs text-slate-400 font-medium max-w-[200px]">
                {stat.sublabel}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
