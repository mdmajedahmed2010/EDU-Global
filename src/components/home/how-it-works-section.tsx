import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight } from "@/components/ui-blocks";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function HowItWorksSection() {
  const { open } = useRegisterModal();

  const steps = [
    {
      step: "01",
      stepColor: "bg-[#092552] text-amber-400",
      icon: "🔍",
      iconBg: "bg-amber-50 text-amber-700",
      title: "Free Assessment & Level Test",
      desc: "১৬৯/৪, মাহাতাব উদ্দিন রোড, পুরাতন কসাইখানা মোড়, কুষ্টিয়ায় আমাদের ক্যাম্পাসে এসে ফ্রি এসেসমেন্ট দিন।",
    },
    {
      step: "02",
      stepColor: "bg-amber-500 text-slate-950 font-black",
      icon: "📚",
      iconBg: "bg-amber-100 text-amber-900",
      title: "Cambridge IELTS Preparation",
      desc: "কেমব্রিজ সিলেবাস, আধুনিক সাউন্ড ল্যাব ও ইন্ডিভিজুয়াল হেডসেটের মাধ্যমে নিয়মিত নিবিড় অনুশীলন।",
    },
    {
      step: "03",
      stepColor: "bg-[#092552] text-amber-400",
      icon: "🎧",
      iconBg: "bg-blue-50 text-blue-700",
      title: "300 BDT CBT Mock Tests",
      desc: "মাত্র ৩০০ টাকায় রিয়েল এক্সাম এনভায়রনমেন্টে কম্পিউটার-বেসড মক টেস্ট এবং ব্যান্ড স্কোর মূল্যায়ন।",
    },
    {
      step: "04",
      stepColor: "bg-slate-900 text-white",
      icon: "🇵🇹",
      iconBg: "bg-slate-100 text-slate-800",
      title: "University Offer & Admission",
      desc: "পর্তুগাল, চেক রিপাবলিক বা ইউরোপের স্বনামধন্য বিশ্ববিদ্যালয় থেকে দ্রুত অফার লেটার সংগ্রহ।",
    },
    {
      step: "05",
      stepColor: "bg-emerald-600 text-white",
      icon: "✈",
      iconBg: "bg-emerald-50 text-emerald-600",
      title: "Visa Success & Departure",
      desc: "নিখুঁত এম্বাসি ফাইল, স্পন্সরশিপ গাইডলাইন এবং ইউরোপে উড়াল দেওয়ার পূর্ণাঙ্গ নির্দেশনা।",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#FAFAFC] border-b border-slate-200/80 overflow-hidden">
      <div className="section-shell">
        {/* Animated Section Header */}
        <MotionHeading
          tag="— YOUR KUSHTIA IELTS CARE ROADMAP —"
          title="How It"
          highlight="Works"
          description="কুষ্টিয়ায় আন্তর্জাতিক মানের IELTS প্রস্তুতি, ৩০০ টাকায় কম্পিউটার মক টেস্ট এবং ইউরোপে স্টুডেন্ট ভিসার সুনির্দিষ্ট ৫টি ধাপ।"
          tagColor="text-amber-600"
          highlightColor="text-amber-600"
        />

        {/* 5 Step Roadway Cards with Stagger Animation */}
        <div className="relative">
          {/* Subtle Horizontal Connector Bar on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 bg-slate-200 pointer-events-none z-0" />

          <StaggerContainer
            staggerDelay={0.12}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10"
          >
            {steps.map((s) => (
              <StaggerItem key={s.step} className="h-full">
                <div className="relative rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/50 flex flex-col justify-between hover-lift group h-full">
                  {/* Step Number Badge */}
                  <div
                    className={`absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full text-xs font-black shadow-md transition-transform duration-300 group-hover:scale-110 ${s.stepColor}`}
                  >
                    {s.step}
                  </div>

                  {/* Top Icon */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl mb-4 transition-transform duration-300 group-hover:scale-110 ${s.iconBg}`}
                  >
                    <span>{s.icon}</span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-950 mb-2 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed font-bangla">{s.desc}</p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[0.68rem] text-slate-400 font-semibold">
                    <span>ধাপ {s.step}</span>
                    <span className="text-amber-600">IELTS Care ›</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={open}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0a1931] hover:bg-[#0f2c59] text-amber-400 px-6 py-3 text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer border border-amber-500/30"
          >
            <span>আজই আপনার পরিকল্পনা শুরু করুন</span>
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
