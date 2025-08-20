// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Salesforce/Salesforce.node.ts' node

export const name = "salesforce" as const;
export const description = "Consume Salesforce API" as const;
export const version = 1 as const;
export const defaults = { name: "Salesforce" } as const;
export const credentials = [
	{
		name: "salesforceOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["oAuth2"] } },
	},
	{
		name: "salesforceJwtApi",
		required: true,
		displayOptions: { show: { authentication: ["jwt"] } },
	},
] as const;

/**
 * Consume Salesforce API
 */
export interface SalesforceNodeParameters {
	/**
	 * OAuth Authorization Flow
	 * Default: "oAuth2"
	 */
	readonly authentication?: "oAuth2" | "jwt";

	/**
	 * Default: "lead"
	 */
	readonly resource?:
		| "account"
		| "attachment"
		| "case"
		| "contact"
		| "customObject"
		| "document"
		| "flow"
		| "lead"
		| "opportunity"
		| "search"
		| "task"
		| "user";
}
