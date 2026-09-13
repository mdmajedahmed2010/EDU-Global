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
      { title: "About Us | Nexus Global — Language and Skill Training Centre | Jashore & Tokyo" },
      {
        name: "description",
        content:
          "Discover Nexus Global (Nexus Academy) — Premier foreign language & skill training centre in Jashore with a dedicated liaison office in Tokyo, Japan. Specialized in Japanese N5/N4 packages, German Goethe A1, IELTS, Spoken English, and global higher education. Hotlines: 01772-399913 / 01827-167332.",
      },
      { property: "og:title", content: "About Nexus Global | From Jashore TO THE WORLD" },
      {
        property: "og:description",
        content:
          "Official profile of Nexus Global Language and Skill Training Centre. Nowrin Tower, East Side of Laldighi, Jashore & Shin-Koiwa, Tokyo, Japan.",
      },
    ],
  }),
  component: About,
});

const advisoryWings = [
  {
    title: "Japan Language (N5/N4) & Tokyo Liaison Wing",
    hub: "Jashore HQ & Shin-Koiwa, Tokyo",
    badge: "Flagship Wing",
    icon: "🇯🇵",
    desc: "Intensive 3-month Japanese N5/N4 packages with free books and extra classes, paired with direct reception, airport pickup, and accommodation support by our Tokyo branch in Japan.",
  },
  {
    title: "Germany University & Dual Ausbildung Cell",
    hub: "Jashore Headquarters",
    badge: "European Track",
    icon: "🇩🇪",
    desc: "Goethe A1 German language preparation using Netzwerk Neu A1, document attestation, motivation letter coaching, and placement in tuition-free universities or paid Ausbildung vocational tracks.",
  },
  {
    title: "Nexus English Academy (IELTS, Spoken & Kids)",
    hub: "Jashore Campus & Audio Labs",
    badge: "Language Academy",
    icon: "🎓",
    desc: "Target Band 7.5+ IELTS preparation with Cambridge mock exams, practical Spoken English fluency classes, and child-centric Kids English programs for ages 5–14.",
  },
  {
    title: "Global Admissions & Consular Visa Cell",
    hub: "Global Desk",
    badge: "Global Reach",
    icon: "🌍",
    desc: "Direct admissions and visa guidance for Malaysia, United Kingdom, Canada, Australia, and the USA with 1-on-1 embassy interview preparation.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & Global Vision"
        title="FROM JASHORE TO THE WORLD"
        subtitle="Nexus Global Language and Skill Training Centre is Jashore's leading foreign language institute and international pathway provider, bridging Bangladeshi students with career and educational opportunities in Japan, Germany, and beyond."
        image="/latest-assets/banner.jpg"
        imageAlt="Nexus Global corporate campus and training center"
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
                <span className="inline-block rounded-full bg-sky-50 border border-sky-200 px-3 py-0.5 text-xs font-bold text-sky-700 mt-1">
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
                <dd className="font-bold text-sky-700 text-right">
                  Nexus Global / Nexus Academy
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Headquarters</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[240px]">
                  {company.offices.headquarters.address}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">International Branch</dt>
                <dd className="font-bold text-sky-800 text-right">
                  {company.offices.international.name}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Flagship Languages</dt>
                <dd className="font-bold text-sky-700 text-right">Japanese N5/N4 • German A1 • IELTS 7.5+</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Learning Model</dt>
                <dd className="font-bold text-emerald-700">Free Books • Multimedia Labs • Free Extra Classes</dd>
              </div>
              <div className="flex justify-between pt-1">
                <dt className="text-slate-500 font-medium">Hotlines & WhatsApp</dt>
                <dd className="font-bold text-slate-900 text-right">
                  {company.phones[0]} / {company.phones[1]}
                </dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl bg-slate-50 p-4 border border-slate-200">
              <p className="text-xs font-bold text-slate-900 mb-1">Guiding Philosophy:</p>
              <p className="text-xs italic text-sky-700 font-bold">"{company.slogan}"</p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Guiding Principles */}
          <div className="space-y-6">
            <span className="badge-clean badge-red">Our Vision & Mission</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Empowering Global Futures Through Language, Skill & Sincerity
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Nexus Global Language and Skill Training Centre was founded in Jashore with an unwavering commitment: to bring international-standard language coaching and legitimate study abroad pathways within reach of every ambitious youth in southwest Bangladesh.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              With a physical presence both in Jashore and in Tokyo, Japan, Nexus Global provides an unmatched continuum of care. From your very first Japanese N5 class or German A1 session in Jashore, through document preparation and visa approval, all the way to airport reception and student hostel settlement in Tokyo, our dedicated team accompanies you every step of the way.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🎯 Our Mission</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To equip students and professionals with authentic foreign language proficiency, critical life skills, and trusted career guidance for world-class destinations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🔭 Our Vision</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To stand as the most reliable, transparent, and learner-first international bridge in Bangladesh, setting benchmarks in language education and student care.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-linear-to-r from-sky-50/60 via-slate-50 to-orange-50/60 border border-slate-200 p-5">
              <h4 className="font-display text-sm font-bold text-sky-700 mb-2">
                🌟 The 4 Nexus Global Pillars:
              </h4>
              <BulletList
                items={[
                  "100% Visa Guidance: Thorough document verification, SOP writing, and visa interview drills with high approval records.",
                  "Experienced Trainers: Passionate language educators offering practical spoken Japanese, German, and Cambridge IELTS curricula.",
                  "Free Books & Extra Classes: Textbooks and multimedia audio materials provided free, with complimentary extra classes until exam readiness.",
                  "Direct Tokyo Office: Dedicated Nexus Group branch in Shin-Koiwa, Tokyo ensuring full on-arrival assistance and guidance in Japan.",
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
              <span className="badge-clean badge-red text-xs">Jashore Headquarters & Tokyo Office</span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
                Nowrin Tower, East Side of Laldighi, Jashore
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our central academy is conveniently located on the 3rd Floor of Nowrin Tower (Pitha Bari Tower), East Side of Laldighi, beside Kacchi Queen and backside of Sonali Bank Corporate Branch, Sadar, Jashore - 7400. Welcoming students for free counseling, Japanese/German classes, and IELTS preparation.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-sky-400">📍 Jashore Headquarters</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">
                    {company.offices.headquarters.address}
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">
                    📞 {company.phones[0]} (WhatsApp) / {company.phones[1]}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-orange-400">🇯🇵 Tokyo Branch Office</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">
                    {company.offices.international.address}
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">
                    📞 Helpline: {company.offices.international.phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video flex items-center justify-center p-6">
              <div className="text-center space-y-3">
                <BrandLogo size={72} />
                <h4 className="font-display font-black text-xl text-white">
                  Nexus Global Language and Skill Training Centre
                </h4>
                <p className="text-xs text-slate-400">
                  Nowrin Tower, East Side of Laldighi, Jashore · Shin-Koiwa, Tokyo, Japan
                </p>
              </div>
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
          subtitle="Experienced professionals dedicated to Japanese language, German higher education, IELTS training, and global visa compliance."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advisoryWings.map((wing) => (
            <div
              key={wing.title}
              className="card-clean rounded-3xl p-6 flex flex-col justify-between border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-2xl">{wing.icon}</span>
                  <span className="badge-clean badge-navy text-[0.68rem]">{wing.badge}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900 leading-snug">
                  {wing.title}
                </h3>
                <p className="text-[0.68rem] font-bold text-sky-700 mt-0.5">📍 {wing.hub}</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">{wing.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Nexus Global, I want to consult your "${wing.title}" division.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-sky-700 hover:underline flex items-center justify-center gap-1.5"
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
          eyebrow="Verified Campus & Branches"
          title="Campus, Batches & Tokyo Support"
          subtitle="Explore our Jashore headquarters at Nowrin Tower, East Side of Laldighi, and our liaison office in Shin-Koiwa, Tokyo, Japan."
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
