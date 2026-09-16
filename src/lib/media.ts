/**
 * HIGHER STUDY COUNSELORS BANGLADESH (HSC BD) — Official Verified Media & Brand Assets.
 * Verified from:
 *  - Official Logo: /logo.jpg (HSC BD Shield Crest with Red-Green Flag Star Motif, "Since 2012")
 *  - Official Banner: /banner.jpg (6 Major USPs, Dhaka HQ & Glasgow UK Offices, Hotlines)
 *  - Official Facebook: https://www.facebook.com/infohscbdpage/
 *  - Head Office: House 23, Road 2, 1st Floor, Sector 3, Uttara, Dhaka - 1230
 *  - UK Office: 3A Westburn Road, Glasgow, UK
 */

export const mediaUrls: Record<string, string> = {
  // Official Higher Study Counselors Bangladesh Brand Assets
  logo: "/logo.jpg",
  "logo-fallback": "/logo.jpg",
  banner: "/banner.jpg",
  "hero-banner": "/banner.jpg",
  "hero-banner-brand": "/banner.jpg",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/logo.jpg";
}

