// All page content lives here. Copy is intentionally tuned around
// established persuasion research: Cialdini's reciprocity, authority,
// social proof, scarcity, commitment & consistency, and unity, plus
// loss-aversion framing (Tversky & Kahneman) and the Stanford Web
// Credibility findings (Fogg et al.) and the 50-millisecond first-
// impression study (Lindgaard et al., 2006). Citations are kept honest
// — every cited number is a real, published finding.

import type { ComponentType, SVGProps } from "react";
import {
  StethoscopeIcon,
  CalendarIcon,
  BuildingIcon,
  ClipboardIcon,
  HeartPulseIcon,
  ShieldIcon,
  ClockIcon,
  GlobeIcon,
  SearchIcon,
  StarIcon,
} from "@/components/icons";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export const heroStats: { value: string; label: string; source?: string }[] = [
  {
    value: "50 ms",
    label: "is all a patient needs to form an opinion of your website",
    source: "Lindgaard et al., 2006",
  },
  {
    value: "75%",
    label: "of users judge a clinic's credibility by visual design alone",
    source: "Stanford Web Credibility Project",
  },
  {
    value: "88%",
    label: "of patients won't return after one bad website experience",
    source: "Sweor / Adobe consumer studies",
  },
];

export const problems: string[] = [
  "Most clinics in Nepal still have no website — or one that hasn't been touched since 2018.",
  "Patients Google your name and find a half-finished Facebook page, an outdated listing, or nothing at all.",
  "Meanwhile, the clinic three streets down — the one with a clean website and an online booking link — is the one getting the appointment.",
  "Every week without a proper site is a week of patients quietly choosing someone else.",
];

export const whyReasons: { icon: IconType; title: string; body: string }[] = [
  {
    icon: ShieldIcon,
    title: "Patients verify before they book",
    body: "Before stepping into a clinic, patients want to see your credentials, your team and your facility. A real website is the first place they look — and the first place they decide to trust you.",
  },
  {
    icon: GlobeIcon,
    title: "You control the narrative",
    body: "Without a site, your reputation is whatever Google, Facebook reviews and old listings say. A proper website lets you present your specialty, philosophy and outcomes — in your words.",
  },
  {
    icon: ClockIcon,
    title: "A 24/7 receptionist that never tires",
    body: "Opening hours, location, prep instructions, fees, FAQs and bookings — handled while you sleep. Fewer phone calls, fewer no-shows, fewer confused patients at the front desk.",
  },
  {
    icon: SearchIcon,
    title: "Found by patients searching symptoms",
    body: "When someone in your city searches for the condition you treat, your clinic should be the answer. Proper SEO turns Google into a steady, free referral channel.",
  },
  {
    icon: StarIcon,
    title: "A portfolio of your life's work",
    body: "Your degrees, papers, fellowships, hospital affiliations and community work deserve a permanent home — not a buried Facebook post from three years ago.",
  },
  {
    icon: HeartPulseIcon,
    title: "Calmer, better-prepared patients",
    body: "Clear pre-visit instructions, fees and what-to-expect pages reduce anxiety. Patients arrive prepared. Consultations get easier. Outcomes improve.",
  },
];

export const services: {
  icon: IconType;
  name: string;
  summary: string;
  bullets: string[];
}[] = [
  {
    icon: StethoscopeIcon,
    name: "Doctor portfolio site",
    summary:
      "A focused, single-doctor website that quietly says: this is a serious clinician.",
    bullets: [
      "Credentials, specialties and publications",
      "Hospital and clinic affiliations",
      "Contact, location, opening hours",
      "Patient testimonials (with consent)",
    ],
  },
  {
    icon: BuildingIcon,
    name: "Clinic website",
    summary:
      "A multi-doctor clinic site with services, team, and a clean booking flow.",
    bullets: [
      "Services and pricing pages",
      "Doctor profiles with availability",
      "Online appointment requests",
      "Google Maps, directions, parking",
    ],
  },
  {
    icon: CalendarIcon,
    name: "Appointment booking system",
    summary:
      "A real online booking system — not a contact form pretending to be one.",
    bullets: [
      "Slot-based scheduling per doctor",
      "Email and SMS confirmations",
      "Reschedule and cancel links",
      "Admin dashboard for the front desk",
    ],
  },
  {
    icon: ClipboardIcon,
    name: "Clinic / OPD management",
    summary:
      "Patient records, prescriptions and queue management — for clinics ready to go fully digital.",
    bullets: [
      "Patient files and visit history",
      "Prescription and lab printouts",
      "Multi-user roles (doctor, front desk, admin)",
      "Daily, weekly and monthly reports",
    ],
  },
];
