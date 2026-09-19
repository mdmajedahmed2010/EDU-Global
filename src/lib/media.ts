/**
 * EDU GLOBAL (ইডিইউ গ্লোবাল) — Official Verified Media & Brand Assets.
 * Verified from:
 *  - Official Logo: /logo.jpg (EDU Global circular emblem with graduate cap and stylized globe)
 *  - Official Banner: /banner.png / /banner.jpg (10+ Flags: Europe, NZ, AUS, UK, USA, CAN, SK, JPN, FIN, IRE)
 *  - Official Facebook: https://www.facebook.com/edugbl/
 *  - Head Office: Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi R/A, Dhaka - 1209
 */

export const mediaUrls: Record<string, string> = {
  // Official EDU Global Brand Assets
  logo: "/logo.jpg",
  "logo-fallback": "/logo.jpg",
  banner: "/banner.png",
  "hero-banner": "/banner.png",
  "hero-banner-brand": "/banner.png",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/logo.jpg";
}
