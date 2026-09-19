import { useState } from "react";
import { company, destinations } from "@/lib/site-data";

const field =
  "w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all hover:bg-white focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/10";
const label = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700";

const serviceOptions = [
  "Study Abroad Consultation (UK, Europe, USA, Canada, Australia, etc.)",
  "Free Bank Support Offer (First 20 Students for Cyprus & Europe)",
  "Study Gap & Low CGPA Support (Gap up to 10+ yrs & CGPA 2.5+)",
  "Study Abroad Without IELTS / MOI Pathway",
  "IELTS Academic & General Preparation (Band 7.5+)",
  "Spoken English & Communication Fluency",
  "Kids' English & Phonics Academy (Ages 5–14)",
  "Japanese Language Course (JLPT N5/N4)",
];

const officeOptions = [
  "Dhanmondi Head Office (Keari Plaza, 4th Floor, Road 8/A, Satmasjid Road)",
  "Online Consultation (WhatsApp / Phone Call / Zoom)",
];

export function RegisterForm({ onDone }: { onDone?: () => void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Study Abroad Consultation (UK, Europe, USA, Canada, Australia, etc.)",
    destination: "United Kingdom (UK)",
    currentStatus: "HSC / A-Level Completed (Bachelor's Aspirant)",
    office: "Dhanmondi Head Office (Keari Plaza, 4th Floor, Road 8/A, Satmasjid Road)",
    message: "",
  });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const whatsappHref = () => {
    const lines = [
      "✨ Free Consultation Request — EDU Global",
      `👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      form.email ? `✉️ Email: ${form.email}` : "",
      `🎯 Interested Service: ${form.service}`,
      `🌍 Target Destination: ${form.destination}`,
      `🎓 Status/Background: ${form.currentStatus}`,
      `🏢 Preferred Office/Mode: ${form.office}`,
      form.message ? `📝 Notes: ${form.message}` : "",
      "\nI would like to schedule a free counseling session with EDU Global.",
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
          <p>✔ Keari Plaza, 4th Floor (Lift-3), Road 8/A, Satmasjid Road, Dhanmondi, Dhaka</p>
          <p>✔ 100% Admission Guidance & Direct University Partnerships</p>
          <p>✔ Free Bank Support for First 20 Students (Cyprus & Europe)</p>
          <p>✔ Study Gap up to 10+ Years & Low CGPA 2.5+ Accepted</p>
        </div>
        <div className="pt-2 flex flex-col gap-2">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="btn-emerald text-xs py-3 justify-center shadow-md"
          >
            💬 Open WhatsApp Chat with EDU Global Counselor
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
        <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-emerald-600">
          EDU Global (ইডিইউ গ্লোবাল)
        </span>
        <h3 className="font-display text-xl font-black text-slate-900">
          Book Your Free Assessment & Profile Evaluation
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Keari Plaza, 4th Floor, Satmasjid Road, Dhanmondi · Free Bank Support & Admissions
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
            placeholder="e.g. 01901-XXXXXX"
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
            <option value="Language Course (IELTS / Spoken / Kids / Japanese)">
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
            <option value="Working Professional (Study Gap / Career)">
              Working Professional (Study Gap / Career)
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
            placeholder="Target intake, background, study gap details, etc."
            className={field}
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-luxury-primary w-full text-xs py-3.5 mt-2 justify-center shadow-lg hover:shadow-emerald-600/30 cursor-pointer font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950"
      >
        <span>Book Free Appointment</span>
        <span>→</span>
      </button>

      <p className="text-center text-[0.7rem] text-slate-600">
        🔒 100% Privacy Guaranteed · EDU Global · Keari Plaza, Dhanmondi, Dhaka
      </p>
    </form>
  );
}
