// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Mailchimp/MailchimpTrigger.node.ts' node

export const description = "Handle Mailchimp events via webhooks" as const;
export const type = "n8n-nodes-base.mailchimpTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"mailchimpApi","required":true,"displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"mailchimpOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface MailchimpTriggerNodeParameters {
    /** Default: "apiKey" */
    readonly authentication?: "apiKey" | "oAuth2";

    /**
     * The list that is gonna fire the event. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getLists"}
     */
    readonly list?: string;

    /**
     * The events that can trigger the webhook and whether they are enabled
     * Default: []
     */
    readonly events?: ("campaign" | "cleaned" | "upemail" | "profile" | "subscribe" | "unsubscribe")[];

    /**
     * The possible sources of any events that can trigger the webhook and whether they are enabled
     * Default: []
     */
    readonly sources?: ("user" | "admin" | "api")[];

}
