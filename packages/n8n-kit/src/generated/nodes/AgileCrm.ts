// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/AgileCrm/AgileCrm.node.ts' node

export const description = "Consume Agile CRM API" as const;
export const type = "n8n-nodes-base.agileCrm" as const;
export const version = 1 as const;
export const credentials = [{"name":"agileCrmApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AgileCrmNodeParameters {
    /** Default: "contact" */
    readonly resource?: "company" | "contact" | "deal";

    /** Default: "get" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /** Unique identifier for a particular contact */
    readonly contactId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 20
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Default: "none" */
    readonly filterType?: "none" | "manual" | "json";

    /** Default: "anyFilter" */
    readonly matchType?: "anyFilter" | "allFilters";

    /** Whether to return a simplified version of the response instead of the raw data */
    readonly simple?: boolean;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly filters?: { "conditions": any };

    readonly filterJson?: string;

    /** Default: {} */
    readonly options?: { "sort"?: { "sort": any } };

    readonly jsonParameters?: boolean;

    /**
     * Object of values to set as described <a href="https://github.com/agilecrm/rest-api#1-contacts---companies-api">here</a>
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly additionalFieldsJson?: string;

    /** Default: {} */
    readonly additionalFields?: { "addressOptions"?: { "addressProperties": any }, "company"?: string, "emailOptions"?: { "emailProperties": any }, "firstName"?: string, "lastName"?: string, "leadScore"?: number, "starValue"?: "0" | "1" | "2" | "3" | "4" | "5", "phoneOptions"?: { "phoneProperties": any }, "tags"?: string, "title"?: string, "websiteOptions"?: { "websiteProperties": any }, "customProperties"?: { "customProperty": any } } | { "addressOptions"?: { "addressProperties": any }, "email"?: string, "name"?: string, "phone"?: string, "starValue"?: "0" | "1" | "2" | "3" | "4" | "5", "tags"?: string, "websiteOptions"?: { "websiteProperties": any }, "customProperties"?: { "customProperty": any } } | { "addressOptions"?: { "addressProperties": any }, "email"?: string, "starValue"?: "0" | "1" | "2" | "3" | "4" | "5", "tags"?: string, "name"?: string, "phone"?: string, "websiteOptions"?: { "websiteProperties": any }, "customProperties"?: { "customProperty": any } } | { "contactIds"?: string, "customData"?: { "customProperty": any } } | { "expectedValue"?: number, "name"?: string, "probability"?: number, "contactIds"?: string, "customData"?: { "customProperty": any } };

    /** Unique identifier for a particular company */
    readonly companyId?: string;

    /** Unique identifier for a particular deal */
    readonly dealId?: string;

    /** Closing date of deal */
    readonly closeDate?: string;

    /**
     * Expected Value of deal
     * Default: 1
     * Type options: {"minValue":0,"maxValue":1000000000000}
     */
    readonly expectedValue?: number;

    /** Milestone of deal */
    readonly milestone?: string;

    /** Name of deal */
    readonly name?: string;

    /**
     * Expected probability
     * Default: 50
     * Type options: {"minValue":0,"maxValue":100}
     */
    readonly probability?: number;

}
