import { useState, useEffect } from "react";
import { BrandLogo } from "@/components/brand-logo";

const recentActivities = [
  {
    flag: "🇯🇵",
    student: "Tanvir A. (Jashore)",
    action: "Enrolled in Japanese N5 Intensive Batch",
    subtext: "Nexus Academy · 3 Months Package with Books",
    time: "3 mins ago",
  },
  {
    flag: "🇩🇪",
    student: "Sultana R. (Khulna)",
    action: "Enrolled in German Goethe A1 Course",
    subtext: "Nexus Academy · Netzwerk Neu A1 Standard",
    time: "11 mins ago",
  },
  {
    flag: "🇯🇵",
    student: "Mahfuz H. (Jashore)",
    action: "Visa Approved: Tokyo Language School",
    subtext: "Tokyo Liaison Office Reception & Job Guidance",
    time: "24 mins ago",
  },
  {
    flag: "🌟",
    student: "Kamrul I. (Jashore)",
    action: "Achieved IELTS Overall Band 7.5",
    subtext: "Nexus Global IELTS Preparation Batch",
    time: "42 mins ago",
  },
  {
    flag: "🇩🇪",
    student: "Farzana K. (Jashore)",
    action: "German Ausbildung Profile Verified",
    subtext: "Nexus Global · Document Attestation & CV Prep",
    time: "1 hour ago",
  },
  {
    flag: "🇲🇾",
    student: "Arif M. (Jhenaidah)",
    action: "EMGS Visa Approval for Malaysia",
    subtext: "Nexus Global Study Abroad Division",
    time: "2 hours ago",
  },
];

export function LiveActivityToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Initial delay before first popup
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 2800);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (isDismissed || isPaused) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % recentActivities.length);
        setVisible(true);
      }, 600);
    }, 7000);

    return () => clearInterval(interval);
  }, [isDismissed, isPaused]);

  if (isDismissed) return null;

  const current = recentActivities[index];
  if (!current) return null;

  return (
    <aside
      aria-label="Recent student activity notification"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-40 max-w-xs sm:max-w-sm rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl p-3.5 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="relative flex-shrink-0 mt-0.5">
          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-xl shadow-xs">
            {current.flag}
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white" />
          </span>
        </div>

        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center justify-between gap-1">
            <span className="text-[0.65rem] font-black uppercase tracking-wider text-sky-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
              Verified Success
            </span>
            <span className="text-[0.62rem] text-slate-400 font-medium">{current.time}</span>
          </div>

          <h5 className="text-xs font-bold text-slate-900 truncate mt-0.5">{current.student}</h5>
          <p className="text-[0.72rem] font-semibold text-emerald-700 leading-tight">
            {current.action}
          </p>
          <p className="text-[0.66rem] text-slate-500 truncate mt-0.5">{current.subtext}</p>
        </div>

        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="text-slate-400 hover:text-slate-600 text-xs font-bold p-1 rounded-md transition-colors"
          title="Dismiss notification"
          aria-label="Dismiss notification"
        >
          ✕
        </button>
      </div>
    </aside>
  );
}
