// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Zendesk/ZendeskTrigger.node.ts' node

export const description = "Handle Zendesk events via webhooks" as const;
export const type = "n8n-nodes-base.zendeskTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"zendeskApi","required":true,"displayOptions":{"show":{"authentication":["apiToken"]}}},{"name":"zendeskOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const outputs = {"main":"main"} as const;

export interface ZendeskTriggerNodeParameters {

    /**
     * Default: "apiToken"
     */
    readonly authentication?: "apiToken" | "oAuth2";

    /**
     * Default: "support"
     */
    readonly service?: "support";

    /**
     * Default: {}
     */
    readonly options?: { "fields"?: any[] };

    /**
     * The condition to set
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly conditions?: { "all": any, "any": any };


}

