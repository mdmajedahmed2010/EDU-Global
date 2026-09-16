/**
 * KUSHTIA IELTS CARE — Official Verified Media & Brand Assets.
 * Verified from:
 *  - Official Logo: logo.jpg (4 Orange Water Droplets Motif + Navy Wordmark "Kushtia IELTS Care")
 *  - Official Facebook: https://www.facebook.com/p/Kushtia-IELTS-Care-61556387490632/
 *  - Campus: 169/4, Mahatab Uddin Road, Old Kataikhana More, Kushtia (পুরাতন কসাইখানা মোড়, কুষ্টিয়া)
 *  - Special Features: Dedicated Audio Lab (Individual Headsets), 300 BDT CBT Mock Tests
 */

export const mediaUrls: Record<string, string> = {
  // Official Kushtia IELTS Care Brand Assets
  logo: "/logo.jpg",
  "logo-fallback": "/brand-assets/logo.jpg",
  banner: "/banner.jpg",
  "hero-banner": "/banner.jpg",
  "hero-banner-brand": "/brand-assets/banner.jpg",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/logo.jpg";
}
