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
    country: "Japan",
    code: "JP",
    flag: "🇯🇵",
    slogan:
      "AcademiaZ-এর অফিশিয়াল ফ্ল্যাগশিপ ট্র্যাক। জাপান থেকে সরাসরি পরিচালিত ১০০% জাপান স্ট্যান্ডার্ড সেবা: জাপানি ভাষা কোর্স (N5 ও N4), স্টুডেন্ট ভিসা গাইডলাইন, TITP ও SSW ক্যারিয়ার ভিসা প্রস্তুতি এবং নির্ভুল COE ও ডকুমেন্টেশন সাপোর্ট।",
    perks: [
      "জাপান থেকে পরিচালিত (Japan Managed)",
      "১০০% জাপান স্ট্যান্ডার্ড সেবা",
      "Japanese Language N5 & N4",
      "TITP & SSW ক্যারিয়ার সাপোর্ট",
    ],
    image: "/banner.jpg",
    uniCount: "Top Language Academies & Unis in Japan",
    intakes: "April, July & October Intakes Open",
    slug: "japan",
  },
  {
    country: "IELTS & English Academy",
    code: "EN",
    flag: "🇬🇧",
    slogan:
      "AcademiaZ ইংলিশ ল্যাঙ্গুয়েজ হাব: কেমব্রিজ স্ট্যান্ডার্ডে IELTS প্রস্তুতি (Band 7.5+ টার্গেট), ক্যারিয়ার ও ইন্টারভিউ স্পোকেন ইংলিশ এবং শিশুদের জন্য স্পেশাল কিডস ইংলিশ ও ফোনিক্স একাডেমি।",
    perks: [
      "IELTS Band 7.5+ Strategy",
      "Spoken English Fluency",
      "Kids English (Ages 5–14)",
      "1-on-1 Speaking Feedback",
    ],
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
    uniCount: "British Council & Cambridge Aligned",
    intakes: "Morning & Evening Batches Open",
    slug: "uk",
  },
  {
    country: "Germany",
    code: "DE",
    flag: "🇩🇪",
    slogan:
      "ইউরোপের অন্যতম শীর্ষ অর্থনীতিতে টিউশন-ফি ছাড়া পাবলিক বিশ্ববিদ্যালয়ে উচ্চশিক্ষা এবং পেইড ভোকেশনাল ট্রেইনিং (Ausbildung) ভিসা প্রসেসিং সহায়তা।",
    perks: [
      "Tuition-Free Public Universities",
      "Ausbildung Vocational Guidance",
      "18-Month Job Seeker Visa",
      "Schengen 29 Countries Travel",
    ],
    image:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=1400&q=85",
    uniCount: "300+ Public German Universities",
    intakes: "Winter & Summer Intakes Open",
    slug: "germany",
  },
  {
    country: "Canada & Global",
    code: "CA",
    flag: "🇨🇦",
    slogan:
      "কানাডা, ইউকে, ইউএসএ ও অস্ট্রেলিয়ায় বিশ্বমানের ডিগ্রি, পেইড কো-অপ ইন্টার্নশিপ এবং পোস্ট গ্র্যাজুয়েশন ওয়ার্ক পারমিটের জন্য স্বচ্ছ ভিসা কনসালটেন্সি।",
    perks: [
      "Public DLI & Reputed Unis",
      "Paid Co-Op Internships",
      "Up to 3-Year PGWP",
      "Transparent File Processing",
    ],
    image:
      "https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=1400&q=85",
    uniCount: "Top Global Institutions",
    intakes: "Upcoming Intakes Ongoing",
    slug: "canada",
  },
];

const liveSuccessToasts = [
  {
    student: "Arifur R.",
    action: "Enrolled in Japanese N5 Level Batch",
    flag: "🇯🇵",
    time: "3 mins ago",
  },
  {
    student: "Sharmin S.",
    action: "Passed JFT-Basic & SSW Interview",
    flag: "🇯🇵",
    time: "15 mins ago",
  },
  {
    student: "Tanvir H.",
    action: "Achieved IELTS Overall Band 7.5",
    flag: "🇬🇧",
    time: "25 mins ago",
  },
  {
    student: "Imran K.",
    action: "Received Japan Student Visa & COE",
    flag: "🇯🇵",
    time: "40 mins ago",
  },
  {
    student: "Nafisa A.",
    action: "Joined Kids Spoken English Academy",
    flag: "🧒",
    time: "1 hour ago",
  },
  {
    student: "Mahmud B.",
    action: "Scheduled Free Consultation in Kadirganj",
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
                — ACADEMIAZ · JAPAN BASED & MANAGED —
              </span>
              <span className="text-[0.72rem] sm:text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                🇯🇵 ১০০% জাপান স্ট্যান্ডার্ড সেবা
              </span>
            </div>

            {/* Slogan & Destination Headline */}
            <div className="space-y-2">
              <p className="font-bangla font-semibold text-lg sm:text-xl text-amber-700 leading-snug">
                {company.bengaliHeadline}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.08] tracking-tight">
                YOUR GATEWAY TO <span className="text-amber-500">JAPAN</span> & THE WORLD
              </h1>
              <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm sm:text-base pt-1">
                <span>ফ্ল্যাগশিপ প্রোগ্রাম:</span>
                <span className="inline-flex items-center gap-1 text-[#0a1931] font-bold bg-amber-100/70 px-2.5 py-0.5 rounded-lg border border-amber-300">
                  <span>{slide.flag}</span>
                  <span>{slide.country} Track</span>
                </span>
              </div>
              {/* Navy & Amber Accent Bar */}
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#0a1931] via-amber-500 to-red-500 rounded-full mt-2" />
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
                className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-[#0a1931] hover:bg-[#0f2c59] text-amber-400 px-6 py-3.5 text-xs sm:text-sm font-bold shadow-lg transition-all cursor-pointer active:scale-95 border border-amber-500/30"
              >
                <span>ফ্রি প্রোফাইল মূল্যায়ন ও কনসালটেন্সি</span>
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
                কাদিরগঞ্জ, গ্রেটার রোড (মা ফটোস্ট্যাট এর পাশের গলি), রাজশাহী - ৬০০০
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
