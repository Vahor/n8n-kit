// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Okta/Okta.node.ts' node

export const name = "okta" as const;
export const description = "Use the Okta API" as const;
export const version = 1 as const;
export const defaults = {"name":"Okta"} as const;
export const credentials = [{"name":"oktaApi","required":true}] as const

/**
 * Use the Okta API
 */
export interface OktaNodeParameters {

    /**
     * Default: "user"
     */
    readonly resource?: "user";


}

