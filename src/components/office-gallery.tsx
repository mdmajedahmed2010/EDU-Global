import { company } from "@/lib/site-data";
import { IconSparkles, IconWhatsApp, IconPhone } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";

export function OfficeGallery() {
  return (
    <div className="space-y-8">

      {/* Corporate Hub: Chattogram Headquarters & Germany / European Admissions Desk */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Chattogram Corporate Office Card & Map */}
        <SlideIn direction="left" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-bold text-red-700">
                <span>🏢</span>
                <span>Chattogram Corporate Hub</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                Commerce View Complex (4th Floor), CDA Avenue
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visit our central campus for free document assessment, German / Danish language placement
                diagnostics, IELTS mock interviews, and personalized admission counseling.
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p>
                  <strong>📍 Address:</strong> {company.offices.headquarters.address}
                </p>
                <p>
                  <strong>🕒 Hours:</strong> {company.hours}
                </p>
                <p>
                  <strong>📞 Hotlines:</strong> {company.phones[0]} (WhatsApp) · {company.phones[1]}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 aspect-[16/9] w-full">
              <iframe
                src={company.mapsEmbed}
                title="AB STUDY HUB Chattogram Office"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello AB STUDY HUB! I would like to visit your Chattogram office at Commerce View Complex for counseling.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald text-xs py-2.5 px-4 shadow-sm active:scale-95"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Chattogram Desk</span>
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-red-600" />
                <span>{company.phones[0]}</span>
              </a>
            </div>
          </div>
        </SlideIn>

        {/* Tuition-Free Germany & European Admissions Spotlight */}
        <SlideIn direction="right" distance={45} className="h-full">
          <div className="rounded-3xl border border-red-200 bg-gradient-to-br from-red-50/40 via-white to-amber-50/30 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 border border-red-200 px-3 py-1 text-xs font-bold text-red-700">
                <span>🇩🇪</span>
                <span>Flagship Study Abroad Track</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                Tuition-Free Germany & European Admissions
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                AB STUDY HUB is Chattogram's premier destination for German public university admissions,
                APS documentation, blocked account setups, and Goethe-Institut German language preparation (A1–B2).
              </p>
              <div className="text-xs text-slate-700 space-y-2 border-t border-slate-100 pt-3">
                <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                  <strong className="text-red-700 block">Flagship Offerings:</strong>
                  <ul className="space-y-1 text-[0.72rem] text-slate-600">
                    <li>• German Language Course: A1, A2, B1, B2 (10–12 Students / Batch)</li>
                    <li>• Danish Language Course for Denmark Higher Education & Work</li>
                    <li>• Tuition-Free Public Universities in Germany</li>
                    <li>• IELTS Private Batch with 1-on-1 Speaking Tests (Target 7.5+)</li>
                  </ul>
                </div>
                <p>
                  <strong>📍 Location:</strong> East Nasirabad, Panchlaish, Chattogram
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello AB STUDY HUB! I want to apply for Germany / enroll in German language course. Please evaluate my profile.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-primary text-xs py-2.5 px-4 active:scale-95 text-white"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Apply for Germany & Language Batch</span>
              </a>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-red-600" />
                <span>{company.phones[1]}</span>
              </a>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  );
}
