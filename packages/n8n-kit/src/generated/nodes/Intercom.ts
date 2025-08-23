// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Intercom/Intercom.node.ts' node

export const name = "intercom" as const;
export const description = "Consume Intercom API" as const;
export const version = 1 as const;
export const credentials = [{"name":"intercomApi","required":true}] as const;

/**
 * Consume Intercom API
 */
export interface IntercomNodeParameters {

    /**
     * Default: "user"
     */
    readonly resource?: "company" | "lead" | "user";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "get" | "getAll" | "update" | "users";

    /**
     * The Intercom defined ID representing the Lead
     */
    readonly id?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":60}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "company_id"?: string, "email"?: string, "segment_id"?: string, "tag_id"?: string } | { "email"?: string, "phone"?: string } | { "segment_id"?: string, "tag_id"?: string };

    /**
     * The property to select the user by
     */
    readonly selectBy?: "id" | "userId" | "email" | "id" | "userId" | "phone" | "companyId" | "id" | "name";

    /**
     * View by value
     */
    readonly value?: string;

    /**
     * The property via which to query the user
     * Default: "id"
     */
    readonly updateBy?: "id" | "email" | "userId" | "userId" | "id";

    /**
     * Unique string identifier
     */
    readonly identifierType?: "userId" | "email";

    /**
     * Unique string identifier value
     */
    readonly idValue?: string;

    readonly jsonParameters?: boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "avatar"?: string, "companies"?: any[], "email"?: string, "name"?: string, "phone"?: string, "sessionCount"?: number, "userId"?: string, "unsubscribedFromEmails"?: boolean, "updateLastRequestAt"?: boolean, "utmCampaign"?: string, "utmContent"?: string, "utmMedium"?: string, "utmSource"?: string, "utmTerm"?: string } | { "avatar"?: string, "companies"?: any[], "email"?: string, "name"?: string, "phone"?: string, "unsubscribedFromEmails"?: boolean, "updateLastRequestAt"?: boolean, "utmCampaign"?: string, "utmContent"?: string, "utmMedium"?: string, "utmSource"?: string, "utmTerm"?: string } | { "industry"?: string, "monthlySpend"?: string, "name"?: string, "plan"?: string, "size"?: number, "website"?: string };

    /**
     * A hash of key/value pairs to represent custom data you want to attribute to a user
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly customAttributesJson?: string;

    /**
     * A hash of key/value pairs to represent custom data you want to attribute to a user
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly customAttributesUi?: { "customAttributesValues": any };

    readonly deleteBy?: "id" | "userId";

    /**
     * The email of the user
     */
    readonly email?: string;

    readonly listBy?: "id" | "companyId";

    /**
     * The company ID you have defined for the company
     */
    readonly companyId?: string;


}

