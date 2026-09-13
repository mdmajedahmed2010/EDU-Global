import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Nexus Global — Jashore & Tokyo" },
      {
        name: "description",
        content:
          "Terms and conditions governing language training and educational advisory services at Nexus Global Language and Skill Training Centre in Jashore and Tokyo.",
      },
      { property: "og:title", content: "Terms of Use | Nexus Global" },
      {
        property: "og:description",
        content:
          "Terms governing our language academy, skill training, and overseas pathway guidance.",
      },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Scope of Language & Advisory Services",
    body: "Nexus Global Language and Skill Training Centre provides specialized foreign language training (Japanese N5/N4, German Goethe A1, IELTS, Spoken English, Kids English), university/language school selection, application processing, and visa file preparation for destinations including Japan, Germany, Malaysia, UK, Canada, Australia, and USA. Statutory third-party costs (such as official embassy visa fees, medical tests, language exam fees, and courier services) are paid directly to the respective authorities or test providers.",
  },
  {
    title: "2. Document Authenticity & Applicant Responsibility",
    body: "Applicants and learners are solely responsible for the accuracy and authenticity of all academic certificates, marks transcripts, language scorecards, and financial documentation provided. Nexus Global adheres to strict legal standards and has zero tolerance for fraudulent submissions.",
  },
  {
    title: "3. Admissions & Visa Decisions Disclaimer",
    body: "Admission offers, scholarships, and visa approvals are decided strictly by sovereign immigration authorities (such as the Immigration Services Agency of Japan, German Federal Foreign Office, and respective embassies) and educational institutions. Nexus Global provides expert coaching, rigorous document auditing, and mock interview preparations, but does not claim jurisdiction over sovereign visa grants.",
  },
  {
    title: "4. Academy & Batch Policies",
    body: "Students enrolled in our Japanese, German, IELTS, or Spoken English programs receive official study materials and structured class access. Nexus Global reserves the right to maintain discipline, academic rigor, and batch integrity to safeguard student progress.",
  },
  {
    title: "5. Contact & Inquiries",
    body: `For questions regarding these terms, please email ${company.email}, call ${company.phones[0]} (WhatsApp) / ${company.phones[1]}, or visit our Jashore Headquarters at ${company.offices.headquarters.address}.`,
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
