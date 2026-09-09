import { Link } from "@tanstack/react-router";
import { IconArrowRight } from "@/components/ui-blocks";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  tag: string;
}

const posts: BlogPost[] = [
  {
    title: "Finland January 2027 Joint Application: Dates, UAS Programs & Free File Opening",
    excerpt:
      "Everything you need to know about the upcoming Joint Application (31 August – 10 September 2026), rolling admissions with no entrance exam, and spouse work rights.",
    date: "September 2026",
    tag: "Finland January 2027",
    image:
      "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80",
    slug: "finland-january-2027-guide",
  },
  {
    title: "Hungary Stipendium Hungaricum: How to Secure 100% Free European Scholarship & Stipend",
    excerpt:
      "Step-by-step guidance on applying for full tuition waivers, monthly living stipends, free university dormitories, and health insurance in Hungary.",
    date: "August 2026",
    tag: "Europe Scholarship",
    image:
      "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=800&q=80",
    slug: "hungary-stipendium-guide",
  },
  {
    title: "IELTS Band 7.5+ Roadmap: Weekly Cambridge Mock Tests & Speaking Mastery in Sylhet",
    excerpt:
      "How our dedicated instructors at Rang Mohol Tower, Bandar Bazar help students jump from Band 6.0 to 7.5+ in just 2 months with personalized feedback.",
    date: "August 2026",
    tag: "Language Academy",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    slug: "ielts-band-7-roadmap",
  },
];

export function BlogUpdatesSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Animated Section Header */}
        <MotionHeading
          tag="— OFFICIAL UPDATES & INSIGHTS —"
          title="Latest"
          highlight="insights"
          description="Essential intake roadmaps, scholarship announcements, and language mastery tips from RANS Scholarships counselors."
          tagColor="text-[#043E8B]"
          highlightColor="text-red-600"
        />

        {/* 3 Blog Cards Grid with Staggered Motion */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {posts.map((post) => (
            <StaggerItem key={post.title} className="h-full">
              <div className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-red-400/40 flex flex-col justify-between hover-lift h-full">
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[0.68rem] font-bold text-white border border-white/20">
                    {post.tag}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#043E8B] group-hover:text-red-600 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer with Date and Read More */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-5 text-xs">
                    <span className="text-slate-400 font-semibold">{post.date}</span>
                    <Link
                      to="/offers"
                      className="font-bold text-red-600 hover:text-red-700 transition-colors inline-flex items-center gap-1 group-hover:translate-x-1 duration-200"
                    >
                      <span>Read More</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
