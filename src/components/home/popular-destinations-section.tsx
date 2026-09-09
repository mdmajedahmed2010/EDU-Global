import { Link } from "@tanstack/react-router";
import { IconArrowRight } from "@/components/ui-blocks";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

interface DestinationItem {
  name: string;
  code: string;
  flag: string;
  unis: string;
  image: string;
  popular?: boolean;
  slug: string;
  highlight?: string;
}

const destinationsData: DestinationItem[] = [
  {
    name: "Finland",
    code: "FI",
    flag: "🇫🇮",
    unis: "35+ UAS & Unis",
    image:
      "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "finland",
    highlight: "Jan 2027 Joint App",
  },
  {
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    unis: "80+ DLIs",
    image:
      "https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "canada",
    highlight: "Up to 3-Yr PGWP",
  },
  {
    name: "USA",
    code: "US",
    flag: "🇺🇸",
    unis: "120+ Universities",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "usa",
    highlight: "3-Yr STEM OPT",
  },
  {
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    unis: "150+ Universities",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "uk",
    highlight: "1-Yr Masters / PSW",
  },
  {
    name: "Hungary",
    code: "HU",
    flag: "🇭🇺",
    unis: "25+ Public Unis",
    image:
      "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "hungary",
    highlight: "Stipendium Grant",
  },
  {
    name: "Netherlands",
    code: "NL",
    flag: "🇳🇱",
    unis: "30+ Universities",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "netherlands",
    highlight: "Zoekjaar Visa",
  },
  {
    name: "Italy",
    code: "IT",
    flag: "🇮🇹",
    unis: "40+ Historic Unis",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "italy",
    highlight: "Regional DSU Grant",
  },
  {
    name: "Romania",
    code: "RO",
    flag: "🇷🇴",
    unis: "20+ Universities",
    image:
      "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "romania",
    highlight: "Affordable EU",
  },
];

export function PopularDestinationsSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#FAFAFC] border-b border-slate-200/80">
      <div className="section-shell">
        {/* Animated Heading */}
        <MotionHeading
          tag="— VERIFIED DESTINATIONS —"
          title="Where will you"
          highlight="study?"
          description="Explore our primary destination countries matching RANS Scholarships' official partnerships, scholarship grants, and visa expertise."
          tagColor="text-[#043E8B]"
          highlightColor="text-red-600"
        />

        {/* 8 Country Destination Cards Grid with Stagger Entrance */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {destinationsData.map((dest) => (
            <StaggerItem key={dest.slug}>
              <Link
                to="/study-in-{$country}"
                params={{ country: dest.slug }}
                className="group relative overflow-hidden rounded-3xl aspect-[3/4] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between p-4 sm:p-5 bg-slate-900 active:scale-[0.98] border border-transparent hover:border-red-500/40"
              >
                {/* Card Background Image */}
                <img
                  src={dest.image}
                  alt={`Study in ${dest.name} - RANS Scholarships`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-115 opacity-80"
                  loading="lazy"
                />

                {/* Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                {/* Top Bar inside Card */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/90 backdrop-blur-md text-base shadow-sm">
                    {dest.flag}
                  </span>
                  <span className="font-mono text-xs font-bold text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                    {dest.code}
                  </span>
                </div>

                {/* Bottom Content inside Card */}
                <div className="relative z-10 space-y-1">
                  {dest.highlight && (
                    <span className="inline-block rounded-md bg-red-600 px-2 py-0.5 text-[0.62rem] font-black text-white uppercase tracking-wider">
                      {dest.highlight}
                    </span>
                  )}
                  <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-red-300 transition-colors">
                    {dest.name}
                  </h3>
                  <div className="flex items-center justify-between text-[0.7rem] text-slate-300">
                    <span>{dest.unis}</span>
                    <span className="font-bold text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 hover:border-red-500 text-slate-800 hover:text-red-600 px-6 py-3 text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all"
          >
            <span>View All Destinations & Requirements</span>
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
