This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# OpdNepal

## Optional free integrations

Copy `.env.example` to `.env.local` and fill in the ones you want:

- **Email delivery** — [Web3Forms](https://web3forms.com) (free, 250/month). Set `WEB3FORMS_ACCESS_KEY`.
- **WhatsApp notifications** — [CallMeBot](https://www.callmebot.com/blog/free-api-whatsapp-messages/) (free, to your own number). Set `CALLMEBOT_PHONE` and `CALLMEBOT_APIKEY`.
- **AI assistant** — [Groq](https://console.groq.com/keys) (free, fast Llama). Set `GROQ_API_KEY`.

If any key is missing, that feature is silently skipped: the contact form falls back to `mailto:`, and the chat widget returns a static helpful reply.
