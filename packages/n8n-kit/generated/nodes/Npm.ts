// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Npm/Npm.node.ts' node

export const name = "npm" as const;
export const description = "Consume NPM registry API" as const;
export const version = 1 as const;
export const defaults = { name: "npm" } as const;
export const credentials = [{ name: "npmApi", required: false }] as const;

/**
 * Consume NPM registry API
 */
export interface NpmNodeParameters {
	/**
	 * Default: "package"
	 */
	readonly resource?: "package" | "distTag";
}
