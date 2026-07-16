"""Fail on awesome-lint errors, except duplicate-link errors for allowlisted URLs.

The Start here section intentionally repeats a few entries from later categories,
which trips remark-lint:double-link. Those URLs live in allowed-duplicate-links.txt;
any other error (including duplicates of URLs not on the list) still fails CI.
"""
import re
import sys
from pathlib import Path

output = Path(sys.argv[1]).read_text()
allowed = set(Path(sys.argv[2]).read_text().split())

errors = []
for line in output.splitlines():
    match = re.search(r"[✖x]\s+\d+:\d+\s+(.*)", line)
    if not match:
        continue
    duplicate = re.match(r"Duplicate link: (\S+)", match.group(1))
    if duplicate and duplicate.group(1) in allowed:
        continue
    errors.append(line.strip())

if errors:
    print(output)
    print(f"{len(errors)} error(s) after filtering allowed duplicates:")
    print("\n".join(errors))
    sys.exit(1)

print("awesome-lint passed (intentional Start here duplicates filtered).")
