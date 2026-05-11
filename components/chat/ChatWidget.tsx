"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Namaste — I'm the OpdNepal assistant. Ask me anything about websites for doctors, clinics or hospitals in Nepal. The Doctor Portfolio starts at NPR 9,999.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [open, messages, sending]);

  async function send() {
    const text = draft.trim();
    if (!text || sending) return;
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setDraft("");
    setSending(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const json = (await res.json().catch(() => ({ ok: false }))) as {
        ok?: boolean;
        reply?: string;
      };
      const reply =
        json.reply ??
        "Sorry — I couldn't reach the assistant. Please try the free audit at /audit.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Network error. Please try again, or use /contact.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* Launcher button */}
      <button
        type="button"
        aria-label={open ? "Close assistant" : "Open assistant"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-ink text-paper shadow-[0_18px_36px_-18px_rgba(11,18,32,0.5)] transition-transform hover:-translate-y-0.5 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:bottom-6 sm:right-6"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M21 12a8 8 0 0 1-11.6 7.15L4 20l.85-5.4A8 8 0 1 1 21 12z" />
          </svg>
        )}
      </button>

      {/* Panel */}
      {open ? (
        <div
          role="dialog"
          aria-label="OpdNepal assistant"
          className="fixed bottom-24 right-3 z-50 flex h-112 w-[min(22rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_28px_56px_-24px_rgba(11,18,32,0.35)] sm:right-6"
        >
          <div className="flex items-center justify-between border-b border-line bg-paper-2/60 px-4 py-3">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-mute">Ask</p>
              <p className="font-serif text-base text-ink">OpdNepal assistant</p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.18em] text-mute">AI · free</span>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-[14px] leading-6">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-ink px-3.5 py-2 text-paper"
                    : "mr-auto max-w-[90%] rounded-2xl rounded-bl-sm bg-paper-2 px-3.5 py-2 text-ink"
                }
              >
                {m.content.split("\n").map((line, j) => (
                  <p key={j} className={j > 0 ? "mt-1" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
            {sending ? (
              <div className="mr-auto inline-flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-paper-2 px-3.5 py-2 text-mute">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mute" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mute [animation-delay:120ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mute [animation-delay:240ms]" />
              </div>
            ) : null}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
            className="flex items-center gap-2 border-t border-line bg-paper px-3 py-3"
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ask about pricing, timeline, OPD…"
              className="h-10 flex-1 rounded-full border border-line bg-paper-2/60 px-3.5 text-[14px] text-ink placeholder:text-mute/70 focus:border-accent focus:bg-paper focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
            <button
              type="submit"
              disabled={sending || !draft.trim()}
              className="grid h-10 w-10 flex-none place-items-center rounded-full bg-ink text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
