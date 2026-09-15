import { useState } from "react";
import { testimonials as studentTestimonials } from "@/lib/site-data";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = studentTestimonials.map((r) => ({
    name: r.name,
    role: r.badge,
    destination: `${r.course} (${r.destination})`,
    quote: r.quote,
    stars: 5,
    flag: r.destination.includes("Japan") ? "🇯🇵" : r.destination.includes("Germany") ? "🇩🇪" : "🇬🇧",
    initials: r.name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join(""),
  }));

  const maxIndex = Math.max(0, reviews.length - 3);

  const prev = () => setCurrentIndex((p) => Math.max(0, p - 1));
  const next = () => setCurrentIndex((p) => Math.min(maxIndex, p + 1));

  return (
    <section className="relative py-16 sm:py-24 bg-[#FAFAFC] border-b border-slate-200/80 overflow-hidden">
      <div className="section-shell">
        {/* Animated Section Header */}
        <MotionHeading
          tag="— VERIFIED REVIEWS & SUCCESS STORIES —"
          title="What our students"
          highlight="say"
          description="Real feedback from Japanese N5/N4 learners, TITP & SSW candidates, IELTS test takers, and students guided by AcademiaZ Rajshahi."
          tagColor="text-sky-600"
          highlightColor="text-sky-600"
        />

        {/* Testimonials Carousel Container with Navigation Arrows */}
        <div className="relative">
          {/* Arrow Buttons on Left and Right */}
          <button
            type="button"
            aria-label="Previous Testimonial"
            onClick={prev}
            disabled={currentIndex === 0}
            className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200 shadow-md text-slate-700 hover:bg-slate-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer font-bold active:scale-95"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next Testimonial"
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200 shadow-md text-slate-700 hover:bg-slate-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer font-bold active:scale-95"
          >
            ›
          </button>

          {/* Cards Grid with Stagger Entrance */}
          <StaggerContainer
            key={currentIndex}
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.slice(currentIndex, currentIndex + 3).map((r) => (
              <StaggerItem key={r.name} className="h-full">
                <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full hover-lift">
                  <div>
                    {/* Top Quote Icon & 5 Stars */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-serif-editorial text-4xl text-slate-300 leading-none select-none">
                        “
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 text-sm">
                        {Array.from({ length: r.stars }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      &quot;{r.quote}&quot;
                    </p>
                  </div>

                  {/* Bottom Author Row */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-sky-600 to-slate-900 text-white font-bold text-xs shadow-xs">
                        {r.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-slate-900 truncate flex items-center gap-1.5">
                          <span>{r.name}</span>
                          <span className="text-xs">{r.flag}</span>
                        </div>
                        <div className="text-[0.7rem] text-slate-400 truncate">
                          {r.destination}
                        </div>
                      </div>
                    </div>

                    <span className="badge-clean badge-blue text-[0.68rem] shrink-0 font-bold">
                      {r.role}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
