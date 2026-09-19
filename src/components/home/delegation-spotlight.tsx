import { useState } from "react";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { company, courses } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { motion, AnimatePresence } from "framer-motion";

export function DelegationSpotlight() {
  const { open } = useRegisterModal();
  const [activeCourseIdx, setActiveCourseIdx] = useState(0);
  const currentCourse = courses[activeCourseIdx] ?? courses[0]!;

  const visaCategories = [
    { name: "100% Admission Guidance", icon: "🎓" },
    { name: "Free Bank Support Offer", icon: "🏛️" },
    { name: "IELTS Prep (Band 7.5+)", icon: "🎯" },
    { name: "Spoken English Fluency", icon: "🗣️" },
    { name: "Kids' English Academy", icon: "🧒" },
    { name: "Japanese Language (JLPT)", icon: "🇯🇵" },
    { name: "Canterbury Christ Church Partner", icon: "🇬🇧" },
    { name: "Cyprus & Europe Visa Track", icon: "🇨🇾" },
  ];

  return (
    <section className="section-shell py-10 sm:py-16">
      <div className="rounded-3xl border border-slate-800 bg-[#07132b] p-5 sm:p-8 lg:p-12 relative overflow-hidden text-white shadow-2xl">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-blue-500/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-amber-500/15 blur-[100px]" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center relative z-10">
          {/* Left: Language Academy Interactive Course Selector */}
          <SlideIn direction="left" distance={45} className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-300">
              <IconSparkles className="w-3.5 h-3.5" />
              <span>EDU Global Language Academy · Dhanmondi HQ</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
              Master IELTS, Spoken English & Global Visas <br />
              <span className="text-blue-400">British Council Aligned & 100% Admission Guidance</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Achieve your target IELTS band score (7.5+), overcome English speaking hesitation, or give your children an early linguistic foundation at our modern Dhanmondi campus.
            </p>
            <p className="text-xs text-slate-400 font-bangla max-w-xl">
              আইইএলটিএস পরীক্ষায় কাঙ্ক্ষিত ব্যান্ড স্কোর কিংবা বিশ্বমানের উচ্চশিক্ষা—অভিজ্ঞ মেন্টর ও স্বচ্ছ ভিসা গাইডলাইন।
            </p>

            {/* Course Selector Tabs with Animated Sliding Pill */}
            <div className="flex flex-wrap gap-2 pt-1">
              {courses.map((c, idx) => {
                const isActive = activeCourseIdx === idx;
                return (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => setActiveCourseIdx(idx)}
                    className={cn(
                      "relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-colors cursor-pointer active:scale-95",
                      isActive ? "text-white" : "text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700",
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSpotlightCoursePill"
                        className="absolute inset-0 rounded-xl bg-[#0047ba] border border-blue-400 shadow-md"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 text-base">{c.icon}</span>
                    <span className="relative z-10 font-bold">
                      {c.title.split(" ")[0]} {c.title.split(" ")[1] || ""}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Course Highlights with AnimatePresence */}
            <div className="rounded-2xl bg-slate-900/90 border border-slate-700 p-5 space-y-3 min-h-[190px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCourse.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display font-bold text-base text-white flex items-center gap-2">
                      <span>{currentCourse.icon}</span>
                      <span>{currentCourse.title}</span>
                    </span>
                    <span className="rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2.5 py-0.5 text-[0.68rem] font-bold">
                      {currentCourse.targetOutcome}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {currentCourse.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {currentCourse.highlights.slice(0, 4).map((h) => (
                      <div key={h} className="flex items-start gap-2 text-[0.72rem] text-slate-300">
                        <IconCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <motion.button
                type="button"
                whileTap={{ scale: 0.97 }}
                whileHover={{ translateY: -2 }}
                onClick={open}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0047ba] hover:bg-blue-600 text-white px-6 py-3 text-xs sm:text-sm font-bold shadow-lg transition-all cursor-pointer"
              >
                <span>Book Free Academy Assessment</span>
                <IconArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileTap={{ scale: 0.97 }}
                whileHover={{ translateY: -2 }}
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello EDU Global! I would like to inquire about the ${currentCourse.title} at your Dhanmondi campus.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/50 bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 px-5 py-3 text-xs sm:text-sm font-bold transition-all"
              >
                <IconWhatsApp className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {company.whatsappFormatted}</span>
              </motion.a>
            </div>
          </SlideIn>

          {/* Right: Quick Services Grid Matrix */}
          <SlideIn direction="right" distance={45}>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-6 space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-xs font-black uppercase tracking-widest text-blue-400">
                  Comprehensive Education Portfolio
                </span>
                <h3 className="font-display text-lg font-bold text-white mt-1">
                  EDU Global Services & Wings
                </h3>
              </div>

              <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 gap-2.5">
                {visaCategories.map((item) => (
                  <StaggerItem key={item.name}>
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-400/60 transition-colors">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-xs font-semibold text-slate-200">{item.name}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>📍 Keari Plaza, Dhanmondi, Dhaka</span>
                <span className="text-emerald-400 font-semibold">● Admissions Open</span>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
