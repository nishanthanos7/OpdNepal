import Link from "next/link";
import { navLinks, primaryCta, siteConfig } from "@/lib/site";
import { Container } from "./Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur supports-backdrop-filter:bg-paper/70">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label={`${siteConfig.name} — home`}
          >
            <span
              aria-hidden
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-paper-2 transition-colors group-hover:border-accent"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
                aria-hidden
              >
                <path d="M4 12h4l2-5 4 10 2-5h4" />
              </svg>
            </span>
            <span className="font-serif text-xl tracking-tight text-ink">
              {siteConfig.name}
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 md:flex"
          >
            {navLinks
              .filter((l) => l.href !== "/")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          <Link
            href={primaryCta.href}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            {primaryCta.label}
          </Link>
        </div>
      </Container>
    </header>
  );
}
