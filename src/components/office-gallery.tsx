import { company } from "@/lib/site-data";
import { IconWhatsApp, IconPhone } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";

export function OfficeGallery() {
  return (
    <div className="space-y-8">
      {/* Central Hub: Dhanmondi Head Office & Special Wings */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Dhanmondi Head Office Card & Map */}
        <SlideIn direction="left" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-emerald-500 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-800">
                <span>🏢</span>
                <span>Dhaka Head Office (Dhanmondi)</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi R/A, Dhaka - 1209
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                ধানমন্ডি সাতমসজিদ রোডের প্রাণকেন্দ্রে (ইউনিমার্টের বিপরীতে কেয়ারি প্লাজায়) আমাদের প্রধান কার্যালয়ে সরাসরি এসে অভিজ্ঞ সিনিয়র কনসালট্যান্টদের সাথে বসুন। ফ্রি প্রোফাইল মূল্যায়ন, ইউরোপীয় ইউনিয়নের জন্য ফ্রি ব্যাংক সাপোর্ট সুবিধা এবং সঠিক বিশ্ববিদ্যালয় নির্বাচন নিশ্চিত করুন।
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p>
                  <strong>📍 Landmark:</strong> Opposite Unimart, Old 15 Bus Stand
                </p>
                <p>
                  <strong>🕒 Hours:</strong> {company.hours}
                </p>
                <p>
                  <strong>📞 Hotlines:</strong> {company.phones[0]} (WhatsApp) · {company.phones[1]}
                </p>
                <p>
                  <strong>✉️ Emails:</strong> {company.email} · {company.emails[1]}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 aspect-[16/9] w-full">
              <iframe
                src={company.mapsEmbed}
                title="EDU Global Dhanmondi HQ Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello EDU Global! I would like to visit your Dhanmondi office in Dhaka for a free counseling session.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald text-xs py-2.5 px-4 shadow-sm active:scale-95"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Dhanmondi Desk</span>
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{company.phones[0]}</span>
              </a>
            </div>
          </div>
        </SlideIn>

        {/* EDU Global Special Wings & Core Commitments */}
        <SlideIn direction="right" distance={45} className="h-full">
          <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50/40 via-white to-blue-50/40 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-emerald-500 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-900">
                <span>🎓</span>
                <span>Language Academy & Special Desks</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                Admissions, Language Coaching & Financial Guidance
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                উচ্চশিক্ষার আবেদন থেকে শুরু করে IELTS প্রস্তুতি, স্পোকেন ইংলিশ, কিডস ইংলিশ এবং জাপানিজ ভাষা কোর্স—সবকিছুই এক ছাদের নিচে পরিচালনা করে EDU Global টিম।
              </p>
              <div className="text-xs text-slate-700 space-y-2 border-t border-slate-100 pt-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                  <strong className="text-[#0c1f17] block text-xs">Official Commitments & Pillars:</strong>
                  <ul className="space-y-1 text-[0.73rem] text-slate-600">
                    <li>• <strong>100% Admission Guidance:</strong> Canterbury Christ Church University UK ও ইউরোপের শীর্ষ প্রতিষ্ঠানে ভর্তি</li>
                    <li>• <strong>Free Bank Support Offer:</strong> সাইপ্রাস ও ইউরোপের প্রথম ২০ জন শিক্ষার্থীর জন্য বিশেষ ব্যাংক সাপোর্ট</li>
                    <li>• <strong>Study Gap & Low CGPA Accepted:</strong> দীর্ঘ শিক্ষাবিরতি এবং CGPA 2.5+ নিয়েও বিশ্ববিদ্যালয়ে ভর্তির সুযোগ</li>
                    <li>• <strong>Study Abroad Without IELTS:</strong> MOI (Medium of Instruction) ও ডুওলিঙ্গো গ্রহণকারী বিশ্ববিদ্যালয়</li>
                    <li>• <strong>Language Academy:</strong> IELTS (7.5+), Spoken English Fluency, Kids English & Phonics, এবং জাপানিজ কোর্স</li>
                    <li>• <strong>Prime Dhanmondi Center:</strong> সাতমসজিদ রোডে সুপরিসর কাউন্সেলিং ও আধুনিক ক্লাসরুম সুবিধা</li>
                  </ul>
                </div>
                <p>
                  <strong>✨ Official Trust:</strong> "EDU Global — One stop Solution to Your Journey of Higher Education | @edugbl"
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello EDU Global! I want to consult about university admissions, Free Bank Support, and language courses.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-primary text-xs py-2.5 px-4 active:scale-95 text-slate-950 font-bold bg-emerald-500 hover:bg-emerald-400"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Consult Senior Counselor</span>
              </a>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{company.phones[1]}</span>
              </a>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  );
}
