// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Tapfiliate/Tapfiliate.node.ts' node

export const name = "tapfiliate" as const;
export const description = "Consume Tapfiliate API" as const;
export const version = 1 as const;
export const defaults = { name: "Tapfiliate" } as const;
export const credentials = [{ name: "tapfiliateApi", required: true }] as const;

/**
 * Consume Tapfiliate API
 */
export interface TapfiliateNodeParameters {
	/**
	 * Default: "affiliate"
	 */
	readonly resource: "affiliate" | "affiliateMetadata" | "programAffiliate";
}
