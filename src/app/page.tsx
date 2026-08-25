import { ViewTransition } from "react";

import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

// The public wording here is deliberate; this file owns its layout, not the
// copy.

const works = [
  {
    title: "Order portal with product calculators",
    task: "Building-materials company needed customers to configure and order products with non-trivial quantity math.",
    did: "Built the portal from scratch; it is still live in production.",
    stack: ["PHP", "MySQL", "JavaScript"],
    links: [{ href: "https://orders.avotini.lv", label: "orders.avotini.lv" }],
  },
  {
    title: "expo-tts-file",
    task: "React Native apps needed on-device text-to-speech rendered into audio files, offline.",
    did:
      "Authored the Expo native module in Swift and Kotlin behind one typed TypeScript API. Verified on physical iOS and Android devices; CI runs typecheck, lint and 28 tests.",
    stack: ["Expo Modules", "Kotlin", "Swift", "TypeScript"],
    // The tts.ksblazh.dev landing joins this list once it is live.
    links: [
      { href: "https://github.com/ksblazh/expo-tts-file", label: "GitHub" },
      { href: "https://www.npmjs.com/package/expo-tts-file", label: "npm" },
    ],
  },
  {
    title: "WordPress → React Native content pipeline",
    task: "Editors needed to keep authoring in WordPress while the content ships inside a mobile app.",
    did: "Built a custom WP plugin: create/edit content via the WordPress REST API with seamless delivery into the React Native app.",
    stack: ["WordPress", "PHP", "REST API", "React Native"],
    links: [],
  },
  {
    title: "Public engineering work",
    task: "A Claude Code host-freeze incident needed a root cause, not a workaround.",
    did: "Traced it to the vendored ugrep, shipped a deterministic reproduction, then verified the upstream fix on the original artifact: 7,569 MiB peak down to 347 MiB.",
    stack: ["Linux", "cgroups", "regex engines"],
    links: [
      { href: "https://github.com/anthropics/claude-code/issues/86238", label: "RCA #86238" },
      {
        href: "https://github.com/anthropics/claude-code/issues/82179#issuecomment-5347207995",
        label: "Fix verified #82179",
      },
    ],
  },
];

const skills = [
  { group: "Frontend", items: "JavaScript, TypeScript, React, React Native, Vue, HTML, CSS, responsive design" },
  { group: "Backend", items: "PHP, Node.js, REST APIs, MySQL, PostgreSQL" },
  { group: "CMS and tools", items: "WordPress, Tilda, Git" },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: [site.github, ...(site.linkedin ? [site.linkedin] : [])],
};

// Slot in the hero stagger (globals.css .rise); a helper because CSS custom
// properties need a cast in style objects.
const rise = (i: number) => ({ "--rise": i }) as React.CSSProperties;

function SectionHeading({ index, id, children }: { index: string; id: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span aria-hidden="true" className="font-mono text-sm text-accent">
        {index}
      </span>
      <h2 id={id} className="text-2xl font-semibold tracking-tight">
        {children}
      </h2>
      <span aria-hidden="true" className="h-px grow bg-edge" />
    </div>
  );
}

