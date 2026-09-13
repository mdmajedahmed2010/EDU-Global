import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, BulletList, CtaBand, PageHero, SectionHeading } from "@/components/ui-blocks";
import { company, upcomingIntakesAndOffers } from "@/lib/site-data";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Upcoming Intakes & Language Batches | Nexus Global — Jashore & Tokyo" },
      {
        name: "description",
        content:
          "Explore active intakes: Japanese Language (N5/N4 packages), German Goethe A1 batches, IELTS preparation, Japan student & SSW visa intakes, and Germany university/Ausbildung sessions at Nexus Global Jashore.",
      },
      { property: "og:title", content: "Upcoming Intakes & Academy Batches | Nexus Global" },
      {
        property: "og:description",
        content:
          "Register for upcoming Japanese, German, IELTS language batches and international intakes at Nexus Global, Nowrin Tower, East Side of Laldighi, Jashore.",
      },
    ],
  }),
  component: Offers,
});

function Offers() {
  return (
    <>
      <PageHero
        eyebrow="Admissions & Special Intakes"
        title="Upcoming Intakes & Academy Admissions"
        subtitle="Explore active Japanese N5/N4 packages, German Goethe A1 batches, IELTS preparation, and international study intakes guided by Nexus Global (Jashore HQ & Tokyo Branch)."
        image="/latest-assets/banner.jpg"
        imageAlt="Nexus Global active admissions and intakes"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Intakes & Offers" }]} />
      </PageHero>

      {/* Active High-Priority Campaigns Grid */}
      <section className="section-shell py-14 sm:py-20">
        <SectionHeading
          eyebrow="Active Campaigns"
          title="Current Intakes, Drives & Academy Batches"
          subtitle="All sessions below are actively accepting applications with complete transparency, free study materials, and direct support from our Jashore headquarters and Tokyo branch."
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
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Nexus Global, I want to apply / register for: "${item.title}".`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-emerald w-full text-center text-xs py-3 shadow-sm"
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
