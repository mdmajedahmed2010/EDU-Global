/**
 * AB STUDY HUB — Curated Media & Verified Brand Assets.
 * Verified from:
 *  - Official Assets: logo.jpg ("Abroad From Bangladesh", AB monogram)
 *  - Official Banner: banner.png ("From Chattogram TO THE WORLD", Germany, Danish, IELTS Private Batch)
 *  - Official Facebook: https://www.facebook.com/abstudyhub/
 */

export const mediaUrls: Record<string, string> = {
  // Official AB Study Hub Brand Assets
  logo: "/latest-assets/logo.jpg",
  banner: "/latest-assets/banner.png",
  "hero-banner": "/latest-assets/banner.png",
  "hero-banner-png": "/latest-assets/banner.png",
  "poster-fb-main": "/latest-assets/banner.png",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/latest-assets/banner.png";
}
