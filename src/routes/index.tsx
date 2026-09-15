import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HeroCommandCenter } from "@/components/home/hero-command-center";
import { QuickLeadSection } from "@/components/home/quick-lead-section";
import { StatsImpactStrip } from "@/components/home/stats-impact-strip";
import { PopularDestinationsSection } from "@/components/home/popular-destinations-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { DelegationSpotlight } from "@/components/home/delegation-spotlight";
import { BlogUpdatesSection } from "@/components/home/blog-updates-section";
import { MobileActionDock } from "@/components/home/mobile-action-dock";
import { OfficeGallery } from "@/components/office-gallery";
import { VideoReelsSection } from "@/components/video-reels-section";
import { Testimonials } from "@/components/testimonials";
import { UniversityMarquee, CtaBand, IconSparkles } from "@/components/ui-blocks";
import { faqs, company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LiveActivityToast } from "@/components/live-activity-toast";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${company.legalName} | AcademiaZ — Japanese Language Training & Visa Consultancy | Rajshahi`,
      },
      {
        name: "description",
        content:
          "AcademiaZ — Japanese Language Training & Visa Consultancy in Rajshahi. Managed directly from Japan (জাপান থেকে পরিচালিত). Japanese Language (JLPT N5 & N4, NAT-TEST, JFT-Basic), TITP & SSW (Work in Japan), Student Visa, IELTS, Spoken English, Kids English (Ages 5–14). Kadirganj, Greater Road (Lane beside Ma Photostat), Rajshahi. Hotlines: 01518-951062 / 01632-372232.",
      },
      { property: "og:title", content: `${company.legalName} — Learn · Grow · Achieve` },
      {
        property: "og:description",
        content:
          "Premier Japanese Language Academy & Visa Consultancy in Rajshahi. Managed directly from Japan. Specializing in Japanese N5/N4, TITP/SSW work programs, student visas, and IELTS coaching.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [activeFaqCategory, setActiveFaqCategory] = useState("All");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqCategories = [
    "All",
    "Japanese Language",
    "Japan Visa & SSW",
    "IELTS & English",
    "Campus & Guidance",
  ];

  const filteredFaqs =
    activeFaqCategory === "All"
      ? faqs
      : faqs.filter((f) => {
          if (activeFaqCategory === "Japanese Language")
            return (
              f.q.toLowerCase().includes("japanese") ||
              f.q.toLowerCase().includes("n5") ||
              f.q.toLowerCase().includes("n4") ||
              f.a.toLowerCase().includes("japanese") ||
              f.a.toLowerCase().includes("nat-test") ||
              f.a.toLowerCase().includes("jlpt")
            );
          if (activeFaqCategory === "Japan Visa & SSW")
            return (
              f.q.toLowerCase().includes("visa") ||
              f.q.toLowerCase().includes("ssw") ||
              f.q.toLowerCase().includes("titp") ||
              f.a.toLowerCase().includes("visa") ||
              f.a.toLowerCase().includes("ssw") ||
              f.a.toLowerCase().includes("work")
            );
          if (activeFaqCategory === "IELTS & English")
            return (
              f.q.toLowerCase().includes("english") ||
              f.q.toLowerCase().includes("ielts") ||
              f.q.toLowerCase().includes("kids") ||
              f.a.toLowerCase().includes("english") ||
              f.a.toLowerCase().includes("ielts")
            );
          if (activeFaqCategory === "Campus & Guidance")
            return (
              f.q.toLowerCase().includes("rajshahi") ||
              f.q.toLowerCase().includes("japan") ||
              f.a.toLowerCase().includes("rajshahi") ||
              f.a.toLowerCase().includes("japan")
            );
          return true;
        });

  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-900 selection:bg-sky-600 selection:text-white">
      {/* 1. Destination Hero Slider with Real-time Success Toast */}
      <HeroCommandCenter />

      {/* 2. Fast-Track Lead Form & Side-by-Side Stat Highlights */}
      <ScrollReveal direction="up" delay={50}>
        <QuickLeadSection />
      </ScrollReveal>

      {/* 3. Partner Institutions Showcase & Marquee */}
      <ScrollReveal direction="fade" delay={50}>
        <UniversityMarquee />
      </ScrollReveal>

      {/* 4. Impact Stats ("Learn · Grow · Achieve") */}
      <ScrollReveal direction="up" delay={60}>
        <StatsImpactStrip />
      </ScrollReveal>

      {/* 5. Popular Study Destinations Grid ("Where will you study?") */}
      <ScrollReveal direction="up" delay={60}>
        <PopularDestinationsSection />
      </ScrollReveal>

      {/* 6. Why Choose AcademiaZ */}
      <ScrollReveal direction="up" delay={60}>
        <WhyChooseSection />
      </ScrollReveal>

      {/* 7. 5-Step Process Timeline ("How It Works") */}
      <ScrollReveal direction="up" delay={60}>
        <HowItWorksSection />
      </ScrollReveal>

      {/* 8. Language Academy & 8 Visa Categories Spotlight */}
      <ScrollReveal direction="up" delay={60}>
        <DelegationSpotlight />
      </ScrollReveal>

      {/* 9. Official Facebook Video Reels Showcase */}
      <ScrollReveal direction="up" delay={60}>
        <VideoReelsSection />
      </ScrollReveal>

      {/* 10. Rajshahi Campus & Japan Direct Oversight */}
      <ScrollReveal direction="up" delay={60}>
        <section className="section-shell py-14 sm:py-20 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-700 mb-2.5">
              <IconSparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Campus & Japan Oversight</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Inside <span className="text-sky-600">AcademiaZ</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Visit our academy at Kadirganj, Greater Road, Rajshahi and benefit
              from our 100% Japan-managed standards and direct oversight.
            </p>
          </div>

          <OfficeGallery />
        </section>
      </ScrollReveal>

      {/* 11. Student Testimonials ("What our students say") */}
      <ScrollReveal direction="up" delay={60}>
        <Testimonials />
      </ScrollReveal>

      {/* 12. Latest Updates / Blog Grid ("Latest updates") */}
      <ScrollReveal direction="up" delay={60}>
        <BlogUpdatesSection />
      </ScrollReveal>

      {/* 13. Minimalist Categorized FAQ Accordion */}
      <ScrollReveal direction="up" delay={60}>
        <section className="section-shell py-14 sm:py-20 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-700 mb-2.5">
              <IconSparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Clear Answers</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked <span className="text-sky-600">Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Direct, transparent answers regarding Japanese language courses (N5/N4), Japan student & SSW visa procedures, IELTS, and our Rajshahi campus.
            </p>
          </div>

          {/* FAQ Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-8">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveFaqCategory(cat);
                  setOpenFaqIndex(0);
                }}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer active:scale-95",
                  activeFaqCategory === cat
                    ? "bg-slate-900 text-white shadow-xs border border-slate-800"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Modern Clean Accordion List */}
          <div className="max-w-3xl mx-auto space-y-3">
            {filteredFaqs.slice(0, 6).map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen
                      ? "bg-white border-sky-500 shadow-md ring-1 ring-sky-500/20"
                      : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer active:scale-[0.99] transition-transform"
                  >
                    <span className="font-display text-sm sm:text-base font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300",
                        isOpen ? "bg-sky-600 text-white rotate-180" : "bg-slate-100 text-slate-600",
                      )}
                    >
                      ↓
                    </span>
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-medium">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* 14. Pre-Footer High-Converting Banner */}
      <CtaBand />

      {/* 15. Ergonomic Floating Thumb Action Dock on Mobile */}
      <MobileActionDock />

      {/* 16. Live Real-Time Success Activity Toast */}
      <LiveActivityToast />
    </div>
  );
}
