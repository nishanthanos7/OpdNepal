"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
  required?: boolean;
};

type LeadFormProps = {
  intent: "audit" | "contact";
  submitLabel: string;
  successTitle: string;
  successBody: string;
};

const fields: Field[] = [
  { name: "name", label: "Your name", required: true, placeholder: "Dr. Anjali Sharma" },
  { name: "clinic", label: "Clinic or hospital name", required: true, placeholder: "Sharma Skin & Cosmetic Clinic" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "you@clinic.com" },
  { name: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+977 98XXXXXXXX" },
  { name: "city", label: "City", placeholder: "Kathmandu" },
  {
    name: "message",
    label: "Anything you want me to look at first?",
    type: "textarea",
    placeholder: "Existing site (if any), Facebook page, Google listing — paste links and I'll review them in the audit.",
  },
];

export function LeadForm({ intent, submitLabel, successTitle, successBody }: LeadFormProps) {
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      intent === "audit"
        ? `Free audit request — ${data.get("clinic") ?? ""}`
        : `New enquiry — ${data.get("clinic") ?? ""}`,
    );
    const lines = [
      `Name: ${data.get("name") ?? ""}`,
      `Clinic: ${data.get("clinic") ?? ""}`,
      `Email: ${data.get("email") ?? ""}`,
      `Phone: ${data.get("phone") ?? ""}`,
      `City: ${data.get("city") ?? ""}`,
      "",
      `Message:`,
      `${data.get("message") ?? ""}`,
    ];
    const body = encodeURIComponent(lines.join("\n"));
    // Open the user's mail client with everything pre-filled. Works
    // without a backend; replace later with a real API route if needed.
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-line bg-paper p-8 sm:p-10">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-paper">
          <CheckIcon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="mt-5 font-serif text-2xl text-ink">{successTitle}</h3>
        <p className="mt-3 text-[15px] leading-7 text-mute">{successBody}</p>
        <p className="mt-3 text-sm text-mute">
          If your mail client did not open, you can also write directly to{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-ink underline underline-offset-4"
          >
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-paper p-7 sm:p-9"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => {
          const isFull = f.type === "textarea" || f.name === "clinic";
          return (
            <label
              key={f.name}
              className={`block text-sm ${isFull ? "sm:col-span-2" : ""}`}
            >
              <span className="text-ink">
                {f.label}
                {f.required ? (
                  <span aria-hidden className="ml-1 text-gold">*</span>
                ) : null}
              </span>
              {f.type === "textarea" ? (
                <textarea
                  name={f.name}
                  required={f.required}
                  placeholder={f.placeholder}
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-line bg-paper-2/60 px-3.5 py-2.5 text-[15px] text-ink placeholder:text-mute/70 focus:border-accent focus:bg-paper focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              ) : (
                <input
                  name={f.name}
                  type={f.type ?? "text"}
                  required={f.required}
                  placeholder={f.placeholder}
                  className="mt-2 h-11 w-full rounded-xl border border-line bg-paper-2/60 px-3.5 text-[15px] text-ink placeholder:text-mute/70 focus:border-accent focus:bg-paper focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              )}
            </label>
          );
        })}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" variant="primary">
          {submitLabel}
          <ArrowRightIcon aria-hidden className="h-4 w-4" />
        </Button>
        <p className="text-xs text-mute">
          Your details stay private. I reply within 24 hours, Sun–Fri.
        </p>
      </div>
    </form>
  );
}
