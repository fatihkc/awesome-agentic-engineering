"""Fail if any capped section in README.md exceeds its entry cap.

Caps live in .github/section-caps.txt, one `Section heading = N` per line
(blank lines and `#` comments ignored). An entry is a top-level list item
that starts a link: a line beginning with `- [`. Sections not named in the
caps file (Contents, Contributing, How this list is maintained) are ignored.
"""
import re
import sys
from pathlib import Path

readme = Path(sys.argv[1]).read_text()
caps_text = Path(sys.argv[2]).read_text()

caps = {}
for line in caps_text.splitlines():
    line = line.strip()
    if not line or line.startswith("#"):
        continue
    name, sep, value = line.partition("=")
    if not sep:
        continue
    caps[name.strip()] = int(value.strip())

counts = {}
current = None
for line in readme.splitlines():
    heading = re.match(r"##\s+(.*)", line)
    if heading:
        current = heading.group(1).strip()
        counts.setdefault(current, 0)
        continue
    if current is not None and line.startswith("- ["):
        counts[current] += 1

errors = []
for section, cap in caps.items():
    count = counts.get(section)
    if count is None:
        errors.append(f"{section!r}: named in caps file but no such section in README")
    elif count > cap:
        errors.append(f"{section!r}: {count} entries, cap is {cap}")

if errors:
    print("Section cap check failed:")
    print("\n".join(errors))
    sys.exit(1)

print("Section caps OK:")
for section, cap in caps.items():
    print(f"  {section}: {counts.get(section, 0)}/{cap}")
