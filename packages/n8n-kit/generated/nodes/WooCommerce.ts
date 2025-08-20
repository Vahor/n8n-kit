// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/WooCommerce/WooCommerce.node.ts' node

export const name = "wooCommerce" as const;
export const description = "Consume WooCommerce API" as const;
export const version = 1 as const;
export const defaults = { name: "WooCommerce" } as const;
export const credentials = [
	{ name: "wooCommerceApi", required: true },
] as const;

/**
 * Consume WooCommerce API
 */
export interface WooCommerceNodeParameters {
	/**
	 * Default: "product"
	 */
	readonly resource?: "customer" | "order" | "product";
}
