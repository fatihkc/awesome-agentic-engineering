// Render the parsed README model into a self-contained HTML document.
// The design (teal/technical, theme-aware) is lifted verbatim from the original
// site/index.html; the entry-row rules below extend it for the full list.

import MarkdownIt from "markdown-it";

const md = new MarkdownIt({ html: false, linkify: true });
const REPO = "https://github.com/fatihkc/awesome-agentic-engineering";

// Rewrite relative markdown link targets (README-relative paths) to absolute
// GitHub blob URLs, so links like [CONTRIBUTING.md](CONTRIBUTING.md) resolve on
// the deployed site. Leaves http(s), in-page anchors, and mailto untouched.
const absolutize = (s) =>
  s.replace(/\]\((?!https?:\/\/|#|mailto:)([^)]+)\)/g, `](${REPO}/blob/main/$1)`);

const inline = (s) => md.renderInline(absolutize(s || ""));
const esc = (s) =>
  s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const pad = (n) => String(n).padStart(2, "0");

const STYLE = `
  :root {
    --bg: #f6f7f7;
    --surface: #ffffff;
    --text: #14181b;
    --muted: #59636b;
    --line: #e3e7ea;
    --accent: #0d8f80;
    --accent-ink: #0b5f56;
    --mono: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
    --sans: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    --maxw: 900px;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #0b0e10;
      --surface: #14181b;
      --text: #e8eef1;
      --muted: #97a4ad;
      --line: #222a2f;
      --accent: #2fd4c1;
      --accent-ink: #86ecdf;
    }
  }
  * { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: var(--sans);
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  .wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 24px; }
  a { color: inherit; }

  /* Eyebrow / label system (monospace) */
  .eyebrow {
    font-family: var(--mono);
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent-ink);
    margin: 0 0 18px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .eyebrow::before {
    content: "";
    width: 26px;
    height: 1px;
    background: var(--accent);
    display: inline-block;
  }

  /* Hero */
  header.hero { padding: clamp(64px, 12vw, 128px) 0 clamp(40px, 7vw, 72px); }
  h1 {
    font-size: clamp(40px, 8vw, 76px);
    line-height: 1.02;
    letter-spacing: -0.03em;
    font-weight: 800;
    margin: 0 0 22px;
    max-width: 15ch;
  }
  h1 .mark { color: var(--accent); }
  .lede {
    font-size: clamp(18px, 2.4vw, 22px);
    color: var(--text);
    max-width: 42ch;
    margin: 0 0 16px;
  }
  .sub {
    font-size: 16px;
    color: var(--muted);
    max-width: 56ch;
    margin: 0 0 34px;
  }
  .sub a { color: var(--accent-ink); text-decoration: none; }
  .sub a:hover { text-decoration: underline; }

  /* Buttons */
  .actions { display: flex; flex-wrap: wrap; gap: 12px; }
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-family: var(--mono);
    font-size: 14px;
    letter-spacing: 0.01em;
    text-decoration: none;
    padding: 12px 18px;
    border-radius: 8px;
    border: 1px solid var(--line);
    transition: transform .12s ease, border-color .12s ease, background .12s ease;
  }
  .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
  .btn.primary { background: var(--accent); color: #04120f; border-color: var(--accent); font-weight: 600; }
  .btn.primary:hover { transform: translateY(-1px); }
  .btn.ghost { background: transparent; color: var(--text); }
  .btn.ghost:hover { border-color: var(--accent); color: var(--accent-ink); }

  /* Section framing */
  section { padding: clamp(40px, 7vw, 72px) 0; border-top: 1px solid var(--line); }
  .section-head { margin-bottom: 30px; }
  .section-head h2 { font-size: clamp(22px, 3vw, 28px); letter-spacing: -0.01em; margin: 0; font-weight: 700; }
  .section-head p { color: var(--muted); margin: 8px 0 0; max-width: 54ch; }

  /* Category manifest (signature element) */
  ol.manifest { list-style: none; margin: 0; padding: 0; }
  ol.manifest li { border-top: 1px solid var(--line); }
  ol.manifest li:last-child { border-bottom: 1px solid var(--line); }
  ol.manifest a {
    display: grid;
    grid-template-columns: 3.2rem 1fr auto;
    align-items: baseline;
    gap: 18px;
    padding: 16px 6px;
    text-decoration: none;
    transition: background .12s ease, padding .12s ease;
  }
  ol.manifest a:hover { background: color-mix(in srgb, var(--accent) 8%, transparent); padding-left: 14px; }
  ol.manifest a:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
  .idx { font-family: var(--mono); font-size: 13px; color: var(--accent-ink); }
  .cat { font-size: clamp(17px, 2.2vw, 20px); font-weight: 600; letter-spacing: -0.01em; }
  .go { font-family: var(--mono); font-size: 13px; color: var(--muted); }
  ol.manifest a:hover .go { color: var(--accent-ink); }

  /* Entry rows (full-list content, extends the manifest visual language) */
  ul.entries { list-style: none; margin: 0; padding: 0; }
  ul.entries li {
    border-top: 1px solid var(--line);
    padding: 16px 6px;
    transition: background .12s ease, padding .12s ease;
  }
  ul.entries li:last-child { border-bottom: 1px solid var(--line); }
  ul.entries li:hover { background: color-mix(in srgb, var(--accent) 6%, transparent); padding-left: 14px; }
  .entry-title {
    display: inline-block;
    font-size: clamp(16px, 2.1vw, 19px);
    font-weight: 600;
    letter-spacing: -0.01em;
    text-decoration: none;
    color: var(--text);
  }
  .entry-title:hover { color: var(--accent-ink); }
  .entry-title:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
  .entry-desc { display: block; margin-top: 5px; color: var(--muted); font-size: 15px; max-width: 70ch; }
  .entry-desc a { color: var(--accent-ink); text-decoration: none; }
  .entry-desc a:hover { text-decoration: underline; }

  /* Maintained note */
  .note p { margin: 0; max-width: 60ch; color: var(--text); }
  .note p + p { margin-top: 14px; color: var(--muted); }
  .note p a { color: var(--accent-ink); text-decoration: none; }
  .note p a:hover { text-decoration: underline; }

  /* Footer */
  footer { border-top: 1px solid var(--line); padding: 34px 0 56px; }
  .footrow { display: flex; flex-wrap: wrap; gap: 8px 22px; align-items: center; justify-content: space-between; }
  .footrow p { margin: 0; color: var(--muted); font-size: 14px; }
  .footrow a { color: var(--accent-ink); text-decoration: none; }
  .footrow a:hover { text-decoration: underline; }
  .footlinks { font-family: var(--mono); font-size: 13px; display: flex; gap: 18px; flex-wrap: wrap; }

  @media (max-width: 520px) {
    ol.manifest a { grid-template-columns: 2.6rem 1fr; }
    ol.manifest .go { display: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    * { transition: none !important; }
  }
`;

const markedTitle = (title) =>
  esc(title).replace("Agentic", '<span class="mark">Agentic</span>');

const navItem = (s, i) =>
  `<li><a href="#${s.id}"><span class="idx">${pad(i + 1)}</span><span class="cat">${esc(
    s.heading
  )}</span><span class="go">${s.entries.length} resource${s.entries.length === 1 ? "" : "s"}</span></a></li>`;

const entryRow = (e) =>
  `<li>
        <a class="entry-title" href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.title)}</a>
        <span class="entry-desc">${inline(e.desc)}</span>
      </li>`;

const sectionBlock = (s) => `
    <section id="${s.id}">
      <div class="section-head">
        <h2>${esc(s.heading)}</h2>
        ${s.intro ? `<p>${inline(s.intro)}</p>` : ""}
      </div>
      <ul class="entries">
        ${s.entries.map(entryRow).join("\n        ")}
      </ul>
    </section>`;

export function renderPage(model) {
  const n = model.sections.length;
  const maintained = model.footer.find((f) => f.heading === "How this list is maintained");
  const contributing = model.footer.find((f) => f.heading === "Contributing");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(model.title)}</title>
<meta name="description" content="${esc(model.tagline)}">
<style>${STYLE}</style>
</head>
<body>
  <div class="wrap">
    <header class="hero">
      <p class="eyebrow">Operator-maintained, open to contributions</p>
      <h1>${markedTitle(model.title)}</h1>
      <p class="lede">${esc(model.tagline)}</p>
      <p class="sub">${inline(model.intro)}</p>
      <div class="actions">
        <a class="btn primary" href="${REPO}">Star on GitHub</a>
        <a class="btn ghost" href="${REPO}/blob/main/CONTRIBUTING.md">Contribute a resource</a>
      </div>
    </header>

    <section aria-labelledby="inside">
      <div class="section-head">
        <p class="eyebrow">What is inside</p>
        <h2 id="inside">The full list, ${n} sections</h2>
        <p>Every entry links out to the resource. Jump to a section, or read top to bottom.</p>
      </div>
      <ol class="manifest">
        ${model.sections.map(navItem).join("\n        ")}
      </ol>
    </section>
${model.sections.map(sectionBlock).join("\n")}
${
  maintained
    ? `
    <section class="note" aria-labelledby="maintained">
      <div class="section-head">
        <p class="eyebrow">How it stays honest</p>
        <h2 id="maintained">${esc(maintained.heading)}</h2>
      </div>
      <p>${inline(maintained.prose)}</p>
      ${contributing ? `<p>${inline(contributing.prose)}</p>` : ""}
    </section>`
    : ""
}
  </div>

  <footer>
    <div class="wrap footrow">
      <p>Maintained by <a href="https://fatihkoc.net">Fatih Koc</a>.</p>
      <nav class="footlinks">
        <a href="${REPO}">Repository</a>
        <a href="${REPO}/blob/main/CONTRIBUTING.md">Contribute</a>
        <a href="https://fatihkoc.net">fatihkoc.net</a>
      </nav>
    </div>
  </footer>
</body>
</html>
`;
}
