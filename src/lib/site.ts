// Single source of truth for site-wide facts: metadata, JSON-LD, analytics
// and links all read from here. The public wording is deliberate.

export const site = {
  url: "https://ksblazh.dev",
  domain: "ksblazh.dev",
  name: "Kseniia Blazhkovskaia",
  role: "Frontend Developer",
  tagline:
    "Working across web and mobile in React, React Native, Next.js and TypeScript. MS in Mathematics, now researching AI-assisted workflows.",
  email: "ksblazh@gmail.com",
  github: "https://github.com/ksblazh",
  repo: "https://github.com/ksblazh/ksblazh-dev",
  linkedin: "https://www.linkedin.com/in/ksblazh" as string | null,
  // Set to null to hide the Resume buttons (e.g. while the PDF is being
  // replaced) rather than point them at a 404.
  // Named for the download folder it lands in, not for the repo.
  resumeUrl: "/Kseniia-Blazhkovskaia-Resume.pdf" as string | null,
  // GA4 measurement id comes from the deploy environment, not the repo, so
  // enabling analytics is a hosting setting rather than a code change.
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? null,
};
