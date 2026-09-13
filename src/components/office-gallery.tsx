import { company } from "@/lib/site-data";
import { IconSparkles, IconWhatsApp, IconPhone } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";

export function OfficeGallery() {
  return (
    <div className="space-y-8">
      {/* Corporate Hubs: Jashore Headquarters & Tokyo Japan Liaison Desk */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Jashore Corporate Campus Card & Map */}
        <SlideIn direction="left" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-sky-400 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-bold text-sky-700">
                <span>🏢</span>
                <span>Jashore Central Campus (HQ)</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                Nowrin Tower (3rd Floor), East Side of Laldighi
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visit our premier language training center in Jashore for free document evaluation,
                Japanese & German placement tests, IELTS mock interviews, and personalized visa counseling.
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p>
                  <strong>📍 Address:</strong> {company.address.full}
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
                title="Nexus Global Jashore Headquarters"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello Nexus Global! I would like to visit your Jashore office at Nowrin Tower, Laldighi for counseling.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald text-xs py-2.5 px-4 shadow-sm active:scale-95"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Jashore Desk</span>
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-sky-600" />
                <span>{company.phones[0]}</span>
              </a>
            </div>
          </div>
        </SlideIn>

        {/* Tokyo Japan Branch & International Support Spotlight */}
        <SlideIn direction="right" distance={45} className="h-full">
          <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50/50 via-white to-orange-50/40 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-sky-400 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 border border-orange-200 px-3 py-1 text-xs font-bold text-orange-800">
                <span>🇯🇵</span>
                <span>Tokyo Liaison Branch (Japan Desk)</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                Nexus Group, Shin-Koiwa, Tokyo, Japan
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unlike traditional agencies, Nexus Global maintains an active international liaison presence
                directly in Tokyo. We assist arriving students with reception, accommodation, school coordination,
                and part-time job guidance.
              </p>
              <div className="text-xs text-slate-700 space-y-2 border-t border-slate-100 pt-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                  <strong className="text-sky-800 block text-xs">Flagship Programs & Perks:</strong>
                  <ul className="space-y-1 text-[0.73rem] text-slate-600">
                    <li>• <strong>Japanese Language (N5/N4):</strong> 3 Months, 6 Days/Wk, Free Books & Tokyo Support</li>
                    <li>• <strong>German Language (A1 Goethe):</strong> 3 Months, 5 Days/Wk, Free Ausbildung Guidance</li>
                    <li>• <strong>IELTS Preparation:</strong> Target Band 7.5+ with Cambridge Mock Tests</li>
                    <li>• <strong>Spoken & Kids English:</strong> Fluency and phonetics for school & adults</li>
                    <li>• <strong>Special Care:</strong> Free extra classes post-course without any additional fees</li>
                  </ul>
                </div>
                <p>
                  <strong>📞 Tokyo Helpline:</strong> {company.tokyoPhone}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello Nexus Global! I want to enroll in the Japanese N5 batch / German A1 batch. Please guide me.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-primary text-xs py-2.5 px-4 active:scale-95 text-white"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Enroll in Language Batch</span>
              </a>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-sky-600" />
                <span>{company.phones[1]}</span>
              </a>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  );
}
