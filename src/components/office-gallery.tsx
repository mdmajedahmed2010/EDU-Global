import { company } from "@/lib/site-data";
import { IconWhatsApp, IconPhone } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";

export function OfficeGallery() {
  return (
    <div className="space-y-8">
      {/* Corporate Hubs: Rajshahi Campus & Japan Direct Oversight Desk */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Rajshahi Corporate Campus Card & Map */}
        <SlideIn direction="left" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-sky-400 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-bold text-sky-700">
                <span>🏢</span>
                <span>Rajshahi Campus</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                Kadirganj, Greater Road (Lane beside Ma Photostat)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visit our modern language academy and consultancy center in Rajshahi for free profile evaluations,
                Japanese language placement tests, IELTS mock interviews, and authentic Japan visa guidance.
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
                title="AcademiaZ Rajshahi Campus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello AcademiaZ! I would like to visit your Kadirganj, Rajshahi campus for a free counseling session.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald text-xs py-2.5 px-4 shadow-sm active:scale-95"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Rajshahi Desk</span>
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

        {/* Japan-Based Direct Management & Support Spotlight */}
        <SlideIn direction="right" distance={45} className="h-full">
          <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50/50 via-white to-amber-50/40 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-sky-400 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-800">
                <span>🇯🇵</span>
                <span>Japan-Based Direct Management (জাপান থেকে পরিচালিত)</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                100% Japan Standard & Direct Oversight
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                AcademiaZ is directly managed and supervised from Japan. This unique advantage guarantees
                genuine Japanese pedagogy, verified curriculum for JLPT N5/N4, direct liaison with Japanese schools,
                and seamless post-arrival care.
              </p>
              <div className="text-xs text-slate-700 space-y-2 border-t border-slate-100 pt-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                  <strong className="text-sky-800 block text-xs">Flagship Programs & Features:</strong>
                  <ul className="space-y-1 text-[0.73rem] text-slate-600">
                    <li>• <strong>Japanese Language (N5 & N4):</strong> JLPT, NAT-TEST & JFT-Basic preparation</li>
                    <li>• <strong>Japan Student Visa & COE:</strong> 100% genuine documentation & visa filing support</li>
                    <li>• <strong>TITP & SSW (Work Visa):</strong> Technical internship & skill test coaching</li>
                    <li>• <strong>IELTS Academic & General:</strong> Target Band 7.5+ with Cambridge test modules</li>
                    <li>• <strong>Spoken & Kids English (Ages 5–14):</strong> Communicative phonics & fluency training</li>
                    <li>• <strong>Authentic Mentorship:</strong> Guidance directly from professionals residing in Japan</li>
                  </ul>
                </div>
                <p>
                  <strong>✨ Official Tagline:</strong> "Learn · Grow · Achieve — Your Gateway to Japan"
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello AcademiaZ! I want to enroll in the Japanese N5/N4 batch / IELTS batch in Rajshahi. Please guide me.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-primary text-xs py-2.5 px-4 active:scale-95 text-white"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Enroll in Next Batch</span>
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
