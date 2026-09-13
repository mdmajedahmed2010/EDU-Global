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
    title: "Study in Germany: Tuition-Free Public Universities, APS & Goethe German Prep",
    excerpt:
      "Step-by-step guide on German public university admissions, APS certificate procedures, blocked accounts, and Goethe-Institut German language batches (A1–B2).",
    date: "September 2026",
    tag: "Germany Tuition-Free",
    image:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=800&q=80",
    slug: "germany-tuition-free-guide",
  },
  {
    title: "Denmark Higher Education & Career Pathways: Danish Language Course in Chattogram",
    excerpt:
      "Learn why Denmark is an elite destination for Bangladeshi scholars, combining high-quality Scandinavian degrees with exclusive Danish language coaching at AB STUDY HUB.",
    date: "August 2026",
    tag: "Denmark Pathway",
    image:
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80",
    slug: "denmark-pathway-guide",
  },
  {
    title: "IELTS Private Batch (Band 7.5+ Target): Intensive Coaching at Commerce View Complex",
    excerpt:
      "Why our strictly capped 10–12 students private batches at East Nasirabad, Chattogram consistently produce Band 7.5+ scores with 1-on-1 speaking mock evaluations.",
    date: "August 2026",
    tag: "Language Academy",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    slug: "ielts-private-batch-guide",
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
          description="Essential intake roadmaps, European admission guidelines, and language mastery tips from AB STUDY HUB counselors."
          tagColor="text-red-600"
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
