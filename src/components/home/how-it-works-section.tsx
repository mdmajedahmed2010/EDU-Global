import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight } from "@/components/ui-blocks";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";

export function HowItWorksSection() {
  const { open } = useRegisterModal();

  const steps = [
    {
      step: "01",
      stepColor: "bg-[#161b38] text-amber-400 font-bold",
      icon: "🔍",
      iconBg: "bg-amber-50 text-amber-700",
      title: "Free Profile Assessment",
      desc: "হাউজ ২৩, রোড ২, সেক্টর ৩, উত্তরা, ঢাকায় এসে আপনার রেজাল্ট, বাজেট ও স্টাডি গ্যাপ মূল্যায়ন করে নিন সম্পূর্ণ ফ্রিতে।",
    },
    {
      step: "02",
      stepColor: "bg-amber-500 text-slate-950 font-black",
      icon: "📚",
      iconBg: "bg-amber-100 text-amber-900",
      title: "IELTS Preparation & Cashback",
      desc: "কেমব্রিজ সিলেবাসে লিসেনিং, রিডিং, রাইটিং ও স্পিকিং অনুশীলন করুন এবং ভিসা হলে সম্পূর্ণ IELTS ফি ক্যাশ ব্যাক পান।",
    },
    {
      step: "03",
      stepColor: "bg-[#161b38] text-amber-400 font-bold",
      icon: "🏛️",
      iconBg: "bg-blue-50 text-blue-700",
      title: "University Admission & Offer",
      desc: "ইউকে, ইউএসএ, অস্ট্রেলিয়া, হাঙ্গেরি বা ইউরোপের শীর্ষ বিশ্ববিদ্যালয় থেকে কনফার্মড অফার লেটার ও স্কলারশিপ সংগ্রহ।",
    },
    {
      step: "04",
      stepColor: "bg-slate-900 text-white font-bold",
      icon: "👥",
      iconBg: "bg-slate-100 text-slate-800",
      title: "Financial & Family Visa File",
      desc: "ব্যাংক সলভেন্সি গাইডলাইন, স্পনসর পেপারস ও স্পাউস সহ পরিবার নিয়ে যাওয়ার জন্য নিখুঁত ভিসা ফাইল প্রস্তুতকরণ।",
    },
    {
      step: "05",
      stepColor: "bg-emerald-600 text-white font-black",
      icon: "✈",
      iconBg: "bg-emerald-50 text-emerald-600",
      title: "Visa Success & Departure",
      desc: "১-অন-১ এম্বাসি ইন্টারভিউ প্রিপারেশন, ভিসা সিলমোহর, IELTS ক্যাশ ব্যাক গ্রহণ এবং বিদেশে সফল যাত্রা।",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#FAFAFC] border-b border-slate-200/80 overflow-hidden">
      <div className="section-shell">
        {/* Animated Section Header */}
        <MotionHeading
          tag="— YOUR HIGHER STUDY COUNSELORS ROADMAP —"
          title="How It"
          highlight="Works"
          description="উত্তরা সেক্টর ৩ অফিসে ফ্রি প্রোফাইল মূল্যায়ন থেকে শুরু করে বিশ্ববিদ্যালয় অ্যাডমিশন, IELTS ক্যাশ ব্যাক ও সফল ভিসা প্রাপ্তির ৫টি সুস্পষ্ট ধাপ।"
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
                    className={`absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full text-xs shadow-md transition-transform duration-300 group-hover:scale-110 ${s.stepColor}`}
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
                    <span className="text-amber-600 font-bold group-hover:translate-x-1 transition-transform">
                      Next →
                    </span>
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
            className="btn-shimmer inline-flex items-center gap-2 rounded-xl bg-[#161b38] hover:bg-[#242c56] text-amber-400 px-8 py-4 text-xs sm:text-sm font-bold shadow-xl transition-all cursor-pointer active:scale-95 border border-amber-500/30"
          >
            <span>Start Your Higher Study Journey with HSC BD</span>
            <IconArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
