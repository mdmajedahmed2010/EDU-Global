import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | AcademiaZ — Kadirganj, Greater Road, Rajshahi" },
      {
        name: "description",
        content:
          "Visit AcademiaZ at Kadirganj, Greater Road (Lane beside Ma Photostat, east side of the mosque), Rajshahi - 6000. Call 01518-951062 (WhatsApp) or 01632-372232 for free counseling, Japanese language courses (N5/N4), TITP & SSW work programs, and Japan student visas. Managed directly from Japan (জাপান থেকে পরিচালিত).",
      },
      { property: "og:title", content: "Contact AcademiaZ | Rajshahi & Japan Oversight" },
      {
        property: "og:description",
        content:
          "AcademiaZ Japanese Language Training & Visa Consultancy in Rajshahi. Japanese N5/N4, TITP & SSW, IELTS, Spoken English, and Japan visa processing.",
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
    program: "Japanese Language Course (JLPT N5/N4 Package)",
    destination: "Japan (Flagship #1 — Japan Direct Management)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello AcademiaZ!\n\nI want to book a consultation from your website contact page:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service/Course: ${formData.program}\n• Preferred Country/Goal: ${formData.destination}\n• Query: ${formData.notes || "N/A"}`;
    window.open(
      `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Direct Advisory Desk"
        title="Connect With AcademiaZ"
        subtitle="Walk in to our academy at Kadirganj, Greater Road (Lane beside Ma Photostat, east side of the mosque), Rajshahi - 6000, or connect directly with our Japan-based management. Free 1-on-1 counseling, Japanese language training, and visa guidance."
        image="/banner.jpg"
        imageAlt="AcademiaZ campus at Kadirganj, Greater Road, Rajshahi"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </PageHero>

      {/* Office & Hotline Cards Section */}
      <section className="section-shell py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Rajshahi Corporate Headquarters Card */}
          <div className="card-clean rounded-3xl p-8 border border-sky-200/90 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-red text-xs">
                  <span className="h-2 w-2 rounded-full bg-sky-600 animate-ping inline-block mr-1" />
                  Rajshahi Campus
                </span>
                <span className="text-xs font-bold text-slate-500">Language & Visa Hub</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                {company.offices.headquarters.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                📍 {company.offices.headquarters.address}
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                <p>
                  <strong>📞 Primary WhatsApp:</strong> {company.phones[0]}
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
                  <span className="text-sky-700 font-bold">Japanese N5/N4, TITP & SSW, Student Visa & IELTS</span>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello AcademiaZ, I want to book a free consultation at your Rajshahi office.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald w-full text-center text-xs py-3 shadow-sm font-bold"
              >
                💬 WhatsApp Rajshahi Desk: {company.phones[0]}
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9+]/g, "")}`}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-xs font-bold text-slate-800 hover:border-sky-300 transition-colors"
              >
                📞 Call Hotline: {company.phones[0]}
              </a>
            </div>
          </div>

          {/* Japan Direct Management Card */}
          <div className="card-clean rounded-3xl p-8 border border-amber-200/90 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-navy text-xs">
                  🇯🇵 Japan Direct Management
                </span>
                <span className="text-xs font-bold text-amber-700 font-bangla">জাপান থেকে পরিচালিত</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                {company.offices.international.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                📍 {company.offices.international.address}
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                <p>
                  <strong>🇯🇵 Standard:</strong> 100% Japan Standard Curriculum & Pedagogy
                </p>
                <p>
                  <strong>🌸 Visa Categories:</strong> Language School Student Visa, TITP Trainee, SSW Worker
                </p>
                <p>
                  <strong>🕒 Advisory Support:</strong> {company.offices.international.hours}
                </p>
                <p>
                  <strong>👥 Direct Coordination:</strong> Seamless link between Rajshahi students and Japanese institutions
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello AcademiaZ, I want to consult about Japanese Language courses and Japan Visa processing.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-primary w-full text-center text-xs py-3 shadow-sm font-bold text-white"
              >
                💬 WhatsApp Japan Advisory Desk
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
                Kadirganj, Greater Road (Lane beside Ma Photostat, east side of the mosque), Rajshahi - 6000
              </p>
            </div>
            <div className="h-72 sm:h-80 w-full overflow-hidden rounded-2xl">
              <iframe
                src={company.mapsEmbed}
                title="AcademiaZ Rajshahi Campus Google Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-white shadow-sm">
            <span className="badge-clean badge-red text-xs">Learn · Grow · Achieve</span>
            <h3 className="font-display font-bold text-lg text-white mt-2">
              Your Gateway to Japan
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed font-bangla">
              "{company.slogan}"
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Rajshahi Campus</span>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-sky-400 font-bold hover:underline"
              >
                Official Facebook Page ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Booking Form */}
        <div className="card-clean rounded-3xl p-8 border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 pb-4">
            <span className="badge-clean badge-red">Free Profile Assessment</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900">
              Send Your Inquiry / Book Counseling
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Fill in your details to immediately connect with an AcademiaZ counselor on WhatsApp.
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
                tap below to chat with an AcademiaZ counselor.
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
                  placeholder="e.g. Mahfuzur Rahman"
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
                  placeholder="e.g. 01518-XXXXXX"
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
                    <option value="Japanese Language Course (JLPT N5/N4 Package)">
                      Japanese Language (N5/N4 Package)
                    </option>
                    <option value="Study in Japan (Language Academy & Student Visa)">
                      Study in Japan (Student Visa / COE)
                    </option>
                    <option value="Work in Japan (TITP Technical Intern / SSW Worker)">
                      Work in Japan (TITP / SSW Program)
                    </option>
                    <option value="IELTS Academic / General Training">
                      IELTS Coaching (Band 7.5+)
                    </option>
                    <option value="Spoken English & Communication Fluency">
                      Spoken English Fluency
                    </option>
                    <option value="Kids English (Ages 5–14)">Kids English (Ages 5–14)</option>
                    <option value="Document Translation & Verification Support">
                      Document Translation & Verification
                    </option>
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
                    <option value="Japan (Flagship #1 — Japan Direct Management)">
                      🇯🇵 Japan (Flagship #1 — Japan Managed)
                    </option>
                    <option value="Germany (Tuition-Free & Ausbildung Support)">
                      🇩🇪 Germany (Tuition-Free)
                    </option>
                    <option value="Malaysia (Fast EMGS & Affordable Degree)">
                      🇲🇾 Malaysia (Fast Visa)
                    </option>
                    <option value="United Kingdom (1-Yr Masters & PSW)">
                      🇬🇧 United Kingdom
                    </option>
                    <option value="Canada (Public DLI & PGWP)">🇨🇦 Canada</option>
                    <option value="Australia (Subclass 500 High Wages)">🇦🇺 Australia</option>
                    <option value="USA (STEM OPT Extensions)">🇺🇸 United States</option>
                    <option value="AcademiaZ Language Academy Only">🎓 Language Academy Only</option>
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
                  placeholder="e.g. Completed HSC / Bachelor's. Interested in Japanese N5 morning/evening batch or Japan student visa in Rajshahi..."
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
                🔒 Direct 1-on-1 counseling. Kadirganj, Greater Road, Rajshahi · Japan-Based Direct Oversight.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
