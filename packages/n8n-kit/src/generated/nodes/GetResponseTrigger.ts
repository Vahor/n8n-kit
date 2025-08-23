// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/GetResponse/GetResponseTrigger.node.ts' node

export const description = "Starts the workflow when GetResponse events occur" as const;
export const type = "n8n-nodes-base.getResponseTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"getResponseApi","required":true,"displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"getResponseOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;

/**
 * Starts the workflow when GetResponse events occur
 */
export interface GetResponseTriggerNodeParameters {

    /**
     * Default: "apiKey"
     */
    readonly authentication?: "apiKey" | "oAuth2";

    /**
     * Default: []
     */
    readonly events?: ("subscribe" | "unsubscribe" | "click" | "open" | "survey")[];

    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getLists"}
     */
    readonly listIds?: any[];

    /**
     * Default: {}
     */
    readonly options?: { "delete"?: boolean };


}

