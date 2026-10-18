#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if ! git remote get-url origin >/dev/null 2>&1; then
  echo "origin remote is not configured" >&2
  exit 1
fi

REMOTE="$(git remote get-url origin)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

npm run build

cp -R dist/. "$TMP/"
touch "$TMP/.nojekyll"

cd "$TMP"
git init -q -b gh-pages
git add -A
git -c user.name="$(git config user.name)" \
    -c user.email="$(git config user.email)" \
    commit -q -m "Deploy GitHub Pages"
git remote add origin "$REMOTE"
git push --force origin gh-pages

printf '\nDeployed to GitHub Pages branch gh-pages from %s\n' "$REMOTE"
