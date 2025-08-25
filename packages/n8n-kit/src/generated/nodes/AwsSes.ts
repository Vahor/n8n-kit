// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Aws/SES/AwsSes.node.ts' node

export const description = "Sends data to AWS SES" as const;
export const type = "n8n-nodes-base.awsSes" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AwsSesNodeParameters {
    /** Default: "email" */
    readonly resource?: "customVerificationEmail" | "email" | "template";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "send" | "update" | "send" | "sendTemplate" | "create" | "delete" | "get" | "getAll" | "update";

    /** The email address that the custom verification email is sent from */
    readonly fromEmailAddress?: string;

    /** The name of the custom verification email template */
    readonly templateName?: string;

    /** The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML */
    readonly templateContent?: string;

    /** The subject line of the custom verification email */
    readonly templateSubject?: string;

    /** The URL that the recipient of the verification email is sent to if his or her address is successfully verified */
    readonly successRedirectionURL?: string;

    /** The URL that the recipient of the verification email is sent to if his or her address is not successfully verified */
    readonly failureRedirectionURL?: string;

    /** The email address to verify */
    readonly email?: string;

    /** Default: {} */
    readonly additionalFields?: { configurationSetName?: string } | { bccAddresses?: string, ccAddresses?: string, configurationSetName?: string, replyToAddresses?: string, returnPath?: string, returnPathArn?: string, sourceArn?: string } | { textPart?: string };

    /** Default: {} */
    readonly updateFields?: { failureRedirectionURL?: string, fromEmailAddress?: string, successRedirectionURL?: string, templateContent?: string, templateSubject?: string } | { textPart?: string, subjectPart?: string, htmlPart?: string };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 20
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Whether body is HTML or simple text */
    readonly isBodyHtml?: boolean;

    readonly subject?: string;

    /** The message to be sent */
    readonly body?: string;

    /** Email address of the sender */
    readonly fromEmail?: string;

    /**
     * Email addresses of the recipients
     * Default: []
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add To Email"}
     */
    readonly toAddresses?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly templateDataUi?: { templateDataValues: Array<{ key?: string, value?: string }> };

    /** The subject line of the email */
    readonly subjectPart?: string;

    /** The HTML body of the email */
    readonly htmlPart?: string;

}
