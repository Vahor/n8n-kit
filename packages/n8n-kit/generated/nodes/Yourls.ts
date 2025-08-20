// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Yourls/Yourls.node.ts' node

export const name = "yourls" as const;
export const description = "Consume Yourls API" as const;
export const version = 1 as const;
export const defaults = { name: "Yourls" } as const;
export const credentials = [{ name: "yourlsApi", required: true }] as const;

/**
 * Consume Yourls API
 */
export interface YourlsNodeParameters {
	/**
	 * Default: "url"
	 */
	readonly resource?: "url";
}
