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
        title: `${company.legalName} | Study Abroad Consultancy & IELTS Language Academy | Sector 3, Uttara, Dhaka & Glasgow, UK`,
      },
      {
        name: "description",
        content:
          "Higher Study Counselors Bangladesh (Since 2012) — Your Trusted Global Education & Language Partner! UK, USA, Australia, Hungary, Canada, Finland, Denmark, Malaysia, Dubai. IELTS Cash Back On Visa Success, Opportunity To Move With Family, Long Study Gap Accepted, Low Tuition Fees. Head Office: Sector 3, Uttara, Dhaka. UK Office: Glasgow, UK. Hotlines: 01974843470, 01676997222.",
      },
      { property: "og:title", content: `${company.legalName} — Since 2012 | Study Abroad & Language Academy` },
      {
        property: "og:description",
        content:
          "Trusted Global Education Consultancy & Language Academy since 2012. 100% IELTS Cash Back on Visa Success, Move with Family, Study Gap Accepted. Offices in Uttara, Dhaka & Glasgow, UK.",
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
    "IELTS & Cash Back",
    "Move With Family",
    "Study Gap Accepted",
    "UK & Global Destinations",
    "Offices & Admission",
  ];

  const filteredFaqs =
    activeFaqCategory === "All"
      ? faqs
      : faqs.filter((f) => {
          if (activeFaqCategory === "IELTS & Cash Back")
            return (
              f.q.toLowerCase().includes("ielts") ||
              f.q.toLowerCase().includes("cash back") ||
              f.q.toLowerCase().includes("cashback") ||
              f.a.toLowerCase().includes("ielts") ||
              f.a.toLowerCase().includes("cash back")
            );
          if (activeFaqCategory === "Move With Family")
            return (
              f.q.toLowerCase().includes("family") ||
              f.q.toLowerCase().includes("spouse") ||
              f.a.toLowerCase().includes("family") ||
              f.a.toLowerCase().includes("spouse")
            );
          if (activeFaqCategory === "Study Gap Accepted")
            return (
              f.q.toLowerCase().includes("gap") ||
              f.a.toLowerCase().includes("gap")
            );
          if (activeFaqCategory === "UK & Global Destinations")
            return (
              f.q.toLowerCase().includes("uk") ||
              f.q.toLowerCase().includes("destination") ||
              f.q.toLowerCase().includes("abroad") ||
              f.a.toLowerCase().includes("uk") ||
              f.a.toLowerCase().includes("countries")
            );
          if (activeFaqCategory === "Offices & Admission")
            return (
              f.q.toLowerCase().includes("uttara") ||
              f.q.toLowerCase().includes("office") ||
              f.q.toLowerCase().includes("apply") ||
              f.a.toLowerCase().includes("uttara") ||
              f.a.toLowerCase().includes("glasgow")
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

      {/* 6. Why Choose Higher Study Counselors Bangladesh */}
      <ScrollReveal direction="up" delay={60}>
        <WhyChooseSection />
      </ScrollReveal>

      {/* 7. 5-Step Process Timeline ("How It Works") */}
      <ScrollReveal direction="up" delay={60}>
        <HowItWorksSection />
      </ScrollReveal>

      {/* 8. Language Academy & Core Pillars */}
      <ScrollReveal direction="up" delay={60}>
        <DelegationSpotlight />
      </ScrollReveal>

      {/* 9. Official Facebook Video Reels Showcase */}
      <ScrollReveal direction="up" delay={60}>
        <VideoReelsSection />
      </ScrollReveal>

      {/* 10. Official Headquarters & Global Centers */}
      <ScrollReveal direction="up" delay={60}>
        <section className="section-shell py-14 sm:py-20 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-700 mb-2.5">
              <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Headquarters & International Presence</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Higher Study Counselors <span className="text-amber-500">Bangladesh</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              House 23, Road 2, 1st Floor, Sector 3, Uttara, Dhaka - 1230 & 3A Westburn Road, Glasgow, UK — Direct physical counseling & expert visa advisory since 2012.
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
              Frequently Asked <span className="text-amber-500">Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Direct, transparent answers regarding IELTS Cash Back on visa success, Opportunity to Move with Family, Long Study Gap acceptance, UK/USA admissions, and our Uttara & Glasgow offices.
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
