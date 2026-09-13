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
    { name: "Japan Student Visa", icon: "🇯🇵" },
    { name: "Japan SSW / Work Visa", icon: "🛠️" },
    { name: "Germany Public Uni", icon: "🇩🇪" },
    { name: "Germany Ausbildung", icon: "🏥" },
    { name: "Malaysia Student Visa", icon: "🇲🇾" },
    { name: "UK 1-Year Masters", icon: "🇬🇧" },
    { name: "Canada DLI & PGWP", icon: "🇨🇦" },
    { name: "Tokyo Liaison Reception", icon: "🗼" },
  ];

  return (
    <section className="section-shell py-10 sm:py-16">
      <div className="rounded-3xl border border-slate-800 bg-[#0F172A] p-4 sm:p-8 lg:p-12 relative overflow-hidden text-white shadow-2xl">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-sky-600/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-orange-600/15 blur-[100px]" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center relative z-10">
          {/* Left: Language Academy Interactive Course Selector */}
          <SlideIn direction="left" distance={45} className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-600/20 border border-sky-500/30 px-3.5 py-1 text-xs font-bold text-sky-400">
              <IconSparkles className="w-3.5 h-3.5" />
              <span>Nexus Language & Skill Training Centre · Jashore HQ</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
              Master Global Languages & Career Skills <br />
              <span className="text-sky-400">Japanese, German, IELTS & Spoken English</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Whether preparing for higher education or Specified Skilled Worker (SSW) visas in Japan,
              tuition-free public universities and Ausbildung in Germany, or IELTS Band 7.5+, our experienced
              instructors provide intensive coaching with 100% free books and personalized care.
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
                      ? "bg-sky-600 text-white shadow-md border border-sky-500"
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
            <div className="rounded-2xl bg-slate-800/60 border border-slate-700 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-base text-white flex items-center gap-2">
                  <span>{currentCourse.icon}</span>
                  <span>{currentCourse.title}</span>
                </span>
                <span className="rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 px-2.5 py-0.5 text-[0.68rem] font-bold">
                  {currentCourse.targetOutcome}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{currentCourse.description}</p>

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
                className="btn-shimmer btn-luxury-primary text-xs py-3 px-6 shadow-lg hover:shadow-sky-600/30 active:scale-95 cursor-pointer text-white"
              >
                <span>Enroll in {currentCourse.title.split(" ")[0]} Batch</span>
                <IconArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello Nexus Global! I want to enroll in the ${currentCourse.title} at your Jashore campus. Please provide details.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Counselor</span>
              </a>
            </div>
          </SlideIn>

          {/* Right: 8 Visa Categories Grid & Tokyo Liaison Showcase */}
          <SlideIn direction="right" distance={45} className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400">
                — 8 SPECIALIZED GLOBAL TRACKS —
              </span>
              <h3 className="font-display text-xl sm:text-3xl font-black text-white tracking-tight">
                Global Study & Career Pathways
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                From Japanese student & SSW work visas to German tuition-free universities, Ausbildung,
                and UK/Canada degree admissions.
              </p>
            </div>

            {/* 8 Category Tiles Grid with Stagger */}
            <StaggerContainer staggerDelay={0.06} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {visaCategories.map((v) => (
                <StaggerItem key={v.name}>
                  <div className="rounded-2xl border border-slate-700/80 bg-slate-800/40 p-4 text-center hover:bg-slate-800 hover:border-sky-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer hover-lift">
                    <span className="text-2xl block mb-2 transition-transform duration-300 group-hover:scale-110">
                      {v.icon}
                    </span>
                    <span className="text-[0.7rem] font-bold text-slate-200 group-hover:text-white leading-tight block">
                      {v.name}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Jashore & Tokyo Liaison Highlight Card */}
            <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-r from-sky-950/60 to-slate-900/80 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  International Student Assurance
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our active liaison desk in <strong>Shin-Koiwa, Tokyo, Japan</strong> provides direct
                support for student reception, accommodation assistance, part-time job guidance, and
                school liaison upon landing.
              </p>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
