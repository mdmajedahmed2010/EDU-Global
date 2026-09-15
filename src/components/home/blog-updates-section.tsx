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
    title: "Study in Japan: Japanese N5/N4 Mastery, COE Processing & Student Visa Guide",
    excerpt:
      "Comprehensive guidance on learning Japanese in Rajshahi, achieving JLPT/NAT-TEST/JFT qualifications, and securing your COE directly supervised under our Japan-based management.",
    date: "September 2026",
    tag: "Japan Flagship Track",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    slug: "japan-student-visa-guide",
  },
  {
    title: "Work in Japan: TITP Trainee & SSW (Specified Skilled Worker) Program Preparation",
    excerpt:
      "Explore high-demand career pathways in Japan. Complete your N4 language proficiency, interview grooming, and authentic documentation support in Rajshahi.",
    date: "September 2026",
    tag: "Career in Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    slug: "japan-work-ssw-titp-guide",
  },
  {
    title: "IELTS 7.5+, Spoken English & Kids English (Ages 5–14) at Kadirganj Campus",
    excerpt:
      "Interactive, communicative English coaching in Rajshahi. Structured batches for university aspirants, job seekers, and specialized language development for children.",
    date: "September 2026",
    tag: "English Academy",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    slug: "ielts-spoken-kids-english-rajshahi",
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
          description="Essential Japan intake roadmaps, Japanese language N5/N4 updates, and IELTS mastery tips from AcademiaZ Rajshahi."
          tagColor="text-sky-600"
          highlightColor="text-sky-600"
        />

        {/* 3 Blog Cards Grid with Staggered Motion */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {posts.map((post) => (
            <StaggerItem key={post.title} className="h-full">
              <div className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/40 flex flex-col justify-between hover-lift h-full">
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
                    <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
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
                      className="font-bold text-sky-600 hover:text-sky-700 transition-colors inline-flex items-center gap-1 group-hover:translate-x-1 duration-200"
                    >
                      <span>Read More</span>
                      <IconArrowRight className="w-3.5 h-3.5" />
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
