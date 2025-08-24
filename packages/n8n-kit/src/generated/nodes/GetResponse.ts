// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/GetResponse/GetResponse.node.ts' node

export const description = "Consume GetResponse API" as const;
export const type = "n8n-nodes-base.getResponse" as const;
export const version = 1 as const;
export const credentials = [{"name":"getResponseApi","required":true,"displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"getResponseOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GetResponseNodeParameters {
    /** Default: "apiKey" */
    readonly authentication?: "apiKey" | "oAuth2";

    /** Default: "contact" */
    readonly resource?: "contact";

    /** Default: "get" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    readonly email?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getCampaigns"}
     */
    readonly campaignId?: string;

    /** Default: {} */
    readonly additionalFields?: { "customFieldsUi"?: { "customFieldValues": any }, "dayOfCycle"?: string, "ipAddress"?: string, "name"?: string, "note"?: string, "scoring"?: number, "tags"?: any[] };

    /** ID of contact to delete */
    readonly contactId?: string;

    /** Default: {} */
    readonly options?: { "ipAddress"?: string, "messageId"?: string } | { "fields"?: string } | { "campaignId"?: string, "changeOnFrom"?: string, "changeOnTo"?: string, "createdOnFrom"?: string, "createdOnTo"?: string, "exactMatch"?: boolean, "fields"?: string, "name"?: string, "origin"?: "api" | "copy" | "email" | "forward" | "import" | "iphone" | "landing_page" | "leads" | "panel" | "sale" | "survey" | "webinar" | "www", "sortBy"?: "campaignId" | "changedOn" | "createdOn" | "email", "sortOrder"?: "ASC" | "DESC" };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 20
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly updateFields?: { "campaignId"?: string, "customFieldsUi"?: { "customFieldValues": any }, "dayOfCycle"?: string, "email"?: string, "ipAddress"?: string, "name"?: string, "note"?: string, "scoring"?: number, "tags"?: any[] };

}
