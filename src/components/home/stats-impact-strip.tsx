import { CountUp, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";

export function StatsImpactStrip() {
  const stats = [
    {
      icon: "🇯🇵",
      val: 100,
      suffix: "%",
      label: "Japan Standard Service",
      sublabel: "জাপান থেকে সরাসরি পরিচালিত ও মনিটরকৃত বিশ্বমানের সেবা",
    },
    {
      icon: "⛩️",
      val: 2,
      suffix: " Levels",
      label: "Japanese N5 & N4",
      sublabel: "JLPT, JFT-Basic ও NAT-TEST এক্সাম সফলতার নিশ্চয়তা",
    },
    {
      icon: "🎯",
      val: 100,
      suffix: "%",
      label: "Visa Guidance Support",
      sublabel: "COE ফাইল প্রিপারেশন, SOP ও ১-অন-১ অ্যাম্ব্যাসি মক ইন্টারভিউ",
    },
    {
      icon: "🗣️",
      val: 7.5,
      suffix: "+",
      label: "IELTS Target Band",
      sublabel: "কেমব্রিজ মক টেস্ট, স্পোকেন ইংলিশ ও কিডস ইংলিশ একাডেমি",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#061122] text-white overflow-hidden border-y border-amber-500/20">
      {/* Subtle Ambient Radial Lighting */}
      <div className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 h-72 w-[600px] rounded-full bg-amber-500/15 blur-[120px]" />

      <div className="section-shell relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            From Rajshahi <span className="text-amber-400">to Japan & the World</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium font-bangla">
            কাদিরগঞ্জ, গ্রেটার রোড (মা ফটোস্ট্যাট এর পাশের গলি), রাজশাহী — আপনার জাপান ও গ্লোবাল উচ্চশিক্ষা যাত্রার বিশ্বস্ত সহযোগী।
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
              <div className="text-xs text-slate-400 font-medium max-w-[210px] font-bangla">
                {stat.sublabel}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
