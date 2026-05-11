// Lead delivery route. Receives the contact / audit form payload and
// forwards it through two free channels:
//
//   1. Web3Forms — sends a real email to siteConfig.contact.email.
//      Set WEB3FORMS_ACCESS_KEY in your environment.
//      Get a free key at https://web3forms.com (250 emails/month).
//
//   2. CallMeBot — pings a WhatsApp message to your own number.
//      Set CALLMEBOT_PHONE and CALLMEBOT_APIKEY.
//      Free key at https://www.callmebot.com/blog/free-api-whatsapp-messages/
//
// Both integrations are optional. If neither env var is set, the route
// still returns a stable response so the client can fall back to its
// mailto: link without breaking the user experience.

import { siteConfig } from "@/lib/site";

type LeadPayload = {
  intent?: "audit" | "contact";
  name?: string;
  clinic?: string;
  email?: string;
  phone?: string;
  city?: string;
  message?: string;
};

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: LeadPayload = {};
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const intent = body.intent === "audit" ? "audit" : "contact";
  const subject =
    intent === "audit"
      ? `Free audit request — ${body.clinic ?? body.name ?? "new clinic"}`
      : `New enquiry — ${body.clinic ?? body.name ?? "new clinic"}`;

  const lines = [
    `Name: ${body.name ?? ""}`,
    `Clinic: ${body.clinic ?? ""}`,
    `Email: ${body.email ?? ""}`,
    `Phone: ${body.phone ?? ""}`,
    `City: ${body.city ?? ""}`,
    "",
    "Message:",
    `${body.message ?? ""}`,
  ];
  const plainText = lines.join("\n");

  const results: { email: "ok" | "skipped" | "failed"; whatsapp: "ok" | "skipped" | "failed" } = {
    email: "skipped",
    whatsapp: "skipped",
  };

  // 1) Email via Web3Forms
  const w3fKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (w3fKey) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: w3fKey,
          subject,
          from_name: `${siteConfig.name} site`,
          to: siteConfig.contact.email,
          replyto: body.email ?? siteConfig.contact.email,
          name: body.name ?? "",
          email: body.email ?? "",
          phone: body.phone ?? "",
          clinic: body.clinic ?? "",
          city: body.city ?? "",
          message: plainText,
        }),
      });
      results.email = res.ok ? "ok" : "failed";
    } catch {
      results.email = "failed";
    }
  }

  // 2) WhatsApp via CallMeBot (free; sends to your own number).
  const cmbPhone = process.env.CALLMEBOT_PHONE;
  const cmbKey = process.env.CALLMEBOT_APIKEY;
  if (cmbPhone && cmbKey) {
    const wppMessage =
      `*${subject}*\n` +
      `Name: ${body.name ?? "-"}\n` +
      `Clinic: ${body.clinic ?? "-"}\n` +
      `Email: ${body.email ?? "-"}\n` +
      `Phone: ${body.phone ?? "-"}\n` +
      `City: ${body.city ?? "-"}\n` +
      (body.message ? `\n${body.message}` : "");
    const url =
      `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(cmbPhone)}` +
      `&text=${encodeURIComponent(wppMessage)}&apikey=${encodeURIComponent(cmbKey)}`;
    try {
      const res = await fetch(url, { method: "GET" });
      results.whatsapp = res.ok ? "ok" : "failed";
    } catch {
      results.whatsapp = "failed";
    }
  }

  const delivered = results.email === "ok" || results.whatsapp === "ok";
  return Response.json({ ok: delivered, results }, { status: delivered ? 200 : 202 });
}
