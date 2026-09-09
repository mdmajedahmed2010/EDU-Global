import { createFileRoute } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  SectionHeading,
  StatsStrip,
} from "@/components/ui-blocks";
import { OfficeGallery } from "@/components/office-gallery";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | RANS Scholarships | Since 2017 | Sylhet" },
      {
        name: "description",
        content:
          "Learn about RANS Scholarships — Established in 2017 (10 Year's Experience), Member of FECAS. Specializing in Finland, European scholarships, and RANS Language Academy in Sylhet, Bangladesh.",
      },
      { property: "og:title", content: "About RANS Scholarships | Dream to Study Abroad" },
      {
        property: "og:description",
        content:
          "Official profile of RANS Scholarships. 100% Free File Opening Charge, Member of FECAS, Rang Mohol Tower, Bandar Bazar, Sylhet.",
      },
    ],
  }),
  component: About,
});

const advisoryWings = [
  {
    title: "Finland & European Admissions Cell",
    hub: "Rang Mohol Tower, Sylhet",
    badge: "Priority Wing",
    icon: "🇫🇮",
    desc: "Specialized desk for Finland January 2027 Joint Application (31 Aug – 10 Sep 2026) and rolling admissions with zero entrance exams, spouse work rights, child free schooling, and Hungary Stipendium Hungaricum scholarships.",
  },
  {
    title: "RANS Language Academy Faculty",
    hub: "Sylhet Campus & Online",
    badge: "Language Academy",
    icon: "🎯",
    desc: "Experienced mentors conducting intensive IELTS preparation (target Band 7.5+), practical Spoken English fluency for adults, and joyful Kids English (Ages 5–14) foundation courses.",
  },
  {
    title: "Visa Compliance & Embassy Documentation Cell",
    hub: "Executive Desk",
    badge: "Visa Excellence",
    icon: "🛂",
    desc: "Rigorous document auditing, financial sponsorship verification, and 1-on-1 embassy mock interviews for Student and Dependent/Spouse categories with industry-leading approval rates.",
  },
  {
    title: "North America & UK Placements Wing",
    hub: "Advisory Desk",
    badge: "Global Reach",
    icon: "🌍",
    desc: "Tailored university shortlisting, statement of purpose guidance, and scholarship mapping for top institutions across Canada, USA, UK, Netherlands, Italy, and Romania.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & 10 Years of Excellence"
        title="DREAM TO STUDY ABROAD"
        subtitle="Established in 2017 with 10 years of trusted experience, RANS Scholarships is Sylhet's premier higher education consultancy and Language Academy, proud Member of FECAS."
        image="/latest-assets/banner.jpg"
        imageAlt="RANS Scholarships corporate banner and Sylhet headquarters"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About Us" }]} />
      </PageHero>

      {/* Brand Identity & Overview Section */}
      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Quick Profile Card */}
          <div className="card-clean rounded-3xl p-8 border border-slate-200/90 shadow-lg bg-white">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <BrandLogo size={56} />
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">{company.name}</h3>
                <span className="inline-block rounded-full bg-red-50 border border-red-200 px-3 py-0.5 text-xs font-bold text-red-700 mt-1">
                  {company.experience} · {company.association}
                </span>
              </div>
            </div>

            <dl className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Official Organization</dt>
                <dd className="font-bold text-slate-900 text-right">{company.legalName}</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Established</dt>
                <dd className="font-bold text-red-700 text-right">
                  Since 2017 (10 Year's Experience)
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Industry Accreditation</dt>
                <dd className="font-bold text-slate-900 text-right">
                  {company.association} & {company.secondaryAssociation}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Corporate Headquarters</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[240px]">
                  {company.offices.headquarters.address}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Language Academy</dt>
                <dd className="font-bold text-red-700 text-right">IELTS • Spoken • Kids English</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Consulting Policy</dt>
                <dd className="font-bold text-emerald-700">100% Free File Opening Charge</dd>
              </div>
              <div className="flex justify-between pt-1">
                <dt className="text-slate-500 font-medium">Hotlines & WhatsApp</dt>
                <dd className="font-bold text-slate-900 text-right">
                  {company.phones[0]} / {company.phones[1]}
                </dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl bg-slate-50 p-4 border border-slate-200">
              <p className="text-xs font-bold text-slate-900 mb-1">Official Motto:</p>
              <p className="text-xs italic text-red-700">"{company.slogan}"</p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Guiding Principles */}
          <div className="space-y-6">
            <span className="badge-clean badge-red">Our Vision & Mission</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Ethical Guidance • 100% Free File Opening • European Leadership
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Since 2017, RANS Scholarships has stood as a beacon of genuine education consultancy
              in Sylhet, Bangladesh. Founded on the bedrock of transparency, we pioneered a 100%
              Free File Opening policy with zero upfront charges, ensuring that every student has
              equal access to unbiased global academic evaluation.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              As a proud member of FECAS (Foreign Education Consultancy Association of Bangladesh)
              and FACD-CAB, we strictly adhere to international compliance and professional ethics.
              Our specialized focus on Finland, Hungary, Canada, USA, UK, Netherlands, Italy, and
              Romania has enabled hundreds of Bangladeshi students to achieve their academic and
              permanent career milestones abroad.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🎯 Our Mission</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To provide transparent, cost-free file opening and high-caliber language training
                  that turns every student's dream of studying abroad into reality.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🔭 Our Vision</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To remain Bangladesh's most trusted European higher education advisory, recognized
                  for high visa success rates and life-changing scholarship placements.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-linear-to-r from-red-50/60 via-slate-50 to-blue-50/60 border border-slate-200 p-5">
              <h4 className="font-display text-sm font-bold text-red-700 mb-2">
                🌟 The RANS Scholarships Pillars:
              </h4>
              <BulletList
                items={[
                  "100% Free File Opening Charge: Zero upfront evaluation or processing fees for higher education files.",
                  "Finland Priority Specialization: Early roadmap for January 2027 Joint App (31 Aug–10 Sep 2026) & rolling intakes.",
                  "Member of FECAS & FACD-CAB: 10 years of verified industry standing and professional ethics since 2017.",
                  "Comprehensive Language Academy: Expert IELTS coaching (Band 7.5+), Spoken English, and Kids English (Ages 5–14).",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Presence Spotlight */}
      <section className="section-shell py-12 border-t border-slate-200">
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="badge-clean badge-red text-xs">Sylhet Corporate Headquarters</span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
                Rang Mohol Tower, Bandar Bazar, Sylhet
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our central office is located in the heart of Sylhet at Rang Mohol Tower. Welcoming
                students from Sylhet, Moulvibazar, Sunamganj, Habiganj, and all across Bangladesh
                with state-of-the-art counseling desks and language classrooms.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-red-400">📍 Sylhet Corporate Office</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">
                    {company.offices.headquarters.address}
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">
                    📞 {company.phones[0]} / {company.phones[1]}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-blue-400">🏛️ Accreditations</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">Member: FECAS & FACD-CAB</p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">✉️ {company.email}</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
              <img
                src="/latest-assets/banner.jpg"
                alt="RANS Scholarships corporate banner"
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="section-shell py-10 sm:py-14 border-t border-slate-200">
        <StatsStrip />
      </section>

      {/* Operational Wings */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Specialized Operational Wings"
          title="Our Advisory Divisions"
          subtitle="Experienced professionals dedicated to university admissions, language training, and visa compliance."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advisoryWings.map((wing) => (
            <div
              key={wing.title}
              className="card-clean rounded-3xl p-6 flex flex-col justify-between border border-slate-200 hover:border-red-300 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-2xl">{wing.icon}</span>
                  <span className="badge-clean badge-navy text-[0.68rem]">{wing.badge}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900 leading-snug">
                  {wing.title}
                </h3>
                <p className="text-[0.68rem] font-bold text-red-700 mt-0.5">📍 {wing.hub}</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">{wing.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello RANS Scholarships, I want to consult your "${wing.title}" division.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-red-700 hover:underline flex items-center justify-center gap-1.5"
                >
                  <span>Connect with Division →</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Media & Office Gallery */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200 bg-slate-50/50">
        <SectionHeading
          eyebrow="Verified Community Presence"
          title="Events, Reels & Headquarters"
          subtitle="Explore our Finland Education Expo at Hotel Nirvana Inn, video updates, and corporate headquarters."
        />
        <div className="mt-10">
          <OfficeGallery />
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </>
  );
}
