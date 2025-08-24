// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Salesmate/Salesmate.node.ts' node

export const description = "Consume Salesmate API" as const;
export const type = "n8n-nodes-base.salesmate" as const;
export const version = 1 as const;
export const credentials = [{"name":"salesmateApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SalesmateNodeParameters {
    /** Default: "activity" */
    readonly resource?: "activity" | "company" | "deal";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    readonly name?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getUsers"}
     */
    readonly owner?: string;

    /** Whether the data should include the fields details */
    readonly rawData?: boolean;

    /** Default: {} */
    readonly additionalFields?: { "website"?: string, "phone"?: string, "otherPhone"?: string, "facebookHandle"?: string, "googlePlusHandle"?: string, "linkedInHandle"?: string, "skypeId"?: string, "twitterHandle"?: string, "currency"?: string, "billingAddressLine1"?: string, "billingAddressLine2"?: string, "billingCity"?: string, "billingZipCode"?: string, "billingState"?: string, "description"?: string, "tags"?: string } | { "description"?: string, "tags"?: string, "dueDate"?: string, "duration"?: number, "isCalendarInvite"?: boolean, "isCompleted"?: boolean } | { "description"?: string, "tags"?: string, "primaryCompany"?: string, "source"?: "Ads" | "Referrals" | "Website" | "Word of mouth", "estimatedCloseDate"?: string, "dealValue"?: number, "priority"?: "High" | "Medium" | "Low" };

    readonly id?: string;

    /** Default: {} */
    readonly updateFields?: { "name"?: string, "owner"?: string, "website"?: string, "phone"?: string, "otherPhone"?: string, "facebookHandle"?: string, "googlePlusHandle"?: string, "linkedInHandle"?: string, "skypeId"?: string, "twitterHandle"?: string, "currency"?: string, "billingAddressLine1"?: string, "billingAddressLine2"?: string, "billingCity"?: string, "billingZipCode"?: string, "billingState"?: string, "description"?: string, "tags"?: string } | { "title"?: string, "type"?: string, "owner"?: string, "description"?: string, "tags"?: string, "dueDate"?: string, "duration"?: number, "isCalendarInvite"?: boolean, "isCompleted"?: boolean } | { "title"?: string, "owner"?: string, "primaryContact"?: string, "pipeline"?: "Sales", "status"?: "Open" | "Close" | "Lost", "stage"?: "Contacted" | "In Negotiation" | "New (Untouched)" | "Proposal Presented" | "Qualified", "currency"?: string, "description"?: string, "tags"?: string, "primaryCompany"?: string, "source"?: "Ads" | "Referrals" | "Website" | "Word of mouth", "estimatedCloseDate"?: string, "dealValue"?: number, "priority"?: "High" | "Medium" | "Low" };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 10
     * Type options: {"minValue":1,"maxValue":25}
     */
    readonly limit?: number;

    readonly jsonParameters?: boolean;

    /** Default: {} */
    readonly options?: { "fields"?: string, "sortBy"?: string, "sortOrder"?: "asc" | "desc" };

    /** Type options: {"alwaysOpenEditWindow":true} */
    readonly filtersJson?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly filters?: { "filtersUi": any };

    readonly title?: string;

    /** This field displays activity type such as call, meeting etc */
    readonly type?: string;

    /**
     * Primary contact for the deal. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getContacts"}
     */
    readonly primaryContact?: string;

    readonly pipeline?: "Sales";

    /** Default: "Open" */
    readonly status?: "Open" | "Close" | "Lost";

    readonly stage?: "New (Untouched)" | "Contacted" | "Qualified" | "In Negotiation" | "Proposal Presented";

    readonly currency?: string;

}
