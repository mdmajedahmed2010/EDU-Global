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
    country: "Germany",
    code: "DE",
    flag: "🇩🇪",
    slogan:
      "Flagship destination at AB STUDY HUB. Tuition-free world-class public universities, English & German-taught programs, APS certification, blocked account assistance, and complete Goethe-Institut language preparation (A1–B2).",
    perks: [
      "Tuition-Free Public Universities",
      "German A1–B2 Goethe Batches",
      "18-Month Post-Study Job Visa",
      "APS & Blocked Account Support",
    ],
    image:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=1400&q=85",
    uniCount: "300+ Public Universities",
    intakes: "Winter & Summer Intakes Open",
    slug: "germany",
  },
  {
    country: "Denmark",
    code: "DK",
    flag: "🇩🇰",
    slogan:
      "High-standard Scandinavian education, Danish Language courses tailored for higher studies and work permits, generous part-time work rights, and post-study opportunities in Copenhagen and Aarhus.",
    perks: [
      "Exclusive Danish Language Course",
      "World-Ranked Universities",
      "Post-Study Work Permit",
      "High Quality of Life & Safety",
    ],
    image:
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1400&q=85",
    uniCount: "20+ Universities & Academies",
    intakes: "Autumn & Spring Intakes Open",
    slug: "denmark",
  },
  {
    country: "Netherlands",
    code: "NL",
    flag: "🇳🇱",
    slogan:
      "Europe's premier technology and innovation powerhouse with over 2,000 English-taught programs and the coveted 1-Year Zoekjaar (Orientation Year) post-study work visa.",
    perks: [
      "Innovation & Research Hub",
      "1-Year Zoekjaar Work Visa",
      "English-Taught Bachelor's & Master's",
      "Schengen 29 Countries Access",
    ],
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1400&q=85",
    uniCount: "30+ World-Ranked Universities",
    intakes: "September & February Intakes",
    slug: "netherlands",
  },
  {
    country: "Canada",
    code: "CA",
    flag: "🇨🇦",
    slogan:
      "Top Designated Learning Institutions (DLIs), co-op internships, up to 3-year Post-Graduation Work Permits (PGWP), and pathways to permanent residency.",
    perks: [
      "Direct DLI Admissions",
      "Paid Co-Op Internships",
      "Up to 3-Year PGWP",
      "Spouse Work Permit Eligible",
    ],
    image:
      "https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=1400&q=85",
    uniCount: "80+ DLIs & Universities",
    intakes: "Jan, May & Sep Intakes Open",
    slug: "canada",
  },
  {
    country: "Spain",
    code: "ES",
    flag: "🇪🇸",
    slogan:
      "Gateway to European higher education with affordable tuition from €1,500/year, vibrant Mediterranean student lifestyle, and unrestricted Schengen mobility across 29 nations.",
    perks: [
      "Affordable Tuition Fees",
      "Schengen 29 Countries Access",
      "20 Hrs/Week Work Rights",
      "High Visa Success Rate",
    ],
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1400&q=85",
    uniCount: "50+ Accredited Universities",
    intakes: "Autumn & Spring Intakes",
    slug: "spain",
  },
  {
    country: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    slogan:
      "Russell Group institutions, fast-track 1-year Master's degrees, 2-Year Graduate Route PSW, and admissions with or without IELTS (MOI accepted).",
    perks: [
      "1-Year Fast Master's",
      "2-Year Graduate Route PSW",
      "Scholarships up to £4,000",
      "Admissions Without IELTS (MOI)",
    ],
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
    uniCount: "150+ Universities",
    intakes: "Jan, May & Sep Intakes Open",
    slug: "uk",
  },
];

const liveSuccessToasts = [
  {
    student: "Tanvir A.",
    action: "Enrolled in German A2 Goethe Batch",
    countryCode: "DE",
    flag: "🇩🇪",
    time: "3 mins ago",
  },
  {
    student: "Nabila R.",
    action: "Admitted to German Public University",
    countryCode: "DE",
    flag: "🇩🇪",
    time: "11 mins ago",
  },
  {
    student: "Mahfuz H.",
    action: "Enrolled in Danish Language Course",
    countryCode: "DK",
    flag: "🇩🇰",
    time: "24 mins ago",
  },
  {
    student: "Kamrul I.",
    action: "Achieved IELTS Overall Band 8.0",
    countryCode: "🎯",
    flag: "🎯",
    time: "42 mins ago",
  },
  {
    student: "Farzana S.",
    action: "Admitted to University of Amsterdam",
    countryCode: "NL",
    flag: "🇳🇱",
    time: "1 hour ago",
  },
  {
    student: "Fahim M.",
    action: "Joined Spoken English Intensive Batch",
    countryCode: "🗣️",
    flag: "🗣️",
    time: "2 hours ago",
  },
];

