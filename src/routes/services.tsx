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
import { company, services, courses } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Services & Academy | AcademiaZ — Japanese N5/N4, TITP & SSW, IELTS & Visa Consultancy | Rajshahi",
      },
      {
        name: "description",
        content:
          "Explore AcademiaZ services: Japanese Language (JLPT N5/N4, NAT-TEST, JFT-Basic), TITP & SSW career tracks, Student Visas for Japan, IELTS coaching, Spoken English, and Kids English (Ages 5–14) in Rajshahi. Managed directly from Japan (জাপান থেকে পরিচালিত). Hotlines: 01518-951062 / 01632-372232.",
      },
      { property: "og:title", content: "Services & Academy | AcademiaZ Rajshahi" },
      {
        property: "og:description",
        content:
          "Japanese N5/N4, TITP & SSW programs, Student Visas, IELTS, Spoken English, and Kids English at Kadirganj, Greater Road, Rajshahi. Managed directly from Japan.",
      },
    ],
  }),
  component: Services,
});

const serviceCategories = [
  { id: "all", label: "All Offerings" },
  { id: "language-courses", label: "Language Academy (Japanese, IELTS, Spoken)" },
  { id: "study-abroad", label: "Japan Visa & Career Tracks" },
  { id: "japan-managed", label: "Japan-Based Direct Oversight" },
  { id: "free-file", label: "Free Profile Assessment" },
];

const comparisonData = [
  {
    feature: "Profile Assessment & Counseling",
    academiaZ: "100% Free Transparent Assessment & Personalized Career Roadmap",
    traditional: "Exorbitant upfront fees with vague assurances",
    highlight: true,
  },
  {
    feature: "Japanese Language Training",
    academiaZ: "Intensive JLPT N5/N4, NAT-TEST & JFT-Basic with Kanji drills & listening lab",
    traditional: "Generic coaching with no exam-specific mock testing",
    highlight: true,
  },
  {
    feature: "Management & Operational Origin",
    academiaZ: "Directly managed and supervised from Japan (জাপান থেকে পরিচালিত)",
    traditional: "Third-party middlemen with zero direct overseas authority",
    highlight: true,
  },
  {
    feature: "Work & Career Programs in Japan",
    academiaZ: "TITP Technical Intern & SSW Specified Skilled Worker mentorship",
    traditional: "Misleading promises without verified immigration category knowledge",
    highlight: true,
  },
  {
    feature: "English & IELTS Academy",
    academiaZ: "Cambridge-standard IELTS 7.5+, Spoken English & Kids English (Ages 5–14)",
    traditional: "Impersonal large batches with no 1-on-1 speaking feedback",
    highlight: true,
  },
  {
    feature: "Centrally Located Campus in Rajshahi",
    academiaZ: "Kadirganj, Greater Road (Lane beside Ma Photostat), Rajshahi - 6000",
    traditional: "Unverified agents operating without dedicated classroom infrastructure",
    highlight: true,
  },
];

