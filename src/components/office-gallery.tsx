import { company } from "@/lib/site-data";
import { IconWhatsApp, IconPhone } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";

export function OfficeGallery() {
  return (
    <div className="space-y-8">
      {/* Dual Offices: Dhaka Head Office & Glasgow UK International Office */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Dhaka Head Office Card & Map */}
        <SlideIn direction="left" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-amber-400 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-700">
                <span>🏢</span>
                <span>Dhaka Head Office (Uttara)</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                House 23, Road 2, 1st Floor, Sector 3, Uttara, Dhaka - 1230
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                উত্তরায় আমাদের প্রধান কার্যালয়ে সরাসরি এসে অভিজ্ঞ সিনিয়র কাউন্সেলরদের সাথে বসুন। ফ্রি প্রোফাইল মূল্যায়ন, ভিসা ফাইল এসেসমেন্ট, এবং আইইএলটিএস কোর্সের সাথে ১০০% ক্যাশব্যাক অফার নিশ্চিত করুন।
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p>
                  <strong>📍 Address:</strong> {company.address.full}
                </p>
                <p>
                  <strong>🕒 Hours:</strong> {company.hours}
                </p>
                <p>
                  <strong>📞 Hotlines:</strong> {company.phones[0]} (WhatsApp) · {company.phones[1]} · {company.phones[2]} · {company.phones[3]}
                </p>
                <p>
                  <strong>✉️ Email:</strong> {company.email}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 aspect-[16/9] w-full">
              <iframe
                src={company.mapsEmbed}
                title="Higher Study Counselors Bangladesh Uttara HQ Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello Higher Study Counselors Bangladesh! I would like to visit your Uttara Sector 3 office in Dhaka for a free counseling session.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald text-xs py-2.5 px-4 shadow-sm active:scale-95"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Dhaka Desk</span>
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-amber-600" />
                <span>{company.phones[0]}</span>
              </a>
            </div>
          </div>
        </SlideIn>

        {/* Glasgow UK Office & Core Advantages */}
        <SlideIn direction="right" distance={45} className="h-full">
          <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50/40 via-white to-blue-50/40 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-amber-400 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-900">
                <span>🇬🇧</span>
                <span>United Kingdom International Office</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                3A Westburn Road, Glasgow, United Kingdom
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                যুক্তরাজ্যে নিজস্ব স্থায়ী কার্যালয় থাকার সুবাদে যুক্তরাজ্যে আগমন, এয়ারপোর্ট পিকআপ, স্থায়ী আবাসন ও পার্ট-টাইম কাজের পূর্ণাঙ্গ দিকনির্দেশনা প্রদান করে HSC BD টিম।
              </p>
              <div className="text-xs text-slate-700 space-y-2 border-t border-slate-100 pt-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                  <strong className="text-[#161B38] block text-xs">Official Commitments & USPs:</strong>
                  <ul className="space-y-1 text-[0.73rem] text-slate-600">
                    <li>• <strong>IELTS Cash Back On Visa Success:</strong> ভিসা হলেই আইইএলটিএস ফি ১০০% ফেরত</li>
                    <li>• <strong>Opportunity To Move With Family:</strong> স্পাউস ও সন্তানসহ বিদেশে যাওয়ার সুবিধা</li>
                    <li>• <strong>Long Study Gap Accepted:</strong> দীর্ঘ শিক্ষাবিরতি থাকলেও উচ্চশিক্ষার সুযোগ</li>
                    <li>• <strong>Part Time Job In UK & Abroad:</strong> পড়াশোনার পাশাপাশি বৈধ পার্ট-টাইম কাজ</li>
                    <li>• <strong>Low Tuition Fees University:</strong> সাশ্রয়ী টিউশন ফি ও কিস্তিতে পরিশোধের সুযোগ</li>
                    <li>• <strong>Financial Advice & Guidance:</strong> ব্যাংক সলভেন্সি ও ফান্ড স্পন্সরশিপের সঠিক গাইডলাইন</li>
                  </ul>
                </div>
                <p>
                  <strong>✨ Official Trust:</strong> "Higher Study Counselors Bangladesh — Since 2012 | www.hscbd.co.uk"
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello Higher Study Counselors Bangladesh! I want to consult about UK & international study admission and IELTS cashback offer.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-primary text-xs py-2.5 px-4 active:scale-95 text-slate-950 font-bold bg-amber-500 hover:bg-amber-400"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Consult UK Specialist</span>
              </a>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-amber-600" />
                <span>{company.phones[1]}</span>
              </a>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  );
}
