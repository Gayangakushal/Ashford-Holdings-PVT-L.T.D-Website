import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useCallback, useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ButtonLink } from "@/components/site/Buttons";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BrandLoader } from "@/components/site/BrandLoader";
import { CookieConsent } from "@/components/site/CookieConsent";
import { SITE_URL, site } from "@/data/site";

function NotFoundComponent() {
  return (
    <main id="main" className="relative flex min-h-[80svh] items-end">
      <div className="tech-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-x relative pb-24 pt-40">
        <p className="eyebrow">Error 404</p>
        <h1 className="t-h1 mt-6 max-w-3xl">This path doesn’t lead anywhere.</h1>
        <p className="t-lead mt-6 max-w-xl">
          The page may have moved. Start again from the homepage or our solutions.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/solutions" variant="secondary">
            Solutions
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main id="main" className="container-x flex min-h-[80svh] flex-col justify-end pb-24 pt-40">
      <p className="eyebrow">System fault</p>
      <h1 className="t-h1 mt-6">This page didn’t load.</h1>
      <p className="t-lead mt-6 max-w-xl">
        Something went wrong on our side. Try again, or head back home.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          <span className="btn-label">Try again</span>
        </button>
        <a href="/" className="btn btn-secondary">
          <span className="btn-label">Go home</span>
        </a>
      </div>
    </main>
  );
}

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/brand/ashford-holdings-logo.png`,
  email: site.email,
  telephone: site.phone,
  slogan: site.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressCountry: "LK",
  },
  sameAs: site.social.map((s) => s.href),
  description: site.shortDescription,
  areaServed: "Sri Lanka",
  knowsAbout: [
    "Industrial ventilation",
    "Air conditioning",
    "Air purification",
    "Building management systems",
    "Fire and gas suppression",
    "Dust extraction",
    "Racking and material handling",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: `${site.name} | Air & Environmental Engineering, Sri Lanka` },
      { name: "description", content: site.shortDescription },
      { name: "author", content: site.legalName },
      { name: "theme-color", content: "#080a0c" },
      { name: "color-scheme", content: "dark" },
      { property: "og:locale", content: "en_LK" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Geist+Mono:wght@400;500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/assets/brand/ashford-holdings-logo.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/assets/brand/ashford-holdings-logo.png" },
    ],
    scripts: [
      // Flags that JS is running so reveal animations never hide content without it.
      { children: "document.documentElement.classList.add('js')" },
      { type: "application/ld+json", children: JSON.stringify(organizationLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [introFinished, setIntroFinished] = useState(false);
  const finishIntro = useCallback(() => setIntroFinished(true), []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrandLoader onComplete={finishIntro} />
      {introFinished && <CookieConsent />}
      <Header />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}
