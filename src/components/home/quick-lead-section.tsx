import { useState } from "react";
import { company, destinations } from "@/lib/site-data";
import { IconWhatsApp, IconCheck, IconPhone } from "@/components/ui-blocks";
import { SlideIn, CountUp } from "@/components/motion-wrapper";

export function QuickLeadSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("United Kingdom");
  const [courseLevel, setCourseLevel] = useState("IELTS Preparation (Cash Back Offer)");
  const [studyGap, setStudyGap] = useState("No Gap / Fresh Applicant");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Hello Higher Study Counselors Bangladesh!\n\nI would like a Free Profile Assessment & Counseling Session:\n` +
        `• Name: ${name || "Applicant"}\n` +
        `• Phone: ${phone || "Not provided"}\n` +
        `• Email: ${email || "Not provided"}\n` +
        `• Desired Country: ${destination}\n` +
        `• Interested Program: ${courseLevel}\n` +
        `• Study Gap Status: ${studyGap}\n\n` +
        `Please guide me on admission eligibility, IELTS cashback offer, and family visa possibilities at your Uttara Dhaka office.`,
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
                — HIGHER STUDY COUNSELORS BANGLADESH (SINCE 2012) —
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-[#161b38] tracking-tight leading-tight">
                Start Your Journey <span className="text-amber-500">With Confidence</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg font-bangla">
                হাউজ ২৩, রোড ২, সেক্টর ৩, উত্তরা, ঢাকায় অবস্থিত আমাদের অফিসে সরাসরি এসে অভিজ্ঞ কাউন্সেলরদের সাথে কথা বলুন কিংবা হোয়াটসঅ্যাপে ফ্রি ফাইল অ্যাসেসমেন্ট করান।
              </p>
            </div>

            {/* Two Side-by-Side Stat Boxes with CountUp */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {/* Box 1: Experience */}
              <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-5 text-center transition-all hover-lift">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <span className="text-xl">🏛️</span>
                </div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#161b38]">
                  <CountUp value={14} suffix="+ Yrs" duration={2} />
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">Since 2012 Experience</div>
              </div>

              {/* Box 2: IELTS Cashback */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 text-center transition-all hover-lift">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <span className="text-xl">🎁</span>
                </div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-emerald-700">
                  <CountUp value={100} suffix="%" duration={2} />
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">IELTS Cash Back Offer</div>
              </div>
            </div>

            {/* Benefit Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>Opportunity To Move With Family (স্পাউস ও ডিপেন্ডেন্ট ভিসা সুবিধা)</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>Long Study Gap Accepted (চাকরির অভিজ্ঞতা ও পোর্টফোলিও দ্বারা ফাইল গ্রহণযোগ্য)</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>Low Tuition Fees University & Scholarship Guidance</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>IELTS Cash Back On Visa Success (ভিসা হলে সম্পূর্ণ IELTS ফি ফেরত)</span>
              </div>
            </div>

            {/* Contact Hotline Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700">
              <a
                href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                className="flex items-center gap-1.5 text-[#161b38] hover:text-amber-600 transition-colors"
              >
                <IconPhone className="w-4 h-4 text-amber-500" />
                <span>হটলাইন: {company.phones[0]}</span>
              </a>
              <span>•</span>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
                className="hover:text-amber-600 transition-colors"
              >
                <span>{company.phones[1]}</span>
              </a>
            </div>
          </SlideIn>

          {/* Right Column: Quick Lead Intake Form (Slides from Right) */}
          <SlideIn direction="right" distance={45}>
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="border-b border-slate-100 pb-4 mb-5">
                <div className="inline-block rounded-full bg-amber-100 text-amber-900 font-extrabold text-[0.7rem] px-3 py-1 mb-1.5">
                  100% Free Counseling
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#161b38]">
                  বুক করুন ফ্রি প্রোফাইল এসেসমেন্ট
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-bangla">
                  আপনার তথ্য দিন, আমাদের অভিজ্ঞ সিনিয়র কাউন্সেলর দ্রুত আপনার সাথে যোগাযোগ করবেন।
                </p>
              </div>

              {submitted ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-2xl">
                    ✓
                  </div>
                  <h4 className="font-display text-base font-bold text-emerald-900">
                    আবেদন সফলভাবে গ্রহণ করা হয়েছে!
                  </h4>
                  <p className="text-xs text-emerald-700 font-bangla">
                    হায়ার স্টাডি কাউন্সেলরস বাংলাদেশ-এর উত্তরা টিম অতি দ্রুত আপনার সাথে যোগাযোগ করবে।
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      আপনার নাম (Full Name) *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tanvir Ahmed"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        মোবাইল নম্বর (Phone / WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="017XXXXXXXX"
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        ইমেইল (Email Address)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        কাঙ্ক্ষিত দেশ (Target Destination)
                      </label>
                      <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 bg-white"
                      >
                        <option value="United Kingdom">United Kingdom (UK) 🇬🇧</option>
                        <option value="United States">United States (USA) 🇺🇸</option>
                        <option value="Australia">Australia 🇦🇺</option>
                        <option value="Hungary">Hungary (Europe Schengen) 🇭🇺</option>
                        <option value="Canada">Canada 🇨🇦</option>
                        <option value="Finland">Finland 🇫🇮</option>
                        <option value="Denmark">Denmark 🇩🇰</option>
                        <option value="Malaysia">Malaysia 🇲🇾</option>
                        <option value="Dubai">Dubai (UAE) 🇦🇪</option>
                        <option value="Malta">Malta (Schengen) 🇲🇹</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        আগ্রহের বিষয় (Course / Program)
                      </label>
                      <select
                        value={courseLevel}
                        onChange={(e) => setCourseLevel(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 bg-white"
                      >
                        <option value="IELTS Preparation (Cash Back Offer)">IELTS Preparation (Cash Back Offer)</option>
                        <option value="Study Abroad & Student Visa">Study Abroad & Student Visa</option>
                        <option value="Move With Family (Spouse Visa)">Move With Family (Spouse Visa)</option>
                        <option value="Spoken English Fluency">Spoken English Fluency</option>
                        <option value="Kids' English Academy">Kids' English Academy (Ages 5-14)</option>
                        <option value="English Grammar Foundation">English Grammar Foundation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      স্টাডি গ্যাপ (Study Gap Status)
                    </label>
                    <select
                      value={studyGap}
                      onChange={(e) => setStudyGap(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 bg-white"
                    >
                      <option value="No Gap / Fresh Applicant">No Gap (Fresh Passout)</option>
                      <option value="1 to 3 Years Gap (Accepted)">1 to 3 Years Gap (Accepted)</option>
                      <option value="4 to 6 Years Gap (Accepted with Job Proof)">4 to 6 Years Gap (Accepted with Job Proof)</option>
                      <option value="7+ Years Long Gap (Accepted)">7+ Years Long Gap (Accepted with Portfolio)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn-shimmer w-full rounded-xl bg-[#161b38] hover:bg-[#242c56] text-amber-400 py-3.5 text-xs sm:text-sm font-extrabold shadow-lg transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2 border border-amber-500/30"
                  >
                    <IconWhatsApp className="w-4 h-4 text-emerald-400" />
                    <span>Send Application via WhatsApp</span>
                  </button>

                  <p className="text-[0.68rem] text-slate-400 text-center">
                    🔒 আপনার তথ্য সম্পূর্ণ নিরাপদ। কোনো স্প্যাম বা অযাচিত কল করা হবে না।
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
