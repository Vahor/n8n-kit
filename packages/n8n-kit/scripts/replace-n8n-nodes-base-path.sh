#!/bin/bash

# We are using the github source code,
# but the code imports `n8n-nodes-base` in some places
# and it's a package we depends on, so in node_modules which don't contain all of the code
# so by replacing the path it finds the correct files

new_n8n_nodes_base_path="$(pwd)/vendor/n8n/packages/nodes-base"
for file in $(find vendor/n8n/packages -name "*.node.ts"); do
	match_count=$(rg -c "'n8n-nodes-base/dist/" "$file")
	if [[ $match_count -gt 0 ]]; then
		echo "Replacing..."
		echo $file
		sed -i '' "s@n8n-nodes-base/dist/@$new_n8n_nodes_base_path/@g" "$file"
	fi
done
