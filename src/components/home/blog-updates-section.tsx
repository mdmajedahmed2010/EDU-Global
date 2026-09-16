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
    title: "IELTS Cash Back On Visa Success: যেভাবে নিজের সম্পূর্ণ টেস্ট ফি ফেরত পাবেন",
    excerpt:
      "হায়ার স্টাডি কাউন্সেলরস বাংলাদেশ-এর বিশেষ অফার—আমাদের সাথে IELTS প্রস্তুতি নিয়ে ভিসা প্রসেস সম্পন্ন করলেই ভিসা সাকসেসে পাচ্ছেন ১০০% IELTS পরীক্ষার ফি রিফান্ড সুবিধা।",
    date: "Latest Guide",
    tag: "Exclusive Offer",
    image: "/banner.jpg",
    slug: "ielts-cashback-visa-success",
  },
  {
    title: "Opportunity To Move With Family: ইউকে ও অস্ট্রেলিয়ায় স্পাউস সহ ভিসা গাইডলাইন",
    excerpt:
      "পরিবারকে রেখে একা নয়—ইউকে, অস্ট্রেলিয়া, ফিনল্যান্ড ও ডেনমার্কে মাস্টার্স শিক্ষার্থীদের জন্য স্পাউস ও সন্তানসহ একত্রে যাওয়ার বিস্তারিত ভিসা নিয়মাবলী ও কাজের অধিকার।",
    date: "Family Relocation",
    tag: "Family Move",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    slug: "move-with-family-uk-australia",
  },
  {
    title: "Long Study Gap Accepted: দীর্ঘ স্টাডি গ্যাপ থাকলেও যেভাবে ভিসা নিশ্চিত করবেন",
    excerpt:
      "এইচএসসি বা গ্র্যাজুয়েশনের পর ৫ থেকে ১০ বছরের গ্যাপ থাকলেও হতাশ হবেন না। হাঙ্গেরি, ইউকে, মালয়েশিয়া ও দুবাইতে জব এক্সপেরিয়েন্স দেখিয়ে ভিসা পাওয়ার কৌশল।",
    date: "Admission Tips",
    tag: "Study Gap Accepted",
    image:
      "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80",
    slug: "long-study-gap-accepted-abroad",
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
          description="IELTS ক্যাশ ব্যাক অফার, ফ্যামিলি ও স্পাউস ভিসা সুবিধা এবং স্টাডি গ্যাপ একসেপ্টেন্স সংক্রান্ত প্রামাণ্য তথ্য।"
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
              <div className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/50 flex flex-col justify-between hover-lift h-full">
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#090c1f]">
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
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#161b38] group-hover:text-amber-600 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-bangla line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer with Date and Read More */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-5 text-xs">
                    <span className="text-slate-400 font-semibold">{post.date}</span>
                    <Link
                      to="/offers"
                      className="font-bold text-amber-600 hover:text-amber-700 transition-colors inline-flex items-center gap-1 group-hover:translate-x-1 duration-200"
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
