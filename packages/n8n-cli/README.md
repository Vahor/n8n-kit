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

const workflow = new Workflow("my-workflow", {
  active: true,
  name: "My Workflow",
  definition: [
    Chain.start(
      // ...
    ),
  ],
});

const app = new App();
app.add(workflow);

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

**Workflow Matching:**
- Workflows are matched by a unique tag generated from their hash ID
- If no match is found, a new workflow is created
- If a match is found, the existing workflow is updated

Note: The cli will never delete workflows. If you want to delete a workflow, you can do it manually in n8n.

**Example:**
```sh
bunx @vahor/n8n deploy --yes
```

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
bunx @vahor/n8n workflow --help
```
