import { useState, useEffect } from "react";
import { company } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight, IconPhone, IconWhatsApp } from "@/components/ui-blocks";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { SlideIn } from "@/components/motion-wrapper";

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
    country: "Finland",
    code: "FI",
    flag: "🇫🇮",
    slogan:
      "Specialized #1 destination at RANS Scholarships. January 2027 Joint Application (31 Aug–10 Sep 2026), rolling admissions without entrance exam, spouse full work rights, and children's free education.",
    perks: [
      "100% Free File Opening",
      "Jan 2027 Joint App Open",
      "Spouse Work & Child Schooling",
      "2-Year Post-Study Permit",
    ],
    image:
      "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=1400&q=85",
    uniCount: "35+ UAS & Universities",
    intakes: "Jan 2027 Joint Application & Rolling",
    slug: "finland",
  },
  {
    country: "Canada",
    code: "CA",
    flag: "🇨🇦",
    slogan:
      "Top public Designated Learning Institutions (DLIs), paid co-op internships, and up to 3-year Post-Graduation Work Permits (PGWP).",
    perks: [
      "Direct DLI Admissions",
      "Paid Co-Op Internships",
      "Up to 3-Year PGWP",
      "Spouse Work Permit Eligible",
    ],
    image:
      "https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=1400&q=85",
    uniCount: "80+ DLIs & Colleges",
    intakes: "Jan, May & Sep Intakes Open",
    slug: "canada",
  },
  {
    country: "USA",
    code: "US",
    flag: "🇺🇸",
    slogan:
      "Tier-1 research institutions, 3-year STEM OPT extensions, and dedicated 1-on-1 embassy mock interview preparation by RANS counselors.",
    perks: [
      "Tier-1 Global Institutions",
      "3-Year STEM OPT Extension",
      "1-on-1 Visa Mock Coaching",
      "Merit & Graduate Waivers",
    ],
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=85",
    uniCount: "120+ Universities",
    intakes: "Spring & Fall Intakes Open",
    slug: "usa",
  },
  {
    country: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    slogan:
      "World-renowned Russell Group universities, fast 1-year Master's degrees, 2-Year Graduate Route PSW, and MOI options without IELTS.",
    perks: [
      "100% Free File Opening",
      "1-Year Fast Master's",
      "2-Year PSW Visa",
      "Bursaries up to £4,000",
    ],
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
    uniCount: "150+ Universities",
    intakes: "Jan, May & Sep Intakes Open",
    slug: "uk",
  },
  {
    country: "Hungary",
    code: "HU",
    flag: "🇭🇺",
    slogan:
      "Affordable European higher education, 100% tuition-free Stipendium Hungaricum scholarships with living stipends, and Schengen mobility.",
    perks: [
      "Stipendium Hungaricum Full Grant",
      "Low Cost of Living",
      "Schengen 29 Countries",
      "European Degree",
    ],
    image:
      "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=1400&q=85",
    uniCount: "25+ Public Universities",
    intakes: "Sep & Feb Intakes Open",
    slug: "hungary",
  },
  {
    country: "Netherlands",
    code: "NL",
    flag: "🇳🇱",
    slogan:
      "Europe's leading high-tech innovation hub, English-taught Bachelor's and Master's programs, and 1-Year Zoekjaar orientation visa.",
    perks: [
      "High Tech Innovation Hub",
      "1-Year Zoekjaar Work Visa",
      "English-Medium Degrees",
      "Holland Scholarship",
    ],
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1400&q=85",
    uniCount: "30+ Universities",
    intakes: "Sep & Feb Intakes Open",
    slug: "netherlands",
  },
  {
    country: "Italy",
    code: "IT",
    flag: "🇮🇹",
    slogan:
      "Centuries of academic excellence with regional government scholarships (EDISU/DSU) covering 100% tuition and annual living stipends.",
    perks: [
      "Regional DSU/EDISU Grants",
      "Tuition Based on Income",
      "English-Taught Courses",
      "European Schengen Travel",
    ],
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85",
    uniCount: "40+ Historic Universities",
    intakes: "Sep/Oct Main Intake",
    slug: "italy",
  },
  {
    country: "Romania",
    code: "RO",
    flag: "🇷🇴",
    slogan:
      "Affordable European medical, dental, and engineering degrees recognized throughout the European Union and WHO.",
    perks: [
      "Low Tuition (€2,500–€5,000)",
      "Direct Medical Degrees",
      "European Union Degree",
      "High Visa Success",
    ],
    image:
      "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1400&q=85",
    uniCount: "20+ Universities",
    intakes: "Oct Autumn Intake Open",
    slug: "romania",
  },
];

