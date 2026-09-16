import { useState } from "react";
import { company, destinations } from "@/lib/site-data";

const field =
  "w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all hover:bg-white focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/10";
const label = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700";

const serviceOptions = [
  "Study Abroad Consultation (UK, USA, Australia, Hungary, Canada, etc.)",
  "IELTS Academic & General (100% Cash Back on Visa Success)",
  "Opportunity to Move with Family (Spouse & Dependent Visa Support)",
  "Long Study Gap Application Support (Accepted 7–10+ Years)",
  "Low Tuition University Admissions & Scholarships",
  "Spoken English & Communication Fluency",
  "Kids' English Academy (Ages 5–14)",
  "English Grammar & Writing Foundation",
];

const officeOptions = [
  "Dhaka Head Office (House 23, Road 2, Sector 3, Uttara, Dhaka - 1230)",
  "UK Office (3A Westburn Road, Glasgow, UK)",
  "Online Consultation (WhatsApp / Phone Call / Zoom)",
];

export function RegisterForm({ onDone }: { onDone?: () => void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Study Abroad Consultation (UK, USA, Australia, Hungary, Canada, etc.)",
    destination: "United Kingdom (UK)",
    currentStatus: "HSC / A-Level Completed (Bachelor's Aspirant)",
    office: "Dhaka Head Office (House 23, Road 2, Sector 3, Uttara, Dhaka - 1230)",
    message: "",
  });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const whatsappHref = () => {
    const lines = [
      "✨ Free Consultation Request — Higher Study Counselors Bangladesh",
      `👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      form.email ? `✉️ Email: ${form.email}` : "",
      `🎯 Interested Service: ${form.service}`,
      `🌍 Target Destination: ${form.destination}`,
      `🎓 Status/Background: ${form.currentStatus}`,
      `🏢 Preferred Office/Mode: ${form.office}`,
      form.message ? `📝 Notes: ${form.message}` : "",
      "\nI would like to schedule a free counseling session with Higher Study Counselors Bangladesh.",
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
        <h3 className="font-display text-2xl font-black text-slate-900">Appointment Requested! 🎉</h3>
        <p className="mx-auto max-w-md text-sm text-slate-600 leading-relaxed">
          Thank you, <strong className="text-slate-900">{form.name}</strong>! Your consultation request has been registered. An expert counselor from <strong>{company.name}</strong> will contact you on{" "}
          <strong className="text-emerald-700">{form.phone}</strong> shortly.
        </p>
        <div className="mt-2 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-xs text-emerald-800 text-left space-y-1">
          <p>✔ House 23, Road 2, 1st Floor, Sector 3, Uttara, Dhaka - 1230</p>
          <p>✔ 3A Westburn Road, Glasgow, UK</p>
          <p>✔ 100% IELTS Cash Back on Successful Visa Grant</p>
          <p>✔ Opportunity to Move with Family & Long Study Gap Accepted</p>
        </div>
        <div className="pt-2 flex flex-col gap-2">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="btn-emerald text-xs py-3 justify-center shadow-md"
          >
            💬 Open WhatsApp Chat with HSC BD Counselor
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
        <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-amber-600">
          Higher Study Counselors Bangladesh · Since 2012
        </span>
        <h3 className="font-display text-xl font-black text-slate-900">
          Book Your Free Assessment & Profile Evaluation
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Sector 3, Uttara, Dhaka & Glasgow, UK · 100% IELTS Cash Back On Visa Success
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
        🔒 100% Privacy Guaranteed · Higher Study Counselors Bangladesh · Uttara, Dhaka & Glasgow, UK
      </p>
    </form>
  );
}
