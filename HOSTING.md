# Hosting requirements — Shine website

Simple checklist for deploying this marketing site.

## What this app is

- **Stack:** TanStack Start (React 19) + Vite 8 + Nitro
- **Rendering:** Server-side rendering (SSR). Not a static-only site — needs a Node or edge runtime that Nitro can target.
- **Default build target:** Cloudflare (via `@lovable.dev/vite-tanstack-config` / Nitro). Other Nitro presets (Node, Vercel, Netlify, etc.) are possible if the deploy target is changed.
- **Content:** Marketing pages only. Contact forms are **client-side success UI** today — no form API, email service, or database is required to go live.

## Runtime

| Requirement | Notes |
|-------------|--------|
| HTTPS | Required in production |
| SSR-capable host | Cloudflare Workers/Pages (current default), or Node 20+ / equivalent Nitro preset |
| Node.js (build) | **20+** recommended (project develops on Node 24) |
| Package manager | npm, bun, or pnpm — lockfiles present for npm and bun |

## Build & start

```bash
# Install
npm install
# or: bun install

# Production build
npm run build

# Local preview of the production build
npm run preview
```

Typical CI/CD:

1. Install dependencies  
2. `npm run build`  
3. Deploy Nitro output for the configured preset  

Port (local preview / Node hosts): often `PORT` or the host’s default; Vite/Nitro pick a free port in local preview.

## Environment variables

**None required** for the current site.

No secrets, CMS keys, or form endpoints are wired yet. If you later add form submission, analytics, or third-party APIs, document those keys here and inject them at build/runtime as appropriate (`VITE_*` for client-visible values).

## Assets & storage

- Static files live under `public/` (~35 MB today: homepage, about, housing, projects, contact images).
- Served as part of the build; **no separate CDN or object storage is required** unless you want one for performance.
- Ensure the host’s upload / artifact size limits can handle the built output (images dominate size).

## Domains & DNS

- Point the production domain (and optional `www`) at the host via DNS (CNAME/A as the provider documents).
- Configure TLS on the host (automatic on Cloudflare, Vercel, Netlify, etc.).
- Optional: redirect `www` ↔ apex consistently.

## What you do *not* need (today)

- Database  
- Redis / session store  
- Email / form backend  
- Auth  
- Separate API server  

## Suggested hosts

Any of these can work once the Nitro preset matches:

- **Cloudflare Pages / Workers** — aligns with the project’s default Nitro target  
- **Vercel / Netlify** — change Nitro preset if not using Cloudflare  
- **Node VPS / Docker** — Node 20+, run the Nitro Node server output  

This repo is also connected to **Lovable**; deploys from the connected branch follow Lovable’s hosting flow unless you deploy elsewhere yourself.

## Smoke test after deploy

- `/` homepage loads  
- `/affordable-housing`, `/market-rate-housing`, `/about`, `/projects`, `/contact`, `/case-studies`  
- Header/footer links navigate correctly  
- Contact form shows the client-side “Request received” state on submit  
- Images under `/homepage/`, `/about/`, etc. return 200  

## Support contact (site content)

Partnership mailto in the design: `info@getshine.com` — hosting/ops contact is separate; set that with the client’s IT or Web Scouts as needed.
