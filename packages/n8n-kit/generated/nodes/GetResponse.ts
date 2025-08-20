// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/GetResponse/GetResponse.node.ts' node

export const name = "getResponse" as const;
export const description = "Consume GetResponse API" as const;
export const version = 1 as const;
export const defaults = { name: "GetResponse" } as const;
export const credentials = [
	{
		name: "getResponseApi",
		required: true,
		displayOptions: { show: { authentication: ["apiKey"] } },
	},
	{
		name: "getResponseOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["oAuth2"] } },
	},
] as const;

/**
 * Consume GetResponse API
 */
export interface GetResponseNodeParameters {
	/**
	 * Default: "apiKey"
	 */
	readonly authentication?: "apiKey" | "oAuth2";

	/**
	 * Default: "contact"
	 */
	readonly resource?: "contact";
}
