import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | AB STUDY HUB — Chattogram" },
      {
        name: "description",
        content:
          "Terms and conditions governing educational advisory services, German admissions, and language coaching at AB STUDY HUB Chattogram.",
      },
      { property: "og:title", content: "Terms of Use | AB STUDY HUB" },
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
    body: "AB STUDY HUB (Abroad From Bangladesh) provides university selection, admission application processing, APS certificate guidance, language academy enrollment (German A1–B2, Danish, IELTS, Spoken English, Kids English), and visa file preparation across our core destinations (Germany, Denmark, Netherlands, Spain, Greece, Malaysia, Canada, and UK). Statutory third-party costs (such as university semester fees, official embassy visa fees, medical screening, and courier charges) are paid directly to the respective institutions or sovereign authorities.",
  },
  {
    title: "2. Document Authenticity & Applicant Responsibility",
    body: "Applicants are solely responsible for the authenticity and legality of all academic certificates, marksheets, IELTS score cards, German language certificates, and financial sponsorship documents submitted. AB STUDY HUB maintains a strict zero-tolerance policy against fraudulent documentation.",
  },
  {
    title: "3. Admissions & Visa Decisions Disclaimer",
    body: "University admissions and scholarships are decided exclusively by the respective international universities. Visa approvals are determined solely by sovereign immigration authorities (such as the German Federal Foreign Office, Danish Immigration Service, IRCC, UKVI, and European Embassies). While AB STUDY HUB provides comprehensive documentation and consular mock interviews, sovereign decisions remain with the respective government bodies.",
  },
  {
    title: "4. Language Academy Terms",
    body: "Students enrolled in our German Language (A1–B2), Danish, or IELTS Preparation programs receive personalized course packs and scheduled interactive mock tests. Private batches are capped strictly at 10–12 students to guarantee high-touch instruction.",
  },
  {
    title: "5. Contact & Inquiries",
    body: `If you have questions regarding these terms, email ${company.email}, call ${company.phones[0]} (WhatsApp) / ${company.phones[1]}, or visit our Chattogram Campus at ${company.offices.headquarters.address}.`,
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
