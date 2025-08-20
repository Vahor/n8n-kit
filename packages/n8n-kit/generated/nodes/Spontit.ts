// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Spontit/Spontit.node.ts' node

export const name = "spontit" as const;
export const description = "Consume Spontit API" as const;
export const version = 1 as const;
export const defaults = { name: "Spontit" } as const;
export const credentials = [{ name: "spontitApi", required: true }] as const;

/**
 * Consume Spontit API
 */
export interface SpontitNodeParameters {
	/**
	 * Default: "push"
	 */
	readonly resource?: "push";
}
