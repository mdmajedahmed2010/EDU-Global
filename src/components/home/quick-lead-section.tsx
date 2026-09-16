import { useState } from "react";
import { company, destinations } from "@/lib/site-data";
import { IconWhatsApp, IconCheck, IconPhone } from "@/components/ui-blocks";
import { SlideIn, CountUp } from "@/components/motion-wrapper";

export function QuickLeadSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Portugal & Europe");
  const [courseLevel, setCourseLevel] = useState("IELTS Preparation (Academic & General)");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Hello Kushtia IELTS Care!\n\nI would like a Free Profile Assessment & Course / Mock Test Information:\n` +
        `• Name: ${name || "Applicant"}\n` +
        `• Phone: ${phone || "Not provided"}\n` +
        `• Email: ${email || "Not provided"}\n` +
        `• Target Destination / Plan: ${destination}\n` +
        `• Interested Course: ${courseLevel}\n\n` +
        `Please guide me on class timings, 300 BDT mock test slots, and admission procedures at your Old Kataikhana More campus.`,
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
                — KUSHTIA IELTS CARE COUNSELING —
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Start Your Journey <span className="text-amber-500">With Confidence</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg font-bangla">
                ১৬৯/৪, মাহাতাব উদ্দিন রোড, পুরাতন কসাইখানা মোড়, কুষ্টিয়ায় আমাদের অত্যাধুনিক ক্যাম্পাসে এসে সরাসরি অভিজ্ঞ মেন্টর ও ইউরোপ স্টাডি ভিসা বিশেষজ্ঞদের সাথে কথা বলুন।
              </p>
            </div>

            {/* Two Side-by-Side Stat Boxes with CountUp */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {/* Box 1: Mock Test */}
              <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-5 text-center transition-all hover-lift">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <span className="text-xl">🎧</span>
                </div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
                  <CountUp value={300} suffix=" ৳" duration={2} />
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">পূর্ণাঙ্গ CBT মক টেস্ট</div>
              </div>

              {/* Box 2: Target Band */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 text-center transition-all hover-lift">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <span className="text-xl">🎯</span>
                </div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
                  <CountUp value={7.5} suffix="+" duration={2} />
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">IELTS Target Band</div>
              </div>
            </div>

            {/* Benefit Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>আধুনিক সাউন্ড ল্যাব ও ইন্ডিভিজুয়াল হেডসেট সুবিধা</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>মাত্র ৩০০ টাকায় কম্পিউটার-বেসড ও পেপার-বেসড রিয়েল এক্সাম মক টেস্ট</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>পর্তুগাল ও ইউরোপের বিভিন্ন স্বনামধন্য বিশ্ববিদ্যালয়ে স্টুডেন্ট ভিসা প্রসেসিং</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>স্পোকেন ইংলিশ ফ্লুয়েন্সি ও শিশুদের জন্য কিডস ইংলিশ একাডেমি</span>
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
                  Book Assessment or 300 BDT Mock Test
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-bangla">
                  আপনার তথ্য দিন। Kushtia IELTS Care-এর সিনিয়র ইন্সট্রাক্টর দ্রুত আপনার সাথে যোগাযোগ করবেন।
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
                    placeholder="e.g. Tanvir Ahmed"
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
                      placeholder="e.g. 01715-052885"
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
                    Target Study Destination
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-800 outline-none focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500/30 transition-all cursor-pointer"
                  >
                    <option value="Portugal & Europe">Portugal 🇵🇹 (European Schengen & English Taught)</option>
                    <option value="United Kingdom">United Kingdom 🇬🇧 (1-Year Masters & PSW)</option>
                    <option value="Czech Republic & Europe">Czech Republic 🇨🇿 (Affordable European Education)</option>
                    <option value="Germany">Germany 🇩🇪 (Public Universities & Engineering)</option>
                    <option value="Canada">Canada 🇨🇦 (Public Colleges & PGWP)</option>
                    <option value="USA">USA 🇺🇸 (Top Universities & STEM OPT)</option>
                    <option value="Australia">Australia 🇦🇺 (Work Rights & Global Degrees)</option>
                    <option value="Only IELTS & English Courses">Only IELTS & English Courses in Kushtia</option>
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
                    <option value="IELTS Preparation (Academic & General)">
                      IELTS Preparation (Academic & General — Target Band 7.5+)
                    </option>
                    <option value="Computer-Based IELTS Mock Test (300 BDT)">
                      Computer-Based IELTS Mock Test (Only 300 BDT with Individual Headset)
                    </option>
                    <option value="Paper-Based IELTS Mock Test">
                      Paper-Based IELTS Mock Test (Complete Cambridge Simulation)
                    </option>
                    <option value="Spoken English & Communication Fluency">
                      Spoken English & Communication Fluency
                    </option>
                    <option value="Kids English Academy (Ages 5-14)">
                      Kids English Academy (Ages 5–14 — Phonics & Speaking)
                    </option>
                    <option value="Study Abroad Consultancy (Portugal / UK / Europe)">
                      Study Abroad Consultancy (Portugal, UK & European Admissions)
                    </option>
                  </select>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#092552] hover:bg-[#0d3b82] text-amber-400 py-3.5 text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 border border-amber-500/30"
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
