// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/EmailSend/v1/EmailSendV1.node.ts' node

export const name = "emailSend" as const;
export const description = "Sends an Email" as const;
export const version = 1 as const;

/**
 * Sends an Email
 */
export interface EmailSendV1NodeParameters {

    /**
     * Email address of the sender optional with name
     */
    readonly fromEmail: string;

    /**
     * Email address of the recipient
     */
    readonly toEmail: string;

    /**
     * Email address of CC recipient
     */
    readonly ccEmail?: string;

    /**
     * Email address of BCC recipient
     */
    readonly bccEmail?: string;

    /**
     * Subject line of the email
     */
    readonly subject?: string;

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
     * Name of the binary properties that contain data to add to email as attachment. Multiple ones can be comma-separated.
     */
    readonly attachments?: string;

    /**
     * Default: {}
     */
    readonly options?: { "allowUnauthorizedCerts"?: boolean, "replyTo"?: string };


}

