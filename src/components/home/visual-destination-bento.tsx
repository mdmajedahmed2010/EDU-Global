import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { IconArrowRight, IconSparkles } from "@/components/ui-blocks";
import { cn } from "@/lib/utils";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export interface DestinationCardData {
  slug: string;
  name: string;
  region: string;
  flag: string;
  image: string;
  featured?: boolean;
  highlightTag: string;
  visaSpeed: string;
  withoutIelts: boolean;
  avgTuition: string;
  pswv: string;
  topIntake: string;
}

const destinationCards: DestinationCardData[] = [
  {
    slug: "portugal",
    name: "Portugal",
    region: "Europe",
    flag: "🇵🇹",
    image:
      "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Schengen European Gateway & PR",
    visaSpeed: "Affordable Higher Education",
    withoutIelts: true,
    avgTuition: "€1,500 – €3,500/yr",
    pswv: "Schengen Residence & Work Rights",
    topIntake: "September & February",
  },
  {
    slug: "czech",
    name: "Czech Republic",
    region: "Europe",
    flag: "🇨🇿",
    image:
      "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Central European Hub & Low Cost",
    visaSpeed: "Prestigious Public Universities",
    withoutIelts: true,
    avgTuition: "€2,500 – €5,000/yr",
    pswv: "9-Month Job Search Visa",
    topIntake: "September & February",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "1-Yr Masters & 2-Yr PSW",
    visaSpeed: "Direct University Admissions",
    withoutIelts: true,
    avgTuition: "£11,000 – £16,000/yr",
    pswv: "2-Year Graduate Visa",
    topIntake: "Jan / May / Sep",
  },
  {
    slug: "germany",
    name: "Germany",
    region: "Europe",
    flag: "🇩🇪",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Tuition-Free & Research Universities",
    visaSpeed: "Public Universities",
    withoutIelts: true,
    avgTuition: "€0 – €350/sem (Tuition-Free)",
    pswv: "18-Month Post-Study Visa",
    topIntake: "Winter / Summer Intakes",
  },
  {
    slug: "canada",
    name: "Canada",
    region: "North America",
    flag: "🇨🇦",
    image:
      "https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Public DLIs & Paid Co-Op",
    visaSpeed: "Full Permit Compliance",
    withoutIelts: true,
    avgTuition: "C$15,000 – C$26,000/yr",
    pswv: "Up to 3-Year PGWP",
    topIntake: "Jan / May / Sep",
  },
  {
    slug: "australia",
    name: "Australia",
    region: "Oceania",
    flag: "🇦🇺",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Subclass 500 & High Wages",
    visaSpeed: "GTE & Academic Audit",
    withoutIelts: false,
    avgTuition: "A$24,000 – A$36,000/yr",
    pswv: "2–4 Year Post-Study Visa",
    topIntake: "Feb & July Intakes",
  },
  {
    slug: "usa",
    name: "United States",
    region: "North America",
    flag: "🇺🇸",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    highlightTag: "F-1 STEM OPT (3 Years)",
    visaSpeed: "Consular Interview Drills",
    withoutIelts: false,
    avgTuition: "$16,000 – $32,000/yr",
    pswv: "Up to 36 Months STEM OPT",
    topIntake: "Fall & Spring Intakes",
  },
  {
    slug: "spain",
    name: "Spain / Schengen",
    region: "Europe",
    flag: "🇪🇸",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80",
    highlightTag: "Schengen 29 Countries",
    visaSpeed: "European Degrees",
    withoutIelts: true,
    avgTuition: "€2,000 – €8,000/yr",
    pswv: "1-Year Job Search Permit",
    topIntake: "Sep / Feb",
  },
];

export function VisualDestinationBento() {
  const [activeRegion, setActiveRegion] = useState("All");

  const regions = ["All", "Asia", "Europe", "North America", "Oceania"];

  const filtered =
    activeRegion === "All"
      ? destinationCards
      : destinationCards.filter((d) => d.region === activeRegion);

  return (
    <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
      {/* Header with Micro-copy */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <SlideIn direction="left" distance={35}>
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-700 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Curated Study & Career Destinations</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explore Verified <span className="text-sky-600">Global Pathways</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            Choose your dream European and international pathway with Kushtia IELTS Care. Benefit from modern audio lab CBT mock tests (300 BDT), Cambridge IELTS coaching, and student visa guidance for Portugal, Czech Republic, UK, and beyond.
          </p>
        </SlideIn>

        {/* Region Filter Chips */}
        <SlideIn direction="right" distance={35} delay={0.1}>
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-slate-100 border border-slate-200">
            {regions.map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => setActiveRegion(reg)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                  activeRegion === reg
                    ? "bg-sky-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900",
                )}
              >
                {reg}
              </button>
            ))}
          </div>
        </SlideIn>
      </div>

      {/* Modern Bento Visual Grid */}
      <StaggerContainer staggerDelay={0.08} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((dest) => (
          <StaggerItem key={dest.slug} direction="up" distance={28}>
            <Link
              to="/study-in-{$country}"
              params={{ country: dest.slug }}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white transition-all duration-500 hover:border-sky-500 hover:shadow-2xl flex flex-col justify-end min-h-[380px]",
                dest.featured && "ring-1 ring-sky-500/20",
              )}
            >
              {/* Background Photographic Poster */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Top Floating Glass Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="bg-slate-900/80 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <span className="text-base">{dest.flag}</span>
                  <span>{dest.name}</span>
                </div>

                {dest.withoutIelts && (
                  <span className="rounded-full bg-emerald-600/90 text-white backdrop-blur-md px-2.5 py-0.5 text-[0.65rem] font-extrabold tracking-wide border border-white/20">
                    WITHOUT IELTS
                  </span>
                )}
              </div>

              {/* Bottom Content Tray with Micro-chips */}
              <div className="relative z-10 p-5 sm:p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-sky-600/30 border border-sky-400/40 px-2.5 py-0.5 text-[0.68rem] font-bold text-sky-200 truncate">
                    {dest.highlightTag}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[0.72rem] pt-1">
                  <div className="rounded-xl bg-white/10 backdrop-blur-md p-2 border border-white/10">
                    <span className="text-slate-400 block text-[0.65rem]">Visa / Intake:</span>
                    <span className="font-bold text-emerald-400 truncate block">
                      {dest.visaSpeed}
                    </span>
                  </div>
                  <div className="rounded-xl bg-white/10 backdrop-blur-md p-2 border border-white/10">
                    <span className="text-slate-400 block text-[0.65rem]">Work / Career:</span>
                    <span className="font-bold text-amber-300 truncate block">{dest.pswv}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs border-t border-white/15">
                  <span className="text-slate-300 font-medium">
                    Tuition: <strong className="text-white">{dest.avgTuition}</strong>
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-sky-400 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
