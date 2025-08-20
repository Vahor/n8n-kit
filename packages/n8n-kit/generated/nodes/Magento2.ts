// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Magento/Magento2.node.ts' node

export const name = "magento2" as const;
export const description = "Consume Magento API" as const;
export const version = 1 as const;
export const defaults = { name: "Magento 2" } as const;
export const credentials = [{ name: "magento2Api", required: true }] as const;

/**
 * Consume Magento API
 */
export interface Magento2NodeParameters {
	/**
	 * Default: "customer"
	 */
	readonly resource?: "customer" | "invoice" | "order" | "product";
}
