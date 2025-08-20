// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/UnleashedSoftware/UnleashedSoftware.node.ts' node

export const name = "unleashedSoftware" as const;
export const description = "Consume Unleashed Software API" as const;
export const version = 1 as const;
export const defaults = { name: "Unleashed Software" } as const;
export const credentials = [
	{ name: "unleashedSoftwareApi", required: true },
] as const;

/**
 * Consume Unleashed Software API
 */
export interface UnleashedSoftwareNodeParameters {
	/**
	 * Default: "salesOrder"
	 */
	readonly resource?: "salesOrder" | "stockOnHand";
}
