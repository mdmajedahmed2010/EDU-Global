import { cn } from "@/lib/utils";
import { company } from "@/lib/site-data";

/**
 * RANS Scholarships — Official Brand Logo Component.
 * Features the signature "RANS Scholarships" branding with academic mortarboard, world globe, and airplane takeoff flightpath.
 */
export function BrandLogo({
  className,
  size = 48,
  withText = true,
  textClassName,
  subtitle,
  variant = "light",
}: {
  className?: string;
  size?: number;
  withText?: boolean;
  textClassName?: string;
  subtitle?: string;
  variant?: "light" | "dark";
}) {
  return (
    <div className={cn("inline-flex items-center gap-3 select-none group", className)}>
      <div
        className={cn(
          "relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-xl bg-white border-2 border-red-600/30 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:border-red-600 p-1",
        )}
        style={{ width: size, height: size }}
      >
        <img
          src="/log.jpg"
          alt={`${company.name} Official Logo`}
          width={size}
          height={size}
          className="h-full w-full object-contain"
          onError={(e) => {
            e.currentTarget.src = "/latest-assets/logo.jpg";
          }}
        />
      </div>

      {withText && (
        <div className={cn("flex flex-col text-left min-w-0", textClassName)}>
          <div className="flex items-center gap-1 sm:gap-1.5 leading-none">
            <span
              className={cn(
                "font-display font-black tracking-tight text-base sm:text-lg md:text-xl text-red-600 whitespace-nowrap",
              )}
            >
              RANS
            </span>
            <span
              className={cn(
                "font-display font-extrabold text-xs sm:text-sm md:text-base tracking-wide whitespace-nowrap",
                variant === "dark" ? "text-white" : "text-[#043E8B]",
              )}
            >
              SCHOLARSHIPS
            </span>
          </div>
          <span
            className={cn(
              "text-[0.55rem] sm:text-[0.65rem] tracking-[0.08em] sm:tracking-[0.14em] uppercase font-semibold mt-0.5 sm:mt-1 truncate max-w-[190px] xs:max-w-[240px] sm:max-w-none",
              variant === "dark" ? "text-slate-300" : "text-slate-600",
            )}
          >
            {subtitle || "Study Abroad & Language Academy · Sylhet"}
          </span>
        </div>
      )}
    </div>
  );
}
