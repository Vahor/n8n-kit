// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Zammad/Zammad.node.ts' node

export const name = "zammad" as const;
export const description = "Consume the Zammad API" as const;
export const version = 1 as const;
export const defaults = {"name":"Zammad"} as const;
export const credentials = [{"name":"zammadBasicAuthApi","required":true,"testedBy":"zammadBasicAuthApiTest","displayOptions":{"show":{"authentication":["basicAuth"]}}},{"name":"zammadTokenAuthApi","required":true,"testedBy":"zammadTokenAuthApiTest","displayOptions":{"show":{"authentication":["tokenAuth"]}}}] as const

/**
 * Consume the Zammad API
 */
export interface ZammadNodeParameters {

    /**
     * Default: "tokenAuth"
     */
    readonly authentication?: "basicAuth" | "tokenAuth";

    /**
     * Default: "user"
     */
    readonly resource?: "group" | "organization" | "ticket" | "user";


}

