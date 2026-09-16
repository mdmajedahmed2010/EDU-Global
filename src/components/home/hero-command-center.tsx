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
    country: "IELTS Flagship",
    code: "IELTS",
    flag: "🇬🇧",
    slogan:
      "কুষ্টিয়ায় আধুনিক সাউন্ড ল্যাব, ব্যক্তিগত হেডসেট এবং অভিজ্ঞ ইন্সট্রাক্টরের সার্বক্ষণিক তত্ত্বাবধানে সম্পূর্ণ কেমব্রিজ সিলেবাসে IELTS (Academic & General) প্রস্তুতি। আপনার টার্গেট স্কোর অর্জনে আমাদের বিশেষ মেন্টরশিপ প্রোগ্রাম।",
    perks: [
      "Modern Audio Lab & Headsets",
      "Cambridge Aligned Curriculum",
      "Regular Speaking Assessment",
      "Weekly Mock Tests & Feedbacks",
    ],
    image: "/banner.png",
    uniCount: "Target Band 7.5+ Mentorship",
    intakes: "Morning & Evening Batches Open",
    slug: "ielts-regular",
  },
  {
    country: "Computer-Based Mock Test",
    code: "MOCK",
    flag: "🎧",
    slogan:
      "আইইএলটিএস আসল পরীক্ষার শতভাগ অনুভূতি ও ভয় কাটাতে মাত্র ৩০০ টাকায় কম্পিউটার-ভিত্তিক এবং অফলাইন মক টেস্ট। প্রতিটি মডিউলে (Listening, Reading, Writing, Speaking) বিস্তারিত ফিডব্যাক ও স্কোর কার্ড।",
    perks: [
      "মাত্র ৩০০ টাকায় রিয়েল এক্সাম মক টেস্ট",
      "Individual Headset & Audio Setup",
      "CBT & Paper-Based Options",
      "Detailed Band Analysis Report",
    ],
    image: "/banner.jpg",
    uniCount: "300 BDT Full Real-Time Mock",
    intakes: "Friday & Saturday Slots Available",
    slug: "computer-mock-test",
  },
  {
    country: "Portugal & Europe",
    code: "EU",
    flag: "🇵🇹",
    slogan:
      "কম টিউশন ফি এবং ইংরেজি মাধ্যমে ইউরোপের সেনজেনভুক্ত দেশ পর্তুগাল ও চেক রিপাবলিকে উচ্চশিক্ষা ও স্থায়ী বসবাসের সবচেয়ে সহজ সুযোগ। নির্ভুল অফার লেটার, ভিসা ফাইল প্রস্তুত ও সার্বিক কনসালটেন্সি।",
    perks: [
      "Affordable European Tuition Fees",
      "Schengen 29 Countries Access",
      "English-Taught Bachelor & Masters",
      "Complete Visa Documentation",
    ],
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
    uniCount: "Portugal & European Schengen Track",
    intakes: "Fall & Spring Intakes Ongoing",
    slug: "portugal",
  },
  {
    country: "Spoken & Kids English",
    code: "SPEAK",
    flag: "🗣️",
    slogan:
      "প্রতিদিনের কথা বলা, প্রেজেন্টেশন ও ইন্টারভিউতে আত্মবিশ্বাসী হতে Spoken English কোর্স এবং শিশুদের জন্য শৈশব থেকেই সঠিক উচ্চারণ ও ভয় দূর করতে আনন্দময় Kids English Academy।",
    perks: [
      "Natural Fluency & Pronunciation",
      "Phonics & Storytelling for Kids",
      "Confidence Building & Debate",
      "Small Interactive Batches",
    ],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85",
    uniCount: "Interactive Speaking & Young Learners",
    intakes: "Special Weekend Batches Open",
    slug: "spoken-english",
  },
];

