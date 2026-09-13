import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  IconCheck,
  IconSparkles,
  IconWhatsApp,
} from "@/components/ui-blocks";
import { company, processSteps, services, courses } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Services & Language Academy | Nexus Global — Japanese N5/N4, German A1, IELTS & Tokyo Support",
      },
      {
        name: "description",
        content:
          "Explore Nexus Global Language & Skill Training Centre services: Japanese Language (N5/N4 packages), German Goethe A1, IELTS coaching, Spoken English, Kids English, and study abroad pathways in Jashore. Direct Tokyo branch support. Hotlines: 01772-399913 / 01827-167332.",
      },
      { property: "og:title", content: "Services & Academy | Nexus Global Jashore & Tokyo" },
      {
        property: "og:description",
        content:
          "Japanese N5/N4, German A1, IELTS, Spoken English and Global Admissions with Tokyo Branch Liaison at Nowrin Tower, East Side of Laldighi, Jashore.",
      },
    ],
  }),
  component: Services,
});

const serviceCategories = [
  { id: "all", label: "All Offerings" },
  { id: "language-courses", label: "Language Academy (Japanese, German, IELTS)" },
  { id: "study-abroad", label: "Japan, Germany & Global Pathways" },
  { id: "tokyo-branch", label: "Tokyo Liaison Branch Care" },
  { id: "free-file", label: "Free Profile Assessment" },
];

const comparisonData = [
  {
    feature: "Profile Assessment & Counseling",
    nexusGlobal: "100% Free Transparent Assessment & Personalized Strategy",
    traditional: "Exorbitant upfront fees with vague assurances",
    highlight: true,
  },
  {
    feature: "Japan Language & Career Track",
    nexusGlobal: "Intensive N5/N4 packages, free books & Tokyo office reception",
    traditional: "Generic coaching with no on-arrival overseas support",
    highlight: true,
  },
  {
    feature: "Germany & Ausbildung Track",
    nexusGlobal: "Goethe A1 standard (Netzwerk Neu), Ausbildung and university guidance",
    traditional: "Pushes costly private colleges without proper language preparation",
    highlight: true,
  },
  {
    feature: "Learning Materials & Support",
    nexusGlobal: "Free textbooks, listening audio, and free extra classes until fluency",
    traditional: "Additional hidden fees for books and study materials",
    highlight: true,
  },
  {
    feature: "International Physical Office",
    nexusGlobal: "Nexus Group liaison branch in Shin-Koiwa, Tokyo, Japan",
    traditional: "Zero international branches; students left alone on arrival",
    highlight: true,
  },
  {
    feature: "Prime Campus in Jashore",
    nexusGlobal: "Nowrin Tower (3rd Floor), East Side of Laldighi, Sadar, Jashore",
    traditional: "Unverified agents operating without dedicated training facilities",
    highlight: true,
  },
];

const serviceFaqs = [
  {
    q: "How does Nexus Global support Japanese language learners and Japan visa applicants?",
    a: "We offer an intensive 3-month Japanese N5/N4 package taught 6 days a week (2 hours daily) using Minna no Nihongo. We provide free books, audio listening materials, and free extra classes. Once ready, our counselors guide your student or SSW (Specified Skilled Worker) visa application, coordinated directly with our Tokyo liaison office in Shin-Koiwa for airport reception and initial accommodation.",
  },
  {
    q: "What is included in the German Language (A1) Course at Nexus Academy?",
    a: "Our German course follows the official Goethe-Institut syllabus using Netzwerk Neu A1 and Grammatik Aktiv A1-B1. Classes run 5 days a week (1.5 hours daily) across 3 months. Students receive free textbooks, audio files, grammar worksheets, regular diagnostic quizzes, and complete guidance for tuition-free German universities or dual vocational Ausbildung programs.",
  },
  {
    q: "What direct services are provided by the Tokyo Liaison Branch in Japan?",
    a: "Our Tokyo office (Shin-Koiwa, Tokyo, Helpline: +81 90 7705 8380) handles on-the-ground support for our students: airport reception upon landing in Japan, orientation in Tokyo, assistance with student residence registration and part-time job search guidance in compliance with Japanese immigration regulations (up to 28 hours per week).",
  },
  {
    q: "What English training programs are offered at Nexus Academy Jashore?",
    a: "We provide: 1) IELTS Academic & General Training (target Band 7.5+ with Cambridge mock exams), 2) Spoken English for daily fluency and corporate interviews, 3) Kids English for children aged 5–14 (phonics, vocabulary, confidence), and 4) English Grammar Foundation.",
  },
  {
    q: "Where is Nexus Global located in Jashore and when can I visit?",
    a: "Our headquarters is at Nowrin Tower (3rd Floor), East Side of Laldighi, beside Kacchi Queen / backside of Sonali Bank Corporate Branch, Sadar, Jashore - 7400. We are open Saturday through Thursday (9:00 AM – 8:00 PM) for free in-person counseling.",
  },
];

