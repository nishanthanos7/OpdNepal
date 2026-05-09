// Process steps, pricing, testimonials and FAQ. Split out from
// content.ts to keep each file readable at a glance.

export const processSteps: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Free 7-minute audit",
    body: "I look at how your clinic shows up online today — Google, Facebook, existing site, mobile speed — and send you a short, honest report. No commitment.",
  },
  {
    step: "02",
    title: "30-minute discovery call",
    body: "We talk about your clinic, your patients and what you want a website to actually do for you. I take notes; you ask anything.",
  },
  {
    step: "03",
    title: "Quote and timeline",
    body: "A fixed-price quote, a clear scope, and a written timeline. No hourly billing surprises. You approve before any code is written.",
  },
  {
    step: "04",
    title: "Design and build",
    body: "I share design previews early and often. You see real progress every few days, not a black box for six weeks.",
  },
  {
    step: "05",
    title: "Launch and 30 days of free tweaks",
    body: "We go live together. For the next 30 days, any small change is free — copy edits, photo swaps, fixes. After that, ongoing care is optional.",
  },
];

export const pricingTiers: {
  name: string;
  price: string;
  priceNote: string;
  pitch: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
}[] = [
  {
    name: "Starter",
    price: "NPR 24,999",
    priceNote: "one-time",
    pitch: "A polished single-page presence for a solo doctor.",
    features: [
      "1-page portfolio site",
      "Mobile-first, fast on Nepal networks",
      "Contact form and Google Maps",
      "Basic SEO and Google Business setup",
      "Delivered in ~10 days",
    ],
    ctaLabel: "Start with Starter",
    ctaHref: "/contact?plan=starter",
  },
  {
    name: "Practice",
    price: "NPR 74,999",
    priceNote: "one-time",
    pitch: "A full clinic website with online booking. Best fit for most clinics.",
    features: [
      "Up to 8 pages (services, team, FAQs…)",
      "Online appointment booking",
      "Doctor profiles and availability",
      "SEO for your city and specialty",
      "Email + SMS notifications",
      "Delivered in ~3–4 weeks",
    ],
    ctaLabel: "Choose Practice",
    ctaHref: "/contact?plan=practice",
    highlighted: true,
    badge: "Most clinics pick this",
  },
  {
    name: "Hospital",
    price: "Custom",
    priceNote: "quoted per project",
    pitch: "Multi-department hospitals and groups with bespoke needs.",
    features: [
      "Departments, doctors, careers, news",
      "OPD / clinic management modules",
      "Multi-language (English / नेपाली)",
      "Integrations (HMIS, payments, lab)",
      "Quoted after a discovery call",
    ],
    ctaLabel: "Request a quote",
    ctaHref: "/contact?plan=hospital",
  },
];

// NOTE: Replace these with real, signed-off testimonials before launch.
// Showing pilot-client labels is honest while you collect real ones.
export const testimonials: {
  quote: string;
  name: string;
  role: string;
  location: string;
}[] = [
  {
    quote:
      "Our front desk used to spend half the day answering 'where are you' and 'are you open today'. The new site quietly handled all of it. Bookings started coming in the first week.",
    name: "Dr. (pilot client)",
    role: "General Practitioner",
    location: "Lalitpur",
  },
  {
    quote:
      "He understood the medical side faster than any developer we'd talked to before. The questions he asked about our patients were the right ones.",
    name: "Clinic administrator (pilot client)",
    role: "Multi-doctor clinic",
    location: "Kathmandu",
  },
  {
    quote:
      "Calm, professional, and on time. The website finally looks like our clinic feels in person.",
    name: "Dr. (pilot client)",
    role: "Dermatologist",
    location: "Pokhara",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Do you only build for medical clients?",
    a: "Yes. I work exclusively with doctors, clinics and hospitals in Nepal. That focus is the reason I can move fast and ask the right questions — I'm not learning your world from scratch on your project.",
  },
  {
    q: "How long does a typical project take?",
    a: "A doctor portfolio site is usually live in about 10 days. A full clinic site with online booking takes 3–4 weeks. Hospital projects depend on scope and are quoted after a discovery call.",
  },
  {
    q: "What do I need to provide?",
    a: "Your credentials, a few photos, your services and prices, and around two hours of your time spread across the project. I write the first draft of the copy for you — you only edit.",
  },
  {
    q: "Will my website work on slow internet?",
    a: "Yes. Sites are built mobile-first and optimised for Nepal's networks. Pages typically load in under two seconds on 4G.",
  },
  {
    q: "What about Nepali language?",
    a: "Bilingual English / नेपाली sites are fully supported on the Practice and Hospital tiers. You can also start in English and add Nepali later.",
  },
  {
    q: "What happens after launch?",
    a: "You get 30 days of free tweaks — small copy changes, photo swaps, bug fixes. After that, ongoing care plans start at NPR 2,500/month, or you can self-manage. No lock-in.",
  },
];
