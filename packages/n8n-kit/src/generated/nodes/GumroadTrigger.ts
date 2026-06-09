// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Gumroad/GumroadTrigger.node.ts' node

export const description = "Handle Gumroad events via webhooks" as const;
export const type = "n8n-nodes-base.gumroadTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"gumroadApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"gumroadOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface GumroadTriggerNodeParameters {
    /** Default: "accessToken" */
    readonly authentication?: "accessToken" | "oAuth2";

    /** The resource is gonna fire the event */
    readonly resource?: "cancellation" | "dispute" | "dispute_won" | "refund" | "sale";

}
