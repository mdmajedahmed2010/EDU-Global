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
      { title: "About Us | AcademiaZ — Japanese Language Training & Visa Consultancy | Rajshahi" },
      {
        name: "description",
        content:
          "Discover AcademiaZ — Premier Japanese language training centre and visa consultancy in Rajshahi. Managed directly from Japan (জাপান থেকে পরিচালিত). Specialized in Japanese JLPT N5/N4, NAT-TEST, JFT-Basic, TITP/SSW programs, Student Visas, IELTS, and Spoken English. Kadirganj, Greater Road, Rajshahi. Hotlines: 01518-951062 / 01632-372232.",
      },
      { property: "og:title", content: "About AcademiaZ | Learn · Grow · Achieve" },
      {
        property: "og:description",
        content:
          "Official profile of AcademiaZ — Japanese Language Training & Visa Consultancy. Kadirganj, Greater Road, Rajshahi · Japan-Based Direct Oversight.",
      },
    ],
  }),
  component: About,
});

const advisoryWings = [
  {
    title: "Japanese Language Academy (N5 & N4)",
    hub: "Rajshahi Campus & Japan Oversight",
    badge: "Flagship Wing",
    icon: "🇯🇵",
    desc: "Intensive 3–4 month Japanese language tracks focusing on JLPT, NAT-TEST, and JFT-Basic exams with Kanji mastery, audio listening labs, and speaking practice.",
  },
  {
    title: "Japan Student Visa & COE Wing",
    hub: "Rajshahi Campus",
    badge: "Student Pathway",
    icon: "🌸",
    desc: "Comprehensive admissions and Certificate of Eligibility (COE) processing for top language academies, vocational colleges, and universities across Japan.",
  },
  {
    title: "TITP & SSW (Work in Japan) Wing",
    hub: "Career Cell",
    badge: "Employment Track",
    icon: "💼",
    desc: "Technical Intern Training Program (TITP) and Specified Skilled Worker (SSW) preparation with professional Japanese language coaching and interview grooming.",
  },
  {
    title: "IELTS, Spoken & Kids English Wing",
    hub: "Rajshahi English Academy",
    badge: "English Academy",
    icon: "🎓",
    desc: "Target Band 7.5+ IELTS preparation with Cambridge mock exams, practical Spoken English fluency classes, and child-centric Kids English programs for ages 5–14.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & Japan-Managed Excellence"
        title="LEARN · GROW · ACHIEVE"
        subtitle="AcademiaZ is Rajshahi's premier Japanese language training institute and visa consultancy, managed directly from Japan (জাপান থেকে পরিচালিত), opening authentic career and higher education pathways."
        image="/banner.jpg"
        imageAlt="AcademiaZ Japanese language and visa consultancy campus"
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
                <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-0.5 text-xs font-bold text-amber-800 mt-1">
                  জাপান থেকে পরিচালিত
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
                  AcademiaZ (Learn · Grow · Achieve)
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Campus Location</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[240px]">
                  {company.address.full}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Management Origin</dt>
                <dd className="font-bold text-amber-800 text-right">
                  Japan Direct Oversight (100% Japan Standard)
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Flagship Offerings</dt>
                <dd className="font-bold text-sky-700 text-right">Japanese N5/N4 • TITP/SSW • Student Visa • IELTS</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Learning Model</dt>
                <dd className="font-bold text-emerald-700">Japan Curriculum • Listening Labs • Real Mock Tests</dd>
              </div>
              <div className="flex justify-between pt-1">
                <dt className="text-slate-500 font-medium">Hotlines & WhatsApp</dt>
                <dd className="font-bold text-slate-900 text-right">
                  {company.phones[0]} / {company.phones[1]}
                </dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl bg-amber-50/70 p-4 border border-amber-200">
              <p className="text-xs font-bold text-slate-900 mb-1">Guiding Philosophy:</p>
              <p className="text-xs italic text-amber-900 font-bold font-bangla">"{company.slogan}"</p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Guiding Principles */}
          <div className="space-y-6">
            <span className="badge-clean badge-red">Our Vision & Mission</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Empowering Aspirations Through Authentic Japanese Education & Integrity
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              AcademiaZ was established in Kadirganj, Rajshahi with a definitive purpose: to bring genuine, Japan-standard language training and transparent visa consultancy within reach of students and professionals across Bangladesh.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Being directly managed from Japan ("জাপান থেকে পরিচালিত"), AcademiaZ offers an unmatched standard of authenticity. We ensure that our students do not simply memorize grammar formulas, but develop genuine conversational fluency, cultural comprehension, and the specific skill set demanded by Japanese educational institutions and employers.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🎯 Our Mission</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To provide premier Japanese and English language education, honest career counseling, and authentic visa processing that empowers candidates to excel abroad.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🔭 Our Vision</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To be Bangladesh's most reputable and dependable gateway to Japan, recognized for academic excellence, 100% transparency, and student-first dedication.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-sky-50/60 via-slate-50 to-amber-50/60 border border-slate-200 p-5">
              <h4 className="font-display text-sm font-bold text-sky-700 mb-2">
                🌟 The 4 AcademiaZ Pillars:
              </h4>
              <BulletList
                items={[
                  "Japan-Based Direct Management: Controlled and supervised directly from Japan, ensuring curriculum adherence to genuine Japanese standards.",
                  "Japanese Language Mastery (N5 & N4): In-depth training for JLPT, NAT-TEST, and JFT-Basic with Kanji drills, listening audio labs, and speaking sessions.",
                  "Transparent Visa & COE Guidance: Meticulous document verification, SOP writing, and visa interview preparation with genuine school liaisons.",
                  "English Language & IELTS Excellence: Interactive Cambridge-standard IELTS coaching, Spoken English fluency, and Kids English (Ages 5–14).",
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
              <span className="badge-clean badge-red text-xs">Rajshahi Campus & Japan Oversight</span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
                Kadirganj, Greater Road, Rajshahi
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our modern academy is centrally located at Kadirganj, Greater Road (Lane beside Ma Photostat, east side of the mosque), Rajshahi - 6000. We warmly welcome students and guardians for free profile assessments, Japanese language demo classes, and personalized visa counseling.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-sky-400">📍 Rajshahi Campus</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">
                    {company.address.full}
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">
                    📞 {company.phones[0]} (WhatsApp) / {company.phones[1]}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-amber-400">🇯🇵 Japan Direct Management</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">
                    Supervised Directly from Japan (জাপান থেকে পরিচালিত)
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">
                    🌐 100% Japan Standard Training & Support
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video flex items-center justify-center p-6">
              <div className="text-center space-y-3">
                <BrandLogo size={72} />
                <h4 className="font-display font-black text-xl text-white">
                  AcademiaZ
                </h4>
                <p className="text-xs text-amber-400 font-bold">
                  Japanese Language Training & Visa Consultancy
                </p>
                <p className="text-xs text-slate-400">
                  Kadirganj, Greater Road, Rajshahi · Japan-Based Direct Oversight
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
          eyebrow="Specialized Academic & Career Wings"
          title="Our Operational Divisions"
          subtitle="Experienced educators and counselors dedicated to Japanese language, Japan visa compliance, TITP/SSW work pathways, and IELTS training."
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
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello AcademiaZ, I want to consult your "${wing.title}" division.`)}`}
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
          eyebrow="Verified Campus & Support"
          title="Rajshahi Campus & Japan Direct Oversight"
          subtitle="Explore our modern academy at Kadirganj, Greater Road, Rajshahi, and our direct Japanese operational desk."
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
