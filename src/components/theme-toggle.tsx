"use client";

// Two-state toggle over a system default: with no stored choice the site
// follows prefers-color-scheme (no data-theme attribute at all); the first
// click pins the opposite of whatever is currently resolved. The icons are
// swapped by CSS (.when-light/.when-dark), so this renders identically on
// server and client — no hydration dance.
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const isDark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    const next = isDark ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works
      // for the session.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch color theme"
      className="flex size-10 items-center justify-center rounded-md border border-edge text-muted hover:border-accent/55 hover:text-accent"
    >
      {/* Sun — shown in dark mode (click = go light). */}
      <svg
        className="when-dark size-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4" />
      </svg>
      {/* Moon — shown in light mode (click = go dark). */}
      <svg
        className="when-light size-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
    </button>
  );
}
