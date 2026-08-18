# ksblazh.dev

Personal site of [Kseniia Blazhkovskaia](https://github.com/ksblazh) — frontend
developer. The site is deliberately small and deliberately measured: one page,
one accent color, a strict animation budget, and a hard performance bar.

**Live:** [ksblazh.dev](https://ksblazh.dev)

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript, fully static
  (`output: "export"`)
- [Tailwind CSS v4](https://tailwindcss.com) with a token-first theme
- [Framer Motion](https://motionjs.dev) for one-shot scroll reveals
- View Transitions API (React `<ViewTransition>`) for page transitions

## Engineering notes

- **Theming** runs on `color-scheme` + `light-dark()`: every color token is
  declared once, the toggle flips a single `data-theme` attribute, and with no
  override the system preference applies natively — no flash, no duplicated
  palettes.
- **Animation policy:** transform/opacity only. Glows and underlines animate
  pseudo-element opacity/transform instead of `box-shadow` or layout
  properties; color changes are instant by design. `prefers-reduced-motion`
  disables everything.
- **Fonts** are committed latin-subset variable woff2 files served via
  `next/font/local` (Space Grotesk + JetBrains Mono, ~62 KB total, OFL — see
  `src/app/fonts/`). No network at build time.
- **Budget:** Lighthouse ≥ 95 on all four categories, mobile; WCAG AA
  contrast on every fg/bg pair; responsive from 320px.

## Development

```bash
npm ci
npm run dev        # dev server
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
npm run build      # static export into out/
```

CI runs lint, typecheck and build on every push.
