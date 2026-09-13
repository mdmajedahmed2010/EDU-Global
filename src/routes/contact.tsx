import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | AB STUDY HUB — Commerce View Complex, Chattogram" },
      {
        name: "description",
        content:
          "Visit AB STUDY HUB at Commerce View Complex, 4th Floor (Exim Bank Building), CDA Avenue, East Nasirabad, Panchlaish, Chattogram-4000. Call 01952-566966 (WhatsApp) or 01515-219546 for free counseling & language courses.",
      },
      { property: "og:title", content: "Contact AB STUDY HUB | Chattogram" },
      {
        property: "og:description",
        content:
          "AB STUDY HUB Corporate Campus in Chattogram. German public university admissions, APS support & Language Academy.",
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
    program: "Germany Tuition-Free Public Universities",
    destination: "Germany (Tuition-Free & APS Support)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello AB STUDY HUB!\n\nI want to book a consultation from your website contact page:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service/Course: ${formData.program}\n• Preferred Country/Goal: ${formData.destination}\n• Question: ${formData.notes || "N/A"}`;
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
        title="Connect With Our Chattogram Campus"
        subtitle="Walk in to our central office at Commerce View Complex, 4th Floor (Exim Bank Building), CDA Avenue, East Nasirabad, Chattogram-4000. Free 1-on-1 counseling, German & Danish language courses, and visa guidance."
        image="/latest-assets/banner.jpg"
        imageAlt="AB STUDY HUB campus at Commerce View Complex, Chattogram"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </PageHero>

      {/* Office & Hotline Cards Section */}
      <section className="section-shell py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Chattogram Corporate Hub Card */}
          <div className="card-clean rounded-3xl p-8 border border-red-200/90 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-red text-xs">
                  <span className="h-2 w-2 rounded-full bg-red-600 animate-ping inline-block mr-1" />
                  Chattogram Corporate Hub
                </span>
                <span className="text-xs font-bold text-slate-500">Abroad From Bangladesh</span>
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
                  <span className="text-emerald-700 font-bold">Tuition-Free Germany & Elite Language Academy</span>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello AB STUDY HUB, I want to book a free consultation at your Chattogram office.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald w-full text-center text-xs py-3 shadow-sm"
              >
                💬 WhatsApp Chattogram Desk: {company.phones[0]}
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9+]/g, "")}`}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-xs font-bold text-slate-800 hover:border-red-300 transition-colors"
              >
                📞 Call Hotline: {company.phones[0]}
              </a>
            </div>
          </div>

          {/* Language Academy & Germany Desk Card */}
          <div className="card-clean rounded-3xl p-8 border border-blue-200/90 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-navy text-xs">
                  🇩🇪 Germany & Language Academy
                </span>
                <span className="text-xs font-bold text-slate-500">10–12 Student Batches</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                German Admissions & Language Studio
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                📍 {company.offices.headquarters.address}
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                <p>
                  <strong>🇩🇪 Flagship:</strong> Germany Tuition-Free Public Universities & APS Support
                </p>
                <p>
                  <strong>🎯 Language Academy:</strong> German A1–B2 (Goethe Exam Prep), Danish, IELTS 7.5+
                </p>
                <p>
                  <strong>👥 Private Batch Format:</strong> Strictly 10–12 students per batch
                </p>
                <p>
                  <strong>📞 Direct Line:</strong> {company.phones[1]}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello AB Language Academy, please send me the latest German and IELTS batch schedule in Chattogram.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald w-full text-center text-xs py-3 shadow-sm"
              >
                💬 Inquire Language Batches on WhatsApp
              </a>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9+]/g, "")}`}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-xs font-bold text-slate-800 hover:border-blue-300 transition-colors"
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
                  className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Commerce View Complex (Exim Bank Building), 191 CDA Avenue, East Nasirabad, Chattogram-4200
              </p>
            </div>
            <div className="h-72 sm:h-80 w-full overflow-hidden rounded-2xl">
              <iframe
                src={company.mapsEmbed}
                title="AB STUDY HUB Chattogram Office Google Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-slate-900 to-slate-950 p-6 text-white shadow-sm">
            <span className="badge-clean badge-red text-xs">Abroad From Bangladesh</span>
            <h3 className="font-display font-bold text-lg text-white mt-2">
              From Chattogram TO THE WORLD
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              AB STUDY HUB is dedicated to genuine student counseling, tuition-free European higher
              education, and high visa success. Located conveniently at East Nasirabad, Panchlaish,
              Chattogram.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Chattogram Campus</span>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-red-400 font-bold hover:underline"
              >
                Facebook Page ↗
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
              Fill in your details to immediately connect with an AB STUDY HUB counselor on
              WhatsApp.
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
                tap below to chat with an AB STUDY HUB counselor.
              </p>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald inline-flex text-xs py-3 px-6 shadow-md"
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
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
                  placeholder="e.g. 01952-XXXXXX"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
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
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
                  >
                    <option value="Germany Tuition-Free Public Universities">
                      Germany Tuition-Free Universities
                    </option>
                    <option value="German Language Course (A1, A2, B1, B2 Goethe)">
                      German Language (A1–B2 Goethe)
                    </option>
                    <option value="Danish Language Course">Danish Language Course</option>
                    <option value="IELTS Private Batch (Band 7.5+ in 10-12 batches)">
                      IELTS Private Batch (Band 7.5+)
                    </option>
                    <option value="Spoken English & Communication Fluency">
                      Spoken English Fluency
                    </option>
                    <option value="Kids English (Ages 5-14)">Kids English (Ages 5-14)</option>
                    <option value="APS Certificate & Uni-Assist Assistance">
                      APS & Uni-Assist Support
                    </option>
                    <option value="Student Visa & Dependent Spouse Visa">
                      Student & Spouse Visa
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Target Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
                  >
                    <option value="Germany (Tuition-Free & APS Support)">
                      🇩🇪 Germany (Flagship #1)
                    </option>
                    <option value="Denmark (Language & Tech Universities)">🇩🇰 Denmark</option>
                    <option value="United Kingdom (Fast 1-Yr Masters & PSW)">🇬🇧 United Kingdom</option>
                    <option value="Netherlands (Top English Degrees & Zoekjaar)">🇳🇱 Netherlands</option>
                    <option value="Spain (European Dream & Schengen Mobility)">🇪🇸 Spain</option>
                    <option value="Greece (90% Visa Success Rate)">🇬🇷 Greece</option>
                    <option value="Malaysia (2026-2027 Intakes & Global Campuses)">🇲🇾 Malaysia</option>
                    <option value="Cyprus (Mediterranean Higher Education)">🇨🇾 Cyprus</option>
                    <option value="Canada (DLI & PGWP)">🇨🇦 Canada</option>
                    <option value="Hungary (Stipendium Hungaricum)">
                      🇭🇺 Hungary (100% Scholarship)
                    </option>
                    <option value="AB Language Academy Only">🎓 Language Academy Only</option>
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
                  placeholder="e.g. Completed HSC / Bachelor's in 2024. Interested in German public university admission or Goethe A1 batch timing in Chattogram..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-luxury-primary w-full text-xs sm:text-sm py-3.5 shadow-md cursor-pointer"
                >
                  Send Inquiry to WhatsApp ({company.phones[0]}) →
                </button>
              </div>

              <p className="text-[0.68rem] text-slate-500 text-center pt-1">
                🔒 Direct 1-on-1 counseling. Commerce View Complex, CDA Avenue, East Nasirabad,
                Chattogram.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
