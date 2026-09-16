import { useState } from "react";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { company, courses } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function DelegationSpotlight() {
  const { open } = useRegisterModal();
  const [activeCourseIdx, setActiveCourseIdx] = useState(0);
  const currentCourse = courses[activeCourseIdx] ?? courses[0]!;

  const visaCategories = [
    { name: "IELTS Preparation (Cash Back)", icon: "🎯" },
    { name: "Spoken English Fluency", icon: "🗣️" },
    { name: "Kids' English Academy", icon: "🧒" },
    { name: "Opportunity To Move With Family", icon: "👥" },
    { name: "Study in UK (1-Yr Master & PSW)", icon: "🇬🇧" },
    { name: "Study in USA & Australia", icon: "🇺🇸" },
    { name: "Study in Hungary & Europe", icon: "🇭🇺" },
    { name: "Malaysia & Dubai Fast Track", icon: "🇦🇪" },
  ];

  return (
    <section className="section-shell py-10 sm:py-16">
      <div className="rounded-3xl border border-slate-800 bg-[#090c1f] p-4 sm:p-8 lg:p-12 relative overflow-hidden text-white shadow-2xl">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-amber-500/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-600/15 blur-[100px]" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center relative z-10">
          {/* Left: Language Academy Interactive Course Selector */}
          <SlideIn direction="left" distance={45} className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-400/30 px-3.5 py-1 text-xs font-bold text-amber-300">
              <IconSparkles className="w-3.5 h-3.5" />
              <span>Higher Study Counselors Bangladesh · Sector 3, Uttara</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
              Master IELTS, English & Study Abroad <br />
              <span className="text-amber-400">Cash Back Offer, Spoken English & Global Visas</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-bangla">
              আইইএলটিএস পরীক্ষায় কাঙ্ক্ষিত ব্যান্ড স্কোর অর্জন কিংবা ইউকে, ইউএসএ, অস্ট্রেলিয়া ও ইউরোপে বিশ্বমানের উচ্চশিক্ষা—Higher Study Counselors Bangladesh নিশ্চিত করে অভিজ্ঞ মেন্টর, ক্যাশ ব্যাক অফার ও স্বচ্ছ ভিসা গাইডলাইন।
            </p>

            {/* Course Selector Tabs */}
            <div className="flex flex-wrap gap-2 pt-1">
              {courses.map((c, idx) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setActiveCourseIdx(idx)}
                  className={cn(
                    "flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer active:scale-95",
                    activeCourseIdx === idx
                      ? "bg-amber-500 text-slate-950 shadow-md border border-amber-400 font-extrabold"
                      : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700",
                  )}
                >
                  <span className="text-base">{c.icon}</span>
                  <span>
                    {c.title.split(" ")[0]} {c.title.split(" ")[1] || ""}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Course Highlights */}
            <div className="rounded-2xl bg-slate-900/80 border border-slate-700 p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-display font-bold text-base text-white flex items-center gap-2">
                  <span>{currentCourse.icon}</span>
                  <span>{currentCourse.title}</span>
                </span>
                <span className="rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 text-[0.68rem] font-bold">
                  {currentCourse.targetOutcome}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-bangla">{currentCourse.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {currentCourse.highlights.slice(0, 4).map((h) => (
                  <div key={h} className="flex items-start gap-2 text-[0.72rem] text-slate-300">
                    <IconCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={open}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 text-xs sm:text-sm font-bold shadow-lg transition-all cursor-pointer active:scale-95"
              >
                <span>ফ্রি প্রোফাইল এসেসমেন্ট বুকিং</span>
                <IconArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/50 bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 px-5 py-3 text-xs sm:text-sm font-bold transition-all"
              >
                <IconWhatsApp className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {company.whatsappFormatted}</span>
              </a>
            </div>
          </SlideIn>

          {/* Right: Quick Services Grid Matrix */}
          <SlideIn direction="right" distance={45}>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-6 space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                  Core Education & Visa Portfolio
                </span>
                <h3 className="font-display text-lg font-bold text-white mt-1">
                  Higher Study Counselors Bangladesh Services
                </h3>
              </div>

              <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 gap-2.5">
                {visaCategories.map((item) => (
                  <StaggerItem key={item.name}>
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/60 transition-colors">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-xs font-semibold text-slate-200">{item.name}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>📍 House 23, Road 2, Sector 3, Uttara</span>
                <span className="text-amber-400 font-bold">Hotline: {company.phones[0]}</span>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
