#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=$(pwd)
EXAMPLES_DIR="$ROOT_DIR/examples"

if [ ! -d "$EXAMPLES_DIR" ]; then
    exit 1
fi

EXAMPLE_DIRS=$(find "$EXAMPLES_DIR" -mindepth 1 -maxdepth 1 -type d -not -name ".*")


echo "Found example directories:"
echo "$EXAMPLE_DIRS" | while read -r dir; do
    echo "  - $(basename "$dir")"
done

# Build each example
echo "Building examples:"
for example_dir in $EXAMPLE_DIRS; do
    example_name=$(basename "$example_dir")
    echo " - Building $example_name..."

    cd "$example_dir"

	bunx tsc --noEmit
	bun ../../packages/n8n-cli/dist/index.js build

	cd "$ROOT_DIR"
done

# Return to root directory
cd "$ROOT_DIR"

echo ""

# format jsons
bun run format

# Check if there are any uncommitted changes 
if [ -n "$(git status --porcelain $EXAMPLES_DIR/*.json)" ]; then
    echo "Found differences in the following files:"
    echo ""
    git status --porcelain
    echo ""
    echo "Git diff:"
    git --no-pager diff "@{upstream}" -- "$EXAMPLES_DIR/*.json" 
    echo ""
    exit 1
fi


echo "Nice"
