// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Gong/Gong.node.ts' node

export const name = "gong" as const;
export const description = "Interact with Gong API" as const;
export const version = 1 as const;
export const defaults = {"name":"Gong"} as const;
export const credentials = [{"name":"gongApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"gongOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Interact with Gong API
 */
export interface GongNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "call"
     */
    readonly resource?: "call" | "user";


}