function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const { open } = useRegisterModal();

  return (
    <>
      {/* 1. High-Impact Page Hero with Breadcrumbs */}
      <PageHero
        eyebrow="Admissions, Academy & Visas"
        title="Comprehensive Education & Skill Training Services"
        subtitle="Specialized foreign language mastery in Japanese (N5/N4) and German (A1 Goethe), paired with IELTS, Spoken English, and global higher education pathways backed by our Tokyo branch."
        image="/latest-assets/banner.jpg"
        imageAlt="Nexus Global admissions and language academy Jashore"
      >
        <div className="space-y-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={open}
              className="btn-luxury-primary text-xs sm:text-sm py-3.5 px-8 shadow-xl hover:shadow-sky-600/30 cursor-pointer"
            >
              <span>Book Free Profile Assessment</span>
              <IconSparkles className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello Nexus Global! I would like to inquire about your language courses and study abroad guidance in Jashore.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-luxury-secondary text-xs sm:text-sm py-3.5 px-7 shadow-xl text-slate-900"
            >
              <IconWhatsApp className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: {company.phones[0]}</span>
            </a>
          </div>
        </div>
      </PageHero>

      {/* 2. Service Category Filter Tabs */}
      <section className="bg-white border-b border-slate-200 py-6 sticky top-[69px] z-30 shadow-xs backdrop-blur-md bg-white/95">
        <div className="section-shell">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer",
                  activeCategory === cat.id
                    ? "bg-sky-600 text-white shadow-md border border-sky-500"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Language Academy Specialized Section */}
      {(activeCategory === "all" || activeCategory === "language-courses") && (
        <section className="section-shell py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-700 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Nexus Language Academy</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Japanese (N5/N4), German (A1) & <span className="text-sky-600">IELTS / English Programs</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Comprehensive curriculum with experienced trainers, multimedia audio-visual facilities, free books, and regular diagnostic tests at Nowrin Tower, East Side of Laldighi, Jashore.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-md flex flex-col justify-between hover:border-sky-500/50 hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl p-2 rounded-2xl bg-sky-50 border border-sky-200/80">
                      {course.icon}
                    </span>
                    <span className="rounded-full bg-sky-100 text-sky-800 border border-sky-200 px-3 py-1 text-xs font-bold">
                      {course.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-black text-slate-900">
                      {course.title}
                    </h3>
                    <p className="text-xs font-semibold text-sky-600 mt-0.5">{course.subtitle}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{course.description}</p>

                  <div className="space-y-2 rounded-2xl bg-slate-50 p-3.5 text-[0.72rem] text-slate-700 border border-slate-200/70">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Duration:</span>
                      <strong className="text-slate-900">{course.duration}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Schedule:</span>
                      <strong className="text-slate-900">{course.classSchedule}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Format:</span>
                      <strong className="text-slate-900">{course.batchType}</strong>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500 block">
                      Course Modules & Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {course.highlights.slice(0, 4).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-slate-700">
                          <IconCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={open}
                    className="btn-luxury-primary w-full text-xs py-3 justify-center shadow-md hover:shadow-sky-600/30 cursor-pointer"
                  >
                    <span>Enroll / Free Demo Class</span>
                    <span>→</span>
                  </button>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello Nexus Global! I want to join the next ${course.title} batch in Jashore. Please send fee and schedule.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-luxury-secondary w-full text-xs py-2.5 justify-center text-slate-900"
                  >
                    <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Core Educational Services Grid */}
      {(activeCategory === "all" ||
        activeCategory === "study-abroad" ||
        activeCategory === "free-file") && (
        <section className="section-shell py-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-700 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Full Lifecycle Advisory</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Higher Education Admissions & <span className="text-sky-600">Visa Processing</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From initial profile assessment at our Jashore campus to embassy interview drills and Tokyo airport reception, we guide your journey with integrity.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between hover:border-sky-500/40 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{service.icon}</span>
                    {service.highlightBadge && (
                      <span className="rounded-full bg-sky-50 text-sky-700 border border-sky-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
                        {service.highlightBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-black text-slate-900">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">{service.summary}</p>

                  <div className="pt-2 border-t border-slate-100">
                    <BulletList items={service.points} />
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-semibold">{service.timeline}</span>
                  <button
                    type="button"
                    onClick={open}
                    className="text-sky-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Destinations & Visa Categories Comprehensive Showcase */}
      {(activeCategory === "all" || activeCategory === "tokyo-branch" || activeCategory === "study-abroad") && (
        <section className="section-shell py-16 border-t border-slate-200">
          <div className="rounded-3xl border border-slate-800 bg-[#0B1528] p-8 sm:p-12 text-white shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="rounded-full bg-sky-600/20 text-sky-400 border border-sky-500/30 px-3.5 py-1 text-xs font-bold inline-block mb-3">
                Global Destinations & Visas
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                Top Pathways Processed by Nexus Global
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Specialized processing for Japan (with Tokyo liaison reception), tuition-free German universities & Ausbildung, Malaysia, UK, Canada, Australia, and the USA.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Japan",
                  icon: "🇯🇵",
                  desc: "Japanese language schools, SSW vocational tracks, and direct reception by our Tokyo liaison office in Shin-Koiwa.",
                  badge: "Flagship #1",
                },
                {
                  title: "Germany",
                  icon: "🇩🇪",
                  desc: "Tuition-free public universities, dual Ausbildung vocational training, Goethe A1 preparation, and 18-month job search visa.",
                  badge: "Flagship #2",
                },
                {
                  title: "Malaysia",
                  icon: "🇲🇾",
                  desc: "Affordable global degrees, fast EMGS processing, high visa ratio, and credit transfer options to UK/Australia.",
                  badge: "Fast Visa Hub",
                },
                {
                  title: "Canada",
                  icon: "🇨🇦",
                  desc: "Public Designated Learning Institutions (DLI), co-op internships, and up to 3-year Post-Graduation Work Permits.",
                  badge: "Work Permits",
                },
                {
                  title: "United Kingdom",
                  icon: "🇬🇧",
                  desc: "1-year master's degrees, fast CAS issuance, merit bursaries, and 2-year Graduate Route Post-Study Work visa.",
                  badge: "Popular Master's",
                },
                {
                  title: "Australia",
                  icon: "🇦🇺",
                  desc: "World top-ranked universities, high student minimum wage rates, and Subclass 500 visa documentation.",
                  badge: "Top Living",
                },
                {
                  title: "United States",
                  icon: "🇺🇸",
                  desc: "I-20 issuance, STEM OPT extensions (up to 3 years), and comprehensive consular mock interview coaching.",
                  badge: "STEM Careers",
                },
                {
                  title: "Schengen Europe",
                  icon: "🇪🇺",
                  desc: "English-taught degrees in Finland, Spain, and Greece with European Schengen visa mobility.",
                  badge: "29 Countries",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 space-y-2.5 flex flex-col justify-between hover:border-sky-500/50 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{v.icon}</span>
                      <span className="text-[0.65rem] font-bold text-sky-400 bg-sky-500/20 px-2 py-0.5 rounded-full border border-sky-500/30">
                        {v.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-white">{v.title}</h3>
                    <p className="text-[0.72rem] text-slate-300 leading-relaxed">{v.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={open}
                    className="text-[0.72rem] font-bold text-sky-400 hover:text-sky-300 text-left pt-2 border-t border-slate-800 cursor-pointer"
                  >
                    Check Eligibility →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Transparency Comparison Table */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-700 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Honesty & Transparency</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Students Choose <span className="text-sky-600">Nexus Global</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Compare our personalized language coaching, Tokyo branch reception, and dedicated counseling against traditional commercial agencies.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-white font-display uppercase tracking-wider text-[0.7rem]">
                <tr>
                  <th className="p-4 sm:p-5">Key Parameter</th>
                  <th className="p-4 sm:p-5 text-sky-400 font-extrabold bg-slate-900">
                    ★ Nexus Global (Jashore & Tokyo)
                  </th>
                  <th className="p-4 sm:p-5 text-slate-400">Traditional Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "transition-colors hover:bg-slate-50",
                      row.highlight && "bg-sky-50/20",
                    )}
                  >
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-bold text-sky-800 bg-sky-50/40">
                      <div className="flex items-center gap-2">
                        <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.nexusGlobal}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Step-by-Step Admission Process */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-700 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Structured Process</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Proven 5-Step Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Structured preparation from profile assessment at Nowrin Tower, Jashore to visa stamping and Tokyo reception.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative hover:border-sky-500/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-2xl text-sky-600">{step.step}</span>
                <span className="rounded-full bg-slate-100 text-slate-700 text-[0.68rem] font-bold px-2.5 py-0.5">
                  {step.badge}
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Service FAQs Accordion */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions on Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Clear, transparent answers about Japanese N5/N4, German A1, IELTS coaching, Tokyo office reception, and visa processing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {serviceFaqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={faq.q}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "bg-white border-sky-500 shadow-md ring-1 ring-sky-500/20"
                    : "bg-white border-slate-200 hover:border-slate-300",
                )}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer font-display font-bold text-sm sm:text-base text-slate-900"
                >
                  <span>{faq.q}</span>
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300",
                      isOpen ? "bg-sky-600 text-white rotate-180" : "bg-slate-100 text-slate-600",
                    )}
                  >
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-medium">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. Bottom CTA */}
      <CtaBand />
    </>
  );
}
