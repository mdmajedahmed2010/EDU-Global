import { CountUp, MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";

export function WhyChooseSection() {
  const features = [
    {
      icon: "🎓",
      iconBg: "bg-blue-50 text-blue-700",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-[#0047ba]",
      tag: "ADMISSION GUIDANCE",
      title: "100% University Admission Guidance",
      bengaliTitle: "১০০% ভর্তি নিশ্চয়তা ও ডিরেক্ট পার্টনারশিপ",
      desc: "Direct official university representation with Canterbury Christ Church University (UK) and premier European, American & Asian institutions.",
      bengaliDesc: "যুক্তরাজ্যের Canterbury Christ Church University সহ ইউরোপ ও বিশ্বের শীর্ষ বিশ্ববিদ্যালয়ে শতভাগ ভর্তি নিশ্চয়তা ও সরাসরি প্রসেসিং।",
    },
    {
      icon: "🏛️",
      iconBg: "bg-emerald-50 text-emerald-700",
      value: 20,
      suffix: " Students",
      label: "",
      metricColor: "text-emerald-600",
      tag: "SPECIAL PROMOTION",
      title: "Free Bank Support Offer",
      bengaliTitle: "ফ্রি ব্যাংক সাপোর্ট সুবিধা",
      desc: "Exclusive bank solvency assistance for early applicants (first 20 students) applying for Cyprus and European Union upcoming intakes.",
      bengaliDesc: "সাইপ্রাস ও ইউরোপীয় ইউনিয়নের আসন্ন ইনটেকে আবেদনের ক্ষেত্রে প্রথম ২০ জন শিক্ষার্থীর জন্য বিশেষ ফ্রি ব্যাংক সাপোর্ট সুবিধা।",
    },
    {
      icon: "⚡",
      iconBg: "bg-amber-50 text-amber-700",
      value: 10,
      suffix: "+ Yrs",
      label: "",
      metricColor: "text-amber-600",
      tag: "INCLUSIVE PATHWAYS",
      title: "Study Gap & Low CGPA Accepted",
      bengaliTitle: "স্টাডি গ্যাপ ও কম CGPA গ্রহণযোগ্য",
      desc: "Comprehensive profile packaging for students with up to 10+ years study gap and graduation GPA down to 2.5 in accredited institutions.",
      bengaliDesc: "এইচএসসি বা ডিগ্রির পর দীর্ঘ শিক্ষাবিরতি এবং CGPA ২.৫+ থাকলেও সঠিক প্রফেশনাল ফাইল তৈরি করে ভিসা লাভের সুযোগ।",
    },
    {
      icon: "🗣️",
      iconBg: "bg-indigo-50 text-indigo-700",
      value: 4,
      suffix: " Academies",
      label: "",
      metricColor: "text-indigo-600",
      tag: "LANGUAGE ACADEMY",
      title: "Comprehensive Language Academy",
      bengaliTitle: "পূর্ণাঙ্গ ল্যাঙ্গুয়েজ একাডেমি",
      desc: "Cambridge authentic IELTS (Band 7.5+), Spoken English Fluency, Kids English & Phonics, and Japanese JLPT instruction at Dhanmondi HQ.",
      bengaliDesc: "আন্তর্জাতিক মানের ট্রেইনারদের পরিচালনায় IELTS, স্পোকেন ইংলিশ, কিডস ইংলিশ এবং জাপানিজ ভাষা কোর্স।",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Title with Framer Motion */}
        <MotionHeading
          tag="— WHY EDU GLOBAL (ইডিইউ গ্লোবাল) —"
          title="Why Choose"
          highlight="EDU Global?"
          description="Direct official university partnerships, verified Free Bank Support for European intakes, and professional language training at Keari Plaza, Satmasjid Road, Dhanmondi, Dhaka."
          tagColor="text-[#0047ba]"
          highlightColor="text-[#0047ba]"
        />

        {/* 4 Feature Cards Grid with Staggered Entrance & CountUp */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-7 text-center flex flex-col items-center hover:bg-white hover:border-blue-400 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 h-full">
                {/* Icon Container */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl mb-4 transition-transform duration-300 group-hover:scale-110 shadow-xs ${f.iconBg}`}
                >
                  <span>{f.icon}</span>
                </div>

                {/* Animated Big Metric */}
                <div className="mb-1.5">
                  <span className={`text-3xl sm:text-4xl font-black font-display ${f.metricColor}`}>
                    <CountUp target={f.value} suffix={f.suffix} />
                  </span>
                </div>

                <span className="inline-block rounded-full bg-slate-200/70 px-3 py-0.5 text-[0.65rem] font-black uppercase tracking-wider text-slate-700 mb-3">
                  {f.tag}
                </span>

                <h3 className="font-display text-sm sm:text-base font-extrabold text-[#0a1931] mb-1 leading-snug group-hover:text-[#0047ba] transition-colors">
                  {f.title}
                </h3>

                <p className="text-[0.72rem] text-slate-500 font-bangla font-semibold mb-3">
                  {f.bengaliTitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-2">
                  {f.desc}
                </p>

                <p className="text-[0.68rem] text-slate-400 font-bangla font-medium leading-normal mt-auto pt-2 border-t border-slate-200/60 w-full">
                  {f.bengaliDesc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
