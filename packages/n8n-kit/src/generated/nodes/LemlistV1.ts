// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Lemlist/v1/LemlistV1.node.ts' node

export const description = "Consume the Lemlist API" as const;
export const type = "n8n-nodes-base.lemlist" as const;
export const version = 1 as const;
export const credentials = [{"name":"lemlistApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface LemlistV1NodeParameters {
    /** Default: "activity" */
    readonly resource?: "activity" | "campaign" | "lead" | "team" | "unsubscribe";

    /** Default: "getAll" */
    readonly operation?: "getAll" | "create" | "delete" | "get" | "unsubscribe" | "get" | "add" | "delete" | "getAll";

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 5
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { "campaignId"?: string, "type"?: "emailsBounced" | "emailsClicked" | "emailsOpened" | "emailsReplied" | "emailsSendFailed" | "emailsSent" | "emailsUnsubscribed" };

    /**
     * ID of the campaign to create the lead under. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getCampaigns"}
     */
    readonly campaignId?: string;

    /** Email of the lead to create */
    readonly email?: string;

    /** Default: {} */
    readonly additionalFields?: { "companyName"?: string, "deduplicate"?: boolean, "firstName"?: string, "lastName"?: string, "icebreaker"?: string, "phone"?: string, "picture"?: string, "linkedinUrl"?: string };

}
