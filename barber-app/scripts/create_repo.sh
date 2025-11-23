#!/usr/bin/env bash
set -euo pipefail

# Simple helper to export the standalone barber app into a fresh Git repository.
# Usage: ./scripts/create_repo.sh [output_directory] [remote_url]
# - output_directory: where the repo should be created (defaults to ../barber-app-repo)
# - remote_url: optional git remote to set and push to (e.g., https://github.com/rajuj0/barbertop.git)

SOURCE_DIR=$(cd "$(dirname "$0")/.." && pwd)
OUTPUT_DIR=${1:-"${SOURCE_DIR}/../barber-app-repo"}
REMOTE_URL=${2:-""}

# Prepare output directory
if [ -d "$OUTPUT_DIR/.git" ]; then
  echo "[INFO] Existing git repository detected at $OUTPUT_DIR. No re-init performed."
else
  rm -rf "$OUTPUT_DIR"
  mkdir -p "$OUTPUT_DIR"
  echo "[INFO] Created clean output directory at $OUTPUT_DIR"
fi

copy_app() {
  if command -v rsync >/dev/null 2>&1; then
    rsync -av --exclude='.git' --exclude='node_modules' --exclude='.next' "$SOURCE_DIR/" "$OUTPUT_DIR/"
  else
    cp -R "$SOURCE_DIR/"* "$OUTPUT_DIR/"
    # Remove any unwanted directories if they slipped through
    rm -rf "$OUTPUT_DIR/.git" "$OUTPUT_DIR/node_modules" "$OUTPUT_DIR/.next"
  fi
}

copy_app

cd "$OUTPUT_DIR"

if [ ! -d .git ]; then
  git init
  git add .
  git commit -m "Initialize barber-app repository"
  echo "[INFO] Initialized git repository and created initial commit."
else
  echo "[INFO] Skipped git init; repository already exists."
fi

if [ -n "$REMOTE_URL" ]; then
  if git remote | grep -q '^origin$'; then
    git remote set-url origin "$REMOTE_URL"
    echo "[INFO] Updated existing origin remote to $REMOTE_URL"
  else
    git remote add origin "$REMOTE_URL"
    echo "[INFO] Added origin remote pointing to $REMOTE_URL"
  fi

  git branch -M main
  git push -u origin main
  echo "[SUCCESS] Pushed initial commit to $REMOTE_URL"
fi

echo "[SUCCESS] Barber app exported to: $OUTPUT_DIR"
