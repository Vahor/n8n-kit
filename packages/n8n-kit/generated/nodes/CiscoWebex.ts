// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Cisco/Webex/CiscoWebex.node.ts' node

export const name = "ciscoWebex" as const;
export const description = "Consume the Cisco Webex API" as const;
export const version = 1 as const;
export const defaults = { name: "Webex by Cisco" } as const;
export const credentials = [
	{ name: "ciscoWebexOAuth2Api", required: true },
] as const;

/**
 * Consume the Cisco Webex API
 */
export interface CiscoWebexNodeParameters {
	/**
	 * Default: "message"
	 */
	readonly resource?: "meeting" | "message";
}