const liveSuccessToasts = [
  {
    student: "Tanvir Ahmed",
    action: "Achieved IELTS Overall Band 7.5",
    flag: "🇬🇧",
    time: "5 mins ago",
  },
  {
    student: "Nusrat Jahan",
    action: "Completed Computer-Based Mock Test (300 BDT)",
    flag: "🎧",
    time: "18 mins ago",
  },
  {
    student: "Sabbir Hossain",
    action: "Received Portugal University Admission Offer",
    flag: "🇵🇹",
    time: "32 mins ago",
  },
  {
    student: "Ayesha Siddiqua",
    action: "Joined Spoken English Fluency Batch",
    flag: "🗣️",
    time: "45 mins ago",
  },
  {
    student: "Zayan (Age 8)",
    action: "Enrolled in Kids English Academy",
    flag: "🧒",
    time: "1 hour ago",
  },
  {
    student: "Mahmud Hasan",
    action: "Booked Free Counselling at Old Kataikhana More",
    flag: "📍",
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f5f8fc] via-[#FAFAFC] to-[#FAFAFC] pt-6 pb-14 sm:pt-10 sm:pb-20 border-b border-slate-200/80">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-amber-500/15 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-red-500/10 blur-[130px]" />

      <div className="section-shell relative z-10">
        {/* Main 2-Column Hero Showcase */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center min-h-[480px]">
          {/* Left Column: Headline & Value Proposition */}
          <div className="space-y-5">
            {/* Brand Motto Over-Title */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[0.72rem] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-950 bg-amber-400 px-3 py-1 rounded-full shadow-xs">
                — KUSHTIA IELTS CARE —
              </span>
              <span className="text-[0.72rem] sm:text-xs font-bold text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                🎧 আধুনিক সাউন্ড ল্যাব ও ইন্ডিভিজুয়াল হেডসেট
              </span>
            </div>

            {/* Slogan & Destination Headline */}
            <div className="space-y-2">
              <p className="font-bangla font-semibold text-lg sm:text-xl text-amber-600 leading-snug">
                {company.bengaliHeadline}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.08] tracking-tight">
                YOUR TRUSTED PARTNER IN <span className="text-amber-500">IELTS SUCCESS!</span>
              </h1>
              <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm sm:text-base pt-1">
                <span>ফ্ল্যাগশিপ প্রোগ্রাম:</span>
                <span className="inline-flex items-center gap-1 text-[#0a1931] font-bold bg-amber-100/70 px-2.5 py-0.5 rounded-lg border border-amber-300">
                  <span>{slide.flag}</span>
                  <span>{slide.country}</span>
                </span>
              </div>
              {/* Navy & Amber Accent Bar */}
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#092552] via-amber-500 to-amber-600 rounded-full mt-2" />
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

            {/* High Impact Perks Bullet Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {slide.perks.map((perk) => (
                <span
                  key={perk}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-[0.73rem] sm:text-xs font-bold text-slate-800 shadow-xs hover:border-amber-400 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>{perk}</span>
                </span>
              ))}
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={open}
                className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-[#092552] hover:bg-[#0d3b82] text-amber-400 px-6 py-3.5 text-xs sm:text-sm font-bold shadow-lg transition-all cursor-pointer active:scale-95 border border-amber-500/30"
              >
                <span>ফ্রি অ্যাসেসমেন্ট ও মক টেস্ট বুকিং</span>
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

            {/* Real Social Trust Line */}
            <div className="pt-2 text-xs text-slate-600 font-medium flex items-center gap-2">
              <span className="text-amber-500 font-bold">★★★★★</span>
              <span>
                ১৬৯/৪, মাহাতাব উদ্দিন রোড, পুরাতন কসাইখানা মোড়, কুষ্টিয়া
              </span>
            </div>
          </div>

          {/* Right Column: Visual Destination / Official Banner Card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.2rem] sm:rounded-[2.8rem] shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] bg-[#0a1931] group">
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
              <div className="absolute top-5 left-5 rounded-xl bg-black/70 backdrop-blur-md px-3 py-1.5 text-xs text-white border border-white/20 flex items-center gap-2 max-w-[270px]">
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
