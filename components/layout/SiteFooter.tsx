import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";
import { Container } from "./Container";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper-2/60">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-2xl tracking-tight text-ink">
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-7 text-mute">
              {siteConfig.tagline}. A small studio of one — built around the
              way doctors and clinics in Nepal actually work.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-mute">
              Site
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-mute">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/80">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="text-mute">{siteConfig.contact.location}</li>
              <li className="text-mute">{siteConfig.contact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Built in Kathmandu.
          </p>
          <p className="font-serif italic">
            “First, do no harm — to your patients, or their experience online.”
          </p>
        </div>
      </Container>
    </footer>
  );
}
