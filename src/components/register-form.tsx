import { useState } from "react";
import { company, destinations } from "@/lib/site-data";

const field =
  "w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all hover:bg-white focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/10";
const label = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700";

const serviceOptions = [
  "Japanese Language Course (JLPT N5 & N4 / NAT-TEST / JFT-Basic)",
  "Study in Japan (Student Visa, COE Processing & Academy Enrollment)",
  "Work in Japan (TITP Technical Intern & SSW Specified Skilled Worker)",
  "IELTS Academic & General (Target Band 7.5+, Authentic Cambridge Mocks)",
  "Spoken English Fluency & Communication Mastery",
  "Kids English & Phonics Foundation (Ages 5–14)",
  "Global Study Abroad (Europe, UK, USA, Canada, Malaysia)",
  "Document Translation & Verification Support",
];

const officeOptions = [
  "Rajshahi Campus (Kadirganj, Greater Road, Lane beside Ma Photostat)",
  "Japan Operations (Direct Japan Oversight & Student Support)",
  "Online Consultation (WhatsApp / Google Meet)",
];

export function RegisterForm({ onDone }: { onDone?: () => void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Japanese Language Course (JLPT N5 & N4 / NAT-TEST / JFT-Basic)",
    destination: "Japan",
    currentStatus: "HSC / A-Level Completed (Bachelor's Aspirant)",
    office: "Rajshahi Campus (Kadirganj, Greater Road, Lane beside Ma Photostat)",
    message: "",
  });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const whatsappHref = () => {
    const lines = [
      "✨ Free Consultation Request — AcademiaZ (Rajshahi)",
      `👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      form.email ? `✉️ Email: ${form.email}` : "",
      `🎯 Interested Service: ${form.service}`,
      `🌍 Destination: ${form.destination}`,
      `🎓 Status/Background: ${form.currentStatus}`,
      `🏢 Preferred Office: ${form.office}`,
      form.message ? `📝 Notes: ${form.message}` : "",
      "\nI would like to schedule a free counseling session with an AcademiaZ advisor.",
    ].filter(Boolean);
    return `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="py-10 text-center space-y-4">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl shadow-inner">
          ✅
        </div>
        <h3 className="font-display text-2xl font-black text-slate-900">Booking Confirmed! 🎉</h3>
        <p className="mx-auto max-w-md text-sm text-slate-600 leading-relaxed">
          Thank you, <strong className="text-slate-900">{form.name}</strong>! Your free consultation
          has been registered. An <strong>{company.name}</strong> counselor will contact you on{" "}
          <strong className="text-emerald-700">{form.phone}</strong> shortly.
        </p>
        <div className="mt-2 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-xs text-emerald-800 text-left space-y-1">
          <p>✔ Kadirganj, Greater Road (Lane beside Ma Photostat), Rajshahi</p>
          <p>✔ Japan-Based Direct Oversight & 100% Japan Standard</p>
          <p>✔ Japanese (N5/N4, NAT-TEST, JFT), TITP & SSW, IELTS, Spoken & Kids English</p>
          <p>✔ 100% Visa Guidance & Free Profile Assessment</p>
        </div>
        <div className="pt-2 flex flex-col gap-2">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="btn-emerald text-xs py-3 justify-center shadow-md"
          >
            💬 Open WhatsApp Chat with Counselor
          </a>
          {onDone && (
            <button
              type="button"
              onClick={onDone}
              className="btn-luxury-secondary text-xs py-2.5 justify-center"
            >
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="border-b border-slate-100 pb-3 mb-2">
        <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-sky-600">
          AcademiaZ · Japanese Language Training & Visa Consultancy
        </span>
        <h3 className="font-display text-xl font-black text-slate-900">
          Book Your Free Assessment
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Kadirganj, Greater Road, Rajshahi · Japan-Based Direct Oversight
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-name" className={label}>
            Full Name *
          </label>
          <input
            id="reg-name"
            type="text"
            required
            value={form.name}
            onChange={set("name")}
            placeholder="e.g. Tanzimul Islam"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="reg-phone" className={label}>
            Mobile / WhatsApp Number *
          </label>
          <input
            id="reg-phone"
            type="tel"
            required
            value={form.phone}
            onChange={set("phone")}
            placeholder="e.g. 01518-XXXXXX"
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-service" className={label}>
            Interested Service / Course
          </label>
          <select id="reg-service" value={form.service} onChange={set("service")} className={field}>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="reg-dest" className={label}>
            Preferred Country / Destination
          </label>
          <select
            id="reg-dest"
            value={form.destination}
            onChange={set("destination")}
            className={field}
          >
            {destinations.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.flag} {d.name}
              </option>
            ))}
            <option value="Language Course (Japanese / IELTS / Spoken / Kids)">
              🎯 Language Training Only
            </option>
            <option value="Other / Need Advice">🌍 Other / Need Advice</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-status" className={label}>
            Current Academic / Work Status
          </label>
          <select
            id="reg-status"
            value={form.currentStatus}
            onChange={set("currentStatus")}
            className={field}
          >
            <option value="HSC / A-Level Completed (Bachelor's Aspirant)">
              HSC / A-Level Completed (Bachelor's)
            </option>
            <option value="Bachelor's Graduate (Master's Aspirant)">
              Bachelor's Graduate (Master's)
            </option>
            <option value="Diploma / Polytechnic Holder">Diploma / Polytechnic Graduate</option>
            <option value="Working Professional (SSW / Job Seeker / Language)">
              Working Professional (SSW / Job Seeker / Language)
            </option>
            <option value="Parent for Kids English Course">
              Parent inquiring for Kids English
            </option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="reg-office" className={label}>
            Preferred Office / Meeting Mode
          </label>
          <select id="reg-office" value={form.office} onChange={set("office")} className={field}>
            {officeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-email" className={label}>
            Email Address (Optional)
          </label>
          <input
            id="reg-email"
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="e.g. name@example.com"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="reg-msg" className={label}>
            Specific Questions / Notes (Optional)
          </label>
          <textarea
            id="reg-msg"
            rows={1}
            value={form.message}
            onChange={set("message")}
            placeholder="Target intake (April, July, October), background, etc."
            className={field}
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-luxury-primary w-full text-xs py-3.5 mt-2 justify-center shadow-lg hover:shadow-sky-600/30 cursor-pointer font-bold"
      >
        <span>Book Free Appointment</span>
        <span>→</span>
      </button>

      <p className="text-center text-[0.7rem] text-slate-600">
        🔒 100% Privacy Guaranteed · AcademiaZ · Kadirganj Campus & Japan Direct Oversight
      </p>
    </form>
  );
}
