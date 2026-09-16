import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Higher Study Counselors Bangladesh — Uttara, Dhaka & Glasgow, UK" },
      {
        name: "description",
        content:
          "Contact Higher Study Counselors Bangladesh (Since 2012). Head Office: House 23, Road 2, 1st Floor, Sector 3, Uttara, Dhaka - 1230. UK Office: 3A Westburn Road, Glasgow, UK. Hotlines: 01974843470, 01676997222, +880 1328-524659, Landline: 02-48956923. Emails: apply.hscb24@gmail.com, hscb0184@gmail.com.",
      },
      { property: "og:title", content: "Contact Higher Study Counselors Bangladesh — Since 2012" },
      {
        property: "og:description",
        content:
          "Visit our Uttara, Dhaka Head Office or contact our Glasgow UK team for foreign education advisory, 100% IELTS Cash Back on Visa Success, Move with Family, and Study Gap Acceptance.",
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
    program: "Study Abroad Consultation (UK, USA, Australia, Hungary, etc.)",
    destination: "United Kingdom (UK)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Higher Study Counselors Bangladesh!\n\nI want to book a free consultation from your website contact page:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service/Course: ${formData.program}\n• Target Destination: ${formData.destination}\n• Query: ${formData.notes || "N/A"}`;
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
        title="Connect With Higher Study Counselors Bangladesh"
        subtitle="উত্তরা সেক্টর ৩ প্রধান কার্যালয়ে সরাসরি আসুন অথবা গ্লাসগো, যুক্তরাজ্য অফিসের মাধ্যমে যোগাযোগ করুন। অভিজ্ঞ সিনিয়র কাউন্সেলরদের সাথে ফ্রি প্রোফাইল মূল্যায়ন এবং আইইএলটিএস ১০০% ক্যাশব্যাক অফার।"
        image="/banner.jpg"
        imageAlt="Higher Study Counselors Bangladesh Dhaka and UK offices"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </PageHero>

      {/* Office & Hotline Cards Section */}
      <section className="section-shell py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Dhaka Head Office Card */}
          <div className="card-clean rounded-3xl p-8 border border-amber-200/90 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-red text-xs">
                  <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping inline-block mr-1" />
                  Dhaka Head Office
                </span>
                <span className="text-xs font-bold text-slate-500">Since 2012</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                {company.offices.headquarters.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                📍 {company.offices.headquarters.address}
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                <p>
                  <strong>📞 Primary WhatsApp / Call:</strong> {company.phones[0]}
                </p>
                <p>
                  <strong>📞 Senior Counselor Hotline:</strong> {company.phones[1]}
                </p>
                <p>
                  <strong>📞 Admission Helpline:</strong> {company.phones[2]}
                </p>
                <p>
                  <strong>☎️ Landline:</strong> {company.phones[3]}
                </p>
                <p>
                  <strong>🕒 Office Hours:</strong> {company.offices.headquarters.hours}
                </p>
                <p>
                  <strong>✉️ Official Emails:</strong> {company.email} · {company.emails[1]}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Higher Study Counselors Bangladesh, I want to book a free consultation at your Uttara Head Office.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald w-full text-center text-xs py-3 shadow-sm font-bold"
              >
                💬 WhatsApp Dhaka Desk: {company.phones[0]}
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9+]/g, "")}`}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-xs font-bold text-slate-800 hover:border-amber-300 transition-colors"
              >
                📞 Call Hotline: {company.phones[0]}
              </a>
            </div>
          </div>

          {/* UK International Office Card */}
          <div className="card-clean rounded-3xl p-8 border border-sky-200/90 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-navy text-xs">
                  🇬🇧 UK International Office
                </span>
                <span className="text-xs font-bold text-sky-800">Glasgow Support</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                {company.offices.international.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                📍 {company.offices.international.address}
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                <p>
                  <strong>🇬🇧 UK Presence:</strong> On-ground reception & post-arrival assistance
                </p>
                <p>
                  <strong>💼 Key Focus:</strong> Part Time Job guidance, accommodation & settlement
                </p>
                <p>
                  <strong>🕒 UK Office Hours:</strong> {company.offices.international.hours}
                </p>
                <p>
                  <strong>✉️ UK Email:</strong> {company.offices.international.email}
                </p>
                <p>
                  <strong>🌐 Official Website:</strong> {company.offices.international.website}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Higher Study Counselors Bangladesh, I want to consult regarding UK university admission and Glasgow support.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-primary w-full text-center text-xs py-3 shadow-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400"
              >
                💬 Inquire About UK Direct Support
              </a>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9+]/g, "")}`}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-xs font-bold text-slate-800 hover:border-amber-300 transition-colors"
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
                  Dhaka Head Office Location Map
                </h3>
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1"
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
                title="Higher Study Counselors Bangladesh Head Office Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[#161B38] to-slate-950 p-6 text-white shadow-sm">
            <span className="badge-clean badge-red text-xs">Since 2012 · 14+ Years Trust</span>
            <h3 className="font-display font-bold text-lg text-white mt-2">
              6 Verified Corporate Commitments
            </h3>
            <ul className="mt-3 text-xs text-slate-300 space-y-1.5 leading-relaxed">
              <li>• <strong>Opportunity To Move With Family:</strong> স্পাউস ও সন্তানসহ ভিসা সুবিধা</li>
              <li>• <strong>Long Study Gap Accepted:</strong> দীর্ঘ শিক্ষাবিরতি থাকলেও ভর্তি সুবিধা</li>
              <li>• <strong>Part Time Job In UK & Abroad:</strong> বৈধ পার্ট-টাইম কাজের পূর্ণাঙ্গ গাইডলাইন</li>
              <li>• <strong>Low Tuition Fees University:</strong> সাশ্রয়ী খরচে মানসম্মত বিশ্ববিদ্যালয়</li>
              <li>• <strong>Financial Advice & Guidance:</strong> ব্যাংক সলভেন্সি ও ফান্ড প্রস্তুত সহায়তা</li>
              <li>• <strong>IELTS Cash Back On Visa Success:</strong> ভিসা হলেই আইইএলটিএস ফি ১০০% ফেরত</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Uttara & Glasgow</span>
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
            <span className="badge-clean badge-red">Free Profile Assessment</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900">
              Send Your Inquiry / Book Counseling
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Fill in your details to immediately connect with an HSC BD senior counselor on WhatsApp.
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white transition-colors"
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
                  placeholder="e.g. 01974-XXXXXX"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white transition-colors"
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
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white transition-colors"
                  >
                    <option value="Study Abroad Consultation (UK, USA, Australia, Hungary, etc.)">Study Abroad Consultation</option>
                    <option value="IELTS with 100% Cash Back on Visa Success">IELTS with 100% Cash Back on Visa</option>
                    <option value="Opportunity to Move with Family (Spouse/Child Visa)">Move with Family (Dependent Visa)</option>
                    <option value="Long Study Gap Application Support">Long Study Gap Support</option>
                    <option value="Low Tuition Fees University Admission">Low Tuition Universities</option>
                    <option value="Spoken English & Communication Fluency">Spoken English & Fluency</option>
                    <option value="Kids English Academy">Kids English Academy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Target Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white transition-colors"
                  >
                    <option value="United Kingdom (UK)">🇬🇧 United Kingdom (UK)</option>
                    <option value="United States (USA)">🇺🇸 United States (USA)</option>
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="Hungary (Europe Schengen)">🇭🇺 Hungary (Europe)</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="Finland">🇫🇮 Finland</option>
                    <option value="Denmark">🇩🇰 Denmark</option>
                    <option value="Malaysia">🇲🇾 Malaysia</option>
                    <option value="Dubai (UAE)">🇦🇪 Dubai (UAE)</option>
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
                  placeholder="e.g. Completed HSC / Bachelor's. Looking for low tuition university, family move support, or IELTS Cashback details..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-amber-500 focus:bg-white transition-colors"
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
                🔒 Direct 1-on-1 counseling · House 23, Road 2, Sector 3, Uttara, Dhaka & Glasgow, UK.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
