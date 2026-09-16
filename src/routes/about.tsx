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
      { title: "About Us | Kushtia IELTS Care — a great place to learn | Old Kataikhana More, Kushtia" },
      {
        name: "description",
        content:
          "Discover Kushtia IELTS Care — premier IELTS preparation academy, 300 BDT computer-based mock tests, Spoken English, Kids English, and European study abroad consultancy in Kushtia. 169/4, Mahatab Uddin Road, Old Kataikhana More, Kushtia. Hotlines: 01715-052885 / 01805-954731.",
      },
      { property: "og:title", content: "About Kushtia IELTS Care | a great place to learn" },
      {
        property: "og:description",
        content:
          "Official profile of Kushtia IELTS Care. Modern audio lab with individual headsets, Cambridge curriculum, 300 BDT mock tests, and Portugal/European visa consultancy.",
      },
    ],
  }),
  component: About,
});

const advisoryWings = [
  {
    title: "IELTS Preparation Academy",
    hub: "Kushtia Campus Audio Lab",
    badge: "Flagship Wing",
    icon: "🎯",
    desc: "Comprehensive Academic & General IELTS preparation with Cambridge syllabus, individual speaking mock sessions, and weekly progress evaluations.",
  },
  {
    title: "Computer-Based Mock Test Center",
    hub: "Modern CBT Lab",
    badge: "Real Exam Experience",
    icon: "🎧",
    desc: "Real-time computer-based and paper-based IELTS mock tests at only 300 BDT with individual headsets, instant feedback, and detailed band scoring.",
  },
  {
    title: "Spoken & Kids English Academy",
    hub: "Fluency & Young Learners Lab",
    badge: "Communication Wing",
    icon: "🗣️",
    desc: "Interactive speaking fluency, interview grooming, and child-friendly phonics and vocabulary development for kids and young learners.",
  },
  {
    title: "European Study Abroad Consultancy",
    hub: "Global Admissions Wing",
    badge: "Portugal & Europe Track",
    icon: "🇵🇹",
    desc: "Affordable European education pathways, specializing in Portugal, Czech Republic, UK, and German university admissions and visa documentation.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & Excellence in English"
        title="YOUR TRUSTED PARTNER IN IELTS SUCCESS!"
        subtitle="Kushtia IELTS Care is Kushtia's premier English language academy and study abroad consultancy, empowering students with modern audio facilities and authentic pathways."
        image="/banner.png"
        imageAlt="Kushtia IELTS Care classroom, audio lab, and banner"
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
                  a great place to learn
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
                <dd className="font-bold text-amber-600 text-right">
                  Kushtia IELTS Care (a great place to learn)
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Campus Location</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[240px]">
                  {company.address.full}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Unique Facility</dt>
                <dd className="font-bold text-blue-900 text-right">
                  Modern Audio Lab & Individual Headsets
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Flagship Offerings</dt>
                <dd className="font-bold text-amber-600 text-right">IELTS • 300 BDT Mock Test • Spoken • Portugal</dd>
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
              Empowering Aspirations Through International English Standards & Care
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              কুষ্টিয়া আইইএলটিএস কেয়ার (Kushtia IELTS Care) পুরাতন কসাইখানা মোড়ে শিক্ষার্থীদের জন্য একটি নিবেদিত ইংরেজি ভাষা ও উচ্চশিক্ষা সহায়তা কেন্দ্র হিসেবে প্রতিষ্ঠিত। আমাদের লক্ষ্য কুষ্টিয়ার প্রতিটি শিক্ষার্থীর জন্য আন্তর্জাতিক মানের ভাষা শিক্ষা ও ইউরোপে উচ্চশিক্ষার পথ সহজ করা।
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              আইইএলটিএস আসল পরীক্ষার ভীতি দূর করতে আমরা প্রতিষ্ঠা করেছি আধুনিক সাউন্ড ল্যাব ও ইন্ডিভিজুয়াল হেডসেট সেটআপ। মাত্র ৩০০ টাকায় রিয়েল এক্সাম এনভায়রনমেন্টে কম্পিউটার ও পেপার ভিত্তিক মক টেস্ট দিয়ে শিক্ষার্থীরা তাদের প্রকৃত দুর্বলতা কাটিয়ে সর্বোচ্চ ব্যান্ড স্কোর অর্জন করতে সক্ষম হচ্ছে।
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🎯 Our Mission</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  কেমব্রিজ সিলেবাসে সঠিক IELTS প্রস্তুতি, সাশ্রয়ী মক টেস্ট এবং ইউরোপীয় সেনজেন দেশগুলোতে সৎ ও স্বচ্ছ ভিসা প্রসেসিং সহায়তা নিশ্চিত করা।
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🔭 Our Vision</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  কুষ্টিয়া অঞ্চলের সবচেয়ে নির্ভরযোগ্য, আধুনিক ও শিক্ষার্থী-বান্ধব ল্যাঙ্গুয়েজ একাডেমি ও ইউরোপ স্টাডি কনসালটেন্সি হিসেবে প্রতিটি স্বপ্নকে বাস্তবে রূপ দেওয়া।
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-amber-50/60 via-slate-50 to-blue-50/60 border border-slate-200 p-5">
              <h4 className="font-display text-sm font-bold text-amber-700 mb-2">
                🌟 The 4 Kushtia IELTS Care Pillars:
              </h4>
              <BulletList
                items={[
                  "Modern Sound Lab & Individual Headsets: ক্রিস্টাল ক্লিয়ার অডিও ল্যাব ও রিয়েল এক্সাম এনভায়রনমেন্ট।",
                  "300 BDT Real Exam Mock Tests: পূর্ণাঙ্গ কম্পিউটার-বেসড ও পেপার-বেসড মক টেস্ট এবং বিস্তারিত স্কোর কার্ড।",
                  "Cambridge Aligned Syllabus & Expert Care: অভিজ্ঞ শিক্ষক দ্বারা ছোট ব্যাচে ওয়ান-টু-ওয়ান স্পিকিং ও রাইটিং মূল্যায়ন।",
                  "Portugal & European Study Abroad: সেনজেনভুক্ত পর্তুগাল, চেক রিপাবলিক, ইউকে ও জার্মানিতে সাশ্রয়ী উচ্চশিক্ষা ও সঠিক ভিসা গাইডলাইন।",
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
              <span className="badge-clean badge-red text-xs">Old Kataikhana More Campus</span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
                169/4, Mahatab Uddin Road, Kushtia
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                আমাদের একাডেমি ১৬৯/৪, মাহাতাব উদ্দিন রোড, পুরাতন কসাইখানা মোড়, কুষ্টিয়ায় অবস্থিত। শিক্ষার্থী ও অভিভাবকদের আন্তরিকভাবে আমন্ত্রণ জানাচ্ছি ফ্রি অ্যাসেসমেন্ট, ক্লাস পরিদর্শন এবং কনসালটেন্সির জন্য।
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-amber-400">📍 Kushtia Campus</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">
                    {company.address.full}
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">
                    📞 {company.phones[0]} (Call / WhatsApp) / {company.phones[1]}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-blue-400">🎧 Modern Audio Lab</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">
                    Individual Headset Audio Lab Setup
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">
                    🌐 300 BDT Full CBT Mock Test Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video flex items-center justify-center p-6">
              <div className="text-center space-y-3">
                <BrandLogo size={72} />
                <h4 className="font-display font-black text-xl text-white">
                  Kushtia IELTS Care
                </h4>
                <p className="text-xs text-amber-400 font-bold">
                  Your Trusted Partner in IELTS Success!
                </p>
                <p className="text-xs text-slate-400">
                  169/4, Mahatab Uddin Road, Old Kataikhana More, Kushtia
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
          subtitle="Experienced educators and counselors dedicated to IELTS preparation, 300 BDT mock tests, and European visa processing."
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
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Kushtia IELTS Care, I want to consult your "${wing.title}" division.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-amber-600 hover:underline flex items-center justify-center gap-1.5"
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
          title="Kushtia Campus & Modern Audio Lab"
          subtitle="Explore our modern academy at Old Kataikhana More, Kushtia, with dedicated listening lab facilities."
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
