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
        title: "About Us | Higher Study Counselors Bangladesh — Since 2012 | Sector 3, Uttara, Dhaka & Glasgow, UK",
      },
      {
        name: "description",
        content:
          "Discover Higher Study Counselors Bangladesh (Since 2012) — Premier foreign education advisory and language academy. 100% IELTS Cash Back on Visa Success, Move with Family, Long Study Gap Accepted, Low Tuition Fees. Head Office: House 23, Road 2, Sector 3, Uttara, Dhaka. UK Office: Glasgow, UK. Hotlines: 01974843470, 01676997222.",
      },
      {
        property: "og:title",
        content: "About Higher Study Counselors Bangladesh — Since 2012",
      },
      {
        property: "og:description",
        content:
          "Official profile of Higher Study Counselors Bangladesh. 14+ years of counseling trust, dual offices in Dhaka and Glasgow UK, 100% IELTS Cash Back on Visa Success.",
      },
    ],
  }),
  component: About,
});

const advisoryWings = [
  {
    title: "Global Higher Education Wing",
    hub: "Uttara HQ & Global Desks",
    badge: "9+ Destinations",
    icon: "🎓",
    desc: "Direct admissions and scholarship processing for prestigious universities across the UK, USA, Australia, Hungary, Canada, Finland, Denmark, Malaysia, and Dubai.",
  },
  {
    title: "IELTS Academy & Cash Back",
    hub: "Language Training Wing",
    badge: "100% Cash Back",
    icon: "💰",
    desc: "Comprehensive Cambridge IELTS Academic & General preparation. Upon securing your student visa through HSC BD, receive 100% course fee cash back!",
  },
  {
    title: "Family & Spouse Visa Wing",
    hub: "Move With Family Desk",
    badge: "Family Migration",
    icon: "👨‍👩‍👧‍👦",
    desc: "Specialized advisory for students moving abroad with spouse and children, including dependent visa documentation, maintenance funds, and family accommodation.",
  },
  {
    title: "UK On-Ground & Glasgow Office",
    hub: "3A Westburn Road, Glasgow",
    badge: "UK Direct Support",
    icon: "🇬🇧",
    desc: "In-country UK support providing post-arrival guidance, airport reception, accommodation search, and legal part-time job hunting advisory.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & 14+ Years of Trust"
        title="HIGHER STUDY COUNSELORS BANGLADESH"
        subtitle="Established in 2012, HSC BD has guided thousands of ambitious students into accredited global universities across the UK, USA, Australia, Canada, and Europe with unmatched integrity."
        image="/banner.jpg"
        imageAlt="Higher Study Counselors Bangladesh official banner"
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
                  Since 2012 · 14+ Years Experience
                </span>
              </div>
            </div>

            <dl className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Official Organization</dt>
                <dd className="font-bold text-slate-900 text-right">{company.legalName}</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Head Office (Dhaka)</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[240px]">
                  House 23, Road 2, 1st Floor, Sector 3, Uttara, Dhaka - 1230
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">UK International Office</dt>
                <dd className="font-bold text-sky-800 text-right">
                  3A Westburn Road, Glasgow, United Kingdom
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Signature Advantage</dt>
                <dd className="font-bold text-amber-600 text-right">
                  100% IELTS Cash Back On Visa Success
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Key Specializations</dt>
                <dd className="font-bold text-emerald-700 text-right">
                  Move With Family • Study Gap Accepted • Low Tuition
                </dd>
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
              <p className="text-xs italic text-amber-900 font-bold">"{company.slogan}"</p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Guiding Principles */}
          <div className="space-y-6">
            <span className="badge-clean badge-red">Our Vision & Mission</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Connecting Bangladeshi Talent with World-Class Higher Education Since 2012
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              হায়ার স্টাডি কাউন্সেলরস বাংলাদেশ (Higher Study Counselors Bangladesh - HSC BD) ২০১২ সাল থেকে উচ্চশিক্ষায় আগ্রহী শিক্ষার্থীদের জন্য একটি বিশ্বস্ত প্ল্যাটফর্ম হিসেবে কাজ করে আসছে। দীর্ঘ ১৪ বছরের বাস্তব অভিজ্ঞতা নিয়ে আমরা প্রতিটি শিক্ষার্থীর স্বপ্নকে বাস্তবে রূপ দিতে অঙ্গীকারবদ্ধ।
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              উত্তরা সেক্টর ৩-এ প্রধান কার্যালয় এবং যুক্তরাজ্যের গ্লাসগোতে আন্তর্জাতিক কার্যালয়ের মাধ্যমে আমরা অফার লেটার, ভিসা প্রসেসিং, ব্যাংক সলভেন্সি, ফ্যামিলি মুভমেন্ট গাইডেন্স এবং আইইএলটিএস কোর্সের সম্পূর্ণ ফি ক্যাশব্যাক দেওয়ার এক অনন্য সুযোগ তৈরি করেছি।
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🎯 Our Mission</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  সততা ও স্বচ্ছতার সাথে বিশ্বমানের বিশ্ববিদ্যালয়গুলোতে ভর্তি, সাশ্রয়ী টিউশন ফি সুবিধা, এবং সফল ভিসার পর আইইএলটিএস ফি ১০০% ফেরত দিয়ে শিক্ষার্থীদের আত্মবিশ্বাস বৃদ্ধি করা।
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🔭 Our Vision</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  বাংলাদেশের শীর্ষস্থানীয় ও সবচেয়ে নির্ভরযোগ্য বৈদেশিক শিক্ষা পরামর্শদাতা প্রতিষ্ঠান হিসেবে শিক্ষার্থীদের বৈশ্বিক ক্যারিয়ার ও জীবনমানের উত্তরণ ঘটানো।
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-amber-50/60 via-slate-50 to-blue-50/60 border border-slate-200 p-5">
              <h4 className="font-display text-sm font-bold text-amber-700 mb-2">
                🌟 The 6 HSC BD Core Commitments (Verified on Official Banner):
              </h4>
              <BulletList
                items={[
                  "Opportunity To Move With Family: স্পাউস ও সন্তানদের নিয়ে বিদেশে উচ্চশিক্ষার পূর্ণাঙ্গ ভিসা সাপোর্ট।",
                  "Long Study Gap Accepted: দীর্ঘ স্টাডি গ্যাপ বা শিক্ষাবিরতি থাকা সত্ত্বেও বিশ্ববিদ্যালয় ভর্তির নিশ্চয়তা।",
                  "Part Time Job In UK & Abroad: পড়াশোনার পাশাপাশি বৈধ পার্ট-টাইম কাজ ও কাজের সুযোগের গাইডলাইন।",
                  "Low Tuition Fees University: সাশ্রয়ী টিউশন ফি ও কিস্তিতে ফি প্রদানের সুযোগ সম্বলিত বিশ্ববিদ্যালয়।",
                  "Financial Advice & Guidance: ব্যাংক ব্যালেন্স, স্পন্সরশিপ ও অর্থনৈতিক কাগজপত্রের সঠিক মূল্যায়ন।",
                  "IELTS Cash Back On Visa Success: আমাদের মাধ্যমে ভিসা সফল হলেই আইইএলটিএস কোর্স ফি ১০০% ফেরত।",
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
              <span className="badge-clean badge-red text-xs">Dhaka HQ & Glasgow UK Presence</span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
                Uttara, Dhaka & Glasgow, United Kingdom
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                উত্তরা সেক্টর ৩ প্রধান কার্যালয়ে সামনাসামনি এসে সিনিয়র কনসালট্যান্টদের সাথে ফাইল এসেসমেন্ট করান অথবা গ্লাসগো অফিসের মাধ্যমে যুক্তরাজ্যে সরাসরি পরামর্শ গ্রহণ করুন।
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-amber-400">📍 Dhaka Head Office</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">
                    House 23, Road 2, 1st Floor, Sector 3, Uttara, Dhaka - 1230
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">
                    📞 {company.phones[0]} (WhatsApp) · {company.phones[1]}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-sky-400">🇬🇧 UK International Office</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">
                    3A Westburn Road, Glasgow, United Kingdom
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">
                    🌐 Website: www.hscbd.co.uk
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video flex items-center justify-center p-6">
              <div className="text-center space-y-3">
                <BrandLogo size={72} />
                <h4 className="font-display font-black text-xl text-white">
                  Higher Study Counselors Bangladesh
                </h4>
                <p className="text-xs text-amber-400 font-bold">
                  Since 2012 · 14+ Years of Trust & Excellence
                </p>
                <p className="text-xs text-slate-400">
                  Sector 3, Uttara, Dhaka & Glasgow, UK
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
          subtitle="Experienced educators and foreign education counselors dedicated to study abroad admissions, IELTS preparation, and family visa processing."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advisoryWings.map((wing) => (
            <div
              key={wing.title}
              className="card-clean rounded-3xl p-6 flex flex-col justify-between border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all bg-white"
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
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Higher Study Counselors Bangladesh, I want to consult your "${wing.title}" division.`)}`}
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
          eyebrow="Verified Global Centers"
          title="Head Office & UK International Presence"
          subtitle="Explore our central counseling premises in Sector 3, Uttara, Dhaka and our UK operations in Glasgow."
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
