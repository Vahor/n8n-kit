// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Autopilot/Autopilot.node.ts' node

export const description = "Consume Autopilot API" as const;
export const type = "n8n-nodes-base.autopilot" as const;
export const version = 1 as const;
export const credentials = [{"name":"autopilotApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AutopilotNodeParameters {
    /** Default: "contact" */
    readonly resource?: "contact" | "contactJourney" | "contactList" | "list";

    /** Default: "upsert" */
    readonly operation?: "upsert" | "delete" | "get" | "getAll" | "add" | "add" | "exist" | "getAll" | "remove" | "create" | "getAll";

    /** Email address of the contact */
    readonly email?: string;

    /** Default: {} */
    readonly additionalFields?: { "Company"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "Fax"?: string, "FirstName"?: string, "Industry"?: string, "LastName"?: string, "LeadSource"?: string, "LinkedIn"?: string, "autopilotList"?: string, "MailingCountry"?: string, "MailingPostalCode"?: string, "MailingState"?: string, "MailingStreet"?: string, "MailingCity"?: string, "MobilePhone"?: string, "newEmail"?: string, "notify"?: boolean, "NumberOfEmployees"?: number, "owner_name"?: string, "Phone"?: string, "Salutation"?: string, "autopilotSessionId"?: string, "Status"?: string, "Title"?: string, "unsubscribed"?: boolean, "Website"?: string };

    /** Can be ID or email */
    readonly contactId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * List ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTriggers"}
     */
    readonly triggerId?: string;

    /**
     * ID of the list to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getLists"}
     */
    readonly listId?: string;

    /** Name of the list to create */
    readonly name?: string;

}
