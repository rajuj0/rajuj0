#!/usr/bin/env bash
set -euo pipefail

# Simple helper to export the standalone barber app into a fresh Git repository.
# Usage: ./scripts/create_repo.sh [output_directory]
# If no output_directory is provided, ../barber-app-repo will be used.

SOURCE_DIR=$(cd "$(dirname "$0")/.." && pwd)
OUTPUT_DIR=${1:-"${SOURCE_DIR}/../barber-app-repo"}

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

echo "[SUCCESS] Barber app exported to: $OUTPUT_DIR"
