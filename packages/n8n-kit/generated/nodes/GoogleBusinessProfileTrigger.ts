// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/BusinessProfile/GoogleBusinessProfileTrigger.node.ts' node

export const name = "googleBusinessProfileTrigger" as const;
export const description = "Fetches reviews from Google Business Profile and starts the workflow on specified polling intervals." as const;
export const version = 1 as const;
export const defaults = {"name":"Google Business Profile Trigger"} as const;
export const credentials = [{"name":"googleBusinessProfileOAuth2Api","required":true}] as const

/**
 * Fetches reviews from Google Business Profile and starts the workflow on specified polling intervals.
 */
export interface GoogleBusinessProfileTriggerNodeParameters {

    /**
     * Default: "reviewAdded"
     */
    readonly event: "reviewAdded";

    /**
     * The Google Business Profile account
     * Default: {"mode":"list","value":""}
     */
    readonly account?: any;

    /**
     * The specific location or business associated with the account
     * Default: {"mode":"list","value":""}
     */
    readonly location?: any;


}

