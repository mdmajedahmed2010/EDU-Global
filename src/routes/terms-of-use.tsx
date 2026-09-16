import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Kushtia IELTS Care" },
      {
        name: "description",
        content:
          "Terms and conditions governing Cambridge IELTS coaching, Audio Lab CBT mock tests, language training, and educational advisory services at Kushtia IELTS Care in Kushtia.",
      },
      { property: "og:title", content: "Terms of Use | Kushtia IELTS Care" },
      {
        property: "og:description",
        content:
          "Terms governing Cambridge IELTS preparation, mock tests, Spoken English, and overseas study visa guidance.",
      },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Scope of Language & Advisory Services",
    body: "Kushtia IELTS Care provides specialized Cambridge IELTS coaching (Academic & General), computer-based and paper-based mock tests (300 BDT) in our dedicated audio lab, Spoken English fluency courses, Kids English Academy, university selection, application processing, and visa guidance for Portugal, Czech Republic, and global destinations. Statutory third-party costs (such as official British Council / IDP exam fees, embassy visa fees, medical tests, and courier fees) are paid directly to the respective authorities or test providers.",
  },
  {
    title: "2. Document Authenticity & Applicant Responsibility",
    body: "Applicants and learners are solely responsible for the accuracy and authenticity of all academic certificates, marks transcripts, language scorecards, and financial documentation provided. Kushtia IELTS Care adheres to strict ethical standards and maintains zero tolerance for fraudulent submissions.",
  },
  {
    title: "3. Admissions & Visa Decisions Disclaimer",
    body: "Admission offers, scholarships, and visa approvals are decided strictly by sovereign immigration authorities and educational institutions. Kushtia IELTS Care provides expert coaching, rigorous document auditing, and mock interview preparations, but does not claim jurisdiction over sovereign visa grants.",
  },
  {
    title: "4. Academy & Mock Test Policies",
    body: "Students enrolled in our IELTS, Spoken English, or Mock Test programs receive official study materials and access to our audio lab equipment with individual headsets. Kushtia IELTS Care reserves the right to maintain discipline, academic rigor, and lab integrity to safeguard student learning.",
  },
  {
    title: "5. Contact & Inquiries",
    body: `For questions regarding these terms, please email ${company.email}, call ${company.phones[0]} / ${company.phones[1]}, or visit our Kushtia Campus at ${company.address.full}.`,
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
