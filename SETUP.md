# Site deployment (Cloudflare Pages)

The companion site at awesomeagenticengineering.com is generated from README.md by
`web/build.mjs` and served by the existing Cloudflare Pages project. It auto-updates:
every push to `main` (every curation PR merge) triggers a build and redeploy.

## One-time change to the existing Pages project
The project already exists and serves the old static `site/index.html`. Update its build:

1. Cloudflare dashboard, Workers & Pages, the awesome-agentic-engineering Pages project,
   Settings, Builds & deployments.
2. Set Build command: `npm run build`
3. Set Build output directory: `dist`
4. Ensure Production branch is `main`. Set a `NODE_VERSION` build variable of `20` if the
   default is older.

## Cutover sequencing (no visible downtime)
Do the settings change while this PR is open, then use the PR's Cloudflare preview build to
verify the full-list site on the preview URL before merging. On merge, Cloudflare rebuilds
with the new settings and the full-list site goes live. Cloudflare keeps serving the last
successful deploy until a build succeeds, so there is no hard downtime. The custom domain and
HTTPS are unchanged.

## Local build
```bash
npm ci
npm test        # parser unit tests
npm run build   # writes dist/index.html from README.md
```
The build fails if the rendered entry count does not match the README entry count (a parity
guard), so a parser regression is loud rather than silently dropping entries.
