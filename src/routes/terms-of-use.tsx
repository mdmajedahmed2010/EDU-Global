import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | RANS Scholarships" },
      {
        name: "description",
        content:
          "Terms and conditions governing educational advisory services, admissions processing, and 100% free file opening counseling at RANS Scholarships.",
      },
      { property: "og:title", content: "Terms of Use | RANS Scholarships" },
      {
        property: "og:description",
        content:
          "Terms governing our overseas education counseling, language academy, and visa processing guidance.",
      },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Scope of Advisory Services",
    body: "RANS Scholarships provides 100% Free File Opening Charge, university selection, admission application processing, language academy enrollment, and visa file preparation across our destinations (Finland, Canada, USA, UK, Hungary, Netherlands, Italy, and Romania). We operate on a strict zero file-opening fee basis. Statutory third-party costs (such as university tuition deposits, official embassy visa fees, medical screening, and courier charges) are paid directly to the respective institutions or sovereign authorities.",
  },
  {
    title: "2. Document Authenticity & Applicant Responsibility",
    body: "Applicants are solely responsible for the authenticity and legality of all academic certificates, marksheets, IELTS score cards, and financial sponsorship documents submitted. RANS Scholarships maintains a strict zero-tolerance policy against fraudulent documentation.",
  },
  {
    title: "3. Admissions & Visa Decisions Disclaimer",
    body: "University admissions and scholarships are decided exclusively by the respective international universities. Visa approvals are determined solely by sovereign immigration authorities (such as Finnish Immigration Service Migri, IRCC, UKVI, and European Embassies). While RANS Scholarships provides comprehensive documentation and consular mock interviews, sovereign decisions remain with the respective government bodies.",
  },
  {
    title: "4. Language Academy Terms",
    body: "Students enrolled in our IELTS Preparation, Spoken English, or Kids English programs receive personalized course packs and scheduled interactive mock tests. Batch schedules and studio sessions are coordinated by our Sylhet headquarters at Rang Mohol Tower.",
  },
  {
    title: "5. Contact & Inquiries",
    body: `If you have questions regarding these terms, email ${company.email}, call ${company.phones[0]} (WhatsApp) / ${company.phones[1]}, or visit our Sylhet Headquarters at ${company.offices.headquarters.address}.`,
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
