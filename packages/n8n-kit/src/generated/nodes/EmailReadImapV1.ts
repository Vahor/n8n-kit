// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/EmailReadImap/v1/EmailReadImapV1.node.ts' node

export const name = "emailReadImap" as const;
export const description = "Triggers the workflow when a new email is received" as const;
export const version = 1 as const;
export const credentials = [{"name":"imap","required":true,"testedBy":"imapConnectionTest"}] as const;

/**
 * Triggers the workflow when a new email is received
 */
export interface EmailReadImapV1NodeParameters {

    /**
     * Default: "INBOX"
     */
    readonly mailbox?: string;

    /**
     * What to do after the email has been received. If "nothing" gets selected it will be processed multiple times.
     * Default: "read"
     */
    readonly postProcessAction?: "read" | "nothing";

    /**
     * Whether attachments of emails should be downloaded. Only set if needed as it increases processing.
     */
    readonly downloadAttachments?: boolean;

    /**
     * The format to return the message in
     * Default: "simple"
     */
    readonly format?: "raw" | "resolved" | "simple";

    /**
     * Prefix for name of the binary property to which to write the attachments. An index starting with 0 will be added. So if name is "attachment_" the first attachment is saved to "attachment_0"
     * Default: "attachment_"
     */
    readonly dataPropertyAttachmentsPrefixName?: string;

    /**
     * Default: {}
     */
    readonly options?: { "customEmailConfig"?: string, "allowUnauthorizedCerts"?: boolean, "forceReconnect"?: number };


}

