import { useState } from "react";
import { company } from "@/lib/site-data";
import { IconWhatsApp, IconCheck, IconPhone } from "@/components/ui-blocks";
import { SlideIn, CountUp } from "@/components/motion-wrapper";
import { motion } from "framer-motion";

export function QuickLeadSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("United Kingdom");
  const [courseLevel, setCourseLevel] = useState("IELTS Preparation (Band 7.5+)");
  const [studyGap, setStudyGap] = useState("No Gap / Fresh Applicant");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Hello EDU Global!\n\nI would like a Free Profile Assessment & Counseling Session:\n` +
        `• Name: ${name || "Applicant"}\n` +
        `• Phone: ${phone || "Not provided"}\n` +
        `• Email: ${email || "Not provided"}\n` +
        `• Desired Country: ${destination}\n` +
        `• Interested Program: ${courseLevel}\n` +
        `• Study Gap Status: ${studyGap}\n\n` +
        `Please guide me on university admission eligibility, Free Bank Support, and IELTS/English training at your Dhanmondi Dhaka head office.`,
    );

    const waNumber = company.whatsapp.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="relative py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Left Column: Trust & Highlights */}
          <SlideIn direction="left" distance={45} className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#0047ba] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200 inline-block">
                — EDU GLOBAL (ইডিইউ গ্লোবাল) —
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0a1931] tracking-tight leading-tight">
                Start Your Higher Education Journey <br />
                <span className="text-[#0047ba]">With Verified Confidence</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg">
                Visit our Dhanmondi Headquarters at Keari Plaza, Satmasjid Road for physical counseling, or submit your profile below for an instant WhatsApp assessment with our senior counselors.
              </p>
              <p className="text-xs text-slate-500 font-bangla">
                কেয়ারি প্লাজা (৪র্থ তলা, লিফট-৩), রোড ৮/এ, ধানমন্ডি, ঢাকায় সরাসরি এসে অভিজ্ঞ কাউন্সেলরদের সাথে কথা বলুন।
              </p>
            </div>

            {/* Two Side-by-Side Stat Boxes with CountUp */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {/* Box 1: 100% Admission Guidance */}
              <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 text-center transition-all hover-lift">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <span className="text-xl">🎓</span>
                </div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#0047ba]">
                  <CountUp value={100} suffix="%" duration={2} />
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">Admission Guidance</div>
              </div>

              {/* Box 2: Free Bank Support */}
              <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-5 text-center transition-all hover-lift">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <span className="text-xl">🏦</span>
                </div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-amber-800">
                  <CountUp value={20} suffix=" Seats" duration={2} />
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">Free Bank Support</div>
              </div>
            </div>

            {/* Benefit Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>100% Admission Guidance (Canterbury Christ Church UK & Global Partners)</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>Free Bank Solvency Support (Exclusive Offer for First 20 Applicants)</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>Long Study Gap & Low CGPA Down to 2.5+ Accepted with Legal Portfolios</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>In-House Language Academy (IELTS Band 7.5+, Spoken English, Kids English)</span>
              </div>
            </div>

            {/* Contact Hotline Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700">
              <a
                href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                className="flex items-center gap-1.5 text-[#0a1931] hover:text-[#0047ba] transition-colors"
              >
                <IconPhone className="w-4 h-4 text-[#0047ba]" />
                <span>Hotline: {company.phones[0]}</span>
              </a>
              <span>•</span>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
                className="hover:text-[#0047ba] transition-colors"
              >
                <span>{company.phones[1]}</span>
              </a>
              <span className="hidden sm:inline">•</span>
              <span className="text-slate-500 text-[0.72rem]">Dhanmondi, Dhaka</span>
            </div>
          </SlideIn>

          {/* Right Column: Quick Lead Intake Form */}
          <SlideIn direction="right" distance={45}>
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="border-b border-slate-100 pb-4 mb-5">
                <div className="inline-block rounded-full bg-blue-100 text-blue-900 font-extrabold text-[0.7rem] px-3 py-1 mb-1.5">
                  100% Free Initial Assessment
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-black text-[#0a1931]">
                  Book Free Profile Assessment
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Submit your details for personalized eligibility check and direct WhatsApp guidance from EDU Global.
                </p>
                <p className="text-[0.72rem] text-slate-400 font-bangla mt-0.5">
                  বুক করুন ফ্রি প্রোফাইল এসেসমেন্ট ও সিনিয়র কাউন্সেলরের সরাসরি পরামর্শ।
                </p>
              </div>

              {submitted ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-2xl">
                    ✓
                  </div>
                  <h4 className="font-display text-base font-bold text-emerald-900">
                    Assessment Request Submitted Successfully!
                  </h4>
                  <p className="text-xs text-emerald-700">
                    EDU Global (Dhanmondi, Dhaka) team is connecting with you on WhatsApp with verified admission guidance.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name (আপনার নাম) *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tanvir Ahmed"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / WhatsApp (মোবাইল নম্বর) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="017XXXXXXXX"
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address (ইমেইল)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Target Destination (কাঙ্ক্ষিত দেশ)
                      </label>
                      <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 bg-white"
                      >
                        <option value="United Kingdom">United Kingdom (UK) 🇬🇧</option>
                        <option value="Cyprus">Cyprus (Free Bank Support) 🇨🇾</option>
                        <option value="United States">United States (USA) 🇺🇸</option>
                        <option value="Canada">Canada 🇨🇦</option>
                        <option value="Australia">Australia 🇦🇺</option>
                        <option value="Italy">Italy (100% DSU Scholarship) 🇮🇹</option>
                        <option value="Finland">Finland (Nordic Excellence) 🇫🇮</option>
                        <option value="Ireland">Ireland 🇮🇪</option>
                        <option value="Japan">Japan (Work & Study) 🇯🇵</option>
                        <option value="South Korea">South Korea (GKS Scholarship) 🇰🇷</option>
                        <option value="Malaysia">Malaysia 🇲🇾</option>
                        <option value="New Zealand">New Zealand 🇳🇿</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Interested Program (কোর্স / বিষয়)
                      </label>
                      <select
                        value={courseLevel}
                        onChange={(e) => setCourseLevel(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 bg-white"
                      >
                        <option value="IELTS Preparation (Band 7.5+)">IELTS Preparation (Target Band 7.5+)</option>
                        <option value="Study Abroad & Student Visa">Study Abroad & Student Visa Guidance</option>
                        <option value="Free Bank Support (Cyprus & Europe)">Free Bank Support (First 20 Offer)</option>
                        <option value="Spoken English Fluency">Spoken English Fluency</option>
                        <option value="Kids' English Academy">Kids' English Academy (Ages 5-14)</option>
                        <option value="Japanese Language Course">Japanese Language Course (JLPT)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Study Gap Status (স্টাডি গ্যাপ)
                    </label>
                    <select
                      value={studyGap}
                      onChange={(e) => setStudyGap(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 bg-white"
                    >
                      <option value="No Gap / Fresh Applicant">No Gap (Fresh Graduate / HSC)</option>
                      <option value="1 to 3 Years Gap (Accepted)">1 to 3 Years Gap (Easily Accepted)</option>
                      <option value="4 to 6 Years Gap (Accepted with Job Proof)">4 to 6 Years Gap (Accepted with Experience Proof)</option>
                      <option value="7+ Years Long Gap (Accepted)">7+ Years Long Gap (Accepted with Professional Portfolio)</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.98 }}
                    className="btn-shimmer w-full rounded-xl bg-[#0047ba] hover:bg-blue-700 text-white py-3.5 text-xs sm:text-sm font-extrabold shadow-lg shadow-blue-600/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <IconWhatsApp className="w-4 h-4 text-emerald-300" />
                    <span>Send Application via WhatsApp</span>
                  </motion.button>

                  <p className="text-[0.68rem] text-slate-400 text-center">
                    🔒 Your information is 100% private and protected. Zero spam calls or unwanted marketing.
                  </p>
                </form>
              )}
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
