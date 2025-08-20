// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/EmailSend/v2/EmailSendV2.node.js' node

export const name = "emailSend" as const;
export const description = "Sends an email using SMTP protocol" as const;
export const version = 2.1 as const;
export const defaults = {"name":"Send Email","color":"#00bb88"} as const;
export const credentials = [{"name":"smtp","required":true}] as const

/**
 * Sends an email using SMTP protocol
 */
export interface EmailSendV2NodeParameters {

    /**
     * Default: "email"
     */
    readonly resource?: any;

    /**
     * Default: "send"
     */
    readonly operation?: any;

    /**
     * Email address of the sender. You can also specify a name: Nathan Doe &lt;nate@n8n.io&gt;.
     */
    readonly fromEmail?: string;

    /**
     * Email address of the recipient. You can also specify a name: Nathan Doe &lt;nate@n8n.io&gt;.
     */
    readonly toEmail?: string;

    /**
     * Subject line of the email
     */
    readonly subject?: string;

    /**
     * Default: "html"
     */
    readonly emailFormat?: "text" | "html" | "both";

    /**
     * Plain text message of email
     * Type options: {"rows":5}
     */
    readonly text?: string;

    /**
     * HTML text message of email
     * Type options: {"rows":5}
     */
    readonly html?: string;

    /**
     * Default: {}
     */
    readonly options?: { "appendAttribution"?: boolean, "attachments"?: string, "ccEmail"?: string, "bccEmail"?: string, "allowUnauthorizedCerts"?: boolean, "replyTo"?: string };


}

