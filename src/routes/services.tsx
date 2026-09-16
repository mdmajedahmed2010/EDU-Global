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
        title: "Services & Courses | Higher Study Counselors Bangladesh — Study Abroad & IELTS Cash Back",
      },
      {
        name: "description",
        content:
          "Explore Higher Study Counselors Bangladesh services: Global Study Abroad (UK, USA, Australia, Hungary, Canada, Finland, Denmark, Malaysia, Dubai), 100% IELTS Cash Back On Visa Success, Opportunity To Move With Family, Long Study Gap Accepted, Low Tuition Fees Universities, Spoken English, and Kids English. Uttara Dhaka & Glasgow UK offices.",
      },
      { property: "og:title", content: "Services & Courses | Higher Study Counselors Bangladesh" },
      {
        property: "og:description",
        content:
          "Official services of Higher Study Counselors Bangladesh (Since 2012). Global study admissions, 100% IELTS Cash Back on Visa Success, Move with Family, and Study Gap Accepted.",
      },
    ],
  }),
  component: Services,
});

const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "study-abroad", label: "Global Study Abroad" },
  { id: "ielts-courses", label: "IELTS & 100% Cash Back" },
  { id: "family-move", label: "Move With Family" },
  { id: "study-gap", label: "Study Gap Accepted" },
];

const comparisonData = [
  {
    feature: "IELTS Course Fee Policy",
    hscbd: "100% Cash Back on Successful Visa Grant through HSC BD",
    traditional: "Non-refundable fees regardless of visa outcome",
    highlight: true,
  },
  {
    feature: "Opportunity To Move With Family",
    hscbd: "Dedicated dependent visa advisory for spouse and children",
    traditional: "Single applicant focus only, minimal family guidance",
    highlight: true,
  },
  {
    feature: "Long Study Gap Acceptance",
    hscbd: "Expert gap justification and university placement (up to 7–10+ yrs accepted)",
    traditional: "Immediate rejection of profiles with educational gaps",
    highlight: true,
  },
  {
    feature: "Affordable Tuition & Installments",
    hscbd: "Low tuition fee university matching with flexible installment options",
    traditional: "Pushing expensive universities with exorbitant commission charges",
    highlight: true,
  },
  {
    feature: "UK International Office Presence",
    hscbd: "Permanent UK office at 3A Westburn Road, Glasgow for on-ground student care",
    traditional: "Zero overseas presence once student boards flight",
    highlight: true,
  },
  {
    feature: "Financial Advice & Guidance",
    hscbd: "Comprehensive bank solvency auditing and genuine financial counseling",
    traditional: "Unverified document vendors with high visa refusal risk",
    highlight: true,
  },
];

