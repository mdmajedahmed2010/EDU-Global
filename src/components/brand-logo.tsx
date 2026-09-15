import { cn } from "@/lib/utils";
import { company } from "@/lib/site-data";

/**
 * ACADEMIAZ — Official Brand Logo Component.
 * Features the signature circular AcademiaZ emblem (Navy & Gold monogram with graduation cap & book)
 * with authentic typography and "LEARN · GROW · ACHIEVE" motto.
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
          "relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-full bg-white border-2 border-amber-500/50 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:border-amber-500 p-0.5",
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
          <div className="flex items-center gap-0.5 sm:gap-1 leading-none">
            <span
              className={cn(
                "font-display font-black tracking-tight text-base sm:text-lg md:text-xl whitespace-nowrap",
                variant === "dark" ? "text-white" : "text-[#0a1931]",
              )}
            >
              Academia
            </span>
            <span
              className={cn(
                "font-display font-black text-base sm:text-lg md:text-xl tracking-tight text-amber-500 whitespace-nowrap",
              )}
            >
              Z
            </span>
          </div>
          <span
            className={cn(
              "text-[0.55rem] sm:text-[0.62rem] tracking-[0.08em] sm:tracking-[0.12em] uppercase font-bold mt-0.5 sm:mt-1 truncate max-w-[190px] xs:max-w-[240px] sm:max-w-none",
              variant === "dark" ? "text-amber-400/90" : "text-amber-700/80",
            )}
          >
            {subtitle || "Japanese Language & Global Pathways · Rajshahi"}
          </span>
        </div>
      )}
    </div>
  );
}
