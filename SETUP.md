# Site deployment (Cloudflare Workers Builds)

The companion site at awesomeagenticengineering.com is generated from README.md by
`web/build.mjs` and served by the existing Cloudflare **Workers** project (configured by
`wrangler.jsonc`, deployed by Workers Builds on every push to `main`). It auto-updates: every
push to `main` (every curation PR merge) regenerates the page from README.md and redeploys.

## How it fits together
- `wrangler.jsonc` serves static assets from `dist/` (`assets.directory: "dist"`).
- `wrangler.jsonc` also carries a `build.command` (`npm ci && npm run build`). Wrangler runs
  this custom build **before every deploy**, so `dist/` is generated from README.md at deploy
  time. `dist/` and `node_modules/` are gitignored, never committed.
- Workers Builds runs `npx wrangler deploy` on every push, which runs the build then uploads
  `dist/`. No build command needs to be set in the Cloudflare dashboard: it is self-contained
  in `wrangler.jsonc`.

## Setup
Nothing to configure. The Workers Builds git integration is already connected, and the build
step lives in `wrangler.jsonc`, so pushes build and deploy on their own. (Optional: set a
`NODE_VERSION` of `20` in the Worker's build settings if the build image default is older.)

## Cutover sequencing (no visible downtime)
Workers Builds produces a preview deployment for the PR branch, so you can verify the full-list
site on the preview URL before merging. On merge, Workers Builds rebuilds `main` and the
full-list site goes live. Cloudflare keeps serving the last successful deployment until a new
build succeeds, so there is no hard downtime. The custom domain and HTTPS are unchanged.

## Local build
```bash
npm ci
npm test               # parser unit tests
npm run build          # writes dist/index.html from README.md
npx wrangler deploy    # optional manual deploy (runs the build, then uploads dist/)
```
The build fails if the rendered entry count does not match the README entry count (a parity
guard), so a parser regression is loud rather than silently dropping entries.
