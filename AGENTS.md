# Agent Guidelines for n8n-kit

## Build/Test Commands
- **Build**: `bun run --filter '*' build` (all packages), `bun run build` (individual packages)
- **Format**: `bun run format` (uses biome with tab indentation, double quotes)
- **Typecheck**: `bun run typecheck` (workspace), `tsc --project tsconfig.check.json` (n8n-kit), `tsc --noEmit` (n8n-cli)
- **Run single test**: `bun test <path-to-test-file>` (uses bun:test framework)
- **Watch mode**: `bun run --filter '*' dev` (builds all packages with --watch flag)
- **Check examples**: `bash scripts/build-and-check-examples.sh` (verify examples work after changes)

## Code Style
- **Formatter**: Biome with tab indentation, double quotes
- **Imports**: Organize imports automatically (biome config), prefer absolute imports from src/
- **Types**: Use TypeScript strictly, prefer `Type` from arktype for schemas, avoid explicit any
- **Naming**: camelCase for variables/functions, PascalCase for classes/types, kebab-case for files
- **Error handling**: Use arktype validation, prefer Result patterns when available
- **Generated code**: Never edit files in generated/ directories - use generation scripts instead

## Architecture
- Monorepo with workspaces: packages/n8n-kit (core), packages/n8n-cli (CLI)
- Generated nodes/credentials from n8n-nodes-base using scripts in packages/n8n-kit/scripts/
- Workflow builder pattern with Chain/Node abstractions
- Uses Bun as runtime and package manager (>=1.2.20 required)
- Update entrypoint after adding nodes: `bun run generate:entrypoint`

## Development Workflow
- Always add tests/examples when making changes
- Run `bash scripts/build-and-check-examples.sh` to verify examples still work
- Generated files come from n8n submodule - use `bun run generate` to regenerate
- Create changeset for releases: `bunx @changesets/cli`