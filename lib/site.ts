// Central, single source of truth for brand, contact and navigation.
// Replace the placeholder values (marked TODO) with your real details
// before launch. Keeping this in one file means every page, the SEO
// metadata, the header, the footer and the schema.org JSON-LD all stay
// in sync — change it once here.

export const siteConfig = {
  name: "OpdNepal",
  tagline: "Websites for Nepal's medical professionals",
  description:
    "Calm, fast, professional websites for doctors, clinics and hospitals in Nepal — from a NPR 9,999 portfolio site to a full OPD management system. Built by Nishan Poudel, a Kathmandu-based developer who works only in healthcare.",
  // TODO: replace with your real production domain once live.
  url: "https://opdnepal.com",
  author: "Nishan Poudel",
  studio: "OpdNepal",
  contact: {
    email: "nishan.poudel12345@gmail.com",
    phone: "+977 9847010250",
    whatsapp: "+9779847010250",
    location: "Kathmandu, Nepal",
    hours: "Sun–Fri, 10:00 – 18:00 NPT",
  },
  social: {
    // TODO: fill these in or remove the ones you don't use.
    linkedin: "https://www.linkedin.com/in/nishan-poudel",
    github: "https://github.com/nishan-poudel",
    twitter: "https://x.com/nishan_poudel",
  },
  // Founding-client scarcity counter (real, honest scarcity — update
  // manually as slots fill). Drives the "X of 5 slots left" badge.
  foundingSlotsTotal: 5,
  foundingSlotsTaken: 3,
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