const serviceFaqs = [
  {
    q: "How does the 'IELTS Cash Back On Visa Success' guarantee work?",
    a: "When you enroll in our IELTS Academic or General preparation course at Higher Study Counselors Bangladesh and subsequently process your student visa file through us, your entire IELTS tuition fee is refunded 100% as cashback upon the successful issuance of your student visa.",
  },
  {
    q: "Can I move abroad with my family (spouse and children)?",
    a: "Yes! One of HSC BD's core pillars is 'Opportunity To Move With Family'. We specialize in dependent visa documentation, maintenance fund requirements, and family accommodation guidelines for countries like the UK, Australia, and Canada where student dependents are legally permitted.",
  },
  {
    q: "I have a 5 to 10 year study gap. Can I still apply for foreign universities?",
    a: "Absolutely. Under our 'Long Study Gap Accepted' program, we analyze your work experience, certifications, and professional background to build a compelling Statement of Purpose and justify the gap to universities and visa officers in the UK, USA, Hungary, Denmark, and other flexible destinations.",
  },
  {
    q: "Which destinations does Higher Study Counselors Bangladesh process?",
    a: "We officially process admissions for 9 key destinations: United Kingdom (UK), United States (USA), Australia, Hungary (Schengen Europe), Canada, Finland, Denmark, Malaysia, and Dubai.",
  },
  {
    q: "Where are your offices located and how do I schedule a consultation?",
    a: "Our Bangladesh Head Office is located at House 23, Road 2, 1st Floor, Sector 3, Uttara, Dhaka - 1230. We also operate our UK office at 3A Westburn Road, Glasgow. You can visit in person Saturday through Thursday (9:30 AM – 6:30 PM) or call our hotlines: 01974843470, 01676997222.",
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
        title="GLOBAL ADMISSIONS & IELTS CASH BACK"
        subtitle="Higher Study Counselors Bangladesh (Since 2012) offers comprehensive study abroad processing for 9+ countries, 100% IELTS Cash Back on Visa Success, Move with Family, and Long Study Gap Accepted."
        image="/banner.jpg"
        imageAlt="Higher Study Counselors Bangladesh official banner"
      >
        <div className="space-y-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={open}
              className="btn-luxury-primary text-xs sm:text-sm py-3.5 px-8 shadow-xl hover:shadow-amber-500/30 cursor-pointer font-bold bg-amber-500 hover:bg-amber-400 text-slate-950"
            >
              <span>Book Free Profile Assessment</span>
              <IconSparkles className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello Higher Study Counselors Bangladesh! I would like to inquire about study abroad admissions, IELTS cashback, and family visa support.",
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
                    ? "bg-[#161B38] text-amber-400 shadow-md border border-amber-500/40"
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
        activeCategory === "family-move" ||
        activeCategory === "study-gap") && (
        <section className="section-shell py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-700 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Full Lifecycle Global Advisory</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Comprehensive Foreign Education <span className="text-amber-500">& Visa Services</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From free profile evaluation at our Uttara Head Office to university admission, financial guidance, family visa lodging, and UK on-ground support.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between hover:border-amber-500/40 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{service.icon}</span>
                    {service.badge && (
                      <span className="rounded-full bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
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
                    className="text-amber-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
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

      {/* 4. Language Academy & IELTS Cash Back Section */}
      {(activeCategory === "all" || activeCategory === "ielts-courses") && (
        <section className="section-shell py-16 border-t border-slate-200 bg-slate-50/50">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-700 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>HSC BD Language Academy</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Cambridge IELTS with <span className="text-amber-500">100% Cash Back on Visa</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Learn from experienced Cambridge-certified trainers. When your student visa is granted through HSC BD, receive a full 100% cash back of your course fee!
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-md flex flex-col justify-between hover:border-amber-500/50 hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl p-2 rounded-2xl bg-amber-50 border border-amber-200/80">
                      {course.icon}
                    </span>
                    <span className="rounded-full bg-amber-100 text-amber-900 border border-amber-200 px-3 py-1 text-xs font-bold">
                      {course.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-black text-slate-900">
                      {course.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-600 mt-0.5">{course.subtitle}</p>
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
                    className="btn-luxury-primary w-full text-xs py-3 justify-center shadow-md hover:shadow-amber-500/30 cursor-pointer font-bold bg-amber-500 hover:bg-amber-400 text-slate-950"
                  >
                    <span>Enroll / Claim Cashback</span>
                    <span>→</span>
                  </button>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello Higher Study Counselors Bangladesh! I want to enroll in the ${course.title} batch and learn about the IELTS Cash Back on Visa Success guarantee.`,
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

      {/* 5. 9 Official Destinations Showcase */}
      {(activeCategory === "all" || activeCategory === "study-abroad") && (
        <section className="section-shell py-16 border-t border-slate-200">
          <div className="rounded-3xl border border-slate-800 bg-[#161B38] p-8 sm:p-12 text-white shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3.5 py-1 text-xs font-bold inline-block mb-3">
                Official Banner Destinations
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                Top Study Pathways with HSC BD
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                All 9 destinations verified directly from our official corporate banner with direct university partnerships.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "United Kingdom",
                  icon: "🇬🇧",
                  desc: "1-year master's programs, fast CAS turnaround, low tuition fee universities, and 2-year Graduate Route Post-Study Work visa.",
                  badge: "UK Office Support",
                },
                {
                  title: "United States",
                  icon: "🇺🇸",
                  desc: "I-20 issuance, up to 3 years STEM OPT work authorization, scholarship guidance, and expert visa interview preparation.",
                  badge: "STEM & OPT",
                },
                {
                  title: "Australia",
                  icon: "🇦🇺",
                  desc: "Top Group of Eight and progressive universities, high hourly wages, post-study work rights, and family dependent pathways.",
                  badge: "High Minimum Wage",
                },
                {
                  title: "Hungary",
                  icon: "🇭🇺",
                  desc: "Affordable tuition fees in Central Europe, English-medium degrees, and 29-nation Schengen visa mobility.",
                  badge: "Schengen Europe",
                },
                {
                  title: "Canada",
                  icon: "🇨🇦",
                  desc: "Top Designated Learning Institutions (DLI), co-op internships, and up to 3-year Post-Graduation Work Permits (PGWP).",
                  badge: "Work Permits",
                },
                {
                  title: "Finland",
                  icon: "🇫🇮",
                  desc: "World's happiest country, high innovation education, generous post-graduation permits, and tuition discounts.",
                  badge: "Nordic Excellence",
                },
                {
                  title: "Denmark",
                  icon: "🇩🇰",
                  desc: "Cutting-edge research universities, excellent work-life balance, and English-taught bachelor's & master's degrees.",
                  badge: "European Leader",
                },
                {
                  title: "Malaysia",
                  icon: "🇲🇾",
                  desc: "Cost-effective international degree transfers, UK/Australian branch campuses, and fast visa approvals.",
                  badge: "Budget-Friendly",
                },
                {
                  title: "Dubai (UAE)",
                  icon: "🇦🇪",
                  desc: "Rapid visa processing, tax-free part-time earning opportunities, and branch campuses of premier global institutions.",
                  badge: "Fast Visa Turnaround",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 space-y-2.5 flex flex-col justify-between hover:border-amber-500/50 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{v.icon}</span>
                      <span className="text-[0.65rem] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
                        {v.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-white">{v.title}</h3>
                    <p className="text-[0.72rem] text-slate-300 leading-relaxed">{v.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={open}
                    className="text-[0.72rem] font-bold text-amber-400 hover:text-amber-300 text-left pt-2 border-t border-slate-800 cursor-pointer"
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
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-700 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Honesty & Transparency</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Students Choose <span className="text-amber-500">Higher Study Counselors Bangladesh</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Compare our 100% IELTS Cash Back policy, family move support, long study gap acceptance, and dual-country offices against traditional agencies.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-white font-display uppercase tracking-wider text-[0.7rem]">
                <tr>
                  <th className="p-4 sm:p-5">Key Parameter</th>
                  <th className="p-4 sm:p-5 text-amber-400 font-extrabold bg-[#161B38]">
                    ★ HSC BD (Since 2012)
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
                      row.highlight && "bg-amber-50/20",
                    )}
                  >
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-bold text-slate-900 bg-amber-50/40">
                      <div className="flex items-center gap-2">
                        <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.hscbd}</span>
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
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-700 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Structured Process</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Proven 5-Step Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Structured roadmap from free file evaluation at our Uttara Head Office to IELTS preparation, visa issuance, and UK on-ground reception.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative hover:border-amber-500/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-2xl text-amber-600">{step.step}</span>
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
            Clear, transparent answers about IELTS Cashback, Move with Family, Study Gap Acceptance, and UK/Dhaka offices.
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
                    ? "bg-white border-amber-500 shadow-md ring-1 ring-amber-500/20"
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
                      isOpen ? "bg-amber-600 text-white rotate-180" : "bg-slate-100 text-slate-600",
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
