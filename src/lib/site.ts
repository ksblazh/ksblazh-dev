// Single source of truth for site-wide facts: metadata, JSON-LD, analytics
// and links all read from here. The public wording is deliberate.

export const site = {
  url: "https://ksblazh.dev",
  domain: "ksblazh.dev",
  name: "Kseniia Blazhkovskaia",
  role: "Frontend Developer",
  tagline:
    "9+ years of hands-on web development. React and React Native. MS in Mathematics, now researching AI-assisted workflows.",
  email: "ksblazh@gmail.com",
  github: "https://github.com/ksblazh",
  // Joins the contact row once the profile is live.
  linkedin: null as string | null,
  // Becomes "/resume.pdf" once the PDF lands in public/; until then the
  // Resume buttons stay hidden rather than pointing at a 404.
  resumeUrl: null as string | null,
  // GA4 measurement id comes from the deploy environment, not the repo, so
  // enabling analytics is a hosting setting rather than a code change.
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? null,
};