export default function Home() {
  return (
    <ViewTransition>
      <main id="main" className="mx-auto w-full max-w-3xl grow px-5">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {/* Hero — a one-time CSS stagger, deliberately the page's only entrance scene. */}
        <header aria-label="Intro" className="pt-20 pb-8 sm:pt-32">
          <p aria-hidden="true" className="rise font-mono text-sm text-muted" style={rise(0)}>
            <span className="text-accent">~</span> $ whoami
          </p>
          <h1
            className="rise mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
            style={rise(1)}
          >
            {site.name}
          </h1>
          <p className="rise mt-3 text-xl text-accent sm:text-2xl" style={rise(2)}>
            {site.role}
          </p>
          <p className="rise mt-6 max-w-prose text-muted" style={rise(3)}>
            {site.tagline}
          </p>
          <nav aria-label="Primary" className="rise mt-9 flex flex-wrap items-center gap-3" style={rise(4)}>
            <a className="btn btn-solid" href="#works">
              View works
            </a>
            <a className="btn btn-ghost" href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {site.resumeUrl && (
              <a className="btn btn-ghost" href={site.resumeUrl} target="_blank" rel="noreferrer">
                Resume (PDF)
              </a>
            )}
          </nav>
        </header>

        <section id="works" aria-labelledby="works-h" className="mt-24 scroll-mt-24">
          <Reveal>
            <SectionHeading index="01" id="works-h">
              Selected works
            </SectionHeading>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {works.map((w, i) => (
              <Reveal key={w.title} as="li" delay={i * 0.07}>
                <article className="glow-card flex h-full flex-col rounded-lg border border-edge bg-card p-5">
                  <h3 className="font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted">{w.task}</p>
                  <p className="mt-2 text-sm">{w.did}</p>
                  <ul aria-label="Stack" className="mt-4 flex flex-wrap gap-1.5">
                    {w.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded border border-edge px-1.5 py-0.5 font-mono text-xs text-muted"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  {w.links.length > 0 && (
                    <p className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-4">
                      {w.links.map((l) => (
                        <a
                          key={l.href}
                          className="slide-link inline-flex items-center gap-1.5 font-mono text-sm text-accent"
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {l.label}
                          <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </p>
                  )}
                </article>
              </Reveal>
            ))}
            {/* Colophon — the site itself is the freshest exhibit; the one
                card that links to source you can actually read. */}
            <Reveal as="li" className="sm:col-span-2" delay={0.1}>
              <article className="glow-card flex h-full flex-col rounded-lg border border-edge bg-card p-5">
                <p aria-hidden="true" className="font-mono text-sm text-muted">
                  <span className="text-accent">~</span> $ cat colophon
                </p>
                <h3 className="mt-3 font-semibold">{site.domain}</h3>
                <p className="mt-2 max-w-prose text-sm text-muted">
                  The site you are reading, built as its own exhibit. Fully
                  static, both themes from one token set, animations on a
                  strict transform/opacity budget, Lighthouse 95+ across all
                  four categories on mobile.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <ul aria-label="Stack" className="flex flex-wrap gap-1.5">
                    {["Next.js", "TypeScript", "Tailwind", "Framer Motion", "View Transitions"].map(
                      (s) => (
                        <li
                          key={s}
                          className="rounded border border-edge px-1.5 py-0.5 font-mono text-xs text-muted"
                        >
                          {s}
                        </li>
                      )
                    )}
                  </ul>
                  <a
                    className="slide-link ml-auto inline-flex items-center gap-1.5 font-mono text-sm text-accent"
                    href={site.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            </Reveal>
          </ul>
        </section>

        <section aria-labelledby="about-h" className="mt-24 scroll-mt-24">
          <Reveal>
            <SectionHeading index="02" id="about-h">
              About
            </SectionHeading>
          </Reveal>
          <Reveal>
            <p className="mt-8 max-w-prose leading-relaxed">
              Web and mobile, in React, React Native and TypeScript. A web
              studio first, then freelance. Built a landlord and tenant portal
              from scratch at the studio and coordinated a development team
              there. Delivered dozens of client sites and internal systems end
              to end on freelance. BS and MS in Mathematics, with an emphasis
              on mathematical logic and theory of algorithms. Now pursuing an
              MSCS (AI) at Westcliff University, Orlando, researching LLM
              tooling and agentic development with the Claude API and Claude
              Code.
            </p>
          </Reveal>
        </section>

        <section aria-labelledby="skills-h" className="mt-24 scroll-mt-24">
          <Reveal>
            <SectionHeading index="03" id="skills-h">
              Skills
            </SectionHeading>
          </Reveal>
          <Reveal>
            <dl className="mt-8 space-y-4">
              {skills.map((s) => (
                <div key={s.group} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="shrink-0 font-mono text-sm leading-6 text-accent sm:w-36">
                    {s.group}
                  </dt>
                  <dd className="text-muted">{s.items}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        <footer aria-label="Contact" className="mt-24 mb-16 scroll-mt-24">
          <Reveal>
            <SectionHeading index="04" id="contact-h">
              Contact
            </SectionHeading>
          </Reveal>
          <Reveal>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                className="slide-link font-mono text-accent"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
              <a
                className="slide-link font-mono text-muted"
                href={site.github}
                target="_blank"
                rel="noreferrer"
              >
                github.com/ksblazh
              </a>
              {/* LinkedIn joins when the profile is live. */}
              {site.linkedin && (
                <a
                  className="slide-link font-mono text-muted"
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              )}
              {site.resumeUrl && (
                <a className="btn btn-ghost" href={site.resumeUrl} target="_blank" rel="noreferrer">
                  Resume (PDF)
                </a>
              )}
            </div>
          </Reveal>
          <p className="mt-14 border-t border-edge pt-6 font-mono text-xs text-muted">
            © 2026 {site.name}
          </p>
        </footer>
      </main>
    </ViewTransition>
  );
}
