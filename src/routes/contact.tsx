import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Kushtia IELTS Care — Old Kataikhana More, Kushtia" },
      {
        name: "description",
        content:
          "Visit Kushtia IELTS Care at 169/4, Mahatab Uddin Road, Old Kataikhana More, Kushtia. Call 01715-052885 (Call / WhatsApp) or 01805-954731 for IELTS preparation, 300 BDT computer mock tests, Spoken English, and European study abroad consultancy.",
      },
      { property: "og:title", content: "Contact Kushtia IELTS Care | a great place to learn" },
      {
        property: "og:description",
        content:
          "Kushtia IELTS Care campus at Old Kataikhana More, Kushtia. Modern audio lab with individual headsets, Cambridge curriculum, 300 BDT mock tests, and Portugal visa consultancy.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    program: "IELTS Preparation (Academic & General)",
    destination: "Portugal & Europe (Featured European Track)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Kushtia IELTS Care!\n\nI want to book a consultation / mock test from your website contact page:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service/Course: ${formData.program}\n• Target Destination/Goal: ${formData.destination}\n• Query: ${formData.notes || "N/A"}`;
    window.open(
      `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Direct Campus Desk"
        title="Connect With Kushtia IELTS Care"
        subtitle="১৬৯/৪, মাহাতাব উদ্দিন রোড, পুরাতন কসাইখানা মোড়, কুষ্টিয়ায় আমাদের আধুনিক ক্যাম্পাসে সরাসরি আসুন। ফ্রি প্রোফাইল মূল্যায়ন, লেভেল এসেসমেন্ট টেস্ট এবং মাত্র ৩০০ টাকায় কম্পিউটার-ভিত্তিক মক টেস্ট।"
        image="/banner.png"
        imageAlt="Kushtia IELTS Care campus at Old Kataikhana More, Kushtia"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </PageHero>

      {/* Office & Hotline Cards Section */}
      <section className="section-shell py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Kushtia Campus Card */}
          <div className="card-clean rounded-3xl p-8 border border-amber-200/90 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-red text-xs">
                  <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping inline-block mr-1" />
                  Kushtia Campus
                </span>
                <span className="text-xs font-bold text-slate-500">IELTS & Visa Hub</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                {company.offices.headquarters.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                📍 {company.offices.headquarters.address}
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                <p>
                  <strong>📞 Primary Call / WhatsApp:</strong> {company.phones[0]}
                </p>
                <p>
                  <strong>📞 Alternate Hotline:</strong> {company.phones[1]}
                </p>
                <p>
                  <strong>🕒 Working Hours:</strong> {company.offices.headquarters.hours}
                </p>
                <p>
                  <strong>✉️ Email:</strong> {company.email}
                </p>
                <p>
                  <strong>🌟 Specialty:</strong>{" "}
                  <span className="text-amber-600 font-bold">Cambridge IELTS, 300 BDT Mock Tests & Portugal Track</span>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Kushtia IELTS Care, I want to book a free consultation at your Kushtia office.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald w-full text-center text-xs py-3 shadow-sm font-bold"
              >
                💬 WhatsApp Kushtia Desk: {company.phones[0]}
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9+]/g, "")}`}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-xs font-bold text-slate-800 hover:border-amber-300 transition-colors"
              >
                📞 Call Hotline: {company.phones[0]}
              </a>
            </div>
          </div>

          {/* Modern Audio Lab Facility Card */}
          <div className="card-clean rounded-3xl p-8 border border-blue-200/90 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-navy text-xs">
                  🎧 Modern Audio Lab Setup
                </span>
                <span className="text-xs font-bold text-amber-700 font-bangla">পৃথক হেডসেট সুবিধা</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                Computer-Based & Real Mock Lab
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                📍 169/4, Mahatab Uddin Road, Old Kataikhana More, Kushtia
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                <p>
                  <strong>🎧 Facility:</strong> Individual Noise-Isolating Headsets for Listening
                </p>
                <p>
                  <strong>🎯 Mock Fee:</strong> মাত্র ৩০০ টাকায় পূর্ণাঙ্গ CBT ও পেপার-বেসড মক টেস্ট
                </p>
                <p>
                  <strong>🕒 Lab Timing:</strong> Saturday – Thursday: 9:00 AM – 8:00 PM
                </p>
                <p>
                  <strong>👥 Mentorship:</strong> অভিজ্ঞ ইন্সট্রাক্টরের নিবিড় কেয়ার ও বিস্তারিত ব্যান্ড রিপোর্ট
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Kushtia IELTS Care, I want to book a 300 BDT mock test slot in the audio lab.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-primary w-full text-center text-xs py-3 shadow-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400"
              >
                💬 Book 300 BDT Mock Test Slot
              </a>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9+]/g, "")}`}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-xs font-bold text-slate-800 hover:border-amber-300 transition-colors"
              >
                📞 Call Alternate Line: {company.phones[1]}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Form & Google Map */}
      <section className="section-shell grid gap-10 py-10 sm:py-16 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Column: Map and Community */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
            <div className="p-3 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Campus Location Map
                </h3>
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {company.address}
              </p>
            </div>
            <div className="h-72 sm:h-80 w-full overflow-hidden rounded-2xl">
              <iframe
                src={company.mapsEmbed}
                title="Kushtia IELTS Care Campus Google Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-white shadow-sm">
            <span className="badge-clean badge-red text-xs">Learn · Practice · Achieve</span>
            <h3 className="font-display font-bold text-lg text-white mt-2">
              Your Gateway to IELTS & European Higher Education
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed font-bangla">
              "{company.slogan}"
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Kushtia Campus</span>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 font-bold hover:underline"
              >
                Official Facebook Page ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Booking Form */}
        <div className="card-clean rounded-3xl p-8 border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 pb-4">
            <span className="badge-clean badge-red">Free Profile & Level Assessment</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900">
              Send Your Inquiry / Book Counseling
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Fill in your details to immediately connect with a Kushtia IELTS Care counselor on WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600">
                ✓
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Inquiry Prepared Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. If WhatsApp did not open automatically,
                tap below to chat with a Kushtia IELTS Care counselor.
              </p>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald inline-flex text-xs py-3 px-6 shadow-md font-bold"
              >
                💬 Open WhatsApp Chat
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Tanvir Ahmed"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 01715-XXXXXX"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition-colors"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Service / Course
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition-colors"
                  >
                    <option value="IELTS Premium Regular Batch">IELTS Premium Regular (Target 7.5+)</option>
                    <option value="IELTS Crash / Exam Booster">IELTS Crash Course</option>
                    <option value="Audio Lab CBT Mock Test (300 BDT)">Audio Lab CBT Mock Test (300 BDT)</option>
                    <option value="Spoken English & Communication Fluency">Spoken English & Fluency</option>
                    <option value="Kids English Academy (Phonics & Grammar)">Kids English Academy</option>
                    <option value="Study in Europe — Portugal & Czech Republic">Study in Portugal & Europe</option>
                    <option value="Study in UK / USA / Canada / Australia">Study in UK / USA / Canada / Australia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Target Destination / Goal
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition-colors"
                  >
                    <option value="Portugal (European Schengen Residency & Affordable Higher Ed)">
                      🇵🇹 Portugal (Schengen Gateway & PR Pathway)
                    </option>
                    <option value="Czech Republic (Central European Top Public Universities)">
                      🇨🇿 Czech Republic (Central Europe)
                    </option>
                    <option value="United Kingdom (1-Yr Masters & 2-Yr Post-Study Work)">
                      🇬🇧 United Kingdom
                    </option>
                    <option value="Canada (Public Universities & PGWP)">🇨🇦 Canada</option>
                    <option value="Australia (Subclass 500 & Regional Visas)">🇦🇺 Australia</option>
                    <option value="USA (Top Scholarships & STEM OPT)">🇺🇸 United States</option>
                    <option value="Germany (Tuition-Free Public Universities)">🇩🇪 Germany</option>
                    <option value="IELTS / Spoken Skill Development in Kushtia Only">
                      🎯 IELTS / Language Skill Development Only
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Query or Academic Background
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Completed HSC / Bachelor's. Looking for IELTS morning/evening batch, 300 BDT CBT mock test, or Portugal study visa counseling in Kushtia..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-luxury-primary w-full text-xs sm:text-sm py-3.5 shadow-md cursor-pointer font-bold"
                >
                  Send Inquiry to WhatsApp ({company.phones[0]}) →
                </button>
              </div>

              <p className="text-[0.68rem] text-slate-500 text-center pt-1">
                🔒 Direct 1-on-1 counseling · 169/4 Mahatab Uddin Road, Old Kataikhana More, Kushtia.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
