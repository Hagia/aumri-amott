# aumri-amott

Personal site for [aumriamott.co](https://aumriamott.co) — starts as a static
site for writing, structured as a MERN + TypeScript monorepo so a backend can
be added later without a rewrite.

## Structure

```
apps/
  web/      React + Vite + TypeScript — the static site, deployed to GitHub Pages
  api/      Express + TypeScript — MongoDB-backed API, scaffolded but not deployed yet
packages/
  shared/   TypeScript types shared between web and api
```

## Requirements

- Node >= 20
- pnpm (`corepack enable` or `npm i -g pnpm`)

## Develop

```bash
pnpm install
pnpm dev        # apps/web dev server
pnpm dev:api    # apps/api dev server (needs a local MongoDB, see apps/api/.env.example)
```

## Build

```bash
pnpm build      # builds apps/web to apps/web/dist
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds `apps/web`
and publishes it to GitHub Pages. The custom domain is set via
`apps/web/public/CNAME` (`aumriamott.co`) — DNS still needs to be pointed at
GitHub Pages (A records for the apex domain, or a CNAME record if using a
`www` subdomain) at your registrar; that step happens outside this repo.

## Status

Static site only for now. `apps/api` and `packages/shared` are scaffolded for
when the site needs dynamic content (e.g. a writing backend, comments,
subscriptions) — not wired into the deploy yet.
