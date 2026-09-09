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
      { title: "Services & Academy | RANS Scholarships — Study Abroad, IELTS & Language Courses" },
      {
        name: "description",
        content:
          "Explore RANS Scholarships services: 100% Free File Opening Charge, Finland January 2027 Joint App & Rolling Admissions, IELTS Academy (Band 7.5+), Spoken English, Kids English (5-14) & Student Visas. Bandar Bazar, Sylhet. Hotlines: 01772-063911 / 01925-772171.",
      },
      { property: "og:title", content: "Services & Courses | RANS Scholarships" },
      {
        property: "og:description",
        content:
          "Study Abroad Admissions & Language Academy at Rang Mohol Tower, Bandar Bazar, Sylhet. 100% Free File Opening Charge, Member of FECAS.",
      },
    ],
  }),
  component: Services,
});

const serviceCategories = [
  { id: "all", label: "All Offerings" },
  { id: "study-abroad", label: "Study Abroad Admissions" },
  { id: "language-courses", label: "Language Academy (IELTS & English)" },
  { id: "visa-guidance", label: "Student & Dependent Visas" },
  { id: "free-file", label: "100% Free File Opening" },
];

const comparisonData = [
  {
    feature: "File Opening & Profile Assessment",
    ransScholarships: "100% Free File Opening (Zero Upfront Charge)",
    traditional: "৳15,000 – ৳30,000 upfront non-refundable fee",
    highlight: true,
  },
  {
    feature: "Finland Study Specialization",
    ransScholarships: "Ranked #1 Priority (Jan 2027 Joint App & Rolling)",
    traditional: "Generalist advice; limited European UAS expertise",
    highlight: true,
  },
  {
    feature: "In-House Language Academy",
    ransScholarships: "IELTS 7.5+, Spoken English & Kids English (5-14)",
    traditional: "Consultancy only; no dedicated language training facility",
    highlight: true,
  },
  {
    feature: "Accreditation & Industry Standing",
    ransScholarships: "Member of FECAS & FACD-CAB (Since 2017)",
    traditional: "Unregistered or commercial brokers without associations",
    highlight: false,
  },
  {
    feature: "Spouse & Child Benefits Guidance",
    ransScholarships: "Full Spouse Work Rights & Free Child Schooling in Finland",
    traditional: "Usually ignores dependent family documentation",
    highlight: true,
  },
  {
    feature: "Direct Sylhet Landmark Office",
    ransScholarships: "425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet",
    traditional: "Remote virtual agents without a physical presence",
    highlight: false,
  },
];

