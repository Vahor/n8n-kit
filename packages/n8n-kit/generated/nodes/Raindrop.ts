// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Raindrop/Raindrop.node.ts' node

export const name = "raindrop" as const;
export const description = "Consume the Raindrop API" as const;
export const version = 1 as const;
export const defaults = { name: "Raindrop" } as const;
export const credentials = [
	{ name: "raindropOAuth2Api", required: true },
] as const;

/**
 * Consume the Raindrop API
 */
export interface RaindropNodeParameters {
	/**
	 * Default: "collection"
	 */
	readonly resource?: "bookmark" | "collection" | "tag" | "user";
}
