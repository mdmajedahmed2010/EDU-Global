import { useState, useEffect } from "react";
import { company } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight, IconPhone, IconWhatsApp } from "@/components/ui-blocks";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

interface SlideData {
  country: string;
  code: string;
  flag: string;
  slogan: string;
  perks: string[];
  image: string;
  uniCount: string;
  intakes: string;
  slug: string;
}

const heroSlides: SlideData[] = [
  {
    country: "Study Abroad (9+ Nations)",
    code: "GLOBAL",
    flag: "🌍",
    slogan:
      "২০১২ সাল থেকে হায়ার স্টাডি কাউন্সেলরস বাংলাদেশ-এর বিশ্বস্ত গাইডলাইনে ইউকে, ইউএসএ, অস্ট্রেলিয়া, হাঙ্গেরি, কানাডা, ফিনল্যান্ড, ডেনমার্ক, মালয়েশিয়া ও দুবাইতে নিশ্চিন্তে উচ্চশিক্ষা।",
    perks: [
      "Opportunity To Move With Family",
      "Long Study Gap Accepted",
      "Part Time Job In UK & Abroad",
      "IELTS Cash Back On Visa Success",
    ],
    image: "/banner.jpg",
    uniCount: "Official Banner · 9+ Countries",
    intakes: "2026/2027 Intakes Open",
    slug: "study-abroad-counseling",
  },
  {
    country: "United Kingdom & Family",
    code: "UK",
    flag: "🇬🇧",
    slogan:
      "১ বছরের মাস্টার্স, ২ বছরের গ্র্যাজুয়েট রুট পিএসডব্লিউ (PSW), বৈধ পার্ট-টাইম কাজের অধিকার এবং মাস্টার্স পর্যায়ে স্পাউস ও পরিবার নিয়ে যাওয়ার সম্পূর্ণ ভিসা প্রসেসিং।",
    perks: [
      "1-Year Fast Masters Degree",
      "2-Year Graduate Route PSW",
      "Spouse / Family Visa Option",
      "MOI / Without IELTS Options",
    ],
    image: "/banner.jpg",
    uniCount: "UK Direct Admissions & Cash Back",
    intakes: "Jan, May & Sept Intakes",
    slug: "uk",
  },
  {
    country: "IELTS Preparation + Cash Back",
    code: "IELTS",
    flag: "🇬🇧",
    slogan:
      "কেমব্রিজ অথেনটিক কারিকুলাম ও অভিজ্ঞ মেন্টরদের তত্ত্বাবধানে লিসেনিং, রিডিং, রাইটিং ও স্পিকিং প্রস্তুতি। আর ভিসা সাকসেস হলে থাকছে আপনার পুরো IELTS ফি ক্যাশ ব্যাক অফার!",
    perks: [
      "ভিসা সাকসেসে ১০০% ক্যাশ ব্যাক অফার",
      "Small Interactive Batches",
      "1-on-1 Speaking Evaluation",
      "Weekly Full-Length Mock Exams",
    ],
    image: "/banner.jpg",
    uniCount: "Band 7.5+ Target Coaching",
    intakes: "Morning & Evening Batches",
    slug: "ielts-preparation",
  },
  {
    country: "Hungary & Europe Schengen",
    code: "SCHENGEN",
    flag: "🇭🇺",
    slogan:
      "স্বল্প টিউশন ফি (€১,৮০০ – €৩,৫00/বছর), টিউশন ফি আফটার ভিসা সুবিধা, স্টাডি গ্যাপ গ্রহণযোগ্যতা এবং ২৯টি ইউরোপীয় সেনজেন দেশে অবাধ চলাচলের অপূর্ব সুযোগ।",
    perks: [
      "Low Tuition Fees University",
      "Tuition Fee After Visa Available",
      "Long Study Gap Accepted",
      "29 Schengen Countries Mobility",
    ],
    image: "/banner.jpg",
    uniCount: "Affordable European Track",
    intakes: "Fall & Spring Intakes",
    slug: "hungary",
  },
];

