// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Shopify/Shopify.node.ts' node

export const name = "shopify" as const;
export const description = "Consume Shopify API" as const;
export const version = 1 as const;
export const defaults = { name: "Shopify" } as const;
export const credentials = [
	{
		name: "shopifyApi",
		required: true,
		displayOptions: { show: { authentication: ["apiKey"] } },
	},
	{
		name: "shopifyAccessTokenApi",
		required: true,
		displayOptions: { show: { authentication: ["accessToken"] } },
	},
	{
		name: "shopifyOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["oAuth2"] } },
	},
] as const;

/**
 * Consume Shopify API
 */
export interface ShopifyNodeParameters {
	/**
	 */
	readonly apiVersion?: string;

	/**
	 * Default: "apiKey"
	 */
	readonly authentication?: "accessToken" | "oAuth2" | "apiKey";

	/**
	 * Default: "order"
	 */
	readonly resource?: "order" | "product";
}
