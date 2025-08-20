// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Oura/Oura.node.ts' node

export const name = "oura" as const;
export const description = "Consume Oura API" as const;
export const version = 1 as const;
export const defaults = { name: "Oura" } as const;
export const credentials = [{ name: "ouraApi", required: true }] as const;

/**
 * Consume Oura API
 */
export interface OuraNodeParameters {
	/**
	 * Default: "summary"
	 */
	readonly resource?: "profile" | "summary";
}
