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
        title: "Services & Courses | Kushtia IELTS Care — IELTS, 300 BDT Mock Tests & Europe Study Abroad",
      },
      {
        name: "description",
        content:
          "Explore Kushtia IELTS Care services: Cambridge IELTS (Academic & General), Computer-Based Mock Tests at 300 BDT with individual headsets, Spoken English, Kids English Academy, and European Study Abroad Consultancy (Portugal, Czech Republic, UK, Germany, Canada). 169/4, Mahatab Uddin Road, Old Kataikhana More, Kushtia.",
      },
      { property: "og:title", content: "Services & Courses | Kushtia IELTS Care" },
      {
        property: "og:description",
        content:
          "Cambridge IELTS, 300 BDT Mock Tests, Spoken English, and European Study Abroad consultancy in Kushtia. Modern audio lab with individual headsets.",
      },
    ],
  }),
  component: Services,
});

const serviceCategories = [
  { id: "all", label: "All Offerings" },
  { id: "ielts-courses", label: "IELTS & Mock Tests (300 BDT)" },
  { id: "spoken-kids", label: "Spoken & Kids English" },
  { id: "study-abroad", label: "Portugal & European Study Abroad" },
  { id: "free-file", label: "Free Profile Assessment" },
];

const comparisonData = [
  {
    feature: "Listening Lab & Audio Setup",
    ieltsCare: "Dedicated Audio Lab with individual headsets for clear, distortion-free listening",
    traditional: "Common loudspeaker in large halls causing echo and low band scores",
    highlight: true,
  },
  {
    feature: "Full Real Exam Mock Test",
    ieltsCare: "Only 300 BDT for full Computer-Based & Paper-Based Mock Tests with Band Analysis",
    traditional: "High fees (1,000–2,500 BDT) with delayed or no detailed feedback",
    highlight: true,
  },
  {
    feature: "Curriculum & Mentorship",
    ieltsCare: "Complete Cambridge IELTS aligned syllabus with personalized 1-on-1 speaking feedback",
    traditional: "Generic coaching with crowded batches and no individual care",
    highlight: true,
  },
  {
    feature: "Study in Portugal & Europe Track",
    ieltsCare: "Direct university admission, low tuition fees, and complete Schengen visa documentation",
    traditional: "Unverified third-party file routing with hidden charges",
    highlight: true,
  },
  {
    feature: "Spoken & Kids English Academy",
    ieltsCare: "Practical conversational fluency drills and child-friendly phonics foundation",
    traditional: "Rote grammar memorization without interactive communication practice",
    highlight: true,
  },
  {
    feature: "Kushtia Campus Facility",
    ieltsCare: "169/4, Mahatab Uddin Road, Old Kataikhana More, Kushtia (central & accessible)",
    traditional: "Unverified agents operating without modern audio/computer lab infrastructure",
    highlight: true,
  },
];

