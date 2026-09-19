import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | EDU Global — Keari Plaza, Dhanmondi, Dhaka" },
      {
        name: "description",
        content:
          "Contact EDU Global (ইডিইউ গ্লোবাল). Head Office: Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi R/A, Dhaka - 1209 (Opposite Unimart, Old 15 Bus Stand). Hotlines: +880 1901-402990, +880 1901-402992. Emails: info@eduglobal.support, eduglobalgogl@gmail.com.",
      },
      { property: "og:title", content: "Contact EDU Global — Dhanmondi Head Office" },
      {
        property: "og:description",
        content:
          "Visit our Dhanmondi, Dhaka Head Office for foreign education advisory, Free Bank Support for European visas, 100% admission guidance, and premier language training.",
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
    program: "Study Abroad Admissions (UK, USA, Canada, Australia, Europe, etc.)",
    destination: "United Kingdom (UK)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello EDU Global!\n\nI want to book a free consultation from your website contact page:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Program: ${formData.program}\n• Target Destination: ${formData.destination}\n• Query: ${formData.notes || "N/A"}`;
    window.open(
      `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Direct Consultation Desks"
        title="Connect With EDU Global (ইডিইউ গ্লোবাল)"
        subtitle="ধানমন্ডি সাতমসজিদ রোডের কেয়ারি প্লাজায় (৪র্থ তলা, লিফট-৩) অবস্থিত আমাদের সেন্ট্রাল অফিসে সরাসরি আসুন অথবা হোয়াটসঅ্যাপে যোগাযোগ করুন। সিনিয়র কাউন্সেলরদের সাথে ফ্রি প্রোফাইল এসেসমেন্ট এবং ফ্রি ব্যাংক সাপোর্ট সুবিধা।"
        image="/banner.png"
        imageAlt="EDU Global Dhanmondi counseling center"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </PageHero>

      {/* Office & Hotline Cards Section */}
      <section className="section-shell py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Dhaka Head Office Card */}
          <div className="card-clean rounded-3xl p-8 border border-emerald-200/90 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-emerald text-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping inline-block mr-1" />
                  Dhaka Head Office (Central Hub)
                </span>
                <span className="text-xs font-bold text-slate-500">Dhanmondi R/A</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                {company.offices.headquarters.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                📍 {company.offices.headquarters.address}
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                <p>
                  <strong>📞 Primary WhatsApp / Hotline:</strong> {company.phones[0]}
                </p>
                <p>
                  <strong>📞 Counselor Hotline:</strong> {company.phones[1]}
                </p>
                <p>
                  <strong>🕒 Counseling Hours:</strong> {company.offices.headquarters.hours}
                </p>
                <p>
                  <strong>✉️ Official Emails:</strong> {company.email} · {company.emails[1]}
                </p>
                <p>
                  <strong>🌐 Official Website:</strong> {company.website}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello EDU Global, I want to book a free consultation at your Dhanmondi Head Office.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald w-full text-center text-xs py-3 shadow-sm font-bold"
              >
                💬 WhatsApp Dhanmondi Desk: {company.phones[0]}
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9+]/g, "")}`}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-xs font-bold text-slate-800 hover:border-emerald-300 transition-colors"
              >
                📞 Call Hotline: {company.phones[0]}
              </a>
            </div>
          </div>

          {/* Special Support & Language Desk Card */}
          <div className="card-clean rounded-3xl p-8 border border-sky-200/90 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-navy text-xs">
                  🎓 Language Academy & Bank Support Desk
                </span>
                <span className="text-xs font-bold text-sky-800">Special Wings</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                Admissions, Language Academy & Visa Support
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                📍 Dedicated departments at Keari Plaza, 4th Floor, Dhanmondi
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                <p>
                  <strong>🏦 Free Bank Support:</strong> Initial 20 students for European & Cyprus intakes
                </p>
                <p>
                  <strong>🗣️ Language Academy:</strong> IELTS (7.5+), Spoken English, Kids English & Japanese
                </p>
                <p>
                  <strong>⚡ Study Gap & CGPA:</strong> Gap up to 10+ years & low CGPA (2.5+) accepted
                </p>
                <p>
                  <strong>🌐 Social Channels:</strong> Facebook (@edugbl) & Instagram (@eduglobal1987)
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello EDU Global, I want to inquire about Free Bank Support and language courses.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-primary w-full text-center text-xs py-3 shadow-sm font-bold text-slate-950 bg-emerald-500 hover:bg-emerald-400"
              >
                💬 Inquire About Special Offers
              </a>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9+]/g, "")}`}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-xs font-bold text-slate-800 hover:border-emerald-300 transition-colors"
              >
                📞 Call Counselor Hotline: {company.phones[1]}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Form & Google Map */}
      <section className="section-shell grid gap-10 py-10 sm:py-16 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Column: Map and Trust Pillars */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
            <div className="p-3 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Dhanmondi Head Office Location Map
                </h3>
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {company.address.full}
              </p>
            </div>
            <div className="h-72 sm:h-80 w-full overflow-hidden rounded-2xl">
              <iframe
                src={company.mapsEmbed}
                title="EDU Global Head Office Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-[#0c1f17] to-slate-950 p-6 text-white shadow-sm">
            <span className="badge-clean badge-emerald text-xs">EDU Global Core Pillars</span>
            <h3 className="font-display font-bold text-lg text-white mt-2">
              Verified Brand Commitments
            </h3>
            <ul className="mt-3 text-xs text-slate-300 space-y-1.5 leading-relaxed">
              <li>• <strong>100% Admission Guidance:</strong> সরাসরি যুক্তরাজ্যের Canterbury Christ Church ও শীর্ষ বিশ্ববিদ্যালয়ে আবেদন</li>
              <li>• <strong>Free Bank Support Offer:</strong> সাইপ্রাস ও ইউরোপীয় ইউনিয়নের প্রথম ২০ জন শিক্ষার্থীর জন্য বিশেষ ব্যাংক সাপোর্ট</li>
              <li>• <strong>Study Gap & Low CGPA:</strong> দীর্ঘ শিক্ষাবিরতি এবং CGPA 2.5+ নিয়েও উচ্চশিক্ষার বাস্তব সুযোগ</li>
              <li>• <strong>Study Abroad Without IELTS:</strong> MOI (Medium of Instruction) ও ডুওলিঙ্গো গ্রহণকারী বিশ্ববিদ্যালয়</li>
              <li>• <strong>Language Academy:</strong> IELTS (7.5+), Spoken English, Kids English & Phonics, এবং জাপানিজ কোর্স</li>
              <li>• <strong>Prime Dhanmondi Location:</strong> সাতমসজিদ রোডের প্রাণকেন্দ্রে (ইউনিমার্টের বিপরীতে কেয়ারি প্লাজা)</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Dhanmondi, Dhaka</span>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 font-bold hover:underline"
              >
                Official Facebook Page (@edugbl) ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Booking Form */}
        <div className="card-clean rounded-3xl p-8 border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 pb-4">
            <span className="badge-clean badge-emerald">Free Profile Assessment</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900">
              Send Your Inquiry / Book Counseling
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Fill in your details to immediately connect with an EDU Global senior counselor on WhatsApp.
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
                tap below to chat directly with our senior counseling desk.
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-emerald-500 focus:bg-white transition-colors"
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
                  placeholder="e.g. 01901-XXXXXX"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Service / Program
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                  >
                    <option value="Study Abroad Admissions (UK, USA, Canada, Australia, Europe, etc.)">Study Abroad Admissions</option>
                    <option value="Free Bank Support Offer (Cyprus & Europe Intakes)">Free Bank Support Offer</option>
                    <option value="Study Gap & Low CGPA Application Support">Study Gap & Low CGPA Support</option>
                    <option value="Study Abroad Without IELTS / MOI Option">Study Abroad Without IELTS</option>
                    <option value="IELTS Preparation Course (Target Band 7.5+)">IELTS Preparation (Band 7.5+)</option>
                    <option value="Spoken English & Communication Fluency">Spoken English Fluency</option>
                    <option value="Kids English & Phonics Academy (Ages 5-14)">Kids English & Phonics Academy</option>
                    <option value="Japanese Language Course (JLPT N5/N4)">Japanese Language Course</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Target Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                  >
                    <option value="United Kingdom (UK)">🇬🇧 United Kingdom (UK)</option>
                    <option value="Europe & Schengen (Cyprus, Greece, Italy, etc.)">🇪🇺 Europe & Schengen</option>
                    <option value="United States (USA)">🇺🇸 United States (USA)</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="New Zealand">🇳🇿 New Zealand</option>
                    <option value="South Korea">🇰🇷 South Korea</option>
                    <option value="Japan">🇯🇵 Japan</option>
                    <option value="Finland">🇫🇮 Finland</option>
                    <option value="Ireland">🇮🇪 Ireland</option>
                    <option value="Malaysia">🇲🇾 Malaysia</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Academic Background or Query
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Completed HSC / Bachelor's. Interested in UK or Europe admissions, Free Bank Support, or IELTS coaching..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-luxury-primary w-full text-xs sm:text-sm py-3.5 shadow-md cursor-pointer font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                >
                  Send Inquiry to WhatsApp ({company.phones[0]}) →
                </button>
              </div>

              <p className="text-[0.68rem] text-slate-500 text-center pt-1">
                🔒 Direct 1-on-1 counseling · Keari Plaza, 4th Floor, Road 8/A, Dhanmondi, Dhaka.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
