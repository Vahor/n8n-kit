
# Sync n8n-base-node

```bash
git submodule add https://github.com/n8n-io/n8n.git vendor/n8n
cd vendor/n8n
git sparse-checkout init --cone
git sparse-checkout set packages/nodes-base packages/@n8n/nodes-langchain
```

refresh with `git submodule update --remote`
