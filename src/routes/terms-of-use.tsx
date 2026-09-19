import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | EDU Global" },
      {
        name: "description",
        content:
          "Terms and conditions governing study abroad admissions, language academy training, Free Bank Support, and educational advisory services at EDU Global.",
      },
      { property: "og:title", content: "Terms of Use | EDU Global" },
      {
        property: "og:description",
        content:
          "Terms governing foreign university admissions, Free Bank Support policy, and study gap assistance.",
      },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Scope of Educational Advisory Services",
    body: "EDU Global (ইডিইউ গ্লোবাল) provides specialized foreign university selection, direct application processing, scholarship facilitation, Free Bank Support evaluation for European and Cyprus intakes, and visa guidance for the UK, Europe, USA, Canada, Australia, New Zealand, Japan, and South Korea. Statutory third-party fees (such as official university tuition, embassy visa fees, medical exams, and test registration fees) are payable directly to the respective authorities.",
  },
  {
    title: "2. Free Bank Support Offer Terms",
    body: "The Free Bank Support offer is provided specifically to the first 20 eligible applicants pursuing studies in accredited European Union and Cyprus institutions, subject to academic assessment and official documentation compliance.",
  },
  {
    title: "3. Document Authenticity & Applicant Responsibility",
    body: "Applicants and students are solely responsible for the accuracy and authenticity of all academic certificates, marks transcripts, language scorecards, and financial documentation provided. EDU Global adheres strictly to ethical counseling practices with zero tolerance for fraudulent submissions.",
  },
  {
    title: "4. Sovereign Visa Decisions Disclaimer",
    body: "Admission offers, scholarship awards, and visa issuances are decided solely by the respective foreign universities and sovereign immigration departments. EDU Global provides expert guidance, document verification, and interview preparation, but does not guarantee sovereign immigration decisions.",
  },
  {
    title: "5. Contact & Inquiries",
    body: `For questions regarding these terms, please email ${company.email}, call ${company.phones[0]} / ${company.phones[1]}, or visit our Head Office at ${company.address.full}.`,
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Conditions"
        title="Terms of Use"
        subtitle="Last updated: September 2026"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms of Use" }]} />
      </PageHero>

      <section className="section-shell py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-8 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
          {sections.map((s) => (
            <div key={s.title} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
              <h2 className="font-display text-base sm:text-lg font-bold text-slate-900">
                {s.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
