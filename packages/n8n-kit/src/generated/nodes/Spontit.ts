// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Spontit/Spontit.node.ts' node

export const description = "Consume Spontit API" as const;
export const type = "n8n-nodes-base.spontit" as const;
export const version = 1 as const;
export const credentials = [{"name":"spontitApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SpontitNodeParameters {
    /**
     * Default: "push"
     */
    readonly resource?: "push";

    /**
     * Default: "create"
     */
    readonly operation?: "create";

    /**
     * To provide text in a push, supply one of either "content" or "pushContent" (or both). Limited to 2500 characters. (Required if a value for "pushContent" is not provided).
     */
    readonly content?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "channelName"?: string, "expirationStamp"?: string, "iOSDeepLink"?: string, "link"?: string, "openInHomeFeed"?: boolean, "openLinkInApp"?: boolean, "pushToEmails"?: string, "pushToFollowers"?: string, "pushToPhoneNumbers"?: string, "schedule"?: string, "subtitle"?: string, "pushTitle"?: string };

}
