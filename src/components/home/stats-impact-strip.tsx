import { CountUp, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";

export function StatsImpactStrip() {
  const stats = [
    {
      icon: "🏛️",
      val: 14,
      suffix: "+ Years",
      label: "Trusted Experience",
      sublabel: "২০১২ সাল থেকে উত্তরা, ঢাকায় উচ্চশিক্ষা ও ভিসা কাউন্সেলিং",
    },
    {
      icon: "🌍",
      val: 9,
      suffix: "+ Destinations",
      label: "Official Banner Countries",
      sublabel: "ইউকে, ইউএসএ, অস্ট্রেলিয়া, হাঙ্গেরি, কানাডা, ফিনল্যান্ড, ডেনমার্ক ও অন্যান্য",
    },
    {
      icon: "✈️",
      val: 1000,
      suffix: "+",
      label: "Successful Student Visas",
      sublabel: "স্পাউস সহ পরিবার নিয়ে যাওয়ার সুযোগ ও উচ্চ ভিসা সাকসেস রেট",
    },
    {
      icon: "🎁",
      val: 100,
      suffix: "%",
      label: "IELTS Cash Back Offer",
      sublabel: "আমাদের মাধ্যমে ভিসা হলে ১০০% IELTS টেস্ট ফি রিফান্ড সুবিধা",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#090c1f] text-white overflow-hidden border-y border-amber-500/20">
      {/* Ambient Radial Lighting */}
      <div className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 h-72 w-[600px] rounded-full bg-amber-500/15 blur-[120px]" />

      <div className="section-shell relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            From Dhaka Uttara <span className="text-amber-400">to Global Horizons</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2.5 font-medium font-bangla">
            হাউজ ২৩, রোড ২, সেক্টর ৩, উত্তরা, ঢাকা — আপনার উচ্চশিক্ষা, IELTS প্রস্তুতি ও নিশ্চিন্ত ভিসা প্রসেসিং কেন্দ্র।
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
              <div className="font-display text-5xl sm:text-6xl font-black text-amber-400 tracking-tight leading-none mb-3">
                <CountUp value={stat.val} suffix={stat.suffix} duration={2.2} />
              </div>

              {/* Bold Title */}
              <div className="text-sm font-bold text-slate-100 mb-1">{stat.label}</div>

              {/* Subtitle */}
              <div className="text-xs text-slate-400 font-medium max-w-[220px] font-bangla">
                {stat.sublabel}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
