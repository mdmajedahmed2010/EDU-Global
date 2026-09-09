import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, CtaBand, PageHero, SectionHeading } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Official Videos & Reels | RANS Scholarships | Sylhet" },
      {
        name: "description",
        content:
          "Watch official video reels, Finland Education Expo highlights at Hotel Nirvana Inn, January 2027 Joint App guidance, and 100% Free File Opening updates from RANS Scholarships.",
      },
      { property: "og:title", content: "Official Videos & Reels | RANS Scholarships" },
      {
        property: "og:description",
        content:
          "Watch verified video reels from RANS Scholarships. Finland higher education seminars, IELTS preparation classes, and student visa success stories in Sylhet.",
      },
    ],
  }),
  component: Videos,
});

const featuredReels = [
  {
    id: "1841170827056197",
    reelUrl: "https://www.facebook.com/reel/1841170827056197/",
    embedSrc:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1841170827056197%2F&show_text=false&width=267&t=0",
    title: "Finland Education Expo — Hotel Nirvana Inn, Sylhet",
    desc: "Highlights and live student reactions from our massive 2-Day Finland Education Expo held at Hotel Nirvana Inn, Sylhet. Covered by Voice of Sylhet media.",
    category: "Expo & Seminar",
    tag: "Verified Event",
    duration: "1:02",
  },
  {
    id: "1564254805432888",
    reelUrl: "https://www.facebook.com/reel/1564254805432888/",
    embedSrc:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1564254805432888%2F&show_text=false&width=267&t=0",
    title: "Finland Jan 2027 Intake & Visa Roadmap",
    desc: "Complete roadmap for the Finland January 2027 Joint Application (31 Aug – 10 Sep 2026) and rolling admissions with zero entrance exams, full spouse work rights, and free child education.",
    category: "Intake Roadmap",
    tag: "Priority Intake",
    duration: "1:15",
  },
];

const videoHighlights = [
  {
    title: "100% Free File Opening Charge — Transparent Policy",
    desc: "Why RANS Scholarships charges zero upfront assessment or file opening fees. Transparent guidance with no hidden platform costs.",
    category: "Student Policy",
    venue: "Rang Mohol Tower, Sylhet",
  },
  {
    title: "IELTS Academic & General Training Masterclasses",
    desc: "Interactive speaking sessions, Cambridge mock tests, and Band 7.5+ band-scoring strategies conducted at our Sylhet Language Academy.",
    category: "RANS Language Academy",
    venue: "Sylhet Campus",
  },
  {
    title: "Hungary Stipendium Hungaricum & Full Tuition Scholarships",
    desc: "Step-by-step guidance on Hungarian university entrance tests, accommodation subsidies, and monthly living stipends for Bangladeshi applicants.",
    category: "European Scholarships",
    venue: "Rang Mohol Tower",
  },
  {
    title: "Kids English (Ages 5–14) & Spoken English for Adults",
    desc: "Modern phonics, interactive storytelling, and corporate fluency modules designed to build natural spoken English confidence.",
    category: "Junior & Adult Academy",
    venue: "Language Studio",
  },
];

function Videos() {
  return (
    <>
      <PageHero
        eyebrow="Multimedia & Official Broadcasts"
        title="Official Video Reels & Expo Highlights"
        subtitle="Watch official broadcasts, Finland Education Expo event coverage, intake roadmaps, and RANS Language Academy masterclasses."
        image="/latest-assets/banner.jpg"
        imageAlt="RANS Scholarships official video showcase"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Official Videos" }]} />
      </PageHero>

      {/* Social Community Callout */}
      <section className="section-shell py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-red-200 bg-linear-to-r from-red-50/70 via-white to-blue-50/70 p-6 sm:p-8 shadow-sm">
          <div>
            <span className="badge-clean badge-red">
              Official Facebook Channel · RANS Scholarships
            </span>
            <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900">
              Follow @ransscholarships for Live Broadcasts
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Stay connected for live admission announcements, upcoming intake deadlines, IELTS
              batch schedules, and student visa updates directly from our Sylhet headquarters.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#1877F2] px-6 py-3 text-xs font-bold text-white hover:bg-[#166fe5] transition-colors shadow-sm flex items-center gap-2"
            >
              <span>📘 Visit Facebook Page</span>
            </a>
            <a
              href={company.social.facebookVideos}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2"
            >
              <span>🎬 Watch All Facebook Reels</span>
            </a>
          </div>
        </div>
      </section>

      {/* Embedded Official Reels Section */}
      <section className="section-shell py-10 sm:py-16">
        <SectionHeading
          eyebrow="Verified Facebook Reels"
          title="Featured Video Reels"
          subtitle="Watch our official Facebook reels embedded directly. Explore our Finland Education Expo at Hotel Nirvana Inn and the January 2027 Finland admissions roadmap."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {featuredReels.map((reel) => (
            <div
              key={reel.id}
              className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-xl hover:border-red-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <span className="badge-clean badge-red text-xs">{reel.tag}</span>
                  <span className="text-xs font-bold text-[#043E8B]">📍 {reel.category}</span>
                </div>

                {/* Direct Responsive Facebook Reel Iframe */}
                <div className="flex justify-center bg-slate-950 rounded-2xl overflow-hidden p-3 shadow-inner">
                  <div className="w-[267px] h-[476px] overflow-hidden rounded-xl bg-black">
                    <iframe
                      src={reel.embedSrc}
                      width="267"
                      height="476"
                      style={{ border: "none", overflow: "hidden" }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title={reel.title}
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <h3 className="mt-5 font-display text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {reel.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {reel.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={reel.reelUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#1877F2] hover:underline flex items-center gap-1.5"
                >
                  <span>▶ Open Reel on Facebook</span>
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello RANS Scholarships, I watched your reel "${reel.title}" and would like counseling.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:underline"
                >
                  💬 Inquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academy & Counseling Topics */}
      <section className="section-shell py-10 sm:py-16 border-t border-slate-100 bg-slate-50/50">
        <SectionHeading
          eyebrow="Academy & Advisory"
          title="Educational Highlights & Seminars"
          subtitle="Explore key counseling sessions and language programs conducted at our Rang Mohol Tower, Bandar Bazar headquarters in Sylhet."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {videoHighlights.map((v) => (
            <div
              key={v.title}
              className="card-clean rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 hover:border-red-300 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="badge-clean badge-navy text-[0.68rem]">{v.category}</span>
                  <span className="text-[0.68rem] font-semibold text-slate-500">📍 {v.venue}</span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-slate-900 leading-snug">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={company.social.facebookVideos}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#1877F2] hover:underline flex items-center gap-1.5"
                >
                  <span>▶ Watch on Facebook</span>
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello RANS Scholarships, I would like more information about "${v.title}".`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:underline"
                >
                  💬 Inquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </>
  );
}
