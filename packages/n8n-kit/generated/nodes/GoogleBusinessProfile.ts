// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/BusinessProfile/GoogleBusinessProfile.node.ts' node

export const name = "googleBusinessProfile" as const;
export const description = "Consume Google Business Profile API" as const;
export const version = 1 as const;
export const defaults = {"name":"Google Business Profile"} as const;
export const credentials = [{"name":"googleBusinessProfileOAuth2Api","required":true}] as const

/**
 * Consume Google Business Profile API
 */
export interface GoogleBusinessProfileNodeParameters {

    /**
     * Default: "post"
     */
    readonly resource?: "post" | "review";


}

