import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | RANS Scholarships | Rang Mohol Tower, Sylhet" },
      {
        name: "description",
        content:
          "Visit RANS Scholarships at 425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet. Call 01772-063911 (WhatsApp) or 01925-772171 for 100% free file opening & counseling.",
      },
      { property: "og:title", content: "Contact RANS Scholarships | Bandar Bazar, Sylhet" },
      {
        property: "og:description",
        content:
          "RANS Scholarships Corporate Office in Sylhet. Study Abroad Admissions & Language Academy. 100% Free File Opening Charge.",
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
    program: "Study Abroad Admissions (100% Free File Opening)",
    destination: "Finland (Jan 2027 Joint App & Rolling)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello RANS Scholarships!\n\nI want to book a free consultation from your website contact page:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service/Course: ${formData.program}\n• Preferred Country/Goal: ${formData.destination}\n• Question: ${formData.notes || "N/A"}`;
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
        title="Connect With Our Sylhet Corporate Headquarters"
        subtitle="Walk in to our central office at 425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet. 100% Free File Opening Charge, Language Academy counseling, and Finland / European visa guidance."
        image="/latest-assets/banner.jpg"
        imageAlt="RANS Scholarships headquarters at Rang Mohol Tower, Sylhet"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </PageHero>

      {/* Office & Hotline Cards Section */}
      <section className="section-shell py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Sylhet Corporate Headquarters Card */}
          <div className="card-clean rounded-3xl p-8 border border-red-200/90 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-red text-xs">
                  <span className="h-2 w-2 rounded-full bg-red-600 animate-ping inline-block mr-1" />
                  Sylhet Corporate Hub
                </span>
                <span className="text-xs font-bold text-slate-500">Member: FECAS</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                {company.offices.headquarters.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                📍 {company.offices.headquarters.address}
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                <p>
                  <strong>📞 Hotlines:</strong> {company.phones[0]} (WhatsApp) / {company.phones[1]}
                </p>
                <p>
                  <strong>🕒 Working Hours:</strong> {company.offices.headquarters.hours}
                </p>
                <p>
                  <strong>✉️ Email:</strong> {company.email}
                </p>
                <p>
                  <strong>🌟 Policy:</strong>{" "}
                  <span className="text-emerald-700 font-bold">100% Free File Opening Charge</span>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello RANS Scholarships, I want to book a free consultation at your Rang Mohol Tower office.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald w-full text-center text-xs py-3 shadow-sm"
              >
                💬 WhatsApp Sylhet Desk: {company.phones[0]}
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9+]/g, "")}`}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-xs font-bold text-slate-800 hover:border-red-300 transition-colors"
              >
                📞 Call Hotline: {company.phones[0]}
              </a>
            </div>
          </div>

          {/* Language Academy & Finland Desk Card */}
          <div className="card-clean rounded-3xl p-8 border border-blue-200/90 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-navy text-xs">
                  🇫🇮 Finland & Language Academy
                </span>
                <span className="text-xs font-bold text-slate-500">Since 2017</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                Finland Admissions & Language Studio
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                📍 425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                <p>
                  <strong>🇫🇮 Priority Intake:</strong> Finland January 2027 Joint App (31 Aug – 10
                  Sep 2026) & Rolling
                </p>
                <p>
                  <strong>🎯 Language Academy:</strong> IELTS (Band 7.5+), Spoken English, Kids
                  English (5-14)
                </p>
                <p>
                  <strong>📜 Accreditations:</strong> Member of FECAS & FACD-CAB
                </p>
                <p>
                  <strong>📞 Direct Line:</strong> {company.phones[1]}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello RANS Language Academy, please send me the latest IELTS and Spoken English batch schedule.")}`}
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
              <p className="text-xs font-bold text-slate-900">
                📍 Sylhet Corporate Headquarters Map
              </p>
              <p className="text-[0.7rem] text-slate-500">
                425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet, Bangladesh
              </p>
            </div>
            <div className="h-72 sm:h-80 w-full overflow-hidden rounded-2xl">
              <iframe
                src={company.offices.headquarters.mapsEmbed}
                title="RANS Scholarships Rang Mohol Tower Sylhet Office Google Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-slate-900 to-slate-950 p-6 text-white shadow-sm">
            <span className="badge-clean badge-red text-xs">Verified Accreditations</span>
            <h3 className="font-display font-bold text-lg text-white mt-2">
              Member of FECAS & FACD-CAB
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              RANS Scholarships has been serving students from Sylhet and across Bangladesh for 10
              years (Since 2017). Endorsed by the Rang Mohol Tower community and recognized for
              zero-file-opening charges.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Sylhet Office</span>
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
            <span className="badge-clean badge-red">100% Free File Opening</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900">
              Send Your Inquiry / Book Counseling
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Fill in your details to immediately connect with a RANS Scholarships counselor on
              WhatsApp with zero file opening fee.
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
                tap below to chat with a RANS Scholarships counselor.
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
                  placeholder="e.g. Tanzimul Islam"
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
                  placeholder="e.g. 01772-XXXXXX"
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
                    <option value="Study Abroad Admissions (100% Free File Opening)">
                      Study Abroad (Free File Opening)
                    </option>
                    <option value="Finland Jan 2027 Joint Application & Rolling">
                      Finland Jan 2027 Joint App
                    </option>
                    <option value="IELTS Preparation (Target Band 7.5+)">
                      IELTS Preparation (Band 7.5+)
                    </option>
                    <option value="Spoken English & Communication Fluency">
                      Spoken English Fluency
                    </option>
                    <option value="Kids English & Spoken Foundation (Ages 5-14)">
                      Kids English (Ages 5-14)
                    </option>
                    <option value="English Grammar Masterclass">English Grammar Masterclass</option>
                    <option value="Hungary Stipendium Hungaricum Scholarship">
                      Hungary Scholarship
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
                    <option value="Finland (Jan 2027 Joint App & Rolling)">
                      🇫🇮 Finland (#1 Priority Intake)
                    </option>
                    <option value="Canada (DLI & PGWP)">🇨🇦 Canada</option>
                    <option value="United States (STEM & Scholarships)">🇺🇸 United States</option>
                    <option value="United Kingdom (Graduate Route)">🇬🇧 United Kingdom</option>
                    <option value="Hungary (Stipendium Hungaricum)">
                      🇭🇺 Hungary (100% Scholarship)
                    </option>
                    <option value="Netherlands (Top English Degrees)">🇳🇱 Netherlands</option>
                    <option value="Italy (DSU Regional Grants)">🇮🇹 Italy</option>
                    <option value="Romania (Medical & Tech)">🇷🇴 Romania</option>
                    <option value="RANS Language Academy Only">🎯 Language Academy Only</option>
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
                  placeholder="e.g. Completed HSC / Bachelor's in 2024. Interested in Finland Jan 2027 intake or IELTS batch timing in Sylhet..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-luxury-primary w-full text-xs sm:text-sm py-3.5 shadow-md"
                >
                  Send Inquiry to WhatsApp ({company.phones[0]}) →
                </button>
              </div>

              <p className="text-[0.68rem] text-slate-500 text-center pt-1">
                🔒 100% Free File Opening Charge. Member of FECAS. 425 Rang Mohol Tower, Bandar
                Bazar, Sylhet.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
