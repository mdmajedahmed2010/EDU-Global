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
    <footer className="bg-[#0A0A0C] text-white pt-16 pb-24 md:pb-16 text-xs relative overflow-hidden border-t border-red-600/30">
      {/* Subtle Dark Radial Pattern */}
      <div className="absolute inset-0 bg-radial-pattern opacity-10 pointer-events-none" />

      <div className="section-shell relative z-10">
        {/* Main 3-Column Footer Grid */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.8fr_1.1fr] gap-10 lg:gap-14 pb-14 border-b border-white/10"
        >
          {/* Column 1: Brand Info & Newsletter Subscription */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-6">
              <Link to="/" className="inline-flex items-center gap-3">
                <BrandLogo size={48} withText textClassName="flex text-white" variant="dark" />
              </Link>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-medium">
                {company.tagline} Empowering students in Bangladesh with transparent higher education admissions
                and premier language coaching. Specializing in Germany (Tuition-Free Public Universities),
                Denmark, Netherlands, Canada, Spain, Greece, Malaysia, and UK.
              </p>

              {/* Newsletter Subscription Box */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md max-w-md">
                <div className="text-sm font-bold text-white mb-1">
                  Stay Updated on Intakes & Language Batches
                </div>
                <p className="text-[0.73rem] text-slate-400 mb-3.5">
                  Subscribe for verified updates on German A1–B2 Goethe-Institut batches, Danish language courses,
                  and European university admission deadlines.
                </p>

                {subscribed ? (
                  <div className="rounded-xl bg-emerald-500/20 border border-emerald-400/40 p-2.5 text-center text-xs font-bold text-emerald-200">
                    ✓ Thank you! You are subscribed to AB STUDY HUB updates.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 rounded-xl border border-white/20 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
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
              <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
                <li>
                  <Link
                    to="/"
                    className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-500">›</span>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-500">›</span>
                    <span>About AB STUDY HUB</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-500">›</span>
                    <span>German Language (A1–B2 Goethe)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/destinations"
                    className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-500">›</span>
                    <span>Study in Germany 🇩🇪 (Tuition-Free)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-500">›</span>
                    <span>Danish Language Course</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-500">›</span>
                    <span>IELTS Private Batch (Band 7.5+)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/destinations"
                    className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-500">›</span>
                    <span>Verified Study Destinations</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/offers"
                    className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-500">›</span>
                    <span>Intakes & Batch Schedules</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-500">›</span>
                    <span>Contact Our Chattogram Office</span>
                  </Link>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Column 3: Contact & Chattogram Corporate Office */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-4">
              <div className="text-sm font-bold text-white tracking-wide uppercase">
                Corporate Hub & Contact
              </div>
              <div className="space-y-3.5 text-xs text-slate-300 font-medium">
                {/* Chattogram Address */}
                <div className="flex items-start gap-2.5">
                  <span className="text-red-500 text-sm mt-0.5">📍</span>
                  <div>
                    <strong className="text-white block">AB STUDY HUB Chattogram:</strong>
                    <span>
                      {company.offices.headquarters.address}
                    </span>
                    <div className="mt-1">
                      <a
                        href={company.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[0.72rem] text-red-400 hover:text-red-300 font-bold inline-flex items-center gap-1"
                      >
                        <span>View on Google Maps</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-2.5">
                  <span className="text-amber-400 text-sm mt-0.5">🕒</span>
                  <div>
                    <strong className="text-white block">Office Hours:</strong>
                    <span>Saturday – Thursday: 10:00 AM – 8:00 PM (Friday Closed)</span>
                  </div>
                </div>

                {/* Hotlines */}
                <div className="flex items-start gap-2.5">
                  <IconPhone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <div>
                      <a href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`} className="hover:text-red-400 font-bold text-white">
                        {company.phones[0]}
                      </a>{" "}
                      /{" "}
                      <a href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`} className="hover:text-red-400 font-bold text-white">
                        {company.phones[1]}
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
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
                  <span className="text-red-500 text-sm mt-0.5">✉</span>
                  <a href={`mailto:${company.email}`} className="hover:text-red-400 font-semibold">
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
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-red-600 text-white transition-colors"
                      aria-label="Facebook"
                    >
                      FB
                    </a>
                    <a
                      href={company.social.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-red-600 text-white transition-colors"
                      aria-label="Instagram"
                    >
                      IG
                    </a>
                    <a
                      href={company.social.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-red-600 text-white transition-colors"
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

        {/* Bottom Badges & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.73rem] text-slate-400">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-semibold text-white">Programs & Accreditations:</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-white border border-white/10 font-bold">
              German Goethe-Institut Prep
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-white border border-white/10 font-bold">
              Danish Language Course
            </span>
            <span className="rounded-full bg-amber-400/20 px-3 py-1 text-amber-200 border border-amber-400/30 font-bold">
              IELTS Private Batch (10–12 Students)
            </span>
          </div>

          <div className="text-center sm:text-right font-medium">
            © 2026 AB STUDY HUB (Abroad From Bangladesh). All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
