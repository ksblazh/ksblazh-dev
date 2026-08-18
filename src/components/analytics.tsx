import Script from "next/script";

import { site } from "@/lib/site";

// GA4. Renders nothing until NEXT_PUBLIC_GA_ID is set in the deploy
// environment, so local and CI builds stay analytics-free.
export function Analytics() {
  if (!site.gaId) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaId}');`}
      </Script>
    </>
  );
}