const serviceFaqs = [
  {
    q: "Is RANS Scholarships truly 100% free with no file opening charge?",
    a: "Yes! RANS Scholarships maintains a strict 100% Free File Opening policy. We charge zero upfront profile evaluation or file opening fees. You only pay mandatory statutory expenses (such as university application fees, tuition deposits, and embassy visa fees) directly to the official portals.",
  },
  {
    q: "Why is Finland the top study destination at RANS Scholarships?",
    a: "Finland is the world's happiest country with world-renowned Universities of Applied Sciences (UAS). For the January 2027 Joint Application (31 Aug – 10 Sep 2026) and rolling intakes, students can apply without entrance exams in many programs, spouses enjoy full unrestricted work rights, and children receive free world-class schooling.",
  },
  {
    q: "What language training courses are offered at RANS Language Academy?",
    a: "We offer: 1) IELTS Preparation (Academic & General Training with weekly full-length mock tests aiming for Band 7.5+), 2) Spoken English & Professional Communication for students and professionals, 3) Kids English (Ages 5–14) for foundational fluency, and 4) English Grammar Masterclass.",
  },
  {
    q: "Which countries are included in your study abroad portfolio?",
    a: "Our core destinations featured in our official banner are Finland, Canada, USA, UK, Hungary (Stipendium Hungaricum scholarships), Netherlands, Italy, and Romania.",
  },
  {
    q: "Where is the RANS Scholarships corporate office located?",
    a: "Our corporate headquarters is located at 425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet, Bangladesh. You are welcome to walk in for free 1-on-1 counseling Sunday through Thursday.",
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
        title="Comprehensive Education & Language Services"
        subtitle="100% Free File Opening Charge, higher education admissions across Finland, Canada, USA, UK, Hungary, Netherlands, Italy & Romania, paired with certified IELTS & Spoken English coaching in Sylhet."
        image="/latest-assets/banner.jpg"
        imageAlt="RANS Scholarships study abroad admissions and language academy"
      >
        <div className="space-y-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={open}
              className="btn-luxury-primary text-xs sm:text-sm py-3.5 px-8 shadow-xl hover:shadow-red-600/30"
            >
              <span>Book Free Profile Assessment</span>
              <IconSparkles className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello RANS Scholarships! I would like to inquire about your 100% Free File Opening and study abroad services.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-luxury-secondary text-xs sm:text-sm py-3.5 px-7 shadow-xl text-slate-900"
            >
              <IconWhatsApp className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: 01772-063911</span>
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
                    ? "bg-red-600 text-white shadow-md border border-red-500"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Language Academy Specialized Section (IELTS, Spoken & Kids English) */}
      {(activeCategory === "all" || activeCategory === "language-courses") && (
        <section className="section-shell py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-700 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-red-600" />
              <span>RANS Language Academy</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              IELTS, Spoken English & <span className="text-red-600">Kids English</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Structured IELTS prep (Band 7.5+), Spoken English, and Kids English (Ages 5–14) at our
              modern studio in Rang Mohol Tower, Bandar Bazar, Sylhet.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-md flex flex-col justify-between hover:border-red-500/50 hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl p-2 rounded-2xl bg-red-50 border border-red-200/80">
                      {course.icon}
                    </span>
                    <span className="rounded-full bg-red-100 text-red-700 border border-red-200 px-3 py-1 text-xs font-bold">
                      {course.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-black text-slate-900">
                      {course.title}
                    </h3>
                    <p className="text-xs font-semibold text-red-600 mt-0.5">{course.subtitle}</p>
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
                      Course Modules & Benefits:
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
                    className="btn-luxury-primary w-full text-xs py-3 justify-center shadow-md hover:shadow-red-600/30"
                  >
                    <span>Enroll / Free Diagnostic Test</span>
                    <span>→</span>
                  </button>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello RANS Language Academy! I want to join the next ${course.title} batch in Sylhet. Please send fee and schedule.`,
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
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-700 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Full Lifecycle Advisory</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Higher Education Admissions & <span className="text-red-600">Free File Opening</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From university course matching at Rang Mohol Tower to visa interview prep, we provide
              honest end-to-end guidance with zero file opening fee.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between hover:border-red-500/40 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{service.icon}</span>
                    {service.highlightBadge && (
                      <span className="rounded-full bg-red-50 text-red-700 border border-red-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
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
                    className="text-red-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
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

      {/* 5. 8 Destinations & Visa Categories Comprehensive Showcase */}
      {(activeCategory === "all" || activeCategory === "visa-guidance") && (
        <section className="section-shell py-16 border-t border-slate-200">
          <div className="rounded-3xl border border-slate-800 bg-[#0F172A] p-8 sm:p-12 text-white shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="rounded-full bg-red-600/20 text-red-400 border border-red-500/30 px-3.5 py-1 text-xs font-bold inline-block mb-3">
                Global Destinations & Visas
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                Top Destinations Handled by RANS
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Expert processing for student visas, spouse work rights, and family relocation
                across Europe, North America, and the UK.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Finland",
                  icon: "🇫🇮",
                  desc: "Jan 2027 Joint App & Rolling Intakes. No entrance exam for select UAS, spouse work permit, child free education.",
                  badge: "#1 Priority",
                },
                {
                  title: "Canada",
                  icon: "🇨🇦",
                  desc: "Designated Learning Institutions (DLI), fast-track SDS & non-SDS student visas, PGWP post-graduation.",
                  badge: "Top Work Rights",
                },
                {
                  title: "United States",
                  icon: "🇺🇸",
                  desc: "I-20 issuance, STEM OPT extensions (up to 3 years), comprehensive embassy mock interview training.",
                  badge: "World Top 100",
                },
                {
                  title: "United Kingdom",
                  icon: "🇬🇧",
                  desc: "Direct CAS file assembly, foundation to master's programs, 2-year Graduate Route visa guidance.",
                  badge: "Popular Hub",
                },
                {
                  title: "Hungary",
                  icon: "🇭🇺",
                  desc: "Stipendium Hungaricum scholarship guidance, 100% tuition coverage, accommodation stipends in Schengen.",
                  badge: "Full Scholarship",
                },
                {
                  title: "Netherlands",
                  icon: "🇳🇱",
                  desc: "English-taught bachelor's & master's degrees, 1-year Search Year (Zoekjaar) visa for graduates.",
                  badge: "High Employability",
                },
                {
                  title: "Italy",
                  icon: "🇮🇹",
                  desc: "DSU regional scholarship support, low tuition public universities, vibrant European student life.",
                  badge: "Affordable EU",
                },
                {
                  title: "Romania",
                  icon: "🇷🇴",
                  desc: "Recognized European medical, dentistry, and engineering faculties with straightforward admissions.",
                  badge: "Direct Entry",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl bg-slate-800/80 border border-slate-700/80 p-5 space-y-2.5 flex flex-col justify-between hover:border-red-500/50 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{v.icon}</span>
                      <span className="text-[0.65rem] font-bold text-red-400 bg-red-500/20 px-2 py-0.5 rounded-full border border-red-500/30">
                        {v.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-white">{v.title}</h3>
                    <p className="text-[0.72rem] text-slate-300 leading-relaxed">{v.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={open}
                    className="text-[0.72rem] font-bold text-red-400 hover:text-red-300 text-left pt-2 border-t border-slate-700 cursor-pointer"
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
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-700 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Honesty & Transparency</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Students Choose <span className="text-red-600">RANS Scholarships</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Compare our verified 100% Free File Opening model and 10 years of experience against
            traditional agencies.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white font-display uppercase tracking-wider text-[0.7rem]">
                <tr>
                  <th className="p-4 sm:p-5">Key Parameter</th>
                  <th className="p-4 sm:p-5 text-red-400 font-extrabold bg-slate-800">
                    ★ RANS Scholarships
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
                      row.highlight && "bg-red-50/20",
                    )}
                  >
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-bold text-red-700 bg-red-50/40">
                      <div className="flex items-center gap-2">
                        <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.ransScholarships}</span>
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
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-700 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Structured Process</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Proven 5-Step Admission Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Meticulous file preparation from profile assessment at Rang Mohol Tower to visa
            stamping.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative hover:border-red-500/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-2xl text-red-600">{step.step}</span>
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
            Clear, transparent answers about our 100% Free File Opening policy, language batches,
            and visa processing.
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
                    ? "bg-white border-red-500 shadow-md ring-1 ring-red-500/20"
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
                      isOpen ? "bg-red-600 text-white rotate-180" : "bg-slate-100 text-slate-600",
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
