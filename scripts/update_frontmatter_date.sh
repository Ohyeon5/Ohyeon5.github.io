#!/usr/bin/env bash
set -e
today=$(date +%Y-%m-%d)
for f in "$@"; do
    sed -i "s/^modified: .*/modified: $today/" "$f"
done
