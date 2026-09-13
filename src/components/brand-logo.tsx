import { cn } from "@/lib/utils";
import { company } from "@/lib/site-data";

/**
 * NEXUS GLOBAL / NEXUS ACADEMY — Official Brand Logo Component.
 * Features the signature circular Nexus emblem (sunrise orange, ocean blue, airplane takeoff)
 * with professional typography.
 */
export function BrandLogo({
  className,
  size = 44,
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
    <div className={cn("inline-flex items-center gap-2.5 sm:gap-3 select-none group", className)}>
      <div
        className={cn(
          "relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-full bg-white border-2 border-sky-500/40 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:border-sky-500 p-0.5",
        )}
        style={{ width: size, height: size }}
      >
        <img
          src="/logo.jpg"
          alt={`${company.name} Official Logo`}
          width={size}
          height={size}
          className="h-full w-full object-cover rounded-full"
          onError={(e) => {
            e.currentTarget.src = "/brand-assets/logo.jpg";
          }}
        />
      </div>

      {withText && (
        <div className={cn("flex flex-col text-left min-w-0", textClassName)}>
          <div className="flex items-center gap-1 sm:gap-1.5 leading-none">
            <span
              className={cn(
                "font-display font-black tracking-tight text-base sm:text-lg md:text-xl text-sky-600 whitespace-nowrap",
              )}
            >
              Nexus
            </span>
            <span
              className={cn(
                "font-display font-extrabold text-xs sm:text-sm md:text-base tracking-wide whitespace-nowrap",
                variant === "dark" ? "text-white" : "text-slate-900",
              )}
            >
              Global
            </span>
          </div>
          <span
            className={cn(
              "text-[0.55rem] sm:text-[0.62rem] tracking-[0.06em] sm:tracking-[0.1em] uppercase font-semibold mt-0.5 sm:mt-1 truncate max-w-[190px] xs:max-w-[240px] sm:max-w-none",
              variant === "dark" ? "text-slate-300" : "text-slate-600",
            )}
          >
            {subtitle || "Language & Skill Training · Jashore"}
          </span>
        </div>
      )}
    </div>
  );
}
