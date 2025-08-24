// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Mautic/Mautic.node.ts' node

export const description = "Consume Mautic API" as const;
export const type = "n8n-nodes-base.mautic" as const;
export const version = 1 as const;
export const credentials = [{"name":"mauticApi","required":true,"displayOptions":{"show":{"authentication":["credentials"]}}},{"name":"mauticOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MauticNodeParameters {
    /** Default: "credentials" */
    readonly authentication?: "credentials" | "oAuth2";

    /** Default: "contact" */
    readonly resource?: "campaignContact" | "company" | "companyContact" | "contact" | "contactSegment" | "segmentEmail";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "editContactPoint" | "editDoNotContactList" | "get" | "getAll" | "sendEmail" | "update" | "add" | "remove" | "send";

    /** The name of the company to create */
    readonly name?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /** Default: {} */
    readonly additionalFields?: { "addressUi"?: { "addressValues": any }, "annualRevenue"?: number, "companyEmail"?: string, "customFieldsUi"?: { "customFieldValues": any }, "description"?: string, "fax"?: string, "industry"?: string, "isPublished"?: boolean, "numberOfEmpoyees"?: number, "overwriteWithBlank"?: boolean, "phone"?: string, "website"?: string } | { "orderByDir"?: "asc" | "desc", "orderBy"?: string, "search"?: string } | { "addressUi"?: { "addressValues": any }, "b2bOrb2c"?: "B2B" | "B2C", "crmId"?: string, "customFieldsUi"?: { "customFieldValues": any }, "fax"?: string, "hasPurchased"?: boolean, "ipAddress"?: string, "lastActive"?: string, "mobile"?: string, "ownerId"?: string, "phone"?: string, "prospectOrCustomer"?: "Prospect" | "Customer", "sandbox"?: boolean, "stage"?: string, "tags"?: any[], "socialMediaUi"?: { "socialMediaValues": any }, "website"?: string } | { "reason"?: "1" | "2" | "3", "comments"?: string };

    /** The ID of the company to update */
    readonly companyId?: string;

    /** Default: {} */
    readonly updateFields?: { "addressUi"?: { "addressValues": any }, "annualRevenue"?: number, "companyEmail"?: string, "name"?: string, "customFieldsUi"?: { "customFieldValues": any }, "description"?: string, "fax"?: string, "industry"?: string, "isPublished"?: boolean, "numberOfEmpoyees"?: number, "overwriteWithBlank"?: boolean, "phone"?: string, "website"?: string } | { "bodyJson"?: string, "addressUi"?: { "addressValues": any }, "b2bOrb2c"?: "B2B" | "B2C", "crmId"?: string, "customFieldsUi"?: { "customFieldValues": any }, "email"?: string, "fax"?: string, "firstName"?: string, "hasPurchased"?: boolean, "ipAddress"?: string, "lastActive"?: string, "lastName"?: string, "mobile"?: string, "ownerId"?: string, "phone"?: string, "position"?: string, "company"?: string, "prospectOrCustomer"?: "Prospect" | "Customer", "sandbox"?: boolean, "stage"?: string, "tags"?: any[], "title"?: string, "socialMediaUi"?: { "socialMediaValues": any }, "website"?: string };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 30
     * Type options: {"minValue":1,"maxValue":30}
     */
    readonly limit?: number;

    readonly jsonParameters?: boolean;

    /** Email address of the contact */
    readonly email?: string;

    readonly firstName?: string;

    readonly lastName?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getCompanies"}
     */
    readonly company?: string;

    readonly position?: string;

    readonly title?: string;

    /** Contact parameters */
    readonly bodyJson?: string;

    readonly contactId?: string;

    /** Default: "add" */
    readonly action?: "add" | "remove";

    /** Default: "email" */
    readonly channel?: "email" | "sms";

    readonly points?: number;

    /** Default: {} */
    readonly options?: { "search"?: string, "orderBy"?: string, "orderByDir"?: "asc" | "desc", "publishedOnly"?: boolean, "minimal"?: boolean, "rawData"?: boolean };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getCampaignEmails"}
     */
    readonly campaignEmailId?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getSegments"}
     */
    readonly segmentId?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getCampaigns"}
     */
    readonly campaignId?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getSegmentEmails"}
     */
    readonly segmentEmailId?: string;

}