const serviceFaqs = [
  {
    q: "How does AcademiaZ support Japanese language learners and Japan visa applicants?",
    a: "We offer intensive Japanese N5 and N4 level courses designed for JLPT, NAT-TEST, and JFT-Basic exams using the standard Minna no Nihongo curriculum. Classes focus on Kanji mastery, grammatical precision, and listening comprehension. Because our management is based directly in Japan, our counselors guide your COE (Certificate of Eligibility) and visa application with verified up-to-date immigration guidelines.",
  },
  {
    q: "What is the difference between Japan Student Visa, TITP, and SSW programs?",
    a: "1) Student Visa allows you to enroll in Japanese language academies or universities with permission to work part-time (up to 28 hours/week). 2) TITP (Technical Intern Training Program) is a structured technical internship in Japan for vocational skills development. 3) SSW (Specified Skilled Worker) is a full-fledged employment visa for candidates who pass the Japanese language exam (N4/JFT) and specific occupational skills tests. AcademiaZ provides comprehensive training for all three tracks.",
  },
  {
    q: "Why is 'Japan-Based Direct Management' a major advantage for students?",
    a: "AcademiaZ is managed and directed by professionals currently living and working in Japan. This provides authentic insights into Japanese campus life, living costs, university admission standards, interview expectations, and post-arrival settlement that typical domestic agents cannot offer.",
  },
  {
    q: "What English training programs are offered at AcademiaZ Rajshahi?",
    a: "We provide: 1) IELTS Academic & General Training (targeting Band 7.5+ with Cambridge mock exams), 2) Spoken English for corporate and conversational fluency, 3) Kids English for children aged 5–14 (phonics, vocabulary, confidence building), and 4) English Grammar Foundation.",
  },
  {
    q: "Where is AcademiaZ located in Rajshahi and when can I visit?",
    a: "Our academy is located at Kadirganj, Greater Road (Lane beside Ma Photostat, east side of the mosque), Rajshahi - 6000. We are open Saturday through Thursday (9:00 AM – 8:00 PM) for free in-person counseling and level assessments.",
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
        eyebrow="Academic, Language & Visa Services"
        title="Comprehensive Japanese Training & Visa Solutions"
        subtitle="Specialized foreign language mastery in Japanese (JLPT N5/N4, NAT-TEST, JFT-Basic), TITP & SSW career tracks, student visa processing, and communicative English courses supervised under our Japan-based management."
        image="/banner.jpg"
        imageAlt="AcademiaZ admissions and language academy Rajshahi"
      >
        <div className="space-y-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={open}
              className="btn-luxury-primary text-xs sm:text-sm py-3.5 px-8 shadow-xl hover:shadow-sky-600/30 cursor-pointer font-bold"
            >
              <span>Book Free Profile Assessment</span>
              <IconSparkles className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello AcademiaZ! I would like to inquire about your Japanese courses, visa guidance, and English programs in Rajshahi.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-luxury-secondary text-xs sm:text-sm py-3.5 px-7 shadow-xl text-slate-900 font-bold"
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
              <span>AcademiaZ Language Academy</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Japanese (N5/N4), IELTS, Spoken & <span className="text-sky-600">Kids English</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Comprehensive curriculum with experienced educators, multimedia listening audio facilities, free course materials, and regular diagnostic tests at Kadirganj, Rajshahi.
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
                    className="btn-luxury-primary w-full text-xs py-3 justify-center shadow-md hover:shadow-sky-600/30 cursor-pointer font-bold"
                  >
                    <span>Enroll / Free Demo Class</span>
                    <span>→</span>
                  </button>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello AcademiaZ! I want to join the next ${course.title} batch in Rajshahi. Please send fee and schedule.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-luxury-secondary w-full text-xs py-2.5 justify-center text-slate-900 font-bold"
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
              From initial profile evaluation at our Kadirganj campus to COE issuance, Japanese visa processing, and post-arrival settlement, we guide your journey with integrity.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between hover:border-sky-500/40 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{service.icon}</span>
                    {service.badge && (
                      <span className="rounded-full bg-sky-50 text-sky-700 border border-sky-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-black text-slate-900">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">{service.overview}</p>

                  <div className="pt-2 border-t border-slate-100">
                    <BulletList items={service.benefits} />
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-semibold">{service.intakeNote || "Open for Enrollment"}</span>
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
      {(activeCategory === "all" || activeCategory === "japan-managed" || activeCategory === "study-abroad") && (
        <section className="section-shell py-16 border-t border-slate-200">
          <div className="rounded-3xl border border-slate-800 bg-[#0B1528] p-8 sm:p-12 text-white shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="rounded-full bg-sky-600/20 text-sky-400 border border-sky-500/30 px-3.5 py-1 text-xs font-bold inline-block mb-3">
                Global Destinations & Visas
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                Top Pathways Processed by AcademiaZ
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Specialized processing for Japan (with direct Japan-based oversight), tuition-free European universities, Malaysia, UK, Canada, Australia, and the USA.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Japan",
                  icon: "🇯🇵",
                  desc: "Japanese language academies, vocational schools, universities, and SSW/TITP career tracks with 100% Japan-based management.",
                  badge: "Flagship #1",
                },
                {
                  title: "Germany",
                  icon: "🇩🇪",
                  desc: "Tuition-free public universities, dual Ausbildung vocational programs, and 18-month post-study work rights.",
                  badge: "Europe Track",
                },
                {
                  title: "Malaysia",
                  icon: "🇲🇾",
                  desc: "Affordable world-ranked campuses, fast EMGS approval, and credit transfer pathways to UK and Australia.",
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
                  desc: "1-year master's degrees, fast CAS turnaround, merit scholarships, and 2-year Graduate Route Post-Study Work visa.",
                  badge: "Popular Master's",
                },
                {
                  title: "Australia",
                  icon: "🇦🇺",
                  desc: "World top-ranked universities, high minimum wages for students, and Subclass 500 visa compliance.",
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
                  desc: "English-taught programs across Europe with 29-country Schengen visa mobility and post-study opportunities.",
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
            Why Students Choose <span className="text-sky-600">AcademiaZ</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Compare our authentic Japan-managed standard, JLPT N5/N4 curriculum, and dedicated counseling against traditional commercial agencies.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-white font-display uppercase tracking-wider text-[0.7rem]">
                <tr>
                  <th className="p-4 sm:p-5">Key Parameter</th>
                  <th className="p-4 sm:p-5 text-amber-400 font-extrabold bg-slate-900">
                    ★ AcademiaZ (Japan Managed)
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
                        <span>{row.academiaZ}</span>
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
            Structured preparation from profile evaluation at Kadirganj, Rajshahi to visa stamping and Japan arrival.
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
            Clear, transparent answers about Japanese N5/N4, TITP & SSW work programs, IELTS coaching, Japan-based management, and visa processing.
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