export function HeroCommandCenter() {
  const { open } = useRegisterModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [toastIndex, setToastIndex] = useState(0);

  // Auto advance slide every 5.5 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F5FC]/70 via-[#FAFAFC] to-[#FAFAFC] pt-6 pb-14 sm:pt-10 sm:pb-20 border-b border-slate-200/80">
      {/* Subtle Ambient Backdrop Glows */}
      <div className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-red-500/8 blur-[130px]" />

      <div className="section-shell relative z-10">
        {/* Main 2-Column Hero Showcase */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center min-h-[480px]">
          {/* Left Column: Headline & Value Proposition */}
          <div className="space-y-5">
            {/* Brand Motto Over-Title */}
            <div className="flex items-center gap-2">
              <span className="text-[0.72rem] sm:text-xs font-bold uppercase tracking-[0.16em] text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200/80">
                — AB STUDY HUB · CHATTOGRAM —
              </span>
            </div>

            {/* Slogan & Destination Headline */}
            <div className="space-y-2">
              <p className="font-serif-editorial italic text-2xl sm:text-3xl lg:text-4xl text-slate-500 font-normal leading-tight">
                Learn Today, Lead Tomorrow
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.08] tracking-tight">
                FROM CHATTOGRAM <span className="text-red-600">TO THE WORLD</span>
              </h1>
              <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm sm:text-base pt-1">
                <span>Featured Focus:</span>
                <span className="inline-flex items-center gap-1 text-red-600 font-bold bg-red-50 px-2.5 py-0.5 rounded-lg border border-red-200">
                  <span>{slide.flag}</span>
                  <span>Study in {slide.country}</span>
                </span>
              </div>
              {/* Red Accent Bar */}
              <div className="h-1.5 w-24 bg-gradient-to-r from-red-600 to-amber-500 rounded-full mt-2" />
            </div>

            {/* Live Applications Intake Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-red-50 border border-red-200/80 px-4 py-1.5 text-xs font-bold text-red-700 shadow-xs">
              <span className="beacon-dot">
                <span className="beacon-ping bg-red-500" />
                <span className="beacon-core bg-red-600" />
              </span>
              <span>{slide.intakes}</span>
            </div>

            {/* Destination Description */}
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl">
              {slide.slogan}
            </p>

            {/* High Impact Perks Bullet Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {slide.perks.map((perk) => (
                <span
                  key={perk}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200/80 px-3 py-1.5 text-[0.73rem] sm:text-xs font-semibold text-slate-700 shadow-xs hover:border-red-300 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                  <span>{perk}</span>
                </span>
              ))}
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={open}
                className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 text-xs sm:text-sm font-bold shadow-lg hover:shadow-red-600/30 transition-all cursor-pointer active:scale-95"
              >
                <span>Book Free Profile Assessment</span>
                <IconArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-5 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-xs active:scale-95"
              >
                <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: {company.whatsappFormatted}</span>
              </a>
            </div>

            {/* Real Social Trust Line */}
            <div className="pt-2 text-xs text-slate-500 font-medium flex items-center gap-2">
              <span className="text-amber-500 font-bold">★★★★★</span>
              <span>
                Commerce View Complex (4th Flr), CDA Avenue, East Nasirabad, Chattogram.
              </span>
            </div>
          </div>

          {/* Right Column: Visual Destination Card with Official Banner Option */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.2rem] sm:rounded-[2.8rem] shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] bg-slate-100 group">
              {/* Scenic Destination Photography */}
              <img
                key={slide.country}
                src={slide.image}
                alt={`Study in ${slide.country} - ${company.name}`}
                className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Country Code Badge (Top-Right) */}
              <div className="absolute top-5 right-5 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl border border-white/80 text-center min-w-[78px] hover-lift">
                <div className="font-sans text-xl sm:text-2xl font-black text-slate-900 tracking-wider leading-none">
                  {slide.code}
                </div>
                <div className="text-[0.62rem] font-extrabold uppercase tracking-widest text-slate-500 mt-1">
                  {slide.country.split(" ")[0]}
                </div>
              </div>

              {/* Floating Live Success Toast (Top-Left) */}
              <div className="absolute top-5 left-5 rounded-xl bg-black/60 backdrop-blur-md px-3 py-1.5 text-xs text-white border border-white/20 flex items-center gap-2 max-w-[240px]">
                <span className="text-base">{activeToast.flag}</span>
                <span className="truncate text-[0.7rem] font-medium">
                  <strong>{activeToast.student}</strong> {activeToast.action}
                </span>
              </div>

              {/* Floating University Count Badge (Bottom-Left) */}
              <div className="absolute bottom-5 left-5 rounded-xl bg-black/70 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white border border-white/20 flex items-center gap-2">
                <span>🎓</span>
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
                    currentSlide === idx ? "w-8 bg-red-600" : "w-2 bg-slate-300 hover:bg-slate-400",
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
