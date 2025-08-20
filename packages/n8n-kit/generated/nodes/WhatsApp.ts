// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/WhatsApp/WhatsApp.node.ts' node

export const name = "whatsApp" as const;
export const description = "Access WhatsApp API" as const;
export const version = 1 as const;
export const defaults = { name: "WhatsApp Business Cloud" } as const;
export const credentials = [
	{ name: "WHATSAPP_CREDENTIALS_TYPE", required: true },
] as const;

/**
 * Access WhatsApp API
 */
export interface WhatsAppNodeParameters {
	/**
	 * Default: "message"
	 */
	readonly resource?: "message" | "media";
}
