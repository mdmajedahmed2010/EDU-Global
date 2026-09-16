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
    <footer className="bg-[#061122] text-white pt-16 pb-24 md:pb-16 text-xs relative overflow-hidden border-t border-amber-500/30">
      {/* Subtle Dark Pattern */}
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
                <BrandLogo size={50} withText textClassName="flex text-white" variant="dark" />
              </Link>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-medium">
                {company.tagline} {company.bengaliHeadline}
              </p>

              {/* Newsletter Subscription Box */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md max-w-md">
                <div className="text-sm font-bold text-white mb-1">
                  Stay Updated on IELTS Batches & Mock Tests
                </div>
                <p className="text-[0.73rem] text-slate-400 mb-3.5">
                  Subscribe for verified alerts on IELTS batch schedules, 300 BDT computer mock tests, Spoken English, and European study abroad admission deadlines.
                </p>

                {subscribed ? (
                  <div className="rounded-xl bg-emerald-500/20 border border-emerald-400/40 p-2.5 text-center text-xs font-bold text-emerald-200">
                    ✓ Thank you! You are subscribed to Kushtia IELTS Care updates.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 rounded-xl border border-white/20 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30"
                    />
                    <button
                      type="submit"
                      className="rounded-xl bg-amber-500 hover:bg-amber-600 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
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
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-400">›</span>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-400">›</span>
                    <span>About Us (Old Kataikhana More Campus)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-400">›</span>
                    <span>IELTS Preparation (Academic & General)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-400">›</span>
                    <span>Computer-Based Mock Test (300 BDT)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-400">›</span>
                    <span>Spoken English & Fluency</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-400">›</span>
                    <span>Kids English Program</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/destinations"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-400">›</span>
                    <span>Study in Portugal & Europe 🇵🇹 🇪🇺</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-400">›</span>
                    <span>Contact Us & Campus Map</span>
                  </Link>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Column 3: Contact & Campus Information */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-4">
              <div className="text-sm font-bold text-white tracking-wide uppercase">
                Official Contact & Location
              </div>

              {/* Kushtia Campus */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span className="font-bold text-amber-400 text-xs">Kushtia Campus (Old Kataikhana More)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {company.address.full}
                </p>
                <div className="pt-2 border-t border-white/10 flex flex-wrap gap-3 text-xs">
                  <a
                    href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                    className="text-white hover:text-amber-300 flex items-center gap-1 font-bold"
                  >
                    <IconPhone className="w-3.5 h-3.5 text-amber-400" />
                    <span>{company.phones[0]}</span>
                  </a>
                  <a
                    href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
                    className="text-slate-300 hover:text-white flex items-center gap-1"
                  >
                    <span>{company.phones[1]}</span>
                  </a>
                </div>
                <div className="text-[0.72rem] text-slate-400">
                  Email: <a href={`mailto:${company.email}`} className="text-slate-300 hover:underline">{company.email}</a>
                </div>
              </div>

              {/* Verified Facility Badge */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs">🎧</span>
                  <span className="font-bold text-amber-400 text-xs">Modern Audio Lab & Individual Headsets</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  কুষ্টিয়ায় আধুনিক সাউন্ড ল্যাব ও কম্পিউটার ভিত্তিক রিয়েল এক্সাম মক টেস্টের বিশ্বস্ত ঠিকানা।
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-3.5 rounded-full flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <IconWhatsApp className="w-3.5 h-3.5" />
                  <span>WhatsApp Kushtia</span>
                </a>
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs py-2 px-3.5 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Facebook Page</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[0.72rem]">
          <div>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved. Old Kataikhana More, Kushtia.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span>•</span>
            <span className="text-amber-400 font-medium">a great place to learn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
