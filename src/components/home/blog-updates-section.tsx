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
    title: "Computer-Based IELTS Mock Test: কেন এটি পরীক্ষার আসল ভয় দূর করতে সবচেয়ে কার্যকর?",
    excerpt:
      "কুষ্টিয়ায় আমাদের আধুনিক সাউন্ড ল্যাবে ব্যক্তিগত হেডসেট ও রিয়েল এক্সাম এনভায়রনমেন্টে মাত্র ৩০০ টাকায় পূর্ণাঙ্গ CBT মক টেস্টের সুবিধা এবং বিস্তারিত ব্যান্ড স্কোর এনালাইসিস।",
    date: "September 2026",
    tag: "IELTS Mock Test",
    image: "/banner.png",
    slug: "computer-based-ielts-mock-test-kushtia",
  },
  {
    title: "Study in Portugal & Europe: কম খরচে ইংরেজি মাধ্যমে বিশ্বমানের উচ্চশিক্ষা",
    excerpt:
      "পর্তুগাল ও চেক রিপাবলিকে সাশ্রয়ী টিউশন ফি, পার্ট-টাইম কাজের সুযোগ এবং সেনজেনভুক্ত ২৯ দেশে অবাধ ভ্রমণের জন্য কুষ্টিয়া আইইএলটিএস কেয়ারের পূর্ণাঙ্গ ভিসা প্রসেসিং গাইড।",
    date: "September 2026",
    tag: "Europe Study Abroad",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    slug: "study-in-portugal-europe-guide",
  },
  {
    title: "IELTS Speaking & Spoken Fluency: আত্মবিশ্বাসের সাথে কথা বলার সেরা কৌশল",
    excerpt:
      "প্রাত্যহিক যোগাযোগ ও আইইএলটিএস স্পিকিং ব্যান্ড ৭.৫+ অর্জনে আমাদের ওয়ান-টু-ওয়ান স্পিকিং সেশন এবং ছোটদের জন্য স্পেশাল কিডস ইংলিশ প্রোগ্রাম।",
    date: "September 2026",
    tag: "Spoken & Kids English",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    slug: "ielts-speaking-kids-english-kushtia",
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
          description="IELTS প্রস্তুতি, ৩০০ টাকায় কম্পিউটার মক টেস্ট এবং পর্তুগাল ও ইউরোপ উচ্চশিক্ষার সর্বশেষ তথ্য।"
          tagColor="text-amber-600"
          highlightColor="text-amber-600"
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
