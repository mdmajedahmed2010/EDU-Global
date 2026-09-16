import { company } from "@/lib/site-data";
import { IconWhatsApp, IconPhone } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";

export function OfficeGallery() {
  return (
    <div className="space-y-8">
      {/* Campus Hubs: Kushtia Campus & Modern Audio Lab Facility */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Kushtia Campus Card & Map */}
        <SlideIn direction="left" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-amber-400 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-700">
                <span>🏢</span>
                <span>Kushtia Campus</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                169/4, Mahatab Uddin Road, Old Kataikhana More, Kushtia
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                কুষ্টিয়ায় আমাদের আধুনিক ক্যাম্পাসে এসে সরাসরি অভিজ্ঞ ইন্সট্রাক্টরদের সাথে কথা বলুন। ফ্রি প্রোফাইল মূল্যায়ন, লেভেল এসেসমেন্ট টেস্ট এবং মাত্র ৩০০ টাকায় কম্পিউটার-ভিত্তিক মক টেস্ট সম্পন্ন করুন।
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p>
                  <strong>📍 Address:</strong> {company.address.full}
                </p>
                <p>
                  <strong>🕒 Hours:</strong> {company.hours}
                </p>
                <p>
                  <strong>📞 Hotlines:</strong> {company.phones[0]} (Call / WhatsApp) · {company.phones[1]}
                </p>
                <p>
                  <strong>✉️ Email:</strong> {company.email}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 aspect-[16/9] w-full">
              <iframe
                src={company.mapsEmbed}
                title="Kushtia IELTS Care Campus Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello Kushtia IELTS Care! I would like to visit your Old Kataikhana More campus in Kushtia for a free counseling session.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald text-xs py-2.5 px-4 shadow-sm active:scale-95"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Kushtia Desk</span>
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

        {/* Modern Audio Lab & European Track Spotlight */}
        <SlideIn direction="right" distance={45} className="h-full">
          <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50/40 via-white to-blue-50/40 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-amber-400 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-900">
                <span>🎧</span>
                <span>Modern Audio Lab & Individual Headset Setup</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                আন্তর্জাতিক মানের প্রস্তুতি ও শতভাগ যত্ন
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kushtia IELTS Care শিক্ষার্থীদের জন্য নিশ্চিত করেছে পৃথক হেডসেট সম্বলিত সাউন্ড ল্যাব, কম্পিউটার ল্যাব এবং শান্ত শিক্ষার পরিবেশ। প্রতিটি শিক্ষার্থীর দুর্বলতা চিহ্নিত করে সর্বোচ্চ স্কোর নিশ্চিত করা হয়।
              </p>
              <div className="text-xs text-slate-700 space-y-2 border-t border-slate-100 pt-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                  <strong className="text-[#092552] block text-xs">Flagship Programs & Facilities:</strong>
                  <ul className="space-y-1 text-[0.73rem] text-slate-600">
                    <li>• <strong>IELTS Preparation (Academic & General):</strong> কেমব্রিজ স্ট্যান্ডার্ডে নিবিড় ক্লাস</li>
                    <li>• <strong>300 BDT Mock Tests:</strong> রিয়েল এক্সাম কম্পিউটার ও পেপার টেস্ট এবং স্কোর কার্ড</li>
                    <li>• <strong>Spoken English:</strong> নিয়মিত ওয়ান-টু-ওয়ান স্পিকিং সেশন ও ফ্লুয়েন্সি ট্রেইনিং</li>
                    <li>• <strong>Kids English Academy:</strong> শিশুদের উপযোগী আনন্দময় পরিবেশ ও সঠিক উচ্চারণ</li>
                    <li>• <strong>Study in Portugal & Europe:</strong> অফার লেটার, ভিসা ফাইল ও এম্বাসি কাউন্সেলিং</li>
                    <li>• <strong>Expert Mentorship:</strong> কুষ্টিয়ায় আন্তর্জাতিক মানের অভিজ্ঞ মেন্টর টিম</li>
                  </ul>
                </div>
                <p>
                  <strong>✨ Official Slogan:</strong> "Your Trusted Partner in IELTS Success! — a great place to learn"
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello Kushtia IELTS Care! I want to enroll in the IELTS batch / book a 300 BDT mock test slot. Please guide me.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-primary text-xs py-2.5 px-4 active:scale-95 text-slate-950 font-bold bg-amber-500 hover:bg-amber-400"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Book Mock / Next Batch</span>
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
