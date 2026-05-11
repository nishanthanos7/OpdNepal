// AI assistant route — proxies messages to Groq's OpenAI-compatible API
// using a free model (Llama 3.1 8B Instant by default). Get a free key
// at https://console.groq.com/keys and set GROQ_API_KEY in your env.
//
// If GROQ_API_KEY is not set the route returns a static helpful reply
// so the widget keeps working in dev / preview environments.

import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

const SYSTEM_PROMPT = `You are the OpdNepal assistant — a helpful, calm guide for doctors, clinic owners and hospital administrators in Nepal who are considering a website.

Studio: ${siteConfig.name} — ${siteConfig.tagline}.
Run by: ${siteConfig.author}, Kathmandu-based developer, healthcare only.

Style: short, clear, professional, never pushy. Reply in 2–4 short sentences. Use plain English a busy doctor will understand. Avoid jargon. When asked something off-topic, briefly steer back to clinic websites, bookings or OPD systems.

What you can answer:
- What OpdNepal builds (doctor portfolio, clinic site, online booking, OPD/clinic management).
- The Doctor Portfolio is NPR 9,999 one-time, live in 7–10 days.
- Clinic Website + Booking and Hospital / OPD System are priced on request after a short discovery call. Never invent or quote numbers for these.
- How the process works: free 7-minute audit → 30-min call → fixed quote → build → launch + 30 days of free tweaks.
- Encourage starting with the free audit at /audit or contacting at /contact.

Never invent testimonials, never claim integrations or numbers not in this prompt. If unsure, suggest the free audit or contact page.`;

async function callGroq(messages: ChatMessage[]) {
  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL ?? "llama-3.1-8b-instant";
  if (!apiKey) return null;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      temperature: 0.3,
      max_tokens: 320,
    }),
  });

  if (!res.ok) return null;
  const json = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  return json.choices?.[0]?.message?.content?.trim() ?? null;
}

function fallbackReply(): string {
  return (
    `I can't reach the AI service right now, but I can help:\n\n` +
    `• Doctor Portfolio is NPR 9,999, live in 7–10 days.\n` +
    `• Clinic and Hospital / OPD projects are quoted after a short call.\n` +
    `• Start with the free 7-minute audit at /audit, or write to ${siteConfig.contact.email}.`
  );
}

export async function POST(request: Request) {
  let body: { messages?: ChatMessage[] } = {};
  try {
    body = (await request.json()) as { messages?: ChatMessage[] };
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const incoming = Array.isArray(body.messages) ? body.messages : [];
  // Sanitise: only the recent history, only valid roles, capped lengths.
  const cleaned: ChatMessage[] = incoming
    .filter((m) => m && (m.role === "user" || m.role === "assistant"))
    .slice(-10)
    .map((m) => ({
      role: m.role,
      content: String(m.content ?? "").slice(0, 2000),
    }));

  if (cleaned.length === 0 || cleaned[cleaned.length - 1].role !== "user") {
    return Response.json(
      { ok: false, error: "Last message must be from the user." },
      { status: 400 },
    );
  }

  try {
    const reply = await callGroq(cleaned);
    if (reply) return Response.json({ ok: true, reply });
  } catch {
    // fall through to fallback
  }
  return Response.json({ ok: true, reply: fallbackReply() });
}
