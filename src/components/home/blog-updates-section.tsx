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
    title: "Free Bank Support Offer: সাইপ্রাস ও ইউরোপের প্রথম ২০ জন শিক্ষার্থীর বিশেষ সুযোগ",
    excerpt:
      "ইডিইউ গ্লোবাল-এর বিশেষ ক্যাম্পেইন—আসন্ন সাইপ্রাস ও ইউরোপীয় ইউনিয়নের ইনটেকে আবেদনের ক্ষেত্রে প্রথম ২০ জন শিক্ষার্থীর জন্য রয়েছে বিশেষ ফ্রি ব্যাংক সাপোর্ট সুবিধা।",
    date: "Latest Campaign",
    tag: "Exclusive Offer",
    image: "/banner.png",
    slug: "free-bank-support-offer-cyprus-europe",
  },
  {
    title: "100% Admission Support: যুক্তরাজ্য ও ইউরোপের শীর্ষ বিশ্ববিদ্যালয়ে ভর্তির সুযোগ",
    excerpt:
      "যুক্তরাজ্যের Canterbury Christ Church University সহ বিশ্বের স্বনামধন্য বিশ্ববিদ্যালয়ে সরাসরি শতভাগ এডমিশন সাপোর্ট দিচ্ছে EDU Global।",
    date: "University Partner",
    tag: "Direct Admissions",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    slug: "direct-university-admissions-uk-europe",
  },
  {
    title: "Study Gap & Low CGPA 2.5+: শিক্ষাবিরতি থাকলেও যেভাবে ভিসা নিশ্চিত করবেন",
    excerpt:
      "এইচএসসি বা গ্র্যাজুয়েশনের পর দীর্ঘ স্টাডি গ্যাপ (১০+ বছর) এবং CGPA ২.৫+ থাকলেও সঠিক জব এক্সপেরিয়েন্স ও পোর্টফোলিও দেখিয়ে ভিসা প্রাপ্তির নির্ভরযোগ্য কৌশল।",
    date: "Profile Guidance",
    tag: "Gap Accepted",
    image:
      "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80",
    slug: "long-study-gap-low-cgpa-solutions",
  },
];

export function BlogUpdatesSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Animated Section Header */}
        <MotionHeading
          tag="— OFFICIAL INSIGHTS & VISA UPDATES —"
          title="Latest"
          highlight="insights"
          description="ফ্রি ব্যাংক সাপোর্ট অফার, ১০০% এডমিশন গাইডলাইন এবং স্টাডি গ্যাপ সলিউশন সংক্রান্ত প্রামাণ্য তথ্য।"
          tagColor="text-emerald-700"
          highlightColor="text-emerald-700"
        />

        {/* 3 Blog Cards Grid with Staggered Motion */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <article className="rounded-3xl border border-slate-200/80 bg-slate-50/30 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 flex flex-col justify-between hover-lift group h-full">
                {/* Post Featured Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[0.68rem] font-bold text-white border border-white/20">
                      {post.tag}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div className="space-y-3">
                    <span className="text-[0.68rem] font-bold text-emerald-700 uppercase tracking-wider block">
                      {post.date}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-slate-950 leading-snug group-hover:text-emerald-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed font-bangla line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors"
                    >
                      <span>বিস্তারিত জানুন</span>
                      <IconArrowRight className="w-3.5 h-3.5 text-emerald-600 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <span className="text-[0.68rem] text-slate-600 font-bold">EDU Global</span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
