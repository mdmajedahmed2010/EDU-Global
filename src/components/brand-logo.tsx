import { cn } from "@/lib/utils";
import { company } from "@/lib/site-data";

/**
 * HIGHER STUDY COUNSELORS BANGLADESH — Official Brand Logo Component.
 * Displays the verified shield crest (H & S quadrants, golden flight & cap, 'SINCE 2012')
 * and the signature golden-amber / navy typography.
 */
export function BrandLogo({
  className,
  size = 46,
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
          "relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-xl bg-white border border-slate-200/90 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:shadow-md p-1",
        )}
        style={{ width: size, height: size }}
      >
        <img
          src="/logo.jpg"
          alt={`${company.name} Official Shield Logo`}
          width={size}
          height={size}
          className="h-full w-full object-contain rounded-lg"
          onError={(e) => {
            e.currentTarget.src = "/logo.jpg";
          }}
        />
      </div>

      {withText && (
        <div className={cn("flex flex-col text-left min-w-0 leading-tight", textClassName)}>
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={cn(
                "font-display font-extrabold text-base sm:text-lg md:text-xl tracking-tight text-[#f5a623] uppercase",
              )}
            >
              Higher
            </span>
            <span
              className={cn(
                "font-display font-extrabold tracking-tight text-base sm:text-lg md:text-xl uppercase",
                variant === "dark" ? "text-white" : "text-[#161b38]",
              )}
            >
              Study
            </span>
          </div>
          <span
            className={cn(
              "font-display font-bold text-[0.62rem] sm:text-[0.7rem] tracking-[0.08em] uppercase truncate max-w-[200px] xs:max-w-[250px] sm:max-w-none mt-0.5",
              variant === "dark" ? "text-slate-300" : "text-[#161b38]/90",
            )}
          >
            Counselors Bangladesh
          </span>
          <span
            className={cn(
              "text-[0.52rem] sm:text-[0.58rem] tracking-[0.06em] font-semibold truncate",
              variant === "dark" ? "text-amber-400/90" : "text-amber-600",
            )}
          >
            {subtitle || "Since 2012 · Sector 3, Uttara, Dhaka"}
          </span>
        </div>
      )}
    </div>
  );
}