const liveSuccessToasts = [
  {
    student: "Tanvir Ahmed",
    action: "Secured UK Visa with Spouse · IELTS Cash Back Claimed",
    flag: "🇬🇧",
    time: "4 mins ago",
  },
  {
    student: "Farhana Akter",
    action: "Hungary Schengen Visa Approved (4-Yr Study Gap Accepted)",
    flag: "🇭🇺",
    time: "15 mins ago",
  },
  {
    student: "Kamrul Hasan",
    action: "Australia Subclass 500 Visa Issued (Move With Family)",
    flag: "🇦🇺",
    time: "28 mins ago",
  },
  {
    student: "Abrar Zahin",
    action: "Scored IELTS Overall Band 7.5 (Academic)",
    flag: "🇬🇧",
    time: "42 mins ago",
  },
  {
    student: "Sumaiya Rahman",
    action: "Received Dubai University Offer Letter & Scholarship",
    flag: "🇦🇪",
    time: "1 hour ago",
  },
  {
    student: "Nafisa (Age 9)",
    action: "Enrolled in Kids' English Academy (Sector 3 Uttara)",
    flag: "🧒",
    time: "2 hours ago",
  },
];

export function HeroCommandCenter() {
  const { open } = useRegisterModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [toastIndex, setToastIndex] = useState(0);

  // Auto advance slide every 6 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  // Auto rotate toast every 4.5 seconds
  useEffect(() => {
    const toastTimer = setInterval(() => {
      setToastIndex((prev) => (prev + 1) % liveSuccessToasts.length);
    }, 4500);
    return () => clearInterval(toastTimer);
  }, []);

  const slide = heroSlides[currentSlide] ?? heroSlides[0]!;
  const activeToast = liveSuccessToasts[toastIndex] ?? liveSuccessToasts[0]!;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f3f5fa] via-[#FAFAFC] to-[#FAFAFC] pt-6 pb-14 sm:pt-10 sm:pb-20 border-b border-slate-200/80">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-amber-500/15 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-[130px]" />

      <div className="section-shell relative z-10">
        {/* Main 2-Column Hero Showcase */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center min-h-[500px]">
          {/* Left Column: Headline & Value Proposition */}
          <div className="space-y-5">
            {/* Brand Motto Over-Title */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[0.72rem] sm:text-xs font-black uppercase tracking-[0.14em] text-slate-950 bg-amber-400 px-3.5 py-1 rounded-full shadow-xs">
                — HIGHER STUDY COUNSELORS BANGLADESH —
              </span>
              <span className="text-[0.72rem] sm:text-xs font-bold text-[#161b38] bg-slate-100 border border-slate-300 px-3 py-1 rounded-full">
                🏛️ সেক্টর ৩, উত্তরা, ঢাকা (Since 2012)
              </span>
            </div>

            {/* Slogan & Destination Headline */}
            <div className="space-y-2">
              <p className="font-bangla font-semibold text-base sm:text-lg text-amber-600 leading-snug">
                {company.bengaliHeadline}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#161b38] leading-[1.08] tracking-tight">
                GUIDING YOUR GLOBAL DREAM <span className="text-amber-500">SINCE 2012</span>
              </h1>
              <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm sm:text-base pt-1">
                <span>হাইলাইটেড প্রোগ্রাম:</span>
                <span className="inline-flex items-center gap-1.5 text-[#161b38] font-bold bg-amber-100/80 px-3 py-1 rounded-lg border border-amber-300/90">
                  <span>{slide.flag}</span>
                  <span>{slide.country}</span>
                </span>
              </div>
              {/* Navy & Amber Accent Bar */}
              <div className="h-1.5 w-36 bg-gradient-to-r from-[#161b38] via-amber-500 to-amber-600 rounded-full mt-2" />
            </div>

            {/* Live Applications Intake Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-amber-50 border border-amber-300/80 px-4 py-1.5 text-xs font-bold text-amber-900 shadow-xs">
              <span className="beacon-dot">
                <span className="beacon-ping bg-amber-400" />
                <span className="beacon-core bg-amber-600" />
              </span>
              <span>{slide.intakes}</span>
            </div>

            {/* Destination Description */}
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-xl font-bangla">
              {slide.slogan}
            </p>

            {/* 6 Official Banner USPs Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 max-w-xl">
              {company.bannerUSPs.map((usp) => (
                <div
                  key={usp.title}
                  className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-400 transition-colors"
                >
                  <span className="text-lg shrink-0 mt-0.5">{usp.icon}</span>
                  <div className="min-w-0">
                    <span className="block text-xs font-extrabold text-[#161b38] leading-tight truncate">
                      {usp.title}
                    </span>
                    <span className="block text-[0.68rem] text-slate-500 font-bangla leading-tight truncate">
                      {usp.bengali}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={open}
                className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-[#161b38] hover:bg-[#242c56] text-amber-400 px-6 py-3.5 text-xs sm:text-sm font-bold shadow-lg transition-all cursor-pointer active:scale-95 border border-amber-500/30"
              >
                <span>ফ্রি প্রোফাইল এসেসমেন্ট ও অ্যাপয়েন্টমেন্ট</span>
                <IconArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600/40 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 px-5 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-xs active:scale-95"
              >
                <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: {company.whatsappFormatted}</span>
              </a>
            </div>

            {/* Real Address & Hotlines Line */}
            <div className="pt-2 text-xs text-slate-600 font-medium flex flex-wrap items-center gap-2">
              <span className="text-amber-500 font-bold">★★★★★</span>
              <span>
                হাউজ ২৩, রোড ২, ১ম তলা, সেক্টর ৩, উত্তরা, ঢাকা | হটলাইন: {company.phones[0]}
              </span>
            </div>
          </div>

          {/* Right Column: Visual Destination / Official Banner Card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.2rem] sm:rounded-[2.8rem] shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] bg-[#090c1f] group">
              {/* Photo or Official Banner */}
              <img
                key={slide.country}
                src={slide.image}
                alt={`${slide.country} - ${company.name}`}
                className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Country / Track Badge (Top-Right) */}
              <div className="absolute top-5 right-5 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl border border-white/80 text-center min-w-[78px] hover-lift">
                <div className="font-sans text-xl sm:text-2xl font-black text-slate-900 tracking-wider leading-none">
                  {slide.code}
                </div>
                <div className="text-[0.62rem] font-extrabold uppercase tracking-widest text-slate-600 mt-1">
                  {slide.country.split(" ")[0]}
                </div>
              </div>

              {/* Floating Live Success Toast (Top-Left) */}
              <div className="absolute top-5 left-5 rounded-xl bg-black/75 backdrop-blur-md px-3 py-1.5 text-xs text-white border border-white/20 flex items-center gap-2 max-w-[280px]">
                <span className="text-base">{activeToast.flag}</span>
                <span className="truncate text-[0.7rem] font-medium">
                  <strong>{activeToast.student}</strong> {activeToast.action}
                </span>
              </div>

              {/* Floating Quality Assurance Badge (Bottom-Left) */}
              <div className="absolute bottom-5 left-5 rounded-xl bg-black/80 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-amber-300 border border-amber-500/30 flex items-center gap-2">
                <span>★</span>
                <span>{slide.uniCount}</span>
              </div>

              {/* Slider Arrow Controls (Bottom-Right) */}
              <div className="absolute bottom-5 right-5 flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous Slide"
                  onClick={() =>
                    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-md hover:bg-white hover:scale-105 transition-all cursor-pointer font-bold active:scale-95"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next Slide"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-md hover:bg-white hover:scale-105 transition-all cursor-pointer font-bold active:scale-95"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Slider Dots Indicator */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {heroSlides.map((s, idx) => (
                <button
                  key={s.country}
                  type="button"
                  aria-label={`Go to slide ${s.country}`}
                  onClick={() => setCurrentSlide(idx)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 cursor-pointer",
                    currentSlide === idx ? "w-8 bg-amber-500" : "w-2 bg-slate-300 hover:bg-slate-400",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
