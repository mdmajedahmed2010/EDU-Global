/**
 * ACADEMIAZ — Official Verified Media & Brand Assets.
 * Verified from:
 *  - Official Logo: logo.jpg (Intertwined AZ circular insignia, Navy & Gold, "LEARN · GROW · ACHIEVE")
 *  - Official Facebook: https://www.facebook.com/AcademiaZRajshahi
 *  - Campus: Kadirganj, Greater Road (Lane beside Ma Photostat, east side of the mosque), Rajshahi - 6000
 *  - Direct Management: Japan-Based Direct Oversight ("জাপান থেকে পরিচালিত")
 */

export const mediaUrls: Record<string, string> = {
  // Official AcademiaZ Brand Assets
  logo: "/logo.jpg",
  "logo-fallback": "/brand-assets/logo.jpg",
  banner: "/banner.jpg",
  "hero-banner": "/banner.jpg",
  "hero-banner-brand": "/brand-assets/banner.jpg",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/logo.jpg";
}
