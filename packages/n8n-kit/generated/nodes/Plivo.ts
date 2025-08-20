// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Plivo/Plivo.node.ts' node

export const name = "plivo" as const;
export const description = "Send SMS/MMS messages or make phone calls" as const;
export const version = 1 as const;
export const defaults = { name: "Plivo" } as const;
export const credentials = [{ name: "plivoApi", required: true }] as const;

/**
 * Send SMS/MMS messages or make phone calls
 */
export interface PlivoNodeParameters {
	/**
	 * Default: "sms"
	 */
	readonly resource: "call" | "mms" | "sms";
}
