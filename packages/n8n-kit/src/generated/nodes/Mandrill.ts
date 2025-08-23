// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Mandrill/Mandrill.node.ts' node

export const name = "mandrill" as const;
export const description = "Consume Mandrill API" as const;
export const version = 1 as const;
export const credentials = [{"name":"mandrillApi","required":true}] as const;

/**
 * Consume Mandrill API
 */
export interface MandrillNodeParameters {

    /**
     * Default: "message"
     */
    readonly resource?: "message";

    /**
     * Default: "sendTemplate"
     */
    readonly operation?: "sendTemplate" | "sendHtml";

    /**
     * The template you want to send. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTemplates"}
     */
    readonly template?: string;

    /**
     * Email address of the sender optional with name
     */
    readonly fromEmail?: string;

    /**
     * Email address of the recipient. Multiple ones can be separated by comma.
     */
    readonly toEmail?: string;

    /**
     */
    readonly jsonParameters?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "async"?: boolean, "autoText"?: boolean, "autoHtml"?: boolean, "bccAddress"?: string, "fromName"?: string, "googleAnalyticsCampaign"?: string, "googleAnalyticsDomains"?: string, "html"?: string, "important"?: boolean, "inlineCss"?: boolean, "ipPool"?: string, "preserveRecipients"?: boolean, "returnPathDomain"?: string, "sendAt"?: string, "signingDomain"?: string, "subAccount"?: string, "subject"?: string, "tags"?: string, "text"?: string, "trackClicks"?: boolean, "trackOpens"?: boolean, "trackingDomain"?: string, "urlStripQs"?: boolean, "viewContentLink"?: boolean };

    /**
     * Global merge variables
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly mergeVarsJson?: string;

    /**
     * Per-recipient merge variables
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly mergeVarsUi?: { "mergeVarsValues": any };

    /**
     * Metadata an associative array of user metadata. Mandrill will store this metadata and make it available for retrieval. In addition, you can select up to 10 metadata fields to index and make searchable using the Mandrill search api.
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly metadataUi?: { "metadataValues": any };

    /**
     * Metadata an associative array of user metadata. Mandrill will store this metadata and make it available for retrieval. In addition, you can select up to 10 metadata fields to index and make searchable using the Mandrill search api.
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly metadataJson?: string;

    /**
     * An array of supported attachments to add to the message
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly attachmentsJson?: string;

    /**
     * Array of supported attachments to add to the message
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly attachmentsUi?: { "attachmentsValues": any, "attachmentsBinary": any };

    /**
     * Optional extra headers to add to the message (most headers are allowed)
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly headersJson?: string;

    /**
     * Optional extra headers to add to the message (most headers are allowed)
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly headersUi?: { "headersValues": any };


}

