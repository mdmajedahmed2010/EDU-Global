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
      { title: "About Us | AB STUDY HUB — Abroad From Bangladesh | Chattogram" },
      {
        name: "description",
        content:
          "Learn about AB STUDY HUB (Abroad From Bangladesh) — Official higher education consultancy & specialized language academy in Chattogram. German tuition-free universities, Danish admissions, Goethe German Language, and IELTS Private Batches at Commerce View Complex, CDA Avenue, East Nasirabad.",
      },
      { property: "og:title", content: "About AB STUDY HUB | From Chattogram TO THE WORLD" },
      {
        property: "og:description",
        content:
          "Official profile of AB STUDY HUB (Abroad From Bangladesh). German tuition-free admissions, Goethe German Language, Danish, IELTS Private Batches. Commerce View Complex, CDA Avenue, East Nasirabad, Chattogram.",
      },
    ],
  }),
  component: About,
});

const advisoryWings = [
  {
    title: "Germany Admissions & APS Guidance Cell",
    hub: "Commerce View Complex, Chattogram",
    badge: "Flagship Wing",
    icon: "🇩🇪",
    desc: "Specialized desk for Germany Tuition-Free Public Universities, APS certificate assistance, Uni-Assist portal processing, blocked account (Coracle/Expatrio) setup, and student/spouse visa documentation.",
  },
  {
    title: "AB Language Academy (German, Danish & IELTS)",
    hub: "Chattogram Campus & Studio",
    badge: "Language Academy",
    icon: "🎓",
    desc: "Experienced mentors conducting intensive German Language (A1, A2, B1, B2 Goethe exam prep), Danish Language foundation, IELTS Private Batches (Band 7.5+ in 10–12 student batches), Spoken English, and Kids English.",
  },
  {
    title: "European Admissions & Denmark Desk",
    hub: "European Desk",
    badge: "European Focus",
    icon: "🇩🇰",
    desc: "Expert application processing for top Danish institutions, Netherlands research universities, Finland, and Schengen study pathways with post-study work visa support.",
  },
  {
    title: "Global Admissions & Consular Visa Cell",
    hub: "Executive Desk",
    badge: "Global Reach",
    icon: "🌍",
    desc: "Comprehensive admissions and visa counseling for Canada (DLIs & PGWP), UK (1-Year Masters), Spain, Greece, and Malaysia, paired with 1-on-1 consular mock interviews.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & Global Vision"
        title="FROM CHATTOGRAM TO THE WORLD"
        subtitle="AB STUDY HUB (Abroad From Bangladesh) is Chattogram's trusted higher education consultancy and specialized foreign language academy, empowering students to study at tuition-free German universities and top global destinations."
        image="/latest-assets/banner.jpg"
        imageAlt="AB STUDY HUB corporate banner and Chattogram campus"
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
                  {company.tagline}
                </span>
              </div>
            </div>

            <dl className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Official Organization</dt>
                <dd className="font-bold text-slate-900 text-right">{company.legalName}</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Brand Identity</dt>
                <dd className="font-bold text-red-700 text-right">
                  AB STUDY HUB (Abroad From Bangladesh)
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Flagship Specialty</dt>
                <dd className="font-bold text-slate-900 text-right">
                  Germany Tuition-Free & APS Support
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
                <dd className="font-bold text-red-700 text-right">German A1–B2 • Danish • IELTS 7.5+</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Batch Format</dt>
                <dd className="font-bold text-emerald-700">10–12 Students (Personalized Mentorship)</dd>
              </div>
              <div className="flex justify-between pt-1">
                <dt className="text-slate-500 font-medium">Hotlines & WhatsApp</dt>
                <dd className="font-bold text-slate-900 text-right">
                  {company.phones[0]} / {company.phones[1]}
                </dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl bg-slate-50 p-4 border border-slate-200">
              <p className="text-xs font-bold text-slate-900 mb-1">Official Slogan:</p>
              <p className="text-xs italic text-red-700 font-bold">"{company.slogan}"</p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Guiding Principles */}
          <div className="space-y-6">
            <span className="badge-clean badge-red">Our Vision & Mission</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              From Chattogram to the World • Tuition-Free Germany • Elite Language Academy
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              AB STUDY HUB (Abroad From Bangladesh) was established in Chattogram with a clear and
              uncompromising vision: to provide genuine, transparent, and results-driven educational
              consulting. We bridge the gap between talented Bangladeshi students and top international
              institutions across Europe, North America, and the United Kingdom.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Specializing in German public universities where tuition fees are 100% free, we guide students
              through every rigorous stage—from APS certificate validation and Uni-Assist applications to
              blocked account setup and visa lodgement. Alongside admissions, our in-house Language Academy
              delivers targeted Goethe German (A1–B2), Danish, and IELTS private batch coaching with small
              batches capped at 10–12 students.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🎯 Our Mission</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To empower Bangladeshi students with ethical counseling, authentic language skills,
                  and end-to-end guidance to enter prestigious global universities with high visa success.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🔭 Our Vision</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To be Chattogram's foremost international education hub, recognized globally for
                  German higher education excellence, Danish pathways, and transformative student outcomes.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-linear-to-r from-red-50/60 via-slate-50 to-blue-50/60 border border-slate-200 p-5">
              <h4 className="font-display text-sm font-bold text-red-700 mb-2">
                🌟 The 4 AB STUDY HUB Pillars:
              </h4>
              <BulletList
                items={[
                  "Expert Guidance: Comprehensive profile evaluation, university shortlisting, and APS compliance for German public universities.",
                  "Experienced Trainers: Goethe-certified and Cambridge-standard instructors delivering practical spoken and exam-oriented curriculum.",
                  "Personalized Support: Small private batches strictly capped at 10–12 students for maximum individual interaction.",
                  "Global Destinations: Premium pathways across Germany, Denmark, the Netherlands, Canada, Spain, Greece, Malaysia, and the UK.",
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
              <span className="badge-clean badge-red text-xs">Chattogram Corporate Headquarters</span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
                Commerce View Complex, CDA Avenue, East Nasirabad
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our central office is conveniently located on the 4th Floor of Commerce View Complex
                (Exim Bank Building), 191 CDA Avenue, East Nasirabad, Panchlaish, Chattogram-4200. Welcoming
                students for free 1-on-1 counseling, German & Danish language classes, and visa documentation.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-red-400">📍 Chattogram Office</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">
                    {company.offices.headquarters.address}
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">
                    📞 {company.phones[0]} (WhatsApp) / {company.phones[1]}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-blue-400">✉️ Direct Inquiries</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">Email: {company.email}</p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">Hours: Sat–Thu 10:00 AM – 7:30 PM</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
              <img
                src="/banner.png"
                alt="AB STUDY HUB corporate banner"
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
          subtitle="Experienced professionals dedicated to German admissions, foreign language training, and visa compliance."
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
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello AB STUDY HUB, I want to consult your "${wing.title}" division.`)}`}
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
          title="Campus, Batches & Student Success"
          subtitle="Explore our German Goethe language batches, IELTS private sessions, and corporate campus at Commerce View Complex, Chattogram."
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
