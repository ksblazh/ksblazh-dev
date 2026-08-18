import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

// Metadata routes must opt into static rendering under `output: "export"`.
export const dynamic = "force-static";

// One-pager: the root is the only canonical URL; works live on subdomains
// with their own indexing.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