const liveSuccessToasts = [
  {
    student: "Tanzim",
    action: "admitted to Centria UAS, Finland",
    countryCode: "FI",
    flag: "🇫🇮",
    time: "5 minutes ago",
  },
  {
    student: "Nadia",
    action: "granted Canada Study Permit",
    countryCode: "CA",
    flag: "🇨🇦",
    time: "12 minutes ago",
  },
  {
    student: "Kawsar & Family",
    action: "Finland Student + Spouse + Child Visa Approved",
    countryCode: "FI",
    flag: "🇫🇮",
    time: "18 minutes ago",
  },
  {
    student: "Sumaiya",
    action: "scored Band 7.5 in IELTS Mock Exam",
    countryCode: "🎯",
    flag: "🎯",
    time: "25 minutes ago",
  },
  {
    student: "Fahim",
    action: "received £3,000 UK Merit Scholarship",
    countryCode: "GB",
    flag: "🇬🇧",
    time: "34 minutes ago",
  },
  {
    student: "Sadia",
    action: "secured Hungary Stipendium Admission",
    countryCode: "HU",
    flag: "🇭🇺",
    time: "42 minutes ago",
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

  const slide = heroSlides[currentSlide];
  const activeToast = liveSuccessToasts[toastIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F5FC]/70 via-[#FAFAFC] to-[#FAFAFC] pt-6 pb-14 sm:pt-10 sm:pb-20 border-b border-slate-200/80">
      {/* Subtle Ambient Backdrop Glows */}
      <div className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-red-500/8 blur-[130px]" />

      <div className="section-shell relative z-10">
        {/* Official Banner Hero Ribbon */}
        <div className="mb-8 rounded-2xl sm:rounded-3xl border border-sky-200 bg-linear-to-r from-sky-50 via-white to-blue-50 p-4 sm:p-5 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white font-black text-xl shadow-md">
              10
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-sm sm:text-base text-slate-900 tracking-tight">
                  Since 2017 · 10 Year&apos;s Experience
                </span>
                <span className="hidden sm:inline-flex rounded-full bg-amber-100 border border-amber-300 px-2.5 py-0.5 text-[0.65rem] font-extrabold text-amber-800">
                  Member of FECAS & FACD-CAB
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                Official Study Abroad & Language Academy in Bandar Bazar, Sylhet · 100% Free File
                Opening
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto">
            <div className="flex -space-x-1.5 overflow-hidden">
              {["🇨🇦", "🇺🇸", "🇬🇧", "🇭🇺", "🇳🇱", "🇮🇹", "🇷🇴", "🇫🇮"].map((flag) => (
                <span
                  key={flag}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow-xs border border-slate-200"
                >
                  {flag}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={open}
              className="ml-auto md:ml-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 shadow-sm transition-colors cursor-pointer"
            >
              100% Free Assessment
            </button>
          </div>
        </div>

        {/* Main 2-Column Hero Showcase */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center min-h-[480px]">
          {/* Left Column: Headline & Value Proposition */}
          <SlideIn direction="left" distance={45} className="space-y-5">
            {/* Brand Motto Over-Title */}
            <div className="flex items-center gap-2">
              <span className="text-[0.72rem] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#043E8B] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80">
                — RANS SCHOLARSHIPS · SYLHET —
              </span>
            </div>

            {/* Slogan & Destination Headline */}
            <div className="space-y-2">
              <p className="font-serif-editorial italic text-2xl sm:text-3xl lg:text-4xl text-slate-500 font-normal leading-tight">
                Let us make your
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.08] tracking-tight">
                DREAM TO <span className="text-red-600">STUDY ABROAD</span>
              </h1>
              <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm sm:text-base pt-1">
                <span>Featured Destination:</span>
                <span className="inline-flex items-center gap-1 text-red-600 font-bold bg-red-50 px-2.5 py-0.5 rounded-lg border border-red-200">
                  <span>{slide.flag}</span>
                  <span>Study in {slide.country}</span>
                </span>
              </div>
              {/* Red Accent Bar */}
              <div className="h-1.5 w-24 bg-gradient-to-r from-red-600 to-amber-500 rounded-full mt-2" />
            </div>

            {/* Live Applications Intake Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1.5 text-xs font-bold text-[#043E8B] shadow-xs">
              <span className="beacon-dot">
                <span className="beacon-ping bg-blue-500" />
                <span className="beacon-core bg-[#043E8B]" />
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
                <span>Apply for 100% Free File Opening</span>
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
                10 Years Experience Since 2017 · 425 Rang Mohol Tower, Bandar Bazar, Sylhet.
              </span>
            </div>
          </SlideIn>

          {/* Right Column: Visual Destination Card with Official Banner Option */}
          <SlideIn direction="right" distance={45} className="relative">
            <div className="relative overflow-hidden rounded-[2.2rem] sm:rounded-[2.8rem] shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] bg-slate-100 group">
              {/* Scenic Destination Photography */}
              <img
                key={slide.country}
                src={slide.image}
                alt={`Study in ${slide.country} - RANS Scholarships`}
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
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
