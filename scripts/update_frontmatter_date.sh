#!/usr/bin/env bash
set -e
today=$(date +%Y-%m-%d)
for f in "$@"; do
    if grep -qP "^draft:\s*true" "$f"; then
        sed -i "s/^modified: .*/modified: $today/" "$f"
        sed -i "s/^created: .*/created: $today/" "$f"
    else
        sed -i "s/^modified: .*/modified: $today/" "$f"
    fi
done
