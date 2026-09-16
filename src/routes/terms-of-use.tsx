import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Higher Study Counselors Bangladesh" },
      {
        name: "description",
        content:
          "Terms and conditions governing study abroad admissions, IELTS preparation with 100% Cash Back on Visa Success, and educational advisory services at Higher Study Counselors Bangladesh.",
      },
      { property: "og:title", content: "Terms of Use | Higher Study Counselors Bangladesh" },
      {
        property: "og:description",
        content:
          "Terms governing foreign university admissions, IELTS cashback policy, Move with Family, and study gap assistance.",
      },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Scope of Educational Advisory Services",
    body: "Higher Study Counselors Bangladesh (Since 2012) provides specialized foreign university selection, application processing, scholarship facilitation, dependent visa assistance, and visa guidance for the UK, USA, Australia, Hungary, Canada, Finland, Denmark, Malaysia, and Dubai. Statutory third-party fees (such as official university tuition, embassy visa fees, medical exams, and test registration fees) are payable directly to the respective authorities.",
  },
  {
    title: "2. IELTS Cash Back On Visa Success Terms",
    body: "Students enrolled in our IELTS preparation courses who subsequently lodge their student visa application through Higher Study Counselors Bangladesh qualify for a 100% tuition cashback of their IELTS course fees upon the official grant of their student visa.",
  },
  {
    title: "3. Document Authenticity & Applicant Responsibility",
    body: "Applicants and students are solely responsible for the accuracy and authenticity of all academic certificates, marks transcripts, language scorecards, and financial documentation provided. Higher Study Counselors Bangladesh adheres strictly to ethical counseling practices with zero tolerance for fraudulent submissions.",
  },
  {
    title: "4. Sovereign Visa Decisions Disclaimer",
    body: "Admission offers, scholarship awards, and visa issuances are decided solely by the respective foreign universities and sovereign immigration departments. Higher Study Counselors Bangladesh provides expert guidance, document verification, and interview preparation, but does not guarantee sovereign immigration decisions.",
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
