import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RegisterModalProvider } from "@/components/register-modal";
import { ChatWidget } from "@/components/chat-widget";
import { company } from "@/lib/site-data";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary text-xs py-2 px-5">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please try refreshing or head back to the home page.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary text-xs py-2 px-5"
          >
            Try again
          </button>
          <a href="/" className="btn-secondary text-xs py-2 px-5">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: company.legalName },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: company.legalName },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.jpg", type: "image/jpeg" },
      { rel: "apple-touch-icon", href: "/logo.jpg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: company.legalName,
          alternateName: "AcademiaZ (জাপান থেকে পরিচালিত)",
          slogan: company.slogan,
          description:
            "AcademiaZ is a premier Japanese language training institute and visa consultancy located at Kadirganj, Greater Road (Lane beside Ma Photostat, east side of the mosque), Rajshahi - 6000, managed directly from Japan. Specializing in Japanese Language (JLPT N5/N4, NAT-TEST, JFT-Basic), TITP/SSW work programs, Student Visas for Japan, IELTS coaching, Spoken English, and Kids English (Ages 5–14).",
          foundingDate: company.established,
          areaServed: ["Bangladesh", "Rajshahi", "Japan", "Worldwide"],
          email: company.email,
          telephone: company.phones.map((p) => `+880${p.replace(/[^0-9]/g, "").slice(-10)}`),
          openingHours: "Sa-Th 09:00-20:00",
          sameAs: [company.social.facebook, company.social.instagram, company.social.linkedin],
          hasMap: company.mapsUrl,
          geo: {
            "@type": "GeoCoordinates",
            latitude: company.geo.lat,
            longitude: company.geo.lng,
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: company.address.full,
            addressLocality: "Rajshahi",
            postalCode: "6000",
            addressCountry: "BD",
          },
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="overflow-x-hidden w-full max-w-[100vw]">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <RegisterModalProvider>
        <div className="flex min-h-screen flex-col font-sans w-full overflow-x-clip pb-16 md:pb-0">
          <SiteHeader />
          <main id="content" className="flex-1 w-full">
            <Outlet />
          </main>
          <SiteFooter />
          <ChatWidget />
        </div>
      </RegisterModalProvider>
    </QueryClientProvider>
  );
}
