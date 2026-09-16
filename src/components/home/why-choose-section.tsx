import { CountUp, MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function WhyChooseSection() {
  const features = [
    {
      icon: "🎧",
      iconBg: "bg-blue-50 text-blue-800",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-blue-800",
      tag: "MODERN AUDIO LAB",
      title: "আধুনিক সাউন্ড ল্যাব",
      desc: "আইইএলটিএস লিসেনিং পরীক্ষার সঠিক প্রস্তুতির জন্য পৃথক হেডসেট ও ক্রিস্টাল ক্লিয়ার অডিও সেটআপ।",
    },
    {
      icon: "🎯",
      iconBg: "bg-amber-50 text-amber-700",
      value: 300,
      suffix: " ৳",
      label: "",
      metricColor: "text-amber-600",
      tag: "FULL CBT & PBT MOCKS",
      title: "কম্পিউটার মক টেস্ট",
      desc: "মাত্র ৩০০ টাকায় আসল পরীক্ষার হুবহু পরিবেশে কম্পিউটার-ভিত্তিক ও পেপার-বেসড মক টেস্ট এবং পূর্ণাঙ্গ ফিডব্যাক।",
    },
    {
      icon: "📚",
      iconBg: "bg-emerald-50 text-emerald-600",
      value: 7.5,
      suffix: "+",
      label: "",
      metricColor: "text-emerald-600",
      tag: "CAMBRIDGE SYLLABUS",
      title: "কেমব্রিজ কারিকুলাম ও কেয়ার",
      desc: "অভিজ্ঞ মেন্টর, সীমিত আসনের ব্যাচ ও প্রতি শিক্ষার্থীর দুর্বলতা চিহ্নিত করে বিশেষ রিভিশন ও স্পিকিং টেস্ট।",
    },
    {
      icon: "🇵🇹",
      iconBg: "bg-indigo-50 text-indigo-600",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-indigo-600",
      tag: "PORTUGAL & EUROPE",
      title: "ইউরোপ স্টাডি ভিসা সাপোর্ট",
      desc: "পর্তুগাল ও ইউরোপের বিভিন্ন স্বনামধন্য বিশ্ববিদ্যালয়ে অফার লেটার ও এম্বাসি ফাইল প্রসেসিংয়ে নির্ভুল গাইডলাইন।",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Title with Editorial Italic Serif & Framer Motion */}
        <MotionHeading
          tag="— WHY KUSHTIA IELTS CARE —"
          title="Why choose"
          highlight="Kushtia IELTS Care?"
          description="কুষ্টিয়ায় আন্তর্জাতিক মানের সাউন্ড ল্যাব, কেমব্রিজ সিলেবাস, কম্পিউটার বেসড মক টেস্ট এবং ইউরোপের স্টুডেন্ট ভিসা কনসালটেন্সি নিয়ে আমরা আপনার বিশ্বস্ত সঙ্গী। a great place to learn!"
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
                <h3 className="font-display text-base font-bold text-slate-900 mb-2">{f.title}</h3>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed font-medium font-bangla">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
