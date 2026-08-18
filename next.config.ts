import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: hostable on Cloudflare Pages or Vercel alike.
  output: "export",
  // Static export has no image optimizer server; screenshots get committed
  // pre-sized instead, which the performance budget prefers anyway.
  images: { unoptimized: true },
};

export default nextConfig;
