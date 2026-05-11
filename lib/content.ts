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
    label: "is all a patient needs to judge your website.",
    source: "Lindgaard et al., 2006",
  },
  {
    value: "75%",
    label: "decide if they trust a clinic from its design alone.",
    source: "Stanford Web Credibility Project",
  },
  {
    value: "88%",
    label: "don't come back after one bad website visit.",
    source: "Sweor / Adobe",
  },
];

export const problems: string[] = [
  "Most clinics in Nepal still have no website — or one stuck in 2018.",
  "Patients Google your name and find a half-finished Facebook page, or nothing at all.",
  "The clinic with a clean website and online booking is the one getting the appointment.",
  "Every week without a proper site is patients quietly choosing someone else.",
];

export const whyReasons: { icon: IconType; title: string; body: string }[] = [
  {
    icon: ShieldIcon,
    title: "Patients check before they book",
    body: "They want to see your credentials, your team, your clinic. A real website is where they decide to trust you.",
  },
  {
    icon: GlobeIcon,
    title: "You control your story",
    body: "Without a site, Google and old Facebook posts speak for you. A website lets you speak for yourself.",
  },
  {
    icon: ClockIcon,
    title: "A 24/7 receptionist",
    body: "Hours, location, fees, prep instructions, bookings — answered while you sleep. Fewer phone calls, fewer no-shows.",
  },
  {
    icon: SearchIcon,
    title: "Found on Google",
    body: "When patients in your city search your specialty, your clinic should be the answer. SEO done right brings steady referrals.",
  },
  {
    icon: StarIcon,
    title: "A home for your work",
    body: "Degrees, papers, fellowships, affiliations — in one calm page, not lost in old social posts.",
  },
  {
    icon: HeartPulseIcon,
    title: "Calmer patients",
    body: "Clear instructions before the visit mean prepared patients, easier consultations and better outcomes.",
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
    summary: "A clean single-doctor website that earns trust before the first call.",
    bullets: [
      "Credentials, specialties, publications",
      "Hospital & clinic affiliations",
      "Contact, location, hours",
      "Patient testimonials (with consent)",
    ],
  },
  {
    icon: BuildingIcon,
    name: "Clinic website",
    summary: "A multi-doctor clinic site with services, team and a simple booking flow.",
    bullets: [
      "Services & pricing pages",
      "Doctor profiles & availability",
      "Online appointment requests",
      "Google Maps & directions",
    ],
  },
  {
    icon: CalendarIcon,
    name: "Appointment booking",
    summary: "A real online booking system — not a contact form in disguise.",
    bullets: [
      "Slot-based scheduling per doctor",
      "Email & SMS confirmations",
      "Reschedule & cancel links",
      "Front-desk dashboard",
    ],
  },
  {
    icon: ClipboardIcon,
    name: "Clinic / OPD management",
    summary: "Patient records, prescriptions and queue management — for clinics going fully digital.",
    bullets: [
      "Patient files & visit history",
      "Prescription & lab printouts",
      "Doctor, front-desk & admin roles",
      "Daily, weekly, monthly reports",
    ],
  },
];
