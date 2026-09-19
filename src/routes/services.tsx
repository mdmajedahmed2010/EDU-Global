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
import { company, services, courses, processSteps } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Services & Academy | EDU Global — Study Abroad, IELTS, Spoken English & Kids English",
      },
      {
        name: "description",
        content:
          "Explore EDU Global services: 100% Admission Guidance (UK, USA, Canada, Australia, Europe, New Zealand, South Korea, Japan, Finland, Ireland, Cyprus), Free Bank Support Offer for first 20 students, Study Gap & Low CGPA accepted, IELTS Prep, Spoken English, Kids English & Japanese Courses. Dhanmondi, Dhaka.",
      },
      { property: "og:title", content: "Services & Language Academy | EDU Global" },
      {
        property: "og:description",
        content:
          "Official services of EDU Global (ইডিইউ গ্লোবাল). Global admissions, Free Bank Support for European visas, Study Gap & Low CGPA solutions, and comprehensive language training.",
      },
    ],
  }),
  component: Services,
});

const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "study-abroad", label: "Study Abroad Admissions" },
  { id: "language-academy", label: "Language Academy (IELTS & English)" },
  { id: "bank-support", label: "Free Bank Support" },
  { id: "study-gap", label: "Study Gap & Low CGPA" },
];

const comparisonData = [
  {
    feature: "Admission & University Processing",
    edugbl: "100% Admission Guidance with Direct University Partnerships (e.g. Canterbury Christ Church UK)",
    traditional: "Random unaccredited university choices with uncertain outcome",
    highlight: true,
  },
  {
    feature: "Financial & Bank Solvency Support",
    edugbl: "Free Bank Support Offer for first 20 students (Cyprus & Europe intakes)",
    traditional: "Expensive, unverified third-party paper vendors risking visa bans",
    highlight: true,
  },
  {
    feature: "Study Gap & Low CGPA Solutions",
    edugbl: "Profiles with long study gaps (up to 10+ years) and CGPA down to 2.5 accepted",
    traditional: "Immediate rejection of profiles with educational gaps or low marks",
    highlight: true,
  },
  {
    feature: "Study Abroad Without IELTS",
    edugbl: "Options via Medium of Instruction (MOI), Duolingo, and internal university English tests",
    traditional: "Forces expensive retakes without alternative admission pathways",
    highlight: true,
  },
  {
    feature: "Comprehensive Language Academy",
    edugbl: "IELTS 7.5+, Spoken English Fluency, Kids English & Phonics (ages 5–14), and Japanese (JLPT)",
    traditional: "Basic or no in-house language academy, outsourced without quality control",
    highlight: true,
  },
  {
    feature: "Accessible Central Location",
    edugbl: "Prime Dhanmondi Satmasjid Road (Keari Plaza, 4th Floor, Lift-3, Opp. Unimart)",
    traditional: "Hard-to-reach or hidden locations without proper counseling infrastructure",
    highlight: true,
  },
];

