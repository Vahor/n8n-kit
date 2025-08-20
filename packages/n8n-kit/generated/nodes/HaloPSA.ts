// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/HaloPSA/HaloPSA.node.ts' node

export const name = "haloPSA" as const;
export const description = "Consume HaloPSA API" as const;
export const version = 1 as const;
export const defaults = { name: "HaloPSA" } as const;
export const credentials = [
	{ name: "haloPSAApi", required: true, testedBy: "haloPSAApiCredentialTest" },
] as const;

/**
 * Consume HaloPSA API
 */
export interface HaloPSANodeParameters {
	/**
	 * Default: "client"
	 */
	readonly resource: "client" | "site" | "ticket" | "user";
}
