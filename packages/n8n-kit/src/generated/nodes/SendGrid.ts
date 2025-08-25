// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/SendGrid/SendGrid.node.ts' node

export const description = "Consume SendGrid API" as const;
export const type = "n8n-nodes-base.sendGrid" as const;
export const version = 1 as const;
export const credentials = [{"name":"sendGridApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SendGridNodeParameters {
    /** Default: "list" */
    readonly resource?: "contact" | "list" | "mail";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "upsert" | "delete" | "get" | "getAll" | "send";

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /** Name of the list */
    readonly name?: string;

    /** ID of the list */
    readonly listId?: string;

    /** Whether to delete all contacts on the list */
    readonly deleteContacts?: boolean;

    /** Whether to return the contact sample */
    readonly contactSample?: boolean;

    /** Default: {} */
    readonly filters?: { query?: string };

    /** Primary email for the contact */
    readonly email?: string;

    /** Default: {} */
    readonly additionalFields?: { addressUi?: { addressValues: { address1?: string, address2?: string } }, alternateEmails?: string, city?: string, country?: string, firstName?: string, lastName?: string, postalCode?: string, stateProvinceRegion?: string, listIdsUi?: { listIdValues: { listIds?: any[] } }, customFieldsUi?: { customFieldValues: { fieldId?: string, fieldValue?: string } } } | { attachments?: string, bccEmail?: string, categories?: string, ccEmail?: string, enableSandbox?: boolean, ipPoolName?: string, replyToEmail?: string, headers?: { details: { key?: string, value?: string } }, sendAt?: string };

    /** ID of the contact. Multiple can be added separated by comma. */
    readonly ids?: string;

    /** Whether all contacts will be deleted */
    readonly deleteAll?: boolean;

    /**
     * Search the user by ID or email
     * Default: "id"
     */
    readonly by?: "id" | "email";

    /** ID of the contact */
    readonly contactId?: string;

    /** Email address of the sender of the email */
    readonly fromEmail?: string;

    /** Name of the sender of the email */
    readonly fromName?: string;

    /** Comma-separated list of recipient email addresses */
    readonly toEmail?: string;

    /** Subject of the email to send */
    readonly subject?: string;

    /** Whether this email will contain a dynamic template */
    readonly dynamicTemplate?: boolean;

    /**
     * MIME type of the email to send
     * Default: "text/plain"
     */
    readonly contentType?: "text/plain" | "text/html";

    /** Message body of the email to send */
    readonly contentValue?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getTemplateIds"}
     */
    readonly templateId?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly dynamicTemplateFields?: { fields: { key?: string, value?: string } };

}
