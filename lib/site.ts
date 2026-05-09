// Central, single source of truth for brand, contact and navigation.
// Replace the placeholder values (marked TODO) with your real details
// before launch. Keeping this in one file means every page, the SEO
// metadata, the header, the footer and the schema.org JSON-LD all stay
// in sync — change it once here.

export const siteConfig = {
  name: "Praxis",
  tagline: "Websites for Nepal's medical professionals",
  description:
    "Calm, fast, professional websites for doctors, clinics and hospitals in Nepal — from a one-page portfolio to a full appointment-booking system. Built by a developer who works only in healthcare.",
  // TODO: replace with your real production domain once live.
  url: "https://praxis.np",
  author: "Praxis Studio",
  // TODO: replace contact details with your real ones.
  contact: {
    email: "hello@praxis.np",
    phone: "+977 98XXXXXXXX",
    whatsapp: "+9779800000000",
    location: "Kathmandu, Nepal",
    hours: "Sun–Fri, 10:00 – 18:00 NPT",
  },
  social: {
    // TODO: fill these in or remove the ones you don't use.
    linkedin: "https://www.linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
    twitter: "https://x.com/your-handle",
  },
  // Founding-client scarcity counter (real, honest scarcity — update
  // manually as slots fill). Drives the "X of 5 slots left" badge.
  foundingSlotsTotal: 5,
  foundingSlotsTaken: 2,
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/audit", label: "Free audit" },
  { href: "/contact", label: "Contact" },
] as const;

export const primaryCta = {
  href: "/audit",
  label: "Get a free 7-minute audit",
} as const;

export const secondaryCta = {
  href: "/services",
  label: "See what I build",
} as const;
