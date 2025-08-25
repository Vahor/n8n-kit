// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Emelia/Emelia.node.ts' node

export const description = "Consume the Emelia API" as const;
export const type = "n8n-nodes-base.emelia" as const;
export const version = 1 as const;
export const credentials = [{"name":"emeliaApi","required":true,"testedBy":"emeliaApiTest"}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface EmeliaNodeParameters {
    /** Default: "campaign" */
    readonly resource?: "campaign" | "contactList";

    /** Default: "get" */
    readonly operation?: "addContact" | "create" | "duplicate" | "get" | "getAll" | "pause" | "start" | "add" | "getAll";

    /**
     * The ID of the campaign to add the contact to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getCampaigns"}
     */
    readonly campaignId?: string;

    /** The email of the contact to add to the campaign */
    readonly contactEmail?: string;

    /** Default: {} */
    readonly additionalFields?: { customFieldsUi?: { customFieldsValues: { fieldName?: string, value?: string } }, firstName?: string, lastContacted?: string, lastName?: string, lastOpen?: string, lastReplied?: string, mailsSent?: number, phoneNumber?: string };

    /** The name of the campaign to create */
    readonly campaignName?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly options?: { copyContacts?: boolean, copyProvider?: boolean, copyMails?: boolean, copySettings?: boolean };

    /**
     * The ID of the contact list to add the contact to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getContactLists"}
     */
    readonly contactListId?: string;

}
