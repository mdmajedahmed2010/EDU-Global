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
    slug: "germany",
    name: "Germany",
    region: "Europe",
    flag: "🇩🇪",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Tuition-Free Public Universities",
    visaSpeed: "APS & Blocked Account Support",
    withoutIelts: true,
    avgTuition: "€0 – €350/sem (Admin fee)",
    pswv: "18-Month Post-Study Visa",
    topIntake: "Winter / Summer Intakes",
  },
  {
    slug: "denmark",
    name: "Denmark",
    region: "Europe",
    flag: "🇩🇰",
    image:
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Danish Language & Tech Focus",
    visaSpeed: "Fast-Track Student Scheme",
    withoutIelts: false,
    avgTuition: "€6,000 – €14,000/yr",
    pswv: "Up to 3-Year Stay Back",
    topIntake: "Sep Autumn / Feb Spring",
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    region: "Europe",
    flag: "🇳🇱",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "High Tech Innovation Hub",
    visaSpeed: "Zoekjaar 1-Year Visa",
    withoutIelts: false,
    avgTuition: "€8,000 – €15,000/yr",
    pswv: "1-Year Orientation Year",
    topIntake: "Sep / Feb",
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
    slug: "spain",
    name: "Spain",
    region: "Europe",
    flag: "🇪🇸",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Schengen & Low Tuition",
    visaSpeed: "Dedicated FB Campaign",
    withoutIelts: true,
    avgTuition: "€1,500 – €8,000/yr",
    pswv: "1-Year Job Search Permit",
    topIntake: "Sep / Feb",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "1-Yr Masters & MOI Options",
    visaSpeed: "Fast CAS Turnaround",
    withoutIelts: true,
    avgTuition: "£11,000 – £16,000/yr",
    pswv: "2-Year Graduate Visa",
    topIntake: "Jan / May / Sep",
  },
  {
    slug: "greece",
    name: "Greece",
    region: "Europe",
    flag: "🇬🇷",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    highlightTag: "90% Visa Success Gateway",
    visaSpeed: "EU Schengen 29 Countries",
    withoutIelts: true,
    avgTuition: "€2,500 – €6,000/yr",
    pswv: "European Work Pathways",
    topIntake: "Sep / Feb",
  },
  {
    slug: "hungary",
    name: "Hungary",
    region: "Europe",
    flag: "🇭🇺",
    image:
      "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=800&q=80",
    highlightTag: "Stipendium 100% Free Grant",
    visaSpeed: "Schengen 29 Countries",
    withoutIelts: true,
    avgTuition: "€3,000 – €6,000/yr",
    pswv: "9-Month Job Search",
    topIntake: "Sep / Feb",
  },
];

export function VisualDestinationBento() {
  const [activeRegion, setActiveRegion] = useState("All");

  const regions = ["All", "Europe", "North America"];

  const filtered =
    activeRegion === "All"
      ? destinationCards
      : destinationCards.filter((d) => d.region === activeRegion);

  return (
    <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
      {/* Header with Micro-copy */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <SlideIn direction="left" distance={35}>
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-700 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Curated Study Abroad Destinations</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explore Verified <span className="text-red-600">Study Portals</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            Choose your dream destination with AB STUDY HUB (Abroad From Bangladesh). Benefit from
            expert German & Danish admissions, Goethe language training, and professional counseling
            in Chattogram.
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
                    ? "bg-slate-900 text-white shadow-sm"
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
                "group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white transition-all duration-500 hover:border-red-500 hover:shadow-2xl flex flex-col justify-end min-h-[380px]",
                dest.featured && "ring-1 ring-red-500/20",
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
                    WITHOUT IELTS PATH
                  </span>
                )}
              </div>

              {/* Bottom Content Tray with Micro-chips */}
              <div className="relative z-10 p-5 sm:p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-red-600/30 border border-red-400/40 px-2.5 py-0.5 text-[0.68rem] font-bold text-red-300 truncate">
                    {dest.highlightTag}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[0.72rem] pt-1">
                  <div className="rounded-xl bg-white/10 backdrop-blur-md p-2 border border-white/10">
                    <span className="text-slate-400 block text-[0.65rem]">Visa / Admission:</span>
                    <span className="font-bold text-emerald-400 truncate block">
                      {dest.visaSpeed}
                    </span>
                  </div>
                  <div className="rounded-xl bg-white/10 backdrop-blur-md p-2 border border-white/10">
                    <span className="text-slate-400 block text-[0.65rem]">Post-Study Work:</span>
                    <span className="font-bold text-amber-300 truncate block">{dest.pswv}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs border-t border-white/15">
                  <span className="text-slate-300 font-medium">
                    Tuition: <strong className="text-white">{dest.avgTuition}</strong>
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-red-400 group-hover:translate-x-1 transition-transform">
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
