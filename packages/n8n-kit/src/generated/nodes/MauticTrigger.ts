// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Mautic/MauticTrigger.node.ts' node

export const description = "Handle Mautic events via webhooks" as const;
export const type = "n8n-nodes-base.mauticTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"mauticApi","required":true,"displayOptions":{"show":{"authentication":["credentials"]}}},{"name":"mauticOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface MauticTriggerNodeParameters {
    /** Default: "credentials" */
    readonly authentication?: "credentials" | "oAuth2";

    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getEvents"}
     */
    readonly events?: unknown[];

    /**
     * Order direction for queued events in one webhook. Can be “DESC” or “ASC”.
     * Default: "ASC"
     */
    readonly eventsOrder?: "ASC" | "DESC";

}
