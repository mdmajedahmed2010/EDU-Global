import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { company, navItems, destinations, courses } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconPhone, IconWhatsApp } from "@/components/ui-blocks";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { open } = useRegisterModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full">
      {/* 1. Global Announcement & Top Bar */}
      <div className="bg-slate-950 text-white text-xs py-2 relative z-50 border-b border-sky-500/30">
        <div className="section-shell flex items-center justify-between gap-3">
          {/* Left: Direct Phone & WhatsApp */}
          <div className="flex items-center gap-3 sm:gap-4 text-[0.73rem] sm:text-xs">
            <a
              href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 font-bold text-slate-100 hover:text-sky-400 transition-colors"
            >
              <IconPhone className="w-3.5 h-3.5 text-sky-400" />
              <span>{company.phones[0]} (WhatsApp)</span>
            </a>
            <span className="text-slate-700 hidden xs:inline">|</span>
            <a
              href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
              className="hidden xs:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <span>{company.phones[1]}</span>
            </a>
            <span className="text-slate-700 hidden md:inline">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[0.68rem] bg-sky-600 text-white font-bold px-2 py-0.5 rounded-full">
              ★ Connecting The Future
            </span>
          </div>

          {/* Right: Office Location & Tokyo Liaison */}
          <div className="flex items-center gap-2 text-[0.7rem] sm:text-[0.75rem] text-slate-300">
            <span className="text-orange-500">📍</span>
            <span className="truncate">Nowrin Tower, East Side of Laldighi, Sadar, Jashore</span>
            <span className="hidden lg:inline text-slate-700">|</span>
            <span className="hidden lg:inline text-orange-300 font-semibold text-[0.68rem] bg-orange-500/15 px-2 py-0.5 rounded-full border border-orange-400/30">
              🇯🇵 Tokyo Branch: Shin-Koiwa
            </span>
          </div>
        </div>
      </div>

      {/* 2. Clean Sticky Navbar */}
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300 w-full",
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_8px_25px_rgb(0,0,0,0.06)] py-2.5 sm:py-3"
            : "bg-white border-b border-slate-200/80 py-3 sm:py-3.5",
        )}
      >
        <div className="section-shell flex items-center justify-between gap-3">
          {/* Brand Logo with Tagline */}
          <Link to="/" className="group flex items-center gap-3 shrink-0">
            <BrandLogo size={44} withText textClassName="flex" />
            <div className="hidden xl:block h-6 w-px bg-slate-200" />
            <span className="hidden xl:inline text-xs font-semibold text-slate-500 tracking-wider">
              CONNECTING THE FUTURE
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 xl:gap-1.5 lg:flex">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isDest = item.label === "Study Abroad";
              const isCourses = item.label === "Language Courses";

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.to}
                      className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors whitespace-nowrap"
                    >
                      <span>{item.label}</span>
                      <span className="text-[0.65rem] opacity-50">▾</span>
                    </Link>

                    {/* Mega Dropdown for Study Abroad */}
                    {isDest && activeDropdown === item.label && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[560px] rounded-2xl bg-white p-4 shadow-2xl border border-slate-200 grid grid-cols-2 gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                            Flagship Study Abroad Pathways
                          </span>
                          <span className="text-[0.7rem] text-sky-600 font-bold">
                            100% Visa Guidance
                          </span>
                        </div>
                        {destinations.slice(0, 8).map((d) => (
                          <Link
                            key={d.slug}
                            to="/study-in-{$country}"
                            params={{ country: d.slug }}
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-sky-50/80 transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="text-xl shrink-0 mt-0.5">{d.flag}</span>
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-slate-900 group-hover:text-sky-700 flex items-center gap-1.5">
                                <span>{d.name}</span>
                                {d.specialHighlight && (
                                  <span className="text-[0.6rem] bg-orange-100 text-orange-700 px-1.5 py-0.2 rounded font-semibold truncate max-w-[130px]">
                                    {d.slug === "japan" ? "Tokyo Liaison" : "Special"}
                                  </span>
                                )}
                              </div>
                              <p className="text-[0.7rem] text-slate-500 truncate max-w-[210px]">
                                {d.tagline}
                              </p>
                            </div>
                          </Link>
                        ))}
                        <div className="col-span-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                          <Link
                            to="/destinations"
                            className="font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span>Explore all 8+ global destinations</span>
                            <span>→</span>
                          </Link>
                          <span className="text-[0.7rem] text-slate-400 font-medium">
                            Jashore Headquarters & Tokyo Liaison
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Dropdown for Language Courses */}
                    {isCourses && activeDropdown === item.label && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[460px] rounded-2xl bg-white p-4 shadow-2xl border border-slate-200 grid grid-cols-1 gap-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                            Nexus Language Academy Tracks
                          </span>
                          <span className="text-[0.7rem] text-emerald-600 font-bold">
                            Free Books & Materials
                          </span>
                        </div>
                        {courses.map((c) => (
                          <Link
                            key={c.slug}
                            to="/services"
                            className="flex items-center justify-between p-2 rounded-xl hover:bg-sky-50 transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="text-lg shrink-0">{c.icon}</span>
                              <div className="truncate">
                                <span className="text-xs font-bold text-slate-900 group-hover:text-sky-700 block truncate">
                                  {c.title}
                                </span>
                                <span className="text-[0.68rem] text-slate-500 block truncate">
                                  {c.duration} · {c.classSchedule}
                                </span>
                              </div>
                            </div>
                            <span className="text-[0.65rem] bg-sky-100 text-sky-800 font-semibold px-2 py-0.5 rounded-full shrink-0">
                              {c.badge}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Standard Dropdown for Services */}
                    {!isDest && !isCourses && activeDropdown === item.label && (
                      <div className="absolute left-0 top-full mt-1 w-56 rounded-2xl bg-white p-2 shadow-xl border border-slate-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.children?.map((child) => (
                          <Link
                            key={child.label}
                            to={child.to}
                            className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span>{child.label}</span>
                            {child.badge && (
                              <span className="text-[0.65rem] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-bold">
                                {child.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-full px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: WhatsApp & Free Assessment Modal */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello Nexus Global! I would like to inquire about your language courses and study abroad guidance.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3.5 py-2 rounded-full transition-colors active:scale-95"
            >
              <IconWhatsApp className="w-4 h-4 text-emerald-600" />
              <span className="hidden xl:inline">WhatsApp Jashore</span>
            </a>

            <button
              type="button"
              onClick={() => open()}
              className="btn-luxury-primary text-xs py-2 px-4 sm:px-5 shadow-sm active:scale-95 text-white"
            >
              <span>Free Consultation</span>
              <span>→</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <span className="text-xl leading-none">✕</span>
              ) : (
                <span className="text-xl leading-none">☰</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[90px] bottom-0 bg-white/95 backdrop-blur-xl z-40 border-b border-slate-200 p-5 overflow-y-auto animate-in slide-in-from-top-3 duration-200 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-100">
              Navigation Menu
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="block p-2 text-sm font-bold text-slate-800 hover:text-sky-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => setMobileOpen(false)}
                  className="block p-2 text-sm font-bold text-slate-800 hover:text-sky-600"
                >
                  Language Academy (Japanese, German, IELTS)
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  onClick={() => setMobileOpen(false)}
                  className="block p-2 text-sm font-bold text-slate-800 hover:text-sky-600"
                >
                  Study Abroad Destinations (Japan, Germany, etc.)
                </Link>
              </li>
              <li>
                <Link
                  to="/offers"
                  onClick={() => setMobileOpen(false)}
                  className="block p-2 text-sm font-bold text-slate-800 hover:text-sky-600"
                >
                  Intakes & Batches
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="block p-2 text-sm font-bold text-slate-800 hover:text-sky-600"
                >
                  About Us (Jashore HQ & Tokyo Branch)
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block p-2 text-sm font-bold text-slate-800 hover:text-sky-600"
                >
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-200 space-y-3">
            <div className="text-xs text-slate-600">
              <p className="font-bold text-slate-900">📍 Jashore Campus:</p>
              <p className="mt-0.5">{company.address.full}</p>
              <p className="mt-1">
                <strong>📞 Hotline:</strong> {company.phones[0]}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  open();
                }}
                className="btn-luxury-primary w-full text-xs py-2.5 text-center text-white"
              >
                Book Free Profile Assessment
              </button>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald w-full text-xs py-2.5 text-center"
              >
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
