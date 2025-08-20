// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/PagerDuty/PagerDuty.node.ts' node

export const name = "pagerDuty" as const;
export const description = "Consume PagerDuty API" as const;
export const version = 1 as const;
export const defaults = { name: "PagerDuty" } as const;
export const credentials = [
	{
		name: "pagerDutyApi",
		required: true,
		displayOptions: { show: { authentication: ["apiToken"] } },
	},
	{
		name: "pagerDutyOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["oAuth2"] } },
	},
] as const;

/**
 * Consume PagerDuty API
 */
export interface PagerDutyNodeParameters {
	/**
	 * Default: "apiToken"
	 */
	readonly authentication?: "apiToken" | "oAuth2";

	/**
	 * Default: "incident"
	 */
	readonly resource?: "incident" | "incidentNote" | "logEntry" | "user";
}
