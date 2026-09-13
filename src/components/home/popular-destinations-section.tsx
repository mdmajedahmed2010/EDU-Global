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
    name: "Japan",
    code: "JP",
    flag: "🇯🇵",
    unis: "50+ Academies & Unis",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "japan",
    highlight: "Tokyo Liaison / SSW Track",
  },
  {
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    unis: "300+ Public Unis",
    image:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "germany",
    highlight: "Tuition-Free & Ausbildung",
  },
  {
    name: "Malaysia",
    code: "MY",
    flag: "🇲🇾",
    unis: "40+ World Campuses",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "malaysia",
    highlight: "Fast Visa & Affordable",
  },
  {
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    unis: "100+ Leading Unis",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "uk",
    highlight: "1-Yr Masters / 2-Yr PSW",
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
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    unis: "150+ Top Unis",
    image:
      "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "usa",
    highlight: "STEM OPT 3 Years",
  },
  {
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    unis: "40+ Universities",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "australia",
    highlight: "Post-Study Work Visa",
  },
  {
    name: "Denmark",
    code: "DK",
    flag: "🇩🇰",
    unis: "20+ Universities",
    image:
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80",
    popular: false,
    slug: "denmark",
    highlight: "Nordic Education",
  },
];

export function PopularDestinationsSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Animated Heading */}
        <MotionHeading
          tag="— GLOBAL HIGHER EDUCATION PATHWAYS —"
          title="Where will you"
          highlight="study or work?"
          description="Nexus Global opens doors to premier academic institutions and career visas across Asia, Europe, and North America."
          tagColor="text-sky-600"
          highlightColor="text-sky-600"
        />

        {/* 8-Card Responsive Grid with Stagger Entrance */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {destinationsData.map((d) => (
            <StaggerItem key={d.slug} className="h-full">
              <Link
                to="/study-in-{$country}"
                params={{ country: d.slug }}
                className="group relative block overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover-lift h-full"
              >
                {/* Background Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={d.image}
                    alt={`Study in ${d.name} with Nexus Global`}
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
                    <div className="absolute top-4 right-4 rounded-full bg-sky-600 text-white px-2.5 py-0.5 text-[0.65rem] font-bold shadow-md">
                      {d.highlight}
                    </div>
                  )}

                  {/* Bottom Text Content Inside Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display text-xl font-black group-hover:text-sky-300 transition-colors">
                      {d.name}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-slate-300 mt-1">
                      <span>{d.unis}</span>
                      <span className="flex items-center gap-1 font-bold text-sky-400 group-hover:translate-x-1 transition-transform">
                        <span>Explore</span>
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
            className="btn-luxury-secondary text-xs sm:text-sm py-3 px-8 rounded-full border border-slate-300 hover:border-sky-600 hover:text-sky-700 transition-all font-bold inline-flex items-center gap-2"
          >
            <span>View All Global Destinations & Requirements</span>
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
