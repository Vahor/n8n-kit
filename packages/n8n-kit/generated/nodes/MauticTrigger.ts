// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Mautic/MauticTrigger.node.js' node

export const name = "mauticTrigger" as const;
export const description = "Handle Mautic events via webhooks" as const;
export const version = 1 as const;
export const defaults = {"name":"Mautic Trigger"} as const;
export const credentials = [{"name":"mauticApi","required":true,"displayOptions":{"show":{"authentication":["credentials"]}}},{"name":"mauticOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Handle Mautic events via webhooks
 */
export interface MauticTriggerNodeParameters {

    /**
     * Default: "credentials"
     */
    readonly authentication?: "credentials" | "oAuth2";

    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getEvents"}
     */
    readonly events: string[];

    /**
     * Order direction for queued events in one webhook. Can be “DESC” or “ASC”.
     * Default: "ASC"
     */
    readonly eventsOrder?: "ASC" | "DESC";


}

