import { createFileRoute, notFound } from "@tanstack/react-router";
import { Breadcrumbs, BulletList, CtaBand, PageHero, RegisterButton } from "@/components/ui-blocks";
import { company, destinations } from "@/lib/site-data";

export const Route = createFileRoute("/study-in-{$country}")({
  loader: ({ params }) => {
    const destination = destinations.find((d) => d.slug === params.country);
    if (!destination) throw notFound();
    return { destination };
  },
  head: ({ loaderData }) => {
    const d = loaderData?.destination;
    const title = d
      ? `Study in ${d.name} | EDU Global — 100% Admission & Visa Guidance`
      : "Study Abroad Destinations | EDU Global";
    const description = d
      ? `${d.tagline}. University admissions, 100% admission guidance, Free Bank Support for European visas, Study Gap (up to 10+ yrs) & Low CGPA (2.5+) accepted for ${d.name} with EDU Global (ইডিইউ গ্লোবাল). Office: Keari Plaza, 4th Floor, Satmasjid Road, Dhanmondi, Dhaka. Hotlines: ${company.phones[0]} / ${company.phones[1]}.`
      : "Study abroad admissions and language academy coaching from EDU Global.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: DestinationPage,
});

function DestinationPage() {
  const { destination: d } = Route.useLoaderData();

  const whatsappHref = () => {
    const text = `Hello EDU Global! I want to explore higher education pathways in ${d.name}.\n\nPlease guide me on admission requirements, partner universities, Free Bank Support, and upcoming intake deadlines.`;
    return `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <PageHero
        eyebrow={`${d.flag} ${d.region} · Official Destination`}
        title={`Study in ${d.name}`}
        subtitle={d.tagline}
        image="/banner.png"
        imageAlt={`Study in ${d.name} — EDU Global`}
      >
        <div className="space-y-6">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Destinations", to: "/destinations" },
              { label: d.name },
            ]}
          />
          <div className="flex flex-wrap gap-4">
            <RegisterButton label={`Free ${d.name} Assessment`} className="px-8 py-3.5" />
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="btn-emerald px-6 py-3.5 text-xs sm:text-sm font-bold shadow-md"
            >
              <span>💬 WhatsApp About {d.name}</span>
            </a>
          </div>
        </div>
      </PageHero>

      {/* Main Country Content & Sidebar */}
      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main Left Content */}
          <div className="space-y-10">
            {/* Quick Metrics Matrix */}
            <div className="rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-sm">
              <h2 className="font-display text-lg font-black text-slate-900 border-b border-slate-100 pb-3">
                Key Facts for Bangladeshi Applicants · {d.name}
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 text-xs sm:text-sm">
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Average Tuition:</span>
                  <span className="font-bold text-slate-900 mt-1 block">{d.avgTuition}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Living Expenses:</span>
                  <span className="font-bold text-slate-900 mt-1 block">{d.avgLiving}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">
                    Post-Study Work Visa:
                  </span>
                  <span className="font-bold text-emerald-600 mt-1 block">{d.pswv}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Major Intakes:</span>
                  <span className="font-bold text-slate-900 mt-1 block">{d.intakes}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">Scholarships / Perks:</span>
                  <span className="font-bold text-emerald-600 mt-1 block">{d.scholarships}</span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <span className="text-slate-500 block text-xs font-medium">
                    Language / Test Requirement:
                  </span>
                  <span
                    className={`font-bold mt-1 block ${d.withoutIelts ? "text-emerald-700" : "text-slate-700"}`}
                  >
                    {d.withoutIelts ? "Available (MOI / Internal Test)" : "Language Test / IELTS"}
                  </span>
                </div>
              </div>
            </div>

            {/* Why Study in Country */}
            <div className="rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-sm">
              <h2 className="font-display text-xl font-black text-slate-900 mb-4">
                Why Choose {d.name} with EDU Global?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                {d.intro}
              </p>
              <BulletList items={d.why} />
            </div>

            {/* Top Partner Universities */}
            <div className="rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white shadow-sm">
              <h2 className="font-display text-xl font-black text-slate-900 mb-4">
                Key Institutions & Opportunities in {d.name}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {d.topUnis.map((uni) => (
                  <div
                    key={uni}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm border border-emerald-200 text-emerald-600">
                      🎓
                    </span>
                    <span className="text-xs font-bold text-slate-800">{uni}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Assessment Form & Hotlines */}
          <aside className="space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 sticky top-24 border border-emerald-200 bg-white shadow-md space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                Official Senior Counselor Support
              </span>
              <h3 className="font-display text-lg font-black text-slate-900">
                Apply for {d.name} with EDU Global
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Connect directly with our senior foreign education counselors for university shortlisting,
                Free Bank Support evaluation, Study Gap (up to 10+ yrs) justification, and visa lodging.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-emerald w-full text-xs py-3 text-center justify-center shadow-sm"
                >
                  💬 Chat on WhatsApp with Counselor
                </a>
                <a
                  href={`tel:${company.phones[0].replace(/[^0-9+]/g, "")}`}
                  className="btn-secondary w-full text-xs py-3 text-center justify-center"
                >
                  📞 Call Hotline: {company.phones[0]}
                </a>
              </div>

              <div className="border-t border-slate-100 pt-4 text-xs text-slate-600 space-y-2">
                <p>
                  <strong>📍 Dhanmondi Head Office:</strong> {company.address.full}
                </p>
                <p>
                  <strong>🎯 Landmark:</strong> Opposite Unimart, Old 15 Bus Stand
                </p>
                <p>
                  <strong>🏦 Special Campaign:</strong> Free Bank Support for first 20 students
                </p>
                <p>
                  <strong>🕒 Counseling Hours:</strong> {company.hours}
                </p>
                <p className="text-emerald-700 font-bold">
                  ✓ Free 1-on-1 Profile Assessment guaranteed
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </>
  );
}
