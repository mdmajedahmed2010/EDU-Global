import { CountUp, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";
import { motion } from "framer-motion";

export function StatsImpactStrip() {
  const stats = [
    {
      icon: "🎓",
      val: 100,
      suffix: "%",
      label: "Admission Guidance",
      sublabelEn: "Canterbury Christ Church Partner & Global Admissions",
      sublabelBn: "কেন্টারবেরি ক্রাইস্ট চার্চ সহ যুক্তরাজ্য, ইউরোপ ও আমেরিকার শীর্ষ প্রতিষ্ঠানে সরাসরি ভর্তি",
    },
    {
      icon: "🌍",
      val: 10,
      suffix: "+",
      label: "Banner Destinations",
      sublabelEn: "UK, USA, Canada, Australia, Europe & Asia",
      sublabelBn: "অফিসিয়াল ব্যানারভুক্ত ১০+ শীর্ষ দেশে উচ্চশিক্ষার সরাসরি সুযোগ",
    },
    {
      icon: "🏛️",
      val: 20,
      suffix: " Students",
      label: "Free Bank Support",
      sublabelEn: "Exclusive Early Applicant Offer for European Intakes",
      sublabelBn: "সাইপ্রাস ও ইউরোপে প্রথম ২০ জন শিক্ষার্থীর জন্য বিশেষ ব্যাংক সাপোর্ট সুবিধা",
    },
    {
      icon: "🎯",
      val: 2.5,
      suffix: "+ CGPA",
      label: "Inclusive Admissions",
      sublabelEn: "Study Gap (10+ Yrs) & Low CGPA Solutions",
      sublabelBn: "স্টাডি গ্যাপ এবং কম সিজিপিএ (~২.৫) হলেও আন্তর্জাতিক ক্যারিয়ার গঠনের সুযোগ",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#07132b] text-white overflow-hidden border-y border-blue-500/20">
      {/* Ambient Radial Lighting */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 h-72 w-[600px] rounded-full bg-blue-500/20 blur-[130px]"
      />

      <div className="section-shell relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="inline-block text-[0.7rem] sm:text-xs font-black uppercase tracking-[0.18em] text-blue-400 bg-blue-500/15 border border-blue-400/30 px-3.5 py-1 rounded-full mb-3">
            VERIFIED TRACK RECORD · DHANMONDI HQ
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">
            From Dhanmondi, Dhaka <span className="text-blue-400">to Global Horizons</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
            100% Admission Guidance, Student Visa Processing & British Council Aligned Language Training.
          </p>
          <p className="text-xs text-slate-400 font-bangla mt-1">
            কেয়ারী প্লাজা (লিফট-৩), রোড ৮/এ, ধানমন্ডি, ঢাকা — আপনার উচ্চশিক্ষা, ভিসা কাউন্সেলিং ও ভাষা প্রশিক্ষণ কেন্দ্র।
          </p>
        </div>

        {/* 4 Massive Stat Counters Grid with Animated CountUp */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center"
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="flex flex-col items-center group h-full">
              <div className="w-full h-full rounded-3xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-blue-400/40 p-6 flex flex-col items-center transition-all duration-300 hover:-translate-y-1.5 shadow-lg">
                {/* Translucent Frosted Icon Box */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl mb-4 border border-white/15 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600/30 shadow-md">
                  <span>{stat.icon}</span>
                </div>

                {/* Animated Number */}
                <div className="font-display text-4xl sm:text-5xl font-black text-blue-400 tracking-tight leading-none mb-2">
                  <CountUp value={stat.val} suffix={stat.suffix} duration={2} />
                </div>

                {/* Bold Primary Title */}
                <div className="text-sm sm:text-base font-extrabold text-slate-100 mb-1.5">
                  {stat.label}
                </div>

                {/* English Subtitle */}
                <div className="text-xs text-slate-300 font-semibold max-w-[240px] leading-snug mb-1">
                  {stat.sublabelEn}
                </div>

                {/* Bengali Clarification Subtitle */}
                <div className="text-[0.72rem] text-slate-400 font-bangla font-medium max-w-[240px] leading-tight mt-auto pt-2">
                  {stat.sublabelBn}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
