// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Sendy/Sendy.node.ts' node

export const description = "Consume Sendy API" as const;
export const type = "n8n-nodes-base.sendy" as const;
export const version = 1 as const;
export const credentials = [{"name":"sendyApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SendyNodeParameters {
    /** Default: "subscriber" */
    readonly resource?: "campaign" | "subscriber";

    /** Default: "create" */
    readonly operation?: "create" | "add" | "count" | "delete" | "remove" | "status";

    /** The 'From name' of your campaign */
    readonly fromName?: string;

    /** The 'From email' of your campaign */
    readonly fromEmail?: string;

    /** The 'Reply to' of your campaign */
    readonly replyTo?: string;

    /** The 'Title' of your campaign */
    readonly title?: string;

    /** The 'Subject' of your campaign */
    readonly subject?: string;

    /** The 'HTML version' of your campaign */
    readonly htmlText?: string;

    /** Whether to send the campaign as well and not just create a draft. Default is false. */
    readonly sendCampaign?: boolean;

    readonly brandId?: string;

    /** Default: {} */
    readonly additionalFields?: { "excludeListIds"?: string, "excludeSegmentIds"?: string, "listIds"?: string, "plainText"?: string, "queryString"?: string, "segmentIds"?: string, "trackClicks"?: boolean, "trackOpens"?: boolean } | { "country"?: string, "gdpr"?: boolean, "hp"?: boolean, "ipaddress"?: string, "name"?: string, "referrer"?: string, "silent"?: boolean };

    /** Email address of the subscriber */
    readonly email?: string;

    /** The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID. */
    readonly listId?: string;

}
