// Process steps, pricing, testimonials and FAQ. Split out from
// content.ts to keep each file readable at a glance.

export const processSteps: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Free 7-minute audit",
    body: "I look at how your clinic shows up on Google, Facebook and mobile — and send a short report. No commitment.",
  },
  {
    step: "02",
    title: "30-minute call",
    body: "We talk about your clinic and what you want a website to do for you. You ask anything.",
  },
  {
    step: "03",
    title: "Quote & timeline",
    body: "A fixed price, a clear scope and a written timeline. You approve before any code is written.",
  },
  {
    step: "04",
    title: "Design & build",
    body: "You see real progress every few days — not a black box for six weeks.",
  },
  {
    step: "05",
    title: "Launch + 30 free tweaks",
    body: "We go live together. For 30 days, small changes are free. Ongoing care is optional.",
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
      "A polished single-doctor site that earns the patient's trust before they pick up the phone.",
    features: [
      "Single-page portfolio, mobile-first",
      "Credentials, specialties & affiliations",
      "Click-to-call & WhatsApp button",
      "Google Maps + Google Business setup",
      "Basic SEO so your name ranks",
      "Live in 7–10 days",
      "30 days of free tweaks",
    ],
    ctaLabel: "Start with the portfolio — NPR 9,999",
    ctaHref: "/contact?plan=portfolio",
    highlighted: true,
    badge: "Most doctors start here",
  },
  {
    name: "Clinic Website + Booking",
    price: "On request",
    priceNote: "fixed quote after a short call",
    pitch:
      "A multi-page clinic site with real online appointment requests — for clinics ready to stop juggling phone calls.",
    features: [
      "Up to 8 pages (services, team, FAQs…)",
      "Online appointment booking",
      "Doctor profiles & availability",
      "Email + SMS confirmations",
      "City & specialty SEO",
      "Bilingual: English / नेपाली",
      "Delivered in ~3–4 weeks",
    ],
    ctaLabel: "Ask for a quote",
    ctaHref: "/contact?plan=clinic",
  },
  {
    name: "Hospital / OPD System",
    price: "On request",
    priceNote: "quoted per project",
    pitch: "Multi-department hospitals and groups with bespoke needs.",
    features: [
      "Departments, doctors, careers, news",
      "Full OPD / clinic management",
      "Multi-language (English / नेपाली)",
      "HMIS, payment & lab integrations",
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
    a: "Yes — only doctors, clinics and hospitals in Nepal. That focus is why I can move fast and ask the right questions from day one.",
  },
  {
    q: "Why is the Doctor Portfolio only NPR 9,999?",
    a: "To remove every reason to hesitate. Most doctors in Nepal still have no real website. NPR 9,999 is the smallest step that still produces a fast, professional site. Most doctors start here and upgrade later.",
  },
  {
    q: "How long does a project take?",
    a: "Doctor Portfolio: 7–10 days. Clinic Website with booking: 3–4 weeks. Hospital / OPD systems: quoted after a call.",
  },
  {
    q: "What do you need from me?",
    a: "Your credentials, a few photos, your services, and roughly two hours of your time across the project. I write the first draft of the copy — you only edit.",
  },
  {
    q: "Will it work on slow internet?",
    a: "Yes. Sites are mobile-first and tuned for Nepal's networks — pages typically load in under two seconds on 4G.",
  },
  {
    q: "What about Nepali language?",
    a: "Bilingual English / नेपाली is included on Clinic and Hospital tiers. On Portfolio you can start in English and add Nepali later.",
  },
  {
    q: "What happens after launch?",
    a: "30 days of free tweaks — copy changes, photo swaps, small fixes. After that, ongoing care is optional. No lock-in.",
  },
];
