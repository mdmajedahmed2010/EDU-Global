import { useState, useEffect } from "react";
import { company } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight, IconWhatsApp, IconSparkles } from "@/components/ui-blocks";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface SlideData {
  country: string;
  code: string;
  flag: string;
  tagline: string;
  slogan: string;
  bengaliSlogan: string;
  perks: string[];
  image: string;
  uniCount: string;
  intakes: string;
  slug: string;
}

const heroSlides: SlideData[] = [
  {
    country: "Global Higher Education (10+ Nations)",
    code: "GLOBAL",
    flag: "🌍",
    tagline: "Your Official Gateway to 10+ Leading Destinations",
    slogan:
      "Comprehensive admission guidance, confirmed offer letters, and end-to-end visa support across the UK, USA, Canada, Australia, Europe & Asia.",
    bengaliSlogan:
      "ইউরোপ, ইউকে, ইউএসএ, কানাডা, অস্ট্রেলিয়া ও জাপানে ১০০% অ্যাডমিশন গাইডলাইন, ভিসা প্রসেসিং ও স্কলারশিপ সহায়তা।",
    perks: [
      "100% Admission Guidance",
      "Free Bank Support Offer",
      "Long Study Gap Accepted",
      "Low CGPA (~2.5) Solutions",
    ],
    image: "/banner.png",
    uniCount: "Official Banner · 10+ Nations",
    intakes: "2026/2027 Intakes Open",
    slug: "study-abroad-counseling",
  },
  {
    country: "United Kingdom & Canterbury Christ Church",
    code: "UK",
    flag: "🇬🇧",
    tagline: "Official Partner University & Fast-Track Degrees",
    slogan:
      "Direct university partner admissions, 1-Year Fast Masters degrees, 2-Year Graduate Route PSW, and complete spouse/family dependent visa guidance.",
    bengaliSlogan:
      "কেন্টারবেরি ক্রাইস্ট চার্চ পার্টনার অ্যাডমিশন, ১ বছরের মাস্টার্স ও ২ বছরের পিএসডব্লিউ (PSW) ওয়ার্ক পারমিট।",
    perks: [
      "Canterbury Christ Church Partner",
      "1-Year Fast Masters Degree",
      "2-Year Graduate Route PSW",
      "MOI / Without IELTS Options",
    ],
    image: "/banner.png",
    uniCount: "UK Direct Admissions & Partners",
    intakes: "Jan, May & Sept Intakes",
    slug: "uk",
  },
  {
    country: "Cyprus & Europe Free Bank Support",
    code: "CYPRUS",
    flag: "🇨🇾",
    tagline: "First 20 Students Receive Free Bank Solvency Support",
    slogan:
      "Affordable European education with tuition fees starting at €2,500, Medium of Instruction (MOI) accepted, and exclusive Bank Support for early applicants.",
    bengaliSlogan:
      "সাইপ্রাস ও ইউরোপে প্রথম ২০ জন শিক্ষার্থীর জন্য ফ্রি ব্যাংক সাপোর্ট এবং স্বল্প খরচে উচ্চশিক্ষা সুবিধা।",
    perks: [
      "1st 20 Students Free Bank Support",
      "Low Tuition Starting €2,500",
      "Medium of Instruction (MOI) Accepted",
      "Long Study Gap & Low CGPA Accepted",
    ],
    image: "/banner.png",
    uniCount: "Affordable European Track",
    intakes: "Spring & Fall Intakes",
    slug: "cyprus",
  },
  {
    country: "IELTS, Spoken & Kids English Academy",
    code: "ACADEMY",
    flag: "🗣️",
    tagline: "Target Band 7.5+ & Fluency at Dhanmondi HQ",
    slogan:
      "Cambridge authentic curriculum, British Council & IDP certified instructors, 1-on-1 speaking evaluation, and Kids English & Phonics academy.",
    bengaliSlogan:
      "কেমব্রিজ কারিকুলামে IELTS ব্যান্ড ৭.৫+ প্রস্তুতি, স্পোকেন ইংলিশ ফ্লুয়েন্সি এবং শিশুদের জন্য ফোনিক্স একাডেমি।",
    perks: [
      "Small Interactive Batches",
      "1-on-1 Speaking Evaluation",
      "Phonics & Fluency for Kids (5–14)",
      "Weekly Timed Mock Examinations",
    ],
    image: "/banner.png",
    uniCount: "Target Band 7.5+ & Fluency",
    intakes: "Morning & Evening Batches",
    slug: "ielts-preparation",
  },
];

