# Site deployment (Cloudflare Workers Builds)

The companion site at awesomeagenticengineering.com is generated from README.md by
`web/build.mjs` and served by the existing Cloudflare **Workers** project (configured by
`wrangler.jsonc`, deployed by Workers Builds on every push to `main`). It auto-updates: every
push to `main` (every curation PR merge) regenerates the page from README.md and redeploys.

## How it fits together
- `wrangler.jsonc` serves static assets from `dist/` (`assets.directory: "dist"`).
- `npm run build` (`web/build.mjs`) renders README.md into `dist/index.html`.
- `dist/` is gitignored, so it is generated during the build, never committed. The build must
  therefore run before every deploy.

## One-time change to the existing Workers project
The project already exists and, until now, served the static `site/` folder directly with no
build step. Add the build step so it generates `dist/` from README.md before deploying:

1. Cloudflare dashboard, Workers & Pages, the `awesome-agentic-engineering` Worker, Settings,
   Builds (Build configuration).
2. Set **Build command**: `npm ci && npm run build`
   (installs the one dependency, `markdown-it`, then generates `dist/`).
3. Leave **Deploy command** at its default: `npx wrangler deploy` (it uploads `dist/` per
   `wrangler.jsonc`).
4. Ensure the production branch is `main`. Set a `NODE_VERSION` of `20` if the build image
   default is older.

Without this build command, Workers Builds runs only `npx wrangler deploy`, finds no `dist/`
(it is gitignored), and the deploy fails. That is why this repo's Cloudflare check stays red
until the build command is set.

## Cutover sequencing (no visible downtime)
Set the build command while this PR is open. Workers Builds produces a preview deployment for
the PR branch, so you can verify the full-list site on the preview URL before merging. On
merge, Workers Builds rebuilds `main` with the new settings and the full-list site goes live.
Cloudflare keeps serving the last successful deployment until a new build succeeds, so there
is no hard downtime. The custom domain and HTTPS are unchanged.

## Local build
```bash
npm ci
npm test          # parser unit tests
npm run build     # writes dist/index.html from README.md
npx wrangler deploy   # optional: deploy manually (uploads dist/)
```
The build fails if the rendered entry count does not match the README entry count (a parity
guard), so a parser regression is loud rather than silently dropping entries.
