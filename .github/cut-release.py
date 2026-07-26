#!/usr/bin/env python3
"""Cut a release section out of CHANGELOG.md.

Moves everything under `## Unreleased` into a dated `## <version> (<date>)` section, leaves a fresh empty
Unreleased in its place, and writes the release notes for `gh release create`.

Exit codes:
  0  a release section was cut (or would be, under --dry-run)
  1  the changelog or arguments are malformed
  2  Unreleased holds no entries, so there is nothing to release
"""

import argparse
import re
import sys

UNRELEASED = "## Unreleased"
VERSION_RE = re.compile(r"^\d{4}\.\d{2}$")
FOOTER = "The full list: <https://awesomeagenticengineering.com>"


def parse_args():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--changelog", default="CHANGELOG.md")
    parser.add_argument("--version", required=True, help="calendar version, YYYY.MM")
    parser.add_argument("--date", required=True, help="release date, YYYY-MM-DD")
    parser.add_argument("--notes-out", help="write the release notes here")
    parser.add_argument("--dry-run", action="store_true", help="do not rewrite the changelog")
    return parser.parse_args()


def main():
    args = parse_args()
    if not VERSION_RE.match(args.version):
        sys.exit(f"error: version {args.version!r} is not YYYY.MM")
    if not re.match(r"^\d{4}-\d{2}-\d{2}$", args.date):
        sys.exit(f"error: date {args.date!r} is not YYYY-MM-DD")

    with open(args.changelog, encoding="utf-8") as handle:
        lines = handle.read().split("\n")

    heading = next((i for i, line in enumerate(lines) if line.strip() == UNRELEASED), None)
    if heading is None:
        sys.exit(f"error: no {UNRELEASED!r} heading in {args.changelog}")
    if any(line.strip() == f"## {args.version}" or line.startswith(f"## {args.version} (")
           for line in lines):
        sys.exit(f"error: {args.changelog} already has a {args.version} section")

    following = next((i for i in range(heading + 1, len(lines)) if lines[i].startswith("## ")),
                     len(lines))
    body = "\n".join(lines[heading + 1:following]).strip("\n")
    if not any(line.startswith("- ") for line in body.split("\n")):
        print(f"nothing to release: {UNRELEASED} has no entries")
        return 2

    notes = f"{body}\n\n{FOOTER}\n"
    if args.notes_out:
        with open(args.notes_out, "w", encoding="utf-8") as handle:
            handle.write(notes)

    head = "\n".join(lines[:heading]).rstrip("\n")
    tail = "\n".join(lines[following:]).strip("\n")
    parts = [head, "", UNRELEASED, "", f"## {args.version} ({args.date})", "", body]
    if tail:
        parts += ["", tail]
    rewritten = "\n".join(parts).rstrip("\n") + "\n"

    if args.dry_run:
        print(f"dry run: would cut {args.version} ({args.date}) with notes:\n\n{notes}")
        return 0

    with open(args.changelog, "w", encoding="utf-8") as handle:
        handle.write(rewritten)
    print(f"cut {args.version} ({args.date})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
