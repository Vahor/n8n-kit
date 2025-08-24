# Contributing to n8n-kit 

Thank you for your interest in contributing to n8n-kit! This guide will help you get started with contributing to the project.

## Getting Started

### Prerequisites

- **Bun >= 1.2.20** - Used ad package-manager and test runner with [expect type features](https://bun.com/docs/test/writing#type-testing).

### Commands

- `bun run format` - Formats all files in the project (using [biome](https://github.com/biomejs/biome))
- `bun run --filter '*' dev` - Builds cli and lib in watch mode
- `bun run --filter '*' build` - Builds cli and lib

### Development Setup

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/Vahor/n8n-kit.git
   cd n8n-kit
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Verify the setup:
   ```bash
   bun run --filter '*' build 
   ```

#### n8n-kit

You'll find code related to `@vahor/n8n-kit` in the [`packages/n8n-kit`](./packages/n8n-kit) directory.

#### n8n-cli

You'll find code related to `@vahor/n8n-kit-cli` in the [`packages/n8n-cli`](./packages/n8n-cli) directory.

## Types of Contributions

### Updating generated files

If the [n8n](https://github.com/n8n-io/n8n) repository has been updated with new version of nodes, you'll have to follow the steps below to update the generated files.

1. Update the submodule:
```bash
# root directory
git submodule update --remote
```

2. Patch the generated files:
```bash
# packages/n8n-kit
bash scripts/replace-n8n-nodes-base-path.sh
```

3. Generate the new files:
```bash
# packages/n8n-kit
bun run generate
```

4. Check that the examples still work:
```bash
# root directory
bash scripts/build-and-check-examples.sh
```

### Adding/Updating nodes

If you want to add/update nodes, you'll have to follow the steps below.

1. Add or update the node in [`packages/n8n-kit/src/nodes`](./packages/n8n-kit/src/nodes) directory.

2. Add that entry to the barrel file 
```bash
# packages/n8n-kit
bun run generate:entrypoint
```

3. Add or update an example that uses that node.


## Pull Request Process

1. **Create a new branch** from the `main` branch.

2. **Make your changes** in the new branch.
	- Use `bun run format` to format all files before committing. (husky will prevent committing if there are any formatting issues)

3. **Add tests or examples** to cover your changes.
	- Use [`bun test`](https://bun.com/docs/cli/test) to run tests. Or `bun test <path-to-test-file>` to run a single test.
	- Use `bun typecheck` in a package folder to check types.

4. **Update the documentation** if necessary.

5. **Create a changeset** (optional):
	```bash
	# root directory
	bunx @changesets/cli
	```
	Follow the wizard and commit the changes.

6. **Create a pull request**:


## Pull Request Review Process

1. **Ask coderabbit for a review**:
```txt
@coderabbit review
```

2. **Check if the examples still work**:
```txt
/check-examples
```
Note: we don't run the examples for each commits as it might take too long (pull submodule, build cli and lib, build all examples, check diff).

## Notes

### How the submodule was setup

```bash
git submodule add https://github.com/n8n-io/n8n.git vendor/n8n
cd vendor/n8n
git sparse-checkout init --cone
git sparse-checkout set packages/nodes-base packages/@n8n/nodes-langchain
```

refresh with `git submodule update --remote`

