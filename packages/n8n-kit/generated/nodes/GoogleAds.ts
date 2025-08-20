// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/Ads/GoogleAds.node.ts' node

export const name = "googleAds" as const;
export const description = "Use the Google Ads API" as const;
export const version = 1 as const;
export const defaults = { name: "Google Ads" } as const;
export const credentials = [
	{
		name: "googleAdsOAuth2Api",
		required: true,
		testedBy: {
			request: { method: "GET", url: "/v20/customers:listAccessibleCustomers" },
		},
	},
] as const;

/**
 * Use the Google Ads API
 */
export interface GoogleAdsNodeParameters {
	/**
	 * Default: "campaign"
	 */
	readonly resource?: "campaign";

	/**
	 */
	readonly campaigsNotice?: string;
}
