import { cn } from "@/lib/utils";
import { company } from "@/lib/site-data";

/**
 * KUSHTIA IELTS CARE — Official Brand Logo Component.
 * Features the signature 4 orange droplets emblem and authentic Kushtia IELTS Care typography.
 * Slogan: "a great place to learn"
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
          "relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-xl bg-white border border-slate-200/80 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:shadow-md p-0.5",
        )}
        style={{ width: size, height: size }}
      >
        <img
          src="/logo.jpg"
          alt={`${company.name} Official Logo`}
          width={size}
          height={size}
          className="h-full w-full object-contain rounded-lg"
          onError={(e) => {
            e.currentTarget.src = "/brand-assets/logo.jpg";
          }}
        />
      </div>

      {withText && (
        <div className={cn("flex flex-col text-left min-w-0", textClassName)}>
          <div className="flex items-center gap-1 leading-none">
            <span
              className={cn(
                "font-display font-black tracking-tight text-base sm:text-lg md:text-xl whitespace-nowrap",
                variant === "dark" ? "text-white" : "text-[#092552]",
              )}
            >
              Kushtia
            </span>
            <span
              className={cn(
                "font-display font-black text-base sm:text-lg md:text-xl tracking-tight text-[#ff7a00] whitespace-nowrap",
              )}
            >
              IELTS Care
            </span>
          </div>
          <span
            className={cn(
              "text-[0.55rem] sm:text-[0.62rem] tracking-[0.06em] sm:tracking-[0.1em] font-semibold mt-0.5 sm:mt-1 truncate max-w-[200px] xs:max-w-[250px] sm:max-w-none",
              variant === "dark" ? "text-orange-300/90" : "text-[#ff7a00]",
            )}
          >
            {subtitle || "a great place to learn · Old Kataikhana More"}
          </span>
        </div>
      )}
    </div>
  );
}