const serviceFaqs = [
  {
    q: "How does Kushtia IELTS Care conduct computer-based and offline mock tests for 300 BDT?",
    a: "We provide full-length IELTS mock tests (Listening, Reading, Writing, Speaking) in a simulated exam hall with individual computer terminals and high-quality individual headsets. For only 300 BDT, you receive real exam experience, exact timing, and an extensive diagnostic report highlighting strengths and areas for improvement.",
  },
  {
    q: "What makes the listening audio lab at Kushtia IELTS Care unique?",
    a: "Many candidates lose crucial band points in the listening section due to poor room acoustics or loudspeakers. At Kushtia IELTS Care, every single test-taker and student gets a dedicated, noise-isolating headset, mirroring the exact setup of official British Council and IDP test venues.",
  },
  {
    q: "How does Kushtia IELTS Care help with studying in Portugal and Europe?",
    a: "We assist students in securing admissions at top accredited universities in Portugal and the Czech Republic, where tuition fees are affordable and courses are taught in English. We handle document verification, university applications, motivation letters, and embassy visa appointments.",
  },
  {
    q: "What English training programs are available for children and job seekers?",
    a: "We provide: 1) IELTS Academic & General Training (Target Band 7.5+), 2) Professional Spoken English for presentation and interview fluency, 3) Kids English Academy for ages 5–14 (phonics, vocabulary, confidence building), and 4) English Grammar Foundation.",
  },
  {
    q: "Where is Kushtia IELTS Care located and what are the office hours?",
    a: "Our campus is situated at 169/4, Mahatab Uddin Road, Old Kataikhana More, Kushtia. We are open Saturday through Thursday from 9:00 AM to 8:00 PM for free profile evaluations, campus tours, and mock test bookings.",
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
        eyebrow="English Language & European Study Abroad"
        title="IELTS, 300 BDT Mock Tests & Europe Admissions"
        subtitle="Specialized Cambridge IELTS coaching, computer-based mock tests with individual headsets at only 300 BDT, Spoken English, Kids English, and study abroad consultancy in Portugal and Europe."
        image="/banner.png"
        imageAlt="Kushtia IELTS Care classroom, audio lab, and banner"
      >
        <div className="space-y-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={open}
              className="btn-luxury-primary text-xs sm:text-sm py-3.5 px-8 shadow-xl hover:shadow-amber-500/30 cursor-pointer font-bold bg-amber-500 hover:bg-amber-400 text-slate-950"
            >
              <span>Book Assessment / 300 BDT Mock</span>
              <IconSparkles className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello Kushtia IELTS Care! I would like to inquire about IELTS batches, 300 BDT mock tests, and European admissions.",
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
                    ? "bg-[#092552] text-amber-400 shadow-md border border-amber-500/40"
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
      {(activeCategory === "all" || activeCategory === "ielts-courses" || activeCategory === "spoken-kids") && (
        <section className="section-shell py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-700 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Kushtia IELTS Care Language Academy</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Cambridge IELTS, 300 BDT Mocks & <span className="text-amber-500">English Academy</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              কুষ্টিয়ায় আধুনিক সাউন্ড ল্যাব, পৃথক হেডসেট, কেমব্রিজ সিলেবাস এবং অভিজ্ঞ মেন্টরদের তত্ত্বাবধানে নিবিড় পাঠদান।
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
                    <span>Enroll / Book Mock Test</span>
                    <span>→</span>
                  </button>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello Kushtia IELTS Care! I want to join the next ${course.title} batch / book a mock test slot. Please send fee and schedule.`,
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
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-700 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Full Lifecycle Advisory</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Higher Education Admissions & <span className="text-amber-500">Visa Processing</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From initial profile evaluation at our Old Kataikhana More campus to university admission, Portugal & European visa processing, and pre-departure briefing.
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
      {(activeCategory === "all" || activeCategory === "study-abroad") && (
        <section className="section-shell py-16 border-t border-slate-200">
          <div className="rounded-3xl border border-slate-800 bg-[#061122] p-8 sm:p-12 text-white shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="rounded-full bg-amber-600/20 text-amber-400 border border-amber-500/30 px-3.5 py-1 text-xs font-bold inline-block mb-3">
                Global Destinations & Visas
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                Top Pathways Processed by Kushtia IELTS Care
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Specialized processing for Portugal & European Schengen countries, Czech Republic, UK, Germany, Canada, and global destinations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Portugal",
                  icon: "🇵🇹",
                  desc: "Low tuition fees, English-medium bachelor's and master's degrees, and 29-country Schengen visa access.",
                  badge: "Featured European Track",
                },
                {
                  title: "Czech Republic",
                  icon: "🇨🇿",
                  desc: "Affordable European education in central Europe, world-renowned universities, and fast student visa processing.",
                  badge: "Central Europe Hub",
                },
                {
                  title: "United Kingdom",
                  icon: "🇬🇧",
                  desc: "1-year master's degrees, fast CAS turnaround, merit scholarships, and 2-year Graduate Route Post-Study Work visa.",
                  badge: "Popular Master's",
                },
                {
                  title: "Germany",
                  icon: "🇩🇪",
                  desc: "Tuition-free public universities, dual vocational programs, and 18-month post-study work search visa.",
                  badge: "Europe Top Economy",
                },
                {
                  title: "Canada",
                  icon: "🇨🇦",
                  desc: "Public Designated Learning Institutions (DLI), co-op internships, and up to 3-year Post-Graduation Work Permits.",
                  badge: "Work Permits",
                },
                {
                  title: "United States",
                  icon: "🇺🇸",
                  desc: "I-20 issuance, STEM OPT extensions (up to 3 years), and comprehensive consular mock interview coaching.",
                  badge: "STEM Careers",
                },
                {
                  title: "Australia",
                  icon: "🇦🇺",
                  desc: "World top-ranked universities, high minimum wages for students, and Subclass 500 visa compliance.",
                  badge: "Top Living",
                },
                {
                  title: "Sweden & Europe",
                  icon: "🇸🇪",
                  desc: "High innovation indices, research-focused programs, and Schengen visa mobility across Europe.",
                  badge: "Nordic Education",
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
            Why Students Choose <span className="text-sky-600">Kushtia IELTS Care</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Compare our dedicated audio lab, 300 BDT CBT mock test standard, Cambridge syllabus, and personalized coaching against traditional commercial coaching centers.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-white font-display uppercase tracking-wider text-[0.7rem]">
                <tr>
                  <th className="p-4 sm:p-5">Key Parameter</th>
                  <th className="p-4 sm:p-5 text-amber-400 font-extrabold bg-slate-900">
                    ★ Kushtia IELTS Care
                  </th>
                  <th className="p-4 sm:p-5 text-slate-400">Traditional Coaching Centers</th>
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
                        <span>{row.ieltsCare}</span>
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
            Structured preparation from diagnostic evaluation at our Kushtia campus to IELTS target band achievement and university visa stamping.
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
