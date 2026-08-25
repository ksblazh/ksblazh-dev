import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Analytics } from "@/components/analytics";
import { MotionProvider } from "@/components/motion-provider";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

// Committed woff2 only (see fonts/README.md): builds need no network, and the
// Lighthouse budget prefers a preloaded latin-subset variable font anyway.
const sans = localFont({
  src: "./fonts/space-grotesk-latin-wght-normal.woff2",
  weight: "300 700",
  variable: "--font-space-grotesk",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/jetbrains-mono-latin-wght-normal.woff2",
  weight: "100 800",
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const pageTitle = `${site.name} | ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: pageTitle,
  description: site.tagline,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.domain,
    title: pageTitle,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: site.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f9f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f14" },
  ],
};

// Applies a stored theme override before first paint; without one the CSS
// color-scheme default follows the system preference.
const themeInit = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

// Not the generated LayoutProps<"/">: that global only exists after a build
// writes .next/types, so a clean-checkout `tsc --noEmit` (CI runs it before
// build) would fail on it. Explicit props are version-proof.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
      // The theme override lands on <html> before hydration by design.
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
