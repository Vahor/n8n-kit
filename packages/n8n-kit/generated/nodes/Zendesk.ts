// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Zendesk/Zendesk.node.ts' node

export const name = "zendesk" as const;
export const description = "Consume Zendesk API" as const;
export const version = 1 as const;
export const defaults = { name: "Zendesk" } as const;
export const credentials = [
	{
		name: "zendeskApi",
		required: true,
		displayOptions: { show: { authentication: ["apiToken"] } },
	},
	{
		name: "zendeskOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["oAuth2"] } },
	},
] as const;

/**
 * Consume Zendesk API
 */
export interface ZendeskNodeParameters {
	/**
	 * Default: "apiToken"
	 */
	readonly authentication?: "apiToken" | "oAuth2";

	/**
	 * Default: "ticket"
	 */
	readonly resource?: "ticket" | "ticketField" | "user" | "organization";
}
