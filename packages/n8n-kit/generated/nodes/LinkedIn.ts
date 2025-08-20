// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/LinkedIn/LinkedIn.node.ts' node

export const name = "linkedIn" as const;
export const description = "Consume LinkedIn API" as const;
export const version = 1 as const;
export const defaults = { name: "LinkedIn" } as const;
export const credentials = [
	{
		name: "linkedInOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["standard"] } },
	},
	{
		name: "linkedInCommunityManagementOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["communityManagement"] } },
	},
] as const;

/**
 * Consume LinkedIn API
 */
export interface LinkedInNodeParameters {
	/**
	 * Default: "standard"
	 */
	readonly authentication?: "standard" | "communityManagement";

	/**
	 * Default: "post"
	 */
	readonly resource?: "post";
}
