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
import { VisaPathfinder } from "@/components/home/visa-pathfinder";
import { Testimonials } from "@/components/testimonials";
import { UniversityMarquee, CtaBand, IconSparkles } from "@/components/ui-blocks";
import { faqs, company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/scroll-reveal";
import { LiveActivityToast } from "@/components/live-activity-toast";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${company.name} | Study Abroad Consultancy & IELTS Language Academy | Dhanmondi, Dhaka`,
      },
      {
        name: "description",
        content:
          "EDU Global — Your Gateway to the World! Europe, UK, USA, Canada, Australia, New Zealand, Japan, South Korea, and Malaysia. 100% Admission Guidance, Free Bank Support Offer, Study Gap Accepted, Low CGPA Solutions. Head Office: Keari Plaza (Lift-3), Road 8/A, Dhanmondi, Dhaka. Hotlines: +880 1901-402990, +880 1901-402992.",
      },
      { property: "og:title", content: `${company.name} — Your Gateway to the World | Study Abroad & Language Academy` },
      {
        property: "og:description",
        content:
          "One stop Solution to Your Journey of Higher Education. 100% Admission Guidance, Free Bank Support Offer, Study Gap Accepted. Head Office: Dhanmondi, Dhaka.",
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
    "Admission Guidance",
    "Free Bank Support",
    "Study Gap & CGPA",
    "Destinations",
    "Dhanmondi Office",
  ];

  const filteredFaqs =
    activeFaqCategory === "All"
      ? faqs
      : faqs.filter((f) => {
          if (activeFaqCategory === "Admission Guidance")
            return (
              f.q.toLowerCase().includes("admission") ||
              f.q.toLowerCase().includes("guidance") ||
              f.a.toLowerCase().includes("admission") ||
              f.a.toLowerCase().includes("guidance")
            );
          if (activeFaqCategory === "Free Bank Support")
            return (
              f.q.toLowerCase().includes("bank") ||
              f.a.toLowerCase().includes("bank") ||
              f.a.toLowerCase().includes("solvency")
            );
          if (activeFaqCategory === "Study Gap & CGPA")
            return (
              f.q.toLowerCase().includes("gap") ||
              f.q.toLowerCase().includes("cgpa") ||
              f.a.toLowerCase().includes("gap") ||
              f.a.toLowerCase().includes("cgpa")
            );
          if (activeFaqCategory === "Destinations")
            return (
              f.q.toLowerCase().includes("destination") ||
              f.q.toLowerCase().includes("countries") ||
              f.a.toLowerCase().includes("countries") ||
              f.a.toLowerCase().includes("europe")
            );
          if (activeFaqCategory === "Dhanmondi Office")
            return (
              f.q.toLowerCase().includes("dhanmondi") ||
              f.q.toLowerCase().includes("located") ||
              f.q.toLowerCase().includes("contact") ||
              f.a.toLowerCase().includes("dhanmondi") ||
              f.a.toLowerCase().includes("keari")
            );
          return true;
        });

  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* 1. Destination Hero Slider with Real-time Success Toast */}
      <HeroCommandCenter />

      {/* 2. Impact Stats ("Learn · Grow · Achieve") */}
      <ScrollReveal direction="up" delay={50}>
        <StatsImpactStrip />
      </ScrollReveal>

      {/* 3. Official Facebook Video Reels Showcase — Elevated for Immediate Proof */}
      <ScrollReveal direction="up" delay={50}>
        <VideoReelsSection />
      </ScrollReveal>

      {/* 4. Interactive Visa Pathfinder / Eligibility Matcher */}
      <ScrollReveal direction="up" delay={60}>
        <VisaPathfinder />
      </ScrollReveal>

      {/* 5. Partner Institutions Showcase & Marquee */}
      <ScrollReveal direction="fade" delay={50}>
        <UniversityMarquee />
      </ScrollReveal>

      {/* 6. Popular Study Destinations Grid */}
      <ScrollReveal direction="up" delay={60}>
        <PopularDestinationsSection />
      </ScrollReveal>

      {/* 7. Language Academy & Core Pillars (IELTS, Spoken, Kids, Japanese) */}
      <ScrollReveal direction="up" delay={60}>
        <DelegationSpotlight />
      </ScrollReveal>

      {/* 8. Fast-Track Lead Form & Side-by-Side Stat Highlights */}
      <ScrollReveal direction="up" delay={60}>
        <QuickLeadSection />
      </ScrollReveal>

      {/* 9. Why Choose EDU Global (The 6 Verified USPs) */}
      <ScrollReveal direction="up" delay={60}>
        <WhyChooseSection />
      </ScrollReveal>

      {/* 10. 5-Step Process Timeline ("How It Works") */}
      <ScrollReveal direction="up" delay={60}>
        <HowItWorksSection />
      </ScrollReveal>

      {/* 11. Official Headquarters & Counseling Center */}
      <ScrollReveal direction="up" delay={60}>
        <section className="section-shell py-14 sm:py-20 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-[#0047ba] mb-2.5">
              <IconSparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Headquarters & Counseling Center</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              EDU Global <span className="text-[#0047ba]">Dhanmondi, Dhaka</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi, Dhaka - 1209 — Direct physical counseling & expert visa advisory.
            </p>
          </div>

          <OfficeGallery />
        </section>
      </ScrollReveal>

      {/* 12. Student Testimonials ("What our students say") */}
      <ScrollReveal direction="up" delay={60}>
        <Testimonials />
      </ScrollReveal>

      {/* 13. Latest Updates / Blog Grid */}
      <ScrollReveal direction="up" delay={60}>
        <BlogUpdatesSection />
      </ScrollReveal>

      {/* 14. Minimalist Categorized FAQ Accordion with Animated Pill */}
      <ScrollReveal direction="up" delay={60}>
        <section className="section-shell py-14 sm:py-20 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-700 mb-2.5">
              <IconSparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Clear Answers</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked <span className="text-[#0047ba]">Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Direct, transparent answers regarding 100% admission guidance, Free Bank Support offer, study gap acceptance, language preparation, and our Dhanmondi office.
            </p>
          </div>

          {/* FAQ Category Filter Pills with layoutId */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {faqCategories.map((cat) => {
              const isActive = activeFaqCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActiveFaqCategory(cat);
                    setOpenFaqIndex(0);
                  }}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-xs font-bold transition-colors cursor-pointer active:scale-95",
                    isActive ? "text-white" : "text-slate-700 hover:text-slate-900 bg-white border border-slate-200",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFaqPill"
                      className="absolute inset-0 rounded-full bg-[#0047ba] shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
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
                      ? "bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20"
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
                        isOpen ? "bg-[#0047ba] text-white rotate-180" : "bg-slate-100 text-slate-600",
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

      {/* 15. Pre-Footer High-Converting Banner */}
      <CtaBand />

      {/* 16. Ergonomic Floating Thumb Action Dock on Mobile */}
      <MobileActionDock />

      {/* 17. Live Real-Time Success Activity Toast */}
      <LiveActivityToast />
    </div>
  );
}
