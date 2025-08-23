// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Gmail/GmailTrigger.node.ts' node

export const description = "Fetches emails from Gmail and starts the workflow on specified polling intervals." as const;
export const type = "n8n-nodes-base.gmailTrigger" as const;
export const version = 1.3 as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"gmailOAuth2","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const outputs = {"main":"main"} as const;

export interface GmailTriggerNodeParameters {

    /**
     * Default: "oAuth2"
     */
    readonly authentication?: "oAuth2" | "serviceAccount";

    /**
     * Default: "messageReceived"
     */
    readonly event?: "messageReceived";

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * Default: {}
     */
    readonly filters?: { "includeSpamTrash"?: boolean, "includeDrafts"?: boolean, "labelIds"?: any[], "q"?: string, "readStatus"?: "both" | "unread" | "read", "sender"?: string };

    /**
     * Default: {}
     */
    readonly options?: { "dataPropertyAttachmentsPrefixName"?: string, "downloadAttachments"?: boolean };

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };

}

