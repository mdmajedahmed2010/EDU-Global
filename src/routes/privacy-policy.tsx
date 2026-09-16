import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Kushtia IELTS Care" },
      {
        name: "description",
        content:
          "How Kushtia IELTS Care collects, protects, and handles student and applicant personal data for Cambridge IELTS training, Audio Lab CBT mock tests, and study abroad counseling in Kushtia.",
      },
      { property: "og:title", content: "Privacy Policy | Kushtia IELTS Care" },
      {
        property: "og:description",
        content: "Our commitment to protecting your personal information and student records.",
      },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "1. Information We Collect",
    body: "When you register with Kushtia IELTS Care for language training (Cambridge IELTS, Spoken English, Kids English) or study abroad pathways (Portugal, Czech Republic, and global destinations), we collect relevant personal details including your name, phone/WhatsApp number, email address, academic credentials, mock test results, and destination preferences. We also collect minimal anonymous web analytics to ensure website security and optimal performance.",
  },
  {
    title: "2. How We Use Your Information",
    body: `Your information is used strictly to provide profile evaluations, course enrollments, Cambridge curriculum materials, audio lab scheduling, mock test band score analysis, and university visa documentation. All counseling is conducted transparently from our campus at ${company.address.full}.`,
  },
  {
    title: "3. Information Sharing & Third Parties",
    body: "We share your documents solely with designated partner institutions, universities, and official sovereign immigration authorities for visa processing upon your instruction. We NEVER sell, rent, or trade your personal information with third-party marketers or commercial brokers.",
  },
  {
    title: "4. Data Storage & Confidentiality",
    body: "Student and applicant records are stored securely in protected digital repositories accessible only to authorized Kushtia IELTS Care instructors and senior counselors. Physical documents and electronic records are maintained with strict confidentiality and integrity.",
  },
  {
    title: "5. Your Privacy Rights",
    body: `You may request access to, correction of, or deletion of your records at any time by emailing ${company.email} or contacting our hotlines at ${company.phones[0]} / ${company.phones[1]}.`,
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Trust"
        title="Privacy Policy"
        subtitle="Last updated: September 2026"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
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
