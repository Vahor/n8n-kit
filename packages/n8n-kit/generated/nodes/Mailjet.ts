// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Mailjet/Mailjet.node.ts' node

export const name = "mailjet" as const;
export const description = "Consume Mailjet API" as const;
export const version = 1 as const;

/**
 * Consume Mailjet API
 */
export interface MailjetNodeParameters {

    /**
     * Default: "email"
     */
    readonly resource?: "email" | "sms";

    /**
     * Default: "send"
     */
    readonly operation?: "send" | "sendTemplate" | "send";

    /**
     * The title for the email
     */
    readonly fromEmail?: string | string;

    /**
     * Email address of the recipient. Multiple ones can be separated by comma.
     */
    readonly toEmail?: string | string;

    /**
     * Subject line of the email
     */
    readonly subject?: string;

    /**
     * Plain text message of email
     */
    readonly text?: string | string;

    /**
     * HTML text message of email
     */
    readonly html?: string;

    /**
     */
    readonly jsonParameters?: boolean | boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "bccEmail"?: string, "ccAddresses"?: string, "fromName"?: string, "priority"?: number, "replyTo"?: string, "templateLanguage"?: boolean, "trackClicks"?: "account_default" | "disabled" | "enabled", "trackOpens"?: "account_default" | "disabled" | "enabled" } | { "bccEmail"?: string, "ccEmail"?: string, "fromName"?: string, "priority"?: number, "replyTo"?: string, "subject"?: string, "templateLanguage"?: boolean, "trackClicks"?: string, "trackOpens"?: string };

    /**
     * HTML text message of email
     */
    readonly variablesJson?: string | string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly variablesUi?: { "variablesValues": any } | { "variablesValues": any };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTemplates"}
     */
    readonly templateId?: string;

    /**
     * Customizable sender name. Should be between 3 and 11 characters in length, only alphanumeric characters are allowed.
     */
    readonly from?: string;

    /**
     * Message recipient. Should be between 3 and 15 characters in length. The number always starts with a plus sign followed by a country code, followed by the number. Phone numbers are expected to comply with the E.164 format.
     */
    readonly to?: string;


}

