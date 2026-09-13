/**
 * NEXUS GLOBAL / NEXUS ACADEMY — Official Verified Media & Brand Assets.
 * Verified from:
 *  - Official Logo: logo.jpg (Circular emblem with warm orange and ocean blue gradient, white 'N' swoosh, taking-off airplane)
 *  - Official Facebook: https://www.facebook.com/nexusacademyjessore/
 *  - Headquarters: Nowrin Tower / Pitha Bari Tower, 3rd Floor, East Side of Laldighi, Beside Kacchi Queen, Sadar, Jashore
 *  - Tokyo Liaison Branch: Nexus Group, Shin-Koiwa, Tokyo, Japan
 */

export const mediaUrls: Record<string, string> = {
  // Official Nexus Global Brand Assets
  logo: "/logo.jpg",
  "logo-fallback": "/assets/logo.jpg",
  banner: "/banner.jpg",
  "hero-banner": "/banner.jpg",
  "hero-banner-png": "/banner.png",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/logo.jpg";
}
