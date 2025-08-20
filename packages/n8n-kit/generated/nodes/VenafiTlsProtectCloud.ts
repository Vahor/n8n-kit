// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Venafi/ProtectCloud/VenafiTlsProtectCloud.node.ts' node

export const name = "venafiTlsProtectCloud" as const;
export const description = "Consume Venafi TLS Protect Cloud API" as const;
export const version = 1 as const;
export const defaults = { name: "Venafi TLS Protect Cloud" } as const;
export const credentials = [
	{ name: "venafiTlsProtectCloudApi", required: true },
] as const;

/**
 * Consume Venafi TLS Protect Cloud API
 */
export interface VenafiTlsProtectCloudNodeParameters {
	/**
	 * Default: "certificateRequest"
	 */
	readonly resource?: "certificate" | "certificateRequest";
}
