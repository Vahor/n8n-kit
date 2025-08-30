#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=$(pwd)
EXAMPLES_DIR="$ROOT_DIR/examples"

# Examples to skip (folder names)
SKIP_EXAMPLES=(
    "bundle-js" # TODO: works but as we escape the jsCode it's invalid 
    "multiple-sources" # use Agent and import is wrong
    # "weird-workflow" # TODO: this one should work
    "workflow-trigger" # TODO: currently the diff only support one workflow
)

if [ ! -d "$EXAMPLES_DIR" ]; then
    exit 1
fi

EXAMPLE_DIRS=$(find "$EXAMPLES_DIR" -mindepth 1 -maxdepth 1 -type d -not -name ".*")

echo "Found example directories:"
echo "$EXAMPLE_DIRS" | while read -r dir; do
    echo "  - $(basename "$dir")"
done

should_skip_example() {
    local example_name="$1"
    for skip_example in "${SKIP_EXAMPLES[@]}"; do
        if [ "$example_name" = "$skip_example" ]; then
            return 0  # Should skip
        fi
    done
    return 1  # Should not skip
}

# Test import command for each example
echo "Testing import command:"
for example_dir in $EXAMPLE_DIRS; do
	example_name=$(basename "$example_dir")
	
	# Check if this example should be skipped
	if should_skip_example "$example_name"; then
		echo " - Skipping $example_name (in skip list)"
		continue
	fi
	
	echo " - Testing import for $example_name..."

	cd "$example_dir"

	# Import workflow from JSON to regenerate index.ts
	json_file=$(find . -mindepth 2 -name "*.json" -path "./*/workflows/*" -type f | head -1)
	echo "   Importing workflow from JSON file '$json_file' ..."
	bun ../../packages/n8n-cli/dist/index.js import --file "$json_file" --out "index2.ts" --yes

	bun ../../packages/n8n-cli/dist/index.js build --entrypoint "index2.ts" --sort

	# rm "index2.ts"

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
