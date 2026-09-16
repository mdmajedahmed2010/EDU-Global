import { CountUp, MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";

export function WhyChooseSection() {
  const features = [
    {
      icon: "🏛️",
      iconBg: "bg-blue-50 text-[#161b38]",
      value: 14,
      suffix: "+ Yrs",
      label: "",
      metricColor: "text-[#161b38]",
      tag: "ESTABLISHED SINCE 2012",
      title: "১৪+ বছরের আস্থা ও অভিজ্ঞতা",
      desc: "২০১২ সাল থেকে উত্তরা, ঢাকায় উচ্চশিক্ষা ও স্টুডেন্ট ভিসা প্রসেসিংয়ে সততা, নির্ভরযোগ্যতা ও সহস্রাধিক ভিসা সাকসেস।",
    },
    {
      icon: "🎁",
      iconBg: "bg-amber-50 text-amber-700",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-amber-600",
      tag: "IELTS CASH BACK PROMO",
      title: "ভিসা হলে IELTS ক্যাশ ব্যাক",
      desc: "আমাদের মাধ্যমে IELTS প্রস্তুতি ও স্টুডেন্ট ভিসা প্রসেস সম্পন্ন হলে ভিসা প্রাপ্তির পর সম্পূর্ণ IELTS পরীক্ষার ফি ক্যাশ ব্যাক!",
    },
    {
      icon: "👥",
      iconBg: "bg-emerald-50 text-emerald-600",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-emerald-600",
      tag: "MOVE WITH FAMILY",
      title: "পরিবার ও স্পাউস ভিসা সুবিধা",
      desc: "ইউকে, অস্ট্রেলিয়া, ফিনল্যান্ড ও ডেনমার্কে পোস্টগ্র্যাজুয়েট শিক্ষার্থীদের স্পাউস ও সন্তানসহ একসঙ্গে ভিসা প্রসেসিং সহায়তা।",
    },
    {
      icon: "📊",
      iconBg: "bg-indigo-50 text-indigo-600",
      value: 10,
      suffix: "+ Yrs",
      label: "",
      metricColor: "text-indigo-600",
      tag: "GAP ACCEPTED",
      title: "দীর্ঘ স্টাডি গ্যাপ গ্রহণযোগ্য",
      desc: "এইচএসসি, অনার্স বা মাস্টার্সের পর দীর্ঘ স্টাডি গ্যাপ থাকলেও সঠিক ওয়ার্ক এক্সপেরিয়েন্স ও পোর্টফোলিও দ্বারা সফল ভিসা প্রাপ্তি।",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Title with Framer Motion */}
        <MotionHeading
          tag="— WHY HIGHER STUDY COUNSELORS BANGLADESH —"
          title="Why choose"
          highlight="HSC Bangladesh?"
          description="উত্তরা সেক্টর ৩-এ অবস্থিত আমাদের প্রধান কার্যালয় এবং যুক্তরাজ্যের গ্লাসগোতে নিজস্ব অফিসের মাধ্যমে আমরা প্রদান করি স্বচ্ছ, পেশাদার এবং সম্পূর্ণ নির্ভুল স্টাডি অ্যাব্রড ও ল্যাঙ্গুয়েজ কাউন্সেলিং।"
          tagColor="text-amber-600"
          highlightColor="text-amber-600"
        />

        {/* 4 Feature Cards Grid with Staggered Entrance & CountUp */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="rounded-3xl border border-slate-200/70 bg-slate-50/40 p-7 text-center flex flex-col items-center hover:bg-white hover:border-amber-300 hover:shadow-2xl transition-all duration-300 group hover-lift h-full">
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
                <h3 className="font-display text-base font-bold text-[#161b38] mb-2">{f.title}</h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-medium font-bangla">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
