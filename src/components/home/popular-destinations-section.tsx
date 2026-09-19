import { Link } from "@tanstack/react-router";
import { IconArrowRight } from "@/components/ui-blocks";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";

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

// Official Destinations Featured on EDU Global Banner & University Network
const destinationsData: DestinationItem[] = [
  {
    name: "United Kingdom",
    code: "UK",
    flag: "🇬🇧",
    unis: "Canterbury Christ Church Partner · 1-Yr Masters & PSW",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "uk",
    highlight: "Official Partner · Move With Family",
  },
  {
    name: "Cyprus (Europe)",
    code: "CY",
    flag: "🇨🇾",
    unis: "1st 20 Free Bank Support · Tuition from €2,500 · MOI",
    image:
      "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "cyprus",
    highlight: "1st 20 Free Bank Support Offer",
  },
  {
    name: "Italy (Schengen)",
    code: "IT",
    flag: "🇮🇹",
    unis: "100% DSU Regional Scholarship · €7,000 Stipend",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "italy",
    highlight: "100% Scholarship Available",
  },
  {
    name: "United States",
    code: "USA",
    flag: "🇺🇸",
    unis: "Top Universities · 3-Yr STEM OPT · High Merit Awards",
    image:
      "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "usa",
    highlight: "STEM OPT & Scholarships",
  },
  {
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    unis: "DLI Institutions · Up to 3-Yr PGWP · PR Pathways",
    image:
      "https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "canada",
    highlight: "Official Banner · PR Pathways",
  },
  {
    name: "Australia",
    code: "AUS",
    flag: "🇦🇺",
    unis: "Go8 & Tech Unis · Full Spouse Work Rights · PSW",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "australia",
    highlight: "Spouse Full Work Rights",
  },
  {
    name: "Japan",
    code: "JP",
    flag: "🇯🇵",
    unis: "Language to University Degree · High Wages & COE",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "japan",
    highlight: "Official Banner · Work & Study",
  },
  {
    name: "Finland",
    code: "FI",
    flag: "🇫🇮",
    unis: "World-Class Education · 30 Hrs/Wk Work Rights",
    image:
      "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "finland",
    highlight: "Nordic Quality · 30 Hrs Work",
  },
  {
    name: "Malaysia",
    code: "MY",
    flag: "🇲🇾",
    unis: "HELP & MMU Partner · UK/Aus Twinning Degrees",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "malaysia",
    highlight: "Fast Visa & Low Cost",
  },
];

export function PopularDestinationsSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Animated Heading */}
        <MotionHeading
          tag="— GLOBAL HIGHER EDUCATION PATHWAYS —"
          title="Featured Study"
          highlight="Abroad Destinations"
          description="EDU Global provides verified 100% admission support, Free Bank Support for European intakes, and student visa processing across our official banner destinations."
          tagColor="text-emerald-700"
          highlightColor="text-emerald-700"
        />

        {/* 9-Card Responsive Grid with Stagger Entrance */}
        <StaggerContainer
          staggerDelay={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinationsData.map((d) => (
            <StaggerItem key={d.slug} className="h-full">
              <Link
                to="/study-in-{$country}"
                params={{ country: d.slug }}
                className="group relative block overflow-hidden rounded-3xl border border-slate-200 bg-[#090c1f] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover-lift h-full"
              >
                {/* Background Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={d.image}
                    alt={`Study in ${d.name} with EDU Global`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Top Flag & Code Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/20">
                    <span className="text-base">{d.flag}</span>
                    <span>{d.code}</span>
                  </div>

                  {/* Top-Right Highlight Pill */}
                  {d.highlight && (
                    <div className="absolute top-4 right-4 rounded-full bg-amber-500 text-slate-950 px-2.5 py-0.5 text-[0.65rem] font-black shadow-md">
                      {d.highlight}
                    </div>
                  )}

                  {/* Bottom Text Content Inside Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display text-xl font-black group-hover:text-amber-300 transition-colors">
                      {d.name}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-slate-300 mt-1">
                      <span className="truncate max-w-[200px]">{d.unis}</span>
                      <span className="flex items-center gap-1 font-bold text-amber-400 group-hover:translate-x-1 transition-transform shrink-0">
                        <span>Details</span>
                        <IconArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            to="/destinations"
            className="btn-luxury-secondary text-xs sm:text-sm py-3 px-8 rounded-full border border-slate-300 hover:border-amber-500 hover:text-amber-700 transition-all font-bold inline-flex items-center gap-2"
          >
            <span>View All 9+ Banner Destinations & Requirements</span>
            <IconArrowRight className="w-4 h-4 text-amber-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
