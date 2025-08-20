// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Linear/Linear.node.ts' node

export const name = "linear" as const;
export const description = "Consume Linear API" as const;
export const version = 1.1 as const;
export const defaults = { name: "Linear" } as const;
export const credentials = [
	{
		name: "linearApi",
		required: true,
		testedBy: "linearApiTest",
		displayOptions: { show: { authentication: ["apiToken"] } },
	},
	{
		name: "linearOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["oAuth2"] } },
	},
] as const;

/**
 * Consume Linear API
 */
export interface LinearNodeParameters {
	/**
	 * Default: "apiToken"
	 */
	readonly authentication?: "apiToken" | "oAuth2";

	/**
	 * Default: "issue"
	 */
	readonly resource?: "comment" | "issue";
}
