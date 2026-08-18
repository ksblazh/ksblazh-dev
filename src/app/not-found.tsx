import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";

import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `404 — ${site.name}`,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <ViewTransition>
      <main id="main" className="grid grow place-items-center px-5 py-24">
        <div className="text-center">
          <p className="font-mono text-sm text-muted">
            <span className="text-accent">HTTP</span> 404
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Route not found</h1>
          <p className="mt-3 text-muted">
            This path does not exist on {site.domain}.
          </p>
          <p className="mt-9">
            <Link className="btn btn-ghost" href="/">
              <span aria-hidden="true">←</span> Back home
            </Link>
          </p>
        </div>
      </main>
    </ViewTransition>
  );
}
