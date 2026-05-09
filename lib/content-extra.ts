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
    name: "Doctor Portfolio",
    price: "NPR 9,999",
    priceNote: "one-time, all-in",
    pitch:
      "A polished single-doctor site that quietly says: this is a serious clinician — and earns the patient's trust before they ever pick up the phone.",
    features: [
      "Single-page portfolio, mobile-first",
      "Credentials, specialties & affiliations",
      "Click-to-call & WhatsApp button",
      "Google Maps + Google Business setup",
      "Basic SEO so your name ranks on Google",
      "Live in 7–10 days",
      "30 days of free tweaks after launch",
    ],
    ctaLabel: "Start with the portfolio — NPR 9,999",
    ctaHref: "/contact?plan=portfolio",
    highlighted: true,
    badge: "Most doctors start here",
  },
  {
    name: "Clinic Website + Booking",
    price: "NPR 39,999",
    priceNote: "one-time",
    pitch:
      "A multi-page clinic site with real online appointment requests — for clinics ready to stop juggling phone calls.",
    features: [
      "Up to 8 pages (services, team, FAQs…)",
      "Online appointment booking",
      "Doctor profiles & availability",
      "Email + SMS confirmations",
      "City + specialty SEO",
      "Bilingual: English / नेपाली",
      "Delivered in ~3–4 weeks",
    ],
    ctaLabel: "Choose Clinic + Booking",
    ctaHref: "/contact?plan=clinic",
  },
  {
    name: "Hospital / OPD System",
    price: "Custom",
    priceNote: "quoted per project",
    pitch: "Multi-department hospitals and groups with bespoke needs.",
    features: [
      "Departments, doctors, careers, news",
      "Full OPD / clinic management modules",
      "Multi-language (English / नेपाली)",
      "Integrations (HMIS, payments, lab)",
      "Quoted after a discovery call",
    ],
    ctaLabel: "Request a quote",
    ctaHref: "/contact?plan=hospital",
  },
];

// NOTE: Names below are illustrative placeholders — swap each one for a
// real, signed-off testimonial as clients agree to be quoted.
export const testimonials: {
  quote: string;
  name: string;
  role: string;
  location: string;
}[] = [
  {
    quote:
      "Within ten days my portfolio site was live. Patients now find me on Google before they call — and they arrive already trusting me. NPR 9,999 well spent.",
    name: "Dr. Anjali Sharma",
    role: "General Practitioner",
    location: "Lalitpur",
  },
  {
    quote:
      "Nishan understood the medical side faster than any developer we had spoken to before. The questions he asked about our OPD flow were the right ones from day one.",
    name: "Bishal Adhikari",
    role: "Clinic Administrator, Aastha Polyclinic",
    location: "Kathmandu",
  },
  {
    quote:
      "Calm, professional, on time, and honest about price. The website finally looks like our clinic feels in person — and bookings started in the first week.",
    name: "Dr. Rajan Shrestha",
    role: "Consultant Dermatologist",
    location: "Pokhara",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Do you only build for medical clients?",
    a: "Yes. I work exclusively with doctors, clinics and hospitals in Nepal. That focus is the reason I can move fast and ask the right questions — I'm not learning your world from scratch on your project.",
  },
  {
    q: "Why is the Doctor Portfolio only NPR 9,999?",
    a: "Because the goal is to remove every reason to hesitate. Most doctors in Nepal still have no real website at all — and the longer that stays true, the more patients they quietly lose. NPR 9,999 is priced as the smallest possible commitment that still produces a real, professional, fast portfolio site. It is the package most doctors start with, and most upgrade later.",
  },
  {
    q: "How long does a typical project take?",
    a: "A Doctor Portfolio site is live in 7–10 days. A full Clinic Website with online booking takes 3–4 weeks. Hospital and OPD-system projects depend on scope and are quoted after a discovery call.",
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
    a: "Bilingual English / नेपाली sites are included on the Clinic and Hospital tiers. On the Doctor Portfolio you can start in English and add Nepali later for a small one-time fee.",
  },
  {
    q: "What happens after launch?",
    a: "You get 30 days of free tweaks — small copy changes, photo swaps, bug fixes. After that, ongoing care plans start at NPR 1,499/month, or you can self-manage. No lock-in.",
  },
];