const liveSuccessToasts = [
  {
    student: "Tanvir Ahmed",
    action: "Canterbury Christ Church University Admission & UK Visa Approved",
    flag: "🇬🇧",
    time: "3 mins ago",
  },
  {
    student: "Farhana Akter",
    action: "Cyprus Student Visa Approved (Free Bank Support Claimed)",
    flag: "🇨🇾",
    time: "12 mins ago",
  },
  {
    student: "Kamrul Hasan",
    action: "Japan COE Issued & Student Visa Processed",
    flag: "🇯🇵",
    time: "25 mins ago",
  },
  {
    student: "Abrar Zahin",
    action: "Scored IELTS Overall Band 7.5 (Academic at Dhanmondi HQ)",
    flag: "🇬🇧",
    time: "39 mins ago",
  },
  {
    student: "Sumaiya Rahman",
    action: "Italy DSU 100% Scholarship Offer Letter Received",
    flag: "🇮🇹",
    time: "1 hour ago",
  },
  {
    student: "Zayan (Age 8)",
    action: "Enrolled in Kids' English Academy (Dhanmondi HQ)",
    flag: "🧒",
    time: "2 hours ago",
  },
];

export function HeroCommandCenter() {
  const { open } = useRegisterModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [toastIndex, setToastIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const goToSlide = (idx: number) => {
    setDirection(idx > currentSlide ? 1 : -1);
    setCurrentSlide(idx);
  };

  // Auto advance slide every 6.5 seconds when not hovered/paused
  useEffect(() => {
    if (isPaused) return;
    const slideTimer = setInterval(nextSlide, 6500);
    return () => clearInterval(slideTimer);
  }, [isPaused]);

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
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#f0f5ff] via-[#FAFAFC] to-[#FAFAFC] pt-6 pb-14 sm:pt-10 sm:pb-20 border-b border-slate-200/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient Animated Glows */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-blue-500/20 blur-[130px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-amber-500/15 blur-[130px]"
      />

      <div className="section-shell relative z-10">
        {/* Main 2-Column Hero Showcase */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center min-h-[520px]">
          {/* Left Column: Headline & Value Proposition */}
          <div className="space-y-5">
            {/* Brand Motto Over-Title */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[0.72rem] sm:text-xs font-black uppercase tracking-[0.14em] text-white bg-[#0047ba] px-3.5 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                <IconSparkles className="w-3 h-3 text-amber-300" />
                <span>EDU GLOBAL BANGLADESH</span>
              </span>
              <span className="text-[0.72rem] sm:text-xs font-bold text-[#0a1931] bg-white border border-slate-300 px-3 py-1 rounded-full shadow-2xs">
                🏛️ Keari Plaza (Lift-3), Road 8/A, Dhanmondi, Dhaka
              </span>
            </div>

            {/* Slogan & Destination Headline */}
            <div className="space-y-2.5">
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#0a1931] leading-[1.08] tracking-tight">
                ONE STOP SOLUTION TO YOUR <br className="hidden sm:inline" />
                <span className="text-[#0047ba] bg-gradient-to-r from-[#0047ba] via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  HIGHER EDUCATION
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                Official Partner Admissions: UK, USA, Canada, Australia, Europe & Asia · 100% Guidance & Free Bank Support.
              </p>
              <p className="text-xs text-slate-500 font-bangla font-medium leading-snug">
                {company.bengaliHeadline}
              </p>

              {/* Animated Slide Focus Pill */}
              <div className="flex items-center gap-2 text-slate-700 font-semibold text-xs sm:text-sm pt-1">
                <span className="text-slate-500 uppercase tracking-wider text-[0.72rem] font-bold">Featured Track:</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={slide.country}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="inline-flex items-center gap-1.5 text-[#0047ba] font-extrabold bg-blue-50/90 px-3 py-1 rounded-lg border border-blue-200 shadow-2xs"
                  >
                    <span>{slide.flag}</span>
                    <span>{slide.country}</span>
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Royal Blue & Amber Accent Line */}
              <div className="h-1.5 w-36 bg-gradient-to-r from-[#0047ba] via-blue-500 to-amber-500 rounded-full mt-2" />
            </div>

            {/* Live Applications Intake Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-blue-50 border border-blue-200 px-4 py-1.5 text-xs font-bold text-[#0047ba] shadow-xs">
              <span className="beacon-dot">
                <span className="beacon-ping bg-blue-400" />
                <span className="beacon-core bg-blue-600" />
              </span>
              <span>{slide.intakes}</span>
              <span className="text-slate-300">|</span>
              <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full text-[0.68rem] font-black border border-amber-200">
                1st 20 Free Bank Support
              </span>
            </div>

            {/* Destination Description with smooth AnimatePresence transition */}
            <div className="min-h-[72px] sm:min-h-[64px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.country}
                  initial={{ opacity: 0, x: direction * 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 20 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-1"
                >
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed max-w-xl">
                    {slide.slogan}
                  </p>
                  <p className="text-[0.78rem] text-slate-500 font-bangla font-medium leading-relaxed max-w-xl">
                    {slide.bengaliSlogan}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 6 Official Banner USPs Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 max-w-xl">
              {company.bannerUSPs.map((usp) => (
                <div
                  key={usp.title}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#0047ba] hover:shadow-xs transition-all duration-200 group"
                >
                  <span className="text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    {usp.icon}
                  </span>
                  <div className="min-w-0">
                    <span className="block text-xs font-extrabold text-[#0a1931] group-hover:text-[#0047ba] transition-colors leading-tight truncate">
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
              <motion.button
                type="button"
                whileTap={{ scale: 0.97 }}
                whileHover={{ translateY: -2 }}
                onClick={open}
                className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-[#0047ba] hover:bg-blue-700 text-white px-6 py-3.5 text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Free Profile Assessment & Booking</span>
                <IconArrowRight className="w-4 h-4 text-white" />
              </motion.button>

              <motion.a
                whileTap={{ scale: 0.97 }}
                whileHover={{ translateY: -2 }}
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello EDU Global! I would like to consult regarding study abroad admissions, Free Bank Support, and language training.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600/40 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 px-5 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-xs"
              >
                <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: {company.whatsappFormatted}</span>
              </motion.a>
            </div>

            {/* Real Address & Hotlines Line */}
            <div className="pt-2 text-xs text-slate-600 font-medium flex flex-wrap items-center gap-2">
              <span className="text-amber-500 font-bold">★★★★★</span>
              <span>
                Keari Plaza (Lift-3), Satmasjid Road, Dhanmondi, Dhaka | Hotline: {company.phones[0]}
              </span>
            </div>
          </div>

          {/* Right Column: Visual Destination / Official Banner Card with Smooth Motion */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.2rem] sm:rounded-[2.8rem] shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] bg-[#07132b] group">
              {/* Photo / Official Banner with Directional AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide.country}
                  src={slide.image}
                  alt={`${slide.country} - ${company.name}`}
                  initial={{ opacity: 0.5, scale: 1.04, x: direction * 25 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0.4, scale: 0.98, x: -direction * 25 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
              </AnimatePresence>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Floating Country / Track Badge (Top-Right) */}
              <motion.div
                key={`badge-${slide.code}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-5 right-5 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl border border-white/80 text-center min-w-[78px] hover-lift"
              >
                <div className="font-sans text-xl sm:text-2xl font-black text-slate-900 tracking-wider leading-none">
                  {slide.code}
                </div>
                <div className="text-[0.62rem] font-extrabold uppercase tracking-widest text-[#0047ba] mt-1">
                  {slide.country.split(" ")[0]}
                </div>
              </motion.div>

              {/* Floating Live Success Toast (Top-Left) with AnimatePresence */}
              <div className="absolute top-5 left-5 z-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeToast.student}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl bg-black/80 backdrop-blur-md px-3.5 py-2 text-xs text-white border border-white/20 flex items-center gap-2.5 max-w-[290px] shadow-lg"
                  >
                    <span className="text-lg">{activeToast.flag}</span>
                    <div className="min-w-0">
                      <span className="block truncate text-[0.72rem] font-bold text-slate-100">
                        {activeToast.student}
                      </span>
                      <span className="block truncate text-[0.65rem] text-slate-300">
                        {activeToast.action}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Floating Quality Assurance Badge (Bottom-Left) */}
              <div className="absolute bottom-5 left-5 rounded-xl bg-black/85 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-amber-300 border border-amber-500/30 flex items-center gap-2">
                <span>★</span>
                <span>{slide.uniCount}</span>
              </div>

              {/* Slider Arrow Controls (Bottom-Right) */}
              <div className="absolute bottom-5 right-5 flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous Slide"
                  onClick={prevSlide}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-md hover:bg-white hover:scale-105 transition-all cursor-pointer font-bold active:scale-95"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next Slide"
                  onClick={nextSlide}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-md hover:bg-white hover:scale-105 transition-all cursor-pointer font-bold active:scale-95"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Slider Dots Indicator with Smooth Width Transition */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {heroSlides.map((s, idx) => (
                <button
                  key={s.country}
                  type="button"
                  aria-label={`Go to slide ${s.country}`}
                  onClick={() => goToSlide(idx)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 cursor-pointer",
                    currentSlide === idx ? "w-8 bg-[#0047ba]" : "w-2 bg-slate-300 hover:bg-slate-400",
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
