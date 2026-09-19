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
      {
        title: "About Us | EDU Global — One Stop Solution for Higher Education | Dhanmondi, Dhaka",
      },
      {
        name: "description",
        content:
          "About EDU Global (ইডিইউ গ্লোবাল) — Your premier international education consultancy and language academy. 100% Admission Support, Free Bank Support for initial 20 students, Study Gap & Low CGPA accepted, IELTS, Spoken English & Kids English. Located at Keari Plaza, 4th Floor, Road 8/A, Satmasjid Road, Dhanmondi, Dhaka.",
      },
      {
        property: "og:title",
        content: "About EDU Global — Higher Education Consultancy & Language Academy",
      },
      {
        property: "og:description",
        content:
          "Official profile of EDU Global. One stop solution to your journey of higher education across UK, USA, Canada, Australia, Europe, Japan, South Korea, and more.",
      },
    ],
  }),
  component: About,
});

const advisoryWings = [
  {
    title: "Global University Admissions Wing",
    hub: "Dhanmondi HQ & Global Partner Desks",
    badge: "10+ Countries",
    icon: "🎓",
    desc: "Direct admissions and scholarship processing for prestigious universities across the UK, USA, Canada, Australia, Europe, New Zealand, South Korea, Japan, Finland, Ireland, Cyprus, and Malaysia.",
  },
  {
    title: "Language Academy & Test Prep",
    hub: "Dedicated Training Wing",
    badge: "IELTS & Languages",
    icon: "🗣️",
    desc: "Targeted IELTS preparation (Band 7.5+), Spoken English Fluency, specialized Kids English & Phonics Academy (ages 5–14), and Japanese Language Courses (JLPT N5/N4).",
  },
  {
    title: "Financial Guidance & Free Bank Support",
    hub: "Visa Solvency Wing",
    badge: "Free Bank Support",
    icon: "🏦",
    desc: "Exclusive Free Bank Support for the first 20 students for European and Cyprus intakes, along with comprehensive proof-of-funds verification and scholarship assistance.",
  },
  {
    title: "Study Gap & Profile Optimization Wing",
    hub: "Special Solutions Desk",
    badge: "Gap & Low CGPA Accepted",
    icon: "⚡",
    desc: "Tailored strategies for students with prolonged study gaps (up to 10+ years), low CGPA (down to 2.5), and admission without IELTS using Medium of Instruction (MOI).",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & Vision"
        title="EDU GLOBAL (ইডিইউ গ্লোবাল)"
        subtitle="One stop Solution to Your Journey of Higher Education. We empower ambitious students across Bangladesh with direct university admissions, visa success guidance, financial support, and professional language training."
        image="/banner.png"
        imageAlt="EDU Global official banner"
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
                <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-xs font-bold text-emerald-800 mt-1">
                  Verified Higher Education Advisory & Academy
                </span>
              </div>
            </div>

            <dl className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Official Brand</dt>
                <dd className="font-bold text-slate-900 text-right">{company.name} ({company.legalName})</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Headquarters (Dhaka)</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[260px]">
                  Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi R/A, Dhaka - 1209 (Opposite Unimart)
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Core Advantage</dt>
                <dd className="font-bold text-emerald-600 text-right">
                  100% Admission & Free Bank Support (First 20 Students)
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Key Specializations</dt>
                <dd className="font-bold text-sky-700 text-right">
                  Study Gap Accepted • Low CGPA 2.5+ • Without IELTS Options
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Language Wing</dt>
                <dd className="font-bold text-amber-700 text-right">
                  IELTS • Spoken English • Kids English • Japanese
                </dd>
              </div>
              <div className="flex justify-between pt-1">
                <dt className="text-slate-500 font-medium">Hotlines & WhatsApp</dt>
                <dd className="font-bold text-slate-900 text-right">
                  {company.phones[0]} / {company.phones[1]}
                </dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl bg-emerald-50/80 p-4 border border-emerald-200">
              <p className="text-xs font-bold text-slate-900 mb-1">Brand Motto:</p>
              <p className="text-xs italic text-emerald-900 font-bold">"{company.slogan}"</p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Guiding Principles */}
          <div className="space-y-6">
            <span className="badge-clean badge-emerald">Our Vision & Mission</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Connecting Bangladeshi Talent with World-Class Higher Education & Global Careers
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              ইডিইউ গ্লোবাল (EDU Global) বাংলাদেশের উচ্চশিক্ষাপ্রত্যাশী শিক্ষার্থীদের জন্য একটি পূর্ণাঙ্গ ওয়ান-স্টপ সলিউশন। আমাদের অভিজ্ঞ শিক্ষা কাউন্সেলর এবং আন্তর্জাতিক অংশীদারদের সহায়তায় আমরা শিক্ষার্থীদের স্বপ্ন বাস্তবায়নে কাজ করে যাচ্ছি।
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              ধানমন্ডি সাতমসজিদ রোডের কেয়ারি প্লাজায় (৪র্থ তলা, লিফট-৩) অবস্থিত আমাদের সেন্ট্রাল অফিসে শিক্ষার্থীরা পাচ্ছেন বিশ্বমানের বিশ্ববিদ্যালয় নির্বাচন, শতভাগ এডমিশন গাইডেন্স, স্কলারশিপ প্রসেসিং, ব্যাংক সাপোর্ট সুবিধা এবং বিশেষজ্ঞ ট্রেইনারদের দ্বারা আইইএলটিএস ও স্পোকেন ইংলিশ ট্রেনিং।
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🎯 Our Mission</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  সততা, স্বচ্ছতা এবং নির্ভরযোগ্য তথ্যের মাধ্যমে শিক্ষার্থীদের বিশ্বমানের বিশ্ববিদ্যালয়ে ভর্তি নিশ্চিত করা, ভিসা প্রসেসে কার্যকর সহায়তা দেওয়া এবং সঠিক ইংরেজি দক্ষতার বিকাশ ঘটানো।
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🔭 Our Vision</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  বাংলাদেশের শীর্ষস্থানীয় এবং সবচেয়ে বিশ্বস্ত বৈদেশিক শিক্ষা পরামর্শদাতা ও ল্যাঙ্গুয়েজ একাডেমি হিসেবে প্রতিষ্ঠিত হয়ে প্রতিটি শিক্ষার্থীর আন্তর্জাতিক ক্যারিয়ারের পথ সুগম করা।
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-emerald-50/70 via-slate-50 to-blue-50/70 border border-slate-200 p-5">
              <h4 className="font-display text-sm font-bold text-emerald-800 mb-2">
                🌟 The Core EDU Global Pillars (Verified on Official Brand Asset):
              </h4>
              <BulletList
                items={[
                  "100% Admission Guidance: যুক্তরাজ্যের Canterbury Christ Church University সহ ইউরোপ ও বিশ্বের শীর্ষ বিশ্ববিদ্যালয়ে সরাসরি ভর্তি নিশ্চয়তা।",
                  "Free Bank Support Offer: সাইপ্রাস ও ইউরোপীয় ইউনিয়নের আবেদনের ক্ষেত্রে প্রথম ২০ জন শিক্ষার্থীর জন্য বিশেষ ব্যাংক সাপোর্ট।",
                  "Study Gap & Low CGPA Solutions: দীর্ঘদিন শিক্ষা বিরতি থাকা এবং CGPA 2.5+ নিয়েও উচ্চশিক্ষার বাস্তবমুখী সুযোগ।",
                  "Study Abroad Without IELTS: MOI (Medium of Instruction) ও ডুওলিঙ্গো গ্রহণের মাধ্যমে ইউরোপ ও এশিয়ার সেরা ক্যাম্পাসে ভর্তির সুযোগ।",
                  "Comprehensive Language Academy: প্রফেশনাল IELTS (7.5+), Spoken English Fluency, Kids English & Phonics, এবং জাপানিজ ভাষা কোর্স।",
                  "Prime Dhanmondi Location: সাতমসজিদ রোডের কেন্দ্রস্থলে (ইউনিমার্টের বিপরীতে কেয়ারি প্লাজা) সহজে যাতায়াতযোগ্য আরামদায়ক কাউন্সেলিং সেন্টার।",
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
              <span className="badge-clean badge-emerald text-xs">Dhaka Headquarters</span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
                Dhanmondi, Satmasjid Road, Dhaka
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                ধানমন্ডি ৮/এ সাতমসজিদ রোডের কেয়ারি প্লাজায় (৪র্থ তলা, লিফট-৩) অবস্থিত আমাদের সেন্টারে এসে সরাসরি সিনিয়র কনসালট্যান্টদের সাথে ফ্রি প্রোফাইল এসেসমেন্ট করান।
              </p>
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-emerald-400">📍 Dhanmondi Head Office</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">
                    Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi R/A, Dhaka - 1209 (Opposite Unimart, Old 15 Bus Stand)
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">
                    📞 {company.phones[0]} (WhatsApp) · {company.phones[1]}
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-0.5">
                    ✉️ {company.emails[0]} · {company.emails[1]}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video flex items-center justify-center p-6">
              <div className="text-center space-y-3">
                <BrandLogo size={72} />
                <h4 className="font-display font-black text-xl text-white">
                  EDU GLOBAL
                </h4>
                <p className="text-xs text-emerald-400 font-bold">
                  One stop Solution to Your Journey of Higher Education
                </p>
                <p className="text-xs text-slate-400">
                  Dhanmondi R/A, Dhaka - 1209, Bangladesh
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
          eyebrow="Specialized Academic & Study Abroad Wings"
          title="Our Operational Divisions"
          subtitle="Experienced educators and foreign education counselors dedicated to study abroad admissions, language coaching, and visa success."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advisoryWings.map((wing) => (
            <div
              key={wing.title}
              className="card-clean rounded-3xl p-6 flex flex-col justify-between border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-2xl">{wing.icon}</span>
                  <span className="badge-clean badge-emerald text-[0.68rem]">{wing.badge}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900 leading-snug">
                  {wing.title}
                </h3>
                <p className="text-[0.68rem] font-bold text-emerald-700 mt-0.5">📍 {wing.hub}</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">{wing.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello EDU Global, I want to consult your "${wing.title}" division.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-emerald-600 hover:underline flex items-center justify-center gap-1.5"
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
          eyebrow="Verified Counseling Center"
          title="Dhanmondi Head Office"
          subtitle="Explore our central counseling premises in Keari Plaza, Satmasjid Road, Dhanmondi, Dhaka."
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
