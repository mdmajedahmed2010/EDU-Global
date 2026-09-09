/**
 * RANS Scholarships — Curated Media & Verified Brand Assets.
 * Points to verified local static files in /latest-assets/ and /brand-assets/.
 */

export const mediaUrls: Record<string, string> = {
  // Official RANS Brand Assets
  logo: "/latest-assets/logo.jpg",
  banner: "/latest-assets/banner.jpg",
  "hero-banner": "/latest-assets/banner.jpg",
  "hero-banner-png": "/latest-assets/banner.png",
  "poster-fb-main": "/latest-assets/banner.jpg",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/latest-assets/banner.png";
}
