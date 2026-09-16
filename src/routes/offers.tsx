import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, BulletList, CtaBand, PageHero, SectionHeading } from "@/components/ui-blocks";
import { company, upcomingIntakesAndOffers } from "@/lib/site-data";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Upcoming Batches & Mock Tests | Kushtia IELTS Care" },
      {
        name: "description",
        content:
          "Explore active batches at Kushtia IELTS Care: Cambridge IELTS regular & crash courses, 300 BDT CBT Audio Lab mock tests, Spoken English, Kids English, and Portugal & Czech Republic study visa intakes.",
      },
      { property: "og:title", content: "Upcoming Batches & Mock Tests | Kushtia IELTS Care" },
      {
        property: "og:description",
        content:
          "Register for upcoming Cambridge IELTS batches, 300 BDT audio lab CBT mock tests, and European visa counseling at Kushtia IELTS Care, Old Kataikhana More, Kushtia.",
      },
    ],
  }),
  component: Offers,
});

function Offers() {
  return (
    <>
      <PageHero
        eyebrow="Admissions & Special Batches"
        title="Upcoming Batches & Mock Test Schedules"
        subtitle="Explore active Cambridge IELTS batches, 300 BDT CBT Audio Lab mock tests, Spoken English fluency, Kids English, and European study abroad admissions at Kushtia IELTS Care."
        image="/banner.jpg"
        imageAlt="Kushtia IELTS Care active admissions and batches"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Batches & Offers" }]} />
      </PageHero>

      {/* Active High-Priority Campaigns Grid */}
      <section className="section-shell py-14 sm:py-20">
        <SectionHeading
          eyebrow="Active Batches"
          title="Current Batches, CBT Mock Tests & Admissions"
          subtitle="All programs below are actively accepting admissions with modern audio lab facilities, Cambridge curriculum, individual headsets, and 1-on-1 speaking assessments at our Kushtia campus."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingIntakesAndOffers.map((item) => (
            <div
              key={item.id}
              className="card-clean rounded-3xl p-8 flex flex-col justify-between border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="badge-clean badge-red">{item.badge}</span>
                  <span className="text-xs font-semibold text-slate-500">{item.date}</span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">{item.description}</p>

                {item.benefits && (
                  <div className="mt-5 rounded-2xl bg-slate-50 p-4 border border-slate-200/80">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-sky-700 mb-2">
                      Key Highlights & Inclusions:
                    </p>
                    <BulletList items={item.benefits} />
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Kushtia IELTS Care, I want to apply / register for: "${item.title}".`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-emerald w-full text-center text-xs py-3 shadow-sm font-bold"
                >
                  💬 Inquire / Apply on WhatsApp
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
