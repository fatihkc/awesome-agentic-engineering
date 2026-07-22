// Parse README.md into a structured model for the site generator.

const slug = (s) =>
  s.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");

const FOOTER = new Set(["Contributing", "How this list is maintained"]);
const SKIP = new Set(["Contents"]);
const ENTRY = /^-\s+\[([^\]]+)\]\((https?:\/\/[^)]+)\)\s+-\s+(.*)$/;

export function parseReadme(md) {
  const lines = md.split("\n");

  const titleLine = lines.find((l) => l.startsWith("# ")) || "";
  const title = titleLine
    .replace(/^#\s+/, "")
    .replace(/\s*\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)\s*$/, "")
    .trim();

  const tagline = (lines.find((l) => l.startsWith("> ")) || "")
    .replace(/^>\s+/, "")
    .trim();

  const rawSections = [];
  let current = null;
  const introLines = [];
  let started = false;

  for (const line of lines) {
    const h2 = /^##\s+(.*)$/.exec(line);
    if (h2) {
      started = true;
      if (current) rawSections.push(current);
      current = { heading: h2[1].trim(), body: [] };
      continue;
    }
    if (!started) {
      if (!line.startsWith("# ") && !line.startsWith(">") && line.trim()) {
        introLines.push(line.trim());
      }
    } else if (current) {
      current.body.push(line);
    }
  }
  if (current) rawSections.push(current);

  const sections = [];
  const footer = [];
  for (const s of rawSections) {
    if (SKIP.has(s.heading)) continue;
    if (FOOTER.has(s.heading)) {
      footer.push({
        heading: s.heading,
        prose: s.body.filter((l) => l.trim()).join(" ").trim(),
      });
      continue;
    }
    const intro = [];
    const entries = [];
    for (const l of s.body) {
      const m = ENTRY.exec(l);
      if (m) entries.push({ title: m[1].trim(), url: m[2].trim(), desc: m[3].trim() });
      else if (l.trim() && entries.length === 0) intro.push(l.trim());
    }
    sections.push({ heading: s.heading, id: slug(s.heading), intro: intro.join(" ").trim(), entries });
  }

  return { title, tagline, intro: introLines.join(" ").trim(), sections, footer };
}

export function countEntries(model) {
  return model.sections.reduce((n, s) => n + s.entries.length, 0);
}
