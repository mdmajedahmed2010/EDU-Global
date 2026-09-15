import { CountUp, MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function WhyChooseSection() {
  const features = [
    {
      icon: "🇯🇵",
      iconBg: "bg-red-50 text-red-600",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-red-600",
      tag: "JAPAN BASED & MANAGED",
      title: "জাপান থেকে পরিচালিত",
      desc: "সরাসরি জাপান স্ট্যান্ডার্ড সেবা ও মনিটরিং, যা আপনাকে দেয় নিখুঁত তথ্য ও জাপানের প্রতিষ্ঠানের সাথে সরাসরি যোগাযোগ।",
    },
    {
      icon: "⛩️",
      iconBg: "bg-amber-50 text-amber-700",
      value: 2,
      suffix: " Levels",
      label: "",
      metricColor: "text-amber-600",
      tag: "JLPT / JFT / NAT",
      title: "Japanese N5 & N4 Courses",
      desc: "হিরাগানা, কাতাকানা, ১০০+ কাঞ্জি, অডিও লিসেনিং ড্রিল ও সাপ্তাহিক মক টেস্ট সহ বেসিক থেকে অ্যাডভান্সড ট্রেনিং।",
    },
    {
      icon: "💼",
      iconBg: "bg-blue-50 text-blue-600",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-blue-600",
      tag: "CAREER & VISA GUIDANCE",
      title: "Student Visa & SSW/TITP",
      desc: "জাপানে স্টুডেন্ট ভিসা, স্পেসিফাইড স্কিল্ড ওয়ার্কার (SSW) এবং টেকনিক্যাল ইন্টার্ন (TITP) প্রিপারেশন সাপোর্ট।",
    },
    {
      icon: "📍",
      iconBg: "bg-emerald-50 text-emerald-600",
      value: 100,
      suffix: "% Free",
      label: "",
      metricColor: "text-emerald-600",
      tag: "KADIRGANJ, RAJSHAHI",
      title: "আন্তরিক সহায়তা ও কাউন্সেলিং",
      desc: "কাদিরগঞ্জ, গ্রেটার রোডে মনোরম ক্লাসরুম, অভিজ্ঞ ও দক্ষ ট্রেইনার এবং সম্পূর্ণ ফ্রি প্রোফাইল মূল্যায়ন।",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Title with Editorial Italic Serif & Framer Motion */}
        <MotionHeading
          tag="— WHY ACADEMIAZ RAJSHAHI —"
          title="Why choose"
          highlight="AcademiaZ?"
          description="স্বপ্ন নয়, পরিকল্পনা হোক সঠিক – আমরা আছি আপনার জাপান যাত্রার বিশ্বস্ত সঙ্গী ! জাপান থেকে পরিচালিত ১০০% জাপান স্ট্যান্ডার্ড সেবা, অভিজ্ঞ ট্রেইনার টিম এবং আপনার সাফল্যই আমাদের অগ্রাধিকার।"
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
