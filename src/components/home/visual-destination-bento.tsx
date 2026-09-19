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
    slug: "uk",
    name: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Official Partner · Canterbury Christ Church",
    visaSpeed: "1-Yr Masters & Fast Visa",
    withoutIelts: true,
    avgTuition: "£11,000 – £16,500/yr",
    pswv: "2-Year Graduate Visa (PSW)",
    topIntake: "Jan / May / Sep",
  },
  {
    slug: "cyprus",
    name: "Cyprus",
    region: "Europe",
    flag: "🇨🇾",
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Free Bank Support · 1st 20 Students",
    visaSpeed: "MOI Accepted / Fast Visa",
    withoutIelts: true,
    avgTuition: "€2,500 – €3,800/yr",
    pswv: "Low Tuition & European Transfer",
    topIntake: "February & September",
  },
  {
    slug: "usa",
    name: "United States",
    region: "North America",
    flag: "🇺🇸",
    image:
      "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Official Banner · STEM OPT 3 Yrs",
    visaSpeed: "F-1 Mock Consular Prep",
    withoutIelts: false,
    avgTuition: "$14,000 – $26,000/yr",
    pswv: "Up to 3-Year STEM OPT",
    topIntake: "Fall (Aug) & Spring (Jan)",
  },
  {
    slug: "canada",
    name: "Canada",
    region: "North America",
    flag: "🇨🇦",
    image:
      "https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Official Banner · DLIs & PGWP",
    visaSpeed: "PAL & Study Permit Filing",
    withoutIelts: false,
    avgTuition: "CAD $15,000 – $24,000/yr",
    pswv: "Up to 3-Year PGWP",
    topIntake: "Jan / May / Sep",
  },
  {
    slug: "australia",
    name: "Australia",
    region: "Oceania",
    flag: "🇦🇺",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Official Banner · Spouse Work Rights",
    visaSpeed: "Subclass 500 Visa Advisory",
    withoutIelts: false,
    avgTuition: "AUD $22,000 – $36,000/yr",
    pswv: "2 to 4+ Years Post-Study Work",
    topIntake: "February & July",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    region: "Oceania",
    flag: "🇳🇿",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Official Banner · 3-Year PSW",
    visaSpeed: "High Approval & Safe Haven",
    withoutIelts: false,
    avgTuition: "NZD $24,000 – $35,000/yr",
    pswv: "Up to 3-Year Open Work Visa",
    topIntake: "February & July",
  },
  {
    slug: "finland",
    name: "Finland",
    region: "Europe",
    flag: "🇫🇮",
    image:
      "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Official Banner · 30 Hrs Work",
    visaSpeed: "High Quality Nordic Degrees",
    withoutIelts: false,
    avgTuition: "€8,000 – €12,000/yr",
    pswv: "2-Year Job Search Residence",
    topIntake: "August / September",
  },
  {
    slug: "ireland",
    name: "Ireland",
    region: "Europe",
    flag: "🇮🇪",
    image:
      "https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Official Banner · Tech Capital",
    visaSpeed: "Silicon Valley of Europe",
    withoutIelts: false,
    avgTuition: "€10,000 – €16,000/yr",
    pswv: "2-Year Stay-Back Scheme",
    topIntake: "September & January",
  },
  {
    slug: "japan",
    name: "Japan",
    region: "Asia",
    flag: "🇯🇵",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Official Banner · Language to Degree",
    visaSpeed: "COE & Embassy Processing",
    withoutIelts: true,
    avgTuition: "¥700,000 – ¥1,100,000/yr",
    pswv: "28 Hrs/Wk Work & Employment",
    topIntake: "April & October",
  },
  {
    slug: "south-korea",
    name: "South Korea",
    region: "Asia",
    flag: "🇰🇷",
    image:
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Official Banner · High-Tech Hub",
    visaSpeed: "GKS & University Waivers",
    withoutIelts: false,
    avgTuition: "$3,500 – $7,000/sem",
    pswv: "D-10 Job Search Visa",
    topIntake: "March & September",
  },
  {
    slug: "italy",
    name: "Italy",
    region: "Europe",
    flag: "🇮🇹",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Official FB · 100% DSU Scholarships",
    visaSpeed: "English Degrees & Schengen Mobility",
    withoutIelts: true,
    avgTuition: "€1,000 – €3,000/yr (Often Free)",
    pswv: "1-Year Job Search Permit",
    topIntake: "September / October",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    region: "Asia",
    flag: "🇲🇾",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Official FB · HELP & MMU Partner",
    visaSpeed: "Fast Visa & No IELTS Required",
    withoutIelts: true,
    avgTuition: "$3,500 – $6,500/yr",
    pswv: "UK/Aus Twinning Degrees",
    topIntake: "Jan / May / Aug / Oct",
  },
];

export function VisualDestinationBento() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const regions = ["All", "Europe", "North America", "Oceania", "Asia"];

  const filtered =
    selectedRegion === "All"
      ? destinationCards
      : destinationCards.filter((d) => d.region.includes(selectedRegion));

  return (
    <section className="section-shell py-12 sm:py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <SlideIn direction="left" distance={30}>
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-[#0047ba]">
              <IconSparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Official Banner Destinations · EDU Global</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-[#0a1931] tracking-tight">
              Curated Higher Study <span className="text-[#0047ba]">Destinations</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-bangla">
              আমাদের অফিসিয়াল ব্যানারের ১০+ শীর্ষ দেশসমূহ। ইউরোপ, নিউজিল্যান্ড, অস্ট্রেলিয়া, ইউকে, ইউএসএ, কানাডা, জাপান ও দক্ষিণ কোরিয়ায় ইডিইউ গ্লোবাল নিশ্চিত করে ১০০% অ্যাডমিশন গাইডেন্স ও ভিসা সহায়তা।
            </p>
          </div>
        </SlideIn>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 self-start md:self-auto">
          {regions.map((reg) => (
            <button
              key={reg}
              type="button"
              onClick={() => setSelectedRegion(reg)}
              className={cn(
                "rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                selectedRegion === reg
                  ? "bg-[#0047ba] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60",
              )}
            >
              {reg}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Destination Cards */}
      <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <StaggerItem key={item.slug}>
            <Link
              to="/study-in-{$country}"
              params={{ country: item.slug }}
              className="group block rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#07132b]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-3.5 left-3.5 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold border border-white/20">
                  <span className="text-base">{item.flag}</span>
                  <span>{item.name}</span>
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <span className="text-[0.68rem] font-bold text-amber-400 block truncate">
                    {item.highlightTag}
                  </span>
                  <span className="text-xs font-semibold text-slate-200 block truncate mt-0.5">
                    {item.visaSpeed}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-3 bg-white flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[0.65rem] text-slate-400 block font-bold uppercase">Avg Tuition</span>
                    <span className="font-extrabold text-[#0a1931] block truncate mt-0.5">{item.avgTuition}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[0.65rem] text-slate-400 block font-bold uppercase">Intakes</span>
                    <span className="font-extrabold text-[#0047ba] block truncate mt-0.5">{item.topIntake}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0a1931] group-hover:text-[#0047ba] transition-colors">
                  <span>{item.pswv}</span>
                  <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
