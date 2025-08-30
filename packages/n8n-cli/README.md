# @vahor/n8n-kit-cli

Command-line interface for deploying and managing n8n workflows created with n8n-kit.

## Installation

```sh
npm install @vahor/n8n-kit-cli
```

## Table of Contents

- [Required Environment Variables](#required-environment-variables)
- [Configuration](#configuration)
- [Commands](#commands)
  - [init](#init)
  - [build](#build)
  - [deploy](#deploy)
  - [diff](#diff)
  - [import](#import)
- [Global Options](#global-options)

## Required Environment Variables

The CLI requires the following environment variables to connect to your n8n instance:

```sh
N8N_API_KEY=your-n8n-api-key
N8N_BASE_URL=https://your-n8n-instance.com
```

### Getting Your API Key

1. Log into your n8n instance
2. Go to **Settings** → **API Keys**
3. Create a new API key with appropriate permissions
4. Copy the key and set it as `N8N_API_KEY`

## Configuration

Initialize your project with a configuration file:

```sh
bunx @vahor/n8n init
```

This creates `n8n-kit.config.json`:

```json
{
  "entrypoint": "src/index.ts",
  "out": "n8n-kit"
}
```

### Configuration Options

- `entrypoint`: Path to your main TypeScript file that exports the `app`
- `out`: Directory where built JSON files will be saved

### Example Init File

Your entrypoint file should export an `app` instance:

```typescript
// src/index.ts
import { App, Workflow, Chain } from "@vahor/n8n-kit";

const app = new App();

new Workflow(app, "my-workflow", {
  active: true,
  name: "My Workflow",
  definition: [
    Chain.start(
      // ...
    ),
  ],
});

export { app };
```

## Commands

### init

Initialize a new n8n-kit project configuration.

```sh
bunx @vahor/n8n init
```

### build

Build your application and generate JSON workflow files.

```sh
bunx @vahor/n8n build [options]
```

**Options:**
- `--indent <number>` - Indent JSON files (default: 0)

**Example:**
```sh
bunx @vahor/n8n build --indent 2
```

### deploy

Deploy your workflows to n8n.

```sh
bunx @vahor/n8n deploy [options]
```

**Options:**
- `--merge` - Do not overwrite nodes position in existing workflows (default: true)

**Workflow Matching:**

- Workflows are matched by a unique tag generated from their hash ID
- If no match is found, a new workflow is created
- If a match is found, the existing workflow is updated

**Note:** The CLI will never delete workflows or ids. If you want to delete a workflow that is no longer defined in your code, you can do it manually in n8n.

**Example:**
```sh
bunx @vahor/n8n deploy --yes
```

### diff

Compare your local workflows with the ones deployed to n8n.

```sh
bunx @vahor/n8n diff [options]
```

**Options:**
- `--id <string...>` - Specific workflow IDs to diff (compares all workflows if not specified)

The diff command:
- Fetches deployed workflows from your n8n instance
- Creates temporary JSON files for comparison in a `.diff` folder
- Uses `git diff` to show the differences between local and deployed versions. `git` needs to be installed and available in your PATH (used via `git diff ---no-index`)
- Exits with a `1` exit code if there are any differences

**Example:**
```sh
# Diff all workflows
bunx @vahor/n8n diff

# Diff specific workflows
bunx @vahor/n8n diff --id my-workflow-1 --id my-workflow-2
```

### import

> [!WARNING]  
> This command is very experimental and may produce incomplete or incorrect TypeScript code.\
> It's only intended for use as a starting point for your own workflows.

Generate TypeScript code from existing n8n workflows.

```sh
bunx @vahor/n8n import --out <output-file> [options]
```

**Options:**
- `--id <string>` - Import workflow by ID from n8n instance
- `--file <string>` - Import workflow from local JSON file
- `--out <string>` - Output path for generated TypeScript file (required)

You must specify either `--id` or `--file`, but not both.

**Examples:**
```sh
# Import from n8n instance by workflow ID
bunx @vahor/n8n import --id "workflow-123" --out "src/imported-workflow.ts"

# Import from local JSON file
bunx @vahor/n8n import --file "workflow.json" --out "src/imported-workflow.ts"
```

The generated TypeScript file will include:
- Imports from `@vahor/n8n-kit`
- Credential definitions (if any)
- Workflow definition with nodes and connections
- An exported `app` instance ready to use

**Known Limitations:**
- When a node has multiple versions, the imported node will be wrong. Example: `GoogleDrive` instead of `GoogleDriveV2`.
- The generated code is probably not optimal. (ex: `connect` is not implemented and will be replaced by `next` and `Placeholder`)
- The generated code will use `generated` nodes from `@vahor/n8n-kit/nodes/generated` even if a proper implementation is available.
- Groups are not supported as they are not native to n8n.
- As it's generated code, run prettier or biome on it to make it look nice.

## Global Options

All commands support these global options:

### `--dry-run`

Preview what the command would do without making changes.

```sh
bunx @vahor/n8n deploy --dry-run
```

### `--yes`

Skip confirmation prompts and proceed automatically.

```sh
bunx @vahor/n8n deploy --yes
```

### `--debug`

Enable debug logging for troubleshooting.

```sh
bunx @vahor/n8n build --debug
```

### `--help`

Show help information for any command.

```sh
bunx @vahor/n8n --help
bunx @vahor/n8n deploy --help
```
