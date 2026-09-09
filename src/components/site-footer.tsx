import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import { company } from "@/lib/site-data";
import { useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { IconPhone, IconWhatsApp } from "@/components/ui-blocks";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#043E8B] text-white pt-16 pb-24 md:pb-16 text-xs relative overflow-hidden">
      {/* Subtle Blueprint Radial Pattern */}
      <div className="absolute inset-0 bg-blueprint-radial opacity-30 pointer-events-none" />

      <div className="section-shell relative z-10">
        {/* Main 3-Column Footer Grid */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.8fr_1.1fr] gap-10 lg:gap-14 pb-14 border-b border-blue-400/20"
        >
          {/* Column 1: Brand Info & Newsletter Subscription */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-6">
              <Link to="/" className="inline-flex items-center gap-3">
                <BrandLogo size={48} withText textClassName="flex text-white" variant="dark" />
              </Link>

              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-md font-medium">
                Empowering students in Bangladesh with transparent study abroad guidance and
                scholarship assistance since 2017. Specializing in Finland (January 2027 intake),
                Europe, Canada, the UK & USA with 100% Free File Opening.
              </p>

              {/* Newsletter Subscription Box */}
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md max-w-md">
                <div className="text-sm font-bold text-white mb-1">
                  Stay Updated on Scholarships & Intakes
                </div>
                <p className="text-[0.73rem] text-blue-100/80 mb-3.5">
                  Subscribe for early notifications on Finland Joint Applications, IELTS mock exams,
                  and European scholarship deadlines.
                </p>

                {subscribed ? (
                  <div className="rounded-xl bg-emerald-500/20 border border-emerald-400/40 p-2.5 text-center text-xs font-bold text-emerald-200">
                    ✓ Thank you! You are subscribed to RANS Scholarships updates.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 rounded-xl border border-white/20 bg-black/20 px-3.5 py-2.5 text-xs text-white placeholder:text-blue-200/50 outline-none focus:border-white focus:ring-1 focus:ring-white/30"
                    />
                    <button
                      type="submit"
                      className="rounded-xl bg-red-600 hover:bg-red-700 px-4 py-2.5 text-xs font-bold text-white shadow-md transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                    >
                      <span>Subscribe</span>
                      <span>→</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </StaggerItem>

          {/* Column 2: Quick Links */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-4">
              <div className="text-sm font-bold text-white tracking-wide uppercase">
                Quick Navigation
              </div>
              <ul className="space-y-2.5 text-xs text-blue-100/90 font-medium">
                <li>
                  <Link
                    to="/"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-400">›</span>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-400">›</span>
                    <span>About RANS Scholarships</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-400">›</span>
                    <span>100% Free File Opening</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/destinations"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-400">›</span>
                    <span>Study in Finland 🇫🇮 (Jan 2027)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-400">›</span>
                    <span>IELTS Academy (Band 7.5+ Target)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-400">›</span>
                    <span>Spoken English & Kids English</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/videos"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-400">›</span>
                    <span>Official Reels & Expo Videos</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/offers"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-400">›</span>
                    <span>Special Offers & Intakes</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-400">›</span>
                    <span>Contact Our Sylhet Office</span>
                  </Link>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Column 3: Contact & Sylhet Corporate Office */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-4">
              <div className="text-sm font-bold text-white tracking-wide uppercase">
                Corporate Office & Contact
              </div>
              <div className="space-y-3.5 text-xs text-blue-100/90 font-medium">
                {/* Sylhet Address */}
                <div className="flex items-start gap-2.5">
                  <span className="text-red-400 text-sm mt-0.5">📍</span>
                  <div>
                    <strong className="text-white block">RANS Scholarships Sylhet:</strong>
                    <span>
                      425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet-3100, Bangladesh
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-300 text-sm mt-0.5">🕒</span>
                  <div>
                    <strong className="text-white block">Office Hours:</strong>
                    <span>Saturday – Thursday: 10:00 AM – 7:30 PM (Friday Closed)</span>
                  </div>
                </div>

                {/* Hotlines */}
                <div className="flex items-start gap-2.5">
                  <IconPhone className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <div>
                      <a href="tel:01772063911" className="hover:text-white font-bold text-white">
                        01772-063911
                      </a>{" "}
                      /{" "}
                      <a href="tel:01925772171" className="hover:text-white font-bold text-white">
                        01925-772171
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-300 font-bold">
                      <IconWhatsApp className="w-3.5 h-3.5 text-emerald-400" />
                      <a
                        href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        WhatsApp: {company.whatsappFormatted}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2.5">
                  <span className="text-red-400 text-sm mt-0.5">✉</span>
                  <a href={`mailto:${company.email}`} className="hover:text-white font-semibold">
                    {company.email}
                  </a>
                </div>

                {/* Social Media Links */}
                <div className="pt-2">
                  <div className="text-xs font-bold text-white mb-2 uppercase tracking-wider">
                    Official Channels
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={company.social.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label="Facebook"
                    >
                      FB
                    </a>
                    <a
                      href={company.social.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label="Instagram"
                    >
                      IG
                    </a>
                    <a
                      href={company.social.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      IN
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Accreditations & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.73rem] text-blue-200/80">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-semibold text-white">Recognized & Accredited:</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-white border border-white/10 font-bold">
              Member of FECAS
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-white border border-white/10 font-bold">
              Member of FACD-CAB
            </span>
            <span className="rounded-full bg-amber-400/20 px-3 py-1 text-amber-200 border border-amber-400/30 font-bold">
              10 Year's Experience (Since 2017)
            </span>
          </div>

          <div className="text-center sm:text-right font-medium">
            © 2026 RANS Scholarships. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
