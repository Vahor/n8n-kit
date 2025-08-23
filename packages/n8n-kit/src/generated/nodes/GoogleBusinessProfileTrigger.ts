// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/BusinessProfile/GoogleBusinessProfileTrigger.node.ts' node

export const description = "Fetches reviews from Google Business Profile and starts the workflow on specified polling intervals." as const;
export const type = "n8n-nodes-base.googleBusinessProfileTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"googleBusinessProfileOAuth2Api","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleBusinessProfileTriggerNodeParameters {
    /**
     * Default: "reviewAdded"
     */
    readonly event?: "reviewAdded";

    /**
     * The Google Business Profile account
     * Default: {"mode":"list","value":""}
     */
    readonly account?: {
	value: string,
	mode: "list" | "name",
};

    /**
     * The specific location or business associated with the account
     * Default: {"mode":"list","value":""}
     */
    readonly location?: {
	value: string,
	mode: "list" | "name",
};

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };
}
