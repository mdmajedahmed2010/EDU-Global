import { company } from "@/lib/site-data";
import { IconSparkles } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";

export function VideoReelsSection({
  title = "Official Facebook Video Reels & Audio Lab Sessions",
  subtitle = "Watch real Cambridge IELTS audio lab practice, mock tests, and student guidance from Kushtia IELTS Care.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const reels = company.featuredReels || [];

  if (!reels || reels.length === 0) return null;

  return (
    <section className="section-shell py-12 sm:py-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-700 mb-2.5">
          <IconSparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>Verified Social Proof & Video Reels</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {reels.map((reel, idx) => (
          <SlideIn
            key={reel.id}
            direction="up"
            delay={idx * 0.1}
            className="flex flex-col h-full"
          >
            <div className="card-clean rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-white flex flex-col justify-between h-full group hover:border-sky-400 hover:shadow-xl transition-all duration-300">
              {/* Header Badge & Category */}
              <div className="p-5 pb-3 border-b border-slate-100 flex items-center justify-between gap-2">
                <span className="badge-clean badge-blue text-[0.7rem] font-bold">
                  {reel.badge}
                </span>
                <span className="text-[0.65rem] font-semibold text-slate-400 uppercase tracking-wider">
                  Facebook Reel
                </span>
              </div>

              {/* Video Embed Container */}
              <div className="relative w-full bg-slate-950 aspect-[9/10] sm:aspect-[4/5] flex items-center justify-center overflow-hidden">
                <iframe
                  src={reel.embedSrc}
                  title={reel.title}
                  width="100%"
                  height="100%"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details & Copy */}
              <div className="p-5 flex flex-col justify-between flex-1 gap-3 bg-white">
                <div className="space-y-1.5">
                  <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
                    {reel.title}
                  </h3>
                  <p className="text-xs font-bangla text-slate-700 leading-relaxed line-clamp-3">
                    {reel.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a
                    href={reel.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors"
                  >
                    <span>Watch on Facebook</span>
                    <span className="text-[0.7rem]">↗</span>
                  </a>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello Kushtia IELTS Care! I watched your video on "${reel.title}" and would like more details about enrollment.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[0.7rem] font-bold text-emerald-600 hover:text-emerald-700 transition-colors bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200"
                  >
                    <span>💬 Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}