const serviceFaqs = [
  {
    q: "What is EDU Global's Free Bank Support offer?",
    a: "EDU Global offers Free Bank Support to the first 20 students applying for Cyprus and European Union partner university intakes. This helps students fulfill strict embassy financial solvency requirements legally and smoothly.",
  },
  {
    q: "Can I study abroad with a study gap or a CGPA around 2.5?",
    a: "Yes! EDU Global specializes in study gap solutions (up to 10+ years) and accepts CGPA down to 2.5. We evaluate your professional experience, build a robust SOP, and map you to universities in the UK, Europe, Cyprus, and Malaysia with accommodating policies.",
  },
  {
    q: "Is it possible to study abroad without an IELTS score?",
    a: "Yes. Many of our partner universities across the UK, Europe, Cyprus, and Malaysia accept Medium of Instruction (MOI) certificates from your previous degree, Duolingo English Test (DET), or internal university language assessments.",
  },
  {
    q: "What courses are offered at the EDU Global Language Academy?",
    a: "We offer comprehensive IELTS Preparation (Academic & General targeting Band 7.5+), Spoken English Fluency courses for career & visa interviews, Kids English & Phonics Academy (ages 5–14), and Japanese Language Courses (JLPT N5/N4).",
  },
  {
    q: "Where is EDU Global located and how do I schedule an assessment?",
    a: "Our central office is at Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi R/A, Dhaka - 1209 (Opposite Unimart, Old 15 Bus Stand). You can visit in person or call our hotlines: +880 1901-402990 or +880 1901-402992.",
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
        eyebrow="Foreign Education Advisory & Language Academy"
        title="GLOBAL ADMISSIONS & LANGUAGE ACADEMY"
        subtitle="EDU Global (ইডিইউ গ্লোবাল) offers comprehensive study abroad processing for 10+ countries, Free Bank Support for early applicants, Study Gap & Low CGPA acceptance, and premier IELTS, Spoken English & Kids English programs."
        image="/banner.png"
        imageAlt="EDU Global official banner"
      >
        <div className="space-y-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={open}
              className="btn-luxury-primary text-xs sm:text-sm py-3.5 px-8 shadow-xl hover:shadow-emerald-500/30 cursor-pointer font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950"
            >
              <span>Book Free Profile Assessment</span>
              <IconSparkles className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello EDU Global! I would like to inquire about study abroad admissions, language training, and free bank support.",
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
                    ? "bg-[#0b1f17] text-emerald-400 shadow-md border border-emerald-500/40"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Study Abroad & Advisory Services Grid */}
      {(activeCategory === "all" ||
        activeCategory === "study-abroad" ||
        activeCategory === "bank-support" ||
        activeCategory === "study-gap") && (
        <section className="section-shell py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full Lifecycle Global Advisory</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Comprehensive Foreign Education <span className="text-emerald-600">& Visa Services</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From free profile assessment at our Dhanmondi Head Office to direct university admissions, visa file processing, and embassy interview coaching.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{service.icon}</span>
                    {service.badge && (
                      <span className="rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
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
                    className="text-emerald-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Consult Counselor</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Language Academy & IELTS / English Section */}
      {(activeCategory === "all" || activeCategory === "language-academy") && (
        <section className="section-shell py-16 border-t border-slate-200 bg-slate-50/50">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>EDU Global Language Academy</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Premier English & Language <span className="text-emerald-600">Training Programs</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Master English communication for study abroad, professional careers, and kids' phonics mastery with our certified trainers.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl p-2 rounded-2xl bg-emerald-50 border border-emerald-200/80">
                      {course.icon}
                    </span>
                    <span className="rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
                      {course.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-black text-slate-900">
                      {course.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">{course.subtitle}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{course.description}</p>

                  <div className="space-y-2 rounded-2xl bg-slate-50 p-3 text-[0.72rem] text-slate-700 border border-slate-200/70">
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

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500 block">
                      Course Highlights:
                    </span>
                    <ul className="space-y-1">
                      {course.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <IconCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 mt-5 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={open}
                    className="btn-luxury-primary w-full text-xs py-2.5 justify-center shadow-md hover:shadow-emerald-500/30 cursor-pointer font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                  >
                    <span>Enroll Now</span>
                    <span>→</span>
                  </button>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello EDU Global! I want to enroll in the ${course.title} batch.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-luxury-secondary w-full text-xs py-2 justify-center text-slate-900 font-bold"
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

      {/* 5. 10+ Official Destinations Showcase */}
      {(activeCategory === "all" || activeCategory === "study-abroad") && (
        <section className="section-shell py-16 border-t border-slate-200">
          <div className="rounded-3xl border border-slate-800 bg-[#0c1f17] p-8 sm:p-12 text-white shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold inline-block mb-3">
                Global Destinations (Verified from Brand Banner)
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                Top Study Pathways with EDU Global
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                10+ verified countries featured on our official banner and university partner network.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "United Kingdom",
                  icon: "🇬🇧",
                  desc: "1-year master's programs, fast CAS turnaround, Canterbury Christ Church University direct admissions, and Graduate Route work visa.",
                  badge: "Direct University Partner",
                },
                {
                  title: "Europe & Schengen",
                  icon: "🇪🇺",
                  desc: "Cyprus, Greece, Italy, and Hungary admissions with Schengen travel access and special Free Bank Support for initial applicants.",
                  badge: "Free Bank Support",
                },
                {
                  title: "United States",
                  icon: "🇺🇸",
                  desc: "I-20 issuance, up to 3 years STEM OPT work authorization, merit scholarships, and visa interview preparation.",
                  badge: "STEM & OPT",
                },
                {
                  title: "Canada",
                  icon: "🇨🇦",
                  desc: "Designated Learning Institutions (DLI), co-op internships, and Post-Graduation Work Permits (PGWP).",
                  badge: "Work Permits",
                },
                {
                  title: "Australia",
                  icon: "🇦🇺",
                  desc: "Top institutions, high hourly part-time earnings, post-study work rights, and high visa grant rate.",
                  badge: "High Minimum Wage",
                },
                {
                  title: "New Zealand",
                  icon: "🇳🇿",
                  desc: "Globally accredited universities, welcoming community, safe study environment, and post-study open work visa.",
                  badge: "Safe & Welcoming",
                },
                {
                  title: "Japan & South Korea",
                  icon: "🇯🇵",
                  desc: "Cutting-edge technology degrees, Japanese language training (JLPT), and high-tech career placements in Asia.",
                  badge: "Asia Tech Hubs",
                },
                {
                  title: "Finland & Ireland",
                  icon: "🇫🇮",
                  desc: "Nordic education quality, European tech capital opportunities in Dublin, and generous stay-back work permits.",
                  badge: "Innovation Leaders",
                },
                {
                  title: "Malaysia & Cyprus",
                  icon: "🇲🇾",
                  desc: "Budget-friendly tuition, HELP University & MMU credit transfers, easy entry requirements without IELTS.",
                  badge: "Budget Friendly",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 space-y-2.5 flex flex-col justify-between hover:border-emerald-500/50 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{v.icon}</span>
                      <span className="text-[0.65rem] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        {v.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-white">{v.title}</h3>
                    <p className="text-[0.72rem] text-slate-300 leading-relaxed">{v.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={open}
                    className="text-[0.72rem] font-bold text-emerald-400 hover:text-emerald-300 text-left pt-2 border-t border-slate-800 cursor-pointer"
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
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Honesty & Transparency</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Students Choose <span className="text-emerald-600">EDU Global</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Compare our Free Bank Support, 100% Admission commitment, in-house Language Academy, and prime Dhanmondi location against ordinary agencies.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-white font-display uppercase tracking-wider text-[0.7rem]">
                <tr>
                  <th className="p-4 sm:p-5">Key Parameter</th>
                  <th className="p-4 sm:p-5 text-emerald-400 font-extrabold bg-[#0c1f17]">
                    ★ EDU Global
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
                      row.highlight && "bg-emerald-50/20",
                    )}
                  >
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-bold text-slate-900 bg-emerald-50/40">
                      <div className="flex items-center gap-2">
                        <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.edugbl}</span>
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

      {/* 7. Step-by-Step Roadmap */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Structured Process</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Proven 5-Step Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Structured roadmap from free profile evaluation at our Dhanmondi Head Office to language training, admission offer, visa grant, and pre-departure briefing.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative hover:border-emerald-500/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-2xl text-emerald-600">{step.step}</span>
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
            Clear, transparent answers about Free Bank Support, Study Gap & Low CGPA acceptance, Language Academy, and admission procedures.
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
                    ? "bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20"
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
                      isOpen ? "bg-emerald-600 text-white rotate-180" : "bg-slate-100 text-slate-600",
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
