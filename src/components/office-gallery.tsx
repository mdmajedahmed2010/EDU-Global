import { FbReel } from "@/components/fb-reel";
import { company, verifiedFacebookReels } from "@/lib/site-data";
import { IconSparkles, IconWhatsApp, IconPhone } from "@/components/ui-blocks";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function OfficeGallery() {
  return (
    <div className="space-y-12">
      {/* Verified Official Facebook Video Reels with Stagger */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-bold text-red-700">
              <IconSparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Official Video Evidence</span>
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 mt-1">
              Finland Education Expo & Student Feedback Reels
            </h3>
          </div>
          <a
            href={company.social.facebookVideos}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
          >
            <span>View All on Facebook</span>
            <span>↗</span>
          </a>
        </div>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto"
        >
          {verifiedFacebookReels.map((reel) => (
            <StaggerItem key={reel.id}>
              <FbReel
                title={reel.title}
                reelUrl={reel.reelUrl}
                embedUrl={reel.embedUrl}
                category={reel.category}
                badge={reel.badge}
                posterUrl={reel.posterUrl}
                views={reel.views}
                duration={reel.duration}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Corporate Hub: Sylhet Headquarters & Finland Admissions Desk */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Sylhet Corporate Office Card & Map */}
        <SlideIn direction="left" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-bold text-red-700">
                <span>🏢</span>
                <span>Sylhet Corporate Office</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                425 Rang Mohol Tower (Lift: 3), Bandar Bazar
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visit our headquarters for 100% free document assessment, IELTS and Spoken English
                diagnostic tests, and in-person guidance for Finland, Canada, the USA, the UK, and
                Europe.
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p>
                  <strong>📍 Address:</strong> {company.sylhetOffice.full}
                </p>
                <p>
                  <strong>🕒 Hours:</strong> {company.hours}
                </p>
                <p>
                  <strong>📞 Hotlines:</strong> 01772-063911 (WhatsApp) · 01925-772171
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 aspect-[16/9] w-full">
              <iframe
                src={company.mapsEmbed}
                title="RANS Scholarships Sylhet Office"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello RANS Scholarships! I would like to visit your Sylhet Rang Mohol Tower office for 100% Free File Opening.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald text-xs py-2.5 px-4 shadow-sm active:scale-95"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Sylhet Desk</span>
              </a>
              <a
                href="tel:01772063911"
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-red-600" />
                <span>01772-063911</span>
              </a>
            </div>
          </div>
        </SlideIn>

        {/* Finland Jan 2027 Intake & Expo Spotlight */}
        <SlideIn direction="right" distance={45} className="h-full">
          <div className="rounded-3xl border border-blue-200 bg-linear-to-br from-blue-50/50 via-white to-sky-50/40 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 border border-blue-200 px-3 py-1 text-xs font-bold text-[#043E8B]">
                <span>🇫🇮</span>
                <span>Specialized Study Abroad Desk</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                Finland January 2027 Joint Application
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                As showcased in the 2-day Finland Education Expo at Hotel Nirvana Inn, Sylhet, RANS
                Scholarships is your direct gateway to Finnish Universities of Applied Sciences with
                rolling admissions and family relocation benefits.
              </p>
              <div className="text-xs text-slate-700 space-y-2 border-t border-slate-100 pt-3">
                <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                  <strong className="text-[#043E8B] block">Key Application Highlights:</strong>
                  <ul className="space-y-1 text-[0.72rem] text-slate-600">
                    <li>• Joint Application: 31 August to 10 September 2026</li>
                    <li>• Rolling Admissions with No Entrance Exam options</li>
                    <li>• Spouse full work rights & child free education</li>
                    <li>• 100% Free File Opening Charge</li>
                  </ul>
                </div>
                <p>
                  <strong>🏛️ Accreditations:</strong> Member of FECAS & FACD-CAB
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello RANS Scholarships! I am interested in applying for the Finland January 2027 intake. Please evaluate my profile.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-primary text-xs py-2.5 px-4 active:scale-95 text-white"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Apply for Finland January 2027</span>
              </a>
              <a
                href="tel:01925772171"
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-blue-600" />
                <span>01925-772171</span>
              </a>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  );
}
