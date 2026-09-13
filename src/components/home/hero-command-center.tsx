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
      "Official flagship destination at Nexus Global. Intensive Japanese N5 & N4 language packages in Jashore, Specified Skilled Worker (SSW) pathways, higher education admissions, and on-ground settlement support through Nexus Group Tokyo in Shin-Koiwa.",
    perks: [
      "Tokyo Shin-Koiwa Liaison Branch",
      "Japanese N5 & N4 Packages",
      "28 Hrs/Wk Part-Time Work",
      "100% Visa Guidance Guarantee",
    ],
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=85",
    uniCount: "50+ Language Academies & Unis",
    intakes: "April, July & October Intakes Open",
    slug: "japan",
  },
  {
    country: "Germany",
    code: "DE",
    flag: "🇩🇪",
    slogan:
      "Europe's economic powerhouse offering world-renowned tuition-free public universities, Goethe-Institut standard German A1 preparation in Jashore, Ausbildung placement support, and an 18-month post-study job seeker visa.",
    perks: [
      "Tuition-Free Public Universities",
      "German Goethe A1 Batches",
      "Free Ausbildung Profile Guidance",
      "18-Month Job Seeker Visa",
    ],
    image:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=1400&q=85",
    uniCount: "300+ Public Universities",
    intakes: "Winter & Summer Intakes Open",
    slug: "germany",
  },
  {
    country: "Malaysia",
    code: "MY",
    flag: "🇲🇾",
    slogan:
      "Premier Asian education hub hosting world-class UK and Australian branch campuses (Monash, Nottingham) with fast-track EMGS student visa processing and practical Malay language training.",
    perks: [
      "UK/Australian Branch Campuses",
      "Fast EMGS Student Visas",
      "Affordable Living & Tuition",
      "Malay Language Foundation",
    ],
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1400&q=85",
    uniCount: "40+ World-Ranked Campuses",
    intakes: "Feb, July & Sep Intakes",
    slug: "malaysia",
  },
  {
    country: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    slogan:
      "Fast 1-year Master's degrees, 2-year Graduate Route PSW, scholarships up to £4,000, and Cambridge-aligned IELTS preparation right here at our Jashore campus.",
    perks: [
      "1-Year Fast Master's",
      "2-Year Graduate Route PSW",
      "IELTS Band 7.5+ Coaching",
      "Scholarships up to £4,000",
    ],
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
    uniCount: "100+ Leading Universities",
    intakes: "Jan, May & Sep Intakes Open",
    slug: "uk",
  },
  {
    country: "Canada",
    code: "CA",
    flag: "🇨🇦",
    slogan:
      "Top Designated Learning Institutions (DLIs), paid co-op internships, up to 3-year Post-Graduation Work Permits (PGWP), and transparent application processing.",
    perks: [
      "Public DLI Admissions",
      "Paid Co-Op Internships",
      "Up to 3-Year PGWP",
      "Comprehensive Visa Support",
    ],
    image:
      "https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=1400&q=85",
    uniCount: "80+ DLIs & Universities",
    intakes: "Jan, May & Sep Intakes Open",
    slug: "canada",
  },
];

const liveSuccessToasts = [
  {
    student: "Tanvir A.",
    action: "Enrolled in Japanese N5 Level Batch",
    flag: "🇯🇵",
    time: "3 mins ago",
  },
  {
    student: "Sabbir H.",
    action: "Enrolled in German A1 Goethe Batch",
    flag: "🇩🇪",
    time: "12 mins ago",
  },
  {
    student: "Nusrat J.",
    action: "Achieved IELTS Overall Band 7.5",
    flag: "🇬🇧",
    time: "28 mins ago",
  },
  {
    student: "Farhan M.",
    action: "Received Japan Student Visa & COE",
    flag: "🇯🇵",
    time: "45 mins ago",
  },
  {
    student: "Rashed K.",
    action: "Admitted to German Public University",
    flag: "🇩🇪",
    time: "1 hour ago",
  },
  {
    student: "Sumaiya A.",
    action: "Joined Kids Spoken English Batch",
    flag: "🧒",
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eef7fc]/80 via-[#FAFAFC] to-[#FAFAFC] pt-6 pb-14 sm:pt-10 sm:pb-20 border-b border-slate-200/80">
      {/* Subtle Ambient Backdrop Glows */}
      <div className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-sky-500/15 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

      <div className="section-shell relative z-10">
        {/* Main 2-Column Hero Showcase */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center min-h-[480px]">
          {/* Left Column: Headline & Value Proposition */}
          <div className="space-y-5">
            {/* Brand Motto Over-Title */}
            <div className="flex items-center gap-2">
              <span className="text-[0.72rem] sm:text-xs font-bold uppercase tracking-[0.16em] text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-200/80">
                — NEXUS GLOBAL · JASHORE & TOKYO —
              </span>
            </div>

            {/* Slogan & Destination Headline */}
            <div className="space-y-2">
              <p className="font-serif-editorial italic text-2xl sm:text-3xl lg:text-4xl text-slate-500 font-normal leading-tight">
                The Best Way to Predict the Future is to Create It
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.08] tracking-tight">
                FROM JASHORE <span className="text-sky-600">TO THE WORLD</span>
              </h1>
              <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm sm:text-base pt-1">
                <span>Flagship Destination:</span>
                <span className="inline-flex items-center gap-1 text-sky-700 font-bold bg-sky-50 px-2.5 py-0.5 rounded-lg border border-sky-200">
                  <span>{slide.flag}</span>
                  <span>Study & Work in {slide.country}</span>
                </span>
              </div>
              {/* Blue & Orange Accent Bar */}
              <div className="h-1.5 w-28 bg-gradient-to-r from-sky-500 via-sky-600 to-orange-500 rounded-full mt-2" />
            </div>

            {/* Live Applications Intake Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-sky-50 border border-sky-200/80 px-4 py-1.5 text-xs font-bold text-sky-800 shadow-xs">
              <span className="beacon-dot">
                <span className="beacon-ping bg-sky-400" />
                <span className="beacon-core bg-sky-600" />
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
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200/80 px-3 py-1.5 text-[0.73rem] sm:text-xs font-semibold text-slate-700 shadow-xs hover:border-sky-300 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                  <span>{perk}</span>
                </span>
              ))}
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={open}
                className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white px-6 py-3.5 text-xs sm:text-sm font-bold shadow-lg hover:shadow-sky-600/30 transition-all cursor-pointer active:scale-95"
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
                Nowrin Tower (3rd Flr), East Side of Laldighi, Beside Kacchi Queen, Jashore.
              </span>
            </div>
          </div>

          {/* Right Column: Visual Destination Card */}
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
              <div className="absolute top-5 left-5 rounded-xl bg-black/60 backdrop-blur-md px-3 py-1.5 text-xs text-white border border-white/20 flex items-center gap-2 max-w-[260px]">
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
                    currentSlide === idx ? "w-8 bg-sky-600" : "w-2 bg-slate-300 hover:bg-slate-400",
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
