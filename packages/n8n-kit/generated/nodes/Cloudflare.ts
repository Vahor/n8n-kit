// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Cloudflare/Cloudflare.node.ts' node

export const name = "cloudflare" as const;
export const description = "Consume Cloudflare API" as const;
export const version = 1 as const;
export const defaults = { name: "Cloudflare" } as const;
export const credentials = [{ name: "cloudflareApi", required: true }] as const;

/**
 * Consume Cloudflare API
 */
export interface CloudflareNodeParameters {
	/**
	 * Default: "zoneCertificate"
	 */
	readonly resource?: "zoneCertificate";
}
