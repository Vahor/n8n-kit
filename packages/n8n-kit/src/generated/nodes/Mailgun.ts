// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Mailgun/Mailgun.node.ts' node

export const description = "Sends an email via Mailgun" as const;
export const type = "n8n-nodes-base.mailgun" as const;
export const version = 1 as const;
export const credentials = [{"name":"mailgunApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MailgunNodeParameters {
    /** Email address of the sender optional with name */
    readonly fromEmail?: string;

    /** Email address of the recipient. Multiple ones can be separated by comma. */
    readonly toEmail?: string;

    /** Cc Email address of the recipient. Multiple ones can be separated by comma. */
    readonly ccEmail?: string;

    /** Bcc Email address of the recipient. Multiple ones can be separated by comma. */
    readonly bccEmail?: string;

    /** Reply-To header. Recipients will use this address when replying. */
    readonly replyTo?: string;

    /**
     * Arbitrary email headers. Enter only the header name (e.g. X-Custom-Header); the h: prefix is added automatically.
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly customHeaders?: { headers: Array<{ name?: string, value?: string }> };

    /** Tags for segmentation and analytics (comma-separated). Sent as o:tag. */
    readonly tags?: string;

    /** Subject line of the email */
    readonly subject?: string;

    /**
     * Plain text message of email
     * Type options: {"rows":5}
     */
    readonly text?: string;

    /**
     * HTML text message of email
     * Type options: {"rows":5,"editor":"htmlEditor"}
     */
    readonly html?: string;

    /** Name of the binary properties which contain data which should be added to email as attachment. Multiple ones can be comma-separated. */
    readonly attachments?: string;

}
