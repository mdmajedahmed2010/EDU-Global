import { useState } from "react";
import { company, destinations } from "@/lib/site-data";
import { IconWhatsApp, IconCheck, IconPhone } from "@/components/ui-blocks";
import { SlideIn, CountUp } from "@/components/motion-wrapper";

export function QuickLeadSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Japan");
  const [courseLevel, setCourseLevel] = useState("Japanese Language Course (N5 & N4 Levels)");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Hello AcademiaZ Rajshahi!\n\nI would like a Free Profile Assessment & Course Information:\n` +
        `• Name: ${name || "Applicant"}\n` +
        `• Phone: ${phone || "Not provided"}\n` +
        `• Email: ${email || "Not provided"}\n` +
        `• Target Destination: ${destination}\n` +
        `• Course / Program: ${courseLevel}\n\n` +
        `Please guide me on admission requirements, new batch schedules, and visa procedures at your Kadirganj campus.`,
    );

    const waNumber = company.whatsapp.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="relative py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Left Column: Trust & Highlights (Slides from Left) */}
          <SlideIn direction="left" distance={45} className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">
                — ACADEMIAZ RAJSHAHI COUNSELING —
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Start Your Journey <span className="text-amber-500">With Confidence</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg font-bangla">
                স্বপ্ন নয়, পরিকল্পনা হোক সঠিক – আমরা আছি আপনার জাপান যাত্রার বিশ্বস্ত সঙ্গী ! কাদিরগঞ্জ, গ্রেটার রোড (মা ফটোস্ট্যাট এর পাশের গলি), রাজশাহীতে আমাদের অফিসে এসে সরাসরি অভিজ্ঞ ট্রেইনার ও ভিসা কনসালট্যান্টদের সাথে কথা বলুন।
              </p>
            </div>

            {/* Two Side-by-Side Stat Boxes with CountUp */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {/* Box 1: Japan Managed */}
              <div className="rounded-2xl border border-red-100 bg-red-50/50 p-5 text-center transition-all hover-lift">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                  <span className="text-xl">🇯🇵</span>
                </div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
                  <CountUp value={100} suffix="%" duration={2} />
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">জাপান থেকে পরিচালিত</div>
              </div>

              {/* Box 2: Japanese Levels */}
              <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-5 text-center transition-all hover-lift">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <span className="text-xl">⛩️</span>
                </div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
                  <CountUp value={2} suffix=" Levels" duration={2} />
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">Japanese N5 & N4</div>
              </div>
            </div>

            {/* Benefit Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>১০০% ফ্রি প্রাথমিক প্রোফাইল মূল্যায়ন ও ভিসা গাইডলাইন</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>JLPT, JFT-Basic ও NAT-TEST প্রস্তুতিতে পূর্ণাঙ্গ বই ও লিসেনিং ম্যাটেরিয়ালস</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>জাপানে স্টুডেন্ট ভিসা, TITP ও SSW ক্যারিয়ারের নির্ভুল COE প্রসেসিং</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>IELTS (Band 7.5+), Spoken English এবং কিডস ইংলিশ একাডেমি</span>
              </div>
            </div>

            {/* Hotlines */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
              <a
                href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 px-3.5 py-2 transition-colors"
              >
                <IconPhone className="w-3.5 h-3.5 text-amber-600" />
                <span>{company.phones[0]} (Call / WhatsApp)</span>
              </a>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 px-3.5 py-2 transition-colors"
              >
                <IconPhone className="w-3.5 h-3.5 text-amber-600" />
                <span>{company.phones[1]}</span>
              </a>
            </div>
          </SlideIn>

          {/* Right Column: Lead Capture Form (Slides from Right) */}
          <SlideIn direction="right" distance={45}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600">
                  Direct Counselor Connect
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950 mt-1">
                  Request Free Profile Assessment
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-bangla">
                  আপনার তথ্য দিন। AcademiaZ রাজশাহী সেন্টারের সিনিয়র কাউন্সেলর দ্রুত আপনার সাথে যোগাযোগ করবেন।
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Arifur Rahman"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500/30 transition-all"
                  />
                </div>

                {/* Contact: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 01518-951062"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. student@gmail.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500/30 transition-all"
                    />
                  </div>
                </div>

                {/* Target Destination */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Target Study / Career Destination
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-800 outline-none focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500/30 transition-all cursor-pointer"
                  >
                    <option value="Japan (Study in Japan)">Japan 🇯🇵 (Study in Japan - Language School & University)</option>
                    <option value="Japan (SSW & TITP Work Visa)">Japan 🇯🇵 (SSW & TITP Work Visa Program)</option>
                    <option value="Germany">Germany 🇩🇪 (Tuition-Free Universities & Ausbildung)</option>
                    <option value="United Kingdom">United Kingdom 🇬🇧 (1-Year Masters & PSW)</option>
                    <option value="Canada">Canada 🇨🇦 (Public DLIs & PGWP)</option>
                    <option value="USA">USA 🇺🇸 (Top Universities & STEM OPT)</option>
                    <option value="Australia">Australia 🇦🇺 (Work Rights & Degrees)</option>
                    <option value="Malaysia">Malaysia 🇲🇾 (World-Class Branch Campuses)</option>
                  </select>
                </div>

                {/* Course Level */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Interested Course / Program
                  </label>
                  <select
                    value={courseLevel}
                    onChange={(e) => setCourseLevel(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-800 outline-none focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500/30 transition-all cursor-pointer"
                  >
                    <option value="Japanese Language Course (N5 & N4 Levels)">
                      Japanese Language Course (N5 & N4 Levels — Basic to Advanced)
                    </option>
                    <option value="Student Visa Guidance (Study in Japan)">
                      Student Visa Guidance (Study in Japan — Language Schools & Unis)
                    </option>
                    <option value="TITP & SSW Preparation (Work in Japan)">
                      TITP & SSW Preparation (Work in Japan — JFT & Trade Test)
                    </option>
                    <option value="IELTS Preparation (Target Band 7.5+)">
                      IELTS Preparation (Academic & General — Target Band 7.5+)
                    </option>
                    <option value="Spoken English & Fluency">
                      Spoken English & Communication Fluency
                    </option>
                    <option value="Kids English & Junior Fluency (Ages 5-14)">
                      Kids English & Junior Fluency (Ages 5–14)
                    </option>
                    <option value="Documentation & Application Support">
                      Documentation & Application Support (Translations & SOP)
                    </option>
                  </select>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#0a1931] hover:bg-[#0f2c59] text-amber-400 py-3.5 text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 border border-amber-500/30"
                >
                  <IconWhatsApp className="w-4 h-4 text-emerald-400" />
                  <span>Submit & Connect on WhatsApp</span>
                </button>

                {submitted && (
                  <p className="text-center text-xs font-bold text-emerald-600 pt-1">
                    ✓ Connecting to WhatsApp... Opening chat window.
                  </p>
                )}
              </form>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
