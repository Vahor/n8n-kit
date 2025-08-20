// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Drift/Drift.node.ts' node

export const name = "drift" as const;
export const description = "Consume Drift API" as const;
export const version = 1 as const;
export const defaults = { name: "Drift" } as const;
export const credentials = [
	{
		name: "driftApi",
		required: true,
		displayOptions: { show: { authentication: ["accessToken"] } },
	},
	{
		name: "driftOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["oAuth2"] } },
	},
] as const;

/**
 * Consume Drift API
 */
export interface DriftNodeParameters {
	/**
	 * Default: "accessToken"
	 */
	readonly authentication?: "accessToken" | "oAuth2";

	/**
	 * Default: "contact"
	 */
	readonly resource?: "contact";
}
