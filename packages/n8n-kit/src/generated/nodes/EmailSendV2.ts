// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/EmailSend/v2/EmailSendV2.node.ts' node

export const description = "Sends an email using SMTP protocol" as const;
export const type = "n8n-nodes-base.emailSend" as const;
export const version = 2.1 as const;
export const credentials = [{"name":"smtp","required":true,"testedBy":"smtpConnectionTest"}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface EmailSendV2NodeParameters {
    /** Default: "send" */
    readonly operation?: "send" | "sendAndWait";

    /** Email address of the sender. You can also specify a name: Nathan Doe &lt;nate@n8n.io&gt;. */
    readonly fromEmail?: string;

    /** Email address of the recipient. You can also specify a name: Nathan Doe &lt;nate@n8n.io&gt;. */
    readonly toEmail?: string;

    /** Subject line of the email */
    readonly subject?: string;

    /** Default: "html" */
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

    /** Default: {} */
    readonly options?: { "appendAttribution"?: boolean, "attachments"?: string, "ccEmail"?: string, "bccEmail"?: string, "allowUnauthorizedCerts"?: boolean, "replyTo"?: string } | { "limitWaitTime"?: { "values": any }, "appendAttribution"?: boolean } | { "messageButtonLabel"?: string, "responseFormTitle"?: string, "responseFormDescription"?: string, "responseFormButtonLabel"?: string, "responseFormCustomCss"?: string, "limitWaitTime"?: { "values": any }, "appendAttribution"?: boolean };

    /** Type options: {"rows":4} */
    readonly message?: string;

    /** Default: "approval" */
    readonly responseType?: "approval" | "freeText" | "customForm";

    /** Default: "fields" */
    readonly defineForm?: "fields" | "json";

    /**
     * Default: "[\n   {\n      \"fieldLabel\":\"Name\",\n      \"placeholder\":\"enter you name\",\n      \"requiredField\":true\n   },\n   {\n      \"fieldLabel\":\"Age\",\n      \"fieldType\":\"number\",\n      \"placeholder\":\"enter your age\"\n   },\n   {\n      \"fieldLabel\":\"Email\",\n      \"fieldType\":\"email\",\n      \"requiredField\":true\n   }\n]"
     * Type options: {"rows":5}
     */
    readonly jsonOutput?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly formFields?: { "values": any };

    /** Default: {} */
    readonly approvalOptions?: { "values": any };

}
