// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Emelia/Emelia.node.ts' node

export const name = "emelia" as const;
export const description = "Consume the Emelia API" as const;
export const version = 1 as const;

/**
 * Consume the Emelia API
 */
export interface EmeliaNodeParameters {

    /**
     * Default: "campaign"
     */
    readonly resource: "campaign" | "contactList";

    /**
     * Default: "get"
     */
    readonly operation?: "addContact" | "create" | "duplicate" | "get" | "getAll" | "pause" | "start" | "add" | "getAll";

    /**
     * The ID of the campaign to add the contact to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getCampaigns"}
     */
    readonly campaignId?: string | string | string | string | string;

    /**
     * The email of the contact to add to the campaign
     */
    readonly contactEmail?: string | string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "customFieldsUi"?: { "customFieldsValues": any }, "firstName"?: string, "lastContacted"?: string, "lastName"?: string, "lastOpen"?: string, "lastReplied"?: string, "mailsSent"?: number, "phoneNumber"?: string } | { "customFieldsUi"?: { "customFieldsValues": any }, "firstName"?: string, "lastContacted"?: string, "lastName"?: string, "lastOpen"?: string, "lastReplied"?: string, "mailsSent"?: number, "phoneNumber"?: string };

    /**
     * The name of the campaign to create
     */
    readonly campaignName?: string | string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean | boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number | number;

    /**
     * Default: {}
     */
    readonly options?: { "copyContacts"?: boolean, "copyProvider"?: boolean, "copyMails"?: boolean, "copySettings"?: boolean };

    /**
     * The ID of the contact list to add the contact to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getContactLists"}
     */
    readonly contactListId?: string;


}

