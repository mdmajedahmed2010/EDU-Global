import { useState } from "react";
import { company, destinations } from "@/lib/site-data";
import { IconWhatsApp, IconCheck, IconPhone } from "@/components/ui-blocks";
import { SlideIn, CountUp } from "@/components/motion-wrapper";

export function QuickLeadSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Germany");
  const [courseLevel, setCourseLevel] = useState("German Language Course (A1–B2 Goethe)");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Hello AB STUDY HUB!\n\nI would like a Free Profile Assessment:\n` +
        `• Name: ${name || "Applicant"}\n` +
        `• Phone: ${phone || "Not provided"}\n` +
        `• Email: ${email || "Not provided"}\n` +
        `• Destination: ${destination}\n` +
        `• Course / Program: ${courseLevel}\n\n` +
        `Please guide me on admission requirements, language batch schedules, and visa procedures.`,
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
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600">
                — AB STUDY HUB COUNSELING —
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Start Your Journey <span className="text-red-600">With Confidence</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg">
                Get personalized evaluation from experienced mentors at Commerce View Complex (4th Flr),
                CDA Avenue, East Nasirabad, Chattogram. Transparent profile evaluation, German university shortlisting,
                and premier language coaching.
              </p>
            </div>

            {/* Two Side-by-Side Stat Boxes with CountUp */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {/* Box 1: German Universities */}
              <div className="rounded-2xl border border-red-100 bg-red-50/40 p-5 text-center transition-all hover-lift">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                  <span className="text-xl">🇩🇪</span>
                </div>
                <div className="font-serif-editorial text-3xl sm:text-4xl font-bold text-slate-900">
                  <CountUp value={300} suffix="+" duration={2} />
                </div>
                <div className="text-xs font-bold text-slate-600 mt-1">Tuition-Free Public Unis</div>
              </div>

              {/* Box 2: Private Batch Size */}
              <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-5 text-center transition-all hover-lift">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <span className="text-xl">👥</span>
                </div>
                <div className="font-serif-editorial text-3xl sm:text-4xl font-bold text-slate-900">
                  <CountUp value={12} suffix=" Max" duration={2} />
                </div>
                <div className="text-xs font-bold text-slate-600 mt-1">Students Per Batch</div>
              </div>
            </div>

            {/* Benefit Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>Free Initial Profile Evaluation & University Shortlisting</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>German A1–B2 Goethe-Institut Prep & Regular Sprechen Sessions</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>Danish Language Course & Denmark Student Visa Processing</span>
              </div>
            </div>

            {/* Hotlines */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
              <a
                href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 px-3.5 py-2 transition-colors"
              >
                <IconPhone className="w-3.5 h-3.5 text-red-600" />
                <span>{company.phones[0]} (WhatsApp)</span>
              </a>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 px-3.5 py-2 transition-colors"
              >
                <IconPhone className="w-3.5 h-3.5 text-red-600" />
                <span>{company.phones[1]}</span>
              </a>
            </div>
          </SlideIn>

          {/* Right Column: Lead Capture Form (Slides from Right) */}
          <SlideIn direction="right" distance={45}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                  Direct Counselor Connect
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Request Free Profile Assessment
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below. Our senior counselor in Chattogram will contact you
                  promptly.
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
                    placeholder="e.g. Tanzim Ahmed"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-500/30 transition-all"
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
                      placeholder="e.g. 01712-345678"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-500/30 transition-all"
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
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-500/30 transition-all"
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
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-800 outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-500/30 transition-all cursor-pointer"
                  >
                    <option value="Germany">Germany 🇩🇪 (Tuition-Free Public Universities)</option>
                    <option value="Denmark">Denmark 🇩🇰 (Higher Education & Career Pathway)</option>
                    <option value="Netherlands">Netherlands 🇳🇱 (Innovation & Zoekjaar)</option>
                    <option value="Spain">Spain 🇪🇸 (Schengen & Low Tuition)</option>
                    <option value="Greece">Greece 🇬🇷 (90% Visa Success Gateway)</option>
                    <option value="Malaysia">Malaysia 🇲🇾 (Branch Campuses & Fast Visa)</option>
                    <option value="Cyprus">Cyprus 🇨🇾 (European Education & High Visa Ratio)</option>
                    <option value="United Kingdom">United Kingdom 🇬🇧 (1-Yr Masters)</option>
                  </select>
                </div>

                {/* Course Level */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Interested Program / Course
                  </label>
                  <select
                    value={courseLevel}
                    onChange={(e) => setCourseLevel(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-800 outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-500/30 transition-all cursor-pointer"
                  >
                    <option value="German Language Course (A1–B2 Goethe)">
                      German Language Course (A1–B2 Goethe-Institut)
                    </option>
                    <option value="Danish Language Course">
                      Danish Language Course (Higher Education & Work)
                    </option>
                    <option value="IELTS Private Batch (Band 7.5+) ">
                      IELTS Private Batch (10–12 Students, Band 7.5+)
                    </option>
                    <option value="Spoken English Fluency">
                      Spoken English & Communication Fluency
                    </option>
                    <option value="Kids English (Ages 5-14)">
                      Kids English & Phonics Foundation (Ages 5–14)
                    </option>
                    <option value="German University Admissions & APS">
                      German Public University Admissions & APS Support
                    </option>
                    <option value="Postgraduate / Master's">
                      Postgraduate / Master&apos;s Degree Abroad
                    </option>
                    <option value="Undergraduate / Bachelor's">
                      Undergraduate / Bachelor&apos;s Degree Abroad
                    </option>
                  </select>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="btn-shimmer w-full rounded-xl bg-red-600 hover:bg-red-700 text-white py-3.5 text-xs sm:text-sm font-bold shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <IconWhatsApp className="w-4 h-4" />
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
