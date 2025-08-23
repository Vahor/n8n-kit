// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/Dynamics/MicrosoftDynamicsCrm.node.ts' node

export const description = "Consume Microsoft Dynamics CRM API" as const;
export const type = "n8n-nodes-base.microsoftDynamicsCrm" as const;
export const version = 1 as const;
export const credentials = [{"name":"microsoftDynamicsOAuth2Api","required":true}] as const;

/**
 * Consume Microsoft Dynamics CRM API
 */
export interface MicrosoftDynamicsCrmNodeParameters {

    /**
     * Default: "account"
     */
    readonly resource?: "account";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Company or business name
     */
    readonly name?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "accountcategorycode"?: string, "accountratingcode"?: string, "addresses"?: { "address": any }, "businesstypecode"?: string, "customersizecode"?: string, "customertypecode"?: string, "description"?: string, "emailaddress1"?: string, "emailaddress2"?: string, "emailaddress3"?: string, "fax"?: string, "ftpsiteurl"?: string, "industrycode"?: string, "name"?: string, "creditlimit"?: number, "numberofemployees"?: number, "paymenttermscode"?: string, "preferredappointmentdaycode"?: string, "preferredappointmenttimecode"?: string, "preferredcontactmethodcode"?: string, "primarysatoriid"?: string, "primarytwitterid"?: string, "revenue"?: number, "sharesoutstanding"?: number, "shippingmethodcode"?: string, "sic"?: string, "stageid"?: string, "stockexchange"?: string, "telephone1"?: string, "telephone2"?: string, "telephone3"?: string, "territorycode"?: string, "tickersymbol"?: string, "websiteurl"?: string, "yominame"?: string };

    readonly accountId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 5
     * Type options: {"minValue":1,"maxValue":10}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly options?: { "returnFields"?: any[], "expandFields"?: any[] } | { "returnFields"?: any[] };

    /**
     * Default: {}
     */
    readonly filters?: { "query"?: string };

    /**
     * Default: {}
     */
    readonly updateFields?: { "accountcategorycode"?: string, "accountratingcode"?: string, "addresses"?: { "address": any }, "businesstypecode"?: string, "customersizecode"?: string, "customertypecode"?: string, "description"?: string, "emailaddress1"?: string, "emailaddress2"?: string, "emailaddress3"?: string, "fax"?: string, "ftpsiteurl"?: string, "industrycode"?: string, "name"?: string, "creditlimit"?: number, "numberofemployees"?: number, "paymenttermscode"?: string, "preferredappointmentdaycode"?: string, "preferredappointmenttimecode"?: string, "preferredcontactmethodcode"?: string, "primarysatoriid"?: string, "primarytwitterid"?: string, "revenue"?: number, "sharesoutstanding"?: number, "shippingmethodcode"?: string, "sic"?: string, "stageid"?: string, "stockexchange"?: string, "telephone1"?: string, "telephone2"?: string, "telephone3"?: string, "territorycode"?: string, "tickersymbol"?: string, "websiteurl"?: string, "yominame"?: string };


}

